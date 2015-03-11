
'use strict';

var AWS = require('aws-sdk');
var React = require('react');
var ObserveJs = require('observe-js');

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
	ecs.listTaskDefinitionFamilies({}, function (err, data) {
		user.fetching = false;
		if (err) {
			console.error(err);
			return;
		}
		user.families = data.families;

		user.families.forEach(function (family, i) {
			var familyName = family;
			user.families[i] = {
				name: familyName
			};

			if (user.families) {
				user.fetching = true;
				ecs.listTaskDefinitions({
					familyPrefix: family
				}, function (err, data) {
					user.fetching = false;
					if (err) {
						console.error(err);
						return;
					}
					user.families[i].taskDefinitionArns = data.taskDefinitionArns;

					user.families[i].taskDefinitionArns.forEach(function (taskDefinition, i2) {
						var taskDefinitionName = taskDefinition;
						user.families[i].taskDefinitionArns[i2] = {
							name: taskDefinitionName
						};

						user.fetching = true;
						ecs.describeTaskDefinition({
							taskDefinition: taskDefinition
						}, function (err, data) {
							user.fetching = false;
							user.families[i].taskDefinitionArns[i2].taskDefinition = data.taskDefinition;
						})
					});
				})
			}
		});
	});

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
			localStorage.removeItem('amazon_oauth_access_token');
			// window.onAmazonLoginReady();
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
	let self = this;
	(new ObserveJs.ObjectObserver(this.props.containerInstance)).open(function(changes) {
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
        		<li>Container Instance: {this.props.containerInstance.containerInstanceArn}</li>
        		<li>Agent Connected: {this.props.containerInstance.agentConnected ? 'yes' : 'no'}</li>
        		<li>EC2 Instance Id: {this.props.containerInstance.ec2InstanceId}</li>
        		<li>Status: {this.props.containerInstance.status}</li>

        		<li>Registered: {registeredResources}</li>
        		<li>Remaining: {remainingResources}</li>
        	</ul>
        </div>
    );
  }
});

var TaskComponent = React.createClass({
  componentDidMount: function () {
	let self = this;
	(new ObserveJs.ObjectObserver(this.props.task)).open(function(changes) {
		self.forceUpdate();
	});
  },

  stopTask: function () {
  	if (confirm('Are you sure?')) {
	  	ecs.stopTask({
	  		task: this.props.task.taskDefinitionArn,
	  		cluster: this.props.cluster.clusterName
	  	}, function (err, data) {
			if(!err && confirm('Task stopped. Refresh the page?')) {
				window.location.reload();
			}
	  	});
  	}
  },

  runTask: function () {
  	var count = prompt('The number of instances of the specified task that you would like to place on your cluster.');
  	ecs.runTask({
  		task: this.props.task.taskDefinitionArn,
  		cluster: this.props.cluster.clusterName,
  		count: count || 1
  	}, function (err, data) {
		if(!err && confirm('Task started. Refresh the page?')) {
			window.location.reload();
		}
  	});
  },

  render: function() {
  	console.debug('task.props', this.props.task);
    return (
        <div className="task">
        	<h3>Task</h3>
        	<p><a href="#" onClick={this.runTask}>Run Task</a> | { this.props.task.lastStatus === 'RUNNING' ? <a href="#" onClick={this.startTask}>Stop Task</a> : null }</p>
        	<ul>
        		<li>Task Definition: {this.props.task.taskDefinitionArn}</li>
        		<li>Container Instance: {this.props.task.containerInstanceArn}</li>
        		<li>Desired Status: {this.props.task.desiredStatus}</li>
        		<li>Last Status: {this.props.task.lastStatus}</li>

        		<li>Containers: {this.props.task.containers.map(function (o) { return o.name } )}</li>
        		<li>Overrides: {this.props.task.overrides.containerOverrides.map(function (o) { return o.name} )}</li>
        	</ul>
        </div>
    );
  }
});

