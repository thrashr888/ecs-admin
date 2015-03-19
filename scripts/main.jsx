
'use strict';

var AWS = require('aws-sdk');
var React = require('react');
var ObserveJs = require('observe-js');
var $ = require('jquery');
var leveljs = require('level-js');
var Immutable = require('immutable');
 window.PouchDB = require('pouchdb');
// PouchDB.debug.enable('*');

//
// CONFIG
//

var Config = {
    env: process.env.BUILD_ENV,
    hostname: process.env.ECSADMIN_HOST_NAME,
    bucketName: process.env.ECSADMIN_BUCKET_NAME,
    accountName: localStorage.getItem('accountName') || process.env.ECSADMIN_ACCOUNT_NAME,
    region: process.env.ECSADMIN_REGION || 'us-east-1',
    identityPoolId: null,
    clientId: null,
};
console.debug('Config', Config);

var user = {};
// var user = Immutable.Map();
var ecs;
var s3;
var ec2;

// just testing
// var db2 = new PouchDB('ecs-admin');
// db2.put({
//   _id: 'dave@gmail.com',
//   name: 'David',
//   age: 68
// });
// db2.changes().on('change', function() {
//   console.log('Ch-Ch-Changes');
// });

var configDB = new PouchDB('ecsa.config');
var familyDB = new PouchDB('ecsa.family');
var taskDefinitionDB = new PouchDB('ecsa.taskDefinition');
var clusterDB = new PouchDB('ecsa.cluster');
var containerInstanceDB = new PouchDB('ecsa.containerInstance');
var taskDB = new PouchDB('ecsa.task');


//
// UTILS
//

function slugify(text)
{
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}


//
// DATA
//

window.ecsAdminInstall = function (cb) {
    configDB.info().then(function (res) {
        // if empty
        if (res.doc_count === 0) {
            var insert = [];
            for (let k of Config.keys()) {
                insert.push({
                    _id: k,
                    val: Config[k],
                });
            }
            configDB.bulkDocs(insert, {}, function (err, res) {
                configDB.compact();
                cb(err, res);
            });
        }
    }).catch(function (err) {
      console.error('install', err);
    });
}
function getConfigValue (key, cb) {
    configDB.get(key).then(function (doc) {
        cb(null, doc.val);
    }).catch(function (err) {
        cb(err);
    });
}
function setConfigValue (key, val, cb) {
    configDB.put({
        _id: key,
        val: val
    }).then(function (doc) {
        cb(null, doc.val);
    }).catch(function (err) {
        cb(err);
    });
}

function fetchData () {
    user.families = [];
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
                name: familyName,
                familyName: familyName,
                taskDefinitionArns: [],
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
							name: taskDefinitionName,
                            taskDefinitionName: taskDefinitionName,
                            taskDefinition: []
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

    user.clusterArns = [];
    user.clusters = [];
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
                user.clusters[i].containerInstanceArns = [];
                user.clusters[i].containerInstances = [];
                user.clusters[i].instances = [];
                user.clusters[i].taskArns = [];
                user.clusters[i].tasks = [];

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

                            if (data.containerInstances.length > 0) {
                                user.fetching = true;
                                ec2.describeInstances({
                                    InstanceIds: data.containerInstances.map(containerInstance => containerInstance.ec2InstanceId)
                                }, function(err, data) {
                                    user.fetching = false;
                                    console.debug('instances.res', data)
                                    user.clusters[i].instances = data.Reservations;
                                });
                            }
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
	AWS.config.region = Config.region;
	AWS.config.sslEnabled = true;
	// AWS.config.logger = console;

	AWS.config.credentials = new AWS.CognitoIdentityCredentials({
		IdentityPoolId: Config.identityPoolId,
		Logins: {
			'www.amazon.com': access_token
		}
	});

	ecs = new AWS.ECS();
    s3 = new AWS.S3();
    ec2 = new AWS.EC2();

	fetchData();

	// setTimeout(function () {
	// 	fetchData();
	// }, 1000 * 15); // 15 sec
}

