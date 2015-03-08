
// 
// CONFIG
//

var region = 'us-east-1';
var identityPoolId = 'us-east-1:20701a07-93a0-422b-b716-9b603f046851';
var user = {};

//
// DATA
//

function onLogin (access_token) {
	AWS.config.region = region;
	AWS.config.sslEnabled = true;
	AWS.config.logger = console;

	AWS.config.credentials = new AWS.CognitoIdentityCredentials({
		IdentityPoolId: identityPoolId,
		Logins: {
			'www.amazon.com': access_token
		}
	});

	var ecs = new AWS.ECS();

	ecs.listClusters({}, function (err, data) {
		if (err) {
			console.error(err);
			return;
		}
		user.clusterArns = data.clusterArns;
		// console.debug(1, user)

		ecs.describeClusters({
			clusters: data.clusterArns
		}, function (err, data) {
			user.clusters = data.clusters;
			// console.debug(2, user)

			user.clusters.forEach(function (cluster, i) {
				ecs.listTasks({
					cluster: cluster.clusterName
				}, function (err, data) {
					user.clusters[i].taskArns = data.taskArns;
					// cluster.taskArns = data.taskArns;
					// console.debug(3, cluster.clusterName, user)

					if (data.taskArns.length > 0) {
						ecs.describeTasks({
							cluster: cluster.clusterName,
							tasks: data.taskArns
						}, function (err, data) {
							user.clusters[i].tasks = data.tasks;
							// console.debug(4, cluster.clusterName, user)
						});
					}
				});
			});
		});
	});

	// console.debug('u', user)

	// setInterval(function () {
	// 	console.debug('i', user)
	// }, 5000)
}


//
// AUTH
//

function retrieveProfile (access_token) {
	amazon.Login.retrieveProfile(access_token, function(response) {
		if (response.error) {
			console.error(response.error);
			localStorage.setItem('amazon_oauth_access_token', null);
			return;
		}
		user.profile = response.profile;
		// console.debug('p', user)
		onLogin(access_token);
	});	
}
window.onAmazonLoginReady = function() {
	amazon.Login.setClientId('amzn1.application-oa2-client.9bd2fa783c5241eba056c88923158d53');
	var access_token = localStorage.getItem('amazon_oauth_access_token');
	if (access_token) {
		retrieveProfile(access_token);
	}
};

//
// APP
//

var TaskComponent = React.createClass({
  componentDidMount: function () {
	var self = this;
	(new ObjectObserver(this.props.task)).open(function(changes) {
		self.forceUpdate();
	});
  },

  render: function() {
    return (
        <div className="task">Task: { this.props.task.taskDefinitionArn + ': ' + this.props.task.lastStatus }</div>
    );
  }
});

var ClusterComponent = React.createClass({
  componentDidMount: function () {
	var self = this;
	(new ObjectObserver(this.props.cluster)).open(function(changes) {
		self.forceUpdate();
	});
  },

  render: function() {
  	var tasks = [];
	// console.log('tasks', this.props.cluster)
  	if (this.props.cluster.tasks) {
  	  	tasks = this.props.cluster.tasks.map(function (task) {
  	  		return <TaskComponent task={task}></TaskComponent>
  	  	});
  	}
    return (
    	<div className="cluster">
			<h2>Cluster: { this.props.cluster.clusterName }</h2>
			{ tasks }
		</div>
    );
  }
});

var UserComponent = React.createClass({
  componentDidMount: function () {
	var self = this;
	(new ObjectObserver(this.props.user)).open(function(changes) {
		self.forceUpdate();
	});
  },

  loginClick: function () {
	options = { scope : 'profile' };
	amazon.Login.authorize(options,  function(response) {
		if (response.error) {
			console.error(response.error);
			return;
		}
		localStorage.setItem('amazon_oauth_access_token', response.access_token);
		retrieveProfile(response.access_token);
	});
	return false;
  },

  logoutClick: function () {
  	amazon.Login.logout();
  	user = {};
  	return false;
  },

  render: function() {
	var clusters = [];
	if (this.props.user.profile && this.props.user.clusters) {
		clusters = this.props.user.clusters.map(function (cluster) {
			return <ClusterComponent cluster={cluster}></ClusterComponent>
		});
	}
    return (
    	<div className="user">
    		{ !this.props.user.profile ?
				<a href="#" id="LoginWithAmazon" onClick={this.loginClick}>
				  <img border="0" alt="Login with Amazon"
				    src="https://images-na.ssl-images-amazon.com/images/G/01/lwa/btnLWA_gold_156x32.png"
				    width="156" height="32" />
				</a>
				: 
				<p><a href="#" id="Logout" onClick={this.logoutClick}>Logout</a></p>
			}

	    	{ this.props.user.profile ? <h1>User: {this.props.user.profile.Name}</h1> : null }
	    	{ clusters }
        </div>
    );
  }
});

React.render(
	<UserComponent user={user}></UserComponent>,
	document.getElementById('App')
);
