
// 
// CONFIG
//

var region = 'us-east-1';
var identityPoolId = 'us-east-1:20701a07-93a0-422b-b716-9b603f046851';
var clientId = 'amzn1.application-oa2-client.9bd2fa783c5241eba056c88923158d53';
var user = {
	clusters: []
};
var ecs;

//
// DATA
//

function fetchData () {
	user.fetching = true;
	ecs.listClusters({}, function (err, data) {
		user.fetching = false;
		if (err) {
			console.error(err);
			return;
		}
		user.clusterArns = data.clusterArns;
		// console.debug(1, user)

		user.fetching = true;
		ecs.describeClusters({
			clusters: data.clusterArns
		}, function (err, data) {
			user.fetching = false;

			// TODO merge instead of replace so we can poll for updates
			// user.clusters.forEach(function (c1, i) {
			// 	data.clusters.forEach(function (c2) {
			// 		var add = true;
			// 		var rem = true;
			// 		if (c1.clusterName === c2.clusterName) {
			// 			add = false;
			// 		}
			// 		if (c1.clusterName !== c2.clusterName) {
			// 			rem = false;
			// 		}
			// 		if (add) {
			// 			user.clusters.push(c2);
			// 		}
			// 		if (rem) {
			// 			user.clusters = user.clusters.splice(i, 1);
			// 		}
			// 	});
			// });
			user.clusters = data.clusters;
			// console.debug(2, user)

			user.clusters.forEach(function (cluster, i) {
				user.fetching = true;
				ecs.listContainerInstances({
					cluster: cluster.clusterName
				}, function (err, data) {
					user.fetching = false;
					user.clusters[i].containerInstanceArns = data.containerInstanceArns;

					if (data.containerInstanceArns.length > 0) {
						user.fetching = true;
						ecs.describeContainerInstances({
							cluster: cluster.clusterName,
							containerInstances: data.containerInstanceArns
						}, function (err, data) {
							user.fetching = false;
							user.clusters[i].containerInstances = data.containerInstances;
						});
					}
				});

				user.fetching = true;
				ecs.listTasks({
					cluster: cluster.clusterName
				}, function (err, data) {
					user.fetching = false;
					user.clusters[i].taskArns = data.taskArns;
					// console.debug(3, cluster.clusterName, user)

					if (data.taskArns.length > 0) {
						user.fetching = true;
						ecs.describeTasks({
							cluster: cluster.clusterName,
							tasks: data.taskArns
						}, function (err, data) {
							user.fetching = false;
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

function onLogin (access_token) {
	AWS.config.region = region;
	AWS.config.sslEnabled = true;
	// AWS.config.logger = console;

	AWS.config.credentials = new AWS.CognitoIdentityCredentials({
		IdentityPoolId: identityPoolId,
		Logins: {
			'www.amazon.com': access_token
		}
	});
	
	ecs = new AWS.ECS();

	fetchData();

	// setTimeout(function () {
	// 	fetchData();
	// }, 1000 * 15); // 15 sec
}


//
// AUTH
//

function retrieveProfile (access_token) {
	amazon.Login.retrieveProfile(access_token, function(response) {
		if (response.error) {
			console.error(response.error);
			localStorage.setItem('amazon_oauth_access_token', undefined);
			return;
		}
		user.profile = response.profile;
		// console.debug('p', user)
		onLogin(access_token);
	});	
}
window.onAmazonLoginReady = function() {
	amazon.Login.setClientId(clientId);
	var access_token = localStorage.getItem('amazon_oauth_access_token');
	if (access_token) {
		retrieveProfile(access_token);
	}
};

//
// APP
//

var ContainerInstanceComponent = React.createClass({
  componentDidMount: function () {
  	console.debug('containerInstance.props', this.props)
	var self = this;
	(new ObjectObserver(this.props.containerInstance)).open(function(changes) {
		self.forceUpdate();
	});
  },

  render: function() {
  	console.debug('containerInstance.props', this.props)
  	var remainingResources = this.props.containerInstance.remainingResources.map(function (res) {
  		return <p>{res.name}: {res.integerValue || res.doubleValue || res.longValue || res.stringSetValue.join(', ') }</p>
  	});
  	var registeredResources = this.props.containerInstance.registeredResources.map(function (res) {
  		return <p>{res.name}: {res.integerValue || res.doubleValue || res.longValue || res.stringSetValue.join(', ') }</p>
  	});
    return (
        <div className="container-instance">
        	<h3>ContainerInstance</h3>
        	<ul>
        		<li>containerInstanceArn: {this.props.containerInstance.containerInstanceArn}</li>
        		<li>agentConnected: {this.props.containerInstance.agentConnected}</li>
        		<li>ec2InstanceId: {this.props.containerInstance.ec2InstanceId}</li>
        		<li>status: {this.props.containerInstance.status}</li>

        		<li>Registered: {registeredResources}</li>
        		<li>Remaining: {remainingResources}</li>
        	</ul>
        </div>
    );
  }
});

var TaskComponent = React.createClass({
  componentDidMount: function () {
	var self = this;
	(new ObjectObserver(this.props.task)).open(function(changes) {
		self.forceUpdate();
	});
  },

  render: function() {
    return (
        <div className="task">
        	<h3>Task</h3>
        	<ul>
        		<li>taskDefinitionArn: {this.props.task.taskDefinitionArn}</li>
        		<li>containerInstanceArn: {this.props.task.containerInstanceArn}</li>
        		<li>desiredStatus: {this.props.task.desiredStatus}</li>
        		<li>lastStatus: {this.props.task.lastStatus}</li>

        		<li>Containers: {this.props.task.containers.map(function (o) { return o.name } )}</li>
        		<li>Overrides: {this.props.task.overrides.containerOverrides.map(function (o) { return o.name} )}</li>
        		
        	</ul>
        </div>
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
  	console.debug('cluster.props', this.props.cluster);
  	var tasks = [];
	// console.log('tasks', this.props.cluster)
  	if (this.props.cluster.tasks) {
  	  	tasks = this.props.cluster.tasks.map(function (task) {
  	  		return <TaskComponent task={task}></TaskComponent>
  	  	});
  	}
  	var containerInstances = [];
  	if (this.props.cluster.containerInstances) {
  	  	containerInstances = this.props.cluster.containerInstances.map(function (containerInstance) {
  	  		return <ContainerInstanceComponent containerInstance={containerInstance}></ContainerInstanceComponent>
  	  	});
  	}
    return (
    	<div className="cluster">
			<h2>Cluster: { this.props.cluster.clusterName }</h2>
			{ tasks }
			{ containerInstances }
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
  	console.debug('log in');
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
  	console.debug('log out');
  	amazon.Login.logout();
  	user = {};
  	localStorage.setItem('amazon_oauth_access_token', undefined);
  	return false;
  },

  render: function() {
  	console.debug('user.props', this.props.user);
	var clusters = [];
	if (this.props.user.profile && this.props.user.clusters) {
		clusters = this.props.user.clusters.map(function (cluster) {
			return <ClusterComponent cluster={cluster}></ClusterComponent>
		});
	}
    return (
    	<div className="user">
			<p>
				{ this.props.user.fetching ? <p>Loading...</p> : null }
	    		{ !this.props.user.profile ?
					<a href="#" id="LoginWithAmazon" onClick={this.loginClick}>
					  <img border="0" alt="Login with Amazon"
					    src="https://images-na.ssl-images-amazon.com/images/G/01/lwa/btnLWA_gold_156x32.png"
					    width="156" height="32" />
					</a>
					: 
					<a href="#" id="Logout" onClick={this.logoutClick}>Logout</a>
				}
			</p>

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