function registerAccount (bucketName, accountName, clientId, identityPoolId, cb) {
    var params = {
        Bucket: bucketName,
        ACL: 'public-read',
        Key: slugify(accountName),
        Body: JSON.stringify({
            clientId: clientId,
            identityPoolId: identityPoolId
        })
    };
    s3.putObject(params, cb);
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
window.onAmazonLoginReady = function(cb) {
    $.get(Config.hostname + '/accounts/' + slugify(Config.accountName) + '.json', function getResponse(res) {
        // console.debug('res', res)
        Config.identityPoolId = res.identityPoolId;
        Config.clientId = res.clientId;

        amazon.Login.setClientId(Config.clientId);
        var access_token = localStorage.getItem('amazon_oauth_access_token');
        if (access_token) {
            retrieveProfile(access_token);
        }
        if (cb) cb();
    });
};
setTimeout(onAmazonLoginReady, 25);

//
// APP
//

class InstanceComponent extends React.Component {

  constructor(props) {
    super(props);

    let self = this;
    (new ObserveJs.ObjectObserver(this.props.instance)).open(function(changes) {
        self.forceUpdate();
    });
  }

    render() {
        console.debug('instance.props', this.props)
        return (
            <div className="instance">
                <h4>Instance {this.props.instance.InstanceId}</h4>
                <ul>
                    <li><b>Ami Launch Index:</b> {this.props.instance.AmiLaunchIndex}</li>
                    <li><b>Architecture:</b> {this.props.instance.Architecture}</li>
                    <li><b>Block Device Mappings:</b> {this.props.instance.BlockDeviceMappings}</li>
                    <li><b>Client Token:</b> {this.props.instance.ClientToken}</li>
                    <li><b>EBS Optimized:</b> {this.props.instance.EbsOptimized}</li>
                    <li><b>Hypervisor:</b> {this.props.instance.Hypervisor}</li>
                    <li><b>IAM Instance Profile:</b> {this.props.instance.IamInstanceProfile}</li>
                    <li><b>Image Id:</b> {this.props.instance.ImageId}</li>
                    <li><b>Instance Id:</b> {this.props.instance.InstanceId}</li>
                    <li><b>Instance Type:</b> {this.props.instance.InstanceType}</li>
                    <li><b>Key Name:</b> {this.props.instance.KeyName}</li>
                    <li><b>Launch Time:</b> {this.props.instance.LaunchTime}</li>
                    <li><b>Monitoring:</b> {this.props.instance.Monitoring}</li>
                    <li><b>Network Interfaces:</b> {this.props.instance.NetworkInterfaces}</li>
                    <li><b>Placement:</b> {this.props.instance.Placement}</li>
                    <li><b>Private DNS Name:</b> {this.props.instance.PrivateDnsName}</li>
                    <li><b>Private IP Address:</b> {this.props.instance.PrivateIpAddress}</li>
                    <li><b>Product Codes:</b> {this.props.instance.ProductCodes}</li>
                    <li><b>Public DNS Name:</b> {this.props.instance.PublicDnsName}</li>
                    <li><b>Public IP Address:</b> {this.props.instance.PublicIpAddress}</li>
                    <li><b>Root Device Name:</b> {this.props.instance.RootDeviceName}</li>
                    <li><b>Root Device Type:</b> {this.props.instance.RootDeviceType}</li>
                    <li><b>Security Groups:</b> {this.props.instance.SecurityGroups}</li>
                    <li><b>Source Dest Check:</b> {this.props.instance.SourceDestCheck}</li>
                    <li><b>State:</b> {this.props.instance.State}</li>
                    <li><b>State Transition Reason:</b> {this.props.instance.StateTransitionReason}</li>
                    <li><b>Subnet Id:</b> {this.props.instance.SubnetId}</li>
                    <li><b>Tags:</b> {this.props.instance.Tags}</li>
                    <li><b>Virtualization Type:</b> {this.props.instance.VirtualizationType}</li>
                    <li><b>VPC Id:</b> {this.props.instance.VpcId}</li>
                </ul>
            </div>
        );
    }
}

class InstanceReservationComponent extends React.Component {

  constructor(props) {
    super(props);

    let self = this;
    (new ObserveJs.ObjectObserver(this.props.instance)).open(function(changes) {
        self.forceUpdate();
    });
  }

    render() {
        console.debug('instanceReservation.props', this.props)
        return (
            <div className="instance-reservation">
                <h3>Instance Reservation {this.props.instance.ReservationId}</h3>

                <ul className="list-group">
                    <li className="list-group-item"><b>Owner Id:</b> {this.props.instance.OwnerId}</li>
                    <li className="list-group-item"><b>Groups:</b> {this.props.instance.Groups ? this.props.instance.Groups.join(', ') : 'None'}</li>
                    <li className="list-group-item"><h3>Instances:</h3> {
                        this.props.instance.Instances.map(instance => <InstanceComponent instance={instance} />)
                    }</li>
                </ul>
            </div>
        );
    }
}

class ContainerInstanceComponent extends React.Component {

  constructor(props) {
    super(props);

	let self = this;
	(new ObserveJs.ObjectObserver(this.props.containerInstance)).open(function(changes) {
		self.forceUpdate();
	});
  }

  render() {
  	// console.debug('containerInstance.props', this.props)
  	var remainingResources = this.props.containerInstance.remainingResources.map(function (res) {
  		return <li><b>{res.name}:</b> {res.integerValue || res.doubleValue || res.longValue || res.stringSetValue.join(', ') }</li>
  	});
  	var registeredResources = this.props.containerInstance.registeredResources.map(function (res) {
  		return <li><b>{res.name}:</b> {res.integerValue || res.doubleValue || res.longValue || res.stringSetValue.join(', ') }</li>
  	});
    return (
        <div className="container-instance">
            <h3>Container Instance {this.props.containerInstance.containerInstanceArn.replace(/(.*\/)[0-9A-Z\-]+/, '')}</h3>

        	<ul className="list-group">
        		<li className="list-group-item"><b>Arn:</b> {this.props.containerInstance.containerInstanceArn}</li>
        		<li className="list-group-item"><b>Agent Connected:</b> {this.props.containerInstance.agentConnected ? 'YES' : 'NO'}</li>
        		<li className="list-group-item"><b>EC2 Instance Id:</b> {this.props.containerInstance.ec2InstanceId}</li>
        		<li className="list-group-item"><b>Status:</b> {this.props.containerInstance.status}</li>

        		<li className="list-group-item"><b>Registered:</b> <ul>{registeredResources}</ul></li>
        		<li className="list-group-item"><b>Remaining:</b> <ul>{remainingResources}</ul></li>
        	</ul>
        </div>
    );
  }
};
ContainerInstanceComponent.propTypes = {
    containerInstance: React.PropTypes.object.isRequired,
    cluster: React.PropTypes.object
};

class TaskComponent extends React.Component {

  constructor(props) {
    super(props);

    this.runTask = this.runTask.bind(this);
    this.stopTask = this.stopTask.bind(this);

    let self = this;
    (new ObserveJs.ObjectObserver(this.props.task)).open(function(changes) {
        self.forceUpdate();
    });
  }

  stopTask() {
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
  }

  runTask() {
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
  }

  render() {
  	// console.debug('task.props', this.props.task);
    return (
        <div className="task">
        	<h3>Task</h3>
        	<p><a href="#" onClick={this.runTask}>Run Task</a> | { this.props.task.lastStatus === 'RUNNING' ? <a href="#" onClick={this.startTask}>Stop Task</a> : null }</p>
        	<ul className="list-group">
        		<li className="list-group-item"><b>Task Definition:</b> {this.props.task.taskDefinitionArn}</li>
        		<li className="list-group-item"><b>Container Instance:</b> {this.props.task.containerInstanceArn}</li>
        		<li className="list-group-item"><b>Desired Status:</b> {this.props.task.desiredStatus}</li>
        		<li className="list-group-item"><b>Last Status:</b> {this.props.task.lastStatus}</li>

        		<li className="list-group-item"><b>Containers:</b> {this.props.task.containers.map(o => o.name)}</li>
        		<li className="list-group-item"><b>Overrides:</b> {this.props.task.overrides.containerOverrides.map(o => o.name)}</li>
        	</ul>
        </div>
    );
  }
};

class FamilyComponent extends React.Component {

	constructor(props) {
        super(props);

		let self = this;
		(new ObserveJs.ObjectObserver(this.props.family)).open(function(changes) {
			self.forceUpdate();
		});
	}

	render() {
		// console.debug('family.props', this.props.family);
		var self = this, taskDefinitions = [];
		if (this.props.family && this.props.family.taskDefinitionArns) {
			taskDefinitions = this.props.family.taskDefinitionArns.map(function (taskDefinitionArn) {
				// console.log('taskDefinitionArn.taskDefinition', taskDefinitionArn)
				if (taskDefinitionArn.taskDefinition) {
					return <TaskDefinitionComponent taskDefinition={taskDefinitionArn.taskDefinition} />
				} else {
					(new ObserveJs.ObjectObserver(taskDefinitionArn)).open(function(changes) {
						self.forceUpdate();
					});
				}
			});
		}
		return (
			<div>
                <a name={'f-' + this.props.family.familyName} />
				<h2>Family: {this.props.family.name}</h2>
				{ taskDefinitions }
			</div>
		);
	}
};

class ContainerDefinitionComponent extends React.Component {

	constructor(props) {
        super(props);

		let self = this;
		(new ObserveJs.ObjectObserver(this.props.containerDefinition)).open(function(changes) {
			self.forceUpdate();
		});
	}

	render() {
	  	// console.debug('containerDefinition.props', this.props.containerDefinition);
		return (
			<ul className="list-group">
				<li className="list-group-item"><b>CPU:</b> {this.props.containerDefinition.cpu}</li>
				<li className="list-group-item"><b>Environment:</b> {this.props.containerDefinition.environment.join(', ')}</li>
				<li className="list-group-item"><b>Essential:</b> {this.props.containerDefinition.essential ? 'yes' : 'no'}</li>
				<li className="list-group-item"><b>Image:</b> {this.props.containerDefinition.image}</li>
				<li className="list-group-item"><b>CPU:</b> {this.props.containerDefinition.cpu}</li>
				<li className="list-group-item"><b>Memory:</b> {this.props.containerDefinition.memory}</li>
				<li className="list-group-item"><b>Name:</b> {this.props.containerDefinition.name}</li>
				<li className="list-group-item"><b>Mount Points:</b> {this.props.containerDefinition.mountPoints.join(', ')}</li>
				<li className="list-group-item"><b>Port Mappings:</b> {this.props.containerDefinition.portMappings.join(', ')}</li>
				<li className="list-group-item"><b>Volumes From:</b> {this.props.containerDefinition.volumesFrom.join(', ')}</li>
			</ul>
		);
	}
};

class TaskDefinitionComponent extends React.Component {

    constructor(props) {
        super(props);

		let self = this;
		(new ObserveJs.ObjectObserver(this.props.taskDefinition)).open(function(changes) {
			self.forceUpdate();
		});
	}

	render() {
	  	// console.debug('taskDefinition.props', this.props.taskDefinition);
		var containerDefinitions = [];
		if (this.props.taskDefinition.containerDefinitions) {
			this.props.taskDefinition.containerDefinitions.map(function (containerDefinition) {
				return <ContainerDefinitionComponent containerDefinition={containerDefinition}></ContainerDefinitionComponent>
			});
		}
		return (
			<div>
				<h2>TaskDefinition</h2>
				<ul className="list-group">
					<li className="list-group-item"><b>Task Definition:</b> {this.props.taskDefinition.taskDefinitionArn}</li>
					<li className="list-group-item"><b>Revision:</b> {this.props.taskDefinition.revision}</li>
					<li className="list-group-item"><b>Family:</b> {this.props.taskDefinition.family}</li>

					<li className="list-group-item"><b>Volumes:</b> {this.props.taskDefinition.volumes ? this.props.taskDefinition.volumes.join(', ') : 'None'}</li>
					<li className="list-group-item"><b>Container Definitions:</b> {containerDefinitions}</li>
				</ul>
			</div>
		);
	}
};

class ClusterComponent extends React.Component {

  constructor(props) {
    super(props);
    this.deleteCluster = this.deleteCluster.bind(this);

    let self = this;
    (new ObserveJs.ObjectObserver(this.props.cluster)).open(function(changes) {
        self.forceUpdate();
    });
  }

  deleteCluster() {
  	if (confirm('Deleting cluster ' + this.props.cluster.clusterName + '. Are you sure?')) {
	  	ecs.deleteCluster({
	  		cluster: this.props.cluster.clusterName
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
  }

  render() {
  	// console.debug('cluster.props', this.props.cluster);
    return (
    	<div className="cluster">
            <a name={'c-' + this.props.cluster.clusterName} />
			<h2>Cluster: { this.props.cluster.clusterName } { this.props.cluster.status }</h2>

            <section>
                <h3>Tasks</h3>
                { this.props.cluster.tasks.map(task => <TaskComponent task={task} cluster={this.props.cluster} /> ) }
            </section>

            <section>
                <h3>Container Instances</h3>
                { this.props.cluster.containerInstances.map(containerInstance => <ContainerInstanceComponent containerInstance={containerInstance} cluster={this.props.cluster} /> ) }
            </section>

            <section>
                <h3>Instances</h3>
                { this.props.cluster.instances.map(instance => <InstanceReservationComponent instance={instance} cluster={this.props.cluster} /> ) }
            </section>

			<a href="#" onClick={this.deleteCluster}>Delete cluster</a>
		</div>
    );
  }
};
ClusterComponent.defaultProps = {
    cluster: {
        tasks: [],
        containerInstances: [],
        instances: [],
    }
};

class TaskDefinitionSectionComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        registerTaskModal: false,
        registerTaskText: null
    };
    this.registerTaskTextChange = this.registerTaskTextChange.bind(this);
    this.registerTaskDefinition = this.registerTaskDefinition.bind(this);
    this.toggleRegisterTaskModal = this.toggleRegisterTaskModal.bind(this);
    this.closeRegisterTaskModal = this.closeRegisterTaskModal.bind(this);

    let self = this;
    (new ObserveJs.ObjectObserver(this.props.families)).open(function(added) {
        self.forceUpdate();
    });
  }

  registerTaskTextChange(event) {
    this.setState({registerTaskText: event.target.value});
  }

  registerTaskDefinition() {
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
  }

  toggleRegisterTaskModal(event) {
    this.setState({registerTaskModal: !this.state.registerTaskModal});
    event.preventDefault();
  }

  closeRegisterTaskModal(event) {
    this.setState({registerTaskModal: false});
    event.preventDefault();
  }

    render() {
        // console.debug('user.families', this.props.families);
        var families = this.props.families.map(function (family) {
            return <FamilyComponent family={family}></FamilyComponent>
        });
        var registerTaskText = this.state.registerTaskText;
        return (
            <section>
                <h2>Task Definitions</h2>

                <p><a href="#" onClick={this.toggleRegisterTaskModal}>Register Task Definition ▼</a></p>
                { this.state.registerTaskModal ? <div>
                    <h3>Register a Task</h3>
                    <textarea rows="20" cols="120" value={registerTaskText} onChange={this.registerTaskTextChange}></textarea>
                    <p><a href="#" onClick={this.closeRegisterTaskModal}>Cancel</a> | <button onClick={this.registerTaskDefinition}>Register Task</button></p>
                </div> : null }

                <nav>
                    <ul className="nav nav-pills nav-stacked">{
                        this.props.families.map((family) => <li><a href={'#f-' + family.name}>{family.name}</a></li>)
                    }</ul>
                </nav>

                { families }

                <a href="#">top</a>
            </section>
        );
    }
};

class ClusterSectionComponent extends React.Component {

  constructor(props) {
    super(props);

    this.createCluster = this.createCluster.bind(this);

    let self = this;
    (new ObserveJs.ObjectObserver(this.props.clusters)).open(function(added) {
        self.forceUpdate();
    });
  }

  createCluster() {
    var clusterName = prompt('The name of your cluster. If you do not specify a name for your cluster, you will create a cluster named default.');
    ecs.createCluster({
        clusterName: clusterName
    }, function (err, data) {
        if (!err && confirm('Cluster created. Refresh the page?')) {
            window.location.reload();
        }
    });
  }

    render() {
        // console.debug('user.clusters', this.props.clusters);
        return (
            <section>
                <h2>Clusters</h2>
                <p><button onClick={this.createCluster} className="btn">Create Cluster</button></p>

                <nav>
                    <ul className="nav nav-pills nav-stacked">
                        { this.props.clusters.map((cluster) => <li><a href={'#c-' + cluster.clusterName}>{cluster.clusterName}</a></li>) }
                    </ul>
                </nav>

                { this.props.clusters.map(cluster => <ClusterComponent cluster={cluster}></ClusterComponent>) }

                <a href="#">top</a>
            </section>
        );
    }
};

class HeaderComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        dropdownOpen: false
    };
    this.logoutClick = this.logoutClick.bind(this);
    this.dropdownToggle = this.dropdownToggle.bind(this);
    this.isActiveClass = this.isActiveClass.bind(this);

    let self = this;
    (new ObserveJs.ObjectObserver(this.props.user)).open(function(added) {
        if (added.profile) self.forceUpdate();
    });
  }

  logoutClick() {
    console.debug('log out');
    amazon.Login.logout();
    user = {};
    localStorage.removeItem('amazon_oauth_access_token');
  }

  dropdownToggle() {
    this.setState({
        dropdownOpen: this.state.dropdownOpen ? false : true
    });
  }

  isActiveClass(name) {
    return this.props.nav === name ? 'active' : null;
  }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">ECS Admin</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className={this.isActiveClass('clusters')}><a href="#" onClick={this.props.onNavClick('clusters')}>Clusters</a></li>
                            <li className={this.isActiveClass('tasks')}><a href="#" onClick={this.props.onNavClick('tasks')}>Tasks</a></li>
                        </ul>

                        <ul className="nav navbar-nav navbar-right">

                            { this.props.user.fetching ? <li className="navbar-text">Loading...</li> : null }

                            <li className={'dropdown' + (this.state.dropdownOpen ? ' open ' : null)}>
                                <a href="#" className="dropdown-toggle" onClick={this.dropdownToggle} data-toggle="dropdown" role="button" aria-expanded={this.state.dropdownOpen?'true':'false'}>{this.props.user.profile.Name} <span className="caret"></span></a>

                                <ul className="dropdown-menu" role="menu">
                                    <li className="dropdown-header">{Config.accountName}</li>
                                    <li className="dropdown-header"><div>{Config.region}</div></li>
                                    <li className="divider"></li>
                                    <li><a href="#" id="Logout" onClick={this.logoutClick}>Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
};