var FamilyComponent = React.createClass({
	componentDidMount: function () {
		let self = this;
		(new ObserveJs.ObjectObserver(this.props.family)).open(function(changes) {
			self.forceUpdate();
		});
	},

	render: function() {
		console.debug('family.props', this.props.family);
		var self = this, taskDefinitions = [];
		if (this.props.family && this.props.family.taskDefinitionArns) {
			taskDefinitions = this.props.family.taskDefinitionArns.map(function (taskDefinitionArn) {
				console.log('taskDefinitionArn.taskDefinition', taskDefinitionArn)
				if (taskDefinitionArn.taskDefinition) {
					return <TaskDefinitionComponent taskDefinition={taskDefinitionArn.taskDefinition}></TaskDefinitionComponent>
				} else {
					(new ObserveJs.ObjectObserver(taskDefinitionArn)).open(function(changes) {
						self.forceUpdate();
					});
				}
			});
		}
		return (
			<div>
				<h2>Family: {this.props.family.name}</h2>
				{ taskDefinitions }
			</div>
		);
	}
});

var ContainerDefinitionComponent = React.createClass({
	componentDidMount: function () {
		let self = this;
		(new ObserveJs.ObjectObserver(this.props.containerDefinition)).open(function(changes) {
			self.forceUpdate();
		});
	},

	render: function() {
	  	console.debug('containerDefinition.props', this.props.containerDefinition);
		return (
			<ul>
				<li>CPU: {this.props.containerDefinition.cpu}</li>
				<li>Environment: {this.props.containerDefinition.environment.join(', ')}</li>
				<li>Essential: {this.props.containerDefinition.essential ? 'yes' : 'no'}</li>
				<li>Image: {this.props.containerDefinition.image}</li>
				<li>CPU: {this.props.containerDefinition.cpu}</li>
				<li>Memory: {this.props.containerDefinition.memory}</li>
				<li>Name: {this.props.containerDefinition.name}</li>
				<li>Mount Points: {this.props.containerDefinition.mountPoints.join(', ')}</li>
				<li>Port Mappings: {this.props.containerDefinition.portMappings.join(', ')}</li>
				<li>Volumes From: {this.props.containerDefinition.volumesFrom.join(', ')}</li>
			</ul>
		);
	}
});

var TaskDefinitionComponent = React.createClass({
	componentDidMount: function () {
		let self = this;
		(new ObserveJs.ObjectObserver(this.props.taskDefinition)).open(function(changes) {
			self.forceUpdate();
		});
	},

	render: function() {
	  	console.debug('taskDefinition.props', this.props.taskDefinition);

		var containerDefinitions = [];
		if (this.props.taskDefinition.containerDefinitions) {
			this.props.taskDefinition.containerDefinitions.map(function (containerDefinition) {
				return <ContainerDefinitionComponent containerDefinition={containerDefinition}></ContainerDefinitionComponent>
			});
		}
		return (
			<div>
				<h2>TaskDefinition</h2>
				<ul>
					<li>Task Definition: {this.props.taskDefinition.taskDefinitionArn}</li>
					<li>Revision: {this.props.taskDefinition.revision}</li>
					<li>Family: {this.props.taskDefinition.family}</li>

					<li>Volumes: {this.props.taskDefinition.volumes.join(', ')}</li>
					<li>Container Definitions: {containerDefinitions}</li>
				</ul>
			</div>
		);
	}
});