class FooterComponent extends React.Component {

    render() {
        return (
            <footer>&copy; 2015 Paul Thrasher</footer>
        );
    }
};

class LoggedInComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        nav: 'clusters'
    };
    this.navClick = this.navClick.bind(this);
    this.isActiveClass = this.isActiveClass.bind(this);

    let self = this;
    (new ObserveJs.ObjectObserver(this.props.user)).open(function(changes) {
        self.forceUpdate();
    });
  }

  navClick(name) {
    var self = this;
    return function (event) {
        self.setState({
            nav: name
        });
    }
  }

  isActiveClass(name) {
    return this.state.nav === name ? 'active' : null;
  }

  render() {
    // console.debug('user.props', this.props.user);
    return (
        <div className="user row col-sm-10 col-sm-offset-1">
            <HeaderComponent user={this.props.user} nav={this.state.nav} onNavClick={this.navClick} />

            { this.props.user.families && this.state.nav === 'tasks' ? <TaskDefinitionSectionComponent families={this.props.user.families} /> : null }

            { this.props.user.clusters && this.state.nav === 'clusters' ? <ClusterSectionComponent clusters={this.props.user.clusters} /> : null }

            <FooterComponent />
        </div>
    );
  }
};

class RegisterComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        hostname: Config.hostname,
        bucketName: Config.bucketName,
        accountName: Config.accountName,
        clientId: null,
        identityPoolId: null,
    };
  }

    register() {
        var hostname = this.state.hostname;
        var bucketName = this.state.bucketName;
        var accountName = this.state.accountName;
        var clientId = this.state.clientId;
        var identityPoolId = this.state.identityPoolId;

        registerAccount(bucketName, accountName, clientId, identityPoolId, function (err, res) {
            this.state.message = res;
        });
    }

    submitHandler(event) {
        this.state[event.target.name] = event.target.value;
    }

    changeHandler(event) {
        console.log('changehandler', event)
    }

    render() {
        return (
            <div className="row">
                <div className="page-header">
                    <h1>Register</h1>
                </div>

                { this.state.message ? <div>{this.state.message}</div> : null }

                <form onChange={this.onFormChange} onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label htmlFor="accountName">Account Name</label>
                        <input type="text" className="form-control" id="accountName" placeholder="Enter account name" value={this.state.accountName} onChange={this.changeHandler} />
                        <p className="help-block">This is a namespace used to identify your Org.</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="clientId">Client Id</label>
                        <input type="text" className="form-control" id="clientId" placeholder="Enter Client Id" value={this.state.clientId} onChange={this.changeHandler} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="identityPoolId">Identity Pool Id</label>
                        <input type="text" className="form-control" id="identityPoolId" placeholder="Enter Identity Pool Id" value={this.state.identityPoolId} onChange={this.changeHandler} />
                    </div>

                    <div>
                        <a href="#" onClick={this.props.onCancel} className="col-sm-3 text-warning">cancel</a>
                        <input type="submit" value="Register Account" className="btn btn-default col-sm-6 col-sm-offset-3" /></div>
                </form>
            </div>
        );
    }
};

class LoggedOutComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        account: Config.accountName,
        showRegistration: false,
    };
    this.updateAccount = this.updateAccount.bind(this);
    this.loginClick = this.loginClick.bind(this);
    this.showRegistrationModal = this.showRegistrationModal.bind(this);
    this.hideRegistrationModal = this.hideRegistrationModal.bind(this);

    // let self = this;
    // (new ObserveJs.ObjectObserver(window.amazon)).open(function(added, removed, changed, getOldValueFn) {
    //     console.log('boo window')
    //     if (added.amazon) self.forceUpdate();
    // });
  }

  updateAccount(event) {
    Config.accountName = event.target.value;
    this.setState({account: Config.accountName});
    localStorage.setItem('accountName', Config.accountName);
  }

  loginClick() {
    console.debug('log in');
    let options = { scope : 'profile' };
    window.onAmazonLoginReady();
    amazon.Login.authorize(options,  function(response) {
        if (response.error) {
            console.error(response.error);
            return;
        }
        localStorage.setItem('amazon_oauth_access_token', response.access_token);
        console.debug('loginClick.response.access_token', response.access_token)
        retrieveProfile(response.access_token);
    });
  }

  showRegistrationModal(event) {
    this.setState({ showRegistration: true });
    event.preventDefault();
  }

  hideRegistrationModal(event) {
    this.setState({ showRegistration: false });
    event.preventDefault();
  }

    render() {
        var account = this.state.account;
        let amzn = window.amazon;
        return (
            <div className="loggedOut col-sm-4 col-sm-offset-4" row>

                { !this.state.showRegistration ? <form className="row">

                    <div className="page-header">
                        <h1>Log in</h1>
                    </div>

                    { typeof amzn !== 'undefined' ? <p>Amazon not ready yet.</p> : null }

                    <div className="form-group">
                        <label htmlFor="accountName">Account Name</label>
                        <input type="text" className="form-control" id="accountName" placeholder="Account Name" value={account} onChange={this.updateAccount} />
                    </div>

                    <div className="form-group">
                        <a href="#" id="LoginWithAmazon" onClick={this.loginClick}>
                            <img border="0" alt="Login with Amazon"
                            src="https://images-na.ssl-images-amazon.com/images/G/01/lwa/btnLWA_gold_156x32.png"
                            width="156" height="32" />
                        </a>
                    </div>

                    <div>
                        <a href="#" onClick={this.showRegistrationModal}>Register an AWS Account</a>
                    </div>

                </form> : null }

                { this.state.showRegistration ? <RegisterComponent onCancel={this.hideRegistrationModal} className="row" /> : null }
            </div>
        );
    }
};

class PageComponent extends React.Component {

  constructor(props) {
    super(props);

    let self = this;
    (new ObserveJs.ObjectObserver(this.props.user)).open(function(added, removed, changed, getOldValueFn) {
        if (added.profile) self.forceUpdate();
    });
  }

    render() {
        return (
            <div className="page container">
                { this.props.user.profile ? <LoggedInComponent user={this.props.user} /> : <LoggedOutComponent /> }
            </div>
        );
    }
};

React.render(
	<PageComponent user={user}></PageComponent>,
	document.getElementById('App')
);


module.exports = {
    Config,
    ecsAdminInstall,
    registerAccount
}