var ClusterComponent = React.createClass({
  componentDidMount: function () {
	let self = this;
	(new ObserveJs.ObjectObserver(this.props.cluster)).open(function(changes) {
		self.forceUpdate();
	});
  },

  deleteCluster: function () {
  	if (confirm('Deleting cluster ' + this.props.cluster.clusterName + '. Are you sure?')) {
	  	ecs.deleteCluster({
	  		clusterName: this.props.cluster.clusterName
	  	}, function (err, data) {
	  		if (err) {
	  			console.error(err);
	  			return;
	  		}
			if (confirm('Cluster deleted. Refresh the page?')) {
				window.location.reload();
			}
	  	});
  	}
  },

  render: function() {
  	console.debug('cluster.props', this.props.cluster);
  	var self = this, tasks = [];
	// console.log('tasks', this.props.cluster)

  	if (this.props.cluster && this.props.cluster.tasks) {
  	  	tasks = this.props.cluster.tasks.map(function (task) {
  	  		return <TaskComponent task={task} cluster={self.props.cluster}></TaskComponent>
  	  	});
  	}

  	var containerInstances = [];
  	if (this.props.cluster && this.props.cluster.containerInstances) {
  	  	containerInstances = this.props.cluster.containerInstances.map(function (containerInstance) {
  	  		return <ContainerInstanceComponent containerInstance={containerInstance} cluster={self.props.cluster}></ContainerInstanceComponent>
  	  	});
  	}

    return (
    	<div className="cluster">
			<h2>Cluster: { this.props.cluster.clusterName } { this.props.cluster.status }</h2>
			{ tasks }
			{ containerInstances }
			<a href="#" onClick={this.deleteCluster}>Delete cluster</a>
		</div>
    );
  }
});

var UserComponent = React.createClass({

  getInitialState: function () {
    return {
    	registerTaskModal: false,
    	registerTaskText: ''
    };
  },

  componentDidMount: function () {
	let self = this;
	(new ObserveJs.ObjectObserver(this.props.user)).open(function(changes) {
		self.forceUpdate();
	});
  },

  loginClick: function () {
  	console.debug('log in');
	let options = { scope : 'profile' };
	amazon.Login.authorize(options,  function(response) {
		if (response.error) {
			console.error(response.error);
			return;
		}
		localStorage.setItem('amazon_oauth_access_token', response.access_token);
		retrieveProfile(response.access_token);
	});
  },

  logoutClick: function () {
  	console.debug('log out');
  	amazon.Login.logout();
  	user = {};
  	localStorage.removeItem('amazon_oauth_access_token');
  },

  createCluster: function () {
  	var clusterName = prompt('The name of your cluster. If you do not specify a name for your cluster, you will create a cluster named default.');
  	ecs.createCluster({
  		clusterName: clusterName
  	}, function (err, data) {
		if (!err && confirm('Cluster created. Refresh the page?')) {
			window.location.reload();
		}
  	});
  },

  registerTaskTextChange: function(event) {
    this.setState({registerTaskText: event.target.value});
  },

  registerTaskDefinition: function () {
  	var params = JSON.parse(this.state.registerTaskText);
  	if (!params) {
  		alert('Bad JSON. Try again.');
  		return;
  	}
  	ecs.registerTaskDefinition(params, function (err, data) {
  		if (err) {
  			console.error(err);
  			alert(err);
  		}
		if (!err && confirm('Task registered. Refresh the page?')) {
			window.location.reload();
		}
  	});
  },

  toggleRegisterTaskModal: function () {
	this.setState({registerTaskModal: !this.state.registerTaskModal});
	return false;
  },

  closeRegisterTaskModal: function () {
  	this.setState({registerTaskModal: false});
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

	var families = [];
	if (this.props.user.profile && this.props.user.families) {
		families = this.props.user.families.map(function (family) {
			return <FamilyComponent family={family}></FamilyComponent>
		});
	}

    var registerTaskText = this.state.registerTaskText;
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

	    	<hr />

	    	<h2>Clusters</h2>
	    	{ clusters }

	    	{ this.props.user.profile ? <a href="#" onClick={this.createCluster}>Create Cluster</a> : null }

	    	<hr />

	    	<h2>Task Definitions</h2>
	    	{ families }

			{ this.props.user.profile ? <p><a href="#" onClick={this.toggleRegisterTaskModal}>Register Task Definition</a> ▼</p> : null }
			{ this.state.registerTaskModal ? <div>
				<h3>Register a Task</h3>
				<textarea rows="20" cols="120" value={registerTaskText} onChange={this.registerTaskTextChange}></textarea>
				<p><a href="#" onClick={this.closeRegisterTaskModal}>Cancel</a> | <button onClick={this.registerTaskDefinition}>Register Task</button></p>
			</div> : null }
        </div>
    );
  }
});

React.render(
	<UserComponent user={user}></UserComponent>,
	document.getElementById('App')
);
