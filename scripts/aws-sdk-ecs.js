// AWS SDK for JavaScript v2.1.27
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// License at https://sdk.amazonaws.com/js/BUNDLE_LICENSE.txt
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var AWS = require('./core');

AWS.apiLoader = function(svc, version) {
  return AWS.apiLoader.services[svc][version];
};


AWS.apiLoader.services = {};

AWS.XML.Parser = require('./xml/browser_parser');

require('./http/xhr');

if (typeof window !== 'undefined') window.AWS = AWS;
if (typeof module !== 'undefined') module.exports = AWS;
AWS.apiLoader.services['cognitoidentity'] = {};
AWS.CognitoIdentity = AWS.Service.defineService('cognitoidentity', [ '2014-06-30' ]);
require('./services/cognitoidentity');

AWS.apiLoader.services['cognitoidentity']['2014-06-30'] = {"metadata":{"apiVersion":"2014-06-30","endpointPrefix":"cognito-identity","jsonVersion":"1.1","serviceFullName":"Amazon Cognito Identity","signatureVersion":"v4","targetPrefix":"AWSCognitoIdentityService","protocol":"json"},"operations":{"CreateIdentityPool":{"input":{"type":"structure","required":["IdentityPoolName","AllowUnauthenticatedIdentities"],"members":{"IdentityPoolName":{},"AllowUnauthenticatedIdentities":{"type":"boolean"},"SupportedLoginProviders":{"shape":"S4"},"DeveloperProviderName":{},"OpenIdConnectProviderARNs":{"shape":"S8"}}},"output":{"shape":"Sa"},"http":{}},"DeleteIdentityPool":{"input":{"type":"structure","required":["IdentityPoolId"],"members":{"IdentityPoolId":{}}},"http":{}},"DescribeIdentity":{"input":{"type":"structure","required":["IdentityId"],"members":{"IdentityId":{}}},"output":{"shape":"Sf"},"http":{}},"DescribeIdentityPool":{"input":{"type":"structure","required":["IdentityPoolId"],"members":{"IdentityPoolId":{}}},"output":{"shape":"Sa"},"http":{}},"GetCredentialsForIdentity":{"input":{"type":"structure","required":["IdentityId"],"members":{"IdentityId":{},"Logins":{"shape":"Sk"}}},"output":{"type":"structure","members":{"IdentityId":{},"Credentials":{"type":"structure","members":{"AccessKeyId":{},"SecretKey":{},"SessionToken":{},"Expiration":{"type":"timestamp"}}}}},"http":{}},"GetId":{"input":{"type":"structure","required":["IdentityPoolId"],"members":{"AccountId":{},"IdentityPoolId":{},"Logins":{"shape":"Sk"}}},"output":{"type":"structure","members":{"IdentityId":{}}},"http":{}},"GetIdentityPoolRoles":{"input":{"type":"structure","members":{"IdentityPoolId":{}}},"output":{"type":"structure","members":{"IdentityPoolId":{},"Roles":{"shape":"Sw"}}},"http":{}},"GetOpenIdToken":{"input":{"type":"structure","required":["IdentityId"],"members":{"IdentityId":{},"Logins":{"shape":"Sk"}}},"output":{"type":"structure","members":{"IdentityId":{},"Token":{}}},"http":{}},"GetOpenIdTokenForDeveloperIdentity":{"input":{"type":"structure","required":["IdentityPoolId","Logins"],"members":{"IdentityPoolId":{},"IdentityId":{},"Logins":{"shape":"Sk"},"TokenDuration":{"type":"long"}}},"output":{"type":"structure","members":{"IdentityId":{},"Token":{}}},"http":{}},"ListIdentities":{"input":{"type":"structure","required":["IdentityPoolId","MaxResults"],"members":{"IdentityPoolId":{},"MaxResults":{"type":"integer"},"NextToken":{}}},"output":{"type":"structure","members":{"IdentityPoolId":{},"Identities":{"type":"list","member":{"shape":"Sf"}},"NextToken":{}}},"http":{}},"ListIdentityPools":{"input":{"type":"structure","required":["MaxResults"],"members":{"MaxResults":{"type":"integer"},"NextToken":{}}},"output":{"type":"structure","members":{"IdentityPools":{"type":"list","member":{"type":"structure","members":{"IdentityPoolId":{},"IdentityPoolName":{}}}},"NextToken":{}}},"http":{}},"LookupDeveloperIdentity":{"input":{"type":"structure","required":["IdentityPoolId"],"members":{"IdentityPoolId":{},"IdentityId":{},"DeveloperUserIdentifier":{},"MaxResults":{"type":"integer"},"NextToken":{}}},"output":{"type":"structure","members":{"IdentityId":{},"DeveloperUserIdentifierList":{"type":"list","member":{}},"NextToken":{}}},"http":{}},"MergeDeveloperIdentities":{"input":{"type":"structure","required":["SourceUserIdentifier","DestinationUserIdentifier","DeveloperProviderName","IdentityPoolId"],"members":{"SourceUserIdentifier":{},"DestinationUserIdentifier":{},"DeveloperProviderName":{},"IdentityPoolId":{}}},"output":{"type":"structure","members":{"IdentityId":{}}},"http":{}},"SetIdentityPoolRoles":{"input":{"type":"structure","required":["IdentityPoolId","Roles"],"members":{"IdentityPoolId":{},"Roles":{"shape":"Sw"}}},"http":{}},"UnlinkDeveloperIdentity":{"input":{"type":"structure","required":["IdentityId","IdentityPoolId","DeveloperProviderName","DeveloperUserIdentifier"],"members":{"IdentityId":{},"IdentityPoolId":{},"DeveloperProviderName":{},"DeveloperUserIdentifier":{}}},"http":{}},"UnlinkIdentity":{"input":{"type":"structure","required":["IdentityId","Logins","LoginsToRemove"],"members":{"IdentityId":{},"Logins":{"shape":"Sk"},"LoginsToRemove":{"shape":"Sg"}}},"http":{}},"UpdateIdentityPool":{"input":{"shape":"Sa"},"output":{"shape":"Sa"},"http":{}}},"shapes":{"S4":{"type":"map","key":{},"value":{}},"S8":{"type":"list","member":{}},"Sa":{"type":"structure","required":["IdentityPoolId","IdentityPoolName","AllowUnauthenticatedIdentities"],"members":{"IdentityPoolId":{},"IdentityPoolName":{},"AllowUnauthenticatedIdentities":{"type":"boolean"},"SupportedLoginProviders":{"shape":"S4"},"DeveloperProviderName":{},"OpenIdConnectProviderARNs":{"shape":"S8"}}},"Sf":{"type":"structure","members":{"IdentityId":{},"Logins":{"shape":"Sg"},"CreationDate":{"type":"timestamp"},"LastModifiedDate":{"type":"timestamp"}}},"Sg":{"type":"list","member":{}},"Sk":{"type":"map","key":{},"value":{}},"Sw":{"type":"map","key":{},"value":{}}}};
AWS.apiLoader.services['ec2'] = {};
AWS.EC2 = AWS.Service.defineService('ec2', [ '2015-03-01' ]);
require('./services/ec2');

AWS.apiLoader.services['ec2']['2015-03-01'] = {"version":"2.0","metadata":{"apiVersion":"2015-03-01","endpointPrefix":"ec2","serviceAbbreviation":"Amazon EC2","serviceFullName":"Amazon Elastic Compute Cloud","signatureVersion":"v4","xmlNamespace":"http://ec2.amazonaws.com/doc/2015-03-01","protocol":"ec2"},"operations":{"AcceptVpcPeeringConnection":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpcPeeringConnectionId":{"locationName":"vpcPeeringConnectionId"}}},"output":{"type":"structure","members":{"VpcPeeringConnection":{"shape":"S5","locationName":"vpcPeeringConnection"}}},"http":{}},"AllocateAddress":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"Domain":{}}},"output":{"type":"structure","members":{"PublicIp":{"locationName":"publicIp"},"Domain":{"locationName":"domain"},"AllocationId":{"locationName":"allocationId"}}},"http":{}},"AssignPrivateIpAddresses":{"input":{"type":"structure","required":["NetworkInterfaceId"],"members":{"NetworkInterfaceId":{"locationName":"networkInterfaceId"},"PrivateIpAddresses":{"shape":"Sf","locationName":"privateIpAddress"},"SecondaryPrivateIpAddressCount":{"locationName":"secondaryPrivateIpAddressCount","type":"integer"},"AllowReassignment":{"locationName":"allowReassignment","type":"boolean"}}},"http":{}},"AssociateAddress":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InstanceId":{},"PublicIp":{},"AllocationId":{},"NetworkInterfaceId":{"locationName":"networkInterfaceId"},"PrivateIpAddress":{"locationName":"privateIpAddress"},"AllowReassociation":{"locationName":"allowReassociation","type":"boolean"}}},"output":{"type":"structure","members":{"AssociationId":{"locationName":"associationId"}}},"http":{}},"AssociateDhcpOptions":{"input":{"type":"structure","required":["DhcpOptionsId","VpcId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"DhcpOptionsId":{},"VpcId":{}}},"http":{}},"AssociateRouteTable":{"input":{"type":"structure","required":["SubnetId","RouteTableId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"SubnetId":{"locationName":"subnetId"},"RouteTableId":{"locationName":"routeTableId"}}},"output":{"type":"structure","members":{"AssociationId":{"locationName":"associationId"}}},"http":{}},"AttachClassicLinkVpc":{"input":{"type":"structure","required":["InstanceId","VpcId","Groups"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InstanceId":{"locationName":"instanceId"},"VpcId":{"locationName":"vpcId"},"Groups":{"shape":"Sn","locationName":"SecurityGroupId"}}},"output":{"type":"structure","members":{"Return":{"locationName":"return","type":"boolean"}}},"http":{}},"AttachInternetGateway":{"input":{"type":"structure","required":["InternetGatewayId","VpcId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InternetGatewayId":{"locationName":"internetGatewayId"},"VpcId":{"locationName":"vpcId"}}},"http":{}},"AttachNetworkInterface":{"input":{"type":"structure","required":["NetworkInterfaceId","InstanceId","DeviceIndex"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"NetworkInterfaceId":{"locationName":"networkInterfaceId"},"InstanceId":{"locationName":"instanceId"},"DeviceIndex":{"locationName":"deviceIndex","type":"integer"}}},"output":{"type":"structure","members":{"AttachmentId":{"locationName":"attachmentId"}}},"http":{}},"AttachVolume":{"input":{"type":"structure","required":["VolumeId","InstanceId","Device"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VolumeId":{},"InstanceId":{},"Device":{}}},"output":{"shape":"St","locationName":"attachment"},"http":{}},"AttachVpnGateway":{"input":{"type":"structure","required":["VpnGatewayId","VpcId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpnGatewayId":{},"VpcId":{}}},"output":{"type":"structure","members":{"VpcAttachment":{"shape":"Sx","locationName":"attachment"}}},"http":{}},"AuthorizeSecurityGroupEgress":{"input":{"type":"structure","required":["GroupId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"GroupId":{"locationName":"groupId"},"SourceSecurityGroupName":{"locationName":"sourceSecurityGroupName"},"SourceSecurityGroupOwnerId":{"locationName":"sourceSecurityGroupOwnerId"},"IpProtocol":{"locationName":"ipProtocol"},"FromPort":{"locationName":"fromPort","type":"integer"},"ToPort":{"locationName":"toPort","type":"integer"},"CidrIp":{"locationName":"cidrIp"},"IpPermissions":{"shape":"S10","locationName":"ipPermissions"}}},"http":{}},"AuthorizeSecurityGroupIngress":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"GroupName":{},"GroupId":{},"SourceSecurityGroupName":{},"SourceSecurityGroupOwnerId":{},"IpProtocol":{},"FromPort":{"type":"integer"},"ToPort":{"type":"integer"},"CidrIp":{},"IpPermissions":{"shape":"S10"}}},"http":{}},"BundleInstance":{"input":{"type":"structure","required":["InstanceId","Storage"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InstanceId":{},"Storage":{"shape":"S18"}}},"output":{"type":"structure","members":{"BundleTask":{"shape":"S1c","locationName":"bundleInstanceTask"}}},"http":{}},"CancelBundleTask":{"input":{"type":"structure","required":["BundleId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"BundleId":{}}},"output":{"type":"structure","members":{"BundleTask":{"shape":"S1c","locationName":"bundleInstanceTask"}}},"http":{}},"CancelConversionTask":{"input":{"type":"structure","required":["ConversionTaskId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"ConversionTaskId":{"locationName":"conversionTaskId"},"ReasonMessage":{"locationName":"reasonMessage"}}},"http":{}},"CancelExportTask":{"input":{"type":"structure","required":["ExportTaskId"],"members":{"ExportTaskId":{"locationName":"exportTaskId"}}},"http":{}},"CancelImportTask":{"input":{"type":"structure","members":{"DryRun":{"type":"boolean"},"ImportTaskId":{},"CancelReason":{}}},"output":{"type":"structure","members":{"ImportTaskId":{"locationName":"importTaskId"},"State":{"locationName":"state"},"PreviousState":{"locationName":"previousState"}}},"http":{}},"CancelReservedInstancesListing":{"input":{"type":"structure","required":["ReservedInstancesListingId"],"members":{"ReservedInstancesListingId":{"locationName":"reservedInstancesListingId"}}},"output":{"type":"structure","members":{"ReservedInstancesListings":{"shape":"S1n","locationName":"reservedInstancesListingsSet"}}},"http":{}},"CancelSpotInstanceRequests":{"input":{"type":"structure","required":["SpotInstanceRequestIds"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"SpotInstanceRequestIds":{"shape":"S1z","locationName":"SpotInstanceRequestId"}}},"output":{"type":"structure","members":{"CancelledSpotInstanceRequests":{"locationName":"spotInstanceRequestSet","type":"list","member":{"locationName":"item","type":"structure","members":{"SpotInstanceRequestId":{"locationName":"spotInstanceRequestId"},"State":{"locationName":"state"}}}}}},"http":{}},"ConfirmProductInstance":{"input":{"type":"structure","required":["ProductCode","InstanceId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"ProductCode":{},"InstanceId":{}}},"output":{"type":"structure","members":{"OwnerId":{"locationName":"ownerId"}}},"http":{}},"CopyImage":{"input":{"type":"structure","required":["SourceRegion","SourceImageId","Name"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"SourceRegion":{},"SourceImageId":{},"Name":{},"Description":{},"ClientToken":{}}},"output":{"type":"structure","members":{"ImageId":{"locationName":"imageId"}}},"http":{}},"CopySnapshot":{"input":{"type":"structure","required":["SourceRegion","SourceSnapshotId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"SourceRegion":{},"SourceSnapshotId":{},"Description":{},"DestinationRegion":{"locationName":"destinationRegion"},"PresignedUrl":{"locationName":"presignedUrl"}}},"output":{"type":"structure","members":{"SnapshotId":{"locationName":"snapshotId"}}},"http":{}},"CreateCustomerGateway":{"input":{"type":"structure","required":["Type","PublicIp","BgpAsn"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"Type":{},"PublicIp":{"locationName":"IpAddress"},"BgpAsn":{"type":"integer"}}},"output":{"type":"structure","members":{"CustomerGateway":{"shape":"S2d","locationName":"customerGateway"}}},"http":{}},"CreateDhcpOptions":{"input":{"type":"structure","required":["DhcpConfigurations"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"DhcpConfigurations":{"locationName":"dhcpConfiguration","type":"list","member":{"locationName":"item","type":"structure","members":{"Key":{"locationName":"key"},"Values":{"shape":"S2h","locationName":"Value"}}}}}},"output":{"type":"structure","members":{"DhcpOptions":{"shape":"S2j","locationName":"dhcpOptions"}}},"http":{}},"CreateImage":{"input":{"type":"structure","required":["InstanceId","Name"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InstanceId":{"locationName":"instanceId"},"Name":{"locationName":"name"},"Description":{"locationName":"description"},"NoReboot":{"locationName":"noReboot","type":"boolean"},"BlockDeviceMappings":{"shape":"S2p","locationName":"blockDeviceMapping"}}},"output":{"type":"structure","members":{"ImageId":{"locationName":"imageId"}}},"http":{}},"CreateInstanceExportTask":{"input":{"type":"structure","required":["InstanceId"],"members":{"Description":{"locationName":"description"},"InstanceId":{"locationName":"instanceId"},"TargetEnvironment":{"locationName":"targetEnvironment"},"ExportToS3Task":{"locationName":"exportToS3","type":"structure","members":{"DiskImageFormat":{"locationName":"diskImageFormat"},"ContainerFormat":{"locationName":"containerFormat"},"S3Bucket":{"locationName":"s3Bucket"},"S3Prefix":{"locationName":"s3Prefix"}}}}},"output":{"type":"structure","members":{"ExportTask":{"shape":"S30","locationName":"exportTask"}}},"http":{}},"CreateInternetGateway":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"}}},"output":{"type":"structure","members":{"InternetGateway":{"shape":"S36","locationName":"internetGateway"}}},"http":{}},"CreateKeyPair":{"input":{"type":"structure","required":["KeyName"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"KeyName":{}}},"output":{"locationName":"keyPair","type":"structure","members":{"KeyName":{"locationName":"keyName"},"KeyFingerprint":{"locationName":"keyFingerprint"},"KeyMaterial":{"locationName":"keyMaterial"}}},"http":{}},"CreateNetworkAcl":{"input":{"type":"structure","required":["VpcId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpcId":{"locationName":"vpcId"}}},"output":{"type":"structure","members":{"NetworkAcl":{"shape":"S3d","locationName":"networkAcl"}}},"http":{}},"CreateNetworkAclEntry":{"input":{"type":"structure","required":["NetworkAclId","RuleNumber","Protocol","RuleAction","Egress","CidrBlock"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"NetworkAclId":{"locationName":"networkAclId"},"RuleNumber":{"locationName":"ruleNumber","type":"integer"},"Protocol":{"locationName":"protocol"},"RuleAction":{"locationName":"ruleAction"},"Egress":{"locationName":"egress","type":"boolean"},"CidrBlock":{"locationName":"cidrBlock"},"IcmpTypeCode":{"shape":"S3h","locationName":"Icmp"},"PortRange":{"shape":"S3i","locationName":"portRange"}}},"http":{}},"CreateNetworkInterface":{"input":{"type":"structure","required":["SubnetId"],"members":{"SubnetId":{"locationName":"subnetId"},"Description":{"locationName":"description"},"PrivateIpAddress":{"locationName":"privateIpAddress"},"Groups":{"shape":"S3n","locationName":"SecurityGroupId"},"PrivateIpAddresses":{"shape":"S3o","locationName":"privateIpAddresses"},"SecondaryPrivateIpAddressCount":{"locationName":"secondaryPrivateIpAddressCount","type":"integer"},"DryRun":{"locationName":"dryRun","type":"boolean"}}},"output":{"type":"structure","members":{"NetworkInterface":{"shape":"S3r","locationName":"networkInterface"}}},"http":{}},"CreatePlacementGroup":{"input":{"type":"structure","required":["GroupName","Strategy"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"GroupName":{"locationName":"groupName"},"Strategy":{"locationName":"strategy"}}},"http":{}},"CreateReservedInstancesListing":{"input":{"type":"structure","required":["ReservedInstancesId","InstanceCount","PriceSchedules","ClientToken"],"members":{"ReservedInstancesId":{"locationName":"reservedInstancesId"},"InstanceCount":{"locationName":"instanceCount","type":"integer"},"PriceSchedules":{"locationName":"priceSchedules","type":"list","member":{"locationName":"item","type":"structure","members":{"Term":{"locationName":"term","type":"long"},"Price":{"locationName":"price","type":"double"},"CurrencyCode":{"locationName":"currencyCode"}}}},"ClientToken":{"locationName":"clientToken"}}},"output":{"type":"structure","members":{"ReservedInstancesListings":{"shape":"S1n","locationName":"reservedInstancesListingsSet"}}},"http":{}},"CreateRoute":{"input":{"type":"structure","required":["RouteTableId","DestinationCidrBlock"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"RouteTableId":{"locationName":"routeTableId"},"DestinationCidrBlock":{"locationName":"destinationCidrBlock"},"GatewayId":{"locationName":"gatewayId"},"InstanceId":{"locationName":"instanceId"},"NetworkInterfaceId":{"locationName":"networkInterfaceId"},"VpcPeeringConnectionId":{"locationName":"vpcPeeringConnectionId"}}},"http":{}},"CreateRouteTable":{"input":{"type":"structure","required":["VpcId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpcId":{"locationName":"vpcId"}}},"output":{"type":"structure","members":{"RouteTable":{"shape":"S48","locationName":"routeTable"}}},"http":{}},"CreateSecurityGroup":{"input":{"type":"structure","required":["GroupName","Description"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"GroupName":{},"Description":{"locationName":"GroupDescription"},"VpcId":{}}},"output":{"type":"structure","members":{"GroupId":{"locationName":"groupId"}}},"http":{}},"CreateSnapshot":{"input":{"type":"structure","required":["VolumeId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VolumeId":{},"Description":{}}},"output":{"shape":"S4k","locationName":"snapshot"},"http":{}},"CreateSpotDatafeedSubscription":{"input":{"type":"structure","required":["Bucket"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"Bucket":{"locationName":"bucket"},"Prefix":{"locationName":"prefix"}}},"output":{"type":"structure","members":{"SpotDatafeedSubscription":{"shape":"S4o","locationName":"spotDatafeedSubscription"}}},"http":{}},"CreateSubnet":{"input":{"type":"structure","required":["VpcId","CidrBlock"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpcId":{},"CidrBlock":{},"AvailabilityZone":{}}},"output":{"type":"structure","members":{"Subnet":{"shape":"S4t","locationName":"subnet"}}},"http":{}},"CreateTags":{"input":{"type":"structure","required":["Resources","Tags"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"Resources":{"shape":"S4w","locationName":"ResourceId"},"Tags":{"shape":"S9","locationName":"Tag"}}},"http":{}},"CreateVolume":{"input":{"type":"structure","required":["AvailabilityZone"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"Size":{"type":"integer"},"SnapshotId":{},"AvailabilityZone":{},"VolumeType":{},"Iops":{"type":"integer"},"Encrypted":{"locationName":"encrypted","type":"boolean"},"KmsKeyId":{}}},"output":{"shape":"S4y","locationName":"volume"},"http":{}},"CreateVpc":{"input":{"type":"structure","required":["CidrBlock"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"CidrBlock":{},"InstanceTenancy":{"locationName":"instanceTenancy"}}},"output":{"type":"structure","members":{"Vpc":{"shape":"S54","locationName":"vpc"}}},"http":{}},"CreateVpcPeeringConnection":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpcId":{"locationName":"vpcId"},"PeerVpcId":{"locationName":"peerVpcId"},"PeerOwnerId":{"locationName":"peerOwnerId"}}},"output":{"type":"structure","members":{"VpcPeeringConnection":{"shape":"S5","locationName":"vpcPeeringConnection"}}},"http":{}},"CreateVpnConnection":{"input":{"type":"structure","required":["Type","CustomerGatewayId","VpnGatewayId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"Type":{},"CustomerGatewayId":{},"VpnGatewayId":{},"Options":{"locationName":"options","type":"structure","members":{"StaticRoutesOnly":{"locationName":"staticRoutesOnly","type":"boolean"}}}}},"output":{"type":"structure","members":{"VpnConnection":{"shape":"S5b","locationName":"vpnConnection"}}},"http":{}},"CreateVpnConnectionRoute":{"input":{"type":"structure","required":["VpnConnectionId","DestinationCidrBlock"],"members":{"VpnConnectionId":{},"DestinationCidrBlock":{}}},"http":{}},"CreateVpnGateway":{"input":{"type":"structure","required":["Type"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"Type":{},"AvailabilityZone":{}}},"output":{"type":"structure","members":{"VpnGateway":{"shape":"S5n","locationName":"vpnGateway"}}},"http":{}},"DeleteCustomerGateway":{"input":{"type":"structure","required":["CustomerGatewayId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"CustomerGatewayId":{}}},"http":{}},"DeleteDhcpOptions":{"input":{"type":"structure","required":["DhcpOptionsId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"DhcpOptionsId":{}}},"http":{}},"DeleteInternetGateway":{"input":{"type":"structure","required":["InternetGatewayId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InternetGatewayId":{"locationName":"internetGatewayId"}}},"http":{}},"DeleteKeyPair":{"input":{"type":"structure","required":["KeyName"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"KeyName":{}}},"http":{}},"DeleteNetworkAcl":{"input":{"type":"structure","required":["NetworkAclId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"NetworkAclId":{"locationName":"networkAclId"}}},"http":{}},"DeleteNetworkAclEntry":{"input":{"type":"structure","required":["NetworkAclId","RuleNumber","Egress"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"NetworkAclId":{"locationName":"networkAclId"},"RuleNumber":{"locationName":"ruleNumber","type":"integer"},"Egress":{"locationName":"egress","type":"boolean"}}},"http":{}},"DeleteNetworkInterface":{"input":{"type":"structure","required":["NetworkInterfaceId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"NetworkInterfaceId":{"locationName":"networkInterfaceId"}}},"http":{}},"DeletePlacementGroup":{"input":{"type":"structure","required":["GroupName"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"GroupName":{"locationName":"groupName"}}},"http":{}},"DeleteRoute":{"input":{"type":"structure","required":["RouteTableId","DestinationCidrBlock"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"RouteTableId":{"locationName":"routeTableId"},"DestinationCidrBlock":{"locationName":"destinationCidrBlock"}}},"http":{}},"DeleteRouteTable":{"input":{"type":"structure","required":["RouteTableId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"RouteTableId":{"locationName":"routeTableId"}}},"http":{}},"DeleteSecurityGroup":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"GroupName":{},"GroupId":{}}},"http":{}},"DeleteSnapshot":{"input":{"type":"structure","required":["SnapshotId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"SnapshotId":{}}},"http":{}},"DeleteSpotDatafeedSubscription":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"}}},"http":{}},"DeleteSubnet":{"input":{"type":"structure","required":["SubnetId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"SubnetId":{}}},"http":{}},"DeleteTags":{"input":{"type":"structure","required":["Resources"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"Resources":{"shape":"S4w","locationName":"resourceId"},"Tags":{"shape":"S9","locationName":"tag"}}},"http":{}},"DeleteVolume":{"input":{"type":"structure","required":["VolumeId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VolumeId":{}}},"http":{}},"DeleteVpc":{"input":{"type":"structure","required":["VpcId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpcId":{}}},"http":{}},"DeleteVpcPeeringConnection":{"input":{"type":"structure","required":["VpcPeeringConnectionId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpcPeeringConnectionId":{"locationName":"vpcPeeringConnectionId"}}},"output":{"type":"structure","members":{"Return":{"locationName":"return","type":"boolean"}}},"http":{}},"DeleteVpnConnection":{"input":{"type":"structure","required":["VpnConnectionId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpnConnectionId":{}}},"http":{}},"DeleteVpnConnectionRoute":{"input":{"type":"structure","required":["VpnConnectionId","DestinationCidrBlock"],"members":{"VpnConnectionId":{},"DestinationCidrBlock":{}}},"http":{}},"DeleteVpnGateway":{"input":{"type":"structure","required":["VpnGatewayId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpnGatewayId":{}}},"http":{}},"DeregisterImage":{"input":{"type":"structure","required":["ImageId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"ImageId":{}}},"http":{}},"DescribeAccountAttributes":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"AttributeNames":{"locationName":"attributeName","type":"list","member":{"locationName":"attributeName"}}}},"output":{"type":"structure","members":{"AccountAttributes":{"locationName":"accountAttributeSet","type":"list","member":{"locationName":"item","type":"structure","members":{"AttributeName":{"locationName":"attributeName"},"AttributeValues":{"locationName":"attributeValueSet","type":"list","member":{"locationName":"item","type":"structure","members":{"AttributeValue":{"locationName":"attributeValue"}}}}}}}}},"http":{}},"DescribeAddresses":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"PublicIps":{"locationName":"PublicIp","type":"list","member":{"locationName":"PublicIp"}},"Filters":{"shape":"S6m","locationName":"Filter"},"AllocationIds":{"locationName":"AllocationId","type":"list","member":{"locationName":"AllocationId"}}}},"output":{"type":"structure","members":{"Addresses":{"locationName":"addressesSet","type":"list","member":{"locationName":"item","type":"structure","members":{"InstanceId":{"locationName":"instanceId"},"PublicIp":{"locationName":"publicIp"},"AllocationId":{"locationName":"allocationId"},"AssociationId":{"locationName":"associationId"},"Domain":{"locationName":"domain"},"NetworkInterfaceId":{"locationName":"networkInterfaceId"},"NetworkInterfaceOwnerId":{"locationName":"networkInterfaceOwnerId"},"PrivateIpAddress":{"locationName":"privateIpAddress"}}}}}},"http":{}},"DescribeAvailabilityZones":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"ZoneNames":{"locationName":"ZoneName","type":"list","member":{"locationName":"ZoneName"}},"Filters":{"shape":"S6m","locationName":"Filter"}}},"output":{"type":"structure","members":{"AvailabilityZones":{"locationName":"availabilityZoneInfo","type":"list","member":{"locationName":"item","type":"structure","members":{"ZoneName":{"locationName":"zoneName"},"State":{"locationName":"zoneState"},"RegionName":{"locationName":"regionName"},"Messages":{"locationName":"messageSet","type":"list","member":{"locationName":"item","type":"structure","members":{"Message":{"locationName":"message"}}}}}}}}},"http":{}},"DescribeBundleTasks":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"BundleIds":{"locationName":"BundleId","type":"list","member":{"locationName":"BundleId"}},"Filters":{"shape":"S6m","locationName":"Filter"}}},"output":{"type":"structure","members":{"BundleTasks":{"locationName":"bundleInstanceTasksSet","type":"list","member":{"shape":"S1c","locationName":"item"}}}},"http":{}},"DescribeClassicLinkInstances":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InstanceIds":{"shape":"S75","locationName":"InstanceId"},"Filters":{"shape":"S6m","locationName":"Filter"},"NextToken":{"locationName":"nextToken"},"MaxResults":{"locationName":"maxResults","type":"integer"}}},"output":{"type":"structure","members":{"Instances":{"locationName":"instancesSet","type":"list","member":{"locationName":"item","type":"structure","members":{"InstanceId":{"locationName":"instanceId"},"VpcId":{"locationName":"vpcId"},"Groups":{"shape":"S3t","locationName":"groupSet"},"Tags":{"shape":"S9","locationName":"tagSet"}}}},"NextToken":{"locationName":"nextToken"}}},"http":{}},"DescribeConversionTasks":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"Filters":{"shape":"S6m","locationName":"filter"},"ConversionTaskIds":{"locationName":"conversionTaskId","type":"list","member":{"locationName":"item"}}}},"output":{"type":"structure","members":{"ConversionTasks":{"locationName":"conversionTasks","type":"list","member":{"shape":"S7d","locationName":"item"}}}},"http":{}},"DescribeCustomerGateways":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"CustomerGatewayIds":{"locationName":"CustomerGatewayId","type":"list","member":{"locationName":"CustomerGatewayId"}},"Filters":{"shape":"S6m","locationName":"Filter"}}},"output":{"type":"structure","members":{"CustomerGateways":{"locationName":"customerGatewaySet","type":"list","member":{"shape":"S2d","locationName":"item"}}}},"http":{}},"DescribeDhcpOptions":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"DhcpOptionsIds":{"locationName":"DhcpOptionsId","type":"list","member":{"locationName":"DhcpOptionsId"}},"Filters":{"shape":"S6m","locationName":"Filter"}}},"output":{"type":"structure","members":{"DhcpOptions":{"locationName":"dhcpOptionsSet","type":"list","member":{"shape":"S2j","locationName":"item"}}}},"http":{}},"DescribeExportTasks":{"input":{"type":"structure","members":{"ExportTaskIds":{"locationName":"exportTaskId","type":"list","member":{"locationName":"ExportTaskId"}}}},"output":{"type":"structure","members":{"ExportTasks":{"locationName":"exportTaskSet","type":"list","member":{"shape":"S30","locationName":"item"}}}},"http":{}},"DescribeImageAttribute":{"input":{"type":"structure","required":["ImageId","Attribute"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"ImageId":{},"Attribute":{}}},"output":{"locationName":"imageAttribute","type":"structure","members":{"ImageId":{"locationName":"imageId"},"LaunchPermissions":{"shape":"S81","locationName":"launchPermission"},"ProductCodes":{"shape":"S84","locationName":"productCodes"},"KernelId":{"shape":"S2n","locationName":"kernel"},"RamdiskId":{"shape":"S2n","locationName":"ramdisk"},"Description":{"shape":"S2n","locationName":"description"},"SriovNetSupport":{"shape":"S2n","locationName":"sriovNetSupport"},"BlockDeviceMappings":{"shape":"S87","locationName":"blockDeviceMapping"}}},"http":{}},"DescribeImages":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"ImageIds":{"locationName":"ImageId","type":"list","member":{"locationName":"ImageId"}},"Owners":{"shape":"S8a","locationName":"Owner"},"ExecutableUsers":{"locationName":"ExecutableBy","type":"list","member":{"locationName":"ExecutableBy"}},"Filters":{"shape":"S6m","locationName":"Filter"}}},"output":{"type":"structure","members":{"Images":{"locationName":"imagesSet","type":"list","member":{"locationName":"item","type":"structure","members":{"ImageId":{"locationName":"imageId"},"ImageLocation":{"locationName":"imageLocation"},"State":{"locationName":"imageState"},"OwnerId":{"locationName":"imageOwnerId"},"CreationDate":{"locationName":"creationDate"},"Public":{"locationName":"isPublic","type":"boolean"},"ProductCodes":{"shape":"S84","locationName":"productCodes"},"Architecture":{"locationName":"architecture"},"ImageType":{"locationName":"imageType"},"KernelId":{"locationName":"kernelId"},"RamdiskId":{"locationName":"ramdiskId"},"Platform":{"locationName":"platform"},"SriovNetSupport":{"locationName":"sriovNetSupport"},"StateReason":{"shape":"S8i","locationName":"stateReason"},"ImageOwnerAlias":{"locationName":"imageOwnerAlias"},"Name":{"locationName":"name"},"Description":{"locationName":"description"},"RootDeviceType":{"locationName":"rootDeviceType"},"RootDeviceName":{"locationName":"rootDeviceName"},"BlockDeviceMappings":{"shape":"S87","locationName":"blockDeviceMapping"},"VirtualizationType":{"locationName":"virtualizationType"},"Tags":{"shape":"S9","locationName":"tagSet"},"Hypervisor":{"locationName":"hypervisor"}}}}}},"http":{}},"DescribeImportImageTasks":{"input":{"type":"structure","members":{"DryRun":{"type":"boolean"},"ImportTaskIds":{"shape":"S8n","locationName":"ImportTaskId"},"NextToken":{},"MaxResults":{"type":"integer"},"Filters":{"shape":"S6m"}}},"output":{"type":"structure","members":{"ImportImageTasks":{"locationName":"importImageTaskSet","type":"list","member":{"locationName":"item","type":"structure","members":{"ImportTaskId":{"locationName":"importTaskId"},"Architecture":{"locationName":"architecture"},"LicenseType":{"locationName":"licenseType"},"Platform":{"locationName":"platform"},"Hypervisor":{"locationName":"hypervisor"},"Description":{"locationName":"description"},"SnapshotDetails":{"shape":"S8r","locationName":"snapshotDetailSet"},"ImageId":{"locationName":"imageId"},"Progress":{"locationName":"progress"},"StatusMessage":{"locationName":"statusMessage"},"Status":{"locationName":"status"}}}},"NextToken":{"locationName":"nextToken"}}},"http":{}},"DescribeImportSnapshotTasks":{"input":{"type":"structure","members":{"DryRun":{"type":"boolean"},"ImportTaskIds":{"shape":"S8n","locationName":"ImportTaskId"},"NextToken":{},"MaxResults":{"type":"integer"},"Filters":{"shape":"S6m"}}},"output":{"type":"structure","members":{"ImportSnapshotTasks":{"locationName":"importSnapshotTaskSet","type":"list","member":{"locationName":"item","type":"structure","members":{"ImportTaskId":{"locationName":"importTaskId"},"SnapshotTaskDetail":{"shape":"S8y","locationName":"snapshotTaskDetail"},"Description":{"locationName":"description"}}}},"NextToken":{"locationName":"nextToken"}}},"http":{}},"DescribeInstanceAttribute":{"input":{"type":"structure","required":["InstanceId","Attribute"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InstanceId":{"locationName":"instanceId"},"Attribute":{"locationName":"attribute"}}},"output":{"type":"structure","members":{"InstanceId":{"locationName":"instanceId"},"InstanceType":{"shape":"S2n","locationName":"instanceType"},"KernelId":{"shape":"S2n","locationName":"kernel"},"RamdiskId":{"shape":"S2n","locationName":"ramdisk"},"UserData":{"shape":"S2n","locationName":"userData"},"DisableApiTermination":{"shape":"S92","locationName":"disableApiTermination"},"InstanceInitiatedShutdownBehavior":{"shape":"S2n","locationName":"instanceInitiatedShutdownBehavior"},"RootDeviceName":{"shape":"S2n","locationName":"rootDeviceName"},"BlockDeviceMappings":{"shape":"S93","locationName":"blockDeviceMapping"},"ProductCodes":{"shape":"S84","locationName":"productCodes"},"EbsOptimized":{"shape":"S92","locationName":"ebsOptimized"},"SriovNetSupport":{"shape":"S2n","locationName":"sriovNetSupport"},"SourceDestCheck":{"shape":"S92","locationName":"sourceDestCheck"},"Groups":{"shape":"S3t","locationName":"groupSet"}}},"http":{}},"DescribeInstanceStatus":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InstanceIds":{"shape":"S75","locationName":"InstanceId"},"Filters":{"shape":"S6m","locationName":"Filter"},"NextToken":{},"MaxResults":{"type":"integer"},"IncludeAllInstances":{"locationName":"includeAllInstances","type":"boolean"}}},"output":{"type":"structure","members":{"InstanceStatuses":{"locationName":"instanceStatusSet","type":"list","member":{"locationName":"item","type":"structure","members":{"InstanceId":{"locationName":"instanceId"},"AvailabilityZone":{"locationName":"availabilityZone"},"Events":{"locationName":"eventsSet","type":"list","member":{"locationName":"item","type":"structure","members":{"Code":{"locationName":"code"},"Description":{"locationName":"description"},"NotBefore":{"locationName":"notBefore","type":"timestamp"},"NotAfter":{"locationName":"notAfter","type":"timestamp"}}}},"InstanceState":{"shape":"S9d","locationName":"instanceState"},"SystemStatus":{"shape":"S9f","locationName":"systemStatus"},"InstanceStatus":{"shape":"S9f","locationName":"instanceStatus"}}}},"NextToken":{"locationName":"nextToken"}}},"http":{}},"DescribeInstances":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InstanceIds":{"shape":"S75","locationName":"InstanceId"},"Filters":{"shape":"S6m","locationName":"Filter"},"NextToken":{"locationName":"nextToken"},"MaxResults":{"locationName":"maxResults","type":"integer"}}},"output":{"type":"structure","members":{"Reservations":{"locationName":"reservationSet","type":"list","member":{"shape":"S9o","locationName":"item"}},"NextToken":{"locationName":"nextToken"}}},"http":{}},"DescribeInternetGateways":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InternetGatewayIds":{"shape":"S2h","locationName":"internetGatewayId"},"Filters":{"shape":"S6m","locationName":"Filter"}}},"output":{"type":"structure","members":{"InternetGateways":{"locationName":"internetGatewaySet","type":"list","member":{"shape":"S36","locationName":"item"}}}},"http":{}},"DescribeKeyPairs":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"KeyNames":{"locationName":"KeyName","type":"list","member":{"locationName":"KeyName"}},"Filters":{"shape":"S6m","locationName":"Filter"}}},"output":{"type":"structure","members":{"KeyPairs":{"locationName":"keySet","type":"list","member":{"locationName":"item","type":"structure","members":{"KeyName":{"locationName":"keyName"},"KeyFingerprint":{"locationName":"keyFingerprint"}}}}}},"http":{}},"DescribeNetworkAcls":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"NetworkAclIds":{"shape":"S2h","locationName":"NetworkAclId"},"Filters":{"shape":"S6m","locationName":"Filter"}}},"output":{"type":"structure","members":{"NetworkAcls":{"locationName":"networkAclSet","type":"list","member":{"shape":"S3d","locationName":"item"}}}},"http":{}},"DescribeNetworkInterfaceAttribute":{"input":{"type":"structure","required":["NetworkInterfaceId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"NetworkInterfaceId":{"locationName":"networkInterfaceId"},"Attribute":{"locationName":"attribute"}}},"output":{"type":"structure","members":{"NetworkInterfaceId":{"locationName":"networkInterfaceId"},"Description":{"shape":"S2n","locationName":"description"},"SourceDestCheck":{"shape":"S92","locationName":"sourceDestCheck"},"Groups":{"shape":"S3t","locationName":"groupSet"},"Attachment":{"shape":"S3v","locationName":"attachment"}}},"http":{}},"DescribeNetworkInterfaces":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"NetworkInterfaceIds":{"locationName":"NetworkInterfaceId","type":"list","member":{"locationName":"item"}},"Filters":{"shape":"S6m","locationName":"filter"}}},"output":{"type":"structure","members":{"NetworkInterfaces":{"locationName":"networkInterfaceSet","type":"list","member":{"shape":"S3r","locationName":"item"}}}},"http":{}},"DescribePlacementGroups":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"GroupNames":{"locationName":"groupName","type":"list","member":{}},"Filters":{"shape":"S6m","locationName":"Filter"}}},"output":{"type":"structure","members":{"PlacementGroups":{"locationName":"placementGroupSet","type":"list","member":{"locationName":"item","type":"structure","members":{"GroupName":{"locationName":"groupName"},"Strategy":{"locationName":"strategy"},"State":{"locationName":"state"}}}}}},"http":{}},"DescribeRegions":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"RegionNames":{"locationName":"RegionName","type":"list","member":{"locationName":"RegionName"}},"Filters":{"shape":"S6m","locationName":"Filter"}}},"output":{"type":"structure","members":{"Regions":{"locationName":"regionInfo","type":"list","member":{"locationName":"item","type":"structure","members":{"RegionName":{"locationName":"regionName"},"Endpoint":{"locationName":"regionEndpoint"}}}}}},"http":{}},"DescribeReservedInstances":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"ReservedInstancesIds":{"shape":"Sax","locationName":"ReservedInstancesId"},"Filters":{"shape":"S6m","locationName":"Filter"},"OfferingType":{"locationName":"offeringType"}}},"output":{"type":"structure","members":{"ReservedInstances":{"locationName":"reservedInstancesSet","type":"list","member":{"locationName":"item","type":"structure","members":{"ReservedInstancesId":{"locationName":"reservedInstancesId"},"InstanceType":{"locationName":"instanceType"},"AvailabilityZone":{"locationName":"availabilityZone"},"Start":{"locationName":"start","type":"timestamp"},"End":{"locationName":"end","type":"timestamp"},"Duration":{"locationName":"duration","type":"long"},"UsagePrice":{"locationName":"usagePrice","type":"float"},"FixedPrice":{"locationName":"fixedPrice","type":"float"},"InstanceCount":{"locationName":"instanceCount","type":"integer"},"ProductDescription":{"locationName":"productDescription"},"State":{"locationName":"state"},"Tags":{"shape":"S9","locationName":"tagSet"},"InstanceTenancy":{"locationName":"instanceTenancy"},"CurrencyCode":{"locationName":"currencyCode"},"OfferingType":{"locationName":"offeringType"},"RecurringCharges":{"shape":"Sb5","locationName":"recurringCharges"}}}}}},"http":{}},"DescribeReservedInstancesListings":{"input":{"type":"structure","members":{"ReservedInstancesId":{"locationName":"reservedInstancesId"},"ReservedInstancesListingId":{"locationName":"reservedInstancesListingId"},"Filters":{"shape":"S6m","locationName":"filters"}}},"output":{"type":"structure","members":{"ReservedInstancesListings":{"shape":"S1n","locationName":"reservedInstancesListingsSet"}}},"http":{}},"DescribeReservedInstancesModifications":{"input":{"type":"structure","members":{"ReservedInstancesModificationIds":{"locationName":"ReservedInstancesModificationId","type":"list","member":{"locationName":"ReservedInstancesModificationId"}},"NextToken":{"locationName":"nextToken"},"Filters":{"shape":"S6m","locationName":"Filter"}}},"output":{"type":"structure","members":{"ReservedInstancesModifications":{"locationName":"reservedInstancesModificationsSet","type":"list","member":{"locationName":"item","type":"structure","members":{"ReservedInstancesModificationId":{"locationName":"reservedInstancesModificationId"},"ReservedInstancesIds":{"locationName":"reservedInstancesSet","type":"list","member":{"locationName":"item","type":"structure","members":{"ReservedInstancesId":{"locationName":"reservedInstancesId"}}}},"ModificationResults":{"locationName":"modificationResultSet","type":"list","member":{"locationName":"item","type":"structure","members":{"ReservedInstancesId":{"locationName":"reservedInstancesId"},"TargetConfiguration":{"shape":"Sbj","locationName":"targetConfiguration"}}}},"CreateDate":{"locationName":"createDate","type":"timestamp"},"UpdateDate":{"locationName":"updateDate","type":"timestamp"},"EffectiveDate":{"locationName":"effectiveDate","type":"timestamp"},"Status":{"locationName":"status"},"StatusMessage":{"locationName":"statusMessage"},"ClientToken":{"locationName":"clientToken"}}}},"NextToken":{"locationName":"nextToken"}}},"http":{}},"DescribeReservedInstancesOfferings":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"ReservedInstancesOfferingIds":{"locationName":"ReservedInstancesOfferingId","type":"list","member":{}},"InstanceType":{},"AvailabilityZone":{},"ProductDescription":{},"Filters":{"shape":"S6m","locationName":"Filter"},"InstanceTenancy":{"locationName":"instanceTenancy"},"OfferingType":{"locationName":"offeringType"},"NextToken":{"locationName":"nextToken"},"MaxResults":{"locationName":"maxResults","type":"integer"},"IncludeMarketplace":{"type":"boolean"},"MinDuration":{"type":"long"},"MaxDuration":{"type":"long"},"MaxInstanceCount":{"type":"integer"}}},"output":{"type":"structure","members":{"ReservedInstancesOfferings":{"locationName":"reservedInstancesOfferingsSet","type":"list","member":{"locationName":"item","type":"structure","members":{"ReservedInstancesOfferingId":{"locationName":"reservedInstancesOfferingId"},"InstanceType":{"locationName":"instanceType"},"AvailabilityZone":{"locationName":"availabilityZone"},"Duration":{"locationName":"duration","type":"long"},"UsagePrice":{"locationName":"usagePrice","type":"float"},"FixedPrice":{"locationName":"fixedPrice","type":"float"},"ProductDescription":{"locationName":"productDescription"},"InstanceTenancy":{"locationName":"instanceTenancy"},"CurrencyCode":{"locationName":"currencyCode"},"OfferingType":{"locationName":"offeringType"},"RecurringCharges":{"shape":"Sb5","locationName":"recurringCharges"},"Marketplace":{"locationName":"marketplace","type":"boolean"},"PricingDetails":{"locationName":"pricingDetailsSet","type":"list","member":{"locationName":"item","type":"structure","members":{"Price":{"locationName":"price","type":"double"},"Count":{"locationName":"count","type":"integer"}}}}}}},"NextToken":{"locationName":"nextToken"}}},"http":{}},"DescribeRouteTables":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"RouteTableIds":{"shape":"S2h","locationName":"RouteTableId"},"Filters":{"shape":"S6m","locationName":"Filter"}}},"output":{"type":"structure","members":{"RouteTables":{"locationName":"routeTableSet","type":"list","member":{"shape":"S48","locationName":"item"}}}},"http":{}},"DescribeSecurityGroups":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"GroupNames":{"shape":"Sbv","locationName":"GroupName"},"GroupIds":{"shape":"Sn","locationName":"GroupId"},"Filters":{"shape":"S6m","locationName":"Filter"}}},"output":{"type":"structure","members":{"SecurityGroups":{"locationName":"securityGroupInfo","type":"list","member":{"locationName":"item","type":"structure","members":{"OwnerId":{"locationName":"ownerId"},"GroupName":{"locationName":"groupName"},"GroupId":{"locationName":"groupId"},"Description":{"locationName":"groupDescription"},"IpPermissions":{"shape":"S10","locationName":"ipPermissions"},"IpPermissionsEgress":{"shape":"S10","locationName":"ipPermissionsEgress"},"VpcId":{"locationName":"vpcId"},"Tags":{"shape":"S9","locationName":"tagSet"}}}}}},"http":{}},"DescribeSnapshotAttribute":{"input":{"type":"structure","required":["SnapshotId","Attribute"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"SnapshotId":{},"Attribute":{}}},"output":{"type":"structure","members":{"SnapshotId":{"locationName":"snapshotId"},"CreateVolumePermissions":{"shape":"Sc2","locationName":"createVolumePermission"},"ProductCodes":{"shape":"S84","locationName":"productCodes"}}},"http":{}},"DescribeSnapshots":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"SnapshotIds":{"locationName":"SnapshotId","type":"list","member":{"locationName":"SnapshotId"}},"OwnerIds":{"shape":"S8a","locationName":"Owner"},"RestorableByUserIds":{"locationName":"RestorableBy","type":"list","member":{}},"Filters":{"shape":"S6m","locationName":"Filter"},"NextToken":{},"MaxResults":{"type":"integer"}}},"output":{"type":"structure","members":{"Snapshots":{"locationName":"snapshotSet","type":"list","member":{"shape":"S4k","locationName":"item"}},"NextToken":{"locationName":"nextToken"}}},"http":{}},"DescribeSpotDatafeedSubscription":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"}}},"output":{"type":"structure","members":{"SpotDatafeedSubscription":{"shape":"S4o","locationName":"spotDatafeedSubscription"}}},"http":{}},"DescribeSpotInstanceRequests":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"SpotInstanceRequestIds":{"shape":"S1z","locationName":"SpotInstanceRequestId"},"Filters":{"shape":"S6m","locationName":"Filter"}}},"output":{"type":"structure","members":{"SpotInstanceRequests":{"shape":"Scd","locationName":"spotInstanceRequestSet"}}},"http":{}},"DescribeSpotPriceHistory":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"StartTime":{"locationName":"startTime","type":"timestamp"},"EndTime":{"locationName":"endTime","type":"timestamp"},"InstanceTypes":{"locationName":"InstanceType","type":"list","member":{}},"ProductDescriptions":{"locationName":"ProductDescription","type":"list","member":{}},"Filters":{"shape":"S6m","locationName":"Filter"},"AvailabilityZone":{"locationName":"availabilityZone"},"MaxResults":{"locationName":"maxResults","type":"integer"},"NextToken":{"locationName":"nextToken"}}},"output":{"type":"structure","members":{"SpotPriceHistory":{"locationName":"spotPriceHistorySet","type":"list","member":{"locationName":"item","type":"structure","members":{"InstanceType":{"locationName":"instanceType"},"ProductDescription":{"locationName":"productDescription"},"SpotPrice":{"locationName":"spotPrice"},"Timestamp":{"locationName":"timestamp","type":"timestamp"},"AvailabilityZone":{"locationName":"availabilityZone"}}}},"NextToken":{"locationName":"nextToken"}}},"http":{}},"DescribeSubnets":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"SubnetIds":{"locationName":"SubnetId","type":"list","member":{"locationName":"SubnetId"}},"Filters":{"shape":"S6m","locationName":"Filter"}}},"output":{"type":"structure","members":{"Subnets":{"locationName":"subnetSet","type":"list","member":{"shape":"S4t","locationName":"item"}}}},"http":{}},"DescribeTags":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"Filters":{"shape":"S6m","locationName":"Filter"},"MaxResults":{"locationName":"maxResults","type":"integer"},"NextToken":{"locationName":"nextToken"}}},"output":{"type":"structure","members":{"Tags":{"locationName":"tagSet","type":"list","member":{"locationName":"item","type":"structure","members":{"ResourceId":{"locationName":"resourceId"},"ResourceType":{"locationName":"resourceType"},"Key":{"locationName":"key"},"Value":{"locationName":"value"}}}},"NextToken":{"locationName":"nextToken"}}},"http":{}},"DescribeVolumeAttribute":{"input":{"type":"structure","required":["VolumeId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VolumeId":{},"Attribute":{}}},"output":{"type":"structure","members":{"VolumeId":{"locationName":"volumeId"},"AutoEnableIO":{"shape":"S92","locationName":"autoEnableIO"},"ProductCodes":{"shape":"S84","locationName":"productCodes"}}},"http":{}},"DescribeVolumeStatus":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VolumeIds":{"shape":"Sd7","locationName":"VolumeId"},"Filters":{"shape":"S6m","locationName":"Filter"},"NextToken":{},"MaxResults":{"type":"integer"}}},"output":{"type":"structure","members":{"VolumeStatuses":{"locationName":"volumeStatusSet","type":"list","member":{"locationName":"item","type":"structure","members":{"VolumeId":{"locationName":"volumeId"},"AvailabilityZone":{"locationName":"availabilityZone"},"VolumeStatus":{"locationName":"volumeStatus","type":"structure","members":{"Status":{"locationName":"status"},"Details":{"locationName":"details","type":"list","member":{"locationName":"item","type":"structure","members":{"Name":{"locationName":"name"},"Status":{"locationName":"status"}}}}}},"Events":{"locationName":"eventsSet","type":"list","member":{"locationName":"item","type":"structure","members":{"EventType":{"locationName":"eventType"},"Description":{"locationName":"description"},"NotBefore":{"locationName":"notBefore","type":"timestamp"},"NotAfter":{"locationName":"notAfter","type":"timestamp"},"EventId":{"locationName":"eventId"}}}},"Actions":{"locationName":"actionsSet","type":"list","member":{"locationName":"item","type":"structure","members":{"Code":{"locationName":"code"},"Description":{"locationName":"description"},"EventType":{"locationName":"eventType"},"EventId":{"locationName":"eventId"}}}}}}},"NextToken":{"locationName":"nextToken"}}},"http":{}},"DescribeVolumes":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VolumeIds":{"shape":"Sd7","locationName":"VolumeId"},"Filters":{"shape":"S6m","locationName":"Filter"},"NextToken":{"locationName":"nextToken"},"MaxResults":{"locationName":"maxResults","type":"integer"}}},"output":{"type":"structure","members":{"Volumes":{"locationName":"volumeSet","type":"list","member":{"shape":"S4y","locationName":"item"}},"NextToken":{"locationName":"nextToken"}}},"http":{}},"DescribeVpcAttribute":{"input":{"type":"structure","required":["VpcId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpcId":{},"Attribute":{}}},"output":{"type":"structure","members":{"VpcId":{"locationName":"vpcId"},"EnableDnsSupport":{"shape":"S92","locationName":"enableDnsSupport"},"EnableDnsHostnames":{"shape":"S92","locationName":"enableDnsHostnames"}}},"http":{}},"DescribeVpcClassicLink":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpcIds":{"locationName":"VpcId","type":"list","member":{"locationName":"VpcId"}},"Filters":{"shape":"S6m","locationName":"Filter"}}},"output":{"type":"structure","members":{"Vpcs":{"locationName":"vpcSet","type":"list","member":{"locationName":"item","type":"structure","members":{"VpcId":{"locationName":"vpcId"},"ClassicLinkEnabled":{"locationName":"classicLinkEnabled","type":"boolean"},"Tags":{"shape":"S9","locationName":"tagSet"}}}}}},"http":{}},"DescribeVpcPeeringConnections":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpcPeeringConnectionIds":{"shape":"S2h","locationName":"VpcPeeringConnectionId"},"Filters":{"shape":"S6m","locationName":"Filter"}}},"output":{"type":"structure","members":{"VpcPeeringConnections":{"locationName":"vpcPeeringConnectionSet","type":"list","member":{"shape":"S5","locationName":"item"}}}},"http":{}},"DescribeVpcs":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpcIds":{"locationName":"VpcId","type":"list","member":{"locationName":"VpcId"}},"Filters":{"shape":"S6m","locationName":"Filter"}}},"output":{"type":"structure","members":{"Vpcs":{"locationName":"vpcSet","type":"list","member":{"shape":"S54","locationName":"item"}}}},"http":{}},"DescribeVpnConnections":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpnConnectionIds":{"locationName":"VpnConnectionId","type":"list","member":{"locationName":"VpnConnectionId"}},"Filters":{"shape":"S6m","locationName":"Filter"}}},"output":{"type":"structure","members":{"VpnConnections":{"locationName":"vpnConnectionSet","type":"list","member":{"shape":"S5b","locationName":"item"}}}},"http":{}},"DescribeVpnGateways":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpnGatewayIds":{"locationName":"VpnGatewayId","type":"list","member":{"locationName":"VpnGatewayId"}},"Filters":{"shape":"S6m","locationName":"Filter"}}},"output":{"type":"structure","members":{"VpnGateways":{"locationName":"vpnGatewaySet","type":"list","member":{"shape":"S5n","locationName":"item"}}}},"http":{}},"DetachClassicLinkVpc":{"input":{"type":"structure","required":["InstanceId","VpcId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InstanceId":{"locationName":"instanceId"},"VpcId":{"locationName":"vpcId"}}},"output":{"type":"structure","members":{"Return":{"locationName":"return","type":"boolean"}}},"http":{}},"DetachInternetGateway":{"input":{"type":"structure","required":["InternetGatewayId","VpcId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InternetGatewayId":{"locationName":"internetGatewayId"},"VpcId":{"locationName":"vpcId"}}},"http":{}},"DetachNetworkInterface":{"input":{"type":"structure","required":["AttachmentId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"AttachmentId":{"locationName":"attachmentId"},"Force":{"locationName":"force","type":"boolean"}}},"http":{}},"DetachVolume":{"input":{"type":"structure","required":["VolumeId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VolumeId":{},"InstanceId":{},"Device":{},"Force":{"type":"boolean"}}},"output":{"shape":"St","locationName":"attachment"},"http":{}},"DetachVpnGateway":{"input":{"type":"structure","required":["VpnGatewayId","VpcId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpnGatewayId":{},"VpcId":{}}},"http":{}},"DisableVgwRoutePropagation":{"input":{"type":"structure","required":["RouteTableId","GatewayId"],"members":{"RouteTableId":{},"GatewayId":{}}},"http":{}},"DisableVpcClassicLink":{"input":{"type":"structure","required":["VpcId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpcId":{"locationName":"vpcId"}}},"output":{"type":"structure","members":{"Return":{"locationName":"return","type":"boolean"}}},"http":{}},"DisassociateAddress":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"PublicIp":{},"AssociationId":{}}},"http":{}},"DisassociateRouteTable":{"input":{"type":"structure","required":["AssociationId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"AssociationId":{"locationName":"associationId"}}},"http":{}},"EnableVgwRoutePropagation":{"input":{"type":"structure","required":["RouteTableId","GatewayId"],"members":{"RouteTableId":{},"GatewayId":{}}},"http":{}},"EnableVolumeIO":{"input":{"type":"structure","required":["VolumeId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VolumeId":{"locationName":"volumeId"}}},"http":{}},"EnableVpcClassicLink":{"input":{"type":"structure","required":["VpcId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpcId":{"locationName":"vpcId"}}},"output":{"type":"structure","members":{"Return":{"locationName":"return","type":"boolean"}}},"http":{}},"GetConsoleOutput":{"input":{"type":"structure","required":["InstanceId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InstanceId":{}}},"output":{"type":"structure","members":{"InstanceId":{"locationName":"instanceId"},"Timestamp":{"locationName":"timestamp","type":"timestamp"},"Output":{"locationName":"output"}}},"http":{}},"GetPasswordData":{"input":{"type":"structure","required":["InstanceId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InstanceId":{}}},"output":{"type":"structure","members":{"InstanceId":{"locationName":"instanceId"},"Timestamp":{"locationName":"timestamp","type":"timestamp"},"PasswordData":{"locationName":"passwordData"}}},"http":{}},"ImportImage":{"input":{"type":"structure","members":{"DryRun":{"type":"boolean"},"Description":{},"DiskContainers":{"locationName":"DiskContainer","type":"list","member":{"locationName":"item","type":"structure","members":{"Description":{},"Format":{},"Url":{},"UserBucket":{"shape":"Sew"},"DeviceName":{},"SnapshotId":{}}}},"LicenseType":{},"Hypervisor":{},"Architecture":{},"Platform":{},"ClientData":{"shape":"Sex"},"ClientToken":{},"RoleName":{}}},"output":{"type":"structure","members":{"ImportTaskId":{"locationName":"importTaskId"},"Architecture":{"locationName":"architecture"},"LicenseType":{"locationName":"licenseType"},"Platform":{"locationName":"platform"},"Hypervisor":{"locationName":"hypervisor"},"Description":{"locationName":"description"},"SnapshotDetails":{"shape":"S8r","locationName":"snapshotDetailSet"},"ImageId":{"locationName":"imageId"},"Progress":{"locationName":"progress"},"StatusMessage":{"locationName":"statusMessage"},"Status":{"locationName":"status"}}},"http":{}},"ImportInstance":{"input":{"type":"structure","required":["Platform"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"Description":{"locationName":"description"},"LaunchSpecification":{"locationName":"launchSpecification","type":"structure","members":{"Architecture":{"locationName":"architecture"},"GroupNames":{"shape":"Sf1","locationName":"GroupName"},"GroupIds":{"shape":"S3n","locationName":"GroupId"},"AdditionalInfo":{"locationName":"additionalInfo"},"UserData":{"locationName":"userData","type":"structure","members":{"Data":{"locationName":"data"}}},"InstanceType":{"locationName":"instanceType"},"Placement":{"shape":"S9s","locationName":"placement"},"Monitoring":{"locationName":"monitoring","type":"boolean"},"SubnetId":{"locationName":"subnetId"},"InstanceInitiatedShutdownBehavior":{"locationName":"instanceInitiatedShutdownBehavior"},"PrivateIpAddress":{"locationName":"privateIpAddress"}}},"DiskImages":{"locationName":"diskImage","type":"list","member":{"type":"structure","members":{"Image":{"shape":"Sf6"},"Description":{},"Volume":{"shape":"Sf7"}}}},"Platform":{"locationName":"platform"}}},"output":{"type":"structure","members":{"ConversionTask":{"shape":"S7d","locationName":"conversionTask"}}},"http":{}},"ImportKeyPair":{"input":{"type":"structure","required":["KeyName","PublicKeyMaterial"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"KeyName":{"locationName":"keyName"},"PublicKeyMaterial":{"locationName":"publicKeyMaterial","type":"blob"}}},"output":{"type":"structure","members":{"KeyName":{"locationName":"keyName"},"KeyFingerprint":{"locationName":"keyFingerprint"}}},"http":{}},"ImportSnapshot":{"input":{"type":"structure","members":{"DryRun":{"type":"boolean"},"Description":{},"DiskContainer":{"type":"structure","members":{"Description":{},"Format":{},"Url":{},"UserBucket":{"shape":"Sew"}}},"ClientData":{"shape":"Sex"},"ClientToken":{},"RoleName":{}}},"output":{"type":"structure","members":{"ImportTaskId":{"locationName":"importTaskId"},"SnapshotTaskDetail":{"shape":"S8y","locationName":"snapshotTaskDetail"},"Description":{"locationName":"description"}}},"http":{}},"ImportVolume":{"input":{"type":"structure","required":["AvailabilityZone","Image","Volume"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"AvailabilityZone":{"locationName":"availabilityZone"},"Image":{"shape":"Sf6","locationName":"image"},"Description":{"locationName":"description"},"Volume":{"shape":"Sf7","locationName":"volume"}}},"output":{"type":"structure","members":{"ConversionTask":{"shape":"S7d","locationName":"conversionTask"}}},"http":{}},"ModifyImageAttribute":{"input":{"type":"structure","required":["ImageId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"ImageId":{},"Attribute":{},"OperationType":{},"UserIds":{"shape":"Sfh","locationName":"UserId"},"UserGroups":{"locationName":"UserGroup","type":"list","member":{"locationName":"UserGroup"}},"ProductCodes":{"locationName":"ProductCode","type":"list","member":{"locationName":"ProductCode"}},"Value":{},"LaunchPermission":{"type":"structure","members":{"Add":{"shape":"S81"},"Remove":{"shape":"S81"}}},"Description":{"shape":"S2n"}}},"http":{}},"ModifyInstanceAttribute":{"input":{"type":"structure","required":["InstanceId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InstanceId":{"locationName":"instanceId"},"Attribute":{"locationName":"attribute"},"Value":{"locationName":"value"},"BlockDeviceMappings":{"locationName":"blockDeviceMapping","type":"list","member":{"locationName":"item","type":"structure","members":{"DeviceName":{"locationName":"deviceName"},"Ebs":{"locationName":"ebs","type":"structure","members":{"VolumeId":{"locationName":"volumeId"},"DeleteOnTermination":{"locationName":"deleteOnTermination","type":"boolean"}}},"VirtualName":{"locationName":"virtualName"},"NoDevice":{"locationName":"noDevice"}}}},"SourceDestCheck":{"shape":"S92"},"DisableApiTermination":{"shape":"S92","locationName":"disableApiTermination"},"InstanceType":{"shape":"S2n","locationName":"instanceType"},"Kernel":{"shape":"S2n","locationName":"kernel"},"Ramdisk":{"shape":"S2n","locationName":"ramdisk"},"UserData":{"locationName":"userData","type":"structure","members":{"Value":{"locationName":"value","type":"blob"}}},"InstanceInitiatedShutdownBehavior":{"shape":"S2n","locationName":"instanceInitiatedShutdownBehavior"},"Groups":{"shape":"Sn","locationName":"GroupId"},"EbsOptimized":{"shape":"S92","locationName":"ebsOptimized"},"SriovNetSupport":{"shape":"S2n","locationName":"sriovNetSupport"}}},"http":{}},"ModifyNetworkInterfaceAttribute":{"input":{"type":"structure","required":["NetworkInterfaceId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"NetworkInterfaceId":{"locationName":"networkInterfaceId"},"Description":{"shape":"S2n","locationName":"description"},"SourceDestCheck":{"shape":"S92","locationName":"sourceDestCheck"},"Groups":{"shape":"S3n","locationName":"SecurityGroupId"},"Attachment":{"locationName":"attachment","type":"structure","members":{"AttachmentId":{"locationName":"attachmentId"},"DeleteOnTermination":{"locationName":"deleteOnTermination","type":"boolean"}}}}},"http":{}},"ModifyReservedInstances":{"input":{"type":"structure","required":["ReservedInstancesIds","TargetConfigurations"],"members":{"ClientToken":{"locationName":"clientToken"},"ReservedInstancesIds":{"shape":"Sax","locationName":"ReservedInstancesId"},"TargetConfigurations":{"locationName":"ReservedInstancesConfigurationSetItemType","type":"list","member":{"shape":"Sbj","locationName":"item"}}}},"output":{"type":"structure","members":{"ReservedInstancesModificationId":{"locationName":"reservedInstancesModificationId"}}},"http":{}},"ModifySnapshotAttribute":{"input":{"type":"structure","required":["SnapshotId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"SnapshotId":{},"Attribute":{},"OperationType":{},"UserIds":{"shape":"Sfh","locationName":"UserId"},"GroupNames":{"shape":"Sbv","locationName":"UserGroup"},"CreateVolumePermission":{"type":"structure","members":{"Add":{"shape":"Sc2"},"Remove":{"shape":"Sc2"}}}}},"http":{}},"ModifySubnetAttribute":{"input":{"type":"structure","required":["SubnetId"],"members":{"SubnetId":{"locationName":"subnetId"},"MapPublicIpOnLaunch":{"shape":"S92"}}},"http":{}},"ModifyVolumeAttribute":{"input":{"type":"structure","required":["VolumeId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VolumeId":{},"AutoEnableIO":{"shape":"S92"}}},"http":{}},"ModifyVpcAttribute":{"input":{"type":"structure","required":["VpcId"],"members":{"VpcId":{"locationName":"vpcId"},"EnableDnsSupport":{"shape":"S92"},"EnableDnsHostnames":{"shape":"S92"}}},"http":{}},"MonitorInstances":{"input":{"type":"structure","required":["InstanceIds"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InstanceIds":{"shape":"S75","locationName":"InstanceId"}}},"output":{"type":"structure","members":{"InstanceMonitorings":{"shape":"Sg2","locationName":"instancesSet"}}},"http":{}},"PurchaseReservedInstancesOffering":{"input":{"type":"structure","required":["ReservedInstancesOfferingId","InstanceCount"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"ReservedInstancesOfferingId":{},"InstanceCount":{"type":"integer"},"LimitPrice":{"locationName":"limitPrice","type":"structure","members":{"Amount":{"locationName":"amount","type":"double"},"CurrencyCode":{"locationName":"currencyCode"}}}}},"output":{"type":"structure","members":{"ReservedInstancesId":{"locationName":"reservedInstancesId"}}},"http":{}},"RebootInstances":{"input":{"type":"structure","required":["InstanceIds"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InstanceIds":{"shape":"S75","locationName":"InstanceId"}}},"http":{}},"RegisterImage":{"input":{"type":"structure","required":["Name"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"ImageLocation":{},"Name":{"locationName":"name"},"Description":{"locationName":"description"},"Architecture":{"locationName":"architecture"},"KernelId":{"locationName":"kernelId"},"RamdiskId":{"locationName":"ramdiskId"},"RootDeviceName":{"locationName":"rootDeviceName"},"BlockDeviceMappings":{"shape":"S2p","locationName":"BlockDeviceMapping"},"VirtualizationType":{"locationName":"virtualizationType"},"SriovNetSupport":{"locationName":"sriovNetSupport"}}},"output":{"type":"structure","members":{"ImageId":{"locationName":"imageId"}}},"http":{}},"RejectVpcPeeringConnection":{"input":{"type":"structure","required":["VpcPeeringConnectionId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"VpcPeeringConnectionId":{"locationName":"vpcPeeringConnectionId"}}},"output":{"type":"structure","members":{"Return":{"locationName":"return","type":"boolean"}}},"http":{}},"ReleaseAddress":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"PublicIp":{},"AllocationId":{}}},"http":{}},"ReplaceNetworkAclAssociation":{"input":{"type":"structure","required":["AssociationId","NetworkAclId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"AssociationId":{"locationName":"associationId"},"NetworkAclId":{"locationName":"networkAclId"}}},"output":{"type":"structure","members":{"NewAssociationId":{"locationName":"newAssociationId"}}},"http":{}},"ReplaceNetworkAclEntry":{"input":{"type":"structure","required":["NetworkAclId","RuleNumber","Protocol","RuleAction","Egress","CidrBlock"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"NetworkAclId":{"locationName":"networkAclId"},"RuleNumber":{"locationName":"ruleNumber","type":"integer"},"Protocol":{"locationName":"protocol"},"RuleAction":{"locationName":"ruleAction"},"Egress":{"locationName":"egress","type":"boolean"},"CidrBlock":{"locationName":"cidrBlock"},"IcmpTypeCode":{"shape":"S3h","locationName":"Icmp"},"PortRange":{"shape":"S3i","locationName":"portRange"}}},"http":{}},"ReplaceRoute":{"input":{"type":"structure","required":["RouteTableId","DestinationCidrBlock"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"RouteTableId":{"locationName":"routeTableId"},"DestinationCidrBlock":{"locationName":"destinationCidrBlock"},"GatewayId":{"locationName":"gatewayId"},"InstanceId":{"locationName":"instanceId"},"NetworkInterfaceId":{"locationName":"networkInterfaceId"},"VpcPeeringConnectionId":{"locationName":"vpcPeeringConnectionId"}}},"http":{}},"ReplaceRouteTableAssociation":{"input":{"type":"structure","required":["AssociationId","RouteTableId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"AssociationId":{"locationName":"associationId"},"RouteTableId":{"locationName":"routeTableId"}}},"output":{"type":"structure","members":{"NewAssociationId":{"locationName":"newAssociationId"}}},"http":{}},"ReportInstanceStatus":{"input":{"type":"structure","required":["Instances","Status","ReasonCodes"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"Instances":{"shape":"S75","locationName":"instanceId"},"Status":{"locationName":"status"},"StartTime":{"locationName":"startTime","type":"timestamp"},"EndTime":{"locationName":"endTime","type":"timestamp"},"ReasonCodes":{"locationName":"reasonCode","type":"list","member":{"locationName":"item"}},"Description":{"locationName":"description"}}},"http":{}},"RequestSpotInstances":{"input":{"type":"structure","required":["SpotPrice"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"SpotPrice":{"locationName":"spotPrice"},"InstanceCount":{"locationName":"instanceCount","type":"integer"},"Type":{"locationName":"type"},"ValidFrom":{"locationName":"validFrom","type":"timestamp"},"ValidUntil":{"locationName":"validUntil","type":"timestamp"},"LaunchGroup":{"locationName":"launchGroup"},"AvailabilityZoneGroup":{"locationName":"availabilityZoneGroup"},"LaunchSpecification":{"type":"structure","members":{"ImageId":{"locationName":"imageId"},"KeyName":{"locationName":"keyName"},"SecurityGroups":{"shape":"S2h","locationName":"SecurityGroup"},"UserData":{"locationName":"userData"},"AddressingType":{"locationName":"addressingType"},"InstanceType":{"locationName":"instanceType"},"Placement":{"shape":"Scj","locationName":"placement"},"KernelId":{"locationName":"kernelId"},"RamdiskId":{"locationName":"ramdiskId"},"BlockDeviceMappings":{"shape":"S87","locationName":"blockDeviceMapping"},"SubnetId":{"locationName":"subnetId"},"NetworkInterfaces":{"shape":"Sck","locationName":"NetworkInterface"},"IamInstanceProfile":{"shape":"Scm","locationName":"iamInstanceProfile"},"EbsOptimized":{"locationName":"ebsOptimized","type":"boolean"},"Monitoring":{"shape":"Scn","locationName":"monitoring"},"SecurityGroupIds":{"shape":"S2h","locationName":"SecurityGroupId"}}}}},"output":{"type":"structure","members":{"SpotInstanceRequests":{"shape":"Scd","locationName":"spotInstanceRequestSet"}}},"http":{}},"ResetImageAttribute":{"input":{"type":"structure","required":["ImageId","Attribute"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"ImageId":{},"Attribute":{}}},"http":{}},"ResetInstanceAttribute":{"input":{"type":"structure","required":["InstanceId","Attribute"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InstanceId":{"locationName":"instanceId"},"Attribute":{"locationName":"attribute"}}},"http":{}},"ResetNetworkInterfaceAttribute":{"input":{"type":"structure","required":["NetworkInterfaceId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"NetworkInterfaceId":{"locationName":"networkInterfaceId"},"SourceDestCheck":{"locationName":"sourceDestCheck"}}},"http":{}},"ResetSnapshotAttribute":{"input":{"type":"structure","required":["SnapshotId","Attribute"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"SnapshotId":{},"Attribute":{}}},"http":{}},"RevokeSecurityGroupEgress":{"input":{"type":"structure","required":["GroupId"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"GroupId":{"locationName":"groupId"},"SourceSecurityGroupName":{"locationName":"sourceSecurityGroupName"},"SourceSecurityGroupOwnerId":{"locationName":"sourceSecurityGroupOwnerId"},"IpProtocol":{"locationName":"ipProtocol"},"FromPort":{"locationName":"fromPort","type":"integer"},"ToPort":{"locationName":"toPort","type":"integer"},"CidrIp":{"locationName":"cidrIp"},"IpPermissions":{"shape":"S10","locationName":"ipPermissions"}}},"http":{}},"RevokeSecurityGroupIngress":{"input":{"type":"structure","members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"GroupName":{},"GroupId":{},"SourceSecurityGroupName":{},"SourceSecurityGroupOwnerId":{},"IpProtocol":{},"FromPort":{"type":"integer"},"ToPort":{"type":"integer"},"CidrIp":{},"IpPermissions":{"shape":"S10"}}},"http":{}},"RunInstances":{"input":{"type":"structure","required":["ImageId","MinCount","MaxCount"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"ImageId":{},"MinCount":{"type":"integer"},"MaxCount":{"type":"integer"},"KeyName":{},"SecurityGroups":{"shape":"Sf1","locationName":"SecurityGroup"},"SecurityGroupIds":{"shape":"S3n","locationName":"SecurityGroupId"},"UserData":{},"InstanceType":{},"Placement":{"shape":"S9s"},"KernelId":{},"RamdiskId":{},"BlockDeviceMappings":{"shape":"S2p","locationName":"BlockDeviceMapping"},"Monitoring":{"shape":"Scn"},"SubnetId":{},"DisableApiTermination":{"locationName":"disableApiTermination","type":"boolean"},"InstanceInitiatedShutdownBehavior":{"locationName":"instanceInitiatedShutdownBehavior"},"PrivateIpAddress":{"locationName":"privateIpAddress"},"ClientToken":{"locationName":"clientToken"},"AdditionalInfo":{"locationName":"additionalInfo"},"NetworkInterfaces":{"shape":"Sck","locationName":"networkInterface"},"IamInstanceProfile":{"shape":"Scm","locationName":"iamInstanceProfile"},"EbsOptimized":{"locationName":"ebsOptimized","type":"boolean"}}},"output":{"shape":"S9o","locationName":"reservation"},"http":{}},"StartInstances":{"input":{"type":"structure","required":["InstanceIds"],"members":{"InstanceIds":{"shape":"S75","locationName":"InstanceId"},"AdditionalInfo":{"locationName":"additionalInfo"},"DryRun":{"locationName":"dryRun","type":"boolean"}}},"output":{"type":"structure","members":{"StartingInstances":{"shape":"Sh0","locationName":"instancesSet"}}},"http":{}},"StopInstances":{"input":{"type":"structure","required":["InstanceIds"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InstanceIds":{"shape":"S75","locationName":"InstanceId"},"Force":{"locationName":"force","type":"boolean"}}},"output":{"type":"structure","members":{"StoppingInstances":{"shape":"Sh0","locationName":"instancesSet"}}},"http":{}},"TerminateInstances":{"input":{"type":"structure","required":["InstanceIds"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InstanceIds":{"shape":"S75","locationName":"InstanceId"}}},"output":{"type":"structure","members":{"TerminatingInstances":{"shape":"Sh0","locationName":"instancesSet"}}},"http":{}},"UnassignPrivateIpAddresses":{"input":{"type":"structure","required":["NetworkInterfaceId","PrivateIpAddresses"],"members":{"NetworkInterfaceId":{"locationName":"networkInterfaceId"},"PrivateIpAddresses":{"shape":"Sf","locationName":"privateIpAddress"}}},"http":{}},"UnmonitorInstances":{"input":{"type":"structure","required":["InstanceIds"],"members":{"DryRun":{"locationName":"dryRun","type":"boolean"},"InstanceIds":{"shape":"S75","locationName":"InstanceId"}}},"output":{"type":"structure","members":{"InstanceMonitorings":{"shape":"Sg2","locationName":"instancesSet"}}},"http":{}}},"shapes":{"S5":{"type":"structure","members":{"AccepterVpcInfo":{"shape":"S6","locationName":"accepterVpcInfo"},"ExpirationTime":{"locationName":"expirationTime","type":"timestamp"},"RequesterVpcInfo":{"shape":"S6","locationName":"requesterVpcInfo"},"Status":{"locationName":"status","type":"structure","members":{"Code":{"locationName":"code"},"Message":{"locationName":"message"}}},"Tags":{"shape":"S9","locationName":"tagSet"},"VpcPeeringConnectionId":{"locationName":"vpcPeeringConnectionId"}}},"S6":{"type":"structure","members":{"CidrBlock":{"locationName":"cidrBlock"},"OwnerId":{"locationName":"ownerId"},"VpcId":{"locationName":"vpcId"}}},"S9":{"type":"list","member":{"locationName":"item","type":"structure","members":{"Key":{"locationName":"key"},"Value":{"locationName":"value"}}}},"Sf":{"type":"list","member":{"locationName":"PrivateIpAddress"}},"Sn":{"type":"list","member":{"locationName":"groupId"}},"St":{"type":"structure","members":{"VolumeId":{"locationName":"volumeId"},"InstanceId":{"locationName":"instanceId"},"Device":{"locationName":"device"},"State":{"locationName":"status"},"AttachTime":{"locationName":"attachTime","type":"timestamp"},"DeleteOnTermination":{"locationName":"deleteOnTermination","type":"boolean"}}},"Sx":{"type":"structure","members":{"VpcId":{"locationName":"vpcId"},"State":{"locationName":"state"}}},"S10":{"type":"list","member":{"locationName":"item","type":"structure","members":{"IpProtocol":{"locationName":"ipProtocol"},"FromPort":{"locationName":"fromPort","type":"integer"},"ToPort":{"locationName":"toPort","type":"integer"},"UserIdGroupPairs":{"locationName":"groups","type":"list","member":{"locationName":"item","type":"structure","members":{"UserId":{"locationName":"userId"},"GroupName":{"locationName":"groupName"},"GroupId":{"locationName":"groupId"}}}},"IpRanges":{"locationName":"ipRanges","type":"list","member":{"locationName":"item","type":"structure","members":{"CidrIp":{"locationName":"cidrIp"}}}}}}},"S18":{"type":"structure","members":{"S3":{"type":"structure","members":{"Bucket":{"locationName":"bucket"},"Prefix":{"locationName":"prefix"},"AWSAccessKeyId":{},"UploadPolicy":{"locationName":"uploadPolicy","type":"blob"},"UploadPolicySignature":{"locationName":"uploadPolicySignature"}}}}},"S1c":{"type":"structure","members":{"InstanceId":{"locationName":"instanceId"},"BundleId":{"locationName":"bundleId"},"State":{"locationName":"state"},"StartTime":{"locationName":"startTime","type":"timestamp"},"UpdateTime":{"locationName":"updateTime","type":"timestamp"},"Storage":{"shape":"S18","locationName":"storage"},"Progress":{"locationName":"progress"},"BundleTaskError":{"locationName":"error","type":"structure","members":{"Code":{"locationName":"code"},"Message":{"locationName":"message"}}}}},"S1n":{"type":"list","member":{"locationName":"item","type":"structure","members":{"ReservedInstancesListingId":{"locationName":"reservedInstancesListingId"},"ReservedInstancesId":{"locationName":"reservedInstancesId"},"CreateDate":{"locationName":"createDate","type":"timestamp"},"UpdateDate":{"locationName":"updateDate","type":"timestamp"},"Status":{"locationName":"status"},"StatusMessage":{"locationName":"statusMessage"},"InstanceCounts":{"locationName":"instanceCounts","type":"list","member":{"locationName":"item","type":"structure","members":{"State":{"locationName":"state"},"InstanceCount":{"locationName":"instanceCount","type":"integer"}}}},"PriceSchedules":{"locationName":"priceSchedules","type":"list","member":{"locationName":"item","type":"structure","members":{"Term":{"locationName":"term","type":"long"},"Price":{"locationName":"price","type":"double"},"CurrencyCode":{"locationName":"currencyCode"},"Active":{"locationName":"active","type":"boolean"}}}},"Tags":{"shape":"S9","locationName":"tagSet"},"ClientToken":{"locationName":"clientToken"}}}},"S1z":{"type":"list","member":{"locationName":"SpotInstanceRequestId"}},"S2d":{"type":"structure","members":{"CustomerGatewayId":{"locationName":"customerGatewayId"},"State":{"locationName":"state"},"Type":{"locationName":"type"},"IpAddress":{"locationName":"ipAddress"},"BgpAsn":{"locationName":"bgpAsn"},"Tags":{"shape":"S9","locationName":"tagSet"}}},"S2h":{"type":"list","member":{"locationName":"item"}},"S2j":{"type":"structure","members":{"DhcpOptionsId":{"locationName":"dhcpOptionsId"},"DhcpConfigurations":{"locationName":"dhcpConfigurationSet","type":"list","member":{"locationName":"item","type":"structure","members":{"Key":{"locationName":"key"},"Values":{"locationName":"valueSet","type":"list","member":{"shape":"S2n","locationName":"item"}}}}},"Tags":{"shape":"S9","locationName":"tagSet"}}},"S2n":{"type":"structure","members":{"Value":{"locationName":"value"}}},"S2p":{"type":"list","member":{"shape":"S2q","locationName":"BlockDeviceMapping"}},"S2q":{"type":"structure","members":{"VirtualName":{"locationName":"virtualName"},"DeviceName":{"locationName":"deviceName"},"Ebs":{"locationName":"ebs","type":"structure","members":{"SnapshotId":{"locationName":"snapshotId"},"VolumeSize":{"locationName":"volumeSize","type":"integer"},"DeleteOnTermination":{"locationName":"deleteOnTermination","type":"boolean"},"VolumeType":{"locationName":"volumeType"},"Iops":{"locationName":"iops","type":"integer"},"Encrypted":{"locationName":"encrypted","type":"boolean"}}},"NoDevice":{"locationName":"noDevice"}}},"S30":{"type":"structure","members":{"ExportTaskId":{"locationName":"exportTaskId"},"Description":{"locationName":"description"},"State":{"locationName":"state"},"StatusMessage":{"locationName":"statusMessage"},"InstanceExportDetails":{"locationName":"instanceExport","type":"structure","members":{"InstanceId":{"locationName":"instanceId"},"TargetEnvironment":{"locationName":"targetEnvironment"}}},"ExportToS3Task":{"locationName":"exportToS3","type":"structure","members":{"DiskImageFormat":{"locationName":"diskImageFormat"},"ContainerFormat":{"locationName":"containerFormat"},"S3Bucket":{"locationName":"s3Bucket"},"S3Key":{"locationName":"s3Key"}}}}},"S36":{"type":"structure","members":{"InternetGatewayId":{"locationName":"internetGatewayId"},"Attachments":{"locationName":"attachmentSet","type":"list","member":{"locationName":"item","type":"structure","members":{"VpcId":{"locationName":"vpcId"},"State":{"locationName":"state"}}}},"Tags":{"shape":"S9","locationName":"tagSet"}}},"S3d":{"type":"structure","members":{"NetworkAclId":{"locationName":"networkAclId"},"VpcId":{"locationName":"vpcId"},"IsDefault":{"locationName":"default","type":"boolean"},"Entries":{"locationName":"entrySet","type":"list","member":{"locationName":"item","type":"structure","members":{"RuleNumber":{"locationName":"ruleNumber","type":"integer"},"Protocol":{"locationName":"protocol"},"RuleAction":{"locationName":"ruleAction"},"Egress":{"locationName":"egress","type":"boolean"},"CidrBlock":{"locationName":"cidrBlock"},"IcmpTypeCode":{"shape":"S3h","locationName":"icmpTypeCode"},"PortRange":{"shape":"S3i","locationName":"portRange"}}}},"Associations":{"locationName":"associationSet","type":"list","member":{"locationName":"item","type":"structure","members":{"NetworkAclAssociationId":{"locationName":"networkAclAssociationId"},"NetworkAclId":{"locationName":"networkAclId"},"SubnetId":{"locationName":"subnetId"}}}},"Tags":{"shape":"S9","locationName":"tagSet"}}},"S3h":{"type":"structure","members":{"Type":{"locationName":"type","type":"integer"},"Code":{"locationName":"code","type":"integer"}}},"S3i":{"type":"structure","members":{"From":{"locationName":"from","type":"integer"},"To":{"locationName":"to","type":"integer"}}},"S3n":{"type":"list","member":{"locationName":"SecurityGroupId"}},"S3o":{"type":"list","member":{"locationName":"item","type":"structure","required":["PrivateIpAddress"],"members":{"PrivateIpAddress":{"locationName":"privateIpAddress"},"Primary":{"locationName":"primary","type":"boolean"}}}},"S3r":{"type":"structure","members":{"NetworkInterfaceId":{"locationName":"networkInterfaceId"},"SubnetId":{"locationName":"subnetId"},"VpcId":{"locationName":"vpcId"},"AvailabilityZone":{"locationName":"availabilityZone"},"Description":{"locationName":"description"},"OwnerId":{"locationName":"ownerId"},"RequesterId":{"locationName":"requesterId"},"RequesterManaged":{"locationName":"requesterManaged","type":"boolean"},"Status":{"locationName":"status"},"MacAddress":{"locationName":"macAddress"},"PrivateIpAddress":{"locationName":"privateIpAddress"},"PrivateDnsName":{"locationName":"privateDnsName"},"SourceDestCheck":{"locationName":"sourceDestCheck","type":"boolean"},"Groups":{"shape":"S3t","locationName":"groupSet"},"Attachment":{"shape":"S3v","locationName":"attachment"},"Association":{"shape":"S3w","locationName":"association"},"TagSet":{"shape":"S9","locationName":"tagSet"},"PrivateIpAddresses":{"locationName":"privateIpAddressesSet","type":"list","member":{"locationName":"item","type":"structure","members":{"PrivateIpAddress":{"locationName":"privateIpAddress"},"PrivateDnsName":{"locationName":"privateDnsName"},"Primary":{"locationName":"primary","type":"boolean"},"Association":{"shape":"S3w","locationName":"association"}}}}}},"S3t":{"type":"list","member":{"locationName":"item","type":"structure","members":{"GroupName":{"locationName":"groupName"},"GroupId":{"locationName":"groupId"}}}},"S3v":{"type":"structure","members":{"AttachmentId":{"locationName":"attachmentId"},"InstanceId":{"locationName":"instanceId"},"InstanceOwnerId":{"locationName":"instanceOwnerId"},"DeviceIndex":{"locationName":"deviceIndex","type":"integer"},"Status":{"locationName":"status"},"AttachTime":{"locationName":"attachTime","type":"timestamp"},"DeleteOnTermination":{"locationName":"deleteOnTermination","type":"boolean"}}},"S3w":{"type":"structure","members":{"PublicIp":{"locationName":"publicIp"},"PublicDnsName":{"locationName":"publicDnsName"},"IpOwnerId":{"locationName":"ipOwnerId"},"AllocationId":{"locationName":"allocationId"},"AssociationId":{"locationName":"associationId"}}},"S48":{"type":"structure","members":{"RouteTableId":{"locationName":"routeTableId"},"VpcId":{"locationName":"vpcId"},"Routes":{"locationName":"routeSet","type":"list","member":{"locationName":"item","type":"structure","members":{"DestinationCidrBlock":{"locationName":"destinationCidrBlock"},"GatewayId":{"locationName":"gatewayId"},"InstanceId":{"locationName":"instanceId"},"InstanceOwnerId":{"locationName":"instanceOwnerId"},"NetworkInterfaceId":{"locationName":"networkInterfaceId"},"VpcPeeringConnectionId":{"locationName":"vpcPeeringConnectionId"},"State":{"locationName":"state"},"Origin":{"locationName":"origin"}}}},"Associations":{"locationName":"associationSet","type":"list","member":{"locationName":"item","type":"structure","members":{"RouteTableAssociationId":{"locationName":"routeTableAssociationId"},"RouteTableId":{"locationName":"routeTableId"},"SubnetId":{"locationName":"subnetId"},"Main":{"locationName":"main","type":"boolean"}}}},"Tags":{"shape":"S9","locationName":"tagSet"},"PropagatingVgws":{"locationName":"propagatingVgwSet","type":"list","member":{"locationName":"item","type":"structure","members":{"GatewayId":{"locationName":"gatewayId"}}}}}},"S4k":{"type":"structure","members":{"SnapshotId":{"locationName":"snapshotId"},"VolumeId":{"locationName":"volumeId"},"State":{"locationName":"status"},"StartTime":{"locationName":"startTime","type":"timestamp"},"Progress":{"locationName":"progress"},"OwnerId":{"locationName":"ownerId"},"Description":{"locationName":"description"},"VolumeSize":{"locationName":"volumeSize","type":"integer"},"OwnerAlias":{"locationName":"ownerAlias"},"Tags":{"shape":"S9","locationName":"tagSet"},"Encrypted":{"locationName":"encrypted","type":"boolean"},"KmsKeyId":{"locationName":"kmsKeyId"}}},"S4o":{"type":"structure","members":{"OwnerId":{"locationName":"ownerId"},"Bucket":{"locationName":"bucket"},"Prefix":{"locationName":"prefix"},"State":{"locationName":"state"},"Fault":{"shape":"S4q","locationName":"fault"}}},"S4q":{"type":"structure","members":{"Code":{"locationName":"code"},"Message":{"locationName":"message"}}},"S4t":{"type":"structure","members":{"SubnetId":{"locationName":"subnetId"},"State":{"locationName":"state"},"VpcId":{"locationName":"vpcId"},"CidrBlock":{"locationName":"cidrBlock"},"AvailableIpAddressCount":{"locationName":"availableIpAddressCount","type":"integer"},"AvailabilityZone":{"locationName":"availabilityZone"},"DefaultForAz":{"locationName":"defaultForAz","type":"boolean"},"MapPublicIpOnLaunch":{"locationName":"mapPublicIpOnLaunch","type":"boolean"},"Tags":{"shape":"S9","locationName":"tagSet"}}},"S4w":{"type":"list","member":{}},"S4y":{"type":"structure","members":{"VolumeId":{"locationName":"volumeId"},"Size":{"locationName":"size","type":"integer"},"SnapshotId":{"locationName":"snapshotId"},"AvailabilityZone":{"locationName":"availabilityZone"},"State":{"locationName":"status"},"CreateTime":{"locationName":"createTime","type":"timestamp"},"Attachments":{"locationName":"attachmentSet","type":"list","member":{"shape":"St","locationName":"item"}},"Tags":{"shape":"S9","locationName":"tagSet"},"VolumeType":{"locationName":"volumeType"},"Iops":{"locationName":"iops","type":"integer"},"Encrypted":{"locationName":"encrypted","type":"boolean"},"KmsKeyId":{"locationName":"kmsKeyId"}}},"S54":{"type":"structure","members":{"VpcId":{"locationName":"vpcId"},"State":{"locationName":"state"},"CidrBlock":{"locationName":"cidrBlock"},"DhcpOptionsId":{"locationName":"dhcpOptionsId"},"Tags":{"shape":"S9","locationName":"tagSet"},"InstanceTenancy":{"locationName":"instanceTenancy"},"IsDefault":{"locationName":"isDefault","type":"boolean"}}},"S5b":{"type":"structure","members":{"VpnConnectionId":{"locationName":"vpnConnectionId"},"State":{"locationName":"state"},"CustomerGatewayConfiguration":{"locationName":"customerGatewayConfiguration"},"Type":{"locationName":"type"},"CustomerGatewayId":{"locationName":"customerGatewayId"},"VpnGatewayId":{"locationName":"vpnGatewayId"},"Tags":{"shape":"S9","locationName":"tagSet"},"VgwTelemetry":{"locationName":"vgwTelemetry","type":"list","member":{"locationName":"item","type":"structure","members":{"OutsideIpAddress":{"locationName":"outsideIpAddress"},"Status":{"locationName":"status"},"LastStatusChange":{"locationName":"lastStatusChange","type":"timestamp"},"StatusMessage":{"locationName":"statusMessage"},"AcceptedRouteCount":{"locationName":"acceptedRouteCount","type":"integer"}}}},"Options":{"locationName":"options","type":"structure","members":{"StaticRoutesOnly":{"locationName":"staticRoutesOnly","type":"boolean"}}},"Routes":{"locationName":"routes","type":"list","member":{"locationName":"item","type":"structure","members":{"DestinationCidrBlock":{"locationName":"destinationCidrBlock"},"Source":{"locationName":"source"},"State":{"locationName":"state"}}}}}},"S5n":{"type":"structure","members":{"VpnGatewayId":{"locationName":"vpnGatewayId"},"State":{"locationName":"state"},"Type":{"locationName":"type"},"AvailabilityZone":{"locationName":"availabilityZone"},"VpcAttachments":{"locationName":"attachments","type":"list","member":{"shape":"Sx","locationName":"item"}},"Tags":{"shape":"S9","locationName":"tagSet"}}},"S6m":{"type":"list","member":{"locationName":"Filter","type":"structure","members":{"Name":{},"Values":{"shape":"S2h","locationName":"Value"}}}},"S75":{"type":"list","member":{"locationName":"InstanceId"}},"S7d":{"type":"structure","required":["ConversionTaskId","State"],"members":{"ConversionTaskId":{"locationName":"conversionTaskId"},"ExpirationTime":{"locationName":"expirationTime"},"ImportInstance":{"locationName":"importInstance","type":"structure","required":["Volumes"],"members":{"Volumes":{"locationName":"volumes","type":"list","member":{"locationName":"item","type":"structure","required":["BytesConverted","AvailabilityZone","Image","Volume","Status"],"members":{"BytesConverted":{"locationName":"bytesConverted","type":"long"},"AvailabilityZone":{"locationName":"availabilityZone"},"Image":{"shape":"S7h","locationName":"image"},"Volume":{"shape":"S7i","locationName":"volume"},"Status":{"locationName":"status"},"StatusMessage":{"locationName":"statusMessage"},"Description":{"locationName":"description"}}}},"InstanceId":{"locationName":"instanceId"},"Platform":{"locationName":"platform"},"Description":{"locationName":"description"}}},"ImportVolume":{"locationName":"importVolume","type":"structure","required":["BytesConverted","AvailabilityZone","Image","Volume"],"members":{"BytesConverted":{"locationName":"bytesConverted","type":"long"},"AvailabilityZone":{"locationName":"availabilityZone"},"Description":{"locationName":"description"},"Image":{"shape":"S7h","locationName":"image"},"Volume":{"shape":"S7i","locationName":"volume"}}},"State":{"locationName":"state"},"StatusMessage":{"locationName":"statusMessage"},"Tags":{"shape":"S9","locationName":"tagSet"}}},"S7h":{"type":"structure","required":["Format","Size","ImportManifestUrl"],"members":{"Format":{"locationName":"format"},"Size":{"locationName":"size","type":"long"},"ImportManifestUrl":{"locationName":"importManifestUrl"},"Checksum":{"locationName":"checksum"}}},"S7i":{"type":"structure","required":["Id"],"members":{"Size":{"locationName":"size","type":"long"},"Id":{"locationName":"id"}}},"S81":{"type":"list","member":{"locationName":"item","type":"structure","members":{"UserId":{"locationName":"userId"},"Group":{"locationName":"group"}}}},"S84":{"type":"list","member":{"locationName":"item","type":"structure","members":{"ProductCodeId":{"locationName":"productCode"},"ProductCodeType":{"locationName":"type"}}}},"S87":{"type":"list","member":{"shape":"S2q","locationName":"item"}},"S8a":{"type":"list","member":{"locationName":"Owner"}},"S8i":{"type":"structure","members":{"Code":{"locationName":"code"},"Message":{"locationName":"message"}}},"S8n":{"type":"list","member":{"locationName":"ImportTaskId"}},"S8r":{"type":"list","member":{"locationName":"item","type":"structure","members":{"DiskImageSize":{"locationName":"diskImageSize","type":"double"},"Description":{"locationName":"description"},"Format":{"locationName":"format"},"Url":{"locationName":"url"},"UserBucket":{"shape":"S8t","locationName":"userBucket"},"DeviceName":{"locationName":"deviceName"},"SnapshotId":{"locationName":"snapshotId"},"Progress":{"locationName":"progress"},"StatusMessage":{"locationName":"statusMessage"},"Status":{"locationName":"status"}}}},"S8t":{"type":"structure","members":{"S3Bucket":{"locationName":"s3Bucket"},"S3Key":{"locationName":"s3Key"}}},"S8y":{"type":"structure","members":{"DiskImageSize":{"locationName":"diskImageSize","type":"double"},"Description":{"locationName":"description"},"Format":{"locationName":"format"},"Url":{"locationName":"url"},"UserBucket":{"shape":"S8t","locationName":"userBucket"},"SnapshotId":{"locationName":"snapshotId"},"Progress":{"locationName":"progress"},"StatusMessage":{"locationName":"statusMessage"},"Status":{"locationName":"status"}}},"S92":{"type":"structure","members":{"Value":{"locationName":"value","type":"boolean"}}},"S93":{"type":"list","member":{"locationName":"item","type":"structure","members":{"DeviceName":{"locationName":"deviceName"},"Ebs":{"locationName":"ebs","type":"structure","members":{"VolumeId":{"locationName":"volumeId"},"Status":{"locationName":"status"},"AttachTime":{"locationName":"attachTime","type":"timestamp"},"DeleteOnTermination":{"locationName":"deleteOnTermination","type":"boolean"}}}}}},"S9d":{"type":"structure","members":{"Code":{"locationName":"code","type":"integer"},"Name":{"locationName":"name"}}},"S9f":{"type":"structure","members":{"Status":{"locationName":"status"},"Details":{"locationName":"details","type":"list","member":{"locationName":"item","type":"structure","members":{"Name":{"locationName":"name"},"Status":{"locationName":"status"},"ImpairedSince":{"locationName":"impairedSince","type":"timestamp"}}}}}},"S9o":{"type":"structure","members":{"ReservationId":{"locationName":"reservationId"},"OwnerId":{"locationName":"ownerId"},"RequesterId":{"locationName":"requesterId"},"Groups":{"shape":"S3t","locationName":"groupSet"},"Instances":{"locationName":"instancesSet","type":"list","member":{"locationName":"item","type":"structure","members":{"InstanceId":{"locationName":"instanceId"},"ImageId":{"locationName":"imageId"},"State":{"shape":"S9d","locationName":"instanceState"},"PrivateDnsName":{"locationName":"privateDnsName"},"PublicDnsName":{"locationName":"dnsName"},"StateTransitionReason":{"locationName":"reason"},"KeyName":{"locationName":"keyName"},"AmiLaunchIndex":{"locationName":"amiLaunchIndex","type":"integer"},"ProductCodes":{"shape":"S84","locationName":"productCodes"},"InstanceType":{"locationName":"instanceType"},"LaunchTime":{"locationName":"launchTime","type":"timestamp"},"Placement":{"shape":"S9s","locationName":"placement"},"KernelId":{"locationName":"kernelId"},"RamdiskId":{"locationName":"ramdiskId"},"Platform":{"locationName":"platform"},"Monitoring":{"shape":"S9t","locationName":"monitoring"},"SubnetId":{"locationName":"subnetId"},"VpcId":{"locationName":"vpcId"},"PrivateIpAddress":{"locationName":"privateIpAddress"},"PublicIpAddress":{"locationName":"ipAddress"},"StateReason":{"shape":"S8i","locationName":"stateReason"},"Architecture":{"locationName":"architecture"},"RootDeviceType":{"locationName":"rootDeviceType"},"RootDeviceName":{"locationName":"rootDeviceName"},"BlockDeviceMappings":{"shape":"S93","locationName":"blockDeviceMapping"},"VirtualizationType":{"locationName":"virtualizationType"},"InstanceLifecycle":{"locationName":"instanceLifecycle"},"SpotInstanceRequestId":{"locationName":"spotInstanceRequestId"},"ClientToken":{"locationName":"clientToken"},"Tags":{"shape":"S9","locationName":"tagSet"},"SecurityGroups":{"shape":"S3t","locationName":"groupSet"},"SourceDestCheck":{"locationName":"sourceDestCheck","type":"boolean"},"Hypervisor":{"locationName":"hypervisor"},"NetworkInterfaces":{"locationName":"networkInterfaceSet","type":"list","member":{"locationName":"item","type":"structure","members":{"NetworkInterfaceId":{"locationName":"networkInterfaceId"},"SubnetId":{"locationName":"subnetId"},"VpcId":{"locationName":"vpcId"},"Description":{"locationName":"description"},"OwnerId":{"locationName":"ownerId"},"Status":{"locationName":"status"},"MacAddress":{"locationName":"macAddress"},"PrivateIpAddress":{"locationName":"privateIpAddress"},"PrivateDnsName":{"locationName":"privateDnsName"},"SourceDestCheck":{"locationName":"sourceDestCheck","type":"boolean"},"Groups":{"shape":"S3t","locationName":"groupSet"},"Attachment":{"locationName":"attachment","type":"structure","members":{"AttachmentId":{"locationName":"attachmentId"},"DeviceIndex":{"locationName":"deviceIndex","type":"integer"},"Status":{"locationName":"status"},"AttachTime":{"locationName":"attachTime","type":"timestamp"},"DeleteOnTermination":{"locationName":"deleteOnTermination","type":"boolean"}}},"Association":{"shape":"S9z","locationName":"association"},"PrivateIpAddresses":{"locationName":"privateIpAddressesSet","type":"list","member":{"locationName":"item","type":"structure","members":{"PrivateIpAddress":{"locationName":"privateIpAddress"},"PrivateDnsName":{"locationName":"privateDnsName"},"Primary":{"locationName":"primary","type":"boolean"},"Association":{"shape":"S9z","locationName":"association"}}}}}}},"IamInstanceProfile":{"locationName":"iamInstanceProfile","type":"structure","members":{"Arn":{"locationName":"arn"},"Id":{"locationName":"id"}}},"EbsOptimized":{"locationName":"ebsOptimized","type":"boolean"},"SriovNetSupport":{"locationName":"sriovNetSupport"}}}}}},"S9s":{"type":"structure","members":{"AvailabilityZone":{"locationName":"availabilityZone"},"GroupName":{"locationName":"groupName"},"Tenancy":{"locationName":"tenancy"}}},"S9t":{"type":"structure","members":{"State":{"locationName":"state"}}},"S9z":{"type":"structure","members":{"PublicIp":{"locationName":"publicIp"},"PublicDnsName":{"locationName":"publicDnsName"},"IpOwnerId":{"locationName":"ipOwnerId"}}},"Sax":{"type":"list","member":{"locationName":"ReservedInstancesId"}},"Sb5":{"type":"list","member":{"locationName":"item","type":"structure","members":{"Frequency":{"locationName":"frequency"},"Amount":{"locationName":"amount","type":"double"}}}},"Sbj":{"type":"structure","members":{"AvailabilityZone":{"locationName":"availabilityZone"},"Platform":{"locationName":"platform"},"InstanceCount":{"locationName":"instanceCount","type":"integer"},"InstanceType":{"locationName":"instanceType"}}},"Sbv":{"type":"list","member":{"locationName":"GroupName"}},"Sc2":{"type":"list","member":{"locationName":"item","type":"structure","members":{"UserId":{"locationName":"userId"},"Group":{"locationName":"group"}}}},"Scd":{"type":"list","member":{"locationName":"item","type":"structure","members":{"SpotInstanceRequestId":{"locationName":"spotInstanceRequestId"},"SpotPrice":{"locationName":"spotPrice"},"Type":{"locationName":"type"},"State":{"locationName":"state"},"Fault":{"shape":"S4q","locationName":"fault"},"Status":{"locationName":"status","type":"structure","members":{"Code":{"locationName":"code"},"UpdateTime":{"locationName":"updateTime","type":"timestamp"},"Message":{"locationName":"message"}}},"ValidFrom":{"locationName":"validFrom","type":"timestamp"},"ValidUntil":{"locationName":"validUntil","type":"timestamp"},"LaunchGroup":{"locationName":"launchGroup"},"AvailabilityZoneGroup":{"locationName":"availabilityZoneGroup"},"LaunchSpecification":{"locationName":"launchSpecification","type":"structure","members":{"ImageId":{"locationName":"imageId"},"KeyName":{"locationName":"keyName"},"SecurityGroups":{"shape":"S3t","locationName":"groupSet"},"UserData":{"locationName":"userData"},"AddressingType":{"locationName":"addressingType"},"InstanceType":{"locationName":"instanceType"},"Placement":{"shape":"Scj","locationName":"placement"},"KernelId":{"locationName":"kernelId"},"RamdiskId":{"locationName":"ramdiskId"},"BlockDeviceMappings":{"shape":"S87","locationName":"blockDeviceMapping"},"SubnetId":{"locationName":"subnetId"},"NetworkInterfaces":{"shape":"Sck","locationName":"networkInterfaceSet"},"IamInstanceProfile":{"shape":"Scm","locationName":"iamInstanceProfile"},"EbsOptimized":{"locationName":"ebsOptimized","type":"boolean"},"Monitoring":{"shape":"Scn","locationName":"monitoring"}}},"InstanceId":{"locationName":"instanceId"},"CreateTime":{"locationName":"createTime","type":"timestamp"},"ProductDescription":{"locationName":"productDescription"},"Tags":{"shape":"S9","locationName":"tagSet"},"LaunchedAvailabilityZone":{"locationName":"launchedAvailabilityZone"}}}},"Scj":{"type":"structure","members":{"AvailabilityZone":{"locationName":"availabilityZone"},"GroupName":{"locationName":"groupName"}}},"Sck":{"type":"list","member":{"locationName":"item","type":"structure","members":{"NetworkInterfaceId":{"locationName":"networkInterfaceId"},"DeviceIndex":{"locationName":"deviceIndex","type":"integer"},"SubnetId":{"locationName":"subnetId"},"Description":{"locationName":"description"},"PrivateIpAddress":{"locationName":"privateIpAddress"},"Groups":{"shape":"S3n","locationName":"SecurityGroupId"},"DeleteOnTermination":{"locationName":"deleteOnTermination","type":"boolean"},"PrivateIpAddresses":{"shape":"S3o","locationName":"privateIpAddressesSet","queryName":"PrivateIpAddresses"},"SecondaryPrivateIpAddressCount":{"locationName":"secondaryPrivateIpAddressCount","type":"integer"},"AssociatePublicIpAddress":{"locationName":"associatePublicIpAddress","type":"boolean"}}}},"Scm":{"type":"structure","members":{"Arn":{"locationName":"arn"},"Name":{"locationName":"name"}}},"Scn":{"type":"structure","required":["Enabled"],"members":{"Enabled":{"locationName":"enabled","type":"boolean"}}},"Sd7":{"type":"list","member":{"locationName":"VolumeId"}},"Sew":{"type":"structure","members":{"S3Bucket":{},"S3Key":{}}},"Sex":{"type":"structure","members":{"UploadStart":{"type":"timestamp"},"UploadEnd":{"type":"timestamp"},"UploadSize":{"type":"double"},"Comment":{}}},"Sf1":{"type":"list","member":{"locationName":"SecurityGroup"}},"Sf6":{"type":"structure","required":["Format","Bytes","ImportManifestUrl"],"members":{"Format":{"locationName":"format"},"Bytes":{"locationName":"bytes","type":"long"},"ImportManifestUrl":{"locationName":"importManifestUrl"}}},"Sf7":{"type":"structure","required":["Size"],"members":{"Size":{"locationName":"size","type":"long"}}},"Sfh":{"type":"list","member":{"locationName":"UserId"}},"Sg2":{"type":"list","member":{"locationName":"item","type":"structure","members":{"InstanceId":{"locationName":"instanceId"},"Monitoring":{"shape":"S9t","locationName":"monitoring"}}}},"Sh0":{"type":"list","member":{"locationName":"item","type":"structure","members":{"InstanceId":{"locationName":"instanceId"},"CurrentState":{"shape":"S9d","locationName":"currentState"},"PreviousState":{"shape":"S9d","locationName":"previousState"}}}}},"paginators":{"DescribeAccountAttributes":{"result_key":"AccountAttributes"},"DescribeAddresses":{"result_key":"Addresses"},"DescribeAvailabilityZones":{"result_key":"AvailabilityZones"},"DescribeBundleTasks":{"result_key":"BundleTasks"},"DescribeConversionTasks":{"result_key":"ConversionTasks"},"DescribeCustomerGateways":{"result_key":"CustomerGateways"},"DescribeDhcpOptions":{"result_key":"DhcpOptions"},"DescribeExportTasks":{"result_key":"ExportTasks"},"DescribeImages":{"result_key":"Images"},"DescribeInstanceStatus":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxResults","result_key":"InstanceStatuses"},"DescribeInstances":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxResults","result_key":"Reservations"},"DescribeInternetGateways":{"result_key":"InternetGateways"},"DescribeKeyPairs":{"result_key":"KeyPairs"},"DescribeNetworkAcls":{"result_key":"NetworkAcls"},"DescribeNetworkInterfaces":{"result_key":"NetworkInterfaces"},"DescribePlacementGroups":{"result_key":"PlacementGroups"},"DescribeRegions":{"result_key":"Regions"},"DescribeReservedInstances":{"result_key":"ReservedInstances"},"DescribeReservedInstancesListings":{"result_key":"ReservedInstancesListings"},"DescribeReservedInstancesOfferings":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxResults","result_key":"ReservedInstancesOfferings"},"DescribeReservedInstancesModifications":{"input_token":"NextToken","output_token":"NextToken","result_key":"ReservedInstancesModifications"},"DescribeRouteTables":{"result_key":"RouteTables"},"DescribeSecurityGroups":{"result_key":"SecurityGroups"},"DescribeSnapshots":{"input_token":"NextToken","output_token":"NextToken","result_key":"Snapshots"},"DescribeSpotInstanceRequests":{"result_key":"SpotInstanceRequests"},"DescribeSpotPriceHistory":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxResults","result_key":"SpotPriceHistory"},"DescribeSubnets":{"result_key":"Subnets"},"DescribeTags":{"result_key":"Tags"},"DescribeVolumeStatus":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxResults","result_key":"VolumeStatuses"},"DescribeVolumes":{"input_token":"NextToken","output_token":"NextToken","limit_key":"MaxResults","result_key":"Volumes"},"DescribeVpcs":{"result_key":"Vpcs"},"DescribeVpnConnections":{"result_key":"VpnConnections"},"DescribeVpnGateways":{"result_key":"VpnGateways"}},"waiters":{"__default__":{"interval":15,"max_attempts":40,"acceptor_type":"output"},"__InstanceState":{"operation":"DescribeInstances","acceptor_path":"Reservations[].Instances[].State.Name"},"__InstanceStatus":{"operation":"DescribeInstanceStatus","success_value":"ok"},"SystemStatusOk":{"extends":"__InstanceStatus","acceptor_path":"InstanceStatuses[].SystemStatus.Status"},"InstanceStatusOk":{"extends":"__InstanceStatus","acceptor_path":"InstanceStatuses[].InstanceStatus.Status"},"ImageAvailable":{"operation":"DescribeImages","acceptor_path":"Images[].State","success_value":"available","failure_value":["failed"]},"InstanceRunning":{"extends":"__InstanceState","success_value":"running","failure_value":["shutting-down","terminated","stopping"]},"InstanceStopped":{"extends":"__InstanceState","success_value":"stopped","failure_value":["pending","terminated"]},"InstanceTerminated":{"extends":"__InstanceState","success_value":"terminated","failure_value":["pending","stopping"]},"__ExportTaskState":{"operation":"DescribeExportTasks","acceptor_path":"ExportTasks[].State"},"ExportTaskCompleted":{"extends":"__ExportTaskState","success_value":"completed"},"ExportTaskCancelled":{"extends":"__ExportTaskState","success_value":"cancelled"},"SnapshotCompleted":{"operation":"DescribeSnapshots","success_path":"Snapshots[].State","success_value":"completed"},"SubnetAvailable":{"operation":"DescribeSubnets","success_path":"Subnets[].State","success_value":"available"},"__VolumeStatus":{"operation":"DescribeVolumes","acceptor_path":"Volumes[].State"},"VolumeAvailable":{"extends":"__VolumeStatus","success_value":"available","failure_value":["deleted"]},"VolumeInUse":{"extends":"__VolumeStatus","success_value":"in-use","failure_value":["deleted"]},"VolumeDeleted":{"extends":"__VolumeStatus","success_type":"error","success_value":"InvalidVolume.NotFound"},"VpcAvailable":{"operation":"DescribeVpcs","success_path":"Vpcs[].State","success_value":"available"},"__VpnConnectionState":{"operation":"DescribeVpnConnections","acceptor_path":"VpnConnections[].State"},"VpnConnectionAvailable":{"extends":"__VpnConnectionState","success_value":"available","failure_value":["deleting","deleted"]},"VpnConnectionDeleted":{"extends":"__VpnConnectionState","success_value":"deleted","failure_value":["pending"]},"BundleTaskComplete":{"operation":"DescribeBundleTasks","acceptor_path":"BundleTasks[].State","success_value":"complete","failure_value":["failed"]},"__ConversionTaskState":{"operation":"DescribeConversionTasks","acceptor_path":"ConversionTasks[].State"},"ConversionTaskCompleted":{"extends":"__ConversionTaskState","success_value":"completed","failure_value":["cancelled","cancelling"]},"ConversionTaskCancelled":{"extends":"__ConversionTaskState","success_value":"cancelled"},"__CustomerGatewayState":{"operation":"DescribeCustomerGateways","acceptor_path":"CustomerGateways[].State"},"CustomerGatewayAvailable":{"extends":"__CustomerGatewayState","success_value":"available","failure_value":["deleted","deleting"]},"ConversionTaskDeleted":{"extends":"__CustomerGatewayState","success_value":"deleted"},"__SpotInstanceRequestState":{"operation":"DescribeSpotInstanceRequests","acceptor.path":"SpotInstanceRequests[].Status.Code"},"SpotInstanceRequestFulfilled":{"extends":"__SpotInstanceRequestState","success.value":"fulfilled","failure.value":["schedule-expired","canceled-before-fulfillment","bad-parameters","system-error"]}}};
AWS.apiLoader.services['ecs'] = {};
AWS.ECS = AWS.Service.defineService('ecs', [ '2014-11-13' ]);

AWS.apiLoader.services['ecs']['2014-11-13'] = {"version":"2.0","metadata":{"apiVersion":"2014-11-13","endpointPrefix":"ecs","jsonVersion":"1.1","serviceAbbreviation":"Amazon ECS","serviceFullName":"Amazon EC2 Container Service","signatureVersion":"v4","targetPrefix":"AmazonEC2ContainerServiceV20141113","protocol":"json"},"operations":{"CreateCluster":{"input":{"type":"structure","members":{"clusterName":{}}},"output":{"type":"structure","members":{"cluster":{"shape":"S4"}}},"http":{}},"CreateService":{"input":{"type":"structure","required":["serviceName"],"members":{"cluster":{},"serviceName":{},"taskDefinition":{},"loadBalancers":{"shape":"S7"},"desiredCount":{"type":"integer"},"clientToken":{},"role":{}}},"output":{"type":"structure","members":{"service":{"shape":"Sb"}}},"http":{}},"DeleteCluster":{"input":{"type":"structure","required":["cluster"],"members":{"cluster":{}}},"output":{"type":"structure","members":{"cluster":{"shape":"S4"}}},"http":{}},"DeleteService":{"input":{"type":"structure","required":["service"],"members":{"cluster":{},"service":{}}},"output":{"type":"structure","members":{"service":{"shape":"Sb"}}},"http":{}},"DeregisterContainerInstance":{"input":{"type":"structure","required":["containerInstance"],"members":{"cluster":{},"containerInstance":{},"force":{"type":"boolean"}}},"output":{"type":"structure","members":{"containerInstance":{"shape":"So"}}},"http":{}},"DeregisterTaskDefinition":{"input":{"type":"structure","required":["taskDefinition"],"members":{"taskDefinition":{}}},"output":{"type":"structure","members":{"taskDefinition":{"shape":"Sx"}}},"http":{}},"DescribeClusters":{"input":{"type":"structure","members":{"clusters":{"shape":"St"}}},"output":{"type":"structure","members":{"clusters":{"type":"list","member":{"shape":"S4"}},"failures":{"shape":"S1e"}}},"http":{}},"DescribeContainerInstances":{"input":{"type":"structure","required":["containerInstances"],"members":{"cluster":{},"containerInstances":{"shape":"St"}}},"output":{"type":"structure","members":{"containerInstances":{"type":"list","member":{"shape":"So"}},"failures":{"shape":"S1e"}}},"http":{}},"DescribeServices":{"input":{"type":"structure","required":["services"],"members":{"cluster":{},"services":{"shape":"St"}}},"output":{"type":"structure","members":{"services":{"type":"list","member":{"shape":"Sb"}},"failures":{"shape":"S1e"}}},"http":{}},"DescribeTaskDefinition":{"input":{"type":"structure","required":["taskDefinition"],"members":{"taskDefinition":{}}},"output":{"type":"structure","members":{"taskDefinition":{"shape":"Sx"}}},"http":{}},"DescribeTasks":{"input":{"type":"structure","required":["tasks"],"members":{"cluster":{},"tasks":{"shape":"St"}}},"output":{"type":"structure","members":{"tasks":{"shape":"S1q"},"failures":{"shape":"S1e"}}},"http":{}},"DiscoverPollEndpoint":{"input":{"type":"structure","members":{"containerInstance":{},"cluster":{}}},"output":{"type":"structure","members":{"endpoint":{}}},"http":{}},"ListClusters":{"input":{"type":"structure","members":{"nextToken":{},"maxResults":{"type":"integer"}}},"output":{"type":"structure","members":{"clusterArns":{"shape":"St"},"nextToken":{}}},"http":{}},"ListContainerInstances":{"input":{"type":"structure","members":{"cluster":{},"nextToken":{},"maxResults":{"type":"integer"}}},"output":{"type":"structure","members":{"containerInstanceArns":{"shape":"St"},"nextToken":{}}},"http":{}},"ListServices":{"input":{"type":"structure","members":{"cluster":{},"nextToken":{},"maxResults":{"type":"integer"}}},"output":{"type":"structure","members":{"serviceArns":{"shape":"St"},"nextToken":{}}},"http":{}},"ListTaskDefinitionFamilies":{"input":{"type":"structure","members":{"familyPrefix":{},"nextToken":{},"maxResults":{"type":"integer"}}},"output":{"type":"structure","members":{"families":{"shape":"St"},"nextToken":{}}},"http":{}},"ListTaskDefinitions":{"input":{"type":"structure","members":{"familyPrefix":{},"nextToken":{},"maxResults":{"type":"integer"}}},"output":{"type":"structure","members":{"taskDefinitionArns":{"shape":"St"},"nextToken":{}}},"http":{}},"ListTasks":{"input":{"type":"structure","members":{"cluster":{},"containerInstance":{},"family":{},"nextToken":{},"maxResults":{"type":"integer"},"startedBy":{},"serviceName":{}}},"output":{"type":"structure","members":{"taskArns":{"shape":"St"},"nextToken":{}}},"http":{}},"RegisterContainerInstance":{"input":{"type":"structure","members":{"cluster":{},"instanceIdentityDocument":{},"instanceIdentityDocumentSignature":{},"totalResources":{"shape":"Sp"},"versionInfo":{"type":"structure","members":{"agentVersion":{},"agentHash":{},"dockerVersion":{}}}}},"output":{"type":"structure","members":{"containerInstance":{"shape":"So"}}},"http":{}},"RegisterTaskDefinition":{"input":{"type":"structure","required":["family","containerDefinitions"],"members":{"family":{},"containerDefinitions":{"shape":"Sy"},"volumes":{"shape":"S18"}}},"output":{"type":"structure","members":{"taskDefinition":{"shape":"Sx"}}},"http":{}},"RunTask":{"input":{"type":"structure","required":["taskDefinition"],"members":{"cluster":{},"taskDefinition":{},"overrides":{"shape":"S1s"},"count":{"type":"integer"},"startedBy":{}}},"output":{"type":"structure","members":{"tasks":{"shape":"S1q"},"failures":{"shape":"S1e"}}},"http":{}},"StartTask":{"input":{"type":"structure","required":["taskDefinition","containerInstances"],"members":{"cluster":{},"taskDefinition":{},"overrides":{"shape":"S1s"},"containerInstances":{"shape":"St"},"startedBy":{}}},"output":{"type":"structure","members":{"tasks":{"shape":"S1q"},"failures":{"shape":"S1e"}}},"http":{}},"StopTask":{"input":{"type":"structure","required":["task"],"members":{"cluster":{},"task":{}}},"output":{"type":"structure","members":{"task":{"shape":"S1r"}}},"http":{}},"SubmitContainerStateChange":{"input":{"type":"structure","members":{"cluster":{},"task":{},"containerName":{},"status":{},"exitCode":{"type":"integer"},"reason":{},"networkBindings":{"shape":"S1x"}}},"output":{"type":"structure","members":{"acknowledgment":{}}},"http":{}},"SubmitTaskStateChange":{"input":{"type":"structure","members":{"cluster":{},"task":{},"status":{},"reason":{}}},"output":{"type":"structure","members":{"acknowledgment":{}}},"http":{}},"UpdateService":{"input":{"type":"structure","required":["service"],"members":{"cluster":{},"service":{},"desiredCount":{"type":"integer"},"taskDefinition":{}}},"output":{"type":"structure","members":{"service":{"shape":"Sb"}}},"http":{}}},"shapes":{"S4":{"type":"structure","members":{"clusterArn":{},"clusterName":{},"status":{},"registeredContainerInstancesCount":{"type":"integer"},"runningTasksCount":{"type":"integer"},"pendingTasksCount":{"type":"integer"}}},"S7":{"type":"list","member":{"type":"structure","members":{"loadBalancerName":{},"containerName":{},"containerPort":{"type":"integer"}}}},"Sb":{"type":"structure","members":{"serviceArn":{},"serviceName":{},"clusterArn":{},"loadBalancers":{"shape":"S7"},"status":{},"desiredCount":{"type":"integer"},"runningCount":{"type":"integer"},"pendingCount":{"type":"integer"},"taskDefinition":{},"deployments":{"type":"list","member":{"type":"structure","members":{"id":{},"status":{},"taskDefinition":{},"desiredCount":{"type":"integer"},"pendingCount":{"type":"integer"},"runningCount":{"type":"integer"},"createdAt":{"type":"timestamp"},"updatedAt":{"type":"timestamp"}}}},"roleArn":{},"events":{"type":"list","member":{"type":"structure","members":{"id":{},"createdAt":{"type":"timestamp"},"message":{}}}}}},"So":{"type":"structure","members":{"containerInstanceArn":{},"ec2InstanceId":{},"remainingResources":{"shape":"Sp"},"registeredResources":{"shape":"Sp"},"status":{},"agentConnected":{"type":"boolean"},"runningTasksCount":{"type":"integer"},"pendingTasksCount":{"type":"integer"}}},"Sp":{"type":"list","member":{"type":"structure","members":{"name":{},"type":{},"doubleValue":{"type":"double"},"longValue":{"type":"long"},"integerValue":{"type":"integer"},"stringSetValue":{"shape":"St"}}}},"St":{"type":"list","member":{}},"Sx":{"type":"structure","members":{"taskDefinitionArn":{},"containerDefinitions":{"shape":"Sy"},"family":{},"revision":{"type":"integer"},"volumes":{"shape":"S18"}}},"Sy":{"type":"list","member":{"type":"structure","members":{"name":{},"image":{},"cpu":{"type":"integer"},"memory":{"type":"integer"},"links":{"shape":"St"},"portMappings":{"type":"list","member":{"type":"structure","members":{"containerPort":{"type":"integer"},"hostPort":{"type":"integer"}}}},"essential":{"type":"boolean"},"entryPoint":{"shape":"St"},"command":{"shape":"St"},"environment":{"type":"list","member":{"type":"structure","members":{"name":{},"value":{}}}},"mountPoints":{"type":"list","member":{"type":"structure","members":{"sourceVolume":{},"containerPath":{},"readOnly":{"type":"boolean"}}}},"volumesFrom":{"type":"list","member":{"type":"structure","members":{"sourceContainer":{},"readOnly":{"type":"boolean"}}}}}}},"S18":{"type":"list","member":{"type":"structure","members":{"name":{},"host":{"type":"structure","members":{"sourcePath":{}}}}}},"S1e":{"type":"list","member":{"type":"structure","members":{"arn":{},"reason":{}}}},"S1q":{"type":"list","member":{"shape":"S1r"}},"S1r":{"type":"structure","members":{"taskArn":{},"clusterArn":{},"taskDefinitionArn":{},"containerInstanceArn":{},"overrides":{"shape":"S1s"},"lastStatus":{},"desiredStatus":{},"containers":{"type":"list","member":{"type":"structure","members":{"containerArn":{},"taskArn":{},"name":{},"lastStatus":{},"exitCode":{"type":"integer"},"reason":{},"networkBindings":{"shape":"S1x"}}}},"startedBy":{}}},"S1s":{"type":"structure","members":{"containerOverrides":{"type":"list","member":{"type":"structure","members":{"name":{},"command":{"shape":"St"}}}}}},"S1x":{"type":"list","member":{"type":"structure","members":{"bindIP":{},"containerPort":{"type":"integer"},"hostPort":{"type":"integer"}}}}}};
AWS.apiLoader.services['sts'] = {};
AWS.STS = AWS.Service.defineService('sts', [ '2011-06-15' ]);
require('./services/sts');

AWS.apiLoader.services['sts']['2011-06-15'] = {"version":"2.0","metadata":{"apiVersion":"2011-06-15","endpointPrefix":"sts","globalEndpoint":"sts.amazonaws.com","serviceAbbreviation":"AWS STS","serviceFullName":"AWS Security Token Service","signatureVersion":"v4","xmlNamespace":"https://sts.amazonaws.com/doc/2011-06-15/","protocol":"query"},"operations":{"AssumeRole":{"input":{"type":"structure","required":["RoleArn","RoleSessionName"],"members":{"RoleArn":{},"RoleSessionName":{},"Policy":{},"DurationSeconds":{"type":"integer"},"ExternalId":{},"SerialNumber":{},"TokenCode":{}}},"output":{"resultWrapper":"AssumeRoleResult","type":"structure","members":{"Credentials":{"shape":"Sa"},"AssumedRoleUser":{"shape":"Sf"},"PackedPolicySize":{"type":"integer"}}},"http":{}},"AssumeRoleWithSAML":{"input":{"type":"structure","required":["RoleArn","PrincipalArn","SAMLAssertion"],"members":{"RoleArn":{},"PrincipalArn":{},"SAMLAssertion":{},"Policy":{},"DurationSeconds":{"type":"integer"}}},"output":{"resultWrapper":"AssumeRoleWithSAMLResult","type":"structure","members":{"Credentials":{"shape":"Sa"},"AssumedRoleUser":{"shape":"Sf"},"PackedPolicySize":{"type":"integer"},"Subject":{},"SubjectType":{},"Issuer":{},"Audience":{},"NameQualifier":{}}},"http":{}},"AssumeRoleWithWebIdentity":{"input":{"type":"structure","required":["RoleArn","RoleSessionName","WebIdentityToken"],"members":{"RoleArn":{},"RoleSessionName":{},"WebIdentityToken":{},"ProviderId":{},"Policy":{},"DurationSeconds":{"type":"integer"}}},"output":{"resultWrapper":"AssumeRoleWithWebIdentityResult","type":"structure","members":{"Credentials":{"shape":"Sa"},"SubjectFromWebIdentityToken":{},"AssumedRoleUser":{"shape":"Sf"},"PackedPolicySize":{"type":"integer"},"Provider":{},"Audience":{}}},"http":{}},"DecodeAuthorizationMessage":{"input":{"type":"structure","required":["EncodedMessage"],"members":{"EncodedMessage":{}}},"output":{"resultWrapper":"DecodeAuthorizationMessageResult","type":"structure","members":{"DecodedMessage":{}}},"http":{}},"GetFederationToken":{"input":{"type":"structure","required":["Name"],"members":{"Name":{},"Policy":{},"DurationSeconds":{"type":"integer"}}},"output":{"resultWrapper":"GetFederationTokenResult","type":"structure","members":{"Credentials":{"shape":"Sa"},"FederatedUser":{"type":"structure","required":["FederatedUserId","Arn"],"members":{"FederatedUserId":{},"Arn":{}}},"PackedPolicySize":{"type":"integer"}}},"http":{}},"GetSessionToken":{"input":{"type":"structure","members":{"DurationSeconds":{"type":"integer"},"SerialNumber":{},"TokenCode":{}}},"output":{"resultWrapper":"GetSessionTokenResult","type":"structure","members":{"Credentials":{"shape":"Sa"}}},"http":{}}},"shapes":{"Sa":{"type":"structure","required":["AccessKeyId","SecretAccessKey","SessionToken","Expiration"],"members":{"AccessKeyId":{},"SecretAccessKey":{},"SessionToken":{},"Expiration":{"type":"timestamp"}}},"Sf":{"type":"structure","required":["AssumedRoleId","Arn"],"members":{"AssumedRoleId":{},"Arn":{}}}}};

},{"./core":3,"./http/xhr":12,"./services/cognitoidentity":35,"./services/ec2":36,"./services/sts":37,"./xml/browser_parser":47}],2:[function(require,module,exports){
var AWS = require('./core');
require('./credentials');
require('./credentials/credential_provider_chain');


AWS.Config = AWS.util.inherit({



  constructor: function Config(options) {
    if (options === undefined) options = {};
    options = this.extractCredentials(options);

    AWS.util.each.call(this, this.keys, function (key, value) {
      this.set(key, options[key], value);
    });
  },




  getCredentials: function getCredentials(callback) {
    var self = this;

    function finish(err) {
      callback(err, err ? null : self.credentials);
    }

    function credError(msg, err) {
      return new AWS.util.error(err || new Error(), {
        code: 'CredentialsError', message: msg
      });
    }

    function getAsyncCredentials() {
      self.credentials.get(function(err) {
        if (err) {
          var msg = 'Could not load credentials from ' +
            self.credentials.constructor.name;
          err = credError(msg, err);
        }
        finish(err);
      });
    }

    function getStaticCredentials() {
      var err = null;
      if (!self.credentials.accessKeyId || !self.credentials.secretAccessKey) {
        err = credError('Missing credentials');
      }
      finish(err);
    }

    if (self.credentials) {
      if (typeof self.credentials.get === 'function') {
        getAsyncCredentials();
      } else { // static credentials
        getStaticCredentials();
      }
    } else if (self.credentialProvider) {
      self.credentialProvider.resolve(function(err, creds) {
        if (err) {
          err = credError('Could not load credentials from any providers', err);
        }
        self.credentials = creds;
        finish(err);
      });
    } else {
      finish(credError('No credentials to load'));
    }
  },




  update: function update(options, allowUnknownKeys) {
    allowUnknownKeys = allowUnknownKeys || false;
    options = this.extractCredentials(options);
    AWS.util.each.call(this, options, function (key, value) {
      if (allowUnknownKeys || this.keys.hasOwnProperty(key) ||
          AWS.Service.hasService(key)) {
        this.set(key, value);
      }
    });
  },


  loadFromPath: function loadFromPath(path) {
    this.clear();

    var options = JSON.parse(AWS.util.readFileSync(path));
    var fileSystemCreds = new AWS.FileSystemCredentials(path);
    var chain = new AWS.CredentialProviderChain();
    chain.providers.unshift(fileSystemCreds);
    chain.resolve(function (err, creds) {
      if (err) throw err;
      else options.credentials = creds;
    });

    this.constructor(options);

    return this;
  },


  clear: function clear() {

    AWS.util.each.call(this, this.keys, function (key) {
      delete this[key];
    });

    this.set('credentials', undefined);
    this.set('credentialProvider', undefined);
  },


  set: function set(property, value, defaultValue) {
    if (value === undefined) {
      if (defaultValue === undefined) {
        defaultValue = this.keys[property];
      }
      if (typeof defaultValue === 'function') {
        this[property] = defaultValue.call(this);
      } else {
        this[property] = defaultValue;
      }
    } else if (property === 'httpOptions' && this[property]) {
      this[property] = AWS.util.merge(this[property], value);
    } else {
      this[property] = value;
    }
  },


  keys: {
    credentials: null,
    credentialProvider: null,
    region: null,
    logger: null,
    apiVersions: {},
    apiVersion: null,
    endpoint: undefined,
    httpOptions: {
      timeout: 120000
    },
    maxRetries: undefined,
    maxRedirects: 10,
    paramValidation: true,
    sslEnabled: true,
    s3ForcePathStyle: false,
    s3BucketEndpoint: false,
    computeChecksums: true,
    convertResponseTypes: true,
    dynamoDbCrc32: true,
    systemClockOffset: 0,
    signatureVersion: null
  },


  extractCredentials: function extractCredentials(options) {
    if (options.accessKeyId && options.secretAccessKey) {
      options = AWS.util.copy(options);
      options.credentials = new AWS.Credentials(options);
    }
    return options;
  }
});


AWS.config = new AWS.Config();

},{"./core":3,"./credentials":4,"./credentials/credential_provider_chain":6}],3:[function(require,module,exports){

var AWS = { util: require('./util') };


var _hidden = {}; _hidden.toString(); // hack to parse macro

module.exports = AWS;

AWS.util.update(AWS, {


  VERSION: '2.1.27',


  Signers: {},


  Protocol: {
    Json: require('./protocol/json'),
    Query: require('./protocol/query'),
    Rest: require('./protocol/rest'),
    RestJson: require('./protocol/rest_json'),
    RestXml: require('./protocol/rest_xml')
  },


  XML: {
    Builder: require('./xml/builder'),
    Parser: null // conditionally set based on environment
  },


  JSON: {
    Builder: require('./json/builder'),
    Parser: require('./json/parser')
  },


  Model: {
    Api: require('./model/api'),
    Operation: require('./model/operation'),
    Shape: require('./model/shape'),
    Paginator: require('./model/paginator'),
    ResourceWaiter: require('./model/resource_waiter')
  },

  util: require('./util'),


  apiLoader: function() { throw new Error('No API loader set'); }
});

require('./service');

require('./credentials');
require('./credentials/credential_provider_chain');
require('./credentials/temporary_credentials');
require('./credentials/web_identity_credentials');
require('./credentials/cognito_identity_credentials');
require('./credentials/saml_credentials');

require('./config');
require('./http');
require('./sequential_executor');
require('./event_listeners');
require('./request');
require('./response');
require('./resource_waiter');
require('./signers/request_signer');
require('./param_validator');


AWS.events = new AWS.SequentialExecutor();

},{"./config":2,"./credentials":4,"./credentials/cognito_identity_credentials":5,"./credentials/credential_provider_chain":6,"./credentials/saml_credentials":7,"./credentials/temporary_credentials":8,"./credentials/web_identity_credentials":9,"./event_listeners":10,"./http":11,"./json/builder":13,"./json/parser":14,"./model/api":15,"./model/operation":17,"./model/paginator":18,"./model/resource_waiter":19,"./model/shape":20,"./param_validator":21,"./protocol/json":22,"./protocol/query":23,"./protocol/rest":24,"./protocol/rest_json":25,"./protocol/rest_xml":26,"./request":30,"./resource_waiter":31,"./response":32,"./sequential_executor":33,"./service":34,"./signers/request_signer":39,"./util":46,"./xml/builder":48}],4:[function(require,module,exports){
var AWS = require('./core');


AWS.Credentials = AWS.util.inherit({

  constructor: function Credentials() {
    AWS.util.hideProperties(this, ['secretAccessKey']);

    this.expired = false;
    this.expireTime = null;
    if (arguments.length === 1 && typeof arguments[0] === 'object') {
      var creds = arguments[0].credentials || arguments[0];
      this.accessKeyId = creds.accessKeyId;
      this.secretAccessKey = creds.secretAccessKey;
      this.sessionToken = creds.sessionToken;
    } else {
      this.accessKeyId = arguments[0];
      this.secretAccessKey = arguments[1];
      this.sessionToken = arguments[2];
    }
  },


  expiryWindow: 15,


  needsRefresh: function needsRefresh() {
    var currentTime = AWS.util.date.getDate().getTime();
    var adjustedTime = new Date(currentTime + this.expiryWindow * 1000);

    if (this.expireTime && adjustedTime > this.expireTime) {
      return true;
    } else {
      return this.expired || !this.accessKeyId || !this.secretAccessKey;
    }
  },


  get: function get(callback) {
    var self = this;
    if (this.needsRefresh()) {
      this.refresh(function(err) {
        if (!err) self.expired = false; // reset expired flag
        if (callback) callback(err);
      });
    } else if (callback) {
      callback();
    }
  },


  refresh: function refresh(callback) {
    this.expired = false;
    callback();
  }
});

},{"./core":3}],5:[function(require,module,exports){
var AWS = require('../core');


AWS.CognitoIdentityCredentials = AWS.util.inherit(AWS.Credentials, {

  localStorageKey: {
    id: 'aws.cognito.identity-id.',
    providers: 'aws.cognito.identity-providers.'
  },


  constructor: function CognitoIdentityCredentials(params) {
    AWS.Credentials.call(this);
    this.expired = true;
    this.params = params;
    this.data = null;
    this.identityId = null;
    this.loadCachedId();
  },


  refresh: function refresh(callback) {
    var self = this;
    self.createClients();
    self.data = null;
    self.identityId = null;
    self.getId(function(err) {
      if (!err) {
        if (!self.params.RoleArn) {
          self.getCredentialsForIdentity(callback);
        } else {
          self.getCredentialsFromSTS(callback);
        }
      } else {
        self.clearCachedId();
        callback(err);
      }
    });
  },


  clearCachedId: function clearCache() {
    var poolId = this.params.IdentityPoolId;
    delete this.storage[this.localStorageKey.id + poolId];
    delete this.storage[this.localStorageKey.providers + poolId];
  },


  getId: function getId(callback) {
    var self = this;
    if (typeof self.params.IdentityId === 'string') {
      return callback(null, self.params.IdentityId);
    }

    self.cognito.getId(function(err, data) {
      if (!err && data.IdentityId) {
        self.params.IdentityId = data.IdentityId;
        callback(null, data.IdentityId);
      } else {
        callback(err);
      }
    });
  },



  loadCredentials: function loadCredentials(data, credentials) {
    if (!data || !credentials) return;
    credentials.expired = false;
    credentials.accessKeyId = data.Credentials.AccessKeyId;
    credentials.secretAccessKey = data.Credentials.SecretKey;
    credentials.sessionToken = data.Credentials.SessionToken;
    credentials.expireTime = data.Credentials.Expiration;
  },


  getCredentialsForIdentity: function getCredentialsForIdentity(callback) {
    var self = this;
    self.cognito.getCredentialsForIdentity(function(err, data) {
      if (!err) {
        self.cacheId(data);
        self.data = data;
        self.loadCredentials(self.data, self);
      } else {
        self.clearCachedId();
      }
      callback(err);
    });
  },


  getCredentialsFromSTS: function getCredentialsFromSTS(callback) {
    var self = this;
    self.cognito.getOpenIdToken(function(err, data) {
      if (!err) {
        self.cacheId(data);
        self.params.WebIdentityToken = data.Token;
        self.webIdentityCredentials.refresh(function(webErr) {
          if (!webErr) {
            self.data = self.webIdentityCredentials.data;
            self.sts.credentialsFrom(self.data, self);
          } else {
            self.clearCachedId();
          }
          callback(webErr);
        });
      } else {
        self.clearCachedId();
        callback(err);
      }
    });
  },


  loadCachedId: function loadCachedId() {
    var self = this;

    if (AWS.util.isBrowser() && !self.params.IdentityId) {
      var id = self.getStorage('id');
      if (id && self.params.Logins) {
        var actualProviders = Object.keys(self.params.Logins);
        var cachedProviders =
          (self.getStorage('providers') || '').split(',');

        var intersect = cachedProviders.filter(function(n) {
          return actualProviders.indexOf(n) !== -1;
        });
        if (intersect.length !== 0) {
          self.params.IdentityId = id;
        }
      } else if (id) {
        self.params.IdentityId = id;
      }
    }
  },


  createClients: function() {
    this.webIdentityCredentials = this.webIdentityCredentials ||
      new AWS.WebIdentityCredentials(this.params);
    this.cognito = this.cognito ||
      new AWS.CognitoIdentity({params: this.params});
    this.sts = this.sts || new AWS.STS();
  },


  cacheId: function cacheId(data) {
    this.identityId = data.IdentityId;
    this.params.IdentityId = this.identityId;

    if (AWS.util.isBrowser()) {
      this.setStorage('id', data.IdentityId);

      if (this.params.Logins) {
        this.setStorage('providers', Object.keys(this.params.Logins).join(','));
      }
    }
  },


  getStorage: function getStorage(key) {
    return this.storage[this.localStorageKey[key] + this.params.IdentityPoolId];
  },


  setStorage: function setStorage(key, val) {
    try {
      this.storage[this.localStorageKey[key] + this.params.IdentityPoolId] = val;
    } catch (_) {}
  },


  storage: (function() {
    try {
      return AWS.util.isBrowser() && typeof window.localStorage === 'object' ?
             window.localStorage : {};
    } catch (_) {
      return {};
    }
  })()
});

},{"../core":3}],6:[function(require,module,exports){
var AWS = require('../core');


AWS.CredentialProviderChain = AWS.util.inherit(AWS.Credentials, {


  constructor: function CredentialProviderChain(providers) {
    if (providers) {
      this.providers = providers;
    } else {
      this.providers = AWS.CredentialProviderChain.defaultProviders.slice(0);
    }
  },


  resolve: function resolve(callback) {
    if (this.providers.length === 0) {
      callback(new Error('No providers'));
      return this;
    }

    var index = 0;
    var providers = this.providers.slice(0);

    function resolveNext(err, creds) {
      if ((!err && creds) || index === providers.length) {
        callback(err, creds);
        return;
      }

      var provider = providers[index++];
      if (typeof provider === 'function') {
        creds = provider.call();
      } else {
        creds = provider;
      }

      if (creds.get) {
        creds.get(function(getErr) {
          resolveNext(getErr, getErr ? null : creds);
        });
      } else {
        resolveNext(null, creds);
      }
    }

    resolveNext();
    return this;
  }

});


AWS.CredentialProviderChain.defaultProviders = [];

},{"../core":3}],7:[function(require,module,exports){
var AWS = require('../core');


AWS.SAMLCredentials = AWS.util.inherit(AWS.Credentials, {

  constructor: function SAMLCredentials(params) {
    AWS.Credentials.call(this);
    this.expired = true;
    this.params = params;
  },


  refresh: function refresh(callback) {
    var self = this;
    self.createClients();
    if (!callback) callback = function(err) { if (err) throw err; };

    self.service.assumeRoleWithSAML(function (err, data) {
      if (!err) {
        self.service.credentialsFrom(data, self);
      }
      callback(err);
    });
  },


  createClients: function() {
    this.service = this.service || new AWS.STS({params: this.params});
  }

});

},{"../core":3}],8:[function(require,module,exports){
var AWS = require('../core');


AWS.TemporaryCredentials = AWS.util.inherit(AWS.Credentials, {

  constructor: function TemporaryCredentials(params) {
    AWS.Credentials.call(this);
    this.loadMasterCredentials();
    this.expired = true;

    this.params = params || {};
    if (this.params.RoleArn) {
      this.params.RoleSessionName =
        this.params.RoleSessionName || 'temporary-credentials';
    }
  },


  refresh: function refresh(callback) {
    var self = this;
    self.createClients();
    if (!callback) callback = function(err) { if (err) throw err; };

    self.service.config.credentials = self.masterCredentials;
    var operation = self.params.RoleArn ?
      self.service.assumeRole : self.service.getSessionToken;
    operation.call(self.service, function (err, data) {
      if (!err) {
        self.service.credentialsFrom(data, self);
      }
      callback(err);
    });
  },


  loadMasterCredentials: function loadMasterCredentials() {
    this.masterCredentials = AWS.config.credentials;
    while (this.masterCredentials.masterCredentials) {
      this.masterCredentials = this.masterCredentials.masterCredentials;
    }
  },


  createClients: function() {
    this.service = this.service || new AWS.STS({params: this.params});
  }

});

},{"../core":3}],9:[function(require,module,exports){
var AWS = require('../core');


AWS.WebIdentityCredentials = AWS.util.inherit(AWS.Credentials, {

  constructor: function WebIdentityCredentials(params) {
    AWS.Credentials.call(this);
    this.expired = true;
    this.params = params;
    this.params.RoleSessionName = this.params.RoleSessionName || 'web-identity';
    this.data = null;
  },


  refresh: function refresh(callback) {
    var self = this;
    self.createClients();
    if (!callback) callback = function(err) { if (err) throw err; };

    self.service.assumeRoleWithWebIdentity(function (err, data) {
      self.data = null;
      if (!err) {
        self.data = data;
        self.service.credentialsFrom(data, self);
      }
      callback(err);
    });
  },


  createClients: function() {
    this.service = this.service || new AWS.STS({params: this.params});
  }

});

},{"../core":3}],10:[function(require,module,exports){
var AWS = require('./core');
var SequentialExecutor = require('./sequential_executor');


AWS.EventListeners = {

  Core: {} /* doc hack */
};

AWS.EventListeners = {
  Core: new SequentialExecutor().addNamedListeners(function(add, addAsync) {
    addAsync('VALIDATE_CREDENTIALS', 'validate',
        function VALIDATE_CREDENTIALS(req, done) {
      if (!req.service.api.signatureVersion) return done(); // none
      req.service.config.getCredentials(function(err) {
        if (err) {
          req.response.error = AWS.util.error(err,
            {code: 'CredentialsError', message: 'Missing credentials in config'});
        }
        done();
      });
    });

    add('VALIDATE_REGION', 'validate', function VALIDATE_REGION(req) {
      if (!req.service.config.region && !req.service.isGlobalEndpoint) {
        req.response.error = AWS.util.error(new Error(),
          {code: 'ConfigError', message: 'Missing region in config'});
      }
    });

    add('VALIDATE_PARAMETERS', 'validate', function VALIDATE_PARAMETERS(req) {
      var rules = req.service.api.operations[req.operation].input;
      new AWS.ParamValidator().validate(rules, req.params);
    });

    addAsync('COMPUTE_SHA256', 'afterBuild', function COMPUTE_SHA256(req, done) {
      if (!req.service.api.signatureVersion) return done(); // none
      if (req.service.getSignerClass(req) === AWS.Signers.V4) {
        var body = req.httpRequest.body || '';
        AWS.util.computeSha256(body, function(err, sha) {
          if (err) {
            done(err);
          }
          else {
            req.httpRequest.headers['X-Amz-Content-Sha256'] = sha;
            done();
          }
        });
      } else {
        done();
      }
    });

    add('SET_CONTENT_LENGTH', 'afterBuild', function SET_CONTENT_LENGTH(req) {
      if (req.httpRequest.headers['Content-Length'] === undefined) {
        var length = AWS.util.string.byteLength(req.httpRequest.body);
        req.httpRequest.headers['Content-Length'] = length;
      }
    });

    add('SET_HTTP_HOST', 'afterBuild', function SET_HTTP_HOST(req) {
      req.httpRequest.headers['Host'] = req.httpRequest.endpoint.host;
    });

    add('RESTART', 'restart', function RESTART() {
      var err = this.response.error;
      if (!err || !err.retryable) return;

      if (this.response.retryCount < this.service.config.maxRetries) {
        this.response.retryCount++;
      } else {
        this.response.error = null;
      }
    });

    addAsync('SIGN', 'sign', function SIGN(req, done) {
      if (!req.service.api.signatureVersion) return done(); // none

      req.service.config.getCredentials(function (err, credentials) {
        if (err) {
          req.response.error = err;
          return done();
        }

        try {
          var date = AWS.util.date.getDate();
          var SignerClass = req.service.getSignerClass(req);
          var signer = new SignerClass(req.httpRequest,
            req.service.api.signingName || req.service.api.endpointPrefix);

          delete req.httpRequest.headers['Authorization'];
          delete req.httpRequest.headers['Date'];
          delete req.httpRequest.headers['X-Amz-Date'];

          signer.addAuthorization(credentials, date);
          req.signedAt = date;
        } catch (e) {
          req.response.error = e;
        }
        done();
      });
    });

    add('VALIDATE_RESPONSE', 'validateResponse', function VALIDATE_RESPONSE(resp) {
      if (this.service.successfulResponse(resp, this)) {
        resp.data = {};
        resp.error = null;
      } else {
        resp.data = null;
        resp.error = AWS.util.error(new Error(),
          {code: 'UnknownError', message: 'An unknown error occurred.'});
      }
    });

    addAsync('SEND', 'send', function SEND(resp, done) {
      resp.httpResponse._abortCallback = done;
      resp.error = null;
      resp.data = null;

      function callback(httpResp) {
        resp.httpResponse.stream = httpResp;

        httpResp.on('headers', function onHeaders(statusCode, headers) {
          resp.request.emit('httpHeaders', [statusCode, headers, resp]);

          if (!resp.httpResponse.streaming) {
            if (AWS.HttpClient.streamsApiVersion === 2) { // streams2 API check
              httpResp.on('readable', function onReadable() {
                var data = httpResp.read();
                if (data !== null) {
                  resp.request.emit('httpData', [data, resp]);
                }
              });
            } else { // legacy streams API
              httpResp.on('data', function onData(data) {
                resp.request.emit('httpData', [data, resp]);
              });
            }
          }
        });

        httpResp.on('end', function onEnd() {
          resp.request.emit('httpDone');
          done();
        });
      }

      function progress(httpResp) {
        httpResp.on('sendProgress', function onSendProgress(value) {
          resp.request.emit('httpUploadProgress', [value, resp]);
        });

        httpResp.on('receiveProgress', function onReceiveProgress(value) {
          resp.request.emit('httpDownloadProgress', [value, resp]);
        });
      }

      function error(err) {
        resp.error = AWS.util.error(err, {
          code: 'NetworkingError',
          region: resp.request.httpRequest.region,
          hostname: resp.request.httpRequest.endpoint.hostname,
          retryable: true
        });
        resp.request.emit('httpError', [resp.error, resp], function() {
          done();
        });
      }

      function executeSend() {
        var http = AWS.HttpClient.getInstance();
        var httpOptions = resp.request.service.config.httpOptions || {};
        try {
          var stream = http.handleRequest(resp.request.httpRequest, httpOptions,
                                          callback, error);
          progress(stream);
        } catch (err) {
          error(err);
        }
      }

      var timeDiff = (AWS.util.date.getDate() - this.signedAt) / 1000;
      if (timeDiff >= 60 * 10) { // if we signed 10min ago, re-sign
        this.emit('sign', [this], function(err) {
          if (err) done(err);
          else executeSend();
        });
      } else {
        executeSend();
      }
    });

    add('HTTP_HEADERS', 'httpHeaders',
        function HTTP_HEADERS(statusCode, headers, resp) {
      resp.httpResponse.statusCode = statusCode;
      resp.httpResponse.headers = headers;
      resp.httpResponse.body = new AWS.util.Buffer('');
      resp.httpResponse.buffers = [];
      resp.httpResponse.numBytes = 0;
    });

    add('HTTP_DATA', 'httpData', function HTTP_DATA(chunk, resp) {
      if (chunk) {
        if (AWS.util.isNode()) {
          resp.httpResponse.numBytes += chunk.length;

          var total = resp.httpResponse.headers['content-length'];
          var progress = { loaded: resp.httpResponse.numBytes, total: total };
          resp.request.emit('httpDownloadProgress', [progress, resp]);
        }

        resp.httpResponse.buffers.push(new AWS.util.Buffer(chunk));
      }
    });

    add('HTTP_DONE', 'httpDone', function HTTP_DONE(resp) {
      if (resp.httpResponse.buffers && resp.httpResponse.buffers.length > 0) {
        var body = AWS.util.buffer.concat(resp.httpResponse.buffers);
        resp.httpResponse.body = body;
      }
      delete resp.httpResponse.numBytes;
      delete resp.httpResponse.buffers;
    });

    add('FINALIZE_ERROR', 'retry', function FINALIZE_ERROR(resp) {
      if (resp.httpResponse.statusCode) {
        resp.error.statusCode = resp.httpResponse.statusCode;
        if (resp.error.retryable === undefined) {
          resp.error.retryable = this.service.retryableError(resp.error, this);
        }
      }
    });

    add('INVALIDATE_CREDENTIALS', 'retry', function INVALIDATE_CREDENTIALS(resp) {
      if (!resp.error) return;
      switch (resp.error.code) {
        case 'RequestExpired': // EC2 only
        case 'ExpiredTokenException':
        case 'ExpiredToken':
          resp.error.retryable = true;
          resp.request.service.config.credentials.expired = true;
      }
    });

    add('EXPIRED_SIGNATURE', 'retry', function EXPIRED_SIGNATURE(resp) {
      var err = resp.error;
      if (!err) return;
      if (typeof err.code === 'string' && typeof err.message === 'string') {
        if (err.code.match(/Signature/) && err.message.match(/expired/)) {
          resp.error.retryable = true;
        }
      }
    });

    add('REDIRECT', 'retry', function REDIRECT(resp) {
      if (resp.error && resp.error.statusCode >= 300 &&
          resp.error.statusCode < 400 && resp.httpResponse.headers['location']) {
        this.httpRequest.endpoint =
          new AWS.Endpoint(resp.httpResponse.headers['location']);
        this.httpRequest.headers['Host'] = this.httpRequest.endpoint.host;
        resp.error.redirect = true;
        resp.error.retryable = true;
      }
    });

    add('RETRY_CHECK', 'retry', function RETRY_CHECK(resp) {
      if (resp.error) {
        if (resp.error.redirect && resp.redirectCount < resp.maxRedirects) {
          resp.error.retryDelay = 0;
        } else if (resp.retryCount < resp.maxRetries) {
          var delays = this.service.retryDelays();
          resp.error.retryDelay = delays[resp.retryCount] || 0;
        }
      }
    });

    addAsync('RESET_RETRY_STATE', 'afterRetry', function RESET_RETRY_STATE(resp, done) {
      var delay, willRetry = false;

      if (resp.error) {
        delay = resp.error.retryDelay || 0;
        if (resp.error.retryable && resp.retryCount < resp.maxRetries) {
          resp.retryCount++;
          willRetry = true;
        } else if (resp.error.redirect && resp.redirectCount < resp.maxRedirects) {
          resp.redirectCount++;
          willRetry = true;
        }
      }

      if (willRetry) {
        resp.error = null;
        setTimeout(done, delay);
      } else {
        done();
      }
    });
  }),

  CorePost: new SequentialExecutor().addNamedListeners(function(add) {
    add('EXTRACT_REQUEST_ID', 'extractData', function EXTRACT_REQUEST_ID(resp) {

      if (!resp.requestId) {
        resp.requestId = resp.httpResponse.headers['x-amz-request-id'] ||
                          resp.httpResponse.headers['x-amzn-requestid'];
      }

      if (!resp.requestId && resp.data && resp.data.ResponseMetadata) {
        resp.requestId = resp.data.ResponseMetadata.RequestId;
      }
    });

    add('ENOTFOUND_ERROR', 'httpError', function ENOTFOUND_ERROR(err) {
      if (err.code === 'NetworkingError' && err.errno === 'ENOTFOUND') {
        var message = 'Inaccessible host: `' + err.hostname +
          '\'. This service may not be available in the `' + err.region +
          '\' region.';
        this.response.error = AWS.util.error(new Error(message), {
          code: 'UnknownEndpoint',
          region: err.region,
          hostname: err.hostname,
          retryable: true,
          originalError: err
        });
      }
    });
  }),

  Logger: new SequentialExecutor().addNamedListeners(function(add) {
    add('LOG_REQUEST', 'complete', function LOG_REQUEST(resp) {
      var req = resp.request;
      var logger = req.service.config.logger;
      if (!logger) return;

      function buildMessage() {
        var time = AWS.util.date.getDate().getTime();
        var delta = (time - req.startTime.getTime()) / 1000;
        var ansi = logger.isTTY ? true : false;
        var status = resp.httpResponse.statusCode;
        var params = require('util').inspect(req.params, true, null);

        var message = '';
        if (ansi) message += '\x1B[33m';
        message += '[AWS ' + req.service.serviceIdentifier + ' ' + status;
        message += ' ' + delta.toString() + 's ' + resp.retryCount + ' retries]';
        if (ansi) message += '\x1B[0;1m';
        message += ' ' + AWS.util.string.lowerFirst(req.operation);
        message += '(' + params + ')';
        if (ansi) message += '\x1B[0m';
        return message;
      }

      var line = buildMessage();
      if (typeof logger.log === 'function') {
        logger.log(line);
      } else if (typeof logger.write === 'function') {
        logger.write(line + '\n');
      }
    });
  }),

  Json: new SequentialExecutor().addNamedListeners(function(add) {
    var svc = require('./protocol/json');
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  }),

  Rest: new SequentialExecutor().addNamedListeners(function(add) {
    var svc = require('./protocol/rest');
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  }),

  RestJson: new SequentialExecutor().addNamedListeners(function(add) {
    var svc = require('./protocol/rest_json');
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  }),

  RestXml: new SequentialExecutor().addNamedListeners(function(add) {
    var svc = require('./protocol/rest_xml');
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  }),

  Query: new SequentialExecutor().addNamedListeners(function(add) {
    var svc = require('./protocol/query');
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  })
};

},{"./core":3,"./protocol/json":22,"./protocol/query":23,"./protocol/rest":24,"./protocol/rest_json":25,"./protocol/rest_xml":26,"./sequential_executor":33,"util":217}],11:[function(require,module,exports){
var AWS = require('./core');
var inherit = AWS.util.inherit;


AWS.Endpoint = inherit({


  constructor: function Endpoint(endpoint, config) {
    AWS.util.hideProperties(this, ['slashes', 'auth', 'hash', 'search', 'query']);

    if (typeof endpoint === 'undefined' || endpoint === null) {
      throw new Error('Invalid endpoint: ' + endpoint);
    } else if (typeof endpoint !== 'string') {
      return AWS.util.copy(endpoint);
    }

    if (!endpoint.match(/^http/)) {
      var useSSL = config && config.sslEnabled !== undefined ?
        config.sslEnabled : AWS.config.sslEnabled;
      endpoint = (useSSL ? 'https' : 'http') + '://' + endpoint;
    }

    AWS.util.update(this, AWS.util.urlParse(endpoint));

    if (this.port) {
      this.port = parseInt(this.port, 10);
    } else {
      this.port = this.protocol === 'https:' ? 443 : 80;
    }
  }

});


AWS.HttpRequest = inherit({


  constructor: function HttpRequest(endpoint, region) {
    endpoint = new AWS.Endpoint(endpoint);
    this.method = 'POST';
    this.path = endpoint.path || '/';
    this.headers = {};
    this.body = '';
    this.endpoint = endpoint;
    this.region = region;
    this.setUserAgent();
  },


  setUserAgent: function setUserAgent() {
    var prefix = AWS.util.isBrowser() ? 'X-Amz-' : '';
    this.headers[prefix + 'User-Agent'] = AWS.util.userAgent();
  },


  pathname: function pathname() {
    return this.path.split('?', 1)[0];
  },


  search: function search() {
    var query = this.path.split('?', 2)[1];
    if (query) {
      query = AWS.util.queryStringParse(query);
      return AWS.util.queryParamsToString(query);
    }
    return '';
  }

});


AWS.HttpResponse = inherit({


  constructor: function HttpResponse() {
    this.statusCode = undefined;
    this.headers = {};
    this.body = undefined;
    this.streaming = false;
    this.stream = null;
  },


  createUnbufferedStream: function createUnbufferedStream() {
    this.streaming = true;
    return this.stream;
  }
});


AWS.HttpClient = inherit({});


AWS.HttpClient.getInstance = function getInstance() {
  if (this.singleton === undefined) {
    this.singleton = new this();
  }
  return this.singleton;
};

},{"./core":3}],12:[function(require,module,exports){
var AWS = require('../core');
var EventEmitter = require('events').EventEmitter;
require('../http');


AWS.XHRClient = AWS.util.inherit({
  handleRequest: function handleRequest(httpRequest, httpOptions, callback, errCallback) {
    var self = this;
    var endpoint = httpRequest.endpoint;
    var emitter = new EventEmitter();
    var href = endpoint.protocol + '//' + endpoint.hostname;
    if (endpoint.port !== 80 && endpoint.port !== 443) {
      href += ':' + endpoint.port;
    }
    href += httpRequest.path;

    var xhr = new XMLHttpRequest(), headersEmitted = false;
    httpRequest.stream = xhr;

    xhr.addEventListener('readystatechange', function() {
      try {
        if (xhr.status === 0) return; // 0 code is invalid
      } catch (e) { return; }

      if (this.readyState >= this.HEADERS_RECEIVED && !headersEmitted) {
        try { xhr.responseType = 'arraybuffer'; } catch (e) {}
        emitter.statusCode = xhr.status;
        emitter.headers = self.parseHeaders(xhr.getAllResponseHeaders());
        emitter.emit('headers', emitter.statusCode, emitter.headers);
        headersEmitted = true;
      }
      if (this.readyState === this.DONE) {
        self.finishRequest(xhr, emitter);
      }
    }, false);
    xhr.upload.addEventListener('progress', function (evt) {
      emitter.emit('sendProgress', evt);
    });
    xhr.addEventListener('progress', function (evt) {
      emitter.emit('receiveProgress', evt);
    }, false);
    xhr.addEventListener('timeout', function () {
      errCallback(AWS.util.error(new Error('Timeout'), {code: 'TimeoutError'}));
    }, false);
    xhr.addEventListener('error', function () {
      errCallback(AWS.util.error(new Error('Network Failure'), {
        code: 'NetworkingError'
      }));
    }, false);

    callback(emitter);
    xhr.open(httpRequest.method, href, httpOptions.xhrAsync !== false);
    AWS.util.each(httpRequest.headers, function (key, value) {
      if (key !== 'Content-Length' && key !== 'User-Agent' && key !== 'Host') {
        xhr.setRequestHeader(key, value);
      }
    });

    if (httpOptions.timeout && httpOptions.xhrAsync !== false) {
      xhr.timeout = httpOptions.timeout;
    }

    if (httpOptions.xhrWithCredentials) {
      xhr.withCredentials = true;
    }

    try {
      xhr.send(httpRequest.body);
    } catch (err) {
      if (httpRequest.body && typeof httpRequest.body.buffer === 'object') {
        xhr.send(httpRequest.body.buffer); // send ArrayBuffer directly
      } else {
        throw err;
      }
    }

    return emitter;
  },

  parseHeaders: function parseHeaders(rawHeaders) {
    var headers = {};
    AWS.util.arrayEach(rawHeaders.split(/\r?\n/), function (line) {
      var key = line.split(':', 1)[0];
      var value = line.substring(key.length + 2);
      if (key.length > 0) headers[key] = value;
    });
    return headers;
  },

  finishRequest: function finishRequest(xhr, emitter) {
    var buffer;
    if (xhr.responseType === 'arraybuffer' && xhr.response) {
      var ab = xhr.response;
      buffer = new AWS.util.Buffer(ab.byteLength);
      var view = new Uint8Array(ab);
      for (var i = 0; i < buffer.length; ++i) {
        buffer[i] = view[i];
      }
    }

    try {
      if (!buffer && typeof xhr.responseText === 'string') {
        buffer = new AWS.util.Buffer(xhr.responseText);
      }
    } catch (e) {}

    if (buffer) emitter.emit('data', buffer);
    emitter.emit('end');
  }
});


AWS.HttpClient.prototype = AWS.XHRClient.prototype;


AWS.HttpClient.streamsApiVersion = 1;

},{"../core":3,"../http":11,"events":194}],13:[function(require,module,exports){
var util = require('../util');

function JsonBuilder() { }

JsonBuilder.prototype.build = function(value, shape) {
  return JSON.stringify(translate(value, shape));
};

function translate(value, shape) {
  if (!shape || value === undefined || value === null) return undefined;

  switch (shape.type) {
    case 'structure': return translateStructure(value, shape);
    case 'map': return translateMap(value, shape);
    case 'list': return translateList(value, shape);
    default: return translateScalar(value, shape);
  }
}

function translateStructure(structure, shape) {
  var struct = {};
  util.each(structure, function(name, value) {
    var memberShape = shape.members[name];
    if (memberShape) {
      if (memberShape.location !== 'body') return;

      var result = translate(value, memberShape);
      if (result !== undefined) struct[name] = result;
    }
  });
  return struct;
}

function translateList(list, shape) {
  var out = [];
  util.arrayEach(list, function(value) {
    var result = translate(value, shape.member);
    if (result !== undefined) out.push(result);
  });
  return out;
}

function translateMap(map, shape) {
  var out = {};
  util.each(map, function(key, value) {
    var result = translate(value, shape.value);
    if (result !== undefined) out[key] = result;
  });
  return out;
}

function translateScalar(value, shape) {
  return shape.toWireFormat(value);
}

module.exports = JsonBuilder;

},{"../util":46}],14:[function(require,module,exports){
var util = require('../util');

function JsonParser() { }

JsonParser.prototype.parse = function(value, shape) {
  return translate(JSON.parse(value), shape);
};

function translate(value, shape) {
  if (!shape || value === undefined || value === null) return undefined;

  switch (shape.type) {
    case 'structure': return translateStructure(value, shape);
    case 'map': return translateMap(value, shape);
    case 'list': return translateList(value, shape);
    default: return translateScalar(value, shape);
  }
}

function translateStructure(structure, shape) {
  var struct = {};
  util.each(structure, function(name, value) {
    var memberShape = shape.members[name];
    if (memberShape) {
      var result = translate(value, memberShape);
      if (result !== undefined) struct[name] = result;
    }
  });
  return struct;
}

function translateList(list, shape) {
  var out = [];
  util.arrayEach(list, function(value) {
    var result = translate(value, shape.member);
    if (result !== undefined) out.push(result);
  });
  return out;
}

function translateMap(map, shape) {
  var out = {};
  util.each(map, function(key, value) {
    var result = translate(value, shape.value);
    if (result !== undefined) out[key] = result;
  });
  return out;
}

function translateScalar(value, shape) {
  return shape.toType(value);
}

module.exports = JsonParser;

},{"../util":46}],15:[function(require,module,exports){
var Collection = require('./collection');
var Operation = require('./operation');
var Shape = require('./shape');
var Paginator = require('./paginator');
var ResourceWaiter = require('./resource_waiter');

var util = require('../util');
var property = util.property;
var memoizedProperty = util.memoizedProperty;

function Api(api, options) {
  api = api || {};
  options = options || {};
  options.api = this;

  api.metadata = api.metadata || {};

  property(this, 'isApi', true, false);
  property(this, 'apiVersion', api.metadata.apiVersion);
  property(this, 'endpointPrefix', api.metadata.endpointPrefix);
  property(this, 'signingName', api.metadata.signingName);
  property(this, 'globalEndpoint', api.metadata.globalEndpoint);
  property(this, 'signatureVersion', api.metadata.signatureVersion);
  property(this, 'jsonVersion', api.metadata.jsonVersion);
  property(this, 'targetPrefix', api.metadata.targetPrefix);
  property(this, 'protocol', api.metadata.protocol);
  property(this, 'timestampFormat', api.metadata.timestampFormat);
  property(this, 'xmlNamespaceUri', api.metadata.xmlNamespace);
  property(this, 'abbreviation', api.metadata.serviceAbbreviation);
  property(this, 'fullName', api.metadata.serviceFullName);

  memoizedProperty(this, 'className', function() {
    var name = api.metadata.serviceAbbreviation || api.metadata.serviceFullName;
    if (!name) return null;

    name = name.replace(/^Amazon|AWS\s*|\(.*|\s+|\W+/g, '');
    if (name === 'ElasticLoadBalancing') name = 'ELB';
    return name;
  });

  property(this, 'operations', new Collection(api.operations, options, function(name, operation) {
    return new Operation(name, operation, options);
  }, util.string.lowerFirst));

  property(this, 'shapes', new Collection(api.shapes, options, function(name, shape) {
    return Shape.create(shape, options);
  }));

  property(this, 'paginators', new Collection(api.paginators, options, function(name, paginator) {
    return new Paginator(name, paginator, options);
  }));

  property(this, 'waiters', new Collection(api.waiters, options, function(name, waiter) {
    return new ResourceWaiter(name, waiter, options);
  }, util.string.lowerFirst));

  if (options.documentation) {
    property(this, 'documentation', api.documentation);
    property(this, 'documentationUrl', api.documentationUrl);
  }
}

module.exports = Api;

},{"../util":46,"./collection":16,"./operation":17,"./paginator":18,"./resource_waiter":19,"./shape":20}],16:[function(require,module,exports){
var memoizedProperty = require('../util').memoizedProperty;

function memoize(name, value, fn, nameTr) {
  memoizedProperty(this, nameTr(name), function() {
    return fn(name, value);
  });
}

function Collection(iterable, options, fn, nameTr) {
  nameTr = nameTr || String;
  var self = this;

  for (var id in iterable) {
    if (iterable.hasOwnProperty(id)) {
      memoize.call(self, id, iterable[id], fn, nameTr);
    }
  }
}

module.exports = Collection;

},{"../util":46}],17:[function(require,module,exports){
var Shape = require('./shape');

var util = require('../util');
var property = util.property;
var memoizedProperty = util.memoizedProperty;

function Operation(name, operation, options) {
  options = options || {};

  property(this, 'name', operation.name || name);
  property(this, 'api', options.api, false);

  operation.http = operation.http || {};
  property(this, 'httpMethod', operation.http.method || 'POST');
  property(this, 'httpPath', operation.http.requestUri || '/');

  memoizedProperty(this, 'input', function() {
    if (!operation.input) {
      return new Shape.create({type: 'structure'}, options);
    }
    return Shape.create(operation.input, options);
  });

  memoizedProperty(this, 'output', function() {
    if (!operation.output) {
      return new Shape.create({type: 'structure'}, options);
    }
    return Shape.create(operation.output, options);
  });

  memoizedProperty(this, 'errors', function() {
    var list = [];
    if (!operation.errors) return null;

    for (var i = 0; i < operation.errors.length; i++) {
      list.push(Shape.create(operation.errors[i], options));
    }

    return list;
  });

  memoizedProperty(this, 'paginator', function() {
    return options.api.paginators[name];
  });

  if (options.documentation) {
    property(this, 'documentation', operation.documentation);
    property(this, 'documentationUrl', operation.documentationUrl);
  }
}

module.exports = Operation;

},{"../util":46,"./shape":20}],18:[function(require,module,exports){
var property = require('../util').property;

function Paginator(name, paginator) {
  property(this, 'inputToken', paginator.input_token);
  property(this, 'limitKey', paginator.limit_key);
  property(this, 'moreResults', paginator.more_results);
  property(this, 'outputToken', paginator.output_token);
  property(this, 'resultKey', paginator.result_key);
}

module.exports = Paginator;

},{"../util":46}],19:[function(require,module,exports){
var util = require('../util');
var property = util.property;

function ResourceWaiter(name, waiter, options) {
  options = options || {};

  function InnerResourceWaiter() {
    property(this, 'name', name);
    property(this, 'api', options.api, false);

    if (waiter.operation) {
      property(this, 'operation', util.string.lowerFirst(waiter.operation));
    }

    var self = this, map = {
      ignoreErrors: 'ignore_errors',
      successType: 'success_type',
      successValue: 'success_value',
      successPath: 'success_path',
      acceptorType: 'acceptor_type',
      acceptorValue: 'acceptor_value',
      acceptorPath: 'acceptor_path',
      failureType: 'failure_type',
      failureValue: 'failure_value',
      failurePath: 'success_path',
      interval: 'interval',
      maxAttempts: 'max_attempts'
    };
    Object.keys(map).forEach(function(key) {
      var value = waiter[map[key]];
      if (value) property(self, key, value);
    });
  }

  if (options.api) {
    var proto = null;
    if (waiter['extends']) {
      proto = options.api.waiters[waiter['extends']];
    } else if (name !== '__default__') {
      proto = options.api.waiters['__default__'];
    }

    if (proto) InnerResourceWaiter.prototype = proto;
  }

  return new InnerResourceWaiter();
}

module.exports = ResourceWaiter;

},{"../util":46}],20:[function(require,module,exports){
var Collection = require('./collection');

var util = require('../util');

function property(obj, name, value) {
  if (value !== null && value !== undefined) {
    util.property.apply(this, arguments);
  }
}

function memoizedProperty(obj, name) {
  if (!obj.constructor.prototype[name]) {
    util.memoizedProperty.apply(this, arguments);
  }
}

function Shape(shape, options, memberName) {
  options = options || {};

  property(this, 'shape', shape.shape);
  property(this, 'api', options.api, false);
  property(this, 'type', shape.type);
  property(this, 'location', shape.location || this.location || 'body');
  property(this, 'name', this.name || shape.xmlName || shape.queryName ||
    shape.locationName || memberName);
  property(this, 'isStreaming', shape.streaming || this.isStreaming || false);
  property(this, 'isComposite', shape.isComposite || false);
  property(this, 'isShape', true, false);
  property(this, 'isQueryName', shape.queryName ? true : false, false);
  property(this, 'isLocationName', shape.locationName ? true : false, false);

  if (options.documentation) {
    property(this, 'documentation', shape.documentation);
    property(this, 'documentationUrl', shape.documentationUrl);
  }

  if (shape.xmlAttribute) {
    property(this, 'isXmlAttribute', shape.xmlAttribute || false);
  }

  property(this, 'defaultValue', null);
  this.toWireFormat = function(value) {
    if (value === null || value === undefined) return '';
    return value;
  };
  this.toType = function(value) { return value; };
}


Shape.normalizedTypes = {
  character: 'string',
  double: 'float',
  long: 'integer',
  short: 'integer',
  biginteger: 'integer',
  bigdecimal: 'float',
  blob: 'binary'
};


Shape.types = {
  'structure': StructureShape,
  'list': ListShape,
  'map': MapShape,
  'boolean': BooleanShape,
  'timestamp': TimestampShape,
  'float': FloatShape,
  'integer': IntegerShape,
  'string': StringShape,
  'base64': Base64Shape,
  'binary': BinaryShape
};

Shape.resolve = function resolve(shape, options) {
  if (shape.shape) {
    var refShape = options.api.shapes[shape.shape];
    if (!refShape) {
      throw new Error('Cannot find shape reference: ' + shape.shape);
    }

    return refShape;
  } else {
    return null;
  }
};

Shape.create = function create(shape, options, memberName) {
  if (shape.isShape) return shape;

  var refShape = Shape.resolve(shape, options);
  if (refShape) {
    var filteredKeys = Object.keys(shape);
    if (!options.documentation) {
      filteredKeys = filteredKeys.filter(function(name) {
        return !name.match(/documentation/);
      });
    }
    if (filteredKeys === ['shape']) { // no inline customizations
      return refShape;
    }

    var InlineShape = function() {
      refShape.constructor.call(this, shape, options, memberName);
    };
    InlineShape.prototype = refShape;
    return new InlineShape();
  } else {
    if (!shape.type) {
      if (shape.members) shape.type = 'structure';
      else if (shape.member) shape.type = 'list';
      else if (shape.key) shape.type = 'map';
      else shape.type = 'string';
    }

    var origType = shape.type;
    if (Shape.normalizedTypes[shape.type]) {
      shape.type = Shape.normalizedTypes[shape.type];
    }

    if (Shape.types[shape.type]) {
      return new Shape.types[shape.type](shape, options, memberName);
    } else {
      throw new Error('Unrecognized shape type: ' + origType);
    }
  }
};

function CompositeShape(shape) {
  Shape.apply(this, arguments);
  property(this, 'isComposite', true);

  if (shape.flattened) {
    property(this, 'flattened', shape.flattened || false);
  }
}

function StructureShape(shape, options) {
  var requiredMap = null, firstInit = !this.isShape;

  CompositeShape.apply(this, arguments);

  if (firstInit) {
    property(this, 'defaultValue', function() { return {}; });
    property(this, 'members', {});
    property(this, 'memberNames', []);
    property(this, 'required', []);
    property(this, 'isRequired', function() { return false; });
  }

  if (shape.members) {
    property(this, 'members', new Collection(shape.members, options, function(name, member) {
      return Shape.create(member, options, name);
    }));
    memoizedProperty(this, 'memberNames', function() {
      return shape.xmlOrder || Object.keys(shape.members);
    });
  }

  if (shape.required) {
    property(this, 'required', shape.required);
    property(this, 'isRequired', function(name) {
      if (!requiredMap) {
        requiredMap = {};
        for (var i = 0; i < shape.required.length; i++) {
          requiredMap[shape.required[i]] = true;
        }
      }

      return requiredMap[name];
    }, false, true);
  }

  property(this, 'resultWrapper', shape.resultWrapper || null);

  if (shape.payload) {
    property(this, 'payload', shape.payload);
  }

  if (typeof shape.xmlNamespace === 'string') {
    property(this, 'xmlNamespaceUri', shape.xmlNamespace);
  } else if (typeof shape.xmlNamespace === 'object') {
    property(this, 'xmlNamespacePrefix', shape.xmlNamespace.prefix);
    property(this, 'xmlNamespaceUri', shape.xmlNamespace.uri);
  }
}

function ListShape(shape, options) {
  var self = this, firstInit = !this.isShape;
  CompositeShape.apply(this, arguments);

  if (firstInit) {
    property(this, 'defaultValue', function() { return []; });
  }

  if (shape.member) {
    memoizedProperty(this, 'member', function() {
      return Shape.create(shape.member, options);
    });
  }

  if (this.flattened) {
    var oldName = this.name;
    memoizedProperty(this, 'name', function() {
      return self.member.name || oldName;
    });
  }
}

function MapShape(shape, options) {
  var firstInit = !this.isShape;
  CompositeShape.apply(this, arguments);

  if (firstInit) {
    property(this, 'defaultValue', function() { return {}; });
    property(this, 'key', Shape.create({type: 'string'}, options));
    property(this, 'value', Shape.create({type: 'string'}, options));
  }

  if (shape.key) {
    memoizedProperty(this, 'key', function() {
      return Shape.create(shape.key, options);
    });
  }
  if (shape.value) {
    memoizedProperty(this, 'value', function() {
      return Shape.create(shape.value, options);
    });
  }
}

function TimestampShape(shape) {
  var self = this;
  Shape.apply(this, arguments);

  if (this.location === 'header') {
    property(this, 'timestampFormat', 'rfc822');
  } else if (shape.timestampFormat) {
    property(this, 'timestampFormat', shape.timestampFormat);
  } else if (this.api) {
    if (this.api.timestampFormat) {
      property(this, 'timestampFormat', this.api.timestampFormat);
    } else {
      switch (this.api.protocol) {
        case 'json':
        case 'rest-json':
          property(this, 'timestampFormat', 'unixTimestamp');
          break;
        case 'rest-xml':
        case 'query':
        case 'ec2':
          property(this, 'timestampFormat', 'iso8601');
          break;
      }
    }
  }

  this.toType = function(value) {
    if (value === null || value === undefined) return null;
    if (typeof value.toUTCString === 'function') return value;
    return typeof value === 'string' || typeof value === 'number' ?
           util.date.parseTimestamp(value) : null;
  };

  this.toWireFormat = function(value) {
    return util.date.format(value, self.timestampFormat);
  };
}

function StringShape() {
  Shape.apply(this, arguments);

  if (this.api) {
    switch (this.api.protocol) {
      case 'rest-xml':
      case 'query':
      case 'ec2':
        this.toType = function(value) { return value || ''; };
    }
  }
}

function FloatShape() {
  Shape.apply(this, arguments);

  this.toType = function(value) {
    if (value === null || value === undefined) return null;
    return parseFloat(value);
  };
  this.toWireFormat = this.toType;
}

function IntegerShape() {
  Shape.apply(this, arguments);

  this.toType = function(value) {
    if (value === null || value === undefined) return null;
    return parseInt(value, 10);
  };
  this.toWireFormat = this.toType;
}

function BinaryShape() {
  Shape.apply(this, arguments);
  this.toType = util.base64.decode;
  this.toWireFormat = util.base64.encode;
}

function Base64Shape() {
  BinaryShape.apply(this, arguments);
}

function BooleanShape() {
  Shape.apply(this, arguments);

  this.toType = function(value) {
    if (typeof value === 'boolean') return value;
    if (value === null || value === undefined) return null;
    return value === 'true';
  };
}


Shape.shapes = {
  StructureShape: StructureShape,
  ListShape: ListShape,
  MapShape: MapShape,
  StringShape: StringShape,
  BooleanShape: BooleanShape,
  Base64Shape: Base64Shape
};

module.exports = Shape;

},{"../util":46,"./collection":16}],21:[function(require,module,exports){
var AWS = require('./core');


AWS.ParamValidator = AWS.util.inherit({
  validate: function validate(shape, params, context) {
    this.errors = [];
    this.validateMember(shape, params || {}, context || 'params');

    if (this.errors.length > 1) {
      var msg = this.errors.join('\n* ');
      if (this.errors.length > 1) {
        msg = 'There were ' + this.errors.length +
              ' validation errors:\n* ' + msg;
        throw AWS.util.error(new Error(msg),
          {code: 'MultipleValidationErrors', errors: this.errors});
      }
    } else if (this.errors.length === 1) {
      throw this.errors[0];
    } else {
      return true;
    }
  },

  validateStructure: function validateStructure(shape, params, context) {
    this.validateType(context, params, ['object'], 'structure');

    var paramName;
    for (var i = 0; shape.required && i < shape.required.length; i++) {
      paramName = shape.required[i];
      var value = params[paramName];
      if (value === undefined || value === null) {
        this.fail('MissingRequiredParameter',
          'Missing required key \'' + paramName + '\' in ' + context);
      }
    }

    for (paramName in params) {
      if (!params.hasOwnProperty(paramName)) continue;

      var paramValue = params[paramName],
          memberShape = shape.members[paramName];

      if (memberShape !== undefined) {
        var memberContext = [context, paramName].join('.');
        this.validateMember(memberShape, paramValue, memberContext);
      } else {
        this.fail('UnexpectedParameter',
          'Unexpected key \'' + paramName + '\' found in ' + context);
      }
    }

    return true;
  },

  validateMember: function validateMember(shape, param, context) {
    switch (shape.type) {
      case 'structure':
        return this.validateStructure(shape, param, context);
      case 'list':
        return this.validateList(shape, param, context);
      case 'map':
        return this.validateMap(shape, param, context);
      default:
        return this.validateScalar(shape, param, context);
    }
  },

  validateList: function validateList(shape, params, context) {
    this.validateType(context, params, [Array]);

    for (var i = 0; i < params.length; i++) {
      this.validateMember(shape.member, params[i], context + '[' + i + ']');
    }
  },

  validateMap: function validateMap(shape, params, context) {
    this.validateType(context, params, ['object'], 'map');

    for (var param in params) {
      if (!params.hasOwnProperty(param)) continue;
      this.validateMember(shape.value, params[param],
                          context + '[\'' + param + '\']');
    }
  },

  validateScalar: function validateScalar(shape, value, context) {
    switch (shape.type) {
      case null:
      case undefined:
      case 'string':
        return this.validateType(context, value, ['string']);
      case 'base64':
      case 'binary':
        return this.validatePayload(context, value);
      case 'integer':
      case 'float':
        return this.validateNumber(context, value);
      case 'boolean':
        return this.validateType(context, value, ['boolean']);
      case 'timestamp':
        return this.validateType(context, value, [Date,
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/, 'number'],
          'Date object, ISO-8601 string, or a UNIX timestamp');
      default:
        return this.fail('UnkownType', 'Unhandled type ' +
                         shape.type + ' for ' + context);
    }
  },

  fail: function fail(code, message) {
    this.errors.push(AWS.util.error(new Error(message), {code: code}));
  },

  validateType: function validateType(context, value, acceptedTypes, type) {
    if (value === null || value === undefined) return;

    var foundInvalidType = false;
    for (var i = 0; i < acceptedTypes.length; i++) {
      if (typeof acceptedTypes[i] === 'string') {
        if (typeof value === acceptedTypes[i]) return;
      } else if (acceptedTypes[i] instanceof RegExp) {
        if ((value || '').toString().match(acceptedTypes[i])) return;
      } else {
        if (value instanceof acceptedTypes[i]) return;
        if (AWS.util.isType(value, acceptedTypes[i])) return;
        if (!type && !foundInvalidType) acceptedTypes = acceptedTypes.slice();
        acceptedTypes[i] = AWS.util.typeName(acceptedTypes[i]);
      }
      foundInvalidType = true;
    }

    var acceptedType = type;
    if (!acceptedType) {
      acceptedType = acceptedTypes.join(', ').replace(/,([^,]+)$/, ', or$1');
    }

    var vowel = acceptedType.match(/^[aeiou]/i) ? 'n' : '';
    this.fail('InvalidParameterType', 'Expected ' + context + ' to be a' +
              vowel + ' ' + acceptedType);
  },

  validateNumber: function validateNumber(context, value) {
    if (value === null || value === undefined) return;
    if (typeof value === 'string') {
      var castedValue = parseFloat(value);
      if (castedValue.toString() === value) value = castedValue;
    }
    this.validateType(context, value, ['number']);
  },

  validatePayload: function validatePayload(context, value) {
    if (value === null || value === undefined) return;
    if (typeof value === 'string') return;
    if (value && typeof value.byteLength === 'number') return; // typed arrays
    if (AWS.util.isNode()) { // special check for buffer/stream in Node.js
      var Stream = AWS.util.nodeRequire('stream').Stream;
      if (AWS.util.Buffer.isBuffer(value) || value instanceof Stream) return;
    }

    var types = ['Buffer', 'Stream', 'File', 'Blob', 'ArrayBuffer', 'DataView'];
    if (value) {
      for (var i = 0; i < types.length; i++) {
        if (AWS.util.isType(value, types[i])) return;
        if (AWS.util.typeName(value.constructor) === types[i]) return;
      }
    }

    this.fail('InvalidParameterType', 'Expected ' + context + ' to be a ' +
      'string, Buffer, Stream, Blob, or typed array object');
  }
});

},{"./core":3}],22:[function(require,module,exports){
var util = require('../util');
var JsonBuilder = require('../json/builder');
var JsonParser = require('../json/parser');

function buildRequest(req) {
  var httpRequest = req.httpRequest;
  var api = req.service.api;
  var target = api.targetPrefix + '.' + api.operations[req.operation].name;
  var version = api.jsonVersion || '1.0';
  var input = api.operations[req.operation].input;
  var builder = new JsonBuilder();

  if (version === 1) version = '1.0';
  httpRequest.body = builder.build(req.params || {}, input);
  httpRequest.headers['Content-Type'] = 'application/x-amz-json-' + version;
  httpRequest.headers['X-Amz-Target'] = target;
}

function extractError(resp) {
  var error = {};
  var httpResponse = resp.httpResponse;

  error.code = httpResponse.headers['x-amzn-errortype'] || 'UnknownError';
  if (typeof error.code === 'string') {
    error.code = error.code.split(':')[0];
  }

  if (httpResponse.body.length > 0) {
    var e = JSON.parse(httpResponse.body.toString());
    if (e.__type || e.code) {
      error.code = (e.__type || e.code).split('#').pop();
    }
    if (error.code === 'RequestEntityTooLarge') {
      error.message = 'Request body must be less than 1 MB';
    } else {
      error.message = (e.message || e.Message || null);
    }
  } else {
    error.statusCode = httpResponse.statusCode;
    error.message = httpResponse.statusCode.toString();
  }

  resp.error = util.error(new Error(), error);
}

function extractData(resp) {
  var body = resp.httpResponse.body.toString() || '{}';
  if (resp.request.service.config.convertResponseTypes === false) {
    resp.data = JSON.parse(body);
  } else {
    var operation = resp.request.service.api.operations[resp.request.operation];
    var shape = operation.output || {};
    var parser = new JsonParser();
    resp.data = parser.parse(body, shape);
  }
}

module.exports = {
  buildRequest: buildRequest,
  extractError: extractError,
  extractData: extractData
};

},{"../json/builder":13,"../json/parser":14,"../util":46}],23:[function(require,module,exports){
var AWS = require('../core');
var util = require('../util');
var QueryParamSerializer = require('../query/query_param_serializer');
var Shape = require('../model/shape');

function buildRequest(req) {
  var operation = req.service.api.operations[req.operation];
  var httpRequest = req.httpRequest;
  httpRequest.headers['Content-Type'] =
    'application/x-www-form-urlencoded; charset=utf-8';
  httpRequest.params = {
    Version: req.service.api.apiVersion,
    Action: operation.name
  };

  var builder = new QueryParamSerializer();
  builder.serialize(req.params, operation.input, function(name, value) {
    httpRequest.params[name] = value;
  });
  httpRequest.body = util.queryParamsToString(httpRequest.params);
}

function extractError(resp) {
  var data, body = resp.httpResponse.body.toString();
  if (body.match('<UnknownOperationException')) {
    data = {
      Code: 'UnknownOperation',
      Message: 'Unknown operation ' + resp.request.operation
    };
  } else {
    data = new AWS.XML.Parser().parse(body);
  }

  if (data.requestId && !resp.requestId) resp.requestId = data.requestId;
  if (data.Errors) data = data.Errors;
  if (data.Error) data = data.Error;
  if (data.Code) {
    resp.error = util.error(new Error(), {
      code: data.Code,
      message: data.Message
    });
  } else {
    resp.error = util.error(new Error(), {
      code: resp.httpResponse.statusCode,
      message: null
    });
  }
}

function extractData(resp) {
  var req = resp.request;
  var operation = req.service.api.operations[req.operation];
  var shape = operation.output || {};
  var origRules = shape;

  if (origRules.resultWrapper) {
    var tmp = Shape.create({type: 'structure'});
    tmp.members[origRules.resultWrapper] = shape;
    tmp.memberNames = [origRules.resultWrapper];
    util.property(shape, 'name', shape.resultWrapper);
    shape = tmp;
  }

  var parser = new AWS.XML.Parser();

  if (shape && shape.members && !shape.members._XAMZRequestId) {
    var requestIdShape = Shape.create(
      { type: 'string' },
      { api: { protocol: 'query' } },
      'requestId'
    );
    shape.members._XAMZRequestId = requestIdShape;
  }

  var data = parser.parse(resp.httpResponse.body.toString(), shape);
  resp.requestId = data._XAMZRequestId || data.requestId;

  if (data._XAMZRequestId) delete data._XAMZRequestId;

  if (origRules.resultWrapper) {
    if (data[origRules.resultWrapper]) {
      util.update(data, data[origRules.resultWrapper]);
      delete data[origRules.resultWrapper];
    }
  }

  resp.data = data;
}

module.exports = {
  buildRequest: buildRequest,
  extractError: extractError,
  extractData: extractData
};

},{"../core":3,"../model/shape":20,"../query/query_param_serializer":27,"../util":46}],24:[function(require,module,exports){
var util = require('../util');

function populateMethod(req) {
  req.httpRequest.method = req.service.api.operations[req.operation].httpMethod;
}

function populateURI(req) {
  var operation = req.service.api.operations[req.operation];
  var input = operation.input;
  var uri = [req.httpRequest.endpoint.path, operation.httpPath].join('/');
  uri = uri.replace(/\/+/g, '/');

  var queryString = {}, queryStringSet = false;
  util.each(input.members, function (name, member) {
    var paramValue = req.params[name];
    if (paramValue === null || paramValue === undefined) return;
    if (member.location === 'uri') {
      var regex = new RegExp('\\{' + member.name + '(\\+)?\\}');
      uri = uri.replace(regex, function(_, plus) {
        var fn = plus ? util.uriEscapePath : util.uriEscape;
        return fn(String(paramValue));
      });
    } else if (member.location === 'querystring') {
      queryStringSet = true;

      if (member.type === 'list') {
        queryString[member.name] = paramValue.map(function(val) {
          return util.uriEscape(String(val));
        });
      } else {
        queryString[member.name] = util.uriEscape(String(paramValue));
      }
    }
  });

  if (queryStringSet) {
    uri += (uri.indexOf('?') >= 0 ? '&' : '?');
    var parts = [];
    util.arrayEach(Object.keys(queryString).sort(), function(key) {
      if (!Array.isArray(queryString[key])) {
        queryString[key] = [queryString[key]];
      }
      for (var i = 0; i < queryString[key].length; i++) {
        parts.push(util.uriEscape(String(key)) + '=' + queryString[key][i]);
      }
    });
    uri += parts.join('&');
  }

  req.httpRequest.path = uri;
}

function populateHeaders(req) {
  var operation = req.service.api.operations[req.operation];
  util.each(operation.input.members, function (name, member) {
    var value = req.params[name];
    if (value === null || value === undefined) return;

    if (member.location === 'headers' && member.type === 'map') {
      util.each(value, function(key, memberValue) {
        req.httpRequest.headers[member.name + key] = memberValue;
      });
    } else if (member.location === 'header') {
      value = member.toWireFormat(value).toString();
      req.httpRequest.headers[member.name] = value;
    }
  });
}

function buildRequest(req) {
  populateMethod(req);
  populateURI(req);
  populateHeaders(req);
}

function extractError() {
}

function extractData(resp) {
  var req = resp.request;
  var data = {};
  var r = resp.httpResponse;
  var operation = req.service.api.operations[req.operation];
  var output = operation.output;

  var headers = {};
  util.each(r.headers, function (k, v) {
    headers[k.toLowerCase()] = v;
  });

  util.each(output.members, function(name, member) {
    var header = (member.name || name).toLowerCase();
    if (member.location === 'headers' && member.type === 'map') {
      data[name] = {};
      var location = member.isLocationName ? member.name : '';
      var pattern = new RegExp('^' + location + '(.+)', 'i');
      util.each(r.headers, function (k, v) {
        var result = k.match(pattern);
        if (result !== null) {
          data[name][result[1]] = v;
        }
      });
    } else if (member.location === 'header') {
      if (headers[header] !== undefined) {
        data[name] = headers[header];
      }
    } else if (member.location === 'statusCode') {
      data[name] = parseInt(r.statusCode, 10);
    }
  });

  resp.data = data;
}

module.exports = {
  buildRequest: buildRequest,
  extractError: extractError,
  extractData: extractData
};

},{"../util":46}],25:[function(require,module,exports){
var util = require('../util');
var Rest = require('./rest');
var Json = require('./json');
var JsonBuilder = require('../json/builder');
var JsonParser = require('../json/parser');

function populateBody(req) {
  var builder = new JsonBuilder();
  var input = req.service.api.operations[req.operation].input;

  if (input.payload) {
    var params = {};
    var payloadShape = input.members[input.payload];
    params = req.params[input.payload];
    if (params === undefined) return;

    if (payloadShape.type === 'structure') {
      req.httpRequest.body = builder.build(params, payloadShape);
    } else { // non-JSON payload
      req.httpRequest.body = params;
    }
  } else {
    req.httpRequest.body = builder.build(req.params, input);
  }
}

function buildRequest(req) {
  Rest.buildRequest(req);

  if (['GET', 'HEAD'].indexOf(req.httpRequest.method) < 0) {
    populateBody(req);
  }
}

function extractError(resp) {
  Json.extractError(resp);
}

function extractData(resp) {
  Rest.extractData(resp);

  var req = resp.request;
  var rules = req.service.api.operations[req.operation].output || {};
  if (rules.payload) {
    var payloadMember = rules.members[rules.payload];
    var body = resp.httpResponse.body;
    if (payloadMember.isStreaming) {
      resp.data[rules.payload] = body;
    } else if (payloadMember.type === 'structure') {
      var parser = new JsonParser();
      resp.data[rules.payload] = parser.parse(body, payloadMember);
    } else {
      resp.data[rules.payload] = body.toString();
    }
  } else {
    var data = resp.data;
    Json.extractData(resp);
    resp.data = util.merge(data, resp.data);
  }
}

module.exports = {
  buildRequest: buildRequest,
  extractError: extractError,
  extractData: extractData
};

},{"../json/builder":13,"../json/parser":14,"../util":46,"./json":22,"./rest":24}],26:[function(require,module,exports){
var AWS = require('../core');
var util = require('../util');
var Rest = require('./rest');

function populateBody(req) {
  var input = req.service.api.operations[req.operation].input;
  var builder = new AWS.XML.Builder();
  var params = req.params;

  var payload = input.payload;
  if (payload) {
    var payloadMember = input.members[payload];
    params = params[payload];
    if (params === undefined) return;

    if (payloadMember.type === 'structure') {
      var rootElement = payloadMember.name;
      req.httpRequest.body = builder.toXML(params, payloadMember, rootElement);
    } else { // non-xml payload
      req.httpRequest.body = params;
    }
  } else {
    req.httpRequest.body = builder.toXML(params, input, input.name ||
      input.shape || util.string.upperFirst(req.operation) + 'Request');
  }
}

function buildRequest(req) {
  Rest.buildRequest(req);

  if (['GET', 'HEAD'].indexOf(req.httpRequest.method) < 0) {
    populateBody(req);
  }
}

function extractError(resp) {
  Rest.extractError(resp);

  var data = new AWS.XML.Parser().parse(resp.httpResponse.body.toString());
  if (data.Errors) data = data.Errors;
  if (data.Error) data = data.Error;
  if (data.Code) {
    resp.error = util.error(new Error(), {
      code: data.Code,
      message: data.Message
    });
  } else {
    resp.error = util.error(new Error(), {
      code: resp.httpResponse.statusCode,
      message: null
    });
  }
}

function extractData(resp) {
  Rest.extractData(resp);

  var parser;
  var req = resp.request;
  var body = resp.httpResponse.body;
  var operation = req.service.api.operations[req.operation];
  var output = operation.output;

  var payload = output.payload;
  if (payload) {
    var payloadMember = output.members[payload];
    if (payloadMember.isStreaming) {
      resp.data[payload] = body;
    } else if (payloadMember.type === 'structure') {
      parser = new AWS.XML.Parser();
      resp.data[payload] = parser.parse(body.toString(), payloadMember);
    } else {
      resp.data[payload] = body.toString();
    }
  } else if (body.length > 0) {
    parser = new AWS.XML.Parser();
    var data = parser.parse(body.toString(), output);
    util.update(resp.data, data);
  }
}

module.exports = {
  buildRequest: buildRequest,
  extractError: extractError,
  extractData: extractData
};

},{"../core":3,"../util":46,"./rest":24}],27:[function(require,module,exports){
var util = require('../util');

function QueryParamSerializer() {
}

QueryParamSerializer.prototype.serialize = function(params, shape, fn) {
  serializeStructure('', params, shape, fn);
};

function ucfirst(shape) {
  if (shape.isQueryName || shape.api.protocol !== 'ec2') {
    return shape.name;
  } else {
    return shape.name[0].toUpperCase() + shape.name.substr(1);
  }
}

function serializeStructure(prefix, struct, rules, fn) {
  util.each(rules.members, function(name, member) {
    var value = struct[name];
    if (value === null || value === undefined) return;

    var memberName = ucfirst(member);
    memberName = prefix ? prefix + '.' + memberName : memberName;
    serializeMember(memberName, value, member, fn);
  });
}

function serializeMap(name, map, rules, fn) {
  var i = 1;
  util.each(map, function (key, value) {
    var prefix = rules.flattened ? '.' : '.entry.';
    var position = prefix + (i++) + '.';
    var keyName = position + (rules.key.name || 'key');
    var valueName = position + (rules.value.name || 'value');
    serializeMember(name + keyName, key, rules.key, fn);
    serializeMember(name + valueName, value, rules.value, fn);
  });
}

function serializeList(name, list, rules, fn) {
  var memberRules = rules.member || {};

  if (list.length === 0) {
    fn.call(this, name, null);
    return;
  }

  util.arrayEach(list, function (v, n) {
    var suffix = '.' + (n + 1);
    if (rules.api.protocol === 'ec2') {
      suffix = suffix + ''; // make linter happy
    } else if (rules.flattened) {
      if (memberRules.name) {
        var parts = name.split('.');
        parts.pop();
        parts.push(ucfirst(memberRules));
        name = parts.join('.');
      }
    } else {
      suffix = '.member' + suffix;
    }
    serializeMember(name + suffix, v, memberRules, fn);
  });
}

function serializeMember(name, value, rules, fn) {
  if (value === null || value === undefined) return;
  if (rules.type === 'structure') {
    serializeStructure(name, value, rules, fn);
  } else if (rules.type === 'list') {
    serializeList(name, value, rules, fn);
  } else if (rules.type === 'map') {
    serializeMap(name, value, rules, fn);
  } else {
    fn(name, rules.toWireFormat(value).toString());
  }
}

module.exports = QueryParamSerializer;

},{"../util":46}],28:[function(require,module,exports){
module.exports={
  "rules": {
    "*/*": {
      "endpoint": "{service}.{region}.amazonaws.com"
    },
    "cn-*/*": {
      "endpoint": "{service}.{region}.amazonaws.com.cn"
    },
    "*/cloudfront": "globalSSL",
    "*/iam": "globalSSL",
    "*/sts": "globalSSL",
    "*/importexport": {
      "endpoint": "{service}.amazonaws.com",
      "signatureVersion": "v2",
      "globalEndpoint": true
    },
    "*/route53": {
      "endpoint": "https://{service}.amazonaws.com",
      "signatureVersion": "v3https",
      "globalEndpoint": true
    },
    "us-gov-*/iam": "globalGovCloud",
    "us-gov-*/sts": {
      "endpoint": "{service}.{region}.amazonaws.com"
    },
    "us-gov-west-1/s3": "s3dash",
    "us-west-1/s3": "s3dash",
    "us-west-2/s3": "s3dash",
    "eu-west-1/s3": "s3dash",
    "ap-southeast-1/s3": "s3dash",
    "ap-southeast-2/s3": "s3dash",
    "ap-northeast-1/s3": "s3dash",
    "sa-east-1/s3": "s3dash",
    "us-east-1/s3": {
      "endpoint": "{service}.amazonaws.com",
      "signatureVersion": "s3"
    },
    "us-east-1/sdb": {
      "endpoint": "{service}.amazonaws.com",
      "signatureVersion": "v2"
    },
    "*/sdb": {
      "endpoint": "{service}.{region}.amazonaws.com",
      "signatureVersion": "v2"
    }
  },

  "patterns": {
    "globalSSL": {
      "endpoint": "https://{service}.amazonaws.com",
      "globalEndpoint": true
    },
    "globalGovCloud": {
      "endpoint": "{service}.us-gov.amazonaws.com"
    },
    "s3dash": {
      "endpoint": "{service}-{region}.amazonaws.com",
      "signatureVersion": "s3"
    }
  }
}

},{}],29:[function(require,module,exports){
var util = require('./util');
var regionConfig = require('./region_config.json');

function generateRegionPrefix(region) {
  if (!region) return null;

  var parts = region.split('-');
  if (parts.length < 3) return null;
  return parts.slice(0, parts.length - 2).join('-') + '-*';
}

function derivedKeys(service) {
  var region = service.config.region;
  var regionPrefix = generateRegionPrefix(region);
  var endpointPrefix = service.api.endpointPrefix;

  return [
    [region, endpointPrefix],
    [regionPrefix, endpointPrefix],
    [region, '*'],
    [regionPrefix, '*'],
    ['*', endpointPrefix],
    ['*', '*']
  ].map(function(item) {
    return item[0] && item[1] ? item.join('/') : null;
  });
}

function applyConfig(service, config) {
  util.each(config, function(key, value) {
    if (key === 'globalEndpoint') return;
    if (service.config[key] === undefined || service.config[key] === null) {
      service.config[key] = value;
    }
  });
}

function configureEndpoint(service) {
  var keys = derivedKeys(service);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!key) continue;

    if (regionConfig.rules.hasOwnProperty(key)) {
      var config = regionConfig.rules[key];
      if (typeof config === 'string') {
        config = regionConfig.patterns[config];
      }

      service.isGlobalEndpoint = !!config.globalEndpoint;

      if (!config.signatureVersion) config.signatureVersion = 'v4';

      applyConfig(service, config);
      return;
    }
  }
}

module.exports = configureEndpoint;

},{"./region_config.json":28,"./util":46}],30:[function(require,module,exports){
(function (process){
var AWS = require('./core');
var AcceptorStateMachine = require('./state_machine');
var inherit = AWS.util.inherit;
var domain = AWS.util.nodeRequire('domain');


var hardErrorStates = {success: 1, error: 1, complete: 1};

function isTerminalState(machine) {
  return hardErrorStates.hasOwnProperty(machine._asm.currentState);
}

var fsm = new AcceptorStateMachine();
fsm.setupStates = function() {
  var transition = function(_, done) {
    var self = this;

    try {
      self.emit(self._asm.currentState, function() {
        done(self.response.error);
      });
    } catch (err) {
      if (isTerminalState(self)) {
        if (domain && self.domain instanceof domain.Domain) {
          err.domainEmitter = self;
          err.domain = self.domain;
          err.domainThrown = false;
          self.domain.emit('error', err);
        } else {
          throw err;
        }
      } else {
        self.response.error = err;
        done(err);
      }
    }
  };

  this.addState('validate', 'build', 'error', transition);
  this.addState('build', 'afterBuild', 'restart', transition);
  this.addState('afterBuild', 'sign', 'restart', transition);
  this.addState('sign', 'send', 'retry', transition);
  this.addState('retry', 'afterRetry', 'afterRetry', transition);
  this.addState('afterRetry', 'sign', 'error', transition);
  this.addState('send', 'validateResponse', 'retry', transition);
  this.addState('validateResponse', 'extractData', 'extractError', transition);
  this.addState('extractError', 'extractData', 'retry', transition);
  this.addState('extractData', 'success', 'retry', transition);
  this.addState('restart', 'build', 'error', transition);
  this.addState('success', 'complete', 'complete', transition);
  this.addState('error', 'complete', 'complete', transition);
  this.addState('complete', null, null, transition);
};
fsm.setupStates();


AWS.Request = inherit({


  constructor: function Request(service, operation, params) {
    var endpoint = service.endpoint;
    var region = service.config.region;

    if (service.isGlobalEndpoint) region = 'us-east-1';

    this.domain = domain && domain.active;
    this.service = service;
    this.operation = operation;
    this.params = params || {};
    this.httpRequest = new AWS.HttpRequest(endpoint, region);
    this.startTime = AWS.util.date.getDate();

    this.response = new AWS.Response(this);
    this._asm = new AcceptorStateMachine(fsm.states, 'validate');

    AWS.SequentialExecutor.call(this);
    this.emit = this.emitEvent;
  },




  send: function send(callback) {
    if (callback) {
      this.on('complete', function (resp) {
        callback.call(resp, resp.error, resp.data);
      });
    }
    this.runTo();

    return this.response;
  },


  build: function build(callback) {
    return this.runTo('send', callback);
  },


  runTo: function runTo(state, done) {
    this._asm.runTo(state, done, this);
    return this;
  },


  abort: function abort() {
    this.removeAllListeners('validateResponse');
    this.removeAllListeners('extractError');
    this.on('validateResponse', function addAbortedError(resp) {
      resp.error = AWS.util.error(new Error('Request aborted by user'), {
         code: 'RequestAbortedError', retryable: false
      });
    });

    if (this.httpRequest.stream) { // abort HTTP stream
      this.httpRequest.stream.abort();
      if (this.httpRequest._abortCallback) {
         this.httpRequest._abortCallback();
      } else {
        this.removeAllListeners('send'); // haven't sent yet, so let's not
      }
    }

    return this;
  },


  eachPage: function eachPage(callback) {
    callback = AWS.util.fn.makeAsync(callback, 3);

    function wrappedCallback(response) {
      callback.call(response, response.error, response.data, function (result) {
        if (result === false) return;

        if (response.hasNextPage()) {
          response.nextPage().on('complete', wrappedCallback).send();
        } else {
          callback.call(response, null, null, AWS.util.fn.noop);
        }
      });
    }

    this.on('complete', wrappedCallback).send();
  },


  eachItem: function eachItem(callback) {
    var self = this;
    function wrappedCallback(err, data) {
      if (err) return callback(err, null);
      if (data === null) return callback(null, null);

      var config = self.service.paginationConfig(self.operation);
      var resultKey = config.resultKey;
      if (Array.isArray(resultKey)) resultKey = resultKey[0];
      var results = AWS.util.jamespath.query(resultKey, data);
      AWS.util.arrayEach(results, function(result) {
        AWS.util.arrayEach(result, function(item) { callback(null, item); });
      });
    }

    this.eachPage(wrappedCallback);
  },


  isPageable: function isPageable() {
    return this.service.paginationConfig(this.operation) ? true : false;
  },


  createReadStream: function createReadStream() {
    var streams = AWS.util.nodeRequire('stream');
    var req = this;
    var stream = null;
    var legacyStreams = false;

    if (AWS.HttpClient.streamsApiVersion === 2) {
      stream = new streams.Readable();
      stream._read = function() {};
    } else {
      stream = new streams.Stream();
      stream.readable = true;
    }

    stream.sent = false;
    stream.on('newListener', function(event) {
      if (!stream.sent && (event === 'data' || event === 'readable')) {
        if (event === 'data') legacyStreams = true;
        stream.sent = true;
        process.nextTick(function() { req.send(function() { }); });
      }
    });

    this.on('httpHeaders', function streamHeaders(statusCode, headers, resp) {
      if (statusCode < 300) {
        req.removeListener('httpData', AWS.EventListeners.Core.HTTP_DATA);
        req.removeListener('httpError', AWS.EventListeners.Core.HTTP_ERROR);
        req.on('httpError', function streamHttpError(error) {
          resp.error = error;
          resp.error.retryable = false;
        });

        var httpStream = resp.httpResponse.createUnbufferedStream();
        if (legacyStreams) {
          httpStream.on('data', function(arg) {
            stream.emit('data', arg);
          });
          httpStream.on('end', function() {
            stream.emit('end');
          });
        } else {
          httpStream.on('readable', function() {
            var chunk;
            do {
              chunk = httpStream.read();
              if (chunk !== null) stream.push(chunk);
            } while (chunk !== null);
            stream.read(0);
          });
          httpStream.on('end', function() {
            stream.push(null);
          });
        }

        httpStream.on('error', function(err) {
          stream.emit('error', err);
        });
      }
    });

    this.on('error', function(err) {
      stream.emit('error', err);
    });

    return stream;
  },


  emitEvent: function emit(eventName, args, done) {
    if (typeof args === 'function') { done = args; args = null; }
    if (!done) done = function() { };
    if (!args) args = this.eventParameters(eventName, this.response);

    var origEmit = AWS.SequentialExecutor.prototype.emit;
    origEmit.call(this, eventName, args, function (err) {
      if (err) this.response.error = err;
      done.call(this, err);
    });
  },


  eventParameters: function eventParameters(eventName) {
    switch (eventName) {
      case 'restart':
      case 'validate':
      case 'sign':
      case 'build':
      case 'afterValidate':
      case 'afterBuild':
        return [this];
      case 'error':
        return [this.response.error, this.response];
      default:
        return [this.response];
    }
  },


  presign: function presign(expires, callback) {
    if (!callback && typeof expires === 'function') {
      callback = expires;
      expires = null;
    }
    return new AWS.Signers.Presign().sign(this.toGet(), expires, callback);
  },


  toUnauthenticated: function toUnauthenticated() {
    this.removeListener('validate', AWS.EventListeners.Core.VALIDATE_CREDENTIALS);
    this.removeListener('sign', AWS.EventListeners.Core.SIGN);
    return this.toGet();
  },


  toGet: function toGet() {
    if (this.service.api.protocol === 'query' ||
        this.service.api.protocol === 'ec2') {
      this.removeListener('build', this.buildAsGet);
      this.addListener('build', this.buildAsGet);
    }
    return this;
  },


  buildAsGet: function buildAsGet(request) {
    request.httpRequest.method = 'GET';
    request.httpRequest.path = request.service.endpoint.path +
                               '?' + request.httpRequest.body;
    request.httpRequest.body = '';

    delete request.httpRequest.headers['Content-Length'];
    delete request.httpRequest.headers['Content-Type'];
  }
});

AWS.util.mixin(AWS.Request, AWS.SequentialExecutor);

}).call(this,require('_process'))
},{"./core":3,"./state_machine":45,"_process":197}],31:[function(require,module,exports){


var AWS = require('./core');
var inherit = AWS.util.inherit;


AWS.ResourceWaiter = inherit({

  constructor: function constructor(service, state) {
    this.service = service;
    this.state = state;

    if (typeof this.state === 'object') {
      AWS.util.each.call(this, this.state, function (key, value) {
        this.state = key;
        this.expectedValue = value;
      });
    }

    this.loadWaiterConfig(this.state);
    if (!this.expectedValue) {
      this.expectedValue = this.config.successValue;
    }
  },

  service: null,

  state: null,

  expectedValue: null,

  config: null,

  waitDone: false,

  Listeners: {
    retry: new AWS.SequentialExecutor().addNamedListeners(function(add) {
      add('RETRY_CHECK', 'retry', function(resp) {
        var waiter = resp.request._waiter;
        if (resp.error && resp.error.code === 'ResourceNotReady') {
          resp.error.retryDelay = waiter.config.interval * 1000;
        }
      });
    }),

    output: new AWS.SequentialExecutor().addNamedListeners(function(add) {
      add('CHECK_OUT_ERROR', 'extractError', function CHECK_OUT_ERROR(resp) {
        if (resp.error) {
          resp.request._waiter.setError(resp, true);
        }
      });

      add('CHECK_OUTPUT', 'extractData', function CHECK_OUTPUT(resp) {
        var waiter = resp.request._waiter;
        var success = waiter.checkSuccess(resp);
        if (!success) {
          waiter.setError(resp, success === null ? false : true);
        } else {
          resp.error = null;
        }
      });
    }),

    error: new AWS.SequentialExecutor().addNamedListeners(function(add) {
      add('CHECK_ERROR', 'extractError', function CHECK_ERROR(resp) {
        var waiter = resp.request._waiter;
        var success = waiter.checkError(resp);
        if (!success) {
          waiter.setError(resp, success === null ? false : true);
        } else {
          resp.error = null;
          resp.data = {};
          resp.request.removeAllListeners('extractData');
        }
      });

      add('CHECK_ERR_OUTPUT', 'extractData', function CHECK_ERR_OUTPUT(resp) {
        resp.request._waiter.setError(resp, true);
      });
    })
  },


  wait: function wait(params, callback) {
    if (typeof params === 'function') {
      callback = params; params = undefined;
    }

    var request = this.service.makeRequest(this.config.operation, params);
    var listeners = this.Listeners[this.config.successType];
    request._waiter = this;
    request.response.maxRetries = this.config.maxAttempts;
    request.addListeners(this.Listeners.retry);
    if (listeners) request.addListeners(listeners);

    if (callback) request.send(callback);
    return request;
  },

  setError: function setError(resp, retryable) {
    resp.data = null;
    resp.error = AWS.util.error(resp.error || new Error(), {
      code: 'ResourceNotReady',
      message: 'Resource is not in the state ' + this.state,
      retryable: retryable
    });
  },


  checkSuccess: function checkSuccess(resp) {
    if (!this.config.successPath) {
      return resp.httpResponse.statusCode < 300;
    }

    var r = AWS.util.jamespath.find(this.config.successPath, resp.data);

    if (this.config.failureValue &&
        this.config.failureValue.indexOf(r) >= 0) {
      return null; // fast fail
    }

    if (this.expectedValue) {
      return r === this.expectedValue;
    } else {
      return r ? true : false;
    }
  },


  checkError: function checkError(resp) {
    var value = this.config.successValue;
    if (typeof value === 'number') {
      return resp.httpResponse.statusCode === value;
    } else {
      return resp.error && resp.error.code === value;
    }
  },


  loadWaiterConfig: function loadWaiterConfig(state, noException) {
    if (!this.service.api.waiters[state]) {
      if (noException) return;
      throw new AWS.util.error(new Error(), {
        code: 'StateNotFoundError',
        message: 'State ' + state + ' not found.'
      });
    }

    this.config = this.service.api.waiters[state];
    var config = this.config;

    (function () { // anonymous function to avoid max complexity count
      config.successType = config.successType || config.acceptorType;
      config.successPath = config.successPath || config.acceptorPath;
      config.successValue = config.successValue || config.acceptorValue;
      config.failureType = config.failureType || config.acceptorType;
      config.failurePath = config.failurePath || config.acceptorPath;
      config.failureValue = config.failureValue || config.acceptorValue;
    })();
  }
});

},{"./core":3}],32:[function(require,module,exports){
var AWS = require('./core');
var inherit = AWS.util.inherit;


AWS.Response = inherit({


  constructor: function Response(request) {
    this.request = request;
    this.data = null;
    this.error = null;
    this.retryCount = 0;
    this.redirectCount = 0;
    this.httpResponse = new AWS.HttpResponse();
    if (request) {
      this.maxRetries = request.service.numRetries();
      this.maxRedirects = request.service.config.maxRedirects;
    }
  },


  nextPage: function nextPage(callback) {
    var config;
    var service = this.request.service;
    var operation = this.request.operation;
    try {
      config = service.paginationConfig(operation, true);
    } catch (e) { this.error = e; }

    if (!this.hasNextPage()) {
      if (callback) callback(this.error, null);
      else if (this.error) throw this.error;
      return null;
    }

    var params = AWS.util.copy(this.request.params);
    if (!this.nextPageTokens) {
      return callback ? callback(null, null) : null;
    } else {
      var inputTokens = config.inputToken;
      if (typeof inputTokens === 'string') inputTokens = [inputTokens];
      for (var i = 0; i < inputTokens.length; i++) {
        params[inputTokens[i]] = this.nextPageTokens[i];
      }
      return service.makeRequest(this.request.operation, params, callback);
    }
  },


  hasNextPage: function hasNextPage() {
    this.cacheNextPageTokens();
    if (this.nextPageTokens) return true;
    if (this.nextPageTokens === undefined) return undefined;
    else return false;
  },


  cacheNextPageTokens: function cacheNextPageTokens() {
    if (this.hasOwnProperty('nextPageTokens')) return this.nextPageTokens;
    this.nextPageTokens = undefined;

    var config = this.request.service.paginationConfig(this.request.operation);
    if (!config) return this.nextPageTokens;

    this.nextPageTokens = null;
    if (config.moreResults) {
      if (!AWS.util.jamespath.find(config.moreResults, this.data)) {
        return this.nextPageTokens;
      }
    }

    var exprs = config.outputToken;
    if (typeof exprs === 'string') exprs = [exprs];
    AWS.util.arrayEach.call(this, exprs, function (expr) {
      var output = AWS.util.jamespath.find(expr, this.data);
      if (output) {
        this.nextPageTokens = this.nextPageTokens || [];
        this.nextPageTokens.push(output);
      }
    });

    return this.nextPageTokens;
  }

});

},{"./core":3}],33:[function(require,module,exports){
var AWS = require('./core');


AWS.SequentialExecutor = AWS.util.inherit({

  constructor: function SequentialExecutor() {
    this._events = {};
  },


  listeners: function listeners(eventName) {
    return this._events[eventName] ? this._events[eventName].slice(0) : [];
  },

  on: function on(eventName, listener) {
    if (this._events[eventName]) {
      this._events[eventName].push(listener);
    } else {
      this._events[eventName] = [listener];
    }
    return this;
  },


  onAsync: function onAsync(eventName, listener) {
    listener._isAsync = true;
    return this.on(eventName, listener);
  },

  removeListener: function removeListener(eventName, listener) {
    var listeners = this._events[eventName];
    if (listeners) {
      var length = listeners.length;
      var position = -1;
      for (var i = 0; i < length; ++i) {
        if (listeners[i] === listener) {
          position = i;
        }
      }
      if (position > -1) {
        listeners.splice(position, 1);
      }
    }
    return this;
  },

  removeAllListeners: function removeAllListeners(eventName) {
    if (eventName) {
      delete this._events[eventName];
    } else {
      this._events = {};
    }
    return this;
  },


  emit: function emit(eventName, eventArgs, doneCallback) {
    if (!doneCallback) doneCallback = function() { };
    var listeners = this.listeners(eventName);
    var count = listeners.length;
    this.callListeners(listeners, eventArgs, doneCallback);
    return count > 0;
  },


  callListeners: function callListeners(listeners, args, doneCallback) {
    var self = this;
    function callNextListener(err) {
      if (err) {
        doneCallback.call(self, err);
      } else {
        self.callListeners(listeners, args, doneCallback);
      }
    }

    while (listeners.length > 0) {
      var listener = listeners.shift();
      if (listener._isAsync) { // asynchronous listener
        listener.apply(self, args.concat([callNextListener]));
        return; // stop here, callNextListener will continue
      } else { // synchronous listener
        listener.apply(self, args);
      }
    }

    doneCallback.call(self);
  },


  addListeners: function addListeners(listeners) {
    var self = this;

    if (listeners._events) listeners = listeners._events;

    AWS.util.each(listeners, function(event, callbacks) {
      if (typeof callbacks === 'function') callbacks = [callbacks];
      AWS.util.arrayEach(callbacks, function(callback) {
        self.on(event, callback);
      });
    });

    return self;
  },


  addNamedListener: function addNamedListener(name, eventName, callback) {
    this[name] = callback;
    this.addListener(eventName, callback);
    return this;
  },


  addNamedAsyncListener: function addNamedAsyncListener(name, eventName, callback) {
    callback._isAsync = true;
    return this.addNamedListener(name, eventName, callback);
  },


  addNamedListeners: function addNamedListeners(callback) {
    var self = this;
    callback(
      function() {
        self.addNamedListener.apply(self, arguments);
      },
      function() {
        self.addNamedAsyncListener.apply(self, arguments);
      }
    );
    return this;
  }
});


AWS.SequentialExecutor.prototype.addListener = AWS.SequentialExecutor.prototype.on;

module.exports = AWS.SequentialExecutor;

},{"./core":3}],34:[function(require,module,exports){
var AWS = require('./core');
var Api = require('./model/api');
var regionConfig = require('./region_config');
var inherit = AWS.util.inherit;


AWS.Service = inherit({

  constructor: function Service(config) {
    if (!this.loadServiceClass) {
      throw AWS.util.error(new Error(),
        'Service must be constructed with `new\' operator');
    }
    var ServiceClass = this.loadServiceClass(config || {});
    if (ServiceClass) return new ServiceClass(config);
    this.initialize(config);
  },


  initialize: function initialize(config) {
    var svcConfig = AWS.config[this.serviceIdentifier];

    this.config = new AWS.Config(AWS.config);
    if (svcConfig) this.config.update(svcConfig, true);
    if (config) this.config.update(config, true);

    this.validateService();
    if (!this.config.endpoint) regionConfig(this);

    this.config.endpoint = this.endpointFromTemplate(this.config.endpoint);
    this.setEndpoint(this.config.endpoint);
  },


  validateService: function validateService() {
  },


  loadServiceClass: function loadServiceClass(serviceConfig) {
    var config = serviceConfig;
    if (!AWS.util.isEmpty(this.api)) {
      return null;
    } else if (config.apiConfig) {
      return AWS.Service.defineServiceApi(this.constructor, config.apiConfig);
    } else if (!this.constructor.services) {
      return null;
    } else {
      config = new AWS.Config(AWS.config);
      config.update(serviceConfig, true);
      var version = config.apiVersions[this.constructor.serviceIdentifier];
      version = version || config.apiVersion;
      return this.getLatestServiceClass(version);
    }
  },


  getLatestServiceClass: function getLatestServiceClass(version) {
    version = this.getLatestServiceVersion(version);
    if (this.constructor.services[version] === null) {
      AWS.Service.defineServiceApi(this.constructor, version);
    }

    return this.constructor.services[version];
  },


  getLatestServiceVersion: function getLatestServiceVersion(version) {
    if (!this.constructor.services || this.constructor.services.length === 0) {
      throw new Error('No services defined on ' +
                      this.constructor.serviceIdentifier);
    }

    if (!version) {
      version = 'latest';
    } else if (AWS.util.isType(version, Date)) {
      version = AWS.util.date.iso8601(version).split('T')[0];
    }

    if (Object.hasOwnProperty(this.constructor.services, version)) {
      return version;
    }

    var keys = Object.keys(this.constructor.services).sort();
    var selectedVersion = null;
    for (var i = keys.length - 1; i >= 0; i--) {
      if (keys[i][keys[i].length - 1] !== '*') {
        selectedVersion = keys[i];
      }
      if (keys[i].substr(0, 10) <= version) {
        return selectedVersion;
      }
    }

    throw new Error('Could not find ' + this.constructor.serviceIdentifier +
                    ' API to satisfy version constraint `' + version + '\'');
  },


  api: {},


  defaultRetryCount: 3,


  makeRequest: function makeRequest(operation, params, callback) {
    if (typeof params === 'function') {
      callback = params;
      params = null;
    }

    params = params || {};
    if (this.config.params) { // copy only toplevel bound params
      var rules = this.api.operations[operation];
      if (rules) {
        params = AWS.util.copy(params);
        AWS.util.each(this.config.params, function(key, value) {
          if (rules.input.members[key]) {
            if (params[key] === undefined || params[key] === null) {
              params[key] = value;
            }
          }
        });
      }
    }

    var request = new AWS.Request(this, operation, params);
    this.addAllRequestListeners(request);

    if (callback) request.send(callback);
    return request;
  },


  makeUnauthenticatedRequest: function makeUnauthenticatedRequest(operation, params, callback) {
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }

    var request = this.makeRequest(operation, params).toUnauthenticated();
    return callback ? request.send(callback) : request;
  },


  waitFor: function waitFor(state, params, callback) {
    var waiter = new AWS.ResourceWaiter(this, state);
    return waiter.wait(params, callback);
  },


  addAllRequestListeners: function addAllRequestListeners(request) {
    var list = [AWS.events, AWS.EventListeners.Core, this.serviceInterface(),
                AWS.EventListeners.CorePost];
    for (var i = 0; i < list.length; i++) {
      if (list[i]) request.addListeners(list[i]);
    }

    if (!this.config.paramValidation) {
      request.removeListener('validate',
        AWS.EventListeners.Core.VALIDATE_PARAMETERS);
    }

    if (this.config.logger) { // add logging events
      request.addListeners(AWS.EventListeners.Logger);
    }

    this.setupRequestListeners(request);
  },


  setupRequestListeners: function setupRequestListeners() {
  },


  getSignerClass: function getSignerClass() {
    var version;
    if (this.config.signatureVersion) {
      version = this.config.signatureVersion;
    } else {
      version = this.api.signatureVersion;
    }
    return AWS.Signers.RequestSigner.getVersion(version);
  },


  serviceInterface: function serviceInterface() {
    switch (this.api.protocol) {
      case 'ec2': return AWS.EventListeners.Query;
      case 'query': return AWS.EventListeners.Query;
      case 'json': return AWS.EventListeners.Json;
      case 'rest-json': return AWS.EventListeners.RestJson;
      case 'rest-xml': return AWS.EventListeners.RestXml;
    }
    if (this.api.protocol) {
      throw new Error('Invalid service `protocol\' ' +
        this.api.protocol + ' in API config');
    }
  },


  successfulResponse: function successfulResponse(resp) {
    return resp.httpResponse.statusCode < 300;
  },


  numRetries: function numRetries() {
    if (this.config.maxRetries !== undefined) {
      return this.config.maxRetries;
    } else {
      return this.defaultRetryCount;
    }
  },


  retryDelays: function retryDelays() {
    var retryCount = this.numRetries();
    var delays = [];
    for (var i = 0; i < retryCount; ++i) {
      delays[i] = Math.pow(2, i) * 30;
    }
    return delays;
  },


  retryableError: function retryableError(error) {
    if (this.networkingError(error)) return true;
    if (this.expiredCredentialsError(error)) return true;
    if (this.throttledError(error)) return true;
    if (error.statusCode >= 500) return true;
    return false;
  },


  networkingError: function networkingError(error) {
    return error.code === 'NetworkingError';
  },


  expiredCredentialsError: function expiredCredentialsError(error) {
    return (error.code === 'ExpiredTokenException');
  },


  throttledError: function throttledError(error) {
    switch (error.code) {
      case 'ProvisionedThroughputExceededException':
      case 'Throttling':
      case 'ThrottlingException':
      case 'RequestLimitExceeded':
      case 'RequestThrottled':
        return true;
      default:
        return false;
    }
  },


  endpointFromTemplate: function endpointFromTemplate(endpoint) {
    if (typeof endpoint !== 'string') return endpoint;

    var e = endpoint;
    e = e.replace(/\{service\}/g, this.api.endpointPrefix);
    e = e.replace(/\{region\}/g, this.config.region);
    e = e.replace(/\{scheme\}/g, this.config.sslEnabled ? 'https' : 'http');
    return e;
  },


  setEndpoint: function setEndpoint(endpoint) {
    this.endpoint = new AWS.Endpoint(endpoint, this.config);
  },


  paginationConfig: function paginationConfig(operation, throwException) {
    var paginator = this.api.operations[operation].paginator;
    if (!paginator) {
      if (throwException) {
        var e = new Error();
        throw AWS.util.error(e, 'No pagination configuration for ' + operation);
      }
      return null;
    }

    return paginator;
  }
});

AWS.util.update(AWS.Service, {


  defineMethods: function defineMethods(svc) {
    AWS.util.each(svc.prototype.api.operations, function iterator(method) {
      if (svc.prototype[method]) return;
      svc.prototype[method] = function (params, callback) {
        return this.makeRequest(method, params, callback);
      };
    });
  },


  defineService: function defineService(serviceIdentifier, versions, features) {
    AWS.Service._serviceMap[serviceIdentifier] = true;
    if (!Array.isArray(versions)) {
      features = versions;
      versions = [];
    }

    var svc = inherit(AWS.Service, features || {});

    if (typeof serviceIdentifier === 'string') {
      AWS.Service.addVersions(svc, versions);

      var identifier = svc.serviceIdentifier || serviceIdentifier;
      svc.serviceIdentifier = identifier;
    } else { // defineService called with an API
      svc.prototype.api = serviceIdentifier;
      AWS.Service.defineMethods(svc);
    }

    return svc;
  },


  addVersions: function addVersions(svc, versions) {
    if (!Array.isArray(versions)) versions = [versions];

    svc.services = svc.services || {};
    for (var i = 0; i < versions.length; i++) {
      if (svc.services[versions[i]] === undefined) {
        svc.services[versions[i]] = null;
      }
    }

    svc.apiVersions = Object.keys(svc.services).sort();
  },


  defineServiceApi: function defineServiceApi(superclass, version, apiConfig) {
    var svc = inherit(superclass, {
      serviceIdentifier: superclass.serviceIdentifier
    });

    function setApi(api) {
      if (api.isApi) {
        svc.prototype.api = api;
      } else {
        svc.prototype.api = new Api(api);
      }
    }

    if (typeof version === 'string') {
      if (apiConfig) {
        setApi(apiConfig);
      } else {
        try {
          setApi(AWS.apiLoader(superclass.serviceIdentifier, version));
        } catch (err) {
          throw AWS.util.error(err, {
            message: 'Could not find API configuration ' +
              superclass.serviceIdentifier + '-' + version
          });
        }
      }
      if (!superclass.services.hasOwnProperty(version)) {
        superclass.apiVersions = superclass.apiVersions.concat(version).sort();
      }
      superclass.services[version] = svc;
    } else {
      setApi(version);
    }

    AWS.Service.defineMethods(svc);
    return svc;
  },


  hasService: function(identifier) {
    return AWS.Service._serviceMap.hasOwnProperty(identifier);
  },


  _serviceMap: {}
});

},{"./core":3,"./model/api":15,"./region_config":29}],35:[function(require,module,exports){
var AWS = require('../core');

AWS.util.update(AWS.CognitoIdentity.prototype, {
  getOpenIdToken: function getOpenIdToken(params, callback) {
    return this.makeUnauthenticatedRequest('getOpenIdToken', params, callback);
  },

  getId: function getId(params, callback) {
    return this.makeUnauthenticatedRequest('getId', params, callback);
  },

  getCredentialsForIdentity: function getCredentialsForIdentity(params, callback) {
    return this.makeUnauthenticatedRequest('getCredentialsForIdentity', params, callback);
  }
});

},{"../core":3}],36:[function(require,module,exports){
var AWS = require('../core');

AWS.util.update(AWS.EC2.prototype, {

  setupRequestListeners: function setupRequestListeners(request) {
    request.removeListener('extractError', AWS.EventListeners.Query.EXTRACT_ERROR);
    request.addListener('extractError', this.extractError);

    if (request.operation === 'copySnapshot') {
      request.onAsync('validate', this.buildCopySnapshotPresignedUrl);
    }
  },


  buildCopySnapshotPresignedUrl: function buildCopySnapshotPresignedUrl(req, done) {
    if (req.params.PresignedUrl || req._subRequest) {
      return done();
    }

    req.params = AWS.util.copy(req.params);
    req.params.DestinationRegion = req.service.config.region;

    var config = AWS.util.copy(req.service.config);
    delete config.endpoint;
    config.region = req.params.SourceRegion;
    var svc = new req.service.constructor(config);
    var newReq = svc[req.operation](req.params);
    newReq._subRequest = true;
    newReq.presign(function(err, url) {
      if (err) done(err);
      else {
        req.params.PresignedUrl = url;
        done();
      }
    });
  },


  extractError: function extractError(resp) {
    var httpResponse = resp.httpResponse;
    var data = new AWS.XML.Parser().parse(httpResponse.body.toString() || '');
    if (data.Errors)
      resp.error = AWS.util.error(new Error(), {
        code: data.Errors.Error.Code,
        message: data.Errors.Error.Message
      });
    else
      resp.error = AWS.util.error(new Error(), {
        code: httpResponse.statusCode,
        message: null
      });
  }
});

},{"../core":3}],37:[function(require,module,exports){
var AWS = require('../core');

AWS.util.update(AWS.STS.prototype, {

  credentialsFrom: function credentialsFrom(data, credentials) {
    if (!data) return null;
    if (!credentials) credentials = new AWS.TemporaryCredentials();
    credentials.expired = false;
    credentials.accessKeyId = data.Credentials.AccessKeyId;
    credentials.secretAccessKey = data.Credentials.SecretAccessKey;
    credentials.sessionToken = data.Credentials.SessionToken;
    credentials.expireTime = data.Credentials.Expiration;
    return credentials;
  },

  assumeRoleWithWebIdentity: function assumeRoleWithWebIdentity(params, callback) {
    return this.makeUnauthenticatedRequest('assumeRoleWithWebIdentity', params, callback);
  },

  assumeRoleWithSAML: function assumeRoleWithSAML(params, callback) {
    return this.makeUnauthenticatedRequest('assumeRoleWithSAML', params, callback);
  }
});

},{"../core":3}],38:[function(require,module,exports){
var AWS = require('../core');
var inherit = AWS.util.inherit;


var expiresHeader = 'presigned-expires';


function signedUrlBuilder(request) {
  var expires = request.httpRequest.headers[expiresHeader];

  delete request.httpRequest.headers['User-Agent'];
  delete request.httpRequest.headers['X-Amz-User-Agent'];

  if (request.service.getSignerClass() === AWS.Signers.V4) {
    if (expires > 604800) { // one week expiry is invalid
      var message = 'Presigning does not support expiry time greater ' +
                    'than a week with SigV4 signing.';
      throw AWS.util.error(new Error(), {
        code: 'InvalidExpiryTime', message: message, retryable: false
      });
    }
    request.httpRequest.headers[expiresHeader] = expires;
  } else if (request.service.getSignerClass() === AWS.Signers.S3) {
    request.httpRequest.headers[expiresHeader] = parseInt(
      AWS.util.date.unixTimestamp() + expires, 10).toString();
  } else {
    throw AWS.util.error(new Error(), {
      message: 'Presigning only supports S3 or SigV4 signing.',
      code: 'UnsupportedSigner', retryable: false
    });
  }
}


function signedUrlSigner(request) {
  var endpoint = request.httpRequest.endpoint;
  var parsedUrl = AWS.util.urlParse(request.httpRequest.path);
  var queryParams = {};

  if (parsedUrl.search) {
    queryParams = AWS.util.queryStringParse(parsedUrl.search.substr(1));
  }

  AWS.util.each(request.httpRequest.headers, function (key, value) {
    if (key === expiresHeader) key = 'Expires';
    queryParams[key] = value;
  });
  delete request.httpRequest.headers[expiresHeader];

  var auth = queryParams['Authorization'].split(' ');
  if (auth[0] === 'AWS') {
    auth = auth[1].split(':');
    queryParams['AWSAccessKeyId'] = auth[0];
    queryParams['Signature'] = auth[1];
  } else if (auth[0] === 'AWS4-HMAC-SHA256') { // SigV4 signing
    auth.shift();
    var rest = auth.join(' ');
    var signature = rest.match(/Signature=(.*?)(?:,|\s|\r?\n|$)/)[1];
    queryParams['X-Amz-Signature'] = signature;
    delete queryParams['Expires'];
  }
  delete queryParams['Authorization'];
  delete queryParams['Host'];

  endpoint.pathname = parsedUrl.pathname;
  endpoint.search = AWS.util.queryParamsToString(queryParams);
}


AWS.Signers.Presign = inherit({

  sign: function sign(request, expireTime, callback) {
    request.httpRequest.headers[expiresHeader] = expireTime || 3600;
    request.on('build', signedUrlBuilder);
    request.on('sign', signedUrlSigner);
    request.removeListener('afterBuild',
      AWS.EventListeners.Core.SET_CONTENT_LENGTH);
    request.removeListener('afterBuild',
      AWS.EventListeners.Core.COMPUTE_SHA256);

    request.emit('beforePresign', [request]);

    if (callback) {
      request.build(function() {
        if (this.response.error) callback(this.response.error);
        else {
          callback(null, AWS.util.urlFormat(request.httpRequest.endpoint));
        }
      });
    } else {
      request.build();
      if (request.response.error) throw request.response.error;
      return AWS.util.urlFormat(request.httpRequest.endpoint);
    }
  }
});

module.exports = AWS.Signers.Presign;

},{"../core":3}],39:[function(require,module,exports){
var AWS = require('../core');
var inherit = AWS.util.inherit;


AWS.Signers.RequestSigner = inherit({
  constructor: function RequestSigner(request) {
    this.request = request;
  }
});

AWS.Signers.RequestSigner.getVersion = function getVersion(version) {
  switch (version) {
    case 'v2': return AWS.Signers.V2;
    case 'v3': return AWS.Signers.V3;
    case 'v4': return AWS.Signers.V4;
    case 's3': return AWS.Signers.S3;
    case 'v3https': return AWS.Signers.V3Https;
  }
  throw new Error('Unknown signing version ' + version);
};

require('./v2');
require('./v3');
require('./v3https');
require('./v4');
require('./s3');
require('./presign');

},{"../core":3,"./presign":38,"./s3":40,"./v2":41,"./v3":42,"./v3https":43,"./v4":44}],40:[function(require,module,exports){
var AWS = require('../core');
var inherit = AWS.util.inherit;


AWS.Signers.S3 = inherit(AWS.Signers.RequestSigner, {

  subResources: {
    'acl': 1,
    'cors': 1,
    'lifecycle': 1,
    'delete': 1,
    'location': 1,
    'logging': 1,
    'notification': 1,
    'partNumber': 1,
    'policy': 1,
    'requestPayment': 1,
    'restore': 1,
    'tagging': 1,
    'torrent': 1,
    'uploadId': 1,
    'uploads': 1,
    'versionId': 1,
    'versioning': 1,
    'versions': 1,
    'website': 1
  },

  responseHeaders: {
    'response-content-type': 1,
    'response-content-language': 1,
    'response-expires': 1,
    'response-cache-control': 1,
    'response-content-disposition': 1,
    'response-content-encoding': 1
  },

  addAuthorization: function addAuthorization(credentials, date) {
    if (!this.request.headers['presigned-expires']) {
      this.request.headers['X-Amz-Date'] = AWS.util.date.rfc822(date);
    }

    if (credentials.sessionToken) {
      this.request.headers['x-amz-security-token'] = credentials.sessionToken;
    }

    var signature = this.sign(credentials.secretAccessKey, this.stringToSign());
    var auth = 'AWS ' + credentials.accessKeyId + ':' + signature;

    this.request.headers['Authorization'] = auth;
  },

  stringToSign: function stringToSign() {
    var r = this.request;

    var parts = [];
    parts.push(r.method);
    parts.push(r.headers['Content-MD5'] || '');
    parts.push(r.headers['Content-Type'] || '');

    parts.push(r.headers['presigned-expires'] || '');

    var headers = this.canonicalizedAmzHeaders();
    if (headers) parts.push(headers);
    parts.push(this.canonicalizedResource());

    return parts.join('\n');

  },

  canonicalizedAmzHeaders: function canonicalizedAmzHeaders() {

    var amzHeaders = [];

    AWS.util.each(this.request.headers, function (name) {
      if (name.match(/^x-amz-/i))
        amzHeaders.push(name);
    });

    amzHeaders.sort(function (a, b) {
      return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
    });

    var parts = [];
    AWS.util.arrayEach.call(this, amzHeaders, function (name) {
      parts.push(name.toLowerCase() + ':' + String(this.request.headers[name]));
    });

    return parts.join('\n');

  },

  canonicalizedResource: function canonicalizedResource() {

    var r = this.request;

    var parts = r.path.split('?');
    var path = parts[0];
    var querystring = parts[1];

    var resource = '';

    if (r.virtualHostedBucket)
      resource += '/' + r.virtualHostedBucket;

    resource += path;

    if (querystring) {

      var resources = [];

      AWS.util.arrayEach.call(this, querystring.split('&'), function (param) {
        var name = param.split('=')[0];
        var value = param.split('=')[1];
        if (this.subResources[name] || this.responseHeaders[name]) {
          var subresource = { name: name };
          if (value !== undefined) {
            if (this.subResources[name]) {
              subresource.value = value;
            } else {
              subresource.value = decodeURIComponent(value);
            }
          }
          resources.push(subresource);
        }
      });

      resources.sort(function (a, b) { return a.name < b.name ? -1 : 1; });

      if (resources.length) {

        querystring = [];
        AWS.util.arrayEach(resources, function (res) {
          if (res.value === undefined)
            querystring.push(res.name);
          else
            querystring.push(res.name + '=' + res.value);
        });

        resource += '?' + querystring.join('&');
      }

    }

    return resource;

  },

  sign: function sign(secret, string) {
    return AWS.util.crypto.hmac(secret, string, 'base64', 'sha1');
  }
});

module.exports = AWS.Signers.S3;

},{"../core":3}],41:[function(require,module,exports){
var AWS = require('../core');
var inherit = AWS.util.inherit;


AWS.Signers.V2 = inherit(AWS.Signers.RequestSigner, {
  addAuthorization: function addAuthorization(credentials, date) {

    if (!date) date = AWS.util.date.getDate();

    var r = this.request;

    r.params.Timestamp = AWS.util.date.iso8601(date);
    r.params.SignatureVersion = '2';
    r.params.SignatureMethod = 'HmacSHA256';
    r.params.AWSAccessKeyId = credentials.accessKeyId;

    if (credentials.sessionToken) {
      r.params.SecurityToken = credentials.sessionToken;
    }

    delete r.params.Signature; // delete old Signature for re-signing
    r.params.Signature = this.signature(credentials);

    r.body = AWS.util.queryParamsToString(r.params);
    r.headers['Content-Length'] = r.body.length;
  },

  signature: function signature(credentials) {
    return AWS.util.crypto.hmac(credentials.secretAccessKey, this.stringToSign(), 'base64');
  },

  stringToSign: function stringToSign() {
    var parts = [];
    parts.push(this.request.method);
    parts.push(this.request.endpoint.host.toLowerCase());
    parts.push(this.request.pathname());
    parts.push(AWS.util.queryParamsToString(this.request.params));
    return parts.join('\n');
  }

});

module.exports = AWS.Signers.V2;

},{"../core":3}],42:[function(require,module,exports){
var AWS = require('../core');
var inherit = AWS.util.inherit;


AWS.Signers.V3 = inherit(AWS.Signers.RequestSigner, {
  addAuthorization: function addAuthorization(credentials, date) {

    var datetime = AWS.util.date.rfc822(date);

    this.request.headers['X-Amz-Date'] = datetime;

    if (credentials.sessionToken) {
      this.request.headers['x-amz-security-token'] = credentials.sessionToken;
    }

    this.request.headers['X-Amzn-Authorization'] =
      this.authorization(credentials, datetime);

  },

  authorization: function authorization(credentials) {
    return 'AWS3 ' +
      'AWSAccessKeyId=' + credentials.accessKeyId + ',' +
      'Algorithm=HmacSHA256,' +
      'SignedHeaders=' + this.signedHeaders() + ',' +
      'Signature=' + this.signature(credentials);
  },

  signedHeaders: function signedHeaders() {
    var headers = [];
    AWS.util.arrayEach(this.headersToSign(), function iterator(h) {
      headers.push(h.toLowerCase());
    });
    return headers.sort().join(';');
  },

  canonicalHeaders: function canonicalHeaders() {
    var headers = this.request.headers;
    var parts = [];
    AWS.util.arrayEach(this.headersToSign(), function iterator(h) {
      parts.push(h.toLowerCase().trim() + ':' + String(headers[h]).trim());
    });
    return parts.sort().join('\n') + '\n';
  },

  headersToSign: function headersToSign() {
    var headers = [];
    AWS.util.each(this.request.headers, function iterator(k) {
      if (k === 'Host' || k === 'Content-Encoding' || k.match(/^X-Amz/i)) {
        headers.push(k);
      }
    });
    return headers;
  },

  signature: function signature(credentials) {
    return AWS.util.crypto.hmac(credentials.secretAccessKey, this.stringToSign(), 'base64');
  },

  stringToSign: function stringToSign() {
    var parts = [];
    parts.push(this.request.method);
    parts.push('/');
    parts.push('');
    parts.push(this.canonicalHeaders());
    parts.push(this.request.body);
    return AWS.util.crypto.sha256(parts.join('\n'));
  }

});

module.exports = AWS.Signers.V3;

},{"../core":3}],43:[function(require,module,exports){
var AWS = require('../core');
var inherit = AWS.util.inherit;

require('./v3');


AWS.Signers.V3Https = inherit(AWS.Signers.V3, {
  authorization: function authorization(credentials) {
    return 'AWS3-HTTPS ' +
      'AWSAccessKeyId=' + credentials.accessKeyId + ',' +
      'Algorithm=HmacSHA256,' +
      'Signature=' + this.signature(credentials);
  },

  stringToSign: function stringToSign() {
    return this.request.headers['X-Amz-Date'];
  }
});

module.exports = AWS.Signers.V3Https;

},{"../core":3,"./v3":42}],44:[function(require,module,exports){
var AWS = require('../core');
var inherit = AWS.util.inherit;


var cachedSecret = {};


var expiresHeader = 'presigned-expires';


AWS.Signers.V4 = inherit(AWS.Signers.RequestSigner, {
  constructor: function V4(request, serviceName) {
    AWS.Signers.RequestSigner.call(this, request);
    this.serviceName = serviceName;
  },

  algorithm: 'AWS4-HMAC-SHA256',

  addAuthorization: function addAuthorization(credentials, date) {
    var datetime = AWS.util.date.iso8601(date).replace(/[:\-]|\.\d{3}/g, '');

    if (this.isPresigned()) {
      this.updateForPresigned(credentials, datetime);
    } else {
      this.addHeaders(credentials, datetime);
    }

    this.request.headers['Authorization'] =
      this.authorization(credentials, datetime);
  },

  addHeaders: function addHeaders(credentials, datetime) {
    this.request.headers['X-Amz-Date'] = datetime;
    if (credentials.sessionToken) {
      this.request.headers['x-amz-security-token'] = credentials.sessionToken;
    }
  },

  updateForPresigned: function updateForPresigned(credentials, datetime) {
    var credString = this.credentialString(datetime);
    var qs = {
      'X-Amz-Date': datetime,
      'X-Amz-Algorithm': this.algorithm,
      'X-Amz-Credential': credentials.accessKeyId + '/' + credString,
      'X-Amz-Expires': this.request.headers[expiresHeader],
      'X-Amz-SignedHeaders': this.signedHeaders()
    };

    if (credentials.sessionToken) {
      qs['X-Amz-Security-Token'] = credentials.sessionToken;
    }

    if (this.request.headers['Content-Type']) {
      qs['Content-Type'] = this.request.headers['Content-Type'];
    }

    AWS.util.each.call(this, this.request.headers, function(key, value) {
      if (key === expiresHeader) return;
      if (this.isSignableHeader(key) &&
          key.toLowerCase().indexOf('x-amz-') === 0) {
        qs[key] = value;
      }
    });

    var sep = this.request.path.indexOf('?') >= 0 ? '&' : '?';
    this.request.path += sep + AWS.util.queryParamsToString(qs);
  },

  authorization: function authorization(credentials, datetime) {
    var parts = [];
    var credString = this.credentialString(datetime);
    parts.push(this.algorithm + ' Credential=' +
      credentials.accessKeyId + '/' + credString);
    parts.push('SignedHeaders=' + this.signedHeaders());
    parts.push('Signature=' + this.signature(credentials, datetime));
    return parts.join(', ');
  },

  signature: function signature(credentials, datetime) {
    var cache = cachedSecret[this.serviceName];
    var date = datetime.substr(0, 8);
    if (!cache ||
        cache.akid !== credentials.accessKeyId ||
        cache.region !== this.request.region ||
        cache.date !== date) {
      var kSecret = credentials.secretAccessKey;
      var kDate = AWS.util.crypto.hmac('AWS4' + kSecret, date, 'buffer');
      var kRegion = AWS.util.crypto.hmac(kDate, this.request.region, 'buffer');
      var kService = AWS.util.crypto.hmac(kRegion, this.serviceName, 'buffer');
      var kCredentials = AWS.util.crypto.hmac(kService, 'aws4_request', 'buffer');
      cachedSecret[this.serviceName] = {
        region: this.request.region, date: date,
        key: kCredentials, akid: credentials.accessKeyId
      };
    }

    var key = cachedSecret[this.serviceName].key;
    return AWS.util.crypto.hmac(key, this.stringToSign(datetime), 'hex');
  },

  stringToSign: function stringToSign(datetime) {
    var parts = [];
    parts.push('AWS4-HMAC-SHA256');
    parts.push(datetime);
    parts.push(this.credentialString(datetime));
    parts.push(this.hexEncodedHash(this.canonicalString()));
    return parts.join('\n');
  },

  canonicalString: function canonicalString() {
    var parts = [], pathname = this.request.pathname();
    if (this.serviceName !== 's3') pathname = AWS.util.uriEscapePath(pathname);

    parts.push(this.request.method);
    parts.push(pathname);
    parts.push(this.request.search());
    parts.push(this.canonicalHeaders() + '\n');
    parts.push(this.signedHeaders());
    parts.push(this.hexEncodedBodyHash());
    return parts.join('\n');
  },

  canonicalHeaders: function canonicalHeaders() {
    var headers = [];
    AWS.util.each.call(this, this.request.headers, function (key, item) {
      headers.push([key, item]);
    });
    headers.sort(function (a, b) {
      return a[0].toLowerCase() < b[0].toLowerCase() ? -1 : 1;
    });
    var parts = [];
    AWS.util.arrayEach.call(this, headers, function (item) {
      var key = item[0].toLowerCase();
      if (this.isSignableHeader(key)) {
        parts.push(key + ':' +
          this.canonicalHeaderValues(item[1].toString()));
      }
    });
    return parts.join('\n');
  },

  canonicalHeaderValues: function canonicalHeaderValues(values) {
    return values.replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '');
  },

  signedHeaders: function signedHeaders() {
    var keys = [];
    AWS.util.each.call(this, this.request.headers, function (key) {
      key = key.toLowerCase();
      if (this.isSignableHeader(key)) keys.push(key);
    });
    return keys.sort().join(';');
  },

  credentialString: function credentialString(datetime) {
    var parts = [];
    parts.push(datetime.substr(0, 8));
    parts.push(this.request.region);
    parts.push(this.serviceName);
    parts.push('aws4_request');
    return parts.join('/');
  },

  hexEncodedHash: function hash(string) {
    return AWS.util.crypto.sha256(string, 'hex');
  },

  hexEncodedBodyHash: function hexEncodedBodyHash() {
    if (this.isPresigned() && this.serviceName === 's3') {
      return 'UNSIGNED-PAYLOAD';
    } else if (this.request.headers['X-Amz-Content-Sha256']) {
      return this.request.headers['X-Amz-Content-Sha256'];
    } else {
      return this.hexEncodedHash(this.request.body || '');
    }
  },

  unsignableHeaders: ['authorization', 'content-type', 'content-length',
                      'user-agent', expiresHeader],

  isSignableHeader: function isSignableHeader(key) {
    if (key.toLowerCase().indexOf('x-amz-') === 0) return true;
    return this.unsignableHeaders.indexOf(key) < 0;
  },

  isPresigned: function isPresigned() {
    return this.request.headers[expiresHeader] ? true : false;
  }

});

module.exports = AWS.Signers.V4;

},{"../core":3}],45:[function(require,module,exports){
function AcceptorStateMachine(states, state) {
  this.currentState = state || null;
  this.states = states || {};
}

AcceptorStateMachine.prototype.runTo = function runTo(finalState, done, bindObject, inputError) {
  if (typeof finalState === 'function') {
    inputError = bindObject; bindObject = done;
    done = finalState; finalState = null;
  }

  var self = this;
  var state = self.states[self.currentState];
  state.fn.call(bindObject || self, inputError, function(err) {
    if (err) {
      if (state.fail) self.currentState = state.fail;
      else return done ? done.call(bindObject, err) : null;
    } else {
      if (state.accept) self.currentState = state.accept;
      else return done ? done.call(bindObject) : null;
    }
    if (self.currentState === finalState) {
      return done ? done.call(bindObject, err) : null;
    }

    self.runTo(finalState, done, bindObject, err);
  });
};

AcceptorStateMachine.prototype.addState = function addState(name, acceptState, failState, fn) {
  if (typeof acceptState === 'function') {
    fn = acceptState; acceptState = null; failState = null;
  } else if (typeof failState === 'function') {
    fn = failState; failState = null;
  }

  if (!this.currentState) this.currentState = name;
  this.states[name] = { accept: acceptState, fail: failState, fn: fn };
  return this;
};

module.exports = AcceptorStateMachine;

},{}],46:[function(require,module,exports){
(function (process){


var cryptoLib = require('crypto');
var Buffer = require('buffer').Buffer;
var AWS;


var util = {
  engine: function engine() {
    if (util.isBrowser() && typeof navigator !== 'undefined') {
      return navigator.userAgent;
    } else {
      return process.platform + '/' + process.version;
    }
  },

  userAgent: function userAgent() {
    var name = util.isBrowser() ? 'js' : 'nodejs';
    var agent = 'aws-sdk-' + name + '/' + require('./core').VERSION;
    if (name === 'nodejs') agent += ' ' + util.engine();
    return agent;
  },

  isBrowser: function isBrowser() { return process && process.browser; },
  isNode: function isNode() { return !util.isBrowser(); },
  nodeRequire: function nodeRequire(module) {
    if (util.isNode()) return require(module);
  },
  multiRequire: function multiRequire(module1, module2) {
    return require(util.isNode() ? module1 : module2);
  },

  uriEscape: function uriEscape(string) {
    var output = encodeURIComponent(string);
    output = output.replace(/[^A-Za-z0-9_.~\-%]+/g, escape);

    output = output.replace(/[*]/g, function(ch) {
      return '%' + ch.charCodeAt(0).toString(16).toUpperCase();
    });

    return output;
  },

  uriEscapePath: function uriEscapePath(string) {
    var parts = [];
    util.arrayEach(string.split('/'), function (part) {
      parts.push(util.uriEscape(part));
    });
    return parts.join('/');
  },

  urlParse: function urlParse(url) {
    return require('url').parse(url);
  },

  urlFormat: function urlFormat(url) {
    return require('url').format(url);
  },

  queryStringParse: function queryStringParse(qs) {
    return require('querystring').parse(qs);
  },

  queryParamsToString: function queryParamsToString(params) {
    var items = [];
    var escape = util.uriEscape;
    var sortedKeys = Object.keys(params).sort();

    util.arrayEach(sortedKeys, function(name) {
      var value = params[name];
      var ename = escape(name);
      var result = ename + '=';
      if (Array.isArray(value)) {
        var vals = [];
        util.arrayEach(value, function(item) { vals.push(escape(item)); });
        result = ename + '=' + vals.sort().join('&' + ename + '=');
      } else if (value !== undefined && value !== null) {
        result = ename + '=' + escape(value);
      }
      items.push(result);
    });

    return items.join('&');
  },

  readFileSync: function readFileSync(path) {
    if (typeof window !== 'undefined') return null;
    return util.nodeRequire('fs').readFileSync(path, 'utf-8');
  },

  base64: {

    encode: function encode64(string) {
      return new Buffer(string).toString('base64');
    },

    decode: function decode64(string) {
      return new Buffer(string, 'base64');
    }

  },

  Buffer: Buffer,

  buffer: {
    toStream: function toStream(buffer) {
      if (!util.Buffer.isBuffer(buffer)) buffer = new util.Buffer(buffer);

      var readable = new (util.nodeRequire('stream').Readable)();
      var pos = 0;
      readable._read = function(size) {
        if (pos >= buffer.length) return readable.push(null);

        var end = pos + size;
        if (end > buffer.length) end = buffer.length;
        readable.push(buffer.slice(pos, end));
        pos = end;
      };

      return readable;
    },


    concat: function(buffers) {
      var length = 0,
          offset = 0,
          buffer = null, i;

      for (i = 0; i < buffers.length; i++) {
        length += buffers[i].length;
      }

      buffer = new Buffer(length);

      for (i = 0; i < buffers.length; i++) {
        buffers[i].copy(buffer, offset);
        offset += buffers[i].length;
      }

      return buffer;
    }
  },

  string: {
    byteLength: function byteLength(string) {
      if (string === null || string === undefined) return 0;
      if (typeof string === 'string') string = new Buffer(string);

      if (typeof string.byteLength === 'number') {
        return string.byteLength;
      } else if (typeof string.length === 'number') {
        return string.length;
      } else if (typeof string.size === 'number') {
        return string.size;
      } else if (typeof string.path === 'string') {
        return util.nodeRequire('fs').lstatSync(string.path).size;
      } else {
        throw util.error(new Error('Cannot determine length of ' + string),
          { object: string });
      }
    },

    upperFirst: function upperFirst(string) {
      return string[0].toUpperCase() + string.substr(1);
    },

    lowerFirst: function lowerFirst(string) {
      return string[0].toLowerCase() + string.substr(1);
    }
  },

  ini: {
    parse: function string(ini) {
      var currentSection, map = {};
      util.arrayEach(ini.split(/\r?\n/), function(line) {
        line = line.split(/(^|\s);/)[0]; // remove comments
        var section = line.match(/^\s*\[([^\[\]]+)\]\s*$/);
        if (section) {
          currentSection = section[1];
        } else if (currentSection) {
          var item = line.match(/^\s*(.+?)\s*=\s*(.+?)\s*$/);
          if (item) {
            map[currentSection] = map[currentSection] || {};
            map[currentSection][item[1]] = item[2];
          }
        }
      });

      return map;
    }
  },

  fn: {
    noop: function() {},


    makeAsync: function makeAsync(fn, expectedArgs) {
      if (expectedArgs && expectedArgs <= fn.length) {
        return fn;
      }

      return function() {
        var args = Array.prototype.slice.call(arguments, 0);
        var callback = args.pop();
        var result = fn.apply(null, args);
        callback(result);
      };
    }
  },

  jamespath: {
    query: function query(expression, data) {
      if (!data) return [];

      var results = [];
      var expressions = expression.split(/\s+\|\|\s+/);
      util.arrayEach.call(this, expressions, function (expr) {
        var objects = [data];
        var tokens = expr.split('.');
        util.arrayEach.call(this, tokens, function (token) {
          var match = token.match('^(.+?)(?:\\[(-?\\d+|\\*|)\\])?$');
          var newObjects = [];
          util.arrayEach.call(this, objects, function (obj) {
            if (match[1] === '*') {
              util.arrayEach.call(this, obj, function (value) {
                newObjects.push(value);
              });
            } else if (obj.hasOwnProperty(match[1])) {
              newObjects.push(obj[match[1]]);
            }
          });
          objects = newObjects;

          if (match[2] !== undefined) {
            newObjects = [];
            util.arrayEach.call(this, objects, function (obj) {
              if (Array.isArray(obj)) {
                if (match[2] === '*' || match[2] === '') {
                  newObjects = newObjects.concat(obj);
                } else {
                  var idx = parseInt(match[2], 10);
                  if (idx < 0) idx = obj.length + idx; // negative indexing
                  newObjects.push(obj[idx]);
                }
              }
            });
            objects = newObjects;
          }

          if (objects.length === 0) return util.abort;
        });

        if (objects.length > 0) {
          results = objects;
          return util.abort;
        }
      });

      return results;
    },

    find: function find(expression, data) {
      return util.jamespath.query(expression, data)[0];
    }
  },


  date: {


    getDate: function getDate() {
      if (!AWS) AWS = require('./core');
      if (AWS.config.systemClockOffset) { // use offset when non-zero
        return new Date(new Date().getTime() + AWS.config.systemClockOffset);
      } else {
        return new Date();
      }
    },


    iso8601: function iso8601(date) {
      if (date === undefined) { date = util.date.getDate(); }
      return date.toISOString();
    },


    rfc822: function rfc822(date) {
      if (date === undefined) { date = util.date.getDate(); }
      return date.toUTCString();
    },


    unixTimestamp: function unixTimestamp(date) {
      if (date === undefined) { date = util.date.getDate(); }
      return date.getTime() / 1000;
    },


    from: function format(date) {
      if (typeof date === 'number') {
        return new Date(date * 1000); // unix timestamp
      } else {
        return new Date(date);
      }
    },


    format: function format(date, formatter) {
      if (!formatter) formatter = 'iso8601';
      return util.date[formatter](util.date.from(date));
    },

    parseTimestamp: function parseTimestamp(value) {
      if (typeof value === 'number') { // unix timestamp (number)
        return new Date(value * 1000);
      } else if (value.match(/^\d+$/)) { // unix timestamp
        return new Date(value * 1000);
      } else if (value.match(/^\d{4}/)) { // iso8601
        return new Date(value);
      } else if (value.match(/^\w{3},/)) { // rfc822
        return new Date(value);
      } else {
        throw util.error(
          new Error('unhandled timestamp format: ' + value),
          {code: 'TimestampParserError'});
      }
    }

  },

  crypto: {
    crc32Table: [
     0x00000000, 0x77073096, 0xEE0E612C, 0x990951BA, 0x076DC419,
     0x706AF48F, 0xE963A535, 0x9E6495A3, 0x0EDB8832, 0x79DCB8A4,
     0xE0D5E91E, 0x97D2D988, 0x09B64C2B, 0x7EB17CBD, 0xE7B82D07,
     0x90BF1D91, 0x1DB71064, 0x6AB020F2, 0xF3B97148, 0x84BE41DE,
     0x1ADAD47D, 0x6DDDE4EB, 0xF4D4B551, 0x83D385C7, 0x136C9856,
     0x646BA8C0, 0xFD62F97A, 0x8A65C9EC, 0x14015C4F, 0x63066CD9,
     0xFA0F3D63, 0x8D080DF5, 0x3B6E20C8, 0x4C69105E, 0xD56041E4,
     0xA2677172, 0x3C03E4D1, 0x4B04D447, 0xD20D85FD, 0xA50AB56B,
     0x35B5A8FA, 0x42B2986C, 0xDBBBC9D6, 0xACBCF940, 0x32D86CE3,
     0x45DF5C75, 0xDCD60DCF, 0xABD13D59, 0x26D930AC, 0x51DE003A,
     0xC8D75180, 0xBFD06116, 0x21B4F4B5, 0x56B3C423, 0xCFBA9599,
     0xB8BDA50F, 0x2802B89E, 0x5F058808, 0xC60CD9B2, 0xB10BE924,
     0x2F6F7C87, 0x58684C11, 0xC1611DAB, 0xB6662D3D, 0x76DC4190,
     0x01DB7106, 0x98D220BC, 0xEFD5102A, 0x71B18589, 0x06B6B51F,
     0x9FBFE4A5, 0xE8B8D433, 0x7807C9A2, 0x0F00F934, 0x9609A88E,
     0xE10E9818, 0x7F6A0DBB, 0x086D3D2D, 0x91646C97, 0xE6635C01,
     0x6B6B51F4, 0x1C6C6162, 0x856530D8, 0xF262004E, 0x6C0695ED,
     0x1B01A57B, 0x8208F4C1, 0xF50FC457, 0x65B0D9C6, 0x12B7E950,
     0x8BBEB8EA, 0xFCB9887C, 0x62DD1DDF, 0x15DA2D49, 0x8CD37CF3,
     0xFBD44C65, 0x4DB26158, 0x3AB551CE, 0xA3BC0074, 0xD4BB30E2,
     0x4ADFA541, 0x3DD895D7, 0xA4D1C46D, 0xD3D6F4FB, 0x4369E96A,
     0x346ED9FC, 0xAD678846, 0xDA60B8D0, 0x44042D73, 0x33031DE5,
     0xAA0A4C5F, 0xDD0D7CC9, 0x5005713C, 0x270241AA, 0xBE0B1010,
     0xC90C2086, 0x5768B525, 0x206F85B3, 0xB966D409, 0xCE61E49F,
     0x5EDEF90E, 0x29D9C998, 0xB0D09822, 0xC7D7A8B4, 0x59B33D17,
     0x2EB40D81, 0xB7BD5C3B, 0xC0BA6CAD, 0xEDB88320, 0x9ABFB3B6,
     0x03B6E20C, 0x74B1D29A, 0xEAD54739, 0x9DD277AF, 0x04DB2615,
     0x73DC1683, 0xE3630B12, 0x94643B84, 0x0D6D6A3E, 0x7A6A5AA8,
     0xE40ECF0B, 0x9309FF9D, 0x0A00AE27, 0x7D079EB1, 0xF00F9344,
     0x8708A3D2, 0x1E01F268, 0x6906C2FE, 0xF762575D, 0x806567CB,
     0x196C3671, 0x6E6B06E7, 0xFED41B76, 0x89D32BE0, 0x10DA7A5A,
     0x67DD4ACC, 0xF9B9DF6F, 0x8EBEEFF9, 0x17B7BE43, 0x60B08ED5,
     0xD6D6A3E8, 0xA1D1937E, 0x38D8C2C4, 0x4FDFF252, 0xD1BB67F1,
     0xA6BC5767, 0x3FB506DD, 0x48B2364B, 0xD80D2BDA, 0xAF0A1B4C,
     0x36034AF6, 0x41047A60, 0xDF60EFC3, 0xA867DF55, 0x316E8EEF,
     0x4669BE79, 0xCB61B38C, 0xBC66831A, 0x256FD2A0, 0x5268E236,
     0xCC0C7795, 0xBB0B4703, 0x220216B9, 0x5505262F, 0xC5BA3BBE,
     0xB2BD0B28, 0x2BB45A92, 0x5CB36A04, 0xC2D7FFA7, 0xB5D0CF31,
     0x2CD99E8B, 0x5BDEAE1D, 0x9B64C2B0, 0xEC63F226, 0x756AA39C,
     0x026D930A, 0x9C0906A9, 0xEB0E363F, 0x72076785, 0x05005713,
     0x95BF4A82, 0xE2B87A14, 0x7BB12BAE, 0x0CB61B38, 0x92D28E9B,
     0xE5D5BE0D, 0x7CDCEFB7, 0x0BDBDF21, 0x86D3D2D4, 0xF1D4E242,
     0x68DDB3F8, 0x1FDA836E, 0x81BE16CD, 0xF6B9265B, 0x6FB077E1,
     0x18B74777, 0x88085AE6, 0xFF0F6A70, 0x66063BCA, 0x11010B5C,
     0x8F659EFF, 0xF862AE69, 0x616BFFD3, 0x166CCF45, 0xA00AE278,
     0xD70DD2EE, 0x4E048354, 0x3903B3C2, 0xA7672661, 0xD06016F7,
     0x4969474D, 0x3E6E77DB, 0xAED16A4A, 0xD9D65ADC, 0x40DF0B66,
     0x37D83BF0, 0xA9BCAE53, 0xDEBB9EC5, 0x47B2CF7F, 0x30B5FFE9,
     0xBDBDF21C, 0xCABAC28A, 0x53B39330, 0x24B4A3A6, 0xBAD03605,
     0xCDD70693, 0x54DE5729, 0x23D967BF, 0xB3667A2E, 0xC4614AB8,
     0x5D681B02, 0x2A6F2B94, 0xB40BBE37, 0xC30C8EA1, 0x5A05DF1B,
     0x2D02EF8D],

    crc32: function crc32(data) {
      var tbl = util.crypto.crc32Table;
      var crc = 0 ^ -1;

      if (typeof data === 'string') {
        data = new Buffer(data);
      }

      for (var i = 0; i < data.length; i++) {
        var code = data.readUInt8(i);
        crc = (crc >>> 8) ^ tbl[(crc ^ code) & 0xFF];
      }
      return (crc ^ -1) >>> 0;
    },

    hmac: function hmac(key, string, digest, fn) {
      if (!digest) digest = 'binary';
      if (digest === 'buffer') { digest = undefined; }
      if (!fn) fn = 'sha256';
      if (typeof string === 'string') string = new Buffer(string);
      return cryptoLib.createHmac(fn, key).update(string).digest(digest);
    },

    md5: function md5(data, digest, callback) {
      return util.crypto.hash('md5', data, digest, callback);
    },

    sha256: function sha256(data, digest, callback) {
      return util.crypto.hash('sha256', data, digest, callback);
    },

    hash: function(algorithm, data, digest, callback) {
      var hash = util.crypto.createHash(algorithm);
      if (!digest) { digest = 'binary'; }
      if (digest === 'buffer') { digest = undefined; }
      if (typeof data === 'string') data = new Buffer(data);
      var sliceFn = util.arraySliceFn(data);
      var isBuffer = Buffer.isBuffer(data);

      if (callback && typeof data === 'object' &&
          typeof data.on === 'function' && !isBuffer) {
        data.on('data', function(chunk) { hash.update(chunk); });
        data.on('error', function(err) { callback(err); });
        data.on('end', function() { callback(null, hash.digest(digest)); });
      } else if (callback && sliceFn && !isBuffer &&
                 typeof FileReader !== 'undefined') {
        var index = 0, size = 1024 * 512;
        var reader = new FileReader();
        reader.onerror = function() {
          callback(new Error('Failed to read data.'));
        };
        reader.onload = function() {
          var buf = new Buffer(new Uint8Array(reader.result));
          hash.update(buf);
          index += buf.length;
          reader._continueReading();
        };
        reader._continueReading = function() {
          if (index >= data.size) {
            callback(null, hash.digest(digest));
            return;
          }

          var back = index + size;
          if (back > data.size) back = data.size;
          reader.readAsArrayBuffer(sliceFn.call(data, index, back));
        };

        reader._continueReading();
      } else {
        if (util.isBrowser() && typeof data === 'object' && !isBuffer) {
          data = new Buffer(new Uint8Array(data));
        }
        var out = hash.update(data).digest(digest);
        if (callback) callback(null, out);
        return out;
      }
    },

    toHex: function toHex(data) {
      var out = [];
      for (var i = 0; i < data.length; i++) {
        out.push(('0' + data.charCodeAt(i).toString(16)).substr(-2, 2));
      }
      return out.join('');
    },

    createHash: function createHash(algorithm) {
      return cryptoLib.createHash(algorithm);
    }

  },




  abort: {},

  each: function each(object, iterFunction) {
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        var ret = iterFunction.call(this, key, object[key]);
        if (ret === util.abort) break;
      }
    }
  },

  arrayEach: function arrayEach(array, iterFunction) {
    for (var idx in array) {
      if (array.hasOwnProperty(idx)) {
        var ret = iterFunction.call(this, array[idx], parseInt(idx, 10));
        if (ret === util.abort) break;
      }
    }
  },

  update: function update(obj1, obj2) {
    util.each(obj2, function iterator(key, item) {
      obj1[key] = item;
    });
    return obj1;
  },

  merge: function merge(obj1, obj2) {
    return util.update(util.copy(obj1), obj2);
  },

  copy: function copy(object) {
    if (object === null || object === undefined) return object;
    var dupe = {};
    for (var key in object) {
      dupe[key] = object[key];
    }
    return dupe;
  },

  isEmpty: function isEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return true;
  },

  arraySliceFn: function arraySliceFn(obj) {
    var fn = obj.slice || obj.webkitSlice || obj.mozSlice;
    return typeof fn === 'function' ? fn : null;
  },

  isType: function isType(obj, type) {
    if (typeof type === 'function') type = util.typeName(type);
    return Object.prototype.toString.call(obj) === '[object ' + type + ']';
  },

  typeName: function typeName(type) {
    if (type.hasOwnProperty('name')) return type.name;
    var str = type.toString();
    var match = str.match(/^\s*function (.+)\(/);
    return match ? match[1] : str;
  },

  error: function error(err, options) {
    var originalError = null;
    if (typeof err.message === 'string' && err.message !== '') {
      if (typeof options === 'string' || (options && options.message)) {
        originalError = util.copy(err);
        originalError.message = err.message;
      }
    }
    err.message = err.message || null;

    if (typeof options === 'string') {
      err.message = options;
    } else {
      util.update(err, options);
    }

    if (typeof Object.defineProperty === 'function') {
      Object.defineProperty(err, 'name', {writable: true, enumerable: false});
      Object.defineProperty(err, 'message', {enumerable: true});
    }

    err.name = err.name || err.code || 'Error';
    err.time = new Date();

    if (originalError) err.originalError = originalError;

    return err;
  },


  inherit: function inherit(klass, features) {
    var newObject = null;
    if (features === undefined) {
      features = klass;
      klass = Object;
      newObject = {};
    } else {
      var ctor = function ConstructorWrapper() {};
      ctor.prototype = klass.prototype;
      newObject = new ctor();
    }

    if (features.constructor === Object) {
      features.constructor = function() {
        if (klass !== Object) {
          return klass.apply(this, arguments);
        }
      };
    }

    features.constructor.prototype = newObject;
    util.update(features.constructor.prototype, features);
    features.constructor.__super__ = klass;
    return features.constructor;
  },


  mixin: function mixin() {
    var klass = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      for (var prop in arguments[i].prototype) {
        var fn = arguments[i].prototype[prop];
        if (prop !== 'constructor') {
          klass.prototype[prop] = fn;
        }
      }
    }
    return klass;
  },


  hideProperties: function hideProperties(obj, props) {
    if (typeof Object.defineProperty !== 'function') return;

    util.arrayEach(props, function (key) {
      Object.defineProperty(obj, key, {
        enumerable: false, writable: true, configurable: true });
    });
  },


  property: function property(obj, name, value, enumerable, isValue) {
    var opts = {
      configurable: true,
      enumerable: enumerable !== undefined ? enumerable : true
    };
    if (typeof value === 'function' && !isValue) {
      opts.get = value;
    }
    else {
      opts.value = value; opts.writable = true;
    }

    Object.defineProperty(obj, name, opts);
  },


  memoizedProperty: function memoizedProperty(obj, name, get, enumerable) {
    var cachedValue = null;

    util.property(obj, name, function() {
      if (cachedValue === null) {
        cachedValue = get();
      }
      return cachedValue;
    }, enumerable);
  },


  hoistPayloadMember: function hoistPayloadMember(resp) {
    var req = resp.request;
    var operation = req.operation;
    var output = req.service.api.operations[operation].output;
    if (output.payload) {
      var payloadMember = output.members[output.payload];
      var responsePayload = resp.data[output.payload];
      if (payloadMember.type === 'structure') {
        AWS.util.each(responsePayload, function(key, value) {
          AWS.util.property(resp.data, key, value, false);
        });
      }
    }
  },


  computeSha256: function computeSha256(body, done) {
    if (AWS.util.isNode()) {
      var Stream = AWS.util.nodeRequire('stream').Stream;
      var fs = AWS.util.nodeRequire('fs');
      if (body instanceof Stream) {
        if (typeof body.path === 'string') { // assume file object
          body = fs.createReadStream(body.path);
        } else { // TODO support other stream types
          return done(new Error('Non-file stream objects are ' +
                                'not supported with SigV4'));
        }
      }
    }

    AWS.util.crypto.sha256(body, 'hex', function(err, sha) {
      if (err) done(err);
      else done(null, sha);
    });
  }

};

module.exports = util;

}).call(this,require('_process'))
},{"./core":3,"_process":197,"buffer":53,"crypto":57,"querystring":201,"url":215}],47:[function(require,module,exports){
var util = require('../util');
var Shape = require('../model/shape');

function DomXmlParser() { }

DomXmlParser.prototype.parse = function(xml, shape) {
  if (xml.replace(/^\s+/, '') === '') return {};

  var result, error;
  try {
    if (window.DOMParser) {
      try {
        var parser = new DOMParser();
        result = parser.parseFromString(xml, 'text/xml');
      } catch (syntaxError) {
        throw util.error(new Error('Parse error in document'),
          {originalError: syntaxError});
      }

      if (result.documentElement === null) {
        throw new Error('Cannot parse empty document.');
      }

      var isError = result.getElementsByTagName('parsererror')[0];
      if (isError && (isError.parentNode === result ||
          isError.parentNode.nodeName === 'body')) {
        throw new Error(isError.getElementsByTagName('div')[0].textContent);
      }
    } else if (window.ActiveXObject) {
      result = new window.ActiveXObject('Microsoft.XMLDOM');
      result.async = false;

      if (!result.loadXML(xml)) {
        throw new Error('Parse error in document');
      }
    } else {
      throw new Error('Cannot load XML parser');
    }
  } catch (e) {
    error = e;
  }

  if (result && result.documentElement && !error) {
    var data = parseXml(result.documentElement, shape);
    var metadata = result.getElementsByTagName('ResponseMetadata')[0];
    if (metadata) {
      data.ResponseMetadata = parseXml(metadata, {});
    }
    return data;
  } else if (error) {
    throw util.error(error || new Error(), {code: 'XMLParserError'});
  } else { // empty xml document
    return {};
  }
};

function parseXml(xml, shape) {
  if (!shape) shape = {};
  switch (shape.type) {
    case 'structure': return parseStructure(xml, shape);
    case 'map': return parseMap(xml, shape);
    case 'list': return parseList(xml, shape);
    case undefined: case null: return parseUnknown(xml);
    default: return parseScalar(xml, shape);
  }
}

function parseStructure(xml, shape) {
  var data = {};
  if (xml === null) return data;

  util.each(shape.members, function(memberName, memberShape) {
    if (memberShape.isXmlAttribute) {
      if (xml.attributes.hasOwnProperty(memberShape.name)) {
        var value = xml.attributes[memberShape.name].value;
        data[memberName] = parseXml({textContent: value}, memberShape);
      }
    } else {
      var xmlChild = memberShape.flattened ? xml :
        xml.getElementsByTagName(memberShape.name)[0];
      if (xmlChild) {
        data[memberName] = parseXml(xmlChild, memberShape);
      } else if (!memberShape.flattened && memberShape.type === 'list') {
        data[memberName] = memberShape.defaultValue;
      }
    }
  });

  return data;
}

function parseMap(xml, shape) {
  var data = {};
  var xmlKey = shape.key.name || 'key';
  var xmlValue = shape.value.name || 'value';
  var tagName = shape.flattened ? shape.name : 'entry';

  var child = xml.firstElementChild;
  while (child) {
    if (child.nodeName === tagName) {
      var key = child.getElementsByTagName(xmlKey)[0].textContent;
      var value = child.getElementsByTagName(xmlValue)[0];
      data[key] = parseXml(value, shape.value);
    }
    child = child.nextElementSibling;
  }
  return data;
}

function parseList(xml, shape) {
  var data = [];
  var tagName = shape.flattened ? shape.name : (shape.member.name || 'member');

  var child = xml.firstElementChild;
  while (child) {
    if (child.nodeName === tagName) {
      data.push(parseXml(child, shape.member));
    }
    child = child.nextElementSibling;
  }
  return data;
}

function parseScalar(xml, shape) {
  if (xml.getAttribute) {
    var encoding = xml.getAttribute('encoding');
    if (encoding === 'base64') {
      shape = new Shape.create({type: encoding});
    }
  }

  var text = xml.textContent;
  if (text === '') text = null;
  if (typeof shape.toType === 'function') {
    return shape.toType(text);
  } else {
    return text;
  }
}

function parseUnknown(xml) {
  if (xml === undefined || xml === null) return '';

  if (!xml.firstElementChild) {
    if (xml.parentNode.parentNode === null) return {};
    if (xml.childNodes.length === 0) return '';
    else return xml.textContent;
  }

  var shape = {type: 'structure', members: {}};
  var child = xml.firstElementChild;
  while (child) {
    var tag = child.nodeName;
    if (shape.members.hasOwnProperty(tag)) {
      shape.members[tag].type = 'list';
    } else {
      shape.members[tag] = {name: tag};
    }
    child = child.nextElementSibling;
  }
  return parseStructure(xml, shape);
}

module.exports = DomXmlParser;

},{"../model/shape":20,"../util":46}],48:[function(require,module,exports){
var util = require('../util');
var builder = require('xmlbuilder');

function XmlBuilder() { }

XmlBuilder.prototype.toXML = function(params, shape, rootElement) {
  var xml = builder.create(rootElement);
  applyNamespaces(xml, shape);
  serialize(xml, params, shape);
  return xml.children.length === 0 ? '' : xml.root().toString();
};

function serialize(xml, value, shape) {
  switch (shape.type) {
    case 'structure': return serializeStructure(xml, value, shape);
    case 'map': return serializeMap(xml, value, shape);
    case 'list': return serializeList(xml, value, shape);
    default: return serializeScalar(xml, value, shape);
  }
}

function serializeStructure(xml, params, shape) {
  util.arrayEach(shape.memberNames, function(memberName) {
    var memberShape = shape.members[memberName];
    if (memberShape.location !== 'body') return;

    var value = params[memberName];
    var name = memberShape.name;
    if (value !== undefined && value !== null) {
      if (memberShape.isXmlAttribute) {
        xml.att(name, value);
      } else if (memberShape.flattened) {
        serialize(xml, value, memberShape);
      } else {
        var element = xml.ele(name);
        applyNamespaces(element, memberShape);
        serialize(element, value, memberShape);
      }
    }
  });
}

function serializeMap(xml, map, shape) {
  var xmlKey = shape.key.name || 'key';
  var xmlValue = shape.value.name || 'value';

  util.each(map, function(key, value) {
    var entry = xml.ele(shape.flattened ? shape.name : 'entry');
    serialize(entry.ele(xmlKey), key, shape.key);
    serialize(entry.ele(xmlValue), value, shape.value);
  });
}

function serializeList(xml, list, shape) {
  if (shape.flattened) {
    util.arrayEach(list, function(value) {
      var name = shape.member.name || shape.name;
      var element = xml.ele(name);
      serialize(element, value, shape.member);
    });
  } else {
    util.arrayEach(list, function(value) {
      var name = shape.member.name || 'member';
      var element = xml.ele(name);
      serialize(element, value, shape.member);
    });
  }
}

function serializeScalar(xml, value, shape) {
  xml.txt(shape.toWireFormat(value));
}

function applyNamespaces(xml, shape) {
  var uri, prefix = 'xmlns';
  if (shape.xmlNamespaceUri) {
    uri = shape.xmlNamespaceUri;
    if (shape.xmlNamespacePrefix) prefix += ':' + shape.xmlNamespacePrefix;
  } else if (xml.isRoot && shape.api.xmlNamespaceUri) {
    uri = shape.api.xmlNamespaceUri;
  }

  if (uri) xml.att(prefix, uri);
}

module.exports = XmlBuilder;

},{"../util":46,"xmlbuilder":51}],49:[function(require,module,exports){
(function() {
  var XMLBuilder, XMLFragment;

  XMLFragment = require('./XMLFragment');

  XMLBuilder = (function() {

    function XMLBuilder(name, xmldec, doctype) {
      var att, child, _ref;
      this.children = [];
      this.rootObject = null;
      if (this.is(name, 'Object')) {
        _ref = [name, xmldec], xmldec = _ref[0], doctype = _ref[1];
        name = null;
      }
      if (name != null) {
        name = '' + name || '';
        if (xmldec == null) {
          xmldec = {
            'version': '1.0'
          };
        }
      }
      if ((xmldec != null) && !(xmldec.version != null)) {
        throw new Error("Version number is required");
      }
      if (xmldec != null) {
        xmldec.version = '' + xmldec.version || '';
        if (!xmldec.version.match(/1\.[0-9]+/)) {
          throw new Error("Invalid version number: " + xmldec.version);
        }
        att = {
          version: xmldec.version
        };
        if (xmldec.encoding != null) {
          xmldec.encoding = '' + xmldec.encoding || '';
          if (!xmldec.encoding.match(/[A-Za-z](?:[A-Za-z0-9._-]|-)*/)) {
            throw new Error("Invalid encoding: " + xmldec.encoding);
          }
          att.encoding = xmldec.encoding;
        }
        if (xmldec.standalone != null) {
          att.standalone = xmldec.standalone ? "yes" : "no";
        }
        child = new XMLFragment(this, '?xml', att);
        this.children.push(child);
      }
      if (doctype != null) {
        att = {};
        if (name != null) {
          att.name = name;
        }
        if (doctype.ext != null) {
          doctype.ext = '' + doctype.ext || '';
          att.ext = doctype.ext;
        }
        child = new XMLFragment(this, '!DOCTYPE', att);
        this.children.push(child);
      }
      if (name != null) {
        this.begin(name);
      }
    }

    XMLBuilder.prototype.begin = function(name, xmldec, doctype) {
      var doc, root;
      if (!(name != null)) {
        throw new Error("Root element needs a name");
      }
      if (this.rootObject) {
        this.children = [];
        this.rootObject = null;
      }
      if (xmldec != null) {
        doc = new XMLBuilder(name, xmldec, doctype);
        return doc.root();
      }
      name = '' + name || '';
      root = new XMLFragment(this, name, {});
      root.isRoot = true;
      root.documentObject = this;
      this.children.push(root);
      this.rootObject = root;
      return root;
    };

    XMLBuilder.prototype.root = function() {
      return this.rootObject;
    };

    XMLBuilder.prototype.end = function(options) {
      return toString(options);
    };

    XMLBuilder.prototype.toString = function(options) {
      var child, r, _i, _len, _ref;
      r = '';
      _ref = this.children;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        child = _ref[_i];
        r += child.toString(options);
      }
      return r;
    };

    XMLBuilder.prototype.is = function(obj, type) {
      var clas;
      clas = Object.prototype.toString.call(obj).slice(8, -1);
      return (obj != null) && clas === type;
    };

    return XMLBuilder;

  })();

  module.exports = XMLBuilder;

}).call(this);

},{"./XMLFragment":50}],50:[function(require,module,exports){
(function() {
  var XMLFragment,
    __hasProp = {}.hasOwnProperty;

  XMLFragment = (function() {

    function XMLFragment(parent, name, attributes, text) {
      this.isRoot = false;
      this.documentObject = null;
      this.parent = parent;
      this.name = name;
      this.attributes = attributes;
      this.value = text;
      this.children = [];
    }

    XMLFragment.prototype.element = function(name, attributes, text) {
      var child, key, val, _ref, _ref1;
      if (!(name != null)) {
        throw new Error("Missing element name");
      }
      name = '' + name || '';
      this.assertLegalChar(name);
      if (attributes == null) {
        attributes = {};
      }
      if (this.is(attributes, 'String') && this.is(text, 'Object')) {
        _ref = [text, attributes], attributes = _ref[0], text = _ref[1];
      } else if (this.is(attributes, 'String')) {
        _ref1 = [{}, attributes], attributes = _ref1[0], text = _ref1[1];
      }
      for (key in attributes) {
        if (!__hasProp.call(attributes, key)) continue;
        val = attributes[key];
        val = '' + val || '';
        attributes[key] = this.escape(val);
      }
      child = new XMLFragment(this, name, attributes);
      if (text != null) {
        text = '' + text || '';
        text = this.escape(text);
        this.assertLegalChar(text);
        child.raw(text);
      }
      this.children.push(child);
      return child;
    };

    XMLFragment.prototype.insertBefore = function(name, attributes, text) {
      var child, i, key, val, _ref, _ref1;
      if (this.isRoot) {
        throw new Error("Cannot insert elements at root level");
      }
      if (!(name != null)) {
        throw new Error("Missing element name");
      }
      name = '' + name || '';
      this.assertLegalChar(name);
      if (attributes == null) {
        attributes = {};
      }
      if (this.is(attributes, 'String') && this.is(text, 'Object')) {
        _ref = [text, attributes], attributes = _ref[0], text = _ref[1];
      } else if (this.is(attributes, 'String')) {
        _ref1 = [{}, attributes], attributes = _ref1[0], text = _ref1[1];
      }
      for (key in attributes) {
        if (!__hasProp.call(attributes, key)) continue;
        val = attributes[key];
        val = '' + val || '';
        attributes[key] = this.escape(val);
      }
      child = new XMLFragment(this.parent, name, attributes);
      if (text != null) {
        text = '' + text || '';
        text = this.escape(text);
        this.assertLegalChar(text);
        child.raw(text);
      }
      i = this.parent.children.indexOf(this);
      this.parent.children.splice(i, 0, child);
      return child;
    };

    XMLFragment.prototype.insertAfter = function(name, attributes, text) {
      var child, i, key, val, _ref, _ref1;
      if (this.isRoot) {
        throw new Error("Cannot insert elements at root level");
      }
      if (!(name != null)) {
        throw new Error("Missing element name");
      }
      name = '' + name || '';
      this.assertLegalChar(name);
      if (attributes == null) {
        attributes = {};
      }
      if (this.is(attributes, 'String') && this.is(text, 'Object')) {
        _ref = [text, attributes], attributes = _ref[0], text = _ref[1];
      } else if (this.is(attributes, 'String')) {
        _ref1 = [{}, attributes], attributes = _ref1[0], text = _ref1[1];
      }
      for (key in attributes) {
        if (!__hasProp.call(attributes, key)) continue;
        val = attributes[key];
        val = '' + val || '';
        attributes[key] = this.escape(val);
      }
      child = new XMLFragment(this.parent, name, attributes);
      if (text != null) {
        text = '' + text || '';
        text = this.escape(text);
        this.assertLegalChar(text);
        child.raw(text);
      }
      i = this.parent.children.indexOf(this);
      this.parent.children.splice(i + 1, 0, child);
      return child;
    };

    XMLFragment.prototype.remove = function() {
      var i, _ref;
      if (this.isRoot) {
        throw new Error("Cannot remove the root element");
      }
      i = this.parent.children.indexOf(this);
      [].splice.apply(this.parent.children, [i, i - i + 1].concat(_ref = [])), _ref;
      return this.parent;
    };

    XMLFragment.prototype.text = function(value) {
      var child;
      if (!(value != null)) {
        throw new Error("Missing element text");
      }
      value = '' + value || '';
      value = this.escape(value);
      this.assertLegalChar(value);
      child = new XMLFragment(this, '', {}, value);
      this.children.push(child);
      return this;
    };

    XMLFragment.prototype.cdata = function(value) {
      var child;
      if (!(value != null)) {
        throw new Error("Missing CDATA text");
      }
      value = '' + value || '';
      this.assertLegalChar(value);
      if (value.match(/]]>/)) {
        throw new Error("Invalid CDATA text: " + value);
      }
      child = new XMLFragment(this, '', {}, '<![CDATA[' + value + ']]>');
      this.children.push(child);
      return this;
    };

    XMLFragment.prototype.comment = function(value) {
      var child;
      if (!(value != null)) {
        throw new Error("Missing comment text");
      }
      value = '' + value || '';
      value = this.escape(value);
      this.assertLegalChar(value);
      if (value.match(/--/)) {
        throw new Error("Comment text cannot contain double-hypen: " + value);
      }
      child = new XMLFragment(this, '', {}, '<!-- ' + value + ' -->');
      this.children.push(child);
      return this;
    };

    XMLFragment.prototype.raw = function(value) {
      var child;
      if (!(value != null)) {
        throw new Error("Missing raw text");
      }
      value = '' + value || '';
      child = new XMLFragment(this, '', {}, value);
      this.children.push(child);
      return this;
    };

    XMLFragment.prototype.up = function() {
      if (this.isRoot) {
        throw new Error("This node has no parent. Use doc() if you need to get the document object.");
      }
      return this.parent;
    };

    XMLFragment.prototype.root = function() {
      var child;
      if (this.isRoot) {
        return this;
      }
      child = this.parent;
      while (!child.isRoot) {
        child = child.parent;
      }
      return child;
    };

    XMLFragment.prototype.document = function() {
      return this.root().documentObject;
    };

    XMLFragment.prototype.end = function(options) {
      return this.document().toString(options);
    };

    XMLFragment.prototype.prev = function() {
      var i;
      if (this.isRoot) {
        throw new Error("Root node has no siblings");
      }
      i = this.parent.children.indexOf(this);
      if (i < 1) {
        throw new Error("Already at the first node");
      }
      return this.parent.children[i - 1];
    };

    XMLFragment.prototype.next = function() {
      var i;
      if (this.isRoot) {
        throw new Error("Root node has no siblings");
      }
      i = this.parent.children.indexOf(this);
      if (i === -1 || i === this.parent.children.length - 1) {
        throw new Error("Already at the last node");
      }
      return this.parent.children[i + 1];
    };

    XMLFragment.prototype.clone = function(deep) {
      var clonedSelf;
      clonedSelf = new XMLFragment(this.parent, this.name, this.attributes, this.value);
      if (deep) {
        this.children.forEach(function(child) {
          var clonedChild;
          clonedChild = child.clone(deep);
          clonedChild.parent = clonedSelf;
          return clonedSelf.children.push(clonedChild);
        });
      }
      return clonedSelf;
    };

    XMLFragment.prototype.importXMLBuilder = function(xmlbuilder) {
      var clonedRoot;
      clonedRoot = xmlbuilder.root().clone(true);
      clonedRoot.parent = this;
      this.children.push(clonedRoot);
      clonedRoot.isRoot = false;
      return this;
    };

    XMLFragment.prototype.attribute = function(name, value) {
      var _ref;
      if (!(name != null)) {
        throw new Error("Missing attribute name");
      }
      if (!(value != null)) {
        throw new Error("Missing attribute value");
      }
      name = '' + name || '';
      value = '' + value || '';
      if ((_ref = this.attributes) == null) {
        this.attributes = {};
      }
      this.attributes[name] = this.escape(value);
      return this;
    };

    XMLFragment.prototype.removeAttribute = function(name) {
      if (!(name != null)) {
        throw new Error("Missing attribute name");
      }
      name = '' + name || '';
      delete this.attributes[name];
      return this;
    };

    XMLFragment.prototype.toString = function(options, level) {
      var attName, attValue, child, indent, newline, pretty, r, space, _i, _len, _ref, _ref1;
      pretty = (options != null) && options.pretty || false;
      indent = (options != null) && options.indent || '  ';
      newline = (options != null) && options.newline || '\n';
      level || (level = 0);
      space = new Array(level + 1).join(indent);
      r = '';
      if (pretty) {
        r += space;
      }
      if (!(this.value != null)) {
        r += '<' + this.name;
      } else {
        r += '' + this.value;
      }
      _ref = this.attributes;
      for (attName in _ref) {
        attValue = _ref[attName];
        if (this.name === '!DOCTYPE') {
          r += ' ' + attValue;
        } else {
          r += ' ' + attName + '="' + attValue + '"';
        }
      }
      if (this.children.length === 0) {
        if (!(this.value != null)) {
          r += this.name === '?xml' ? '?>' : this.name === '!DOCTYPE' ? '>' : '/>';
        }
        if (pretty) {
          r += newline;
        }
      } else if (pretty && this.children.length === 1 && this.children[0].value) {
        r += '>';
        r += this.children[0].value;
        r += '</' + this.name + '>';
        r += newline;
      } else {
        r += '>';
        if (pretty) {
          r += newline;
        }
        _ref1 = this.children;
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          child = _ref1[_i];
          r += child.toString(options, level + 1);
        }
        if (pretty) {
          r += space;
        }
        r += '</' + this.name + '>';
        if (pretty) {
          r += newline;
        }
      }
      return r;
    };

    XMLFragment.prototype.escape = function(str) {
      return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&apos;').replace(/"/g, '&quot;');
    };

    XMLFragment.prototype.assertLegalChar = function(str) {
      var chars, chr;
      chars = /[\u0000-\u0008\u000B-\u000C\u000E-\u001F\uD800-\uDFFF\uFFFE-\uFFFF]/;
      chr = str.match(chars);
      if (chr) {
        throw new Error("Invalid character (" + chr + ") in string: " + str);
      }
    };

    XMLFragment.prototype.is = function(obj, type) {
      var clas;
      clas = Object.prototype.toString.call(obj).slice(8, -1);
      return (obj != null) && clas === type;
    };

    XMLFragment.prototype.ele = function(name, attributes, text) {
      return this.element(name, attributes, text);
    };

    XMLFragment.prototype.txt = function(value) {
      return this.text(value);
    };

    XMLFragment.prototype.dat = function(value) {
      return this.cdata(value);
    };

    XMLFragment.prototype.att = function(name, value) {
      return this.attribute(name, value);
    };

    XMLFragment.prototype.com = function(value) {
      return this.comment(value);
    };

    XMLFragment.prototype.doc = function() {
      return this.document();
    };

    XMLFragment.prototype.e = function(name, attributes, text) {
      return this.element(name, attributes, text);
    };

    XMLFragment.prototype.t = function(value) {
      return this.text(value);
    };

    XMLFragment.prototype.d = function(value) {
      return this.cdata(value);
    };

    XMLFragment.prototype.a = function(name, value) {
      return this.attribute(name, value);
    };

    XMLFragment.prototype.c = function(value) {
      return this.comment(value);
    };

    XMLFragment.prototype.r = function(value) {
      return this.raw(value);
    };

    XMLFragment.prototype.u = function() {
      return this.up();
    };

    return XMLFragment;

  })();

  module.exports = XMLFragment;

}).call(this);

},{}],51:[function(require,module,exports){
(function() {
  var XMLBuilder;

  XMLBuilder = require('./XMLBuilder');

  module.exports.create = function(name, xmldec, doctype) {
    if (name != null) {
      return new XMLBuilder(name, xmldec, doctype).root();
    } else {
      return new XMLBuilder();
    }
  };

}).call(this);

},{"./XMLBuilder":49}],52:[function(require,module,exports){

},{}],53:[function(require,module,exports){


var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('is-array')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192 // not used by this implementation

var kMaxLength = 0x3fffffff
var rootParent = {}


Buffer.TYPED_ARRAY_SUPPORT = (function () {
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        new Uint8Array(1).subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
})()


function Buffer (arg) {
  if (!(this instanceof Buffer)) {
    if (arguments.length > 1) return new Buffer(arg, arguments[1])
    return new Buffer(arg)
  }

  this.length = 0
  this.parent = undefined

  if (typeof arg === 'number') {
    return fromNumber(this, arg)
  }

  if (typeof arg === 'string') {
    return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')
  }

  return fromObject(this, arg)
}

function fromNumber (that, length) {
  that = allocate(that, length < 0 ? 0 : checked(length) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < length; i++) {
      that[i] = 0
    }
  }
  return that
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'

  var length = byteLength(string, encoding) | 0
  that = allocate(that, length)

  that.write(string, encoding)
  return that
}

function fromObject (that, object) {
  if (Buffer.isBuffer(object)) return fromBuffer(that, object)

  if (isArray(object)) return fromArray(that, object)

  if (object == null) {
    throw new TypeError('must start with number, buffer, array or string')
  }

  if (typeof ArrayBuffer !== 'undefined' && object.buffer instanceof ArrayBuffer) {
    return fromTypedArray(that, object)
  }

  if (object.length) return fromArrayLike(that, object)

  return fromJsonObject(that, object)
}

function fromBuffer (that, buffer) {
  var length = checked(buffer.length) | 0
  that = allocate(that, length)
  buffer.copy(that, 0, 0, length)
  return that
}

function fromArray (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromTypedArray (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayLike (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromJsonObject (that, object) {
  var array
  var length = 0

  if (object.type === 'Buffer' && isArray(object.data)) {
    array = object.data
    length = checked(array.length) | 0
  }
  that = allocate(that, length)

  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function allocate (that, length) {
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    that = Buffer._augment(new Uint8Array(length))
  } else {
    that.length = length
    that._isBuffer = true
  }

  var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1
  if (fromPool) that.parent = rootParent

  return that
}

function checked (length) {
  if (length >= kMaxLength) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (subject, encoding) {
  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)

  var buf = new Buffer(subject, encoding)
  delete buf.parent
  return buf
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  var i = 0
  var len = Math.min(x, y)
  while (i < len) {
    if (a[i] !== b[i]) break

    ++i
  }

  if (i !== len) {
    x = a[i]
    y = b[i]
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; i++) {
      length += list[i].length
    }
  }

  var buf = new Buffer(length)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

function byteLength (string, encoding) {
  if (typeof string !== 'string') string = String(string)

  if (string.length === 0) return 0

  switch (encoding || 'utf8') {
    case 'ascii':
    case 'binary':
    case 'raw':
      return string.length
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return string.length * 2
    case 'hex':
      return string.length >>> 1
    case 'utf8':
    case 'utf-8':
      return utf8ToBytes(string).length
    case 'base64':
      return base64ToBytes(string).length
    default:
      return string.length
  }
}
Buffer.byteLength = byteLength

Buffer.prototype.length = undefined
Buffer.prototype.parent = undefined

Buffer.prototype.toString = function toString (encoding, start, end) {
  var loweredCase = false

  start = start | 0
  end = end === undefined || end === Infinity ? this.length : end | 0

  if (!encoding) encoding = 'utf8'
  if (start < 0) start = 0
  if (end > this.length) end = this.length
  if (end <= start) return ''

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'binary':
        return binarySlice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return 0
  return Buffer.compare(this, b)
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
  else if (byteOffset < -0x80000000) byteOffset = -0x80000000
  byteOffset >>= 0

  if (this.length === 0) return -1
  if (byteOffset >= this.length) return -1

  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)

  if (typeof val === 'string') {
    if (val.length === 0) return -1 // special case: looking for empty string always fails
    return String.prototype.indexOf.call(this, val, byteOffset)
  }
  if (Buffer.isBuffer(val)) {
    return arrayIndexOf(this, val, byteOffset)
  }
  if (typeof val === 'number') {
    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
    }
    return arrayIndexOf(this, [ val ], byteOffset)
  }

  function arrayIndexOf (arr, val, byteOffset) {
    var foundIndex = -1
    for (var i = 0; byteOffset + i < arr.length; i++) {
      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
      } else {
        foundIndex = -1
      }
    }
    return -1
  }

  throw new TypeError('val must be string, number or Buffer')
}

Buffer.prototype.get = function get (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

Buffer.prototype.set = function set (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length
  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) throw new Error('Invalid hex string')
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function binaryWrite (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    var swap = encoding
    encoding = offset
    offset = length | 0
    length = swap
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'binary':
        return binaryWrite(this, string, offset, length)

      case 'base64':
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function binarySlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
  }

  if (newBuf.length) newBuf.parent = this.parent || this

  return newBuf
}


function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('value is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = value
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = value
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = value
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = value
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = value < 0 ? 1 : 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = value < 0 ? 1 : 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = value
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = value
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = value
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (value > max || value < min) throw new RangeError('value is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('index out of range')
  if (offset < 0) throw new RangeError('index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < len; i++) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    target._set(this.subarray(start, start + len), targetStart)
  }

  return len
}

Buffer.prototype.fill = function fill (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (end < start) throw new RangeError('end < start')

  if (end === start) return
  if (this.length === 0) return

  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')

  var i
  if (typeof value === 'number') {
    for (i = start; i < end; i++) {
      this[i] = value
    }
  } else {
    var bytes = utf8ToBytes(value.toString())
    var len = bytes.length
    for (i = start; i < end; i++) {
      this[i] = bytes[i % len]
    }
  }

  return this
}


Buffer.prototype.toArrayBuffer = function toArrayBuffer () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1) {
        buf[i] = this[i]
      }
      return buf.buffer
    }
  } else {
    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
  }
}


var BP = Buffer.prototype


Buffer._augment = function _augment (arr) {
  arr.constructor = Buffer
  arr._isBuffer = true

  arr._set = arr.set

  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.equals = BP.equals
  arr.compare = BP.compare
  arr.indexOf = BP.indexOf
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUIntLE = BP.readUIntLE
  arr.readUIntBE = BP.readUIntBE
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readIntLE = BP.readIntLE
  arr.readIntBE = BP.readIntBE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUIntLE = BP.writeUIntLE
  arr.writeUIntBE = BP.writeUIntBE
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeIntLE = BP.writeIntLE
  arr.writeIntBE = BP.writeIntBE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

var INVALID_BASE64_RE = /[^+\/0-9A-z\-]/g

function base64clean (str) {
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  if (str.length < 2) return ''
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []
  var i = 0

  for (; i < length; i++) {
    codePoint = string.charCodeAt(i)

    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      if (leadSurrogate) {
        if (codePoint < 0xDC00) {
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          leadSurrogate = codePoint
          continue
        } else {
          codePoint = leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00 | 0x10000
          leadSurrogate = null
        }
      } else {

        if (codePoint > 0xDBFF) {
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else {
          leadSurrogate = codePoint
          continue
        }
      }
    } else if (leadSurrogate) {
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
      leadSurrogate = null
    }

    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x200000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

},{"base64-js":54,"ieee754":55,"is-array":56}],54:[function(require,module,exports){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)
	var PLUS_URL_SAFE = '-'.charCodeAt(0)
	var SLASH_URL_SAFE = '_'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS ||
		    code === PLUS_URL_SAFE)
			return 62 // '+'
		if (code === SLASH ||
		    code === SLASH_URL_SAFE)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

},{}],55:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      nBits = -7,
      i = isLE ? (nBytes - 1) : 0,
      d = isLE ? -1 : 1,
      s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
      i = isLE ? 0 : (nBytes - 1),
      d = isLE ? 1 : -1,
      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],56:[function(require,module,exports){



var isArray = Array.isArray;



var str = Object.prototype.toString;



module.exports = isArray || function (val) {
  return !! val && '[object Array]' == str.call(val);
};

},{}],57:[function(require,module,exports){
'use strict';

exports.randomBytes = exports.rng = exports.pseudoRandomBytes = exports.prng = require('randombytes')

exports.createHash = exports.Hash = require('create-hash')

exports.createHmac = exports.Hmac = require('create-hmac')

var hashes = ['sha1', 'sha224', 'sha256', 'sha384', 'sha512', 'md5', 'rmd160'].concat(Object.keys(require('browserify-sign/algos')))
exports.getHashes = function () {
  return hashes;
}

var p = require('pbkdf2')
exports.pbkdf2 = p.pbkdf2
exports.pbkdf2Sync = p.pbkdf2Sync

var aes = require('browserify-aes');
[
  'Cipher',
  'createCipher',
  'Cipheriv',
  'createCipheriv',
  'Decipher',
  'createDecipher',
  'Decipheriv',
  'createDecipheriv',
  'getCiphers',
  'listCiphers'
].forEach(function (key) {
  exports[key] = aes[key];
})

var dh = require('diffie-hellman');
[
  'DiffieHellmanGroup',
  'createDiffieHellmanGroup',
  'getDiffieHellman',
  'createDiffieHellman',
  'DiffieHellman'
].forEach(function (key) {
  exports[key] = dh[key];
})

var sign = require('browserify-sign');
[
  'createSign',
  'Sign',
  'createVerify',
  'Verify'
].forEach(function (key) {
  exports[key] = sign[key];
})

exports.createECDH = require('create-ecdh')

var publicEncrypt = require('public-encrypt');

[
  'publicEncrypt',
  'privateEncrypt',
  'publicDecrypt',
  'privateDecrypt'
].forEach(function (key) {
  exports[key] = publicEncrypt[key];
})

;[
  'createCredentials'
].forEach(function (name) {
  exports[name] = function () {
    throw new Error([
      'sorry, ' + name + ' is not implemented yet',
      'we accept pull requests',
      'https://github.com/crypto-browserify/crypto-browserify'
    ].join('\n'));
  }
})

},{"browserify-aes":61,"browserify-sign":77,"browserify-sign/algos":76,"create-ecdh":123,"create-hash":145,"create-hmac":157,"diffie-hellman":158,"pbkdf2":165,"public-encrypt":166,"randombytes":193}],58:[function(require,module,exports){
(function (Buffer){
var md5 = require('create-hash/md5');
module.exports = EVP_BytesToKey;
function EVP_BytesToKey(password, keyLen, ivLen) {
  if (!Buffer.isBuffer(password)) {
    password = new Buffer(password, 'binary');
  }
  keyLen = keyLen/8;
  ivLen = ivLen || 0;
  var ki = 0;
  var ii = 0;
  var key = new Buffer(keyLen);
  var iv = new Buffer(ivLen);
  var addmd = 0;
  var md_buf;
  var i;
  var bufs =  [];
  while (true) {
    if(addmd++ > 0) {
       bufs.push(md_buf);
    }
    bufs.push(password);
    md_buf = md5(Buffer.concat(bufs));
    bufs = [];
    i = 0;
    if(keyLen > 0) {
      while(true) {
        if(keyLen === 0) {
          break;
        }
        if(i === md_buf.length) {
          break;
        }
        key[ki++] = md_buf[i];
        keyLen--;
        i++;
       }
    }
    if(ivLen > 0 && i !== md_buf.length) {
      while(true) {
        if(ivLen === 0) {
          break;
        }
        if(i === md_buf.length) {
          break;
        }
       iv[ii++] = md_buf[i];
       ivLen--;
       i++;
     }
   }
   if(keyLen === 0 && ivLen === 0) {
      break;
    }
  }
  for(i=0;i<md_buf.length;i++) {
    md_buf[i] = 0;
  }
  return {
    key: key,
    iv: iv
  };
}
}).call(this,require("buffer").Buffer)
},{"buffer":53,"create-hash/md5":147}],59:[function(require,module,exports){
(function (Buffer){


var uint_max = Math.pow(2, 32);
function fixup_uint32(x) {
    var ret, x_pos;
    ret = x > uint_max || x < 0 ? (x_pos = Math.abs(x) % uint_max, x < 0 ? uint_max - x_pos : x_pos) : x;
    return ret;
}
function scrub_vec(v) {
  var i, _i, _ref;
  for (i = _i = 0, _ref = v.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
    v[i] = 0;
  }
  return false;
}

function Global() {
  var i;
  this.SBOX = [];
  this.INV_SBOX = [];
  this.SUB_MIX = (function() {
    var _i, _results;
    _results = [];
    for (i = _i = 0; _i < 4; i = ++_i) {
      _results.push([]);
    }
    return _results;
  })();
  this.INV_SUB_MIX = (function() {
    var _i, _results;
    _results = [];
    for (i = _i = 0; _i < 4; i = ++_i) {
      _results.push([]);
    }
    return _results;
  })();
  this.init();
  this.RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];
}

Global.prototype.init = function() {
  var d, i, sx, t, x, x2, x4, x8, xi, _i;
  d = (function() {
    var _i, _results;
    _results = [];
    for (i = _i = 0; _i < 256; i = ++_i) {
      if (i < 128) {
        _results.push(i << 1);
      } else {
        _results.push((i << 1) ^ 0x11b);
      }
    }
    return _results;
  })();
  x = 0;
  xi = 0;
  for (i = _i = 0; _i < 256; i = ++_i) {
    sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
    sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
    this.SBOX[x] = sx;
    this.INV_SBOX[sx] = x;
    x2 = d[x];
    x4 = d[x2];
    x8 = d[x4];
    t = (d[sx] * 0x101) ^ (sx * 0x1010100);
    this.SUB_MIX[0][x] = (t << 24) | (t >>> 8);
    this.SUB_MIX[1][x] = (t << 16) | (t >>> 16);
    this.SUB_MIX[2][x] = (t << 8) | (t >>> 24);
    this.SUB_MIX[3][x] = t;
    t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
    this.INV_SUB_MIX[0][sx] = (t << 24) | (t >>> 8);
    this.INV_SUB_MIX[1][sx] = (t << 16) | (t >>> 16);
    this.INV_SUB_MIX[2][sx] = (t << 8) | (t >>> 24);
    this.INV_SUB_MIX[3][sx] = t;
    if (x === 0) {
      x = xi = 1;
    } else {
      x = x2 ^ d[d[d[x8 ^ x2]]];
      xi ^= d[d[xi]];
    }
  }
  return true;
};

var G = new Global();


AES.blockSize = 4 * 4;

AES.prototype.blockSize = AES.blockSize;

AES.keySize = 256 / 8;

AES.prototype.keySize = AES.keySize;

 function bufferToArray(buf) {
  var len = buf.length/4;
  var out = new Array(len);
  var i = -1;
  while (++i < len) {
    out[i] = buf.readUInt32BE(i * 4);
  }
  return out;
 }
function AES(key) {
  this._key = bufferToArray(key);
  this._doReset();
}

AES.prototype._doReset = function() {
  var invKsRow, keySize, keyWords, ksRow, ksRows, t, _i, _j;
  keyWords = this._key;
  keySize = keyWords.length;
  this._nRounds = keySize + 6;
  ksRows = (this._nRounds + 1) * 4;
  this._keySchedule = [];
  for (ksRow = _i = 0; 0 <= ksRows ? _i < ksRows : _i > ksRows; ksRow = 0 <= ksRows ? ++_i : --_i) {
    this._keySchedule[ksRow] = ksRow < keySize ? keyWords[ksRow] : (t = this._keySchedule[ksRow - 1], (ksRow % keySize) === 0 ? (t = (t << 8) | (t >>> 24), t = (G.SBOX[t >>> 24] << 24) | (G.SBOX[(t >>> 16) & 0xff] << 16) | (G.SBOX[(t >>> 8) & 0xff] << 8) | G.SBOX[t & 0xff], t ^= G.RCON[(ksRow / keySize) | 0] << 24) : keySize > 6 && ksRow % keySize === 4 ? t = (G.SBOX[t >>> 24] << 24) | (G.SBOX[(t >>> 16) & 0xff] << 16) | (G.SBOX[(t >>> 8) & 0xff] << 8) | G.SBOX[t & 0xff] : void 0, this._keySchedule[ksRow - keySize] ^ t);
  }
  this._invKeySchedule = [];
  for (invKsRow = _j = 0; 0 <= ksRows ? _j < ksRows : _j > ksRows; invKsRow = 0 <= ksRows ? ++_j : --_j) {
    ksRow = ksRows - invKsRow;
    t = this._keySchedule[ksRow - (invKsRow % 4 ? 0 : 4)];
    this._invKeySchedule[invKsRow] = invKsRow < 4 || ksRow <= 4 ? t : G.INV_SUB_MIX[0][G.SBOX[t >>> 24]] ^ G.INV_SUB_MIX[1][G.SBOX[(t >>> 16) & 0xff]] ^ G.INV_SUB_MIX[2][G.SBOX[(t >>> 8) & 0xff]] ^ G.INV_SUB_MIX[3][G.SBOX[t & 0xff]];
  }
  return true;
};

AES.prototype.encryptBlock = function(M) {
  M = bufferToArray(new Buffer(M));
  var out = this._doCryptBlock(M, this._keySchedule, G.SUB_MIX, G.SBOX);
  var buf = new Buffer(16);
  buf.writeUInt32BE(out[0], 0);
  buf.writeUInt32BE(out[1], 4);
  buf.writeUInt32BE(out[2], 8);
  buf.writeUInt32BE(out[3], 12);
  return buf;
};

AES.prototype.decryptBlock = function(M) {
  M = bufferToArray(new Buffer(M));
  var temp = [M[3], M[1]];
  M[1] = temp[0];
  M[3] = temp[1];
  var out = this._doCryptBlock(M, this._invKeySchedule, G.INV_SUB_MIX, G.INV_SBOX);
  var buf = new Buffer(16);
  buf.writeUInt32BE(out[0], 0);
  buf.writeUInt32BE(out[3], 4);
  buf.writeUInt32BE(out[2], 8);
  buf.writeUInt32BE(out[1], 12);
  return buf;
};

AES.prototype.scrub = function() {
  scrub_vec(this._keySchedule);
  scrub_vec(this._invKeySchedule);
  scrub_vec(this._key);
};

AES.prototype._doCryptBlock = function(M, keySchedule, SUB_MIX, SBOX) {
  var ksRow, round, s0, s1, s2, s3, t0, t1, t2, t3, _i, _ref;

  s0 = M[0] ^ keySchedule[0];
  s1 = M[1] ^ keySchedule[1];
  s2 = M[2] ^ keySchedule[2];
  s3 = M[3] ^ keySchedule[3];
  ksRow = 4;
  for (round = _i = 1, _ref = this._nRounds; 1 <= _ref ? _i < _ref : _i > _ref; round = 1 <= _ref ? ++_i : --_i) {
    t0 = SUB_MIX[0][s0 >>> 24] ^ SUB_MIX[1][(s1 >>> 16) & 0xff] ^ SUB_MIX[2][(s2 >>> 8) & 0xff] ^ SUB_MIX[3][s3 & 0xff] ^ keySchedule[ksRow++];
    t1 = SUB_MIX[0][s1 >>> 24] ^ SUB_MIX[1][(s2 >>> 16) & 0xff] ^ SUB_MIX[2][(s3 >>> 8) & 0xff] ^ SUB_MIX[3][s0 & 0xff] ^ keySchedule[ksRow++];
    t2 = SUB_MIX[0][s2 >>> 24] ^ SUB_MIX[1][(s3 >>> 16) & 0xff] ^ SUB_MIX[2][(s0 >>> 8) & 0xff] ^ SUB_MIX[3][s1 & 0xff] ^ keySchedule[ksRow++];
    t3 = SUB_MIX[0][s3 >>> 24] ^ SUB_MIX[1][(s0 >>> 16) & 0xff] ^ SUB_MIX[2][(s1 >>> 8) & 0xff] ^ SUB_MIX[3][s2 & 0xff] ^ keySchedule[ksRow++];
    s0 = t0;
    s1 = t1;
    s2 = t2;
    s3 = t3;
  }
  t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
  t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
  t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
  t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];
  return [
    fixup_uint32(t0),
    fixup_uint32(t1),
    fixup_uint32(t2),
    fixup_uint32(t3)
  ];

};




  exports.AES = AES;
}).call(this,require("buffer").Buffer)
},{"buffer":53}],60:[function(require,module,exports){
(function (Buffer){
var aes = require('./aes');
var Transform = require('./cipherBase');
var inherits = require('inherits');
var GHASH = require('./ghash');
var xor = require('./xor');
inherits(StreamCipher, Transform);
module.exports = StreamCipher;

function StreamCipher(mode, key, iv, decrypt) {
  if (!(this instanceof StreamCipher)) {
    return new StreamCipher(mode, key, iv);
  }
  Transform.call(this);
  this._finID = Buffer.concat([iv, new Buffer([0, 0, 0, 1])]);
  iv = Buffer.concat([iv, new Buffer([0, 0, 0, 2])]);
  this._cipher = new aes.AES(key);
  this._prev = new Buffer(iv.length);
  this._cache = new Buffer('');
  this._secCache = new Buffer('');
  this._decrypt = decrypt;
  this._alen = 0;
  this._len = 0;
  iv.copy(this._prev);
  this._mode = mode;
  var h = new Buffer(4);
  h.fill(0);
  this._ghash = new GHASH(this._cipher.encryptBlock(h));
  this._authTag = null;
  this._called = false;
}
StreamCipher.prototype._update = function (chunk) {
  if (!this._called && this._alen) {
    var rump = 16 - (this._alen % 16);
    if (rump <16) {
      rump = new Buffer(rump);
      rump.fill(0);
      this._ghash.update(rump);
    }
  }
  this._called = true;
  var out = this._mode.encrypt(this, chunk);
  if (this._decrypt) {
    this._ghash.update(chunk);
  } else {
    this._ghash.update(out);
  }
  this._len += chunk.length;
  return out;
};
StreamCipher.prototype._final = function () {
  if (this._decrypt && !this._authTag) {
    throw new Error('Unsupported state or unable to authenticate data');
  }
  var tag = xor(this._ghash.final(this._alen * 8, this._len * 8), this._cipher.encryptBlock(this._finID));
  if (this._decrypt) {
    if (xorTest(tag, this._authTag)) {
      throw new Error('Unsupported state or unable to authenticate data');
    }
  } else {
    this._authTag = tag;
  }
  this._cipher.scrub();
};
StreamCipher.prototype.getAuthTag = function getAuthTag () {
  if (!this._decrypt && Buffer.isBuffer(this._authTag)) {
    return this._authTag;
  } else {
    throw new Error('Attempting to get auth tag in unsupported state');
  }
};
StreamCipher.prototype.setAuthTag = function setAuthTag (tag) {
  if (this._decrypt) {
    this._authTag = tag;
  } else {
    throw new Error('Attempting to set auth tag in unsupported state');
  }
};
StreamCipher.prototype.setAAD = function setAAD (buf) {
  if (!this._called) {
    this._ghash.update(buf);
    this._alen += buf.length;
  } else {
    throw new Error('Attempting to set AAD in unsupported state');
  }
};
function xorTest(a, b) {
  var out = 0;
  if (a.length !== b.length) {
    out++;
  }
  var len = Math.min(a.length, b.length);
  var i = -1;
  while (++i < len) {
    out += (a[i] ^ b[i]);
  }
  return out;
}



}).call(this,require("buffer").Buffer)
},{"./aes":59,"./cipherBase":62,"./ghash":65,"./xor":75,"buffer":53,"inherits":195}],61:[function(require,module,exports){
var ciphers = require('./encrypter');
exports.createCipher = exports.Cipher = ciphers.createCipher;
exports.createCipheriv = exports.Cipheriv = ciphers.createCipheriv;
var deciphers = require('./decrypter');
exports.createDecipher = exports.Decipher = deciphers.createDecipher;
exports.createDecipheriv = exports.Decipheriv = deciphers.createDecipheriv;
var modes = require('./modes');
function getCiphers () {
  return Object.keys(modes);
}
exports.listCiphers = exports.getCiphers = getCiphers;

},{"./decrypter":63,"./encrypter":64,"./modes":66}],62:[function(require,module,exports){
(function (Buffer){
var Transform = require('stream').Transform;
var inherits = require('inherits');

module.exports = CipherBase;
inherits(CipherBase, Transform);
function CipherBase() {
  Transform.call(this);
}
CipherBase.prototype.update = function (data, inputEnc, outputEnc) {
  if (typeof data === 'string') {
    data = new Buffer(data, inputEnc);
  }
  var outData = this._update(data);
  if (outputEnc) {
    outData = outData.toString(outputEnc);
  }
  return outData;
};
CipherBase.prototype._transform = function (data, _, next) {
  this.push(this._update(data));
  next();
};
CipherBase.prototype._flush = function (next) {
  try {
    this.push(this._final());
  } catch(e) {
    return next(e);
  }
  next();
};
CipherBase.prototype.final = function (outputEnc) {
  var outData = this._final() || new Buffer('');
  if (outputEnc) {
    outData = outData.toString(outputEnc);
  }
  return outData;
};
}).call(this,require("buffer").Buffer)
},{"buffer":53,"inherits":195,"stream":213}],63:[function(require,module,exports){
(function (Buffer){
var aes = require('./aes');
var Transform = require('./cipherBase');
var inherits = require('inherits');
var modes = require('./modes');
var StreamCipher = require('./streamCipher');
var AuthCipher = require('./authCipher');
var ebtk = require('./EVP_BytesToKey');

inherits(Decipher, Transform);
function Decipher(mode, key, iv) {
  if (!(this instanceof Decipher)) {
    return new Decipher(mode, key, iv);
  }
  Transform.call(this);
  this._cache = new Splitter();
  this._last = void 0;
  this._cipher = new aes.AES(key);
  this._prev = new Buffer(iv.length);
  iv.copy(this._prev);
  this._mode = mode;
  this._autopadding = true;
}
Decipher.prototype._update = function (data) {
  this._cache.add(data);
  var chunk;
  var thing;
  var out = [];
  while ((chunk = this._cache.get(this._autopadding))) {
    thing = this._mode.decrypt(this, chunk);
    out.push(thing);
  }
  return Buffer.concat(out);
};
Decipher.prototype._final = function () {
  var chunk = this._cache.flush();
  if (this._autopadding) {
    return unpad(this._mode.decrypt(this, chunk));
  } else if (chunk) {
    throw new Error('data not multiple of block length');
  }
};
Decipher.prototype.setAutoPadding = function (setTo) {
  this._autopadding = !!setTo;
};
function Splitter() {
   if (!(this instanceof Splitter)) {
    return new Splitter();
  }
  this.cache = new Buffer('');
}
Splitter.prototype.add = function (data) {
  this.cache = Buffer.concat([this.cache, data]);
};

Splitter.prototype.get = function (autoPadding) {
  var out;
  if (autoPadding) {
    if (this.cache.length > 16) {
      out = this.cache.slice(0, 16);
      this.cache = this.cache.slice(16);
      return out;
    }
  } else {
    if (this.cache.length >= 16) {
      out = this.cache.slice(0, 16);
      this.cache = this.cache.slice(16);
      return out;
    }
  }
  return null;
};
Splitter.prototype.flush = function () {
  if (this.cache.length) {
    return this.cache;
  }
};
function unpad(last) {
  var padded = last[15];
  var i = -1;
  while (++i < padded) {
    if (last[(i + (16 - padded))] !== padded) {
      throw new Error('unable to decrypt data');
    }
  }
  if (padded === 16) {
    return;
  }
  return last.slice(0, 16 - padded);
}

var modelist = {
  ECB: require('./modes/ecb'),
  CBC: require('./modes/cbc'),
  CFB: require('./modes/cfb'),
  CFB8: require('./modes/cfb8'),
  CFB1: require('./modes/cfb1'),
  OFB: require('./modes/ofb'),
  CTR: require('./modes/ctr'),
  GCM: require('./modes/ctr')
};


function createDecipheriv(suite, password, iv) {
  var config = modes[suite.toLowerCase()];
  if (!config) {
    throw new TypeError('invalid suite type');
  }
  if (typeof iv === 'string') {
    iv = new Buffer(iv);
  }
  if (typeof password === 'string') {
    password = new Buffer(password);
  }
  if (password.length !== config.key/8) {
    throw new TypeError('invalid key length ' + password.length);
  }
  if (iv.length !== config.iv) {
    throw new TypeError('invalid iv length ' + iv.length);
  }
  if (config.type === 'stream') {
    return new StreamCipher(modelist[config.mode], password, iv, true);
  } else if (config.type === 'auth') {
    return new AuthCipher(modelist[config.mode], password, iv, true);
  }
  return new Decipher(modelist[config.mode], password, iv);
}

function createDecipher (suite, password) {
  var config = modes[suite.toLowerCase()];
  if (!config) {
    throw new TypeError('invalid suite type');
  }
  var keys = ebtk(password, config.key, config.iv);
  return createDecipheriv(suite, keys.key, keys.iv);
}
exports.createDecipher = createDecipher;
exports.createDecipheriv = createDecipheriv;
}).call(this,require("buffer").Buffer)
},{"./EVP_BytesToKey":58,"./aes":59,"./authCipher":60,"./cipherBase":62,"./modes":66,"./modes/cbc":67,"./modes/cfb":68,"./modes/cfb1":69,"./modes/cfb8":70,"./modes/ctr":71,"./modes/ecb":72,"./modes/ofb":73,"./streamCipher":74,"buffer":53,"inherits":195}],64:[function(require,module,exports){
(function (Buffer){
var aes = require('./aes');
var Transform = require('./cipherBase');
var inherits = require('inherits');
var modes = require('./modes');
var ebtk = require('./EVP_BytesToKey');
var StreamCipher = require('./streamCipher');
var AuthCipher = require('./authCipher');
inherits(Cipher, Transform);
function Cipher(mode, key, iv) {
  if (!(this instanceof Cipher)) {
    return new Cipher(mode, key, iv);
  }
  Transform.call(this);
  this._cache = new Splitter();
  this._cipher = new aes.AES(key);
  this._prev = new Buffer(iv.length);
  iv.copy(this._prev);
  this._mode = mode;
  this._autopadding = true;
}
Cipher.prototype._update = function (data) {
  this._cache.add(data);
  var chunk;
  var thing;
  var out = [];
  while ((chunk = this._cache.get())) {
    thing = this._mode.encrypt(this, chunk);
    out.push(thing);
  }
  return Buffer.concat(out);
};
Cipher.prototype._final = function () {
  var chunk = this._cache.flush();
  if (this._autopadding) {
    chunk = this._mode.encrypt(this, chunk);
    this._cipher.scrub();
    return chunk;
  } else if (chunk.toString('hex') !== '10101010101010101010101010101010') {
    this._cipher.scrub();
    throw new Error('data not multiple of block length');
  }
};
Cipher.prototype.setAutoPadding = function (setTo) {
  this._autopadding = !!setTo;
};

function Splitter() {
   if (!(this instanceof Splitter)) {
    return new Splitter();
  }
  this.cache = new Buffer('');
}
Splitter.prototype.add = function (data) {
  this.cache = Buffer.concat([this.cache, data]);
};

Splitter.prototype.get = function () {
  if (this.cache.length > 15) {
    var out = this.cache.slice(0, 16);
    this.cache = this.cache.slice(16);
    return out;
  }
  return null;
};
Splitter.prototype.flush = function () {
  var len = 16 - this.cache.length;
  var padBuff = new Buffer(len);

  var i = -1;
  while (++i < len) {
    padBuff.writeUInt8(len, i);
  }
  var out = Buffer.concat([this.cache, padBuff]);
  return out;
};
var modelist = {
  ECB: require('./modes/ecb'),
  CBC: require('./modes/cbc'),
  CFB: require('./modes/cfb'),
  CFB8: require('./modes/cfb8'),
  CFB1: require('./modes/cfb1'),
  OFB: require('./modes/ofb'),
  CTR: require('./modes/ctr'),
  GCM: require('./modes/ctr')
};

function createCipheriv(suite, password, iv) {
  var config = modes[suite.toLowerCase()];
  if (!config) {
    throw new TypeError('invalid suite type');
  }
  if (typeof iv === 'string') {
    iv = new Buffer(iv);
  }
  if (typeof password === 'string') {
    password = new Buffer(password);
  }
  if (password.length !== config.key/8) {
    throw new TypeError('invalid key length ' + password.length);
  }
  if (iv.length !== config.iv) {
    throw new TypeError('invalid iv length ' + iv.length);
  }
  if (config.type === 'stream') {
    return new StreamCipher(modelist[config.mode], password, iv);
  } else if (config.type === 'auth') {
    return new AuthCipher(modelist[config.mode], password, iv);
  }
  return new Cipher(modelist[config.mode], password, iv);
}
function createCipher (suite, password) {
  var config = modes[suite.toLowerCase()];
  if (!config) {
    throw new TypeError('invalid suite type');
  }
  var keys = ebtk(password, config.key, config.iv);
  return createCipheriv(suite, keys.key, keys.iv);
}

exports.createCipheriv = createCipheriv;
exports.createCipher = createCipher;
}).call(this,require("buffer").Buffer)
},{"./EVP_BytesToKey":58,"./aes":59,"./authCipher":60,"./cipherBase":62,"./modes":66,"./modes/cbc":67,"./modes/cfb":68,"./modes/cfb1":69,"./modes/cfb8":70,"./modes/ctr":71,"./modes/ecb":72,"./modes/ofb":73,"./streamCipher":74,"buffer":53,"inherits":195}],65:[function(require,module,exports){
(function (Buffer){
var zeros = new Buffer(16);
zeros.fill(0);
module.exports = GHASH;
function GHASH(key){
  this.h = key;
  this.state = new Buffer(16);
  this.state.fill(0);
  this.cache = new Buffer('');
}
GHASH.prototype.ghash = function (block) {
  var i = -1;
  while (++i < block.length) {
   this.state[i] ^= block[i];
  }
  this._multiply();
};

GHASH.prototype._multiply = function () {
  var Vi = toArray(this.h);
  var Zi = [0, 0, 0, 0];
  var j, xi, lsb_Vi;
  var i = -1;
  while (++i < 128) {
    xi = (this.state[~~(i/8)] & (1 << (7-i%8))) !== 0;
    if (xi) {
      Zi = xor(Zi, Vi);
    }

    lsb_Vi = (Vi[3] & 1) !== 0;

    for (j=3; j>0; j--) {
      Vi[j] = (Vi[j] >>> 1) | ((Vi[j-1]&1) << 31);
    }
    Vi[0] = Vi[0] >>> 1;

    if (lsb_Vi) {
      Vi[0] = Vi[0] ^ (0xe1 << 24);
    }
  }
  this.state = fromArray(Zi);
};
GHASH.prototype.update = function (buf) {
  this.cache = Buffer.concat([this.cache, buf]);
  var chunk;
  while (this.cache.length >= 16) {
    chunk = this.cache.slice(0, 16);
    this.cache = this.cache.slice(16);
    this.ghash(chunk);
  }
};
GHASH.prototype.final = function (abl, bl) {
  if (this.cache.length) {
    this.ghash(Buffer.concat([this.cache, zeros], 16));
  }
  this.ghash(fromArray([
     0, abl,
     0, bl
   ]));
  return this.state;
};

function toArray(buf) {
  return [
    buf.readUInt32BE(0),
    buf.readUInt32BE(4),
    buf.readUInt32BE(8),
    buf.readUInt32BE(12)
  ];
}
function fromArray(out) {
  out = out.map(fixup_uint32);
  var buf = new Buffer(16);
  buf.writeUInt32BE(out[0], 0);
  buf.writeUInt32BE(out[1], 4);
  buf.writeUInt32BE(out[2], 8);
  buf.writeUInt32BE(out[3], 12);
  return buf;
}
var uint_max = Math.pow(2, 32);
function fixup_uint32(x) {
    var ret, x_pos;
    ret = x > uint_max || x < 0 ? (x_pos = Math.abs(x) % uint_max, x < 0 ? uint_max - x_pos : x_pos) : x;
    return ret;
}
function xor(a, b) {
  return [
    a[0] ^ b[0],
    a[1] ^ b[1],
    a[2] ^ b[2],
    a[3] ^ b[3],
  ];
}
}).call(this,require("buffer").Buffer)
},{"buffer":53}],66:[function(require,module,exports){
exports['aes-128-ecb'] = {
  cipher: 'AES',
  key: 128,
  iv: 0,
  mode: 'ECB',
  type: 'block'
};
exports['aes-192-ecb'] = {
  cipher: 'AES',
  key: 192,
  iv: 0,
  mode: 'ECB',
  type: 'block'
};
exports['aes-256-ecb'] = {
  cipher: 'AES',
  key: 256,
  iv: 0,
  mode: 'ECB',
  type: 'block'
};
exports['aes-128-cbc'] = {
  cipher: 'AES',
  key: 128,
  iv: 16,
  mode: 'CBC',
  type: 'block'
};
exports['aes-192-cbc'] = {
  cipher: 'AES',
  key: 192,
  iv: 16,
  mode: 'CBC',
  type: 'block'
};
exports['aes-256-cbc'] = {
  cipher: 'AES',
  key: 256,
  iv: 16,
  mode: 'CBC',
  type: 'block'
};
exports['aes128'] = exports['aes-128-cbc'];
exports['aes192'] = exports['aes-192-cbc'];
exports['aes256'] = exports['aes-256-cbc'];
exports['aes-128-cfb'] = {
  cipher: 'AES',
  key: 128,
  iv: 16,
  mode: 'CFB',
  type: 'stream'
};
exports['aes-192-cfb'] = {
  cipher: 'AES',
  key: 192,
  iv: 16,
  mode: 'CFB',
  type: 'stream'
};
exports['aes-256-cfb'] = {
  cipher: 'AES',
  key: 256,
  iv: 16,
  mode: 'CFB',
  type: 'stream'
};
exports['aes-128-cfb8'] = {
  cipher: 'AES',
  key: 128,
  iv: 16,
  mode: 'CFB8',
  type: 'stream'
};
exports['aes-192-cfb8'] = {
  cipher: 'AES',
  key: 192,
  iv: 16,
  mode: 'CFB8',
  type: 'stream'
};
exports['aes-256-cfb8'] = {
  cipher: 'AES',
  key: 256,
  iv: 16,
  mode: 'CFB8',
  type: 'stream'
};
exports['aes-128-cfb1'] = {
  cipher: 'AES',
  key: 128,
  iv: 16,
  mode: 'CFB1',
  type: 'stream'
};
exports['aes-192-cfb1'] = {
  cipher: 'AES',
  key: 192,
  iv: 16,
  mode: 'CFB1',
  type: 'stream'
};
exports['aes-256-cfb1'] = {
  cipher: 'AES',
  key: 256,
  iv: 16,
  mode: 'CFB1',
  type: 'stream'
};
exports['aes-128-ofb'] = {
  cipher: 'AES',
  key: 128,
  iv: 16,
  mode: 'OFB',
  type: 'stream'
};
exports['aes-192-ofb'] = {
  cipher: 'AES',
  key: 192,
  iv: 16,
  mode: 'OFB',
  type: 'stream'
};
exports['aes-256-ofb'] = {
  cipher: 'AES',
  key: 256,
  iv: 16,
  mode: 'OFB',
  type: 'stream'
};
exports['aes-128-ctr'] = {
  cipher: 'AES',
  key: 128,
  iv: 16,
  mode: 'CTR',
  type: 'stream'
};
exports['aes-192-ctr'] = {
  cipher: 'AES',
  key: 192,
  iv: 16,
  mode: 'CTR',
  type: 'stream'
};
exports['aes-256-ctr'] = {
  cipher: 'AES',
  key: 256,
  iv: 16,
  mode: 'CTR',
  type: 'stream'
};
exports['aes-128-gcm'] = {
  cipher: 'AES',
  key: 128,
  iv: 12,
  mode: 'GCM',
  type: 'auth'
};
exports['aes-192-gcm'] = {
  cipher: 'AES',
  key: 192,
  iv: 12,
  mode: 'GCM',
  type: 'auth'
};
exports['aes-256-gcm'] = {
  cipher: 'AES',
  key: 256,
  iv: 12,
  mode: 'GCM',
  type: 'auth'
};
},{}],67:[function(require,module,exports){
var xor = require('../xor');
exports.encrypt = function (self, block) {
  var data = xor(block, self._prev);
  self._prev = self._cipher.encryptBlock(data);
  return self._prev;
};
exports.decrypt = function (self, block) {
  var pad = self._prev;
  self._prev = block;
  var out = self._cipher.decryptBlock(block);
  return xor(out, pad);
};
},{"../xor":75}],68:[function(require,module,exports){
(function (Buffer){
var xor = require('../xor');
exports.encrypt = function (self, data, decrypt) {
  var out = new Buffer('');
  var len;
  while (data.length) {
    if (self._cache.length === 0) {
      self._cache = self._cipher.encryptBlock(self._prev);
      self._prev = new Buffer('');
    }
    if (self._cache.length <= data.length) {
      len = self._cache.length;
      out = Buffer.concat([out, encryptStart(self, data.slice(0, len), decrypt)]);
      data = data.slice(len);
    } else {
      out = Buffer.concat([out, encryptStart(self, data, decrypt)]);
      break;
    }
  }
  return out;
};
function encryptStart(self, data, decrypt) {
  var len = data.length;
  var out = xor(data, self._cache);
  self._cache = self._cache.slice(len);
  self._prev = Buffer.concat([self._prev, decrypt?data:out]);
  return out;
}
}).call(this,require("buffer").Buffer)
},{"../xor":75,"buffer":53}],69:[function(require,module,exports){
(function (Buffer){

function encryptByte(self, byte, decrypt) {
  var pad;
  var i = -1;
  var len = 8;
  var out = 0;
  var bit, value;
  while (++i < len) {
    pad = self._cipher.encryptBlock(self._prev);
    bit = (byte & (1 << (7-i))) ? 0x80:0;
    value = pad[0] ^ bit;
    out += ((value&0x80) >> (i%8));
    self._prev = shiftIn(self._prev, decrypt?bit:value);
  }
  return out;
}
exports.encrypt = function (self, chunk, decrypt) {
  var len = chunk.length;
  var out = new Buffer(len);
  var i = -1;
  while (++i < len) {
    out[i] = encryptByte(self, chunk[i], decrypt);
  }
  return out;
};
function shiftIn(buffer, value) {
  var len = buffer.length;
  var i = -1;
  var out = new Buffer(buffer.length);
  buffer = Buffer.concat([buffer, new Buffer([value])]);
  while(++i < len) {
    out[i] = buffer[i]<<1 | buffer[i+1]>>(7);
  }
  return out;
}
}).call(this,require("buffer").Buffer)
},{"buffer":53}],70:[function(require,module,exports){
(function (Buffer){
function encryptByte(self, byte, decrypt) {
  var pad = self._cipher.encryptBlock(self._prev);
  var out = pad[0] ^ byte;
  self._prev = Buffer.concat([self._prev.slice(1), new Buffer([decrypt?byte:out])]);
  return out;
}
exports.encrypt = function (self, chunk, decrypt) {
  var len = chunk.length;
  var out = new Buffer(len);
  var i = -1;
  while (++i < len) {
    out[i] = encryptByte(self, chunk[i], decrypt);
  }
  return out;
};
}).call(this,require("buffer").Buffer)
},{"buffer":53}],71:[function(require,module,exports){
(function (Buffer){
var xor = require('../xor');
function getBlock(self) {
  var out = self._cipher.encryptBlock(self._prev);
  incr32(self._prev);
  return out;
}
exports.encrypt = function (self, chunk) {
  while (self._cache.length < chunk.length) {
    self._cache = Buffer.concat([self._cache, getBlock(self)]);
  }
  var pad = self._cache.slice(0, chunk.length);
  self._cache = self._cache.slice(chunk.length);
  return xor(chunk, pad);
};
function incr32(iv) {
  var len = iv.length;
  var item;
  while (len--) {
    item = iv.readUInt8(len);
    if (item === 255) {
      iv.writeUInt8(0, len);
    } else {
      item++;
      iv.writeUInt8(item, len);
      break;
    }
  }
}
}).call(this,require("buffer").Buffer)
},{"../xor":75,"buffer":53}],72:[function(require,module,exports){
exports.encrypt = function (self, block) {
  return self._cipher.encryptBlock(block);
};
exports.decrypt = function (self, block) {
  return self._cipher.decryptBlock(block);
};
},{}],73:[function(require,module,exports){
(function (Buffer){
var xor = require('../xor');
function getBlock(self) {
  self._prev = self._cipher.encryptBlock(self._prev);
  return self._prev;
}
exports.encrypt = function (self, chunk) {
  while (self._cache.length < chunk.length) {
    self._cache = Buffer.concat([self._cache, getBlock(self)]);
  }
  var pad = self._cache.slice(0, chunk.length);
  self._cache = self._cache.slice(chunk.length);
  return xor(chunk, pad);
};
}).call(this,require("buffer").Buffer)
},{"../xor":75,"buffer":53}],74:[function(require,module,exports){
(function (Buffer){
var aes = require('./aes');
var Transform = require('./cipherBase');
var inherits = require('inherits');

inherits(StreamCipher, Transform);
module.exports = StreamCipher;
function StreamCipher(mode, key, iv, decrypt) {
  if (!(this instanceof StreamCipher)) {
    return new StreamCipher(mode, key, iv);
  }
  Transform.call(this);
  this._cipher = new aes.AES(key);
  this._prev = new Buffer(iv.length);
  this._cache = new Buffer('');
  this._secCache = new Buffer('');
  this._decrypt = decrypt;
  iv.copy(this._prev);
  this._mode = mode;
}
StreamCipher.prototype._update = function (chunk) {
  return this._mode.encrypt(this, chunk, this._decrypt);
};
StreamCipher.prototype._final = function () {
  this._cipher.scrub();
};
}).call(this,require("buffer").Buffer)
},{"./aes":59,"./cipherBase":62,"buffer":53,"inherits":195}],75:[function(require,module,exports){
(function (Buffer){
module.exports = xor;
function xor(a, b) {
  var len = Math.min(a.length, b.length);
  var out = new Buffer(len);
  var i = -1;
  while (++i < len) {
    out.writeUInt8(a[i] ^ b[i], i);
  }
  return out;
}
}).call(this,require("buffer").Buffer)
},{"buffer":53}],76:[function(require,module,exports){
(function (Buffer){
'use strict'
exports['RSA-SHA224'] = exports.sha224WithRSAEncryption = {
  sign: 'rsa',
  hash: 'sha224',
  id: new Buffer('302d300d06096086480165030402040500041c', 'hex')
}
exports['RSA-SHA256'] = exports.sha256WithRSAEncryption = {
  sign: 'rsa',
  hash: 'sha256',
  id: new Buffer('3031300d060960864801650304020105000420', 'hex')
}
exports['RSA-SHA384'] = exports.sha384WithRSAEncryption = {
  sign: 'rsa',
  hash: 'sha384',
  id: new Buffer('3041300d060960864801650304020205000430', 'hex')
}
exports['RSA-SHA512'] = exports.sha512WithRSAEncryption = {
  sign: 'rsa',
  hash: 'sha512',
  id: new Buffer('3051300d060960864801650304020305000440', 'hex')
}
exports['RSA-SHA1'] = {
	sign: 'rsa',
	hash: 'sha1',
	id: new Buffer('3021300906052b0e03021a05000414', 'hex')
}
exports['ecdsa-with-SHA1'] = {
	sign: 'ecdsa',
	hash: 'sha1',
	id: new Buffer('', 'hex')
}
exports.DSA = exports['DSA-SHA1'] = exports['DSA-SHA'] = {
  sign: 'dsa',
  hash: 'sha1',
  id: new Buffer('', 'hex')
}
exports['DSA-SHA224'] = exports['DSA-WITH-SHA224'] = {
  sign: 'dsa',
  hash: 'sha224',
  id: new Buffer('', 'hex')
}
exports['DSA-SHA256'] = exports['DSA-WITH-SHA256'] = {
  sign: 'dsa',
  hash: 'sha256',
  id: new Buffer('', 'hex')
}
exports['DSA-SHA384'] = exports['DSA-WITH-SHA384'] = {
  sign: 'dsa',
  hash: 'sha384',
  id: new Buffer('', 'hex')
}
exports['DSA-SHA512'] = exports['DSA-WITH-SHA512'] = {
  sign: 'dsa',
  hash: 'sha512',
  id: new Buffer('', 'hex')
}
exports['DSA-RIPEMD160'] = {
  sign: 'dsa',
  hash: 'rmd160',
  id: new Buffer('', 'hex')
}
exports['RSA-RIPEMD160'] = exports.ripemd160WithRSA = {
  sign: 'rsa',
  hash: 'rmd160',
  id: new Buffer('3021300906052b2403020105000414', 'hex')
}
exports['RSA-MD5'] = exports.md5WithRSAEncryption = {
  sign: 'rsa',
  hash: 'md5',
  id: new Buffer('3020300c06082a864886f70d020505000410', 'hex')
}

}).call(this,require("buffer").Buffer)
},{"buffer":53}],77:[function(require,module,exports){
(function (Buffer){
'use strict'
var sign = require('./sign')
var verify = require('./verify')
var stream = require('stream')
var inherits = require('inherits')
var _algos = require('./algos')
var createHash = require('create-hash')
var algos = {}
Object.keys(_algos).forEach(function (key) {
  algos[key] = algos[key.toLowerCase()] = _algos[key]
})

exports.createSign = exports.Sign = createSign

function createSign (algorithm) {
  return new Sign(algorithm)
}

exports.createVerify = exports.Verify = createVerify

function createVerify (algorithm) {
  return new Verify(algorithm)
}

inherits(Sign, stream.Writable)

function Sign (algorithm) {
  stream.Writable.call(this)
  var data = algos[algorithm]
  if (!data)
    throw new Error('Unknown message digest')

  this._hashType = data.hash
  this._hash = createHash(data.hash)
  this._tag = data.id
  this._signType = data.sign
}

Sign.prototype._write = function _write (data, _, done) {
  this._hash.update(data)
  done()
}

Sign.prototype.update = function update (data, enc) {
  if (typeof data === 'string')
    data = new Buffer(data, enc)
  this._hash.update(data)
  return this
}

Sign.prototype.sign = function signMethod (key, enc) {
  this.end()
  var hash = this._hash.digest()
  var sig = sign(Buffer.concat([this._tag, hash]), key, this._hashType, this._signType)
  if (enc) {
    sig = sig.toString(enc)
  }
  return sig
}

inherits(Verify, stream.Writable)
function Verify (algorithm) {
  stream.Writable.call(this)
  var data = algos[algorithm]
  if (!data)
    throw new Error('Unknown message digest')

  this._hash = createHash(data.hash)
  this._tag = data.id
  this._signType = data.sign
}

Verify.prototype._write = function _write (data, _, done) {
  this._hash.update(data)
  done()
}

Verify.prototype.update = function update (data, enc) {
  if (typeof data === 'string')
    data = new Buffer(data, enc)

  this._hash.update(data)
  return this
}

Verify.prototype.verify = function verifyMethod (key, sig, enc) {
  this.end()
  var hash = this._hash.digest()
  if (typeof sig === 'string')
    sig = new Buffer(sig, enc)

  return verify(sig, Buffer.concat([this._tag, hash]), key, this._signType)
}

}).call(this,require("buffer").Buffer)
},{"./algos":76,"./sign":120,"./verify":121,"buffer":53,"create-hash":145,"inherits":195,"stream":213}],78:[function(require,module,exports){
'use strict'
exports['1.3.132.0.10'] = 'secp256k1'

exports['1.3.132.0.33'] = 'p224'

exports['1.2.840.10045.3.1.1'] = 'p192'

exports['1.2.840.10045.3.1.7'] = 'p256'

},{}],79:[function(require,module,exports){
(function(module, exports) {

'use strict';


function assert(val, msg) {
  if (!val)
    throw new Error(msg || 'Assertion failed');
}

function inherits(ctor, superCtor) {
  ctor.super_ = superCtor;
  var TempCtor = function () {};
  TempCtor.prototype = superCtor.prototype;
  ctor.prototype = new TempCtor();
  ctor.prototype.constructor = ctor;
}


function BN(number, base, endian) {
  if (number !== null &&
      typeof number === 'object' &&
      Array.isArray(number.words)) {
    return number;
  }

  this.sign = false;
  this.words = null;
  this.length = 0;

  this.red = null;

  if (base === 'le' || base === 'be') {
    endian = base;
    base = 10;
  }

  if (number !== null)
    this._init(number || 0, base || 10, endian || 'be');
}
if (typeof module === 'object')
  module.exports = BN;
else
  exports.BN = BN;

BN.BN = BN;
BN.wordSize = 26;

BN.prototype._init = function init(number, base, endian) {
  if (typeof number === 'number') {
    if (number < 0) {
      this.sign = true;
      number = -number;
    }
    if (number < 0x4000000) {
      this.words = [ number & 0x3ffffff ];
      this.length = 1;
    } else {
      this.words = [
        number & 0x3ffffff,
        (number / 0x4000000) & 0x3ffffff
      ];
      this.length = 2;
    }
    return;
  } else if (typeof number === 'object') {
    return this._initArray(number, base, endian);
  }
  if (base === 'hex')
    base = 16;
  assert(base === (base | 0) && base >= 2 && base <= 36);

  number = number.toString().replace(/\s+/g, '');
  var start = 0;
  if (number[0] === '-')
    start++;

  if (base === 16)
    this._parseHex(number, start);
  else
    this._parseBase(number, base, start);

  if (number[0] === '-')
    this.sign = true;

  this.strip();
};

BN.prototype._initArray = function _initArray(number, base, endian) {
  assert(typeof number.length === 'number');
  this.length = Math.ceil(number.length / 3);
  this.words = new Array(this.length);
  for (var i = 0; i < this.length; i++)
    this.words[i] = 0;

  var off = 0;
  if (endian === 'be') {
    for (var i = number.length - 1, j = 0; i >= 0; i -= 3) {
      var w = number[i] | (number[i - 1] << 8) | (number[i - 2] << 16);
      this.words[j] |= (w << off) & 0x3ffffff;
      this.words[j + 1] = (w >>> (26 - off)) & 0x3ffffff;
      off += 24;
      if (off >= 26) {
        off -= 26;
        j++;
      }
    }
  } else if (endian === 'le') {
    for (var i = 0, j = 0; i < number.length; i += 3) {
      var w = number[i] | (number[i + 1] << 8) | (number[i + 2] << 16);
      this.words[j] |= (w << off) & 0x3ffffff;
      this.words[j + 1] = (w >>> (26 - off)) & 0x3ffffff;
      off += 24;
      if (off >= 26) {
        off -= 26;
        j++;
      }
    }
  }
  return this.strip();
};

function parseHex(str, start, end) {
  var r = 0;
  var len = Math.min(str.length, end);
  for (var i = start; i < len; i++) {
    var c = str.charCodeAt(i) - 48;

    r <<= 4;

    if (c >= 49 && c <= 54)
      r |= c - 49 + 0xa;

    else if (c >= 17 && c <= 22)
      r |= c - 17 + 0xa;

    else
      r |= c & 0xf;
  }
  return r;
}

BN.prototype._parseHex = function _parseHex(number, start) {
  this.length = Math.ceil((number.length - start) / 6);
  this.words = new Array(this.length);
  for (var i = 0; i < this.length; i++)
    this.words[i] = 0;

  var off = 0;
  for (var i = number.length - 6, j = 0; i >= start; i -= 6) {
    var w = parseHex(number, i, i + 6);
    this.words[j] |= (w << off) & 0x3ffffff;
    this.words[j + 1] |= w >>> (26 - off) & 0x3fffff;
    off += 24;
    if (off >= 26) {
      off -= 26;
      j++;
    }
  }
  if (i + 6 !== start) {
    var w = parseHex(number, start, i + 6);
    this.words[j] |= (w << off) & 0x3ffffff;
    this.words[j + 1] |= w >>> (26 - off) & 0x3fffff;
  }
  this.strip();
};

function parseBase(str, start, end, mul) {
  var r = 0;
  var len = Math.min(str.length, end);
  for (var i = start; i < len; i++) {
    var c = str.charCodeAt(i) - 48;

    r *= mul;

    if (c >= 49)
      r += c - 49 + 0xa;

    else if (c >= 17)
      r += c - 17 + 0xa;

    else
      r += c;
  }
  return r;
}

BN.prototype._parseBase = function _parseBase(number, base, start) {
  this.words = [ 0 ];
  this.length = 1;

  for (var limbLen = 0, limbPow = 1; limbPow <= 0x3ffffff; limbPow *= base)
    limbLen++;
  limbLen--;
  limbPow = (limbPow / base) | 0;

  var total = number.length - start;
  var mod = total % limbLen;
  var end = Math.min(total, total - mod) + start;

  var word = 0;
  for (var i = start; i < end; i += limbLen) {
    word = parseBase(number, i, i + limbLen, base);

    this.imuln(limbPow);
    if (this.words[0] + word < 0x4000000)
      this.words[0] += word;
    else
      this._iaddn(word);
  }

  if (mod !== 0) {
    var pow = 1;
    var word = parseBase(number, i, number.length, base);

    for (var i = 0; i < mod; i++)
      pow *= base;
    this.imuln(pow);
    if (this.words[0] + word < 0x4000000)
      this.words[0] += word;
    else
      this._iaddn(word);
  }
};

BN.prototype.copy = function copy(dest) {
  dest.words = new Array(this.length);
  for (var i = 0; i < this.length; i++)
    dest.words[i] = this.words[i];
  dest.length = this.length;
  dest.sign = this.sign;
  dest.red = this.red;
};

BN.prototype.clone = function clone() {
  var r = new BN(null);
  this.copy(r);
  return r;
};

BN.prototype.strip = function strip() {
  while (this.length > 1 && this.words[this.length - 1] === 0)
    this.length--;
  return this._normSign();
};

BN.prototype._normSign = function _normSign() {
  if (this.length === 1 && this.words[0] === 0)
    this.sign = false;
  return this;
};

BN.prototype.inspect = function inspect() {
  return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
};



var zeros = [
  '',
  '0',
  '00',
  '000',
  '0000',
  '00000',
  '000000',
  '0000000',
  '00000000',
  '000000000',
  '0000000000',
  '00000000000',
  '000000000000',
  '0000000000000',
  '00000000000000',
  '000000000000000',
  '0000000000000000',
  '00000000000000000',
  '000000000000000000',
  '0000000000000000000',
  '00000000000000000000',
  '000000000000000000000',
  '0000000000000000000000',
  '00000000000000000000000',
  '000000000000000000000000',
  '0000000000000000000000000'
];

var groupSizes = [
  0, 0,
  25, 16, 12, 11, 10, 9, 8,
  8, 7, 7, 7, 7, 6, 6,
  6, 6, 6, 6, 6, 5, 5,
  5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5
];

var groupBases = [
  0, 0,
  33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216,
  43046721, 10000000, 19487171, 35831808, 62748517, 7529536, 11390625,
  16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632,
  6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149,
  24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176
];

BN.prototype.toString = function toString(base, padding) {
  base = base || 10;
  if (base === 16 || base === 'hex') {
    var out = '';
    var off = 0;
    var padding = padding | 0 || 1;
    var carry = 0;
    for (var i = 0; i < this.length; i++) {
      var w = this.words[i];
      var word = (((w << off) | carry) & 0xffffff).toString(16);
      carry = (w >>> (24 - off)) & 0xffffff;
      if (carry !== 0 || i !== this.length - 1)
        out = zeros[6 - word.length] + word + out;
      else
        out = word + out;
      off += 2;
      if (off >= 26) {
        off -= 26;
        i--;
      }
    }
    if (carry !== 0)
      out = carry.toString(16) + out;
    while (out.length % padding !== 0)
      out = '0' + out;
    if (this.sign)
      out = '-' + out;
    return out;
  } else if (base === (base | 0) && base >= 2 && base <= 36) {
    var groupSize = groupSizes[base];
    var groupBase = groupBases[base];
    var out = '';
    var c = this.clone();
    c.sign = false;
    while (c.cmpn(0) !== 0) {
      var r = c.modn(groupBase).toString(base);
      c = c.idivn(groupBase);

      if (c.cmpn(0) !== 0)
        out = zeros[groupSize - r.length] + r + out;
      else
        out = r + out;
    }
    if (this.cmpn(0) === 0)
      out = '0' + out;
    if (this.sign)
      out = '-' + out;
    return out;
  } else {
    assert(false, 'Base should be between 2 and 36');
  }
};

BN.prototype.toJSON = function toJSON() {
  return this.toString(16);
};

BN.prototype.toArray = function toArray() {
  this.strip();
  var res = new Array(this.byteLength());
  res[0] = 0;

  var q = this.clone();
  for (var i = 0; q.cmpn(0) !== 0; i++) {
    var b = q.andln(0xff);
    q.ishrn(8);

    res[res.length - i - 1] = b;
  }

  return res;
};



BN.prototype._countBits = function _countBits(w) {
  return w >= 0x2000000 ? 26 :
         w >= 0x1000000 ? 25 :
         w >= 0x800000 ? 24 :
         w >= 0x400000 ? 23 :
         w >= 0x200000 ? 22 :
         w >= 0x100000 ? 21 :
         w >= 0x80000 ? 20 :
         w >= 0x40000 ? 19 :
         w >= 0x20000 ? 18 :
         w >= 0x10000 ? 17 :
         w >= 0x8000 ? 16 :
         w >= 0x4000 ? 15 :
         w >= 0x2000 ? 14 :
         w >= 0x1000 ? 13 :
         w >= 0x800 ? 12 :
         w >= 0x400 ? 11 :
         w >= 0x200 ? 10 :
         w >= 0x100 ? 9 :
         w >= 0x80 ? 8 :
         w >= 0x40 ? 7 :
         w >= 0x20 ? 6 :
         w >= 0x10 ? 5 :
         w >= 0x8 ? 4 :
         w >= 0x4 ? 3 :
         w >= 0x2 ? 2 :
         w >= 0x1 ? 1 :
         0;
};

BN.prototype.bitLength = function bitLength() {
  var hi = 0;
  var w = this.words[this.length - 1];
  var hi = this._countBits(w);
  return (this.length - 1) * 26 + hi;
};

BN.prototype.byteLength = function byteLength() {
  return Math.ceil(this.bitLength() / 8);
};

BN.prototype.neg = function neg() {
  if (this.cmpn(0) === 0)
    return this.clone();

  var r = this.clone();
  r.sign = !this.sign;
  return r;
};


BN.prototype.ior = function ior(num) {
  this.sign = this.sign || num.sign;

  while (this.length < num.length)
    this.words[this.length++] = 0;

  for (var i = 0; i < num.length; i++)
    this.words[i] = this.words[i] | num.words[i];

  return this.strip();
};


BN.prototype.or = function or(num) {
  if (this.length > num.length)
    return this.clone().ior(num);
  else
    return num.clone().ior(this);
};


BN.prototype.iand = function iand(num) {
  this.sign = this.sign && num.sign;

  var b;
  if (this.length > num.length)
    b = num;
  else
    b = this;

  for (var i = 0; i < b.length; i++)
    this.words[i] = this.words[i] & num.words[i];

  this.length = b.length;

  return this.strip();
};


BN.prototype.and = function and(num) {
  if (this.length > num.length)
    return this.clone().iand(num);
  else
    return num.clone().iand(this);
};


BN.prototype.ixor = function ixor(num) {
  this.sign = this.sign || num.sign;

  var a;
  var b;
  if (this.length > num.length) {
    a = this;
    b = num;
  } else {
    a = num;
    b = this;
  }

  for (var i = 0; i < b.length; i++)
    this.words[i] = a.words[i] ^ b.words[i];

  if (this !== a)
    for (; i < a.length; i++)
      this.words[i] = a.words[i];

  this.length = a.length;

  return this.strip();
};


BN.prototype.xor = function xor(num) {
  if (this.length > num.length)
    return this.clone().ixor(num);
  else
    return num.clone().ixor(this);
};


BN.prototype.setn = function setn(bit, val) {
  assert(typeof bit === 'number' && bit >= 0);

  var off = (bit / 26) | 0;
  var wbit = bit % 26;

  while (this.length <= off)
    this.words[this.length++] = 0;

  if (val)
    this.words[off] = this.words[off] | (1 << wbit);
  else
    this.words[off] = this.words[off] & ~(1 << wbit);

  return this.strip();
};


BN.prototype.iadd = function iadd(num) {
  if (this.sign && !num.sign) {
    this.sign = false;
    var r = this.isub(num);
    this.sign = !this.sign;
    return this._normSign();

  } else if (!this.sign && num.sign) {
    num.sign = false;
    var r = this.isub(num);
    num.sign = true;
    return r._normSign();
  }

  var a;
  var b;
  if (this.length > num.length) {
    a = this;
    b = num;
  } else {
    a = num;
    b = this;
  }

  var carry = 0;
  for (var i = 0; i < b.length; i++) {
    var r = a.words[i] + b.words[i] + carry;
    this.words[i] = r & 0x3ffffff;
    carry = r >>> 26;
  }
  for (; carry !== 0 && i < a.length; i++) {
    var r = a.words[i] + carry;
    this.words[i] = r & 0x3ffffff;
    carry = r >>> 26;
  }

  this.length = a.length;
  if (carry !== 0) {
    this.words[this.length] = carry;
    this.length++;
  } else if (a !== this) {
    for (; i < a.length; i++)
      this.words[i] = a.words[i];
  }

  return this;
};

BN.prototype.add = function add(num) {
  if (num.sign && !this.sign) {
    num.sign = false;
    var res = this.sub(num);
    num.sign = true;
    return res;
  } else if (!num.sign && this.sign) {
    this.sign = false;
    var res = num.sub(this);
    this.sign = true;
    return res;
  }

  if (this.length > num.length)
    return this.clone().iadd(num);
  else
    return num.clone().iadd(this);
};

BN.prototype.isub = function isub(num) {
  if (num.sign) {
    num.sign = false;
    var r = this.iadd(num);
    num.sign = true;
    return r._normSign();

  } else if (this.sign) {
    this.sign = false;
    this.iadd(num);
    this.sign = true;
    return this._normSign();
  }

  var cmp = this.cmp(num);

  if (cmp === 0) {
    this.sign = false;
    this.length = 1;
    this.words[0] = 0;
    return this;
  }

  var a;
  var b;
  if (cmp > 0) {
    a = this;
    b = num;
  } else {
    a = num;
    b = this;
  }

  var carry = 0;
  for (var i = 0; i < b.length; i++) {
    var r = a.words[i] - b.words[i] + carry;
    carry = r >> 26;
    this.words[i] = r & 0x3ffffff;
  }
  for (; carry !== 0 && i < a.length; i++) {
    var r = a.words[i] + carry;
    carry = r >> 26;
    this.words[i] = r & 0x3ffffff;
  }

  if (carry === 0 && i < a.length && a !== this)
    for (; i < a.length; i++)
      this.words[i] = a.words[i];
  this.length = Math.max(this.length, i);

  if (a !== this)
    this.sign = true;

  return this.strip();
};

BN.prototype.sub = function sub(num) {
  return this.clone().isub(num);
};



BN.prototype._smallMulTo = function _smallMulTo(num, out) {
  out.sign = num.sign !== this.sign;
  out.length = this.length + num.length;

  var carry = 0;
  for (var k = 0; k < out.length - 1; k++) {
    var ncarry = carry >>> 26;
    var rword = carry & 0x3ffffff;
    var maxJ = Math.min(k, num.length - 1);
    for (var j = Math.max(0, k - this.length + 1); j <= maxJ; j++) {
      var i = k - j;
      var a = this.words[i] | 0;
      var b = num.words[j] | 0;
      var r = a * b;

      var lo = r & 0x3ffffff;
      ncarry = (ncarry + ((r / 0x4000000) | 0)) | 0;
      lo = (lo + rword) | 0;
      rword = lo & 0x3ffffff;
      ncarry = (ncarry + (lo >>> 26)) | 0;
    }
    out.words[k] = rword;
    carry = ncarry;
  }
  if (carry !== 0) {
    out.words[k] = carry;
  } else {
    out.length--;
  }

  return out.strip();
};

BN.prototype._bigMulTo = function _bigMulTo(num, out) {
  out.sign = num.sign !== this.sign;
  out.length = this.length + num.length;

  var carry = 0;
  var hncarry = 0;
  for (var k = 0; k < out.length - 1; k++) {
    var ncarry = hncarry;
    hncarry = 0;
    var rword = carry & 0x3ffffff;
    var maxJ = Math.min(k, num.length - 1);
    for (var j = Math.max(0, k - this.length + 1); j <= maxJ; j++) {
      var i = k - j;
      var a = this.words[i] | 0;
      var b = num.words[j] | 0;
      var r = a * b;

      var lo = r & 0x3ffffff;
      ncarry = (ncarry + ((r / 0x4000000) | 0)) | 0;
      lo = (lo + rword) | 0;
      rword = lo & 0x3ffffff;
      ncarry = (ncarry + (lo >>> 26)) | 0;

      hncarry += ncarry >>> 26;
      ncarry &= 0x3ffffff;
    }
    out.words[k] = rword;
    carry = ncarry;
    ncarry = hncarry;
  }
  if (carry !== 0) {
    out.words[k] = carry;
  } else {
    out.length--;
  }

  return out.strip();
};

BN.prototype.mulTo = function mulTo(num, out) {
  var res;
  if (this.length + num.length < 63)
    res = this._smallMulTo(num, out);
  else
    res = this._bigMulTo(num, out);
  return res;
};

BN.prototype.mul = function mul(num) {
  var out = new BN(null);
  out.words = new Array(this.length + num.length);
  return this.mulTo(num, out);
};

BN.prototype.imul = function imul(num) {
  if (this.cmpn(0) === 0 || num.cmpn(0) === 0) {
    this.words[0] = 0;
    this.length = 1;
    return this;
  }

  var tlen = this.length;
  var nlen = num.length;

  this.sign = num.sign !== this.sign;
  this.length = this.length + num.length;
  this.words[this.length - 1] = 0;

  for (var k = this.length - 2; k >= 0; k--) {
    var carry = 0;
    var rword = 0;
    var maxJ = Math.min(k, nlen - 1);
    for (var j = Math.max(0, k - tlen + 1); j <= maxJ; j++) {
      var i = k - j;
      var a = this.words[i];
      var b = num.words[j];
      var r = a * b;

      var lo = r & 0x3ffffff;
      carry += (r / 0x4000000) | 0;
      lo += rword;
      rword = lo & 0x3ffffff;
      carry += lo >>> 26;
    }
    this.words[k] = rword;
    this.words[k + 1] += carry;
    carry = 0;
  }

  var carry = 0;
  for (var i = 1; i < this.length; i++) {
    var w = this.words[i] + carry;
    this.words[i] = w & 0x3ffffff;
    carry = w >>> 26;
  }

  return this.strip();
};

BN.prototype.imuln = function imuln(num) {
  assert(typeof num === 'number');

  var carry = 0;
  for (var i = 0; i < this.length; i++) {
    var w = this.words[i] * num;
    var lo = (w & 0x3ffffff) + (carry & 0x3ffffff);
    carry >>= 26;
    carry += (w / 0x4000000) | 0;
    carry += lo >>> 26;
    this.words[i] = lo & 0x3ffffff;
  }

  if (carry !== 0) {
    this.words[i] = carry;
    this.length++;
  }

  return this;
};

BN.prototype.sqr = function sqr() {
  return this.mul(this);
};

BN.prototype.isqr = function isqr() {
  return this.mul(this);
};

BN.prototype.ishln = function ishln(bits) {
  assert(typeof bits === 'number' && bits >= 0);
  var r = bits % 26;
  var s = (bits - r) / 26;
  var carryMask = (0x3ffffff >>> (26 - r)) << (26 - r);

  if (r !== 0) {
    var carry = 0;
    for (var i = 0; i < this.length; i++) {
      var newCarry = this.words[i] & carryMask;
      var c = (this.words[i] - newCarry) << r;
      this.words[i] = c | carry;
      carry = newCarry >>> (26 - r);
    }
    if (carry) {
      this.words[i] = carry;
      this.length++;
    }
  }

  if (s !== 0) {
    for (var i = this.length - 1; i >= 0; i--)
      this.words[i + s] = this.words[i];
    for (var i = 0; i < s; i++)
      this.words[i] = 0;
    this.length += s;
  }

  return this.strip();
};

BN.prototype.ishrn = function ishrn(bits, hint, extended) {
  assert(typeof bits === 'number' && bits >= 0);
  if (hint)
    hint = (hint - (hint % 26)) / 26;
  else
    hint = 0;

  var r = bits % 26;
  var s = Math.min((bits - r) / 26, this.length);
  var mask = 0x3ffffff ^ ((0x3ffffff >>> r) << r);
  var maskedWords = extended;

  hint -= s;
  hint = Math.max(0, hint);

  if (maskedWords) {
    for (var i = 0; i < s; i++)
      maskedWords.words[i] = this.words[i];
    maskedWords.length = s;
  }

  if (s === 0) {
  } else if (this.length > s) {
    this.length -= s;
    for (var i = 0; i < this.length; i++)
      this.words[i] = this.words[i + s];
  } else {
    this.words[0] = 0;
    this.length = 1;
  }

  var carry = 0;
  for (var i = this.length - 1; i >= 0 && (carry !== 0 || i >= hint); i--) {
    var word = this.words[i];
    this.words[i] = (carry << (26 - r)) | (word >>> r);
    carry = word & mask;
  }

  if (maskedWords && carry !== 0)
    maskedWords.words[maskedWords.length++] = carry;

  if (this.length === 0) {
    this.words[0] = 0;
    this.length = 1;
  }

  this.strip();
  if (extended)
    return { hi: this, lo: maskedWords };

  return this;
};

BN.prototype.shln = function shln(bits) {
  return this.clone().ishln(bits);
};

BN.prototype.shrn = function shrn(bits) {
  return this.clone().ishrn(bits);
};

BN.prototype.testn = function testn(bit) {
  assert(typeof bit === 'number' && bit >= 0);
  var r = bit % 26;
  var s = (bit - r) / 26;
  var q = 1 << r;

  if (this.length <= s) {
    return false;
  }

  var w = this.words[s];

  return !!(w & q);
};

BN.prototype.imaskn = function imaskn(bits) {
  assert(typeof bits === 'number' && bits >= 0);
  var r = bits % 26;
  var s = (bits - r) / 26;

  assert(!this.sign, 'imaskn works only with positive numbers');

  if (r !== 0)
    s++;
  this.length = Math.min(s, this.length);

  if (r !== 0) {
    var mask = 0x3ffffff ^ ((0x3ffffff >>> r) << r);
    this.words[this.length - 1] &= mask;
  }

  return this.strip();
};

BN.prototype.maskn = function maskn(bits) {
  return this.clone().imaskn(bits);
};

BN.prototype.iaddn = function iaddn(num) {
  assert(typeof num === 'number');
  if (num < 0)
    return this.isubn(-num);

  if (this.sign) {
    if (this.length === 1 && this.words[0] < num) {
      this.words[0] = num - this.words[0];
      this.sign = false;
      return this;
    }

    this.sign = false;
    this.isubn(num);
    this.sign = true;
    return this;
  }

  return this._iaddn(num);
};

BN.prototype._iaddn = function _iaddn(num) {
  this.words[0] += num;

  for (var i = 0; i < this.length && this.words[i] >= 0x4000000; i++) {
    this.words[i] -= 0x4000000;
    if (i === this.length - 1)
      this.words[i + 1] = 1;
    else
      this.words[i + 1]++;
  }
  this.length = Math.max(this.length, i + 1);

  return this;
};

BN.prototype.isubn = function isubn(num) {
  assert(typeof num === 'number');
  if (num < 0)
    return this.iaddn(-num);

  if (this.sign) {
    this.sign = false;
    this.iaddn(num);
    this.sign = true;
    return this;
  }

  this.words[0] -= num;

  for (var i = 0; i < this.length && this.words[i] < 0; i++) {
    this.words[i] += 0x4000000;
    this.words[i + 1] -= 1;
  }

  return this.strip();
};

BN.prototype.addn = function addn(num) {
  return this.clone().iaddn(num);
};

BN.prototype.subn = function subn(num) {
  return this.clone().isubn(num);
};

BN.prototype.iabs = function iabs() {
  this.sign = false;

  return this;
};

BN.prototype.abs = function abs() {
  return this.clone().iabs();
};

BN.prototype._ishlnsubmul = function _ishlnsubmul(num, mul, shift) {
  var len = num.length + shift;
  var i;
  if (this.words.length < len) {
    var t = new Array(len);
    for (var i = 0; i < this.length; i++)
      t[i] = this.words[i];
    this.words = t;
  } else {
    i = this.length;
  }

  this.length = Math.max(this.length, len);
  for (; i < this.length; i++)
    this.words[i] = 0;

  var carry = 0;
  for (var i = 0; i < num.length; i++) {
    var w = this.words[i + shift] + carry;
    var right = num.words[i] * mul;
    w -= right & 0x3ffffff;
    carry = (w >> 26) - ((right / 0x4000000) | 0);
    this.words[i + shift] = w & 0x3ffffff;
  }
  for (; i < this.length - shift; i++) {
    var w = this.words[i + shift] + carry;
    carry = w >> 26;
    this.words[i + shift] = w & 0x3ffffff;
  }

  if (carry === 0)
    return this.strip();

  assert(carry === -1);
  carry = 0;
  for (var i = 0; i < this.length; i++) {
    var w = -this.words[i] + carry;
    carry = w >> 26;
    this.words[i] = w & 0x3ffffff;
  }
  this.sign = true;

  return this.strip();
};

BN.prototype._wordDiv = function _wordDiv(num, mode) {
  var shift = this.length - num.length;

  var a = this.clone();
  var b = num;

  var bhi = b.words[b.length - 1];
  for (var shift = 0; bhi < 0x2000000; shift++)
    bhi <<= 1;
  if (shift !== 0) {
    b = b.shln(shift);
    a.ishln(shift);
    bhi = b.words[b.length - 1];
  }

  var m = a.length - b.length;
  var q;

  if (mode !== 'mod') {
    q = new BN(null);
    q.length = m + 1;
    q.words = new Array(q.length);
    for (var i = 0; i < q.length; i++)
      q.words[i] = 0;
  }

  var diff = a.clone()._ishlnsubmul(b, 1, m);
  if (!diff.sign) {
    a = diff;
    if (q)
      q.words[m] = 1;
  }

  for (var j = m - 1; j >= 0; j--) {
    var qj = a.words[b.length + j] * 0x4000000 + a.words[b.length + j - 1];

    qj = Math.min((qj / bhi) | 0, 0x3ffffff);

    a._ishlnsubmul(b, qj, j);
    while (a.sign) {
      qj--;
      a.sign = false;
      a._ishlnsubmul(b, 1, j);
      a.sign = !a.sign;
    }
    if (q)
      q.words[j] = qj;
  }
  if (q)
    q.strip();
  a.strip();

  if (mode !== 'div' && shift !== 0)
    a.ishrn(shift);
  return { div: q ? q : null, mod: a };
};

BN.prototype.divmod = function divmod(num, mode) {
  assert(num.cmpn(0) !== 0);

  if (this.sign && !num.sign) {
    var res = this.neg().divmod(num, mode);
    var div;
    var mod;
    if (mode !== 'mod')
      div = res.div.neg();
    if (mode !== 'div')
      mod = res.mod.cmpn(0) === 0 ? res.mod : num.sub(res.mod);
    return {
      div: div,
      mod: mod
    };
  } else if (!this.sign && num.sign) {
    var res = this.divmod(num.neg(), mode);
    var div;
    if (mode !== 'mod')
      div = res.div.neg();
    return { div: div, mod: res.mod };
  } else if (this.sign && num.sign) {
    return this.neg().divmod(num.neg(), mode);
  }


  if (num.length > this.length || this.cmp(num) < 0)
    return { div: new BN(0), mod: this };

  if (num.length === 1) {
    if (mode === 'div')
      return { div: this.divn(num.words[0]), mod: null };
    else if (mode === 'mod')
      return { div: null, mod: new BN(this.modn(num.words[0])) };
    return {
      div: this.divn(num.words[0]),
      mod: new BN(this.modn(num.words[0]))
    };
  }

  return this._wordDiv(num, mode);
};

BN.prototype.div = function div(num) {
  return this.divmod(num, 'div').div;
};

BN.prototype.mod = function mod(num) {
  return this.divmod(num, 'mod').mod;
};

BN.prototype.divRound = function divRound(num) {
  var dm = this.divmod(num);

  if (dm.mod.cmpn(0) === 0)
    return dm.div;

  var mod = dm.div.sign ? dm.mod.isub(num) : dm.mod;

  var half = num.shrn(1);
  var r2 = num.andln(1);
  var cmp = mod.cmp(half);

  if (cmp < 0 || r2 === 1 && cmp === 0)
    return dm.div;

  return dm.div.sign ? dm.div.isubn(1) : dm.div.iaddn(1);
};

BN.prototype.modn = function modn(num) {
  assert(num <= 0x3ffffff);
  var p = (1 << 26) % num;

  var acc = 0;
  for (var i = this.length - 1; i >= 0; i--)
    acc = (p * acc + this.words[i]) % num;

  return acc;
};

BN.prototype.idivn = function idivn(num) {
  assert(num <= 0x3ffffff);

  var carry = 0;
  for (var i = this.length - 1; i >= 0; i--) {
    var w = this.words[i] + carry * 0x4000000;
    this.words[i] = (w / num) | 0;
    carry = w % num;
  }

  return this.strip();
};

BN.prototype.divn = function divn(num) {
  return this.clone().idivn(num);
};

BN.prototype._egcd = function _egcd(x1, p) {
  assert(!p.sign);
  assert(p.cmpn(0) !== 0);

  var a = this;
  var b = p.clone();

  if (a.sign)
    a = a.mod(p);
  else
    a = a.clone();

  var x2 = new BN(0);
  while (b.isEven())
    b.ishrn(1);
  var delta = b.clone();
  while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
    while (a.isEven()) {
      a.ishrn(1);
      if (x1.isEven())
        x1.ishrn(1);
      else
        x1.iadd(delta).ishrn(1);
    }
    while (b.isEven()) {
      b.ishrn(1);
      if (x2.isEven())
        x2.ishrn(1);
      else
        x2.iadd(delta).ishrn(1);
    }
    if (a.cmp(b) >= 0) {
      a.isub(b);
      x1.isub(x2);
    } else {
      b.isub(a);
      x2.isub(x1);
    }
  }
  if (a.cmpn(1) === 0)
    return x1;
  else
    return x2;
};

BN.prototype.gcd = function gcd(num) {
  if (this.cmpn(0) === 0)
    return num.clone();
  if (num.cmpn(0) === 0)
    return this.clone();

  var a = this.clone();
  var b = num.clone();
  a.sign = false;
  b.sign = false;

  for (var shift = 0; a.isEven() && b.isEven(); shift++) {
    a.ishrn(1);
    b.ishrn(1);
  }

  while (a.isEven())
    a.ishrn(1);

  do {
    while (b.isEven())
      b.ishrn(1);

    if (a.cmp(b) < 0) {
      var t = a;
      a = b;
      b = t;
    }
    a.isub(a.div(b).mul(b));
  } while (a.cmpn(0) !== 0 && b.cmpn(0) !== 0);
  if (a.cmpn(0) === 0)
    return b.ishln(shift);
  else
    return a.ishln(shift);
};

BN.prototype.invm = function invm(num) {
  return this._egcd(new BN(1), num).mod(num);
};

BN.prototype.isEven = function isEven() {
  return (this.words[0] & 1) === 0;
};

BN.prototype.isOdd = function isOdd() {
  return (this.words[0] & 1) === 1;
};

BN.prototype.andln = function andln(num) {
  return this.words[0] & num;
};

BN.prototype.bincn = function bincn(bit) {
  assert(typeof bit === 'number');
  var r = bit % 26;
  var s = (bit - r) / 26;
  var q = 1 << r;

  if (this.length <= s) {
    for (var i = this.length; i < s + 1; i++)
      this.words[i] = 0;
    this.words[s] |= q;
    this.length = s + 1;
    return this;
  }

  var carry = q;
  for (var i = s; carry !== 0 && i < this.length; i++) {
    var w = this.words[i];
    w += carry;
    carry = w >>> 26;
    w &= 0x3ffffff;
    this.words[i] = w;
  }
  if (carry !== 0) {
    this.words[i] = carry;
    this.length++;
  }
  return this;
};

BN.prototype.cmpn = function cmpn(num) {
  var sign = num < 0;
  if (sign)
    num = -num;

  if (this.sign && !sign)
    return -1;
  else if (!this.sign && sign)
    return 1;

  num &= 0x3ffffff;
  this.strip();

  var res;
  if (this.length > 1) {
    res = 1;
  } else {
    var w = this.words[0];
    res = w === num ? 0 : w < num ? -1 : 1;
  }
  if (this.sign)
    res = -res;
  return res;
};

BN.prototype.cmp = function cmp(num) {
  if (this.sign && !num.sign)
    return -1;
  else if (!this.sign && num.sign)
    return 1;

  var res = this.ucmp(num);
  if (this.sign)
    return -res;
  else
    return res;
};

BN.prototype.ucmp = function ucmp(num) {
  if (this.length > num.length)
    return 1;
  else if (this.length < num.length)
    return -1;

  var res = 0;
  for (var i = this.length - 1; i >= 0; i--) {
    var a = this.words[i];
    var b = num.words[i];

    if (a === b)
      continue;
    if (a < b)
      res = -1;
    else if (a > b)
      res = 1;
    break;
  }
  return res;
};

BN.red = function red(num) {
  return new Red(num);
};

BN.prototype.toRed = function toRed(ctx) {
  assert(!this.red, 'Already a number in reduction context');
  assert(!this.sign, 'red works only with positives');
  return ctx.convertTo(this)._forceRed(ctx);
};

BN.prototype.fromRed = function fromRed() {
  assert(this.red, 'fromRed works only with numbers in reduction context');
  return this.red.convertFrom(this);
};

BN.prototype._forceRed = function _forceRed(ctx) {
  this.red = ctx;
  return this;
};

BN.prototype.forceRed = function forceRed(ctx) {
  assert(!this.red, 'Already a number in reduction context');
  return this._forceRed(ctx);
};

BN.prototype.redAdd = function redAdd(num) {
  assert(this.red, 'redAdd works only with red numbers');
  return this.red.add(this, num);
};

BN.prototype.redIAdd = function redIAdd(num) {
  assert(this.red, 'redIAdd works only with red numbers');
  return this.red.iadd(this, num);
};

BN.prototype.redSub = function redSub(num) {
  assert(this.red, 'redSub works only with red numbers');
  return this.red.sub(this, num);
};

BN.prototype.redISub = function redISub(num) {
  assert(this.red, 'redISub works only with red numbers');
  return this.red.isub(this, num);
};

BN.prototype.redShl = function redShl(num) {
  assert(this.red, 'redShl works only with red numbers');
  return this.red.shl(this, num);
};

BN.prototype.redMul = function redMul(num) {
  assert(this.red, 'redMul works only with red numbers');
  this.red._verify2(this, num);
  return this.red.mul(this, num);
};

BN.prototype.redIMul = function redIMul(num) {
  assert(this.red, 'redMul works only with red numbers');
  this.red._verify2(this, num);
  return this.red.imul(this, num);
};

BN.prototype.redSqr = function redSqr() {
  assert(this.red, 'redSqr works only with red numbers');
  this.red._verify1(this);
  return this.red.sqr(this);
};

BN.prototype.redISqr = function redISqr() {
  assert(this.red, 'redISqr works only with red numbers');
  this.red._verify1(this);
  return this.red.isqr(this);
};

BN.prototype.redSqrt = function redSqrt() {
  assert(this.red, 'redSqrt works only with red numbers');
  this.red._verify1(this);
  return this.red.sqrt(this);
};

BN.prototype.redInvm = function redInvm() {
  assert(this.red, 'redInvm works only with red numbers');
  this.red._verify1(this);
  return this.red.invm(this);
};

BN.prototype.redNeg = function redNeg() {
  assert(this.red, 'redNeg works only with red numbers');
  this.red._verify1(this);
  return this.red.neg(this);
};

BN.prototype.redPow = function redPow(num) {
  assert(this.red && !num.red, 'redPow(normalNum)');
  this.red._verify1(this);
  return this.red.pow(this, num);
};

var primes = {
  k256: null,
  p224: null,
  p192: null,
  p25519: null
};

function MPrime(name, p) {
  this.name = name;
  this.p = new BN(p, 16);
  this.n = this.p.bitLength();
  this.k = new BN(1).ishln(this.n).isub(this.p);

  this.tmp = this._tmp();
}

MPrime.prototype._tmp = function _tmp() {
  var tmp = new BN(null);
  tmp.words = new Array(Math.ceil(this.n / 13));
  return tmp;
};

MPrime.prototype.ireduce = function ireduce(num) {
  var r = num;
  var rlen;

  do {
    var pair = r.ishrn(this.n, 0, this.tmp);
    r = this.imulK(pair.hi);
    r = r.iadd(pair.lo);
    rlen = r.bitLength();
  } while (rlen > this.n);

  var cmp = rlen < this.n ? -1 : r.cmp(this.p);
  if (cmp === 0) {
    r.words[0] = 0;
    r.length = 1;
  } else if (cmp > 0) {
    r.isub(this.p);
  } else {
    r.strip();
  }

  return r;
};

MPrime.prototype.imulK = function imulK(num) {
  return num.imul(this.k);
};

function K256() {
  MPrime.call(
    this,
    'k256',
    'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
}
inherits(K256, MPrime);

K256.prototype.imulK = function imulK(num) {
  num.words[num.length] = 0;
  num.words[num.length + 1] = 0;
  num.length += 2;

  var hi;
  var lo = 0;
  for (var i = 0; i < num.length; i++) {
    var w = num.words[i];
    hi = w * 0x40;
    lo += w * 0x3d1;
    hi += (lo / 0x4000000) | 0;
    lo &= 0x3ffffff;

    num.words[i] = lo;

    lo = hi;
  }

  if (num.words[num.length - 1] === 0) {
    num.length--;
    if (num.words[num.length - 1] === 0)
      num.length--;
  }
  return num;
};

function P224() {
  MPrime.call(
    this,
    'p224',
    'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
}
inherits(P224, MPrime);

function P192() {
  MPrime.call(
    this,
    'p192',
    'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
}
inherits(P192, MPrime);

function P25519() {
  MPrime.call(
    this,
    '25519',
    '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
}
inherits(P25519, MPrime);

P25519.prototype.imulK = function imulK(num) {
  var carry = 0;
  for (var i = 0; i < num.length; i++) {
    var hi = num.words[i] * 0x13 + carry;
    var lo = hi & 0x3ffffff;
    hi >>>= 26;

    num.words[i] = lo;
    carry = hi;
  }
  if (carry !== 0)
    num.words[num.length++] = carry;
  return num;
};

BN._prime = function prime(name) {
  if (primes[name])
    return primes[name];

  var prime;
  if (name === 'k256')
    prime = new K256();
  else if (name === 'p224')
    prime = new P224();
  else if (name === 'p192')
    prime = new P192();
  else if (name === 'p25519')
    prime = new P25519();
  else
    throw new Error('Unknown prime ' + name);
  primes[name] = prime;

  return prime;
};

function Red(m) {
  if (typeof m === 'string') {
    var prime = BN._prime(m);
    this.m = prime.p;
    this.prime = prime;
  } else {
    this.m = m;
    this.prime = null;
  }
}

Red.prototype._verify1 = function _verify1(a) {
  assert(!a.sign, 'red works only with positives');
  assert(a.red, 'red works only with red numbers');
};

Red.prototype._verify2 = function _verify2(a, b) {
  assert(!a.sign && !b.sign, 'red works only with positives');
  assert(a.red && a.red === b.red,
         'red works only with red numbers');
};

Red.prototype.imod = function imod(a) {
  if (this.prime)
    return this.prime.ireduce(a)._forceRed(this);
  return a.mod(this.m)._forceRed(this);
};

Red.prototype.neg = function neg(a) {
  var r = a.clone();
  r.sign = !r.sign;
  return r.iadd(this.m)._forceRed(this);
};

Red.prototype.add = function add(a, b) {
  this._verify2(a, b);

  var res = a.add(b);
  if (res.cmp(this.m) >= 0)
    res.isub(this.m);
  return res._forceRed(this);
};

Red.prototype.iadd = function iadd(a, b) {
  this._verify2(a, b);

  var res = a.iadd(b);
  if (res.cmp(this.m) >= 0)
    res.isub(this.m);
  return res;
};

Red.prototype.sub = function sub(a, b) {
  this._verify2(a, b);

  var res = a.sub(b);
  if (res.cmpn(0) < 0)
    res.iadd(this.m);
  return res._forceRed(this);
};

Red.prototype.isub = function isub(a, b) {
  this._verify2(a, b);

  var res = a.isub(b);
  if (res.cmpn(0) < 0)
    res.iadd(this.m);
  return res;
};

Red.prototype.shl = function shl(a, num) {
  this._verify1(a);
  return this.imod(a.shln(num));
};

Red.prototype.imul = function imul(a, b) {
  this._verify2(a, b);
  return this.imod(a.imul(b));
};

Red.prototype.mul = function mul(a, b) {
  this._verify2(a, b);
  return this.imod(a.mul(b));
};

Red.prototype.isqr = function isqr(a) {
  return this.imul(a, a);
};

Red.prototype.sqr = function sqr(a) {
  return this.mul(a, a);
};

Red.prototype.sqrt = function sqrt(a) {
  if (a.cmpn(0) === 0)
    return a.clone();

  var mod3 = this.m.andln(3);
  assert(mod3 % 2 === 1);

  if (mod3 === 3) {
    var pow = this.m.add(new BN(1)).ishrn(2);
    var r = this.pow(a, pow);
    return r;
  }

  var q = this.m.subn(1);
  var s = 0;
  while (q.cmpn(0) !== 0 && q.andln(1) === 0) {
    s++;
    q.ishrn(1);
  }
  assert(q.cmpn(0) !== 0);

  var one = new BN(1).toRed(this);
  var nOne = one.redNeg();

  var lpow = this.m.subn(1).ishrn(1);
  var z = this.m.bitLength();
  z = new BN(2 * z * z).toRed(this);
  while (this.pow(z, lpow).cmp(nOne) !== 0)
    z.redIAdd(nOne);

  var c = this.pow(z, q);
  var r = this.pow(a, q.addn(1).ishrn(1));
  var t = this.pow(a, q);
  var m = s;
  while (t.cmp(one) !== 0) {
    var tmp = t;
    for (var i = 0; tmp.cmp(one) !== 0; i++)
      tmp = tmp.redSqr();
    assert(i < m);
    var b = this.pow(c, new BN(1).ishln(m - i - 1));

    r = r.redMul(b);
    c = b.redSqr();
    t = t.redMul(c);
    m = i;
  }

  return r;
};

Red.prototype.invm = function invm(a) {
  var inv = a._egcd(new BN(1), this.m);
  if (inv.sign) {
    inv.sign = false;
    return this.imod(inv).redNeg();
  } else {
    return this.imod(inv);
  }
};

Red.prototype.pow = function pow(a, num) {
  var w = [];
  var q = num.clone();
  while (q.cmpn(0) !== 0) {
    w.push(q.andln(1));
    q.ishrn(1);
  }

  var res = a;
  for (var i = 0; i < w.length; i++, res = this.sqr(res))
    if (w[i] !== 0)
      break;

  if (++i < w.length) {
    for (var q = this.sqr(res); i < w.length; i++, q = this.sqr(q)) {
      if (w[i] === 0)
        continue;
      res = this.mul(res, q);
    }
  }

  return res;
};

Red.prototype.convertTo = function convertTo(num) {
  return num.clone();
};

Red.prototype.convertFrom = function convertFrom(num) {
  var res = num.clone();
  res.red = null;
  return res;
};


BN.mont = function mont(num) {
  return new Mont(num);
};

function Mont(m) {
  Red.call(this, m);

  this.shift = this.m.bitLength();
  if (this.shift % 26 !== 0)
    this.shift += 26 - (this.shift % 26);
  this.r = new BN(1).ishln(this.shift);
  this.r2 = this.imod(this.r.sqr());
  this.rinv = this.r.invm(this.m);

  this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
  this.minv.sign = true;
  this.minv = this.minv.mod(this.r);
}
inherits(Mont, Red);

Mont.prototype.convertTo = function convertTo(num) {
  return this.imod(num.shln(this.shift));
};

Mont.prototype.convertFrom = function convertFrom(num) {
  var r = this.imod(num.mul(this.rinv));
  r.red = null;
  return r;
};

Mont.prototype.imul = function imul(a, b) {
  if (a.cmpn(0) === 0 || b.cmpn(0) === 0) {
    a.words[0] = 0;
    a.length = 1;
    return a;
  }

  var t = a.imul(b);
  var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
  var u = t.isub(c).ishrn(this.shift);
  var res = u;
  if (u.cmp(this.m) >= 0)
    res = u.isub(this.m);
  else if (u.cmpn(0) < 0)
    res = u.iadd(this.m);

  return res._forceRed(this);
};

Mont.prototype.mul = function mul(a, b) {
  if (a.cmpn(0) === 0 || b.cmpn(0) === 0)
    return new BN(0)._forceRed(this);

  var t = a.mul(b);
  var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
  var u = t.isub(c).ishrn(this.shift);
  var res = u;
  if (u.cmp(this.m) >= 0)
    res = u.isub(this.m);
  else if (u.cmpn(0) < 0)
    res = u.iadd(this.m);

  return res._forceRed(this);
};

Mont.prototype.invm = function invm(a) {
  var res = this.imod(a.invm(this.m).mul(this.r2));
  return res._forceRed(this);
};

})(typeof module === 'undefined' || module, this);

},{}],80:[function(require,module,exports){
(function (Buffer){
var bn = require('bn.js');
var randomBytes = require('randombytes');
module.exports = crt;
function blind(priv) {
  var r = getr(priv);
  var blinder = r.toRed(bn.mont(priv.modulus))
  .redPow(new bn(priv.publicExponent)).fromRed();
  return {
    blinder: blinder,
    unblinder:r.invm(priv.modulus)
  };
}
function crt(msg, priv) {
  var blinds = blind(priv);
  var len = priv.modulus.byteLength();
  var mod = bn.mont(priv.modulus);
  var blinded = new bn(msg).mul(blinds.blinder).mod(priv.modulus);
  var c1 = blinded.toRed(bn.mont(priv.prime1));
  var c2 = blinded.toRed(bn.mont(priv.prime2));
  var qinv = priv.coefficient;
  var p = priv.prime1;
  var q = priv.prime2;
  var m1 = c1.redPow(priv.exponent1);
  var m2 = c2.redPow(priv.exponent2);
  m1 = m1.fromRed();
  m2 = m2.fromRed();
  var h = m1.isub(m2).imul(qinv).mod(p);
  h.imul(q);
  m2.iadd(h);
  var out = new Buffer(m2.imul(blinds.unblinder).mod(priv.modulus).toArray());
  if (out.length < len) {
    var prefix = new Buffer(len - out.length);
    prefix.fill(0);
    out = Buffer.concat([prefix, out], len);
  }
  return out;
}
crt.getr = getr;
function getr(priv) {
  var len = priv.modulus.byteLength();
  var r = new bn(randomBytes(len));
  while (r.cmp(priv.modulus) >=  0 || !r.mod(priv.prime1) || !r.mod(priv.prime2)) {
    r = new bn(randomBytes(len));
  }
  return r;
}
}).call(this,require("buffer").Buffer)
},{"bn.js":79,"buffer":53,"randombytes":193}],81:[function(require,module,exports){
var elliptic = exports;

elliptic.version = require('../package.json').version;
elliptic.utils = require('./elliptic/utils');
elliptic.rand = require('brorand');
elliptic.hmacDRBG = require('./elliptic/hmac-drbg');
elliptic.curve = require('./elliptic/curve');
elliptic.curves = require('./elliptic/curves');

elliptic.ec = require('./elliptic/ec');

},{"../package.json":100,"./elliptic/curve":84,"./elliptic/curves":87,"./elliptic/ec":88,"./elliptic/hmac-drbg":91,"./elliptic/utils":92,"brorand":93}],82:[function(require,module,exports){
var bn = require('bn.js');
var elliptic = require('../../elliptic');

var getNAF = elliptic.utils.getNAF;
var getJSF = elliptic.utils.getJSF;
var assert = elliptic.utils.assert;

function BaseCurve(type, conf) {
  this.type = type;
  this.p = new bn(conf.p, 16);

  this.red = conf.prime ? bn.red(conf.prime) : bn.mont(this.p);

  this.zero = new bn(0).toRed(this.red);
  this.one = new bn(1).toRed(this.red);
  this.two = new bn(2).toRed(this.red);

  this.n = conf.n && new bn(conf.n, 16);
  this.g = conf.g && this.pointFromJSON(conf.g, conf.gRed);

  this._wnafT1 = new Array(4);
  this._wnafT2 = new Array(4);
  this._wnafT3 = new Array(4);
  this._wnafT4 = new Array(4);
}
module.exports = BaseCurve;

BaseCurve.prototype.point = function point() {
  throw new Error('Not implemented');
};

BaseCurve.prototype.validate = function validate(point) {
  throw new Error('Not implemented');
};

BaseCurve.prototype._fixedNafMul = function _fixedNafMul(p, k) {
  var doubles = p._getDoubles();

  var naf = getNAF(k, 1);
  var I = (1 << (doubles.step + 1)) - (doubles.step % 2 === 0 ? 2 : 1);
  I /= 3;

  var repr = [];
  for (var j = 0; j < naf.length; j += doubles.step) {
    var nafW = 0;
    for (var k = j + doubles.step - 1; k >= j; k--)
      nafW = (nafW << 1) + naf[k];
    repr.push(nafW);
  }

  var a = this.jpoint(null, null, null);
  var b = this.jpoint(null, null, null);
  for (var i = I; i > 0; i--) {
    for (var j = 0; j < repr.length; j++) {
      var nafW = repr[j];
      if (nafW === i)
        b = b.mixedAdd(doubles.points[j]);
      else if (nafW === -i)
        b = b.mixedAdd(doubles.points[j].neg());
    }
    a = a.add(b);
  }
  return a.toP();
};

BaseCurve.prototype._wnafMul = function _wnafMul(p, k) {
  var w = 4;

  var nafPoints = p._getNAFPoints(w);
  w = nafPoints.wnd;
  var wnd = nafPoints.points;

  var naf = getNAF(k, w);

  var acc = this.jpoint(null, null, null);
  for (var i = naf.length - 1; i >= 0; i--) {
    for (var k = 0; i >= 0 && naf[i] === 0; i--)
      k++;
    if (i >= 0)
      k++;
    acc = acc.dblp(k);

    if (i < 0)
      break;
    var z = naf[i];
    assert(z !== 0);
    if (p.type === 'affine') {
      if (z > 0)
        acc = acc.mixedAdd(wnd[(z - 1) >> 1]);
      else
        acc = acc.mixedAdd(wnd[(-z - 1) >> 1].neg());
    } else {
      if (z > 0)
        acc = acc.add(wnd[(z - 1) >> 1]);
      else
        acc = acc.add(wnd[(-z - 1) >> 1].neg());
    }
  }
  return p.type === 'affine' ? acc.toP() : acc;
};

BaseCurve.prototype._wnafMulAdd = function _wnafMulAdd(defW,
                                                       points,
                                                       coeffs,
                                                       len) {
  var wndWidth = this._wnafT1;
  var wnd = this._wnafT2;
  var naf = this._wnafT3;

  var max = 0;
  for (var i = 0; i < len; i++) {
    var p = points[i];
    var nafPoints = p._getNAFPoints(defW);
    wndWidth[i] = nafPoints.wnd;
    wnd[i] = nafPoints.points;
  }

  for (var i = len - 1; i >= 1; i -= 2) {
    var a = i - 1;
    var b = i;
    if (wndWidth[a] !== 1 || wndWidth[b] !== 1) {
      naf[a] = getNAF(coeffs[a], wndWidth[a]);
      naf[b] = getNAF(coeffs[b], wndWidth[b]);
      max = Math.max(naf[a].length, max);
      max = Math.max(naf[b].length, max);
      continue;
    }

    var comb = [
      points[a], /* 1 */
      null, /* 3 */
      null, /* 5 */
      points[b] /* 7 */
    ];

    if (points[a].y.cmp(points[b].y) === 0) {
      comb[1] = points[a].add(points[b]);
      comb[2] = points[a].toJ().mixedAdd(points[b].neg());
    } else if (points[a].y.cmp(points[b].y.redNeg()) === 0) {
      comb[1] = points[a].toJ().mixedAdd(points[b]);
      comb[2] = points[a].add(points[b].neg());
    } else {
      comb[1] = points[a].toJ().mixedAdd(points[b]);
      comb[2] = points[a].toJ().mixedAdd(points[b].neg());
    }

    var index = [
      -3, /* -1 -1 */
      -1, /* -1 0 */
      -5, /* -1 1 */
      -7, /* 0 -1 */
      0, /* 0 0 */
      7, /* 0 1 */
      5, /* 1 -1 */
      1, /* 1 0 */
      3  /* 1 1 */
    ];

    var jsf = getJSF(coeffs[a], coeffs[b]);
    max = Math.max(jsf[0].length, max);
    naf[a] = new Array(max);
    naf[b] = new Array(max);
    for (var j = 0; j < max; j++) {
      var ja = jsf[0][j] | 0;
      var jb = jsf[1][j] | 0;

      naf[a][j] = index[(ja + 1) * 3 + (jb + 1)];
      naf[b][j] = 0;
      wnd[a] = comb;
    }
  }

  var acc = this.jpoint(null, null, null);
  var tmp = this._wnafT4;
  for (var i = max; i >= 0; i--) {
    var k = 0;

    while (i >= 0) {
      var zero = true;
      for (var j = 0; j < len; j++) {
        tmp[j] = naf[j][i] | 0;
        if (tmp[j] !== 0)
          zero = false;
      }
      if (!zero)
        break;
      k++;
      i--;
    }
    if (i >= 0)
      k++;
    acc = acc.dblp(k);
    if (i < 0)
      break;

    for (var j = 0; j < len; j++) {
      var z = tmp[j];
      var p;
      if (z === 0)
        continue;
      else if (z > 0)
        p = wnd[j][(z - 1) >> 1];
      else if (z < 0)
        p = wnd[j][(-z - 1) >> 1].neg();

      if (p.type === 'affine')
        acc = acc.mixedAdd(p);
      else
        acc = acc.add(p);
    }
  }
  for (var i = 0; i < len; i++)
    wnd[i] = null;
  return acc.toP();
};

BaseCurve.BasePoint = BasePoint;

function BasePoint(curve, type) {
  this.curve = curve;
  this.type = type;
  this.precomputed = null;
}

BasePoint.prototype.validate = function validate() {
  return this.curve.validate(this);
};

BasePoint.prototype.precompute = function precompute(power, _beta) {
  if (this.precomputed)
    return this;

  var precomputed = {
    doubles: null,
    naf: null,
    beta: null
  };
  precomputed.naf = this._getNAFPoints(8);
  precomputed.doubles = this._getDoubles(4, power);
  precomputed.beta = this._getBeta();
  this.precomputed = precomputed;

  return this;
};

BasePoint.prototype._getDoubles = function _getDoubles(step, power) {
  if (this.precomputed && this.precomputed.doubles)
    return this.precomputed.doubles;

  var doubles = [ this ];
  var acc = this;
  for (var i = 0; i < power; i += step) {
    for (var j = 0; j < step; j++)
      acc = acc.dbl();
    doubles.push(acc);
  }
  return {
    step: step,
    points: doubles
  };
};

BasePoint.prototype._getNAFPoints = function _getNAFPoints(wnd) {
  if (this.precomputed && this.precomputed.naf)
    return this.precomputed.naf;

  var res = [ this ];
  var max = (1 << wnd) - 1;
  var dbl = max === 1 ? null : this.dbl();
  for (var i = 1; i < max; i++)
    res[i] = res[i - 1].add(dbl);
  return {
    wnd: wnd,
    points: res
  };
};

BasePoint.prototype._getBeta = function _getBeta() {
  return null;
};

BasePoint.prototype.dblp = function dblp(k) {
  var r = this;
  for (var i = 0; i < k; i++)
    r = r.dbl();
  return r;
};

},{"../../elliptic":81,"bn.js":79}],83:[function(require,module,exports){
var curve = require('../curve');
var elliptic = require('../../elliptic');
var bn = require('bn.js');
var inherits = require('inherits');
var Base = curve.base;

var getNAF = elliptic.utils.getNAF;
var assert = elliptic.utils.assert;

function EdwardsCurve(conf) {
  this.twisted = conf.a != 1;
  this.mOneA = this.twisted && conf.a == -1;
  this.extended = this.mOneA;

  Base.call(this, 'mont', conf);

  this.a = new bn(conf.a, 16).mod(this.red.m).toRed(this.red);
  this.c = new bn(conf.c, 16).toRed(this.red);
  this.c2 = this.c.redSqr();
  this.d = new bn(conf.d, 16).toRed(this.red);
  this.dd = this.d.redAdd(this.d);

  assert(!this.twisted || this.c.fromRed().cmpn(1) === 0);
  this.oneC = conf.c == 1;
}
inherits(EdwardsCurve, Base);
module.exports = EdwardsCurve;

EdwardsCurve.prototype._mulA = function _mulA(num) {
  if (this.mOneA)
    return num.redNeg();
  else
    return this.a.redMul(num);
};

EdwardsCurve.prototype._mulC = function _mulC(num) {
  if (this.oneC)
    return num;
  else
    return this.c.redMul(num);
};

EdwardsCurve.prototype.point = function point(x, y, z, t) {
  return new Point(this, x, y, z, t);
};

EdwardsCurve.prototype.jpoint = function jpoint(x, y, z, t) {
  return this.point(x, y, z, t);
};

EdwardsCurve.prototype.pointFromJSON = function pointFromJSON(obj) {
  return Point.fromJSON(this, obj);
};

EdwardsCurve.prototype.pointFromX = function pointFromX(odd, x) {
  x = new bn(x, 16);
  if (!x.red)
    x = x.toRed(this.red);

  var x2 = x.redSqr();
  var rhs = this.c2.redSub(this.a.redMul(x2));
  var lhs = this.one.redSub(this.c2.redMul(this.d).redMul(x2));

  var y = rhs.redMul(lhs.redInvm()).redSqrt();
  var isOdd = y.fromRed().isOdd();
  if (odd && !isOdd || !odd && isOdd)
    y = y.redNeg();

  return this.point(x, y, curve.one);
};

EdwardsCurve.prototype.validate = function validate(point) {
  if (point.isInfinity())
    return true;

  point.normalize();

  var x2 = point.x.redSqr();
  var y2 = point.y.redSqr();
  var lhs = x2.redMul(this.a).redAdd(y2);
  var rhs = this.c2.redMul(this.one.redAdd(this.d.redMul(x2).redMul(y2)));

  return lhs.cmp(rhs) === 0;
};

function Point(curve, x, y, z, t) {
  Base.BasePoint.call(this, curve, 'projective');
  if (x === null && y === null && z === null) {
    this.x = this.curve.zero;
    this.y = this.curve.one;
    this.z = this.curve.one;
    this.t = this.curve.zero;
    this.zOne = true;
  } else {
    this.x = new bn(x, 16);
    this.y = new bn(y, 16);
    this.z = z ? new bn(z, 16) : this.curve.one;
    this.t = t && new bn(t, 16);
    if (!this.x.red)
      this.x = this.x.toRed(this.curve.red);
    if (!this.y.red)
      this.y = this.y.toRed(this.curve.red);
    if (!this.z.red)
      this.z = this.z.toRed(this.curve.red);
    if (this.t && !this.t.red)
      this.t = this.t.toRed(this.curve.red);
    this.zOne = this.z === this.curve.one;

    if (this.curve.extended && !this.t) {
      this.t = this.x.redMul(this.y);
      if (!this.zOne)
        this.t = this.t.redMul(this.z.redInvm());
    }
  }
}
inherits(Point, Base.BasePoint);

Point.fromJSON = function fromJSON(curve, obj) {
  return new Point(curve, obj[0], obj[1], obj[2]);
};

Point.prototype.inspect = function inspect() {
  if (this.isInfinity())
    return '<EC Point Infinity>';
  return '<EC Point x: ' + this.x.fromRed().toString(16, 2) +
      ' y: ' + this.y.fromRed().toString(16, 2) +
      ' z: ' + this.z.fromRed().toString(16, 2) + '>';
};

Point.prototype.isInfinity = function isInfinity() {
  return this.x.cmpn(0) === 0 &&
         this.y.cmp(this.z) === 0;
};

Point.prototype._extDbl = function _extDbl() {

  var a = this.x.redSqr();
  var b = this.y.redSqr();
  var c = this.z.redSqr();
  c = c.redIAdd(c);
  var d = this.curve._mulA(a);
  var e = this.x.redAdd(this.y).redSqr().redISub(a).redISub(b);
  var g = d.redAdd(b);
  var f = g.redSub(c);
  var h = d.redSub(b);
  var nx = e.redMul(f);
  var ny = g.redMul(h);
  var nt = e.redMul(h);
  var nz = f.redMul(g);
  return this.curve.point(nx, ny, nz, nt);
};

Point.prototype._projDbl = function _projDbl() {

  var b = this.x.redAdd(this.y).redSqr();
  var c = this.x.redSqr();
  var d = this.y.redSqr();

  if (this.curve.twisted) {
    var e = this.curve._mulA(c);
    var f = e.redAdd(d);
    if (this.zOne) {
      var nx = b.redSub(c).redSub(d).redMul(f.redSub(this.curve.two));
      var ny = f.redMul(e.redSub(d));
      var nz = f.redSqr().redSub(f).redSub(f);
    } else {
      var h = this.z.redSqr();
      var j = f.redSub(h).redISub(h);
      var nx = b.redSub(c).redISub(d).redMul(j);
      var ny = f.redMul(e.redSub(d));
      var nz = f.redMul(j);
    }
  } else {
    var e = c.redAdd(d);
    var h = this.curve._mulC(redMul(this.z)).redSqr();
    var j = e.redSub(h).redSub(h);
    var nx = this.curve._mulC(b.redISub(e)).redMul(j);
    var ny = this.curve._mulC(e).redMul(c.redISub(d));
    var nz = e.redMul(j);
  }
  return this.curve.point(nx, ny, nz);
};

Point.prototype.dbl = function dbl() {
  if (this.isInfinity())
    return this;

  if (this.curve.extended)
    return this._extDbl();
  else
    return this._projDbl();
};

Point.prototype._extAdd = function _extAdd(p) {

  var a = this.y.redSub(this.x).redMul(p.y.redSub(p.x));
  var b = this.y.redAdd(this.x).redMul(p.y.redAdd(p.x));
  var c = this.t.redMul(this.curve.dd).redMul(p.t);
  var d = this.z.redMul(p.z.redAdd(p.z));
  var e = b.redSub(a);
  var f = d.redSub(c);
  var g = d.redAdd(c);
  var h = b.redAdd(a);
  var nx = e.redMul(f);
  var ny = g.redMul(h);
  var nt = e.redMul(h);
  var nz = f.redMul(g);
  return this.curve.point(nx, ny, nz, nt);
};

Point.prototype._projAdd = function _projAdd(p) {

  var a = this.z.redMul(p.z);
  var b = a.redSqr();
  var c = this.x.redMul(p.x);
  var d = this.y.redMul(p.y);
  var e = this.curve.d.redMul(c).redMul(d);
  var f = b.redSub(e);
  var g = b.redAdd(e);
  var tmp = this.x.redAdd(this.y).redMul(p.x.redAdd(p.y)).redISub(c).redISub(d);
  var nx = a.redMul(f).redMul(tmp);
  if (this.curve.twisted) {
    var ny = a.redMul(g).redMul(d.redSub(this.curve._mulA(c)));
    var nz = f.redMul(g);
  } else {
    var ny = a.redMul(g).redMul(d.redSub(c));
    var nz = this.curve._mulC(f).redMul(g);
  }
  return this.curve.point(nx, ny, nz);
};

Point.prototype.add = function add(p) {
  if (this.isInfinity())
    return p;
  if (p.isInfinity())
    return this;

  if (this.curve.extended)
    return this._extAdd(p);
  else
    return this._projAdd(p);
};

Point.prototype.mul = function mul(k) {
  if (this.precomputed && this.precomputed.doubles)
    return this.curve._fixedNafMul(this, k);
  else
    return this.curve._wnafMul(this, k);
};

Point.prototype.mulAdd = function mulAdd(k1, p, k2) {
  return this.curve._wnafMulAdd(1, [ this, p ], [ k1, k2 ], 2);
};

Point.prototype.normalize = function normalize() {
  if (this.zOne)
    return this;

  var zi = this.z.redInvm();
  this.x = this.x.redMul(zi);
  this.y = this.y.redMul(zi);
  if (this.t)
    this.t = this.t.redMul(zi);
  this.z = this.curve.one;
  this.zOne = true;
  return this;
};

Point.prototype.neg = function neg() {
  return this.curve.point(this.x.redNeg(),
                          this.y,
                          this.z,
                          this.t && this.t.redNeg());
};

Point.prototype.getX = function getX() {
  this.normalize();
  return this.x.fromRed();
};

Point.prototype.getY = function getY() {
  this.normalize();
  return this.y.fromRed();
};

Point.prototype.toP = Point.prototype.normalize;
Point.prototype.mixedAdd = Point.prototype.add;

},{"../../elliptic":81,"../curve":84,"bn.js":79,"inherits":195}],84:[function(require,module,exports){
var curve = exports;

curve.base = require('./base');
curve.short = require('./short');
curve.mont = require('./mont');
curve.edwards = require('./edwards');

},{"./base":82,"./edwards":83,"./mont":85,"./short":86}],85:[function(require,module,exports){
var curve = require('../curve');
var elliptic = require('../../elliptic');
var bn = require('bn.js');
var inherits = require('inherits');
var Base = curve.base;

var getNAF = elliptic.utils.getNAF;
var assert = elliptic.utils.assert;

function MontCurve(conf) {
  Base.call(this, 'mont', conf);

  this.a = new bn(conf.a, 16).toRed(this.red);
  this.b = new bn(conf.b, 16).toRed(this.red);
  this.i4 = new bn(4).toRed(this.red).redInvm();
  this.two = new bn(2).toRed(this.red);
  this.a24 = this.i4.redMul(this.a.redAdd(this.two));
}
inherits(MontCurve, Base);
module.exports = MontCurve;

MontCurve.prototype.point = function point(x, z) {
  return new Point(this, x, z);
};

MontCurve.prototype.pointFromJSON = function pointFromJSON(obj) {
  return Point.fromJSON(this, obj);
}

MontCurve.prototype.validate = function validate(point) {
  var x = point.normalize().x;
  var x2 = x.redSqr();
  var rhs = x2.redMul(x).redAdd(x2.redMul(this.a)).redAdd(x);
  var y = rhs.redSqrt();

  return y.redSqr().cmp(rhs) === 0;
};

function Point(curve, x, z) {
  Base.BasePoint.call(this, curve, 'projective');
  if (x === null && z === null) {
    this.x = this.curve.one;
    this.z = this.curve.zero;
  } else {
    this.x = new bn(x, 16);
    this.z = new bn(z, 16);
    if (!this.x.red)
      this.x = this.x.toRed(this.curve.red);
    if (!this.z.red)
      this.z = this.z.toRed(this.curve.red);
  }
}
inherits(Point, Base.BasePoint);

Point.prototype.precompute = function precompute() {
};

Point.fromJSON = function fromJSON(curve, obj) {
  return new Point(curve, obj[0], obj[1] || curve.one);
};

Point.prototype.inspect = function inspect() {
  if (this.isInfinity())
    return '<EC Point Infinity>';
  return '<EC Point x: ' + this.x.fromRed().toString(16, 2) +
      ' z: ' + this.z.fromRed().toString(16, 2) + '>';
};

Point.prototype.isInfinity = function isInfinity() {
  return this.z.cmpn(0) === 0;
};

Point.prototype.dbl = function dbl() {

  var a = this.x.redAdd(this.z);
  var aa = a.redSqr();
  var b = this.x.redSub(this.z);
  var bb = b.redSqr();
  var c = aa.redSub(bb);
  var nx = aa.redMul(bb);
  var nz = c.redMul(bb.redAdd(this.curve.a24.redMul(c)));
  return this.curve.point(nx, nz);
};

Point.prototype.add = function add(p) {
  throw new Error('Not supported on Montgomery curve');
};

Point.prototype.diffAdd = function diffAdd(p, diff) {

  var a = this.x.redAdd(this.z);
  var b = this.x.redSub(this.z);
  var c = p.x.redAdd(p.z);
  var d = p.x.redSub(p.z);
  var da = d.redMul(a);
  var cb = c.redMul(b);
  var nx = diff.z.redMul(da.redAdd(cb).redSqr());
  var nz = diff.x.redMul(da.redISub(cb).redSqr());
  return this.curve.point(nx, nz);
};

Point.prototype.mul = function mul(k) {
  var t = k.clone();
  var a = this; // (N / 2) * Q + Q
  var b = this.curve.point(null, null); // (N / 2) * Q
  var c = this; // Q

  for (var bits = []; t.cmpn(0) !== 0; t.ishrn(1))
    bits.push(t.andln(1));

  for (var i = bits.length - 1; i >= 0; i--) {
    if (bits[i] === 0) {
      a = a.diffAdd(b, c);
      b = b.dbl();
    } else {
      b = a.diffAdd(b, c);
      a = a.dbl();
    }
  }
  return b;
};

Point.prototype.mulAdd = function mulAdd() {
  throw new Error('Not supported on Montgomery curve');
};

Point.prototype.normalize = function normalize() {
  this.x = this.x.redMul(this.z.redInvm());
  this.z = this.curve.one;
  return this;
};

Point.prototype.getX = function getX() {
  this.normalize();

  return this.x.fromRed();
};

},{"../../elliptic":81,"../curve":84,"bn.js":79,"inherits":195}],86:[function(require,module,exports){
var curve = require('../curve');
var elliptic = require('../../elliptic');
var bn = require('bn.js');
var inherits = require('inherits');
var Base = curve.base;

var getNAF = elliptic.utils.getNAF;
var assert = elliptic.utils.assert;

function ShortCurve(conf) {
  Base.call(this, 'short', conf);

  this.a = new bn(conf.a, 16).toRed(this.red);
  this.b = new bn(conf.b, 16).toRed(this.red);
  this.tinv = this.two.redInvm();

  this.zeroA = this.a.fromRed().cmpn(0) === 0;
  this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0;

  this.endo = this._getEndomorphism(conf);
  this._endoWnafT1 = new Array(4);
  this._endoWnafT2 = new Array(4);
}
inherits(ShortCurve, Base);
module.exports = ShortCurve;

ShortCurve.prototype._getEndomorphism = function _getEndomorphism(conf) {
  if (!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)
    return;

  var beta;
  var lambda;
  if (conf.beta) {
    beta = new bn(conf.beta, 16).toRed(this.red);
  } else {
    var betas = this._getEndoRoots(this.p);
    beta = betas[0].cmp(betas[1]) < 0 ? betas[0] : betas[1];
    beta = beta.toRed(this.red);
  }
  if (conf.lambda) {
    lambda = new bn(conf.lambda, 16);
  } else {
    var lambdas = this._getEndoRoots(this.n);
    if (this.g.mul(lambdas[0]).x.cmp(this.g.x.redMul(beta)) === 0) {
      lambda = lambdas[0];
    } else {
      lambda = lambdas[1];
      assert(this.g.mul(lambda).x.cmp(this.g.x.redMul(beta)) === 0);
    }
  }

  var basis;
  if (conf.basis) {
    basis = conf.basis.map(function(vec) {
      return {
        a: new bn(vec.a, 16),
        b: new bn(vec.b, 16),
      };
    });
  } else {
    basis = this._getEndoBasis(lambda);
  }

  return {
    beta: beta,
    lambda: lambda,
    basis: basis
  };
};

ShortCurve.prototype._getEndoRoots = function _getEndoRoots(num) {
  var red = num === this.p ? this.red : bn.mont(num);
  var tinv = new bn(2).toRed(red).redInvm();
  var ntinv = tinv.redNeg();
  var one = new bn(1).toRed(red);

  var s = new bn(3).toRed(red).redNeg().redSqrt().redMul(tinv);

  var l1 = ntinv.redAdd(s).fromRed();
  var l2 = ntinv.redSub(s).fromRed();
  return [ l1, l2 ];
};

ShortCurve.prototype._getEndoBasis = function _getEndoBasis(lambda) {
  var aprxSqrt = this.n.shrn(Math.floor(this.n.bitLength() / 2));

  var u = lambda;
  var v = this.n.clone();
  var x1 = new bn(1);
  var y1 = new bn(0);
  var x2 = new bn(0);
  var y2 = new bn(1);

  var a0;
  var b0;
  var a1;
  var b1;
  var a2;
  var b2;

  var prevR;
  var i = 0;
  while (u.cmpn(0) !== 0) {
    var q = v.div(u);
    var r = v.sub(q.mul(u));
    var x = x2.sub(q.mul(x1));
    var y = y2.sub(q.mul(y1));

    if (!a1 && r.cmp(aprxSqrt) < 0) {
      a0 = prevR.neg();
      b0 = x1;
      a1 = r.neg();
      b1 = x;
    } else if (a1 && ++i === 2) {
      break;
    }
    prevR = r;

    v = u;
    u = r;
    x2 = x1;
    x1 = x;
    y2 = y1;
    y1 = y;
  }
  a2 = r.neg();
  b2 = x;

  var len1 = a1.sqr().add(b1.sqr());
  var len2 = a2.sqr().add(b2.sqr());
  if (len2.cmp(len1) >= 0) {
    a2 = a0;
    b2 = b0;
  }

  if (a1.sign) {
    a1 = a1.neg();
    b1 = b1.neg();
  }
  if (a2.sign) {
    a2 = a2.neg();
    b2 = b2.neg();
  }

  return [
    { a: a1, b: b1 },
    { a: a2, b: b2 }
  ];
};

ShortCurve.prototype._endoSplit = function _endoSplit(k) {
  var basis = this.endo.basis;
  var v1 = basis[0];
  var v2 = basis[1];

  var c1 = v2.b.mul(k).divRound(this.n);
  var c2 = v1.b.neg().mul(k).divRound(this.n);

  var p1 = c1.mul(v1.a);
  var p2 = c2.mul(v2.a);
  var q1 = c1.mul(v1.b);
  var q2 = c2.mul(v2.b);

  var k1 = k.sub(p1).sub(p2);
  var k2 = q1.add(q2).neg();
  return { k1: k1, k2: k2 };
};

ShortCurve.prototype.point = function point(x, y, isRed) {
  return new Point(this, x, y, isRed);
};

ShortCurve.prototype.pointFromX = function pointFromX(odd, x) {
  x = new bn(x, 16);
  if (!x.red)
    x = x.toRed(this.red);

  var y2 = x.redSqr().redMul(x).redIAdd(x.redMul(this.a)).redIAdd(this.b);
  var y = y2.redSqrt();

  var isOdd = y.fromRed().isOdd();
  if (odd && !isOdd || !odd && isOdd)
    y = y.redNeg();

  return this.point(x, y);
};

ShortCurve.prototype.jpoint = function jpoint(x, y, z) {
  return new JPoint(this, x, y, z);
};

ShortCurve.prototype.pointFromJSON = function pointFromJSON(obj, red) {
  return Point.fromJSON(this, obj, red);
};

ShortCurve.prototype.validate = function validate(point) {
  if (point.inf)
    return true;

  var x = point.x;
  var y = point.y;

  var ax = this.a.redMul(x);
  var rhs = x.redSqr().redMul(x).redIAdd(ax).redIAdd(this.b);
  return y.redSqr().redISub(rhs).cmpn(0) === 0;
};

ShortCurve.prototype._endoWnafMulAdd = function _endoWnafMulAdd(points, coeffs) {
  var npoints = this._endoWnafT1;
  var ncoeffs = this._endoWnafT2;
  for (var i = 0; i < points.length; i++) {
    var split = this._endoSplit(coeffs[i]);
    var p = points[i];
    var beta = p._getBeta();

    if (split.k1.sign) {
      split.k1.sign = !split.k1.sign;
      p = p.neg(true);
    }
    if (split.k2.sign) {
      split.k2.sign = !split.k2.sign;
      beta = beta.neg(true);
    }

    npoints[i * 2] = p;
    npoints[i * 2 + 1] = beta;
    ncoeffs[i * 2] = split.k1;
    ncoeffs[i * 2 + 1] = split.k2;
  }
  var res = this._wnafMulAdd(1, npoints, ncoeffs, i * 2);

  for (var j = 0; j < i * 2; j++) {
    npoints[j] = null;
    ncoeffs[j] = null;
  }
  return res;
};

function Point(curve, x, y, isRed) {
  Base.BasePoint.call(this, curve, 'affine');
  if (x === null && y === null) {
    this.x = null;
    this.y = null;
    this.inf = true;
  } else {
    this.x = new bn(x, 16);
    this.y = new bn(y, 16);
    if (isRed) {
      this.x.forceRed(this.curve.red);
      this.y.forceRed(this.curve.red);
    }
    if (!this.x.red)
      this.x = this.x.toRed(this.curve.red);
    if (!this.y.red)
      this.y = this.y.toRed(this.curve.red);
    this.inf = false;
  }
}
inherits(Point, Base.BasePoint);

Point.prototype._getBeta = function _getBeta() {
  if (!this.curve.endo)
    return;

  var pre = this.precomputed;
  if (pre && pre.beta)
    return pre.beta;

  var beta = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
  if (pre) {
    var curve = this.curve;
    function endoMul(p) {
      return curve.point(p.x.redMul(curve.endo.beta), p.y);
    }
    pre.beta = beta;
    beta.precomputed = {
      beta: null,
      naf: pre.naf && {
        wnd: pre.naf.wnd,
        points: pre.naf.points.map(endoMul)
      },
      doubles: pre.doubles && {
        step: pre.doubles.step,
        points: pre.doubles.points.map(endoMul)
      }
    };
  }
  return beta;
};

Point.prototype.toJSON = function toJSON() {
  if (!this.precomputed)
    return [ this.x, this.y ];

  return [ this.x, this.y, this.precomputed && {
    doubles: this.precomputed.doubles && {
      step: this.precomputed.doubles.step,
      points: this.precomputed.doubles.points.slice(1)
    },
    naf: this.precomputed.naf && {
      wnd: this.precomputed.naf.wnd,
      points: this.precomputed.naf.points.slice(1)
    }
  }];
};

Point.fromJSON = function fromJSON(curve, obj, red) {
  if (typeof obj === 'string')
    obj = JSON.parse(obj);
  var res = curve.point(obj[0], obj[1], red);
  if (!obj[2])
    return res;

  function obj2point(obj) {
    return curve.point(obj[0], obj[1], red);
  }

  var pre = obj[2];
  res.precomputed = {
    beta: null,
    doubles: pre.doubles && {
      step: pre.doubles.step,
      points: [ res ].concat(pre.doubles.points.map(obj2point))
    },
    naf: pre.naf && {
      wnd: pre.naf.wnd,
      points: [ res ].concat(pre.naf.points.map(obj2point))
    }
  };
  return res;
};

Point.prototype.inspect = function inspect() {
  if (this.isInfinity())
    return '<EC Point Infinity>';
  return '<EC Point x: ' + this.x.fromRed().toString(16 ,2) +
      ' y: ' + this.y.fromRed().toString(16, 2) + '>';
};

Point.prototype.isInfinity = function isInfinity() {
  return this.inf;
};

Point.prototype.add = function add(p) {
  if (this.inf)
    return p;

  if (p.inf)
    return this;

  if (this.eq(p))
    return this.dbl();

  if (this.neg().eq(p))
    return this.curve.point(null, null);

  if (this.x.cmp(p.x) === 0)
    return this.curve.point(null, null);

  var c = this.y.redSub(p.y);
  if (c.cmpn(0) !== 0)
    c = c.redMul(this.x.redSub(p.x).redInvm());
  var nx = c.redSqr().redISub(this.x).redISub(p.x);
  var ny = c.redMul(this.x.redSub(nx)).redISub(this.y);
  return this.curve.point(nx, ny);
};

Point.prototype.dbl = function dbl() {
  if (this.inf)
    return this;

  var ys1 = this.y.redAdd(this.y);
  if (ys1.cmpn(0) === 0)
    return this.curve.point(null, null);

  var a = this.curve.a;

  var x2 = this.x.redSqr();
  var dyinv = ys1.redInvm();
  var c = x2.redAdd(x2).redIAdd(x2).redIAdd(a).redMul(dyinv);

  var nx = c.redSqr().redISub(this.x.redAdd(this.x));
  var ny = c.redMul(this.x.redSub(nx)).redISub(this.y);
  return this.curve.point(nx, ny);
};

Point.prototype.getX = function getX() {
  return this.x.fromRed();
};

Point.prototype.getY = function getY() {
  return this.y.fromRed();
};

Point.prototype.mul = function mul(k) {
  k = new bn(k, 16);

  if (this.precomputed && this.precomputed.doubles)
    return this.curve._fixedNafMul(this, k);
  else if (this.curve.endo)
    return this.curve._endoWnafMulAdd([ this ], [ k ]);
  else
    return this.curve._wnafMul(this, k);
};

Point.prototype.mulAdd = function mulAdd(k1, p2, k2) {
  var points = [ this, p2 ];
  var coeffs = [ k1, k2 ];
  if (this.curve.endo)
    return this.curve._endoWnafMulAdd(points, coeffs);
  else
    return this.curve._wnafMulAdd(1, points, coeffs, 2);
};

Point.prototype.eq = function eq(p) {
  return this === p ||
         this.inf === p.inf &&
             (this.inf || this.x.cmp(p.x) === 0 && this.y.cmp(p.y) === 0);
};

Point.prototype.neg = function neg(_precompute) {
  if (this.inf)
    return this;

  var res = this.curve.point(this.x, this.y.redNeg());
  if (_precompute && this.precomputed) {
    var pre = this.precomputed;
    function negate(p) {
      return p.neg();
    }
    res.precomputed = {
      naf: pre.naf && {
        wnd: pre.naf.wnd,
        points: pre.naf.points.map(negate)
      },
      doubles: pre.doubles && {
        step: pre.doubles.step,
        points: pre.doubles.points.map(negate)
      }
    };
  }
  return res;
};

Point.prototype.toJ = function toJ() {
  if (this.inf)
    return this.curve.jpoint(null, null, null);

  var res = this.curve.jpoint(this.x, this.y, this.curve.one);
  return res;
};

function JPoint(curve, x, y, z) {
  Base.BasePoint.call(this, curve, 'jacobian');
  if (x === null && y === null && z === null) {
    this.x = this.curve.one;
    this.y = this.curve.one;
    this.z = new bn(0);
  } else {
    this.x = new bn(x, 16);
    this.y = new bn(y, 16);
    this.z = new bn(z, 16);
  }
  if (!this.x.red)
    this.x = this.x.toRed(this.curve.red);
  if (!this.y.red)
    this.y = this.y.toRed(this.curve.red);
  if (!this.z.red)
    this.z = this.z.toRed(this.curve.red);

  this.zOne = this.z === this.curve.one;
}
inherits(JPoint, Base.BasePoint);

JPoint.prototype.toP = function toP() {
  if (this.isInfinity())
    return this.curve.point(null, null);

  var zinv = this.z.redInvm();
  var zinv2 = zinv.redSqr();
  var ax = this.x.redMul(zinv2);
  var ay = this.y.redMul(zinv2).redMul(zinv);

  return this.curve.point(ax, ay);
};

JPoint.prototype.neg = function neg() {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
};

JPoint.prototype.add = function add(p) {
  if (this.isInfinity())
    return p;

  if (p.isInfinity())
    return this;

  var pz2 = p.z.redSqr();
  var z2 = this.z.redSqr();
  var u1 = this.x.redMul(pz2);
  var u2 = p.x.redMul(z2);
  var s1 = this.y.redMul(pz2.redMul(p.z));
  var s2 = p.y.redMul(z2.redMul(this.z));

  var h = u1.redSub(u2);
  var r = s1.redSub(s2);
  if (h.cmpn(0) === 0) {
    if (r.cmpn(0) !== 0)
      return this.curve.jpoint(null, null, null);
    else
      return this.dbl();
  }

  var h2 = h.redSqr();
  var h3 = h2.redMul(h);
  var v = u1.redMul(h2);

  var nx = r.redSqr().redIAdd(h3).redISub(v).redISub(v);
  var ny = r.redMul(v.redISub(nx)).redISub(s1.redMul(h3));
  var nz = this.z.redMul(p.z).redMul(h);

  return this.curve.jpoint(nx, ny, nz);
};

JPoint.prototype.mixedAdd = function mixedAdd(p) {
  if (this.isInfinity())
    return p.toJ();

  if (p.isInfinity())
    return this;

  var z2 = this.z.redSqr();
  var u1 = this.x;
  var u2 = p.x.redMul(z2);
  var s1 = this.y;
  var s2 = p.y.redMul(z2).redMul(this.z);

  var h = u1.redSub(u2);
  var r = s1.redSub(s2);
  if (h.cmpn(0) === 0) {
    if (r.cmpn(0) !== 0)
      return this.curve.jpoint(null, null, null);
    else
      return this.dbl();
  }

  var h2 = h.redSqr();
  var h3 = h2.redMul(h);
  var v = u1.redMul(h2);

  var nx = r.redSqr().redIAdd(h3).redISub(v).redISub(v);
  var ny = r.redMul(v.redISub(nx)).redISub(s1.redMul(h3));
  var nz = this.z.redMul(h);

  return this.curve.jpoint(nx, ny, nz);
};

JPoint.prototype.dblp = function dblp(pow) {
  if (pow === 0)
    return this;
  if (this.isInfinity())
    return this;
  if (!pow)
    return this.dbl();

  if (this.curve.zeroA || this.curve.threeA) {
    var r = this;
    for (var i = 0; i < pow; i++)
      r = r.dbl();
    return r;
  }

  var a = this.curve.a;
  var tinv = this.curve.tinv;

  var jx = this.x;
  var jy = this.y;
  var jz = this.z;
  var jz4 = jz.redSqr().redSqr();

  var jyd = jy.redAdd(jy);
  for (var i = 0; i < pow; i++) {
    var jx2 = jx.redSqr();
    var jyd2 = jyd.redSqr();
    var jyd4 = jyd2.redSqr();
    var c = jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a.redMul(jz4));

    var t1 = jx.redMul(jyd2);
    var nx = c.redSqr().redISub(t1.redAdd(t1));
    var t2 = t1.redISub(nx);
    var dny = c.redMul(t2);
    dny = dny.redIAdd(dny).redISub(jyd4);
    var nz = jyd.redMul(jz);
    if (i + 1 < pow)
      jz4 = jz4.redMul(jyd4);

    jx = nx;
    jz = nz;
    jyd = dny;
  }

  return this.curve.jpoint(jx, jyd.redMul(tinv), jz);
};

JPoint.prototype.dbl = function dbl() {
  if (this.isInfinity())
    return this;

  if (this.curve.zeroA)
    return this._zeroDbl();
  else if (this.curve.threeA)
    return this._threeDbl();
  else
    return this._dbl();
};

JPoint.prototype._zeroDbl = function _zeroDbl() {
  if (this.zOne) {

    var xx = this.x.redSqr();
    var yy = this.y.redSqr();
    var yyyy = yy.redSqr();
    var s = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
    s = s.redIAdd(s);
    var m = xx.redAdd(xx).redIAdd(xx);
    var t = m.redSqr().redISub(s).redISub(s);

    var yyyy8 = yyyy.redIAdd(yyyy);
    yyyy8 = yyyy8.redIAdd(yyyy8);
    yyyy8 = yyyy8.redIAdd(yyyy8);

    var nx = t;
    var ny = m.redMul(s.redISub(t)).redISub(yyyy8);
    var nz = this.y.redAdd(this.y);
  } else {

    var a = this.x.redSqr();
    var b = this.y.redSqr();
    var c = b.redSqr();
    var d = this.x.redAdd(b).redSqr().redISub(a).redISub(c);
    d = d.redIAdd(d);
    var e = a.redAdd(a).redIAdd(a);
    var f = e.redSqr();

    var c8 = c.redIAdd(c);
    c8 = c8.redIAdd(c8);
    c8 = c8.redIAdd(c8);

    var nx = f.redISub(d).redISub(d);
    var ny = e.redMul(d.redISub(nx)).redISub(c8);
    var nz = this.y.redMul(this.z);
    nz = nz.redIAdd(nz);
  }

  return this.curve.jpoint(nx, ny, nz);
};

JPoint.prototype._threeDbl = function _threeDbl() {
  if (this.zOne) {

    var xx = this.x.redSqr();
    var yy = this.y.redSqr();
    var yyyy = yy.redSqr();
    var s = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
    s = s.redIAdd(s);
    var m = xx.redAdd(xx).redIAdd(xx).redIAdd(this.curve.a);
    var t = m.redSqr().redISub(s).redISub(s);
    var nx = t;
    var yyyy8 = yyyy.redIAdd(yyyy);
    yyyy8 = yyyy8.redIAdd(yyyy8);
    yyyy8 = yyyy8.redIAdd(yyyy8);
    var ny = m.redMul(s.redISub(t)).redISub(yyyy8);
    var nz = this.y.redAdd(this.y);
  } else {

    var delta = this.z.redSqr();
    var gamma = this.y.redSqr();
    var beta = this.x.redMul(gamma);
    var alpha = this.x.redSub(delta).redMul(this.x.redAdd(delta));
    alpha = alpha.redAdd(alpha).redIAdd(alpha);
    var beta4 = beta.redIAdd(beta);
    beta4 = beta4.redIAdd(beta4);
    var beta8 = beta4.redAdd(beta4);
    var nx = alpha.redSqr().redISub(beta8);
    var nz = this.y.redAdd(this.z).redSqr().redISub(gamma).redISub(delta);
    var ggamma8 = gamma.redSqr();
    ggamma8 = ggamma8.redIAdd(ggamma8);
    ggamma8 = ggamma8.redIAdd(ggamma8);
    ggamma8 = ggamma8.redIAdd(ggamma8);
    var ny = alpha.redMul(beta4.redISub(nx)).redISub(ggamma8);
  }

  return this.curve.jpoint(nx, ny, nz);
};

JPoint.prototype._dbl = function _dbl() {
  var a = this.curve.a;
  var tinv = this.curve.tinv;

  var jx = this.x;
  var jy = this.y;
  var jz = this.z;
  var jz4 = jz.redSqr().redSqr();

  var jx2 = jx.redSqr();
  var jy2 = jy.redSqr();

  var c = jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a.redMul(jz4));

  var jxd4 = jx.redAdd(jx);
  jxd4 = jxd4.redIAdd(jxd4);
  var t1 = jxd4.redMul(jy2);
  var nx = c.redSqr().redISub(t1.redAdd(t1));
  var t2 = t1.redISub(nx);

  var jyd8 = jy2.redSqr();
  jyd8 = jyd8.redIAdd(jyd8);
  jyd8 = jyd8.redIAdd(jyd8);
  jyd8 = jyd8.redIAdd(jyd8);
  var ny = c.redMul(t2).redISub(jyd8);
  var nz = jy.redAdd(jy).redMul(jz);

  return this.curve.jpoint(nx, ny, nz);
};

JPoint.prototype.trpl = function trpl() {
  if (!this.curve.zeroA)
    return this.dbl().add(this);


  var xx = this.x.redSqr();
  var yy = this.y.redSqr();
  var zz = this.z.redSqr();
  var yyyy = yy.redSqr();
  var m = xx.redAdd(xx).redIAdd(xx);
  var mm = m.redSqr();
  var e = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
  e = e.redIAdd(e);
  e = e.redAdd(e).redIAdd(e);
  e = e.redISub(mm);
  var ee = e.redSqr();
  var t = yyyy.redIAdd(yyyy);
  t = t.redIAdd(t);
  t = t.redIAdd(t);
  t = t.redIAdd(t);
  var u = m.redIAdd(e).redSqr().redISub(mm).redISub(ee).redISub(t);
  var yyu4 = yy.redMul(u);
  yyu4 = yyu4.redIAdd(yyu4);
  yyu4 = yyu4.redIAdd(yyu4);
  var nx = this.x.redMul(ee).redISub(yyu4);
  nx = nx.redIAdd(nx);
  nx = nx.redIAdd(nx);
  var ny = this.y.redMul(u.redMul(t.redISub(u)).redISub(e.redMul(ee)));
  ny = ny.redIAdd(ny);
  ny = ny.redIAdd(ny);
  ny = ny.redIAdd(ny);
  var nz = this.z.redAdd(e).redSqr().redISub(zz).redISub(ee);

  return this.curve.jpoint(nx, ny, nz);
};

JPoint.prototype.mul = function mul(k, kbase) {
  k = new bn(k, kbase);

  return this.curve._wnafMul(this, k);
};

JPoint.prototype.eq = function eq(p) {
  if (p.type === 'affine')
    return this.eq(p.toJ());

  if (this === p)
    return true;

  var z2 = this.z.redSqr();
  var pz2 = p.z.redSqr();
  if (this.x.redMul(pz2).redISub(p.x.redMul(z2)).cmpn(0) !== 0)
    return false;

  var z3 = z2.redMul(this.z);
  var pz3 = pz2.redMul(p.z);
  return this.y.redMul(pz3).redISub(p.y.redMul(z3)).cmpn(0) === 0;
};

JPoint.prototype.inspect = function inspect() {
  if (this.isInfinity())
    return '<EC JPoint Infinity>';
  return '<EC JPoint x: ' + this.x.toString(16, 2) +
      ' y: ' + this.y.toString(16, 2) +
      ' z: ' + this.z.toString(16, 2) + '>';
};

JPoint.prototype.isInfinity = function isInfinity() {
  return this.z.cmpn(0) === 0;
};

},{"../../elliptic":81,"../curve":84,"bn.js":79,"inherits":195}],87:[function(require,module,exports){
var curves = exports;

var hash = require('hash.js');
var bn = require('bn.js');
var elliptic = require('../elliptic');

var assert = elliptic.utils.assert;

function PresetCurve(options) {
  if (options.type === 'short')
    this.curve = new elliptic.curve.short(options);
  else if (options.type === 'edwards')
    this.curve = new elliptic.curve.edwards(options);
  else
    this.curve = new elliptic.curve.mont(options);
  this.g = this.curve.g;
  this.n = this.curve.n;
  this.hash = options.hash;

  assert(this.g.validate(), 'Invalid curve');
  assert(this.g.mul(this.n).isInfinity(), 'Invalid curve, G*N != O');
}
curves.PresetCurve = PresetCurve;

function defineCurve(name, options) {
  Object.defineProperty(curves, name, {
    configurable: true,
    enumerable: true,
    get: function() {
      var curve = new PresetCurve(options);
      Object.defineProperty(curves, name, {
        configurable: true,
        enumerable: true,
        value: curve
      });
      return curve;
    }
  });
}

defineCurve('p192', {
  type: 'short',
  prime: 'p192',
  p: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff',
  a: 'ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc',
  b: '64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1',
  n: 'ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831',
  hash: hash.sha256,
  gRed: false,
  g: [
    '188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012',
    '07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811'
  ],
});

defineCurve('p224', {
  type: 'short',
  prime: 'p224',
  p: 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001',
  a: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe',
  b: 'b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4',
  n: 'ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d',
  hash: hash.sha256,
  gRed: false,
  g: [
    'b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21',
    'bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34'
  ],
});

defineCurve('p256', {
  type: 'short',
  prime: null,
  p: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff',
  a: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc',
  b: '5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b',
  n: 'ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551',
  hash: hash.sha256,
  gRed: false,
  g: [
    '6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296',
    '4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5'
  ],
});

defineCurve('curve25519', {
  type: 'mont',
  prime: 'p25519',
  p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
  a: '76d06',
  b: '0',
  n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
  hash: hash.sha256,
  gRed: false,
  g: [
    '9'
  ]
});

defineCurve('ed25519', {
  type: 'edwards',
  prime: 'p25519',
  p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
  a: '-1',
  c: '1',
  d: '52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3',
  n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
  hash: hash.sha256,
  gRed: false,
  g: [
    '216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a',

    '6666666666666666666666666666666666666666666666666666666666666658'
  ]
});

defineCurve('secp256k1', {
  type: 'short',
  prime: 'k256',
  p: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f',
  a: '0',
  b: '7',
  n: 'ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141',
  h: '1',
  hash: hash.sha256,

  beta: '7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee',
  lambda: '5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72',
  basis: [
    {
      a: '3086d221a7d46bcde86c90e49284eb15',
      b: '-e4437ed6010e88286f547fa90abfe4c3'
    },
    {
      a: '114ca50f7a8e2f3f657c1108d9d44cfd8',
      b: '3086d221a7d46bcde86c90e49284eb15'
    }
  ],

  gRed: false,
  g: [
    '79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798',
    '483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8',
    {
      'doubles': {
        'step': 4,
        'points': [
          [
            'e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a',
            'f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821'
          ],
          [
            '8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508',
            '11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf'
          ],
          [
            '175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739',
            'd3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695'
          ],
          [
            '363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640',
            '4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9'
          ],
          [
            '8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c',
            '4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36'
          ],
          [
            '723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda',
            '96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f'
          ],
          [
            'eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa',
            '5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999'
          ],
          [
            '100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0',
            'cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09'
          ],
          [
            'e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d',
            '9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d'
          ],
          [
            'feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d',
            'e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088'
          ],
          [
            'da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1',
            '9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d'
          ],
          [
            '53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0',
            '5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8'
          ],
          [
            '8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047',
            '10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a'
          ],
          [
            '385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862',
            '283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453'
          ],
          [
            '6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7',
            '7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160'
          ],
          [
            '3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd',
            '56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0'
          ],
          [
            '85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83',
            '7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6'
          ],
          [
            '948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a',
            '53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589'
          ],
          [
            '6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8',
            'bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17'
          ],
          [
            'e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d',
            '4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda'
          ],
          [
            'e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725',
            '7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd'
          ],
          [
            '213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754',
            '4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2'
          ],
          [
            '4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c',
            '17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6'
          ],
          [
            'fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6',
            '6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f'
          ],
          [
            '76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39',
            'c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01'
          ],
          [
            'c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891',
            '893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3'
          ],
          [
            'd895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b',
            'febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f'
          ],
          [
            'b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03',
            '2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7'
          ],
          [
            'e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d',
            'eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78'
          ],
          [
            'a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070',
            '7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1'
          ],
          [
            '90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4',
            'e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150'
          ],
          [
            '8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da',
            '662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82'
          ],
          [
            'e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11',
            '1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc'
          ],
          [
            '8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e',
            'efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b'
          ],
          [
            'e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41',
            '2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51'
          ],
          [
            'b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef',
            '67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45'
          ],
          [
            'd68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8',
            'db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120'
          ],
          [
            '324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d',
            '648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84'
          ],
          [
            '4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96',
            '35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d'
          ],
          [
            '9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd',
            'ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d'
          ],
          [
            '6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5',
            '9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8'
          ],
          [
            'a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266',
            '40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8'
          ],
          [
            '7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71',
            '34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac'
          ],
          [
            '928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac',
            'c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f'
          ],
          [
            '85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751',
            '1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962'
          ],
          [
            'ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e',
            '493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907'
          ],
          [
            '827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241',
            'c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec'
          ],
          [
            'eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3',
            'be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d'
          ],
          [
            'e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f',
            '4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414'
          ],
          [
            '1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19',
            'aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd'
          ],
          [
            '146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be',
            'b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0'
          ],
          [
            'fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9',
            '6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811'
          ],
          [
            'da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2',
            '8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1'
          ],
          [
            'a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13',
            '7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c'
          ],
          [
            '174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c',
            'ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73'
          ],
          [
            '959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba',
            '2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd'
          ],
          [
            'd2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151',
            'e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405'
          ],
          [
            '64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073',
            'd99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589'
          ],
          [
            '8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458',
            '38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e'
          ],
          [
            '13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b',
            '69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27'
          ],
          [
            'bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366',
            'd3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1'
          ],
          [
            '8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa',
            '40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482'
          ],
          [
            '8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0',
            '620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945'
          ],
          [
            'dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787',
            '7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573'
          ],
          [
            'f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e',
            'ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82'
          ]
        ]
      },
      'naf': {
        'wnd': 7,
        'points': [
          [
            'f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9',
            '388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672'
          ],
          [
            '2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4',
            'd8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6'
          ],
          [
            '5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc',
            '6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da'
          ],
          [
            'acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe',
            'cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37'
          ],
          [
            '774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb',
            'd984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b'
          ],
          [
            'f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8',
            'ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81'
          ],
          [
            'd7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e',
            '581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58'
          ],
          [
            'defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34',
            '4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77'
          ],
          [
            '2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c',
            '85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a'
          ],
          [
            '352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5',
            '321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c'
          ],
          [
            '2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f',
            '2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67'
          ],
          [
            '9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714',
            '73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402'
          ],
          [
            'daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729',
            'a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55'
          ],
          [
            'c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db',
            '2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482'
          ],
          [
            '6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4',
            'e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82'
          ],
          [
            '1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5',
            'b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396'
          ],
          [
            '605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479',
            '2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49'
          ],
          [
            '62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d',
            '80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf'
          ],
          [
            '80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f',
            '1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a'
          ],
          [
            '7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb',
            'd0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7'
          ],
          [
            'd528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9',
            'eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933'
          ],
          [
            '49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963',
            '758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a'
          ],
          [
            '77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74',
            '958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6'
          ],
          [
            'f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530',
            'e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37'
          ],
          [
            '463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b',
            '5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e'
          ],
          [
            'f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247',
            'cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6'
          ],
          [
            'caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1',
            'cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476'
          ],
          [
            '2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120',
            '4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40'
          ],
          [
            '7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435',
            '91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61'
          ],
          [
            '754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18',
            '673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683'
          ],
          [
            'e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8',
            '59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5'
          ],
          [
            '186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb',
            '3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b'
          ],
          [
            'df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f',
            '55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417'
          ],
          [
            '5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143',
            'efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868'
          ],
          [
            '290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba',
            'e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a'
          ],
          [
            'af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45',
            'f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6'
          ],
          [
            '766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a',
            '744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996'
          ],
          [
            '59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e',
            'c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e'
          ],
          [
            'f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8',
            'e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d'
          ],
          [
            '7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c',
            '30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2'
          ],
          [
            '948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519',
            'e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e'
          ],
          [
            '7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab',
            '100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437'
          ],
          [
            '3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca',
            'ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311'
          ],
          [
            'd3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf',
            '8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4'
          ],
          [
            '1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610',
            '68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575'
          ],
          [
            '733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4',
            'f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d'
          ],
          [
            '15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c',
            'd56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d'
          ],
          [
            'a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940',
            'edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629'
          ],
          [
            'e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980',
            'a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06'
          ],
          [
            '311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3',
            '66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374'
          ],
          [
            '34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf',
            '9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee'
          ],
          [
            'f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63',
            '4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1'
          ],
          [
            'd7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448',
            'fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b'
          ],
          [
            '32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf',
            '5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661'
          ],
          [
            '7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5',
            '8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6'
          ],
          [
            'ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6',
            '8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e'
          ],
          [
            '16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5',
            '5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d'
          ],
          [
            'eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99',
            'f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc'
          ],
          [
            '78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51',
            'f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4'
          ],
          [
            '494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5',
            '42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c'
          ],
          [
            'a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5',
            '204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b'
          ],
          [
            'c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997',
            '4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913'
          ],
          [
            '841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881',
            '73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154'
          ],
          [
            '5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5',
            '39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865'
          ],
          [
            '36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66',
            'd2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc'
          ],
          [
            '336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726',
            'ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224'
          ],
          [
            '8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede',
            '6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e'
          ],
          [
            '1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94',
            '60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6'
          ],
          [
            '85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31',
            '3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511'
          ],
          [
            '29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51',
            'b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b'
          ],
          [
            'a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252',
            'ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2'
          ],
          [
            '4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5',
            'cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c'
          ],
          [
            'd24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b',
            '6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3'
          ],
          [
            'ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4',
            '322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d'
          ],
          [
            'af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f',
            '6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700'
          ],
          [
            'e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889',
            '2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4'
          ],
          [
            '591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246',
            'b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196'
          ],
          [
            '11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984',
            '998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4'
          ],
          [
            '3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a',
            'b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257'
          ],
          [
            'cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030',
            'bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13'
          ],
          [
            'c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197',
            '6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096'
          ],
          [
            'c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593',
            'c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38'
          ],
          [
            'a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef',
            '21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f'
          ],
          [
            '347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38',
            '60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448'
          ],
          [
            'da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a',
            '49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a'
          ],
          [
            'c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111',
            '5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4'
          ],
          [
            '4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502',
            '7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437'
          ],
          [
            '3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea',
            'be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7'
          ],
          [
            'cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26',
            '8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d'
          ],
          [
            'b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986',
            '39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a'
          ],
          [
            'd4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e',
            '62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54'
          ],
          [
            '48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4',
            '25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77'
          ],
          [
            'dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda',
            'ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517'
          ],
          [
            '6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859',
            'cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10'
          ],
          [
            'e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f',
            'f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125'
          ],
          [
            'eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c',
            '6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e'
          ],
          [
            '13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942',
            'fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1'
          ],
          [
            'ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a',
            '1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2'
          ],
          [
            'b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80',
            '5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423'
          ],
          [
            'ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d',
            '438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8'
          ],
          [
            '8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1',
            'cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758'
          ],
          [
            '52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63',
            'c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375'
          ],
          [
            'e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352',
            '6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d'
          ],
          [
            '7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193',
            'ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec'
          ],
          [
            '5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00',
            '9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0'
          ],
          [
            '32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58',
            'ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c'
          ],
          [
            'e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7',
            'd3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4'
          ],
          [
            '8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8',
            'c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f'
          ],
          [
            '4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e',
            '67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649'
          ],
          [
            '3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d',
            'cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826'
          ],
          [
            '674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b',
            '299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5'
          ],
          [
            'd32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f',
            'f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87'
          ],
          [
            '30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6',
            '462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b'
          ],
          [
            'be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297',
            '62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc'
          ],
          [
            '93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a',
            '7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c'
          ],
          [
            'b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c',
            'ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f'
          ],
          [
            'd5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52',
            '4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a'
          ],
          [
            'd3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb',
            'bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46'
          ],
          [
            '463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065',
            'bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f'
          ],
          [
            '7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917',
            '603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03'
          ],
          [
            '74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9',
            'cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08'
          ],
          [
            '30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3',
            '553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8'
          ],
          [
            '9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57',
            '712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373'
          ],
          [
            '176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66',
            'ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3'
          ],
          [
            '75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8',
            '9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8'
          ],
          [
            '809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721',
            '9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1'
          ],
          [
            '1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180',
            '4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9'
          ]
        ]
      }
    }
  ]
});

},{"../elliptic":81,"bn.js":79,"hash.js":94}],88:[function(require,module,exports){
var bn = require('bn.js');
var elliptic = require('../../elliptic');
var utils = elliptic.utils;
var assert = utils.assert;

var KeyPair = require('./key');
var Signature = require('./signature');

function EC(options) {
  if (!(this instanceof EC))
    return new EC(options);

  if (typeof options === 'string') {
    assert(elliptic.curves.hasOwnProperty(options), 'Unknown curve ' + options);

    options = elliptic.curves[options];
  }

  if (options instanceof elliptic.curves.PresetCurve)
    options = { curve: options };

  this.curve = options.curve.curve;
  this.n = this.curve.n;
  this.nh = this.n.shrn(1);
  this.g = this.curve.g;

  this.g = options.curve.g;
  this.g.precompute(options.curve.n.bitLength() + 1);

  this.hash = options.hash || options.curve.hash;
}
module.exports = EC;

EC.prototype.keyPair = function keyPair(priv, pub) {
  return new KeyPair(this, priv, pub);
};

EC.prototype.genKeyPair = function genKeyPair(options) {
  if (!options)
    options = {};

  var drbg = new elliptic.hmacDRBG({
    hash: this.hash,
    pers: options.pers,
    entropy: options.entropy || elliptic.rand(this.hash.hmacStrength),
    nonce: this.n.toArray()
  });

  var bytes = this.n.byteLength();
  var ns2 = this.n.sub(new bn(2));
  do {
    var priv = new bn(drbg.generate(bytes));
    if (priv.cmp(ns2) > 0)
      continue;

    priv.iaddn(1);
    return this.keyPair(priv);
  } while (true);
};

EC.prototype._truncateToN = function truncateToN(msg, truncOnly) {
  var delta = msg.byteLength() * 8 - this.n.bitLength();
  if (delta > 0)
    msg = msg.shrn(delta);
  if (!truncOnly && msg.cmp(this.n) >= 0)
    return msg.sub(this.n);
  else
    return msg;
};

EC.prototype.sign = function sign(msg, key, options) {
  key = this.keyPair(key, 'hex');
  msg = this._truncateToN(new bn(msg, 16));
  if (!options)
    options = {};

  var bytes = this.n.byteLength();
  var bkey = key.getPrivate().toArray();
  for (var i = bkey.length; i < 21; i++)
    bkey.unshift(0);

  var nonce = msg.toArray();
  for (var i = nonce.length; i < bytes; i++)
    nonce.unshift(0);

  var drbg = new elliptic.hmacDRBG({
    hash: this.hash,
    entropy: bkey,
    nonce: nonce
  });

  var ns1 = this.n.sub(new bn(1));
  do {
    var k = new bn(drbg.generate(this.n.byteLength()));
    k = this._truncateToN(k, true);
    if (k.cmpn(1) <= 0 || k.cmp(ns1) >= 0)
      continue;

    var kp = this.g.mul(k);
    if (kp.isInfinity())
      continue;

    var r = kp.getX().mod(this.n);
    if (r.cmpn(0) === 0)
      continue;

    var s = k.invm(this.n).mul(r.mul(key.getPrivate()).iadd(msg)).mod(this.n);
    if (s.cmpn(0) === 0)
      continue;

    if (options.canonical && s.cmp(this.nh) > 0)
      s = this.n.sub(s);

    return new Signature(r, s);
  } while (true);
};

EC.prototype.verify = function verify(msg, signature, key) {
  msg = this._truncateToN(new bn(msg, 16));
  key = this.keyPair(key, 'hex');
  signature = new Signature(signature, 'hex');

  var r = signature.r;
  var s = signature.s;
  if (r.cmpn(1) < 0 || r.cmp(this.n) >= 0)
    return false;
  if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0)
    return false;

  var sinv = s.invm(this.n);
  var u1 = sinv.mul(msg).mod(this.n);
  var u2 = sinv.mul(r).mod(this.n);

  var p = this.g.mulAdd(u1, key.getPublic(), u2);
  if (p.isInfinity())
    return false;

  return p.getX().mod(this.n).cmp(r) === 0;
};

},{"../../elliptic":81,"./key":89,"./signature":90,"bn.js":79}],89:[function(require,module,exports){
var bn = require('bn.js');

var elliptic = require('../../elliptic');
var utils = elliptic.utils;
var assert = utils.assert;

function KeyPair(ec, priv, pub) {
  if (priv instanceof KeyPair)
    return priv;
  if (pub instanceof KeyPair)
    return pub;

  if (!priv) {
    priv = pub;
    pub = null;
  }
  if (priv !== null && typeof priv === 'object') {
    if (priv.x) {
      pub = priv;
      priv = null;
    } else if (priv.priv || priv.pub) {
      pub = priv.pub;
      priv = priv.priv;
    }
  }

  this.ec = ec;
  this.priv = null;
  this.pub = null;

  if (this._importPublicHex(priv, pub))
    return;

  if (pub === 'hex')
    pub = null;

  if (priv)
    this._importPrivate(priv);
  if (pub)
    this._importPublic(pub);
}
module.exports = KeyPair;

KeyPair.prototype.validate = function validate() {
  var pub = this.getPublic();

  if (pub.isInfinity())
    return { result: false, reason: 'Invalid public key' };
  if (!pub.validate())
    return { result: false, reason: 'Public key is not a point' };
  if (!pub.mul(this.ec.curve.n).isInfinity())
    return { result: false, reason: 'Public key * N != O' };

  return { result: true, reason: null };
};

KeyPair.prototype.getPublic = function getPublic(compact, enc) {
  if (!this.pub)
    this.pub = this.ec.g.mul(this.priv);

  if (typeof compact === 'string') {
    enc = compact;
    compact = null;
  }

  if (!enc)
    return this.pub;

  var len = this.ec.curve.p.byteLength();
  var x = this.pub.getX().toArray();

  for (var i = x.length; i < len; i++)
    x.unshift(0);

  if (compact) {
    var res = [ this.pub.getY().isEven() ? 0x02 : 0x03 ].concat(x);
  } else {
    var y = this.pub.getY().toArray();
    for (var i = y.length; i < len; i++)
      y.unshift(0);
    var res = [ 0x04 ].concat(x, y);
  }
  return utils.encode(res, enc);
};

KeyPair.prototype.getPrivate = function getPrivate(enc) {
  if (enc === 'hex')
    return this.priv.toString(16, 2);
  else
    return this.priv;
};

KeyPair.prototype._importPrivate = function _importPrivate(key) {
  this.priv = new bn(key, 16);

  this.priv = this.priv.mod(this.ec.curve.n);
};

KeyPair.prototype._importPublic = function _importPublic(key) {
  this.pub = this.ec.curve.point(key.x, key.y);
};

KeyPair.prototype._importPublicHex = function _importPublic(key, enc) {
  key = utils.toArray(key, enc);
  var len = this.ec.curve.p.byteLength();
  if (key[0] === 0x04 && key.length - 1 === 2 * len) {
    this.pub = this.ec.curve.point(
      key.slice(1, 1 + len),
      key.slice(1 + len, 1 + 2 * len));
  } else if ((key[0] === 0x02 || key[0] === 0x03) && key.length - 1 === len) {
    this.pub = this.ec.curve.pointFromX(key[0] === 0x03,
                                        key.slice(1, 1 +len));
  } else {
    return false;
  }

  return true;
};

KeyPair.prototype.derive = function derive(pub) {
  return pub.mul(this.priv).getX();
};

KeyPair.prototype.sign = function sign(msg) {
  return this.ec.sign(msg, this);
};

KeyPair.prototype.verify = function verify(msg, signature) {
  return this.ec.verify(msg, signature, this);
};

KeyPair.prototype.inspect = function inspect() {
  return '<Key priv: ' + (this.priv && this.priv.toString(16, 2)) +
         ' pub: ' + (this.pub && this.pub.inspect()) + ' >';
};

},{"../../elliptic":81,"bn.js":79}],90:[function(require,module,exports){
var bn = require('bn.js');

var elliptic = require('../../elliptic');
var utils = elliptic.utils;
var assert = utils.assert;

function Signature(r, s) {
  if (r instanceof Signature)
    return r;

  if (this._importDER(r, s))
    return;

  assert(r && s, 'Signature without r or s');
  this.r = new bn(r, 16);
  this.s = new bn(s, 16);
}
module.exports = Signature;

Signature.prototype._importDER = function _importDER(data, enc) {
  data = utils.toArray(data, enc);
  if (data.length < 6 || data[0] !== 0x30 || data[2] !== 0x02)
    return false;
  var total = data[1];
  if (1 + total > data.length)
    return false;
  var rlen = data[3];
  if (rlen >= 0x80)
    return false;
  if (4 + rlen + 2 >= data.length)
    return false;
  if (data[4 + rlen] !== 0x02)
    return false;
  var slen = data[5 + rlen];
  if (slen >= 0x80)
    return false;
  if (4 + rlen + 2 + slen > data.length)
    return false;

  this.r = new bn(data.slice(4, 4 + rlen));
  this.s = new bn(data.slice(4 + rlen + 2, 4 + rlen + 2 + slen));

  return true;
};

Signature.prototype.toDER = function toDER(enc) {
  var r = this.r.toArray();
  var s = this.s.toArray();

  if (r[0] & 0x80)
    r = [ 0 ].concat(r);
  if (s[0] & 0x80)
    s = [ 0 ].concat(s);

  var total = r.length + s.length + 4;
  var res = [ 0x30, total, 0x02, r.length ];
  res = res.concat(r, [ 0x02, s.length ], s);
  return utils.encode(res, enc);
};

},{"../../elliptic":81,"bn.js":79}],91:[function(require,module,exports){
var hash = require('hash.js');
var elliptic = require('../elliptic');
var utils = elliptic.utils;
var assert = utils.assert;

function HmacDRBG(options) {
  if (!(this instanceof HmacDRBG))
    return new HmacDRBG(options);
  this.hash = options.hash;
  this.predResist = !!options.predResist;

  this.outLen = this.hash.outSize;
  this.minEntropy = options.minEntropy || this.hash.hmacStrength;

  this.reseed = null;
  this.reseedInterval = null;
  this.K = null;
  this.V = null;

  var entropy = utils.toArray(options.entropy, options.entropyEnc);
  var nonce = utils.toArray(options.nonce, options.nonceEnc);
  var pers = utils.toArray(options.pers, options.persEnc);
  assert(entropy.length >= (this.minEntropy / 8),
         'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits');
  this._init(entropy, nonce, pers);
}
module.exports = HmacDRBG;

HmacDRBG.prototype._init = function init(entropy, nonce, pers) {
  var seed = entropy.concat(nonce).concat(pers);

  this.K = new Array(this.outLen / 8);
  this.V = new Array(this.outLen / 8);
  for (var i = 0; i < this.V.length; i++) {
    this.K[i] = 0x00;
    this.V[i] = 0x01;
  }

  this._update(seed);
  this.reseed = 1;
  this.reseedInterval = 0x1000000000000;  // 2^48
};

HmacDRBG.prototype._hmac = function hmac() {
  return new hash.hmac(this.hash, this.K);
};

HmacDRBG.prototype._update = function update(seed) {
  var kmac = this._hmac()
                 .update(this.V)
                 .update([ 0x00 ]);
  if (seed)
    kmac = kmac.update(seed);
  this.K = kmac.digest();
  this.V = this._hmac().update(this.V).digest();
  if (!seed)
    return;

  this.K = this._hmac()
               .update(this.V)
               .update([ 0x01 ])
               .update(seed)
               .digest();
  this.V = this._hmac().update(this.V).digest();
};

HmacDRBG.prototype.reseed = function reseed(entropy, entropyEnc, add, addEnc) {
  if (typeof entropyEnc !== 'string') {
    addEnc = add;
    add = entropyEnc;
    entropyEnc = null;
  }

  entropy = utils.toBuffer(entropy, entropyEnc);
  add = utils.toBuffer(add, addEnc);

  assert(entropy.length >= (this.minEntropy / 8),
         'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits');

  this._update(entropy.concat(add || []));
  this.reseed = 1;
};

HmacDRBG.prototype.generate = function generate(len, enc, add, addEnc) {
  if (this.reseed > this.reseedInterval)
    throw new Error('Reseed is required');

  if (typeof enc !== 'string') {
    addEnc = add;
    add = enc;
    enc = null;
  }

  if (add) {
    add = utils.toArray(add, addEnc);
    this._update(add);
  }

  var temp = [];
  while (temp.length < len) {
    this.V = this._hmac().update(this.V).digest();
    temp = temp.concat(this.V);
  }

  var res = temp.slice(0, len);
  this._update(add);
  this.reseed++;
  return utils.encode(res, enc);
};

},{"../elliptic":81,"hash.js":94}],92:[function(require,module,exports){
var bn = require('bn.js');

var utils = exports;

utils.assert = function assert(val, msg) {
  if (!val)
    throw new Error(msg || 'Assertion failed');
};

function toArray(msg, enc) {
  if (Array.isArray(msg))
    return msg.slice();
  if (!msg)
    return [];
  var res = [];
  if (typeof msg === 'string') {
    if (!enc) {
      for (var i = 0; i < msg.length; i++) {
        var c = msg.charCodeAt(i);
        var hi = c >> 8;
        var lo = c & 0xff;
        if (hi)
          res.push(hi, lo);
        else
          res.push(lo);
      }
    } else if (enc === 'hex') {
      msg = msg.replace(/[^a-z0-9]+/ig, '');
      if (msg.length % 2 !== 0)
        msg = '0' + msg;
      for (var i = 0; i < msg.length; i += 2)
        res.push(parseInt(msg[i] + msg[i + 1], 16));
    }
  } else {
    for (var i = 0; i < msg.length; i++)
      res[i] = msg[i] | 0;
  }
  return res;
}
utils.toArray = toArray;

function toHex(msg) {
  var res = '';
  for (var i = 0; i < msg.length; i++)
    res += zero2(msg[i].toString(16));
  return res;
}
utils.toHex = toHex;

utils.encode = function encode(arr, enc) {
  if (enc === 'hex')
    return toHex(arr);
  else
    return arr;
};

function zero2(word) {
  if (word.length === 1)
    return '0' + word;
  else
    return word;
}
utils.zero2 = zero2;

function getNAF(num, w) {
  var naf = [];
  var ws = 1 << (w + 1);
  var k = num.clone();
  while (k.cmpn(1) >= 0) {
    var z;
    if (k.isOdd()) {
      var mod = k.andln(ws - 1);
      if (mod > (ws >> 1) - 1)
        z = (ws >> 1) - mod;
      else
        z = mod;
      k.isubn(z);
    } else {
      z = 0;
    }
    naf.push(z);

    var shift = (k.cmpn(0) !== 0 && k.andln(ws - 1) === 0) ? (w + 1) : 1;
    for (var i = 1; i < shift; i++)
      naf.push(0);
    k.ishrn(shift);
  }

  return naf;
}
utils.getNAF = getNAF;

function getJSF(k1, k2) {
  var jsf = [
    [],
    []
  ];

  k1 = k1.clone();
  k2 = k2.clone();
  var d1 = 0;
  var d2 = 0;
  while (k1.cmpn(-d1) > 0 || k2.cmpn(-d2) > 0) {

    var m14 = (k1.andln(3) + d1) & 3;
    var m24 = (k2.andln(3) + d2) & 3;
    if (m14 === 3)
      m14 = -1;
    if (m24 === 3)
      m24 = -1;
    var u1;
    if ((m14 & 1) === 0) {
      u1 = 0;
    } else {
      var m8 = (k1.andln(7) + d1) & 7;
      if ((m8 === 3 || m8 === 5) && m24 === 2)
        u1 = -m14;
      else
        u1 = m14;
    }
    jsf[0].push(u1);

    var u2;
    if ((m24 & 1) === 0) {
      u2 = 0;
    } else {
      var m8 = (k2.andln(7) + d2) & 7;
      if ((m8 === 3 || m8 === 5) && m14 === 2)
        u2 = -m24;
      else
        u2 = m24;
    }
    jsf[1].push(u2);

    if (2 * d1 === u1 + 1)
      d1 = 1 - d1;
    if (2 * d2 === u2 + 1)
      d2 = 1 - d2;
    k1.ishrn(1);
    k2.ishrn(1);
  }

  return jsf;
}
utils.getJSF = getJSF;

},{"bn.js":79}],93:[function(require,module,exports){
var r;

module.exports = function rand(len) {
  if (!r)
    r = new Rand(null);

  return r.generate(len);
};

function Rand(rand) {
  this.rand = rand;
}
module.exports.Rand = Rand;

Rand.prototype.generate = function generate(len) {
  return this._rand(len);
};

if (typeof window === 'object') {
  if (window.crypto && window.crypto.getRandomValues) {
    Rand.prototype._rand = function _rand(n) {
      var arr = new Uint8Array(n);
      window.crypto.getRandomValues(arr);
      return arr;
    };
  } else if (window.msCrypto && window.msCrypto.getRandomValues) {
    Rand.prototype._rand = function _rand(n) {
      var arr = new Uint8Array(n);
      window.msCrypto.getRandomValues(arr);
      return arr;
    };
  } else {
    Rand.prototype._rand = function() {
      throw new Error('Not implemented yet');
    };
  }
} else {
  try {
    var crypto = require('cry' + 'pto');

    Rand.prototype._rand = function _rand(n) {
      return crypto.randomBytes(n);
    };
  } catch (e) {
    Rand.prototype._rand = function _rand(n) {
      var res = new Uint8Array(n);
      for (var i = 0; i < res.length; i++)
        res[i] = this.rand.getByte();
      return res;
    };
  }
}

},{}],94:[function(require,module,exports){
var hash = exports;

hash.utils = require('./hash/utils');
hash.common = require('./hash/common');
hash.sha = require('./hash/sha');
hash.ripemd = require('./hash/ripemd');
hash.hmac = require('./hash/hmac');

hash.sha1 = hash.sha.sha1;
hash.sha256 = hash.sha.sha256;
hash.sha224 = hash.sha.sha224;
hash.sha384 = hash.sha.sha384;
hash.sha512 = hash.sha.sha512;
hash.ripemd160 = hash.ripemd.ripemd160;

},{"./hash/common":95,"./hash/hmac":96,"./hash/ripemd":97,"./hash/sha":98,"./hash/utils":99}],95:[function(require,module,exports){
var hash = require('../hash');
var utils = hash.utils;
var assert = utils.assert;

function BlockHash() {
  this.pending = null;
  this.pendingTotal = 0;
  this.blockSize = this.constructor.blockSize;
  this.outSize = this.constructor.outSize;
  this.hmacStrength = this.constructor.hmacStrength;
  this.padLength = this.constructor.padLength / 8;
  this.endian = 'big';

  this._delta8 = this.blockSize / 8;
  this._delta32 = this.blockSize / 32;
}
exports.BlockHash = BlockHash;

BlockHash.prototype.update = function update(msg, enc) {
  msg = utils.toArray(msg, enc);
  if (!this.pending)
    this.pending = msg;
  else
    this.pending = this.pending.concat(msg);
  this.pendingTotal += msg.length;

  if (this.pending.length >= this._delta8) {
    msg = this.pending;

    var r = msg.length % this._delta8;
    this.pending = msg.slice(msg.length - r, msg.length);
    if (this.pending.length === 0)
      this.pending = null;

    msg = utils.join32(msg, 0, msg.length - r, this.endian);
    for (var i = 0; i < msg.length; i += this._delta32)
      this._update(msg, i, i + this._delta32);
  }

  return this;
};

BlockHash.prototype.digest = function digest(enc) {
  this.update(this._pad());
  assert(this.pending === null);

  return this._digest(enc);
};

BlockHash.prototype._pad = function pad() {
  var len = this.pendingTotal;
  var bytes = this._delta8;
  var k = bytes - ((len + this.padLength) % bytes);
  var res = new Array(k + this.padLength);
  res[0] = 0x80;
  for (var i = 1; i < k; i++)
    res[i] = 0;

  len <<= 3;
  if (this.endian === 'big') {
    for (var t = 8; t < this.padLength; t++)
      res[i++] = 0;

    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = (len >>> 24) & 0xff;
    res[i++] = (len >>> 16) & 0xff;
    res[i++] = (len >>> 8) & 0xff;
    res[i++] = len & 0xff;
  } else {
    res[i++] = len & 0xff;
    res[i++] = (len >>> 8) & 0xff;
    res[i++] = (len >>> 16) & 0xff;
    res[i++] = (len >>> 24) & 0xff;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;

    for (var t = 8; t < this.padLength; t++)
      res[i++] = 0;
  }

  return res;
};

},{"../hash":94}],96:[function(require,module,exports){
var hmac = exports;

var hash = require('../hash');
var utils = hash.utils;
var assert = utils.assert;

function Hmac(hash, key, enc) {
  if (!(this instanceof Hmac))
    return new Hmac(hash, key, enc);
  this.Hash = hash;
  this.blockSize = hash.blockSize / 8;
  this.outSize = hash.outSize / 8;
  this.inner = null;
  this.outer = null;

  this._init(utils.toArray(key, enc));
}
module.exports = Hmac;

Hmac.prototype._init = function init(key) {
  if (key.length > this.blockSize)
    key = new this.Hash().update(key).digest();
  assert(key.length <= this.blockSize);

  for (var i = key.length; i < this.blockSize; i++)
    key.push(0);

  for (var i = 0; i < key.length; i++)
    key[i] ^= 0x36;
  this.inner = new this.Hash().update(key);

  for (var i = 0; i < key.length; i++)
    key[i] ^= 0x6a;
  this.outer = new this.Hash().update(key);
};

Hmac.prototype.update = function update(msg, enc) {
  this.inner.update(msg, enc);
  return this;
};

Hmac.prototype.digest = function digest(enc) {
  this.outer.update(this.inner.digest());
  return this.outer.digest(enc);
};

},{"../hash":94}],97:[function(require,module,exports){
var hash = require('../hash');
var utils = hash.utils;

var rotl32 = utils.rotl32;
var sum32 = utils.sum32;
var sum32_3 = utils.sum32_3;
var sum32_4 = utils.sum32_4;
var BlockHash = hash.common.BlockHash;

function RIPEMD160() {
  if (!(this instanceof RIPEMD160))
    return new RIPEMD160();

  BlockHash.call(this);

  this.h = [ 0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0 ];
  this.endian = 'little';
}
utils.inherits(RIPEMD160, BlockHash);
exports.ripemd160 = RIPEMD160;

RIPEMD160.blockSize = 512;
RIPEMD160.outSize = 160;
RIPEMD160.hmacStrength = 192;
RIPEMD160.padLength = 64;

RIPEMD160.prototype._update = function update(msg, start) {
  var A = this.h[0];
  var B = this.h[1];
  var C = this.h[2];
  var D = this.h[3];
  var E = this.h[4];
  var Ah = A;
  var Bh = B;
  var Ch = C;
  var Dh = D;
  var Eh = E;
  for (var j = 0; j < 80; j++) {
    var T = sum32(
      rotl32(
        sum32_4(A, f(j, B, C, D), msg[r[j] + start], K(j)),
        s[j]),
      E);
    A = E;
    E = D;
    D = rotl32(C, 10);
    C = B;
    B = T;
    T = sum32(
      rotl32(
        sum32_4(Ah, f(79 - j, Bh, Ch, Dh), msg[rh[j] + start], Kh(j)),
        sh[j]),
      Eh);
    Ah = Eh;
    Eh = Dh;
    Dh = rotl32(Ch, 10);
    Ch = Bh;
    Bh = T;
  }
  T = sum32_3(this.h[1], C, Dh);
  this.h[1] = sum32_3(this.h[2], D, Eh);
  this.h[2] = sum32_3(this.h[3], E, Ah);
  this.h[3] = sum32_3(this.h[4], A, Bh);
  this.h[4] = sum32_3(this.h[0], B, Ch);
  this.h[0] = T;
};

RIPEMD160.prototype._digest = function digest(enc) {
  if (enc === 'hex')
    return utils.toHex32(this.h, 'little');
  else
    return utils.split32(this.h, 'little');
};

function f(j, x, y, z) {
  if (j <= 15)
    return x ^ y ^ z;
  else if (j <= 31)
    return (x & y) | ((~x) & z);
  else if (j <= 47)
    return (x | (~y)) ^ z;
  else if (j <= 63)
    return (x & z) | (y & (~z));
  else
    return x ^ (y | (~z));
}

function K(j) {
  if (j <= 15)
    return 0x00000000;
  else if (j <= 31)
    return 0x5a827999;
  else if (j <= 47)
    return 0x6ed9eba1;
  else if (j <= 63)
    return 0x8f1bbcdc;
  else
    return 0xa953fd4e;
}

function Kh(j) {
  if (j <= 15)
    return 0x50a28be6;
  else if (j <= 31)
    return 0x5c4dd124;
  else if (j <= 47)
    return 0x6d703ef3;
  else if (j <= 63)
    return 0x7a6d76e9;
  else
    return 0x00000000;
}

var r = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
  3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12,
  1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
  4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
];

var rh = [
  5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12,
  6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2,
  15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13,
  8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
  12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11
];

var s = [
  11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8,
  7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12,
  11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5,
  11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12,
  9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6,
];

var sh = [
  8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6,
  9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11,
  9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5,
  15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8,
  8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11
];

},{"../hash":94}],98:[function(require,module,exports){
var hash = require('../hash');
var utils = hash.utils;
var assert = utils.assert;

var rotr32 = utils.rotr32;
var rotl32 = utils.rotl32;
var sum32 = utils.sum32;
var sum32_4 = utils.sum32_4;
var sum32_5 = utils.sum32_5;
var rotr64_hi = utils.rotr64_hi;
var rotr64_lo = utils.rotr64_lo;
var shr64_hi = utils.shr64_hi;
var shr64_lo = utils.shr64_lo;
var sum64 = utils.sum64;
var sum64_hi = utils.sum64_hi;
var sum64_lo = utils.sum64_lo;
var sum64_4_hi = utils.sum64_4_hi;
var sum64_4_lo = utils.sum64_4_lo;
var sum64_5_hi = utils.sum64_5_hi;
var sum64_5_lo = utils.sum64_5_lo;
var BlockHash = hash.common.BlockHash;

var sha256_K = [
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5,
  0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
  0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3,
  0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
  0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc,
  0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
  0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7,
  0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
  0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
  0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
  0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3,
  0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
  0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
  0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
  0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
];

var sha512_K = [
  0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
  0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
  0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
  0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
  0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
  0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
  0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
  0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
  0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
  0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
  0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
  0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
  0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
  0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
  0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
  0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
  0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
  0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
  0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
  0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
  0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
  0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
  0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
  0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
  0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
  0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
  0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
  0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
  0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
  0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
  0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
  0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
  0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
  0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
  0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
  0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
  0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
  0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
  0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
  0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
];

var sha1_K = [
  0x5A827999, 0x6ED9EBA1,
  0x8F1BBCDC, 0xCA62C1D6
];

function SHA256() {
  if (!(this instanceof SHA256))
    return new SHA256();

  BlockHash.call(this);
  this.h = [ 0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a,
             0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19 ];
  this.k = sha256_K;
  this.W = new Array(64);
}
utils.inherits(SHA256, BlockHash);
exports.sha256 = SHA256;

SHA256.blockSize = 512;
SHA256.outSize = 256;
SHA256.hmacStrength = 192;
SHA256.padLength = 64;

SHA256.prototype._update = function _update(msg, start) {
  var W = this.W;

  for (var i = 0; i < 16; i++)
    W[i] = msg[start + i];
  for (; i < W.length; i++)
    W[i] = sum32_4(g1_256(W[i - 2]), W[i - 7], g0_256(W[i - 15]), W[i - 16]);

  var a = this.h[0];
  var b = this.h[1];
  var c = this.h[2];
  var d = this.h[3];
  var e = this.h[4];
  var f = this.h[5];
  var g = this.h[6];
  var h = this.h[7];

  assert(this.k.length === W.length);
  for (var i = 0; i < W.length; i++) {
    var T1 = sum32_5(h, s1_256(e), ch32(e, f, g), this.k[i], W[i]);
    var T2 = sum32(s0_256(a), maj32(a, b, c));
    h = g;
    g = f;
    f = e;
    e = sum32(d, T1);
    d = c;
    c = b;
    b = a;
    a = sum32(T1, T2);
  }

  this.h[0] = sum32(this.h[0], a);
  this.h[1] = sum32(this.h[1], b);
  this.h[2] = sum32(this.h[2], c);
  this.h[3] = sum32(this.h[3], d);
  this.h[4] = sum32(this.h[4], e);
  this.h[5] = sum32(this.h[5], f);
  this.h[6] = sum32(this.h[6], g);
  this.h[7] = sum32(this.h[7], h);
};

SHA256.prototype._digest = function digest(enc) {
  if (enc === 'hex')
    return utils.toHex32(this.h, 'big');
  else
    return utils.split32(this.h, 'big');
};

function SHA224() {
  if (!(this instanceof SHA224))
    return new SHA224();

  SHA256.call(this);
  this.h = [ 0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,
             0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4 ];
}
utils.inherits(SHA224, SHA256);
exports.sha224 = SHA224;

SHA224.blockSize = 512;
SHA224.outSize = 224;
SHA224.hmacStrength = 192;
SHA224.padLength = 64;

SHA224.prototype._digest = function digest(enc) {
  if (enc === 'hex')
    return utils.toHex32(this.h.slice(0, 7), 'big');
  else
    return utils.split32(this.h.slice(0, 7), 'big');
};

function SHA512() {
  if (!(this instanceof SHA512))
    return new SHA512();

  BlockHash.call(this);
  this.h = [ 0x6a09e667, 0xf3bcc908,
             0xbb67ae85, 0x84caa73b,
             0x3c6ef372, 0xfe94f82b,
             0xa54ff53a, 0x5f1d36f1,
             0x510e527f, 0xade682d1,
             0x9b05688c, 0x2b3e6c1f,
             0x1f83d9ab, 0xfb41bd6b,
             0x5be0cd19, 0x137e2179 ];
  this.k = sha512_K;
  this.W = new Array(160);
}
utils.inherits(SHA512, BlockHash);
exports.sha512 = SHA512;

SHA512.blockSize = 1024;
SHA512.outSize = 512;
SHA512.hmacStrength = 192;
SHA512.padLength = 128;

SHA512.prototype._prepareBlock = function _prepareBlock(msg, start) {
  var W = this.W;

  for (var i = 0; i < 32; i++)
    W[i] = msg[start + i];
  for (; i < W.length; i += 2) {
    var c0_hi = g1_512_hi(W[i - 4], W[i - 3]);  // i - 2
    var c0_lo = g1_512_lo(W[i - 4], W[i - 3]);
    var c1_hi = W[i - 14];  // i - 7
    var c1_lo = W[i - 13];
    var c2_hi = g0_512_hi(W[i - 30], W[i - 29]);  // i - 15
    var c2_lo = g0_512_lo(W[i - 30], W[i - 29]);
    var c3_hi = W[i - 32];  // i - 16
    var c3_lo = W[i - 31];

    W[i] = sum64_4_hi(c0_hi, c0_lo,
                      c1_hi, c1_lo,
                      c2_hi, c2_lo,
                      c3_hi, c3_lo);
    W[i + 1] = sum64_4_lo(c0_hi, c0_lo,
                          c1_hi, c1_lo,
                          c2_hi, c2_lo,
                          c3_hi, c3_lo);
  }
};

SHA512.prototype._update = function _update(msg, start) {
  this._prepareBlock(msg, start);

  var W = this.W;

  var ah = this.h[0];
  var al = this.h[1];
  var bh = this.h[2];
  var bl = this.h[3];
  var ch = this.h[4];
  var cl = this.h[5];
  var dh = this.h[6];
  var dl = this.h[7];
  var eh = this.h[8];
  var el = this.h[9];
  var fh = this.h[10];
  var fl = this.h[11];
  var gh = this.h[12];
  var gl = this.h[13];
  var hh = this.h[14];
  var hl = this.h[15];

  assert(this.k.length === W.length);
  for (var i = 0; i < W.length; i += 2) {
    var c0_hi = hh;
    var c0_lo = hl;
    var c1_hi = s1_512_hi(eh, el);
    var c1_lo = s1_512_lo(eh, el);
    var c2_hi = ch64_hi(eh, el, fh, fl, gh, gl);
    var c2_lo = ch64_lo(eh, el, fh, fl, gh, gl);
    var c3_hi = this.k[i];
    var c3_lo = this.k[i + 1];
    var c4_hi = W[i];
    var c4_lo = W[i + 1];

    var T1_hi = sum64_5_hi(c0_hi, c0_lo,
                           c1_hi, c1_lo,
                           c2_hi, c2_lo,
                           c3_hi, c3_lo,
                           c4_hi, c4_lo);
    var T1_lo = sum64_5_lo(c0_hi, c0_lo,
                           c1_hi, c1_lo,
                           c2_hi, c2_lo,
                           c3_hi, c3_lo,
                           c4_hi, c4_lo);

    var c0_hi = s0_512_hi(ah, al);
    var c0_lo = s0_512_lo(ah, al);
    var c1_hi = maj64_hi(ah, al, bh, bl, ch, cl);
    var c1_lo = maj64_lo(ah, al, bh, bl, ch, cl);

    var T2_hi = sum64_hi(c0_hi, c0_lo, c1_hi, c1_lo);
    var T2_lo = sum64_lo(c0_hi, c0_lo, c1_hi, c1_lo);

    hh = gh;
    hl = gl;

    gh = fh;
    gl = fl;

    fh = eh;
    fl = el;

    eh = sum64_hi(dh, dl, T1_hi, T1_lo);
    el = sum64_lo(dl, dl, T1_hi, T1_lo);

    dh = ch;
    dl = cl;

    ch = bh;
    cl = bl;

    bh = ah;
    bl = al;

    ah = sum64_hi(T1_hi, T1_lo, T2_hi, T2_lo);
    al = sum64_lo(T1_hi, T1_lo, T2_hi, T2_lo);
  }

  sum64(this.h, 0, ah, al);
  sum64(this.h, 2, bh, bl);
  sum64(this.h, 4, ch, cl);
  sum64(this.h, 6, dh, dl);
  sum64(this.h, 8, eh, el);
  sum64(this.h, 10, fh, fl);
  sum64(this.h, 12, gh, gl);
  sum64(this.h, 14, hh, hl);
};

SHA512.prototype._digest = function digest(enc) {
  if (enc === 'hex')
    return utils.toHex32(this.h, 'big');
  else
    return utils.split32(this.h, 'big');
};

function SHA384() {
  if (!(this instanceof SHA384))
    return new SHA384();

  SHA512.call(this);
  this.h = [ 0xcbbb9d5d, 0xc1059ed8,
             0x629a292a, 0x367cd507,
             0x9159015a, 0x3070dd17,
             0x152fecd8, 0xf70e5939,
             0x67332667, 0xffc00b31,
             0x8eb44a87, 0x68581511,
             0xdb0c2e0d, 0x64f98fa7,
             0x47b5481d, 0xbefa4fa4 ];
}
utils.inherits(SHA384, SHA512);
exports.sha384 = SHA384;

SHA384.blockSize = 1024;
SHA384.outSize = 384;
SHA384.hmacStrength = 192;
SHA384.padLength = 128;

SHA384.prototype._digest = function digest(enc) {
  if (enc === 'hex')
    return utils.toHex32(this.h.slice(0, 12), 'big');
  else
    return utils.split32(this.h.slice(0, 12), 'big');
};

function SHA1() {
  if (!(this instanceof SHA1))
    return new SHA1();

  BlockHash.call(this);
  this.h = [ 0x67452301, 0xefcdab89, 0x98badcfe,
             0x10325476, 0xc3d2e1f0 ];
  this.W = new Array(80);
}

utils.inherits(SHA1, BlockHash);
exports.sha1 = SHA1;

SHA1.blockSize = 512;
SHA1.outSize = 160;
SHA1.hmacStrength = 80;
SHA1.padLength = 64;

SHA1.prototype._update = function _update(msg, start) {
  var W = this.W;

  for (var i = 0; i < 16; i++)
    W[i] = msg[start + i];

  for(; i < W.length; i++)
    W[i] = rotl32(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);

  var a = this.h[0];
  var b = this.h[1];
  var c = this.h[2];
  var d = this.h[3];
  var e = this.h[4];

  for (var i = 0; i < W.length; i++) {
    var s = ~~(i / 20);
    var t = sum32_5(rotl32(a, 5), ft_1(s, b, c, d), e, W[i], sha1_K[s]);
    e = d;
    d = c;
    c = rotl32(b, 30);
    b = a;
    a = t;
  }

  this.h[0] = sum32(this.h[0], a);
  this.h[1] = sum32(this.h[1], b);
  this.h[2] = sum32(this.h[2], c);
  this.h[3] = sum32(this.h[3], d);
  this.h[4] = sum32(this.h[4], e);
};

SHA1.prototype._digest = function digest(enc) {
  if (enc === 'hex')
    return utils.toHex32(this.h, 'big');
  else
    return utils.split32(this.h, 'big');
};

function ch32(x, y, z) {
  return (x & y) ^ ((~x) & z);
}

function maj32(x, y, z) {
  return (x & y) ^ (x & z) ^ (y & z);
}

function p32(x, y, z) {
  return x ^ y ^ z;
}

function s0_256(x) {
  return rotr32(x, 2) ^ rotr32(x, 13) ^ rotr32(x, 22);
}

function s1_256(x) {
  return rotr32(x, 6) ^ rotr32(x, 11) ^ rotr32(x, 25);
}

function g0_256(x) {
  return rotr32(x, 7) ^ rotr32(x, 18) ^ (x >>> 3);
}

function g1_256(x) {
  return rotr32(x, 17) ^ rotr32(x, 19) ^ (x >>> 10);
}

function ft_1(s, x, y, z) {
  if (s === 0)
    return ch32(x, y, z);
  if (s === 1 || s === 3)
    return p32(x, y, z);
  if (s === 2)
    return maj32(x, y, z);
}

function ch64_hi(xh, xl, yh, yl, zh, zl) {
  var r = (xh & yh) ^ ((~xh) & zh);
  if (r < 0)
    r += 0x100000000;
  return r;
}

function ch64_lo(xh, xl, yh, yl, zh, zl) {
  var r = (xl & yl) ^ ((~xl) & zl);
  if (r < 0)
    r += 0x100000000;
  return r;
}

function maj64_hi(xh, xl, yh, yl, zh, zl) {
  var r = (xh & yh) ^ (xh & zh) ^ (yh & zh);
  if (r < 0)
    r += 0x100000000;
  return r;
}

function maj64_lo(xh, xl, yh, yl, zh, zl) {
  var r = (xl & yl) ^ (xl & zl) ^ (yl & zl);
  if (r < 0)
    r += 0x100000000;
  return r;
}

function s0_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 28);
  var c1_hi = rotr64_hi(xl, xh, 2);  // 34
  var c2_hi = rotr64_hi(xl, xh, 7);  // 39

  var r = c0_hi ^ c1_hi ^ c2_hi;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function s0_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 28);
  var c1_lo = rotr64_lo(xl, xh, 2);  // 34
  var c2_lo = rotr64_lo(xl, xh, 7);  // 39

  var r = c0_lo ^ c1_lo ^ c2_lo;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function s1_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 14);
  var c1_hi = rotr64_hi(xh, xl, 18);
  var c2_hi = rotr64_hi(xl, xh, 9);  // 41

  var r = c0_hi ^ c1_hi ^ c2_hi;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function s1_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 14);
  var c1_lo = rotr64_lo(xh, xl, 18);
  var c2_lo = rotr64_lo(xl, xh, 9);  // 41

  var r = c0_lo ^ c1_lo ^ c2_lo;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function g0_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 1);
  var c1_hi = rotr64_hi(xh, xl, 8);
  var c2_hi = shr64_hi(xh, xl, 7);

  var r = c0_hi ^ c1_hi ^ c2_hi;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function g0_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 1);
  var c1_lo = rotr64_lo(xh, xl, 8);
  var c2_lo = shr64_lo(xh, xl, 7);

  var r = c0_lo ^ c1_lo ^ c2_lo;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function g1_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 19);
  var c1_hi = rotr64_hi(xl, xh, 29);  // 61
  var c2_hi = shr64_hi(xh, xl, 6);

  var r = c0_hi ^ c1_hi ^ c2_hi;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function g1_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 19);
  var c1_lo = rotr64_lo(xl, xh, 29);  // 61
  var c2_lo = shr64_lo(xh, xl, 6);

  var r = c0_lo ^ c1_lo ^ c2_lo;
  if (r < 0)
    r += 0x100000000;
  return r;
}

},{"../hash":94}],99:[function(require,module,exports){
var utils = exports;
var inherits = require('inherits');

function toArray(msg, enc) {
  if (Array.isArray(msg))
    return msg.slice();
  if (!msg)
    return [];
  var res = [];
  if (typeof msg === 'string') {
    if (!enc) {
      for (var i = 0; i < msg.length; i++) {
        var c = msg.charCodeAt(i);
        var hi = c >> 8;
        var lo = c & 0xff;
        if (hi)
          res.push(hi, lo);
        else
          res.push(lo);
      }
    } else if (enc === 'hex') {
      msg = msg.replace(/[^a-z0-9]+/ig, '');
      if (msg.length % 2 !== 0)
        msg = '0' + msg;
      for (var i = 0; i < msg.length; i += 2)
        res.push(parseInt(msg[i] + msg[i + 1], 16));
    }
  } else {
    for (var i = 0; i < msg.length; i++)
      res[i] = msg[i] | 0;
  }
  return res;
}
utils.toArray = toArray;

function toHex(msg) {
  var res = '';
  for (var i = 0; i < msg.length; i++)
    res += zero2(msg[i].toString(16));
  return res;
}
utils.toHex = toHex;

function htonl(w) {
  var res = (w >>> 24) |
            ((w >>> 8) & 0xff00) |
            ((w << 8) & 0xff0000) |
            ((w & 0xff) << 24);
  return res >>> 0;
}
utils.htonl = htonl;

function toHex32(msg, endian) {
  var res = '';
  for (var i = 0; i < msg.length; i++) {
    var w = msg[i];
    if (endian === 'little')
      w = htonl(w);
    res += zero8(w.toString(16));
  }
  return res;
}
utils.toHex32 = toHex32;

function zero2(word) {
  if (word.length === 1)
    return '0' + word;
  else
    return word;
}
utils.zero2 = zero2;

function zero8(word) {
  if (word.length === 7)
    return '0' + word;
  else if (word.length === 6)
    return '00' + word;
  else if (word.length === 5)
    return '000' + word;
  else if (word.length === 4)
    return '0000' + word;
  else if (word.length === 3)
    return '00000' + word;
  else if (word.length === 2)
    return '000000' + word;
  else if (word.length === 1)
    return '0000000' + word;
  else
    return word;
}
utils.zero8 = zero8;

function join32(msg, start, end, endian) {
  var len = end - start;
  assert(len % 4 === 0);
  var res = new Array(len / 4);
  for (var i = 0, k = start; i < res.length; i++, k += 4) {
    var w;
    if (endian === 'big')
      w = (msg[k] << 24) | (msg[k + 1] << 16) | (msg[k + 2] << 8) | msg[k + 3];
    else
      w = (msg[k + 3] << 24) | (msg[k + 2] << 16) | (msg[k + 1] << 8) | msg[k];
    res[i] = w >>> 0;
  }
  return res;
}
utils.join32 = join32;

function split32(msg, endian) {
  var res = new Array(msg.length * 4);
  for (var i = 0, k = 0; i < msg.length; i++, k += 4) {
    var m = msg[i];
    if (endian === 'big') {
      res[k] = m >>> 24;
      res[k + 1] = (m >>> 16) & 0xff;
      res[k + 2] = (m >>> 8) & 0xff;
      res[k + 3] = m & 0xff;
    } else {
      res[k + 3] = m >>> 24;
      res[k + 2] = (m >>> 16) & 0xff;
      res[k + 1] = (m >>> 8) & 0xff;
      res[k] = m & 0xff;
    }
  }
  return res;
}
utils.split32 = split32;

function rotr32(w, b) {
  return (w >>> b) | (w << (32 - b));
}
utils.rotr32 = rotr32;

function rotl32(w, b) {
  return (w << b) | (w >>> (32 - b));
}
utils.rotl32 = rotl32;

function sum32(a, b) {
  return (a + b) >>> 0;
}
utils.sum32 = sum32;

function sum32_3(a, b, c) {
  return (a + b + c) >>> 0;
}
utils.sum32_3 = sum32_3;

function sum32_4(a, b, c, d) {
  return (a + b + c + d) >>> 0;
}
utils.sum32_4 = sum32_4;

function sum32_5(a, b, c, d, e) {
  return (a + b + c + d + e) >>> 0;
}
utils.sum32_5 = sum32_5;

function assert(cond, msg) {
  if (!cond)
    throw new Error(msg || 'Assertion failed');
}
utils.assert = assert;

utils.inherits = inherits;

function sum64(buf, pos, ah, al) {
  var bh = buf[pos];
  var bl = buf[pos + 1];

  var lo = (al + bl) >>> 0;
  var hi = (lo < al ? 1 : 0) + ah + bh;
  buf[pos] = hi >>> 0;
  buf[pos + 1] = lo;
}
exports.sum64 = sum64;

function sum64_hi(ah, al, bh, bl) {
  var lo = (al + bl) >>> 0;
  var hi = (lo < al ? 1 : 0) + ah + bh;
  return hi >>> 0;
};
exports.sum64_hi = sum64_hi;

function sum64_lo(ah, al, bh, bl) {
  var lo = al + bl;
  return lo >>> 0;
};
exports.sum64_lo = sum64_lo;

function sum64_4_hi(ah, al, bh, bl, ch, cl, dh, dl) {
  var carry = 0;
  var lo = al;
  lo = (lo + bl) >>> 0;
  carry += lo < al ? 1 : 0;
  lo = (lo + cl) >>> 0;
  carry += lo < cl ? 1 : 0;
  lo = (lo + dl) >>> 0;
  carry += lo < dl ? 1 : 0;

  var hi = ah + bh + ch + dh + carry;
  return hi >>> 0;
};
exports.sum64_4_hi = sum64_4_hi;

function sum64_4_lo(ah, al, bh, bl, ch, cl, dh, dl) {
  var lo = al + bl + cl + dl;
  return lo >>> 0;
};
exports.sum64_4_lo = sum64_4_lo;

function sum64_5_hi(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
  var carry = 0;
  var lo = al;
  lo = (lo + bl) >>> 0;
  carry += lo < al ? 1 : 0;
  lo = (lo + cl) >>> 0;
  carry += lo < cl ? 1 : 0;
  lo = (lo + dl) >>> 0;
  carry += lo < dl ? 1 : 0;
  lo = (lo + el) >>> 0;
  carry += lo < el ? 1 : 0;

  var hi = ah + bh + ch + dh + eh + carry;
  return hi >>> 0;
};
exports.sum64_5_hi = sum64_5_hi;

function sum64_5_lo(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
  var lo = al + bl + cl + dl + el;

  return lo >>> 0;
};
exports.sum64_5_lo = sum64_5_lo;

function rotr64_hi(ah, al, num) {
  var r = (al << (32 - num)) | (ah >>> num);
  return r >>> 0;
};
exports.rotr64_hi = rotr64_hi;

function rotr64_lo(ah, al, num) {
  var r = (ah << (32 - num)) | (al >>> num);
  return r >>> 0;
};
exports.rotr64_lo = rotr64_lo;

function shr64_hi(ah, al, num) {
  return ah >>> num;
};
exports.shr64_hi = shr64_hi;

function shr64_lo(ah, al, num) {
  var r = (ah << (32 - num)) | (al >>> num);
  return r >>> 0;
};
exports.shr64_lo = shr64_lo;

},{"inherits":195}],100:[function(require,module,exports){
module.exports={
  "name": "elliptic",
  "version": "1.0.1",
  "description": "EC cryptography",
  "main": "lib/elliptic.js",
  "scripts": {
    "test": "mocha --reporter=spec test/*-test.js"
  },
  "repository": {
    "type": "git",
    "url": "git+ssh://git@github.com/indutny/elliptic.git"
  },
  "keywords": [
    "EC",
    "Elliptic",
    "curve",
    "Cryptography"
  ],
  "author": {
    "name": "Fedor Indutny",
    "email": "fedor@indutny.com"
  },
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/indutny/elliptic/issues"
  },
  "homepage": "https://github.com/indutny/elliptic",
  "devDependencies": {
    "browserify": "^3.44.2",
    "mocha": "^1.18.2",
    "uglify-js": "^2.4.13"
  },
  "dependencies": {
    "bn.js": "^1.0.0",
    "brorand": "^1.0.1",
    "hash.js": "^1.0.0",
    "inherits": "^2.0.1"
  },
  "gitHead": "17dc013761dd1efcfb868e2b06b0b897627b40be",
  "_id": "elliptic@1.0.1",
  "_shasum": "d180376b66a17d74995c837796362ac4d22aefe3",
  "_from": "elliptic@>=1.0.0 <2.0.0",
  "_npmVersion": "1.4.28",
  "_npmUser": {
    "name": "indutny",
    "email": "fedor@indutny.com"
  },
  "maintainers": [
    {
      "name": "indutny",
      "email": "fedor@indutny.com"
    }
  ],
  "dist": {
    "shasum": "d180376b66a17d74995c837796362ac4d22aefe3",
    "tarball": "http://registry.npmjs.org/elliptic/-/elliptic-1.0.1.tgz"
  },
  "directories": {},
  "_resolved": "https://registry.npmjs.org/elliptic/-/elliptic-1.0.1.tgz",
  "readme": "ERROR: No README data found!"
}

},{}],101:[function(require,module,exports){
(function (Buffer){
var createHash = require('create-hash');
module.exports = function evp(password, salt, keyLen) {
  keyLen = keyLen/8;
  var ki = 0;
  var ii = 0;
  var key = new Buffer(keyLen);
  var addmd = 0;
  var md, md_buf;
  var i;
  while (true) {
    md = createHash('md5');
    if(addmd++ > 0) {
       md.update(md_buf);
    }
    md.update(password);
    md.update(salt);
    md_buf = md.digest();
    i = 0;
    if(keyLen > 0) {
      while(true) {
        if(keyLen === 0) {
          break;
        }
        if(i === md_buf.length) {
          break;
        }
        key[ki++] = md_buf[i++];
        keyLen--;
       }
    }
   if(keyLen === 0) {
      break;
    }
  }
  for(i=0;i<md_buf.length;i++) {
    md_buf[i] = 0;
  }
  return key;
};
}).call(this,require("buffer").Buffer)
},{"buffer":53,"create-hash":145}],102:[function(require,module,exports){
module.exports={"2.16.840.1.101.3.4.1.1": "aes-128-ecb",
"2.16.840.1.101.3.4.1.2": "aes-128-cbc",
"2.16.840.1.101.3.4.1.3": "aes-128-ofb",
"2.16.840.1.101.3.4.1.4": "aes-128-cfb",
"2.16.840.1.101.3.4.1.21": "aes-192-ecb",
"2.16.840.1.101.3.4.1.22": "aes-192-cbc",
"2.16.840.1.101.3.4.1.23": "aes-192-ofb",
"2.16.840.1.101.3.4.1.24": "aes-192-cfb",
"2.16.840.1.101.3.4.1.41": "aes-256-ecb",
"2.16.840.1.101.3.4.1.42": "aes-256-cbc",
"2.16.840.1.101.3.4.1.43": "aes-256-ofb",
"2.16.840.1.101.3.4.1.44": "aes-256-cfb"
}
},{}],103:[function(require,module,exports){

var asn1 = require('asn1.js');

var RSAPrivateKey = asn1.define('RSAPrivateKey', function() {
  this.seq().obj(
    this.key('version').int(),
    this.key('modulus').int(),
    this.key('publicExponent').int(),
    this.key('privateExponent').int(),
    this.key('prime1').int(),
    this.key('prime2').int(),
    this.key('exponent1').int(),
    this.key('exponent2').int(),
    this.key('coefficient').int()
  );
});
exports.RSAPrivateKey = RSAPrivateKey;

var RSAPublicKey = asn1.define('RSAPublicKey', function() {
  this.seq().obj(
    this.key('modulus').int(),
    this.key('publicExponent').int()
  );
});
exports.RSAPublicKey = RSAPublicKey;

var PublicKey = asn1.define('SubjectPublicKeyInfo', function() {
  this.seq().obj(
    this.key('algorithm').use(AlgorithmIdentifier),
    this.key('subjectPublicKey').bitstr()
  );
});
exports.PublicKey = PublicKey;

var AlgorithmIdentifier = asn1.define('AlgorithmIdentifier', function() {
  this.seq().obj(
    this.key('algorithm').objid(),
    this.key('none').null_().optional(),
    this.key('curve').objid().optional(),
    this.key('params').seq().obj(
        this.key('p').int(),
        this.key('q').int(),
        this.key('g').int()
      ).optional()
  );
});

var PrivateKeyInfo = asn1.define('PrivateKeyInfo', function() {
  this.seq().obj(
    this.key('version').int(),
    this.key('algorithm').use(AlgorithmIdentifier),
    this.key('subjectPrivateKey').octstr()
  );
});
exports.PrivateKey = PrivateKeyInfo;
var EncryptedPrivateKeyInfo = asn1.define('EncryptedPrivateKeyInfo', function() {
  this.seq().obj(
    this.key('algorithm').seq().obj(
      this.key('id').objid(),
      this.key('decrypt').seq().obj(
        this.key('kde').seq().obj(
          this.key('id').objid(),
          this.key('kdeparams').seq().obj(
            this.key('salt').octstr(),
            this.key('iters').int()
          )
        ),
        this.key('cipher').seq().obj(
          this.key('algo').objid(),
          this.key('iv').octstr()
        )
      )
    ),
    this.key('subjectPrivateKey').octstr()
  );
});

exports.EncryptedPrivateKey = EncryptedPrivateKeyInfo;

var DSAPrivateKey = asn1.define('DSAPrivateKey', function() {
  this.seq().obj(
    this.key('version').int(),
    this.key('p').int(),
    this.key('q').int(),
    this.key('g').int(),
    this.key('pub_key').int(),
    this.key('priv_key').int()
  );
});
exports.DSAPrivateKey = DSAPrivateKey;

exports.DSAparam = asn1.define('DSAparam', function () {
  this.int();
});
var ECPrivateKey = asn1.define('ECPrivateKey', function() {
  this.seq().obj(
    this.key('version').int(),
    this.key('privateKey').octstr(),
    this.key('parameters').optional().explicit(0).use(ECParameters),
    this.key('publicKey').optional().explicit(1).bitstr()
  );
});
exports.ECPrivateKey = ECPrivateKey;
var ECParameters = asn1.define('ECParameters', function() {
  this.choice({
    namedCurve: this.objid()
  });
});

exports.signature = asn1.define('signature', function() {
  this.seq().obj(
    this.key('r').int(),
    this.key('s').int()
  );
});

},{"asn1.js":106}],104:[function(require,module,exports){
(function (Buffer){
var findProc = /Proc-Type: 4,ENCRYPTED\n\r?DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)\n\r?\n\r?([0-9A-z\n\r\+\/\=]+)\n\r?/m;
var startRegex =/^-----BEGIN (.*) KEY-----\n/m;
var fullRegex = /^-----BEGIN (.*) KEY-----\n\r?([0-9A-z\n\r\+\/\=]+)\n\r?-----END \1 KEY-----$/m;
var evp = require('./EVP_BytesToKey');
var ciphers = require('browserify-aes');
module.exports = function (okey, password) {
  var key = okey.toString();
  var match = key.match(findProc);
  var decrypted;
  if (!match) {
    var match2 = key.match(fullRegex);
    decrypted = new Buffer(match2[2].replace(/\n\r?/g, ''), 'base64');
  } else {
    var suite = 'aes' + match[1];
    var iv = new Buffer(match[2], 'hex');
    var cipherText = new Buffer(match[3].replace(/\n\r?/g, ''), 'base64');
    var cipherKey = evp(password, iv.slice(0,8), parseInt(match[1]));
    var out = [];
    var cipher = ciphers.createDecipheriv(suite, cipherKey, iv);
    out.push(cipher.update(cipherText));
    out.push(cipher.final());
    decrypted = Buffer.concat(out);
  }
  var tag = key.match(startRegex)[1] + ' KEY';
  return {
    tag: tag,
    data: decrypted
  };
};
function wrap(str) {
  var chunks = [];
  while (str) {
    if (str.length < 64) {
      chunks.push(str);
      break;
    }
    else {
      chunks.push(str.slice(0, 64));
      str = str.slice(64);
    }
  }
  return chunks.join("\n");
}
}).call(this,require("buffer").Buffer)
},{"./EVP_BytesToKey":101,"browserify-aes":61,"buffer":53}],105:[function(require,module,exports){
(function (Buffer){
var asn1 = require('./asn1');
var aesid = require('./aesid.json');
var fixProc = require('./fixProc');
var ciphers = require('browserify-aes');
var compat = require('pbkdf2-compat');
module.exports = parseKeys;

function parseKeys(buffer) {
  var password;
  if (typeof buffer === 'object' && !Buffer.isBuffer(buffer)) {
    password = buffer.passphrase;
    buffer = buffer.key;
  }
  if (typeof buffer === 'string') {
    buffer = new Buffer(buffer);
  }

  var stripped = fixProc(buffer, password);

  var type = stripped.tag;
  var data = stripped.data;
  var subtype,ndata;
  switch (type) {
    case 'PUBLIC KEY':
      ndata = asn1.PublicKey.decode(data, 'der');
      subtype = ndata.algorithm.algorithm.join('.');
      switch(subtype) {
        case '1.2.840.113549.1.1.1':
          return asn1.RSAPublicKey.decode(ndata.subjectPublicKey.data, 'der');
        case '1.2.840.10045.2.1':
        ndata.subjectPrivateKey = ndata.subjectPublicKey;
          return {
            type: 'ec',
            data:  ndata
          };
        case '1.2.840.10040.4.1':
          ndata.algorithm.params.pub_key = asn1.DSAparam.decode(ndata.subjectPublicKey.data, 'der');
          return {
            type: 'dsa',
            data: ndata.algorithm.params
          };
        default: throw new Error('unknown key id ' +  subtype);
      }
      throw new Error('unknown key type ' +  type);
    case 'ENCRYPTED PRIVATE KEY':
      data = asn1.EncryptedPrivateKey.decode(data, 'der');
      data = decrypt(data, password);
    case 'PRIVATE KEY':
      ndata = asn1.PrivateKey.decode(data, 'der');
      subtype = ndata.algorithm.algorithm.join('.');
      switch(subtype) {
        case '1.2.840.113549.1.1.1':
          return asn1.RSAPrivateKey.decode(ndata.subjectPrivateKey, 'der');
        case '1.2.840.10045.2.1':
          return {
            curve: ndata.algorithm.curve,
            privateKey: asn1.ECPrivateKey.decode(ndata.subjectPrivateKey, 'der').privateKey
          };
        case '1.2.840.10040.4.1':
          ndata.algorithm.params.priv_key = asn1.DSAparam.decode(ndata.subjectPrivateKey, 'der');
          return {
            type: 'dsa',
            params: ndata.algorithm.params
          };
        default: throw new Error('unknown key id ' +  subtype);
      }
      throw new Error('unknown key type ' +  type);
    case 'RSA PUBLIC KEY':
      return asn1.RSAPublicKey.decode(data, 'der');
    case 'RSA PRIVATE KEY':
      return asn1.RSAPrivateKey.decode(data, 'der');
    case 'DSA PRIVATE KEY':
      return {
        type: 'dsa',
        params: asn1.DSAPrivateKey.decode(data, 'der')
      };
    case 'EC PRIVATE KEY':
      data = asn1.ECPrivateKey.decode(data, 'der');
      return {
        curve: data.parameters.value,
        privateKey: data.privateKey
      };
    default: throw new Error('unknown key type ' +  type);
  }
}
parseKeys.signature = asn1.signature;
function decrypt(data, password) {
  var salt = data.algorithm.decrypt.kde.kdeparams.salt;
  var iters = data.algorithm.decrypt.kde.kdeparams.iters;
  var algo = aesid[data.algorithm.decrypt.cipher.algo.join('.')];
  var iv = data.algorithm.decrypt.cipher.iv;
  var cipherText = data.subjectPrivateKey;
  var keylen = parseInt(algo.split('-')[1], 10)/8;
  var key = compat.pbkdf2Sync(password, salt, iters, keylen);
  var cipher = ciphers.createDecipheriv(algo, key, iv);
  var out = [];
  out.push(cipher.update(cipherText));
  out.push(cipher.final());
  return Buffer.concat(out);
}
}).call(this,require("buffer").Buffer)
},{"./aesid.json":102,"./asn1":103,"./fixProc":104,"browserify-aes":61,"buffer":53,"pbkdf2-compat":119}],106:[function(require,module,exports){
var asn1 = exports;

asn1.bignum = require('bn.js');

asn1.define = require('./asn1/api').define;
asn1.base = require('./asn1/base');
asn1.constants = require('./asn1/constants');
asn1.decoders = require('./asn1/decoders');
asn1.encoders = require('./asn1/encoders');

},{"./asn1/api":107,"./asn1/base":109,"./asn1/constants":113,"./asn1/decoders":115,"./asn1/encoders":117,"bn.js":79}],107:[function(require,module,exports){
var asn1 = require('../asn1');
var inherits = require('inherits');

var api = exports;

api.define = function define(name, body) {
  return new Entity(name, body);
};

function Entity(name, body) {
  this.name = name;
  this.body = body;

  this.decoders = {};
  this.encoders = {};
};

Entity.prototype._createNamed = function createNamed(base) {
  var named;
  try {
    named = require('vm').runInThisContext(
      '(function ' + this.name + '(entity) {\n' +
      '  this._initNamed(entity);\n' +
      '})'
    );
  } catch (e) {
    named = function (entity) {
      this._initNamed(entity);
    };
  }
  inherits(named, base);
  named.prototype._initNamed = function initnamed(entity) {
    base.call(this, entity);
  };

  return new named(this);
};

Entity.prototype._getDecoder = function _getDecoder(enc) {
  if (!this.decoders.hasOwnProperty(enc))
    this.decoders[enc] = this._createNamed(asn1.decoders[enc]);
  return this.decoders[enc];
};

Entity.prototype.decode = function decode(data, enc, options) {
  return this._getDecoder(enc).decode(data, options);
};

Entity.prototype._getEncoder = function _getEncoder(enc) {
  if (!this.encoders.hasOwnProperty(enc))
    this.encoders[enc] = this._createNamed(asn1.encoders[enc]);
  return this.encoders[enc];
};

Entity.prototype.encode = function encode(data, enc, /* internal */ reporter) {
  return this._getEncoder(enc).encode(data, reporter);
};

},{"../asn1":106,"inherits":195,"vm":218}],108:[function(require,module,exports){
var inherits = require('inherits');
var Reporter = require('../base').Reporter;
var Buffer = require('buffer').Buffer;

function DecoderBuffer(base, options) {
  Reporter.call(this, options);
  if (!Buffer.isBuffer(base)) {
    this.error('Input not Buffer');
    return;
  }

  this.base = base;
  this.offset = 0;
  this.length = base.length;
}
inherits(DecoderBuffer, Reporter);
exports.DecoderBuffer = DecoderBuffer;

DecoderBuffer.prototype.save = function save() {
  return { offset: this.offset };
};

DecoderBuffer.prototype.restore = function restore(save) {
  var res = new DecoderBuffer(this.base);
  res.offset = save.offset;
  res.length = this.offset;

  this.offset = save.offset;

  return res;
};

DecoderBuffer.prototype.isEmpty = function isEmpty() {
  return this.offset === this.length;
};

DecoderBuffer.prototype.readUInt8 = function readUInt8(fail) {
  if (this.offset + 1 <= this.length)
    return this.base.readUInt8(this.offset++, true);
  else
    return this.error(fail || 'DecoderBuffer overrun');
}

DecoderBuffer.prototype.skip = function skip(bytes, fail) {
  if (!(this.offset + bytes <= this.length))
    return this.error(fail || 'DecoderBuffer overrun');

  var res = new DecoderBuffer(this.base);

  res._reporterState = this._reporterState;

  res.offset = this.offset;
  res.length = this.offset + bytes;
  this.offset += bytes;
  return res;
}

DecoderBuffer.prototype.raw = function raw(save) {
  return this.base.slice(save ? save.offset : this.offset, this.length);
}

function EncoderBuffer(value, reporter) {
  if (Array.isArray(value)) {
    this.length = 0;
    this.value = value.map(function(item) {
      if (!(item instanceof EncoderBuffer))
        item = new EncoderBuffer(item, reporter);
      this.length += item.length;
      return item;
    }, this);
  } else if (typeof value === 'number') {
    if (!(0 <= value && value <= 0xff))
      return reporter.error('non-byte EncoderBuffer value');
    this.value = value;
    this.length = 1;
  } else if (typeof value === 'string') {
    this.value = value;
    this.length = Buffer.byteLength(value);
  } else if (Buffer.isBuffer(value)) {
    this.value = value;
    this.length = value.length;
  } else {
    return reporter.error('Unsupported type: ' + typeof value);
  }
}
exports.EncoderBuffer = EncoderBuffer;

EncoderBuffer.prototype.join = function join(out, offset) {
  if (!out)
    out = new Buffer(this.length);
  if (!offset)
    offset = 0;

  if (this.length === 0)
    return out;

  if (Array.isArray(this.value)) {
    this.value.forEach(function(item) {
      item.join(out, offset);
      offset += item.length;
    });
  } else {
    if (typeof this.value === 'number')
      out[offset] = this.value;
    else if (typeof this.value === 'string')
      out.write(this.value, offset);
    else if (Buffer.isBuffer(this.value))
      this.value.copy(out, offset);
    offset += this.length;
  }

  return out;
};

},{"../base":109,"buffer":53,"inherits":195}],109:[function(require,module,exports){
var base = exports;

base.Reporter = require('./reporter').Reporter;
base.DecoderBuffer = require('./buffer').DecoderBuffer;
base.EncoderBuffer = require('./buffer').EncoderBuffer;
base.Node = require('./node');

},{"./buffer":108,"./node":110,"./reporter":111}],110:[function(require,module,exports){
var Reporter = require('../base').Reporter;
var EncoderBuffer = require('../base').EncoderBuffer;
var assert = require('minimalistic-assert');

var tags = [
  'seq', 'seqof', 'set', 'setof', 'octstr', 'bitstr', 'objid', 'bool',
  'gentime', 'utctime', 'null_', 'enum', 'int', 'ia5str'
];

var methods = [
  'key', 'obj', 'use', 'optional', 'explicit', 'implicit', 'def', 'choice',
  'any'
].concat(tags);

var overrided = [
  '_peekTag', '_decodeTag', '_use',
  '_decodeStr', '_decodeObjid', '_decodeTime',
  '_decodeNull', '_decodeInt', '_decodeBool', '_decodeList',

  '_encodeComposite', '_encodeStr', '_encodeObjid', '_encodeTime',
  '_encodeNull', '_encodeInt', '_encodeBool'
];

function Node(enc, parent) {
  var state = {};
  this._baseState = state;

  state.enc = enc;

  state.parent = parent || null;
  state.children = null;

  state.tag = null;
  state.args = null;
  state.reverseArgs = null;
  state.choice = null;
  state.optional = false;
  state.any = false;
  state.obj = false;
  state.use = null;
  state.useDecoder = null;
  state.key = null;
  state['default'] = null;
  state.explicit = null;
  state.implicit = null;

  if (!state.parent) {
    state.children = [];
    this._wrap();
  }
}
module.exports = Node;

var stateProps = [
  'enc', 'parent', 'children', 'tag', 'args', 'reverseArgs', 'choice',
  'optional', 'any', 'obj', 'use', 'alteredUse', 'key', 'default', 'explicit',
  'implicit'
];

Node.prototype.clone = function clone() {
  var state = this._baseState;
  var cstate = {};
  stateProps.forEach(function(prop) {
    cstate[prop] = state[prop];
  });
  var res = new this.constructor(cstate.parent);
  res._baseState = cstate;
  return res;
};

Node.prototype._wrap = function wrap() {
  var state = this._baseState;
  methods.forEach(function(method) {
    this[method] = function _wrappedMethod() {
      var clone = new this.constructor(this);
      state.children.push(clone);
      return clone[method].apply(clone, arguments);
    };
  }, this);
};

Node.prototype._init = function init(body) {
  var state = this._baseState;

  assert(state.parent === null);
  body.call(this);

  state.children = state.children.filter(function(child) {
    return child._baseState.parent === this;
  }, this);
  assert.equal(state.children.length, 1, 'Root node can have only one child');
};

Node.prototype._useArgs = function useArgs(args) {
  var state = this._baseState;

  var children = args.filter(function(arg) {
    return arg instanceof this.constructor;
  }, this);
  args = args.filter(function(arg) {
    return !(arg instanceof this.constructor);
  }, this);

  if (children.length !== 0) {
    assert(state.children === null);
    state.children = children;

    children.forEach(function(child) {
      child._baseState.parent = this;
    }, this);
  }
  if (args.length !== 0) {
    assert(state.args === null);
    state.args = args;
    state.reverseArgs = args.map(function(arg) {
      if (typeof arg !== 'object' || arg.constructor !== Object)
        return arg;

      var res = {};
      Object.keys(arg).forEach(function(key) {
        if (key == (key | 0))
          key |= 0;
        var value = arg[key];
        res[value] = key;
      });
      return res;
    });
  }
};


overrided.forEach(function(method) {
  Node.prototype[method] = function _overrided() {
    var state = this._baseState;
    throw new Error(method + ' not implemented for encoding: ' + state.enc);
  };
});


tags.forEach(function(tag) {
  Node.prototype[tag] = function _tagMethod() {
    var state = this._baseState;
    var args = Array.prototype.slice.call(arguments);

    assert(state.tag === null);
    state.tag = tag;

    this._useArgs(args);

    return this;
  };
});

Node.prototype.use = function use(item) {
  var state = this._baseState;

  assert(state.use === null);
  state.use = item;

  return this;
};

Node.prototype.optional = function optional() {
  var state = this._baseState;

  state.optional = true;

  return this;
};

Node.prototype.def = function def(val) {
  var state = this._baseState;

  assert(state['default'] === null);
  state['default'] = val;
  state.optional = true;

  return this;
};

Node.prototype.explicit = function explicit(num) {
  var state = this._baseState;

  assert(state.explicit === null && state.implicit === null);
  state.explicit = num;

  return this;
};

Node.prototype.implicit = function implicit(num) {
  var state = this._baseState;

  assert(state.explicit === null && state.implicit === null);
  state.implicit = num;

  return this;
};

Node.prototype.obj = function obj() {
  var state = this._baseState;
  var args = Array.prototype.slice.call(arguments);

  state.obj = true;

  if (args.length !== 0)
    this._useArgs(args);

  return this;
};

Node.prototype.key = function key(newKey) {
  var state = this._baseState;

  assert(state.key === null);
  state.key = newKey;

  return this;
};

Node.prototype.any = function any() {
  var state = this._baseState;

  state.any = true;

  return this;
};

Node.prototype.choice = function choice(obj) {
  var state = this._baseState;

  assert(state.choice === null);
  state.choice = obj;
  this._useArgs(Object.keys(obj).map(function(key) {
    return obj[key];
  }));

  return this;
};


Node.prototype._decode = function decode(input) {
  var state = this._baseState;

  if (state.parent === null)
    return input.wrapResult(state.children[0]._decode(input));

  var result = state['default'];
  var present = true;

  var prevKey;
  if (state.key !== null)
    prevKey = input.enterKey(state.key);

  if (state.optional) {
    present = this._peekTag(
      input,
      state.explicit !== null ? state.explicit :
          state.implicit !== null ? state.implicit :
              state.tag || 0
    );
    if (input.isError(present))
      return present;
  }

  var prevObj;
  if (state.obj && present)
    prevObj = input.enterObject();

  if (present) {
    if (state.explicit !== null) {
      var explicit = this._decodeTag(input, state.explicit);
      if (input.isError(explicit))
        return explicit;
      input = explicit;
    }

    if (state.use === null && state.choice === null) {
      if (state.any)
        var save = input.save();
      var body = this._decodeTag(
        input,
        state.implicit !== null ? state.implicit : state.tag,
        state.any
      );
      if (input.isError(body))
        return body;

      if (state.any)
        result = input.raw(save);
      else
        input = body;
    }

    if (state.any)
      result = result;
    else if (state.choice === null)
      result = this._decodeGeneric(state.tag, input);
    else
      result = this._decodeChoice(input);

    if (input.isError(result))
      return result;

    if (!state.any && state.choice === null && state.children !== null) {
      var fail = state.children.some(function decodeChildren(child) {
        child._decode(input);
      });
      if (fail)
        return err;
    }
  }

  if (state.obj && present)
    result = input.leaveObject(prevObj);

  if (state.key !== null && (result !== null || present === true))
    input.leaveKey(prevKey, state.key, result);

  return result;
};

Node.prototype._decodeGeneric = function decodeGeneric(tag, input) {
  var state = this._baseState;

  if (tag === 'seq' || tag === 'set')
    return null;
  if (tag === 'seqof' || tag === 'setof')
    return this._decodeList(input, tag, state.args[0]);
  else if (tag === 'octstr' || tag === 'bitstr' || tag === 'ia5str')
    return this._decodeStr(input, tag);
  else if (tag === 'objid' && state.args)
    return this._decodeObjid(input, state.args[0], state.args[1]);
  else if (tag === 'objid')
    return this._decodeObjid(input, null, null);
  else if (tag === 'gentime' || tag === 'utctime')
    return this._decodeTime(input, tag);
  else if (tag === 'null_')
    return this._decodeNull(input);
  else if (tag === 'bool')
    return this._decodeBool(input);
  else if (tag === 'int' || tag === 'enum')
    return this._decodeInt(input, state.args && state.args[0]);
  else if (state.use !== null)
    return this._getUse(state.use, input._reporterState.obj)._decode(input);
  else
    return input.error('unknown tag: ' + tag);

  return null;
};

Node.prototype._getUse = function _getUse(entity, obj) {

  var state = this._baseState;
  state.useDecoder = this._use(entity, obj);
  assert(state.useDecoder._baseState.parent === null);
  state.useDecoder = state.useDecoder._baseState.children[0];
  if (state.implicit !== state.useDecoder._baseState.implicit) {
    state.useDecoder = state.useDecoder.clone();
    state.useDecoder._baseState.implicit = state.implicit;
  }
  return state.useDecoder;
};

Node.prototype._decodeChoice = function decodeChoice(input) {
  var state = this._baseState;
  var result = null;
  var match = false;

  Object.keys(state.choice).some(function(key) {
    var save = input.save();
    var node = state.choice[key];
    try {
      var value = node._decode(input);
      if (input.isError(value))
        return false;

      result = { type: key, value: value };
      match = true;
    } catch (e) {
      input.restore(save);
      return false;
    }
    return true;
  }, this);

  if (!match)
    return input.error('Choice not matched');

  return result;
};


Node.prototype._createEncoderBuffer = function createEncoderBuffer(data) {
  return new EncoderBuffer(data, this.reporter);
};

Node.prototype._encode = function encode(data, reporter, parent) {
  var state = this._baseState;
  if (state['default'] !== null && state['default'] === data)
    return;

  var result = this._encodeValue(data, reporter, parent);
  if (result === undefined)
    return;

  if (this._skipDefault(result, reporter, parent))
    return;

  return result;
};

Node.prototype._encodeValue = function encode(data, reporter, parent) {
  var state = this._baseState;

  if (state.parent === null)
    return state.children[0]._encode(data, reporter || new Reporter());

  var result = null;
  var present = true;

  this.reporter = reporter;

  if (state.optional && data === undefined) {
    if (state['default'] !== null)
      data = state['default']
    else
      return;
  }

  var prevKey;

  var content = null;
  var primitive = false;
  if (state.any) {
    result = this._createEncoderBuffer(data);
  } else if (state.choice) {
    result = this._encodeChoice(data, reporter);
  } else if (state.children) {
    content = state.children.map(function(child) {
      if (child._baseState.tag === 'null_')
        return child._encode(null, reporter, data);

      if (child._baseState.key === null)
        return reporter.error('Child should have a key');
      var prevKey = reporter.enterKey(child._baseState.key);

      if (typeof data !== 'object')
        return reporter.error('Child expected, but input is not object');

      var res = child._encode(data[child._baseState.key], reporter, data);
      reporter.leaveKey(prevKey);

      return res;
    }, this).filter(function(child) {
      return child;
    });

    content = this._createEncoderBuffer(content);
  } else {
    if (state.tag === 'seqof' || state.tag === 'setof') {
      if (!(state.args && state.args.length === 1))
        return reporter.error('Too many args for : ' + state.tag);

      if (!Array.isArray(data))
        return reporter.error('seqof/setof, but data is not Array');

      var child = this.clone();
      child._baseState.implicit = null;
      content = this._createEncoderBuffer(data.map(function(item) {
        var state = this._baseState;

        return this._getUse(state.args[0], data)._encode(item, reporter);
      }, child));
    } else if (state.use !== null) {
      result = this._getUse(state.use, parent)._encode(data, reporter);
    } else {
      content = this._encodePrimitive(state.tag, data);
      primitive = true;
    }
  }

  var result;
  if (!state.any && state.choice === null) {
    var tag = state.implicit !== null ? state.implicit : state.tag;
    var cls = state.implicit === null ? 'universal' : 'context';

    if (tag === null) {
      if (state.use === null)
        reporter.error('Tag could be ommited only for .use()');
    } else {
      if (state.use === null)
        result = this._encodeComposite(tag, primitive, cls, content);
    }
  }

  if (state.explicit !== null)
    result = this._encodeComposite(state.explicit, false, 'context', result);

  return result;
};

Node.prototype._encodeChoice = function encodeChoice(data, reporter) {
  var state = this._baseState;

  var node = state.choice[data.type];
  if (!node) {
    assert(
        false,
        data.type + ' not found in ' +
            JSON.stringify(Object.keys(state.choice)));
  }
  return node._encode(data.value, reporter);
};

Node.prototype._encodePrimitive = function encodePrimitive(tag, data) {
  var state = this._baseState;

  if (tag === 'octstr' || tag === 'bitstr' || tag === 'ia5str')
    return this._encodeStr(data, tag);
  else if (tag === 'objid' && state.args)
    return this._encodeObjid(data, state.reverseArgs[0], state.args[1]);
  else if (tag === 'objid')
    return this._encodeObjid(data, null, null);
  else if (tag === 'gentime' || tag === 'utctime')
    return this._encodeTime(data, tag);
  else if (tag === 'null_')
    return this._encodeNull();
  else if (tag === 'int' || tag === 'enum')
    return this._encodeInt(data, state.args && state.reverseArgs[0]);
  else if (tag === 'bool')
    return this._encodeBool(data);
  else
    throw new Error('Unsupported tag: ' + tag);
};

},{"../base":109,"minimalistic-assert":118}],111:[function(require,module,exports){
var inherits = require('inherits');

function Reporter(options) {
  this._reporterState = {
    obj: null,
    path: [],
    options: options || {},
    errors: []
  };
}
exports.Reporter = Reporter;

Reporter.prototype.isError = function isError(obj) {
  return obj instanceof ReporterError;
};

Reporter.prototype.enterKey = function enterKey(key) {
  return this._reporterState.path.push(key);
};

Reporter.prototype.leaveKey = function leaveKey(index, key, value) {
  var state = this._reporterState;

  state.path = state.path.slice(0, index - 1);
  if (state.obj !== null)
    state.obj[key] = value;
};

Reporter.prototype.enterObject = function enterObject() {
  var state = this._reporterState;

  var prev = state.obj;
  state.obj = {};
  return prev;
};

Reporter.prototype.leaveObject = function leaveObject(prev) {
  var state = this._reporterState;

  var now = state.obj;
  state.obj = prev;
  return now;
};

Reporter.prototype.error = function error(msg) {
  var err;
  var state = this._reporterState;

  var inherited = msg instanceof ReporterError;
  if (inherited) {
    err = msg;
  } else {
    err = new ReporterError(state.path.map(function(elem) {
      return '[' + JSON.stringify(elem) + ']';
    }).join(''), msg.message || msg, msg.stack);
  }

  if (!state.options.partial)
    throw err;

  if (!inherited)
    state.errors.push(err);

  return err;
};

Reporter.prototype.wrapResult = function wrapResult(result) {
  var state = this._reporterState;
  if (!state.options.partial)
    return result;

  return {
    result: this.isError(result) ? null : result,
    errors: state.errors
  };
};

function ReporterError(path, msg) {
  this.path = path;
  this.rethrow(msg);
};
inherits(ReporterError, Error);

ReporterError.prototype.rethrow = function rethrow(msg) {
  this.message = msg + ' at: ' + (this.path || '(shallow)');
  Error.captureStackTrace(this, ReporterError);

  return this;
};

},{"inherits":195}],112:[function(require,module,exports){
var constants = require('../constants');

exports.tagClass = {
  0: 'universal',
  1: 'application',
  2: 'context',
  3: 'private'
};
exports.tagClassByName = constants._reverse(exports.tagClass);

exports.tag = {
  0x00: 'end',
  0x01: 'bool',
  0x02: 'int',
  0x03: 'bitstr',
  0x04: 'octstr',
  0x05: 'null_',
  0x06: 'objid',
  0x07: 'objDesc',
  0x08: 'external',
  0x09: 'real',
  0x0a: 'enum',
  0x0b: 'embed',
  0x0c: 'utf8str',
  0x0d: 'relativeOid',
  0x10: 'seq',
  0x11: 'set',
  0x12: 'numstr',
  0x13: 'printstr',
  0x14: 't61str',
  0x15: 'videostr',
  0x16: 'ia5str',
  0x17: 'utctime',
  0x18: 'gentime',
  0x19: 'graphstr',
  0x1a: 'iso646str',
  0x1b: 'genstr',
  0x1c: 'unistr',
  0x1d: 'charstr',
  0x1e: 'bmpstr'
};
exports.tagByName = constants._reverse(exports.tag);

},{"../constants":113}],113:[function(require,module,exports){
var constants = exports;

constants._reverse = function reverse(map) {
  var res = {};

  Object.keys(map).forEach(function(key) {
    if ((key | 0) == key)
      key = key | 0;

    var value = map[key];
    res[value] = key;
  });

  return res;
};

constants.der = require('./der');

},{"./der":112}],114:[function(require,module,exports){
var inherits = require('inherits');

var asn1 = require('../../asn1');
var base = asn1.base;
var bignum = asn1.bignum;

var der = asn1.constants.der;

function DERDecoder(entity) {
  this.enc = 'der';
  this.name = entity.name;
  this.entity = entity;

  this.tree = new DERNode();
  this.tree._init(entity.body);
};
module.exports = DERDecoder;

DERDecoder.prototype.decode = function decode(data, options) {
  if (!(data instanceof base.DecoderBuffer))
    data = new base.DecoderBuffer(data, options);

  return this.tree._decode(data, options);
};


function DERNode(parent) {
  base.Node.call(this, 'der', parent);
}
inherits(DERNode, base.Node);

DERNode.prototype._peekTag = function peekTag(buffer, tag) {
  if (buffer.isEmpty())
    return false;

  var state = buffer.save();
  var decodedTag = derDecodeTag(buffer, 'Failed to peek tag: "' + tag + '"');
  if (buffer.isError(decodedTag))
    return decodedTag;

  buffer.restore(state);

  return decodedTag.tag === tag || decodedTag.tagStr === tag;
};

DERNode.prototype._decodeTag = function decodeTag(buffer, tag, any) {
  var decodedTag = derDecodeTag(buffer,
                                'Failed to decode tag of "' + tag + '"');
  if (buffer.isError(decodedTag))
    return decodedTag;

  var len = derDecodeLen(buffer,
                         decodedTag.primitive,
                         'Failed to get length of "' + tag + '"');

  if (buffer.isError(len))
    return len;

  if (!any &&
      decodedTag.tag !== tag &&
      decodedTag.tagStr !== tag &&
      decodedTag.tagStr + 'of' !== tag) {
    return buffer.error('Failed to match tag: "' + tag + '"');
  }

  if (decodedTag.primitive || len !== null)
    return buffer.skip(len, 'Failed to match body of: "' + tag + '"');

  var state = buffer.start();
  var res = this._skipUntilEnd(
      buffer,
      'Failed to skip indefinite length body: "' + this.tag + '"');
  if (buffer.isError(res))
    return res;

  return buffer.cut(state);
};

DERNode.prototype._skipUntilEnd = function skipUntilEnd(buffer, fail) {
  while (true) {
    var tag = derDecodeTag(buffer, fail);
    if (buffer.isError(tag))
      return tag;
    var len = derDecodeLen(buffer, tag.primitive, fail);
    if (buffer.isError(len))
      return len;

    var res;
    if (tag.primitive || len !== null)
      res = buffer.skip(len)
    else
      res = this._skipUntilEnd(buffer, fail);

    if (buffer.isError(res))
      return res;

    if (tag.tagStr === 'end')
      break;
  }
};

DERNode.prototype._decodeList = function decodeList(buffer, tag, decoder) {
  var result = [];
  while (!buffer.isEmpty()) {
    var possibleEnd = this._peekTag(buffer, 'end');
    if (buffer.isError(possibleEnd))
      return possibleEnd;

    var res = decoder.decode(buffer, 'der');
    if (buffer.isError(res) && possibleEnd)
      break;
    result.push(res);
  }
  return result;
};

DERNode.prototype._decodeStr = function decodeStr(buffer, tag) {
  if (tag === 'octstr') {
    return buffer.raw();
  } else if (tag === 'bitstr') {
    var unused = buffer.readUInt8();
    if (buffer.isError(unused))
      return unused;

    return { unused: unused, data: buffer.raw() };
  } else if (tag === 'ia5str') {
    return buffer.raw().toString();
  } else {
    return this.error('Decoding of string type: ' + tag + ' unsupported');
  }
};

DERNode.prototype._decodeObjid = function decodeObjid(buffer, values, relative) {
  var identifiers = [];
  var ident = 0;
  while (!buffer.isEmpty()) {
    var subident = buffer.readUInt8();
    ident <<= 7;
    ident |= subident & 0x7f;
    if ((subident & 0x80) === 0) {
      identifiers.push(ident);
      ident = 0;
    }
  }
  if (subident & 0x80)
    identifiers.push(ident);

  var first = (identifiers[0] / 40) | 0;
  var second = identifiers[0] % 40;

  if (relative)
    result = identifiers;
  else
    result = [first, second].concat(identifiers.slice(1));

  if (values)
    result = values[result.join(' ')];

  return result;
};

DERNode.prototype._decodeTime = function decodeTime(buffer, tag) {
  var str = buffer.raw().toString();
  if (tag === 'gentime') {
    var year = str.slice(0, 4) | 0;
    var mon = str.slice(4, 6) | 0;
    var day = str.slice(6, 8) | 0;
    var hour = str.slice(8, 10) | 0;
    var min = str.slice(10, 12) | 0;
    var sec = str.slice(12, 14) | 0;
  } else if (tag === 'utctime') {
    var year = str.slice(0, 2) | 0;
    var mon = str.slice(2, 4) | 0;
    var day = str.slice(4, 6) | 0;
    var hour = str.slice(6, 8) | 0;
    var min = str.slice(8, 10) | 0;
    var sec = str.slice(10, 12) | 0;
    if (year < 70)
      year = 2000 + year;
    else
      year = 1900 + year;
  } else {
    return this.error('Decoding ' + tag + ' time is not supported yet');
  }

  return Date.UTC(year, mon - 1, day, hour, min, sec, 0);
};

DERNode.prototype._decodeNull = function decodeNull(buffer) {
  return null;
};

DERNode.prototype._decodeBool = function decodeBool(buffer) {
  var res = buffer.readUInt8();
  if (buffer.isError(res))
    return res;
  else
    return res !== 0;
};

DERNode.prototype._decodeInt = function decodeInt(buffer, values) {
  var res = 0;

  var raw = buffer.raw();
  if (raw.length > 3)
    return new bignum(raw);

  while (!buffer.isEmpty()) {
    res <<= 8;
    var i = buffer.readUInt8();
    if (buffer.isError(i))
      return i;
    res |= i;
  }

  if (values)
    res = values[res] || res;

  return res;
};

DERNode.prototype._use = function use(entity, obj) {
  if (typeof entity === 'function')
    entity = entity(obj);
  return entity._getDecoder('der').tree;
};


function derDecodeTag(buf, fail) {
  var tag = buf.readUInt8(fail);
  if (buf.isError(tag))
    return tag;

  var cls = der.tagClass[tag >> 6];
  var primitive = (tag & 0x20) === 0;

  if ((tag & 0x1f) === 0x1f) {
    var oct = tag;
    tag = 0;
    while ((oct & 0x80) === 0x80) {
      oct = buf.readUInt8(fail);
      if (buf.isError(oct))
        return oct;

      tag <<= 7;
      tag |= oct & 0x7f;
    }
  } else {
    tag &= 0x1f;
  }
  var tagStr = der.tag[tag];

  return {
    cls: cls,
    primitive: primitive,
    tag: tag,
    tagStr: tagStr
  };
}

function derDecodeLen(buf, primitive, fail) {
  var len = buf.readUInt8(fail);
  if (buf.isError(len))
    return len;

  if (!primitive && len === 0x80)
    return null;

  if ((len & 0x80) === 0) {
    return len;
  }

  var num = len & 0x7f;
  if (num >= 4)
    return buf.error('length octect is too long');

  len = 0;
  for (var i = 0; i < num; i++) {
    len <<= 8;
    var j = buf.readUInt8(fail);
    if (buf.isError(j))
      return j;
    len |= j;
  }

  return len;
}

},{"../../asn1":106,"inherits":195}],115:[function(require,module,exports){
var decoders = exports;

decoders.der = require('./der');

},{"./der":114}],116:[function(require,module,exports){
var inherits = require('inherits');
var Buffer = require('buffer').Buffer;

var asn1 = require('../../asn1');
var base = asn1.base;
var bignum = asn1.bignum;

var der = asn1.constants.der;

function DEREncoder(entity) {
  this.enc = 'der';
  this.name = entity.name;
  this.entity = entity;

  this.tree = new DERNode();
  this.tree._init(entity.body);
};
module.exports = DEREncoder;

DEREncoder.prototype.encode = function encode(data, reporter) {
  return this.tree._encode(data, reporter).join();
};


function DERNode(parent) {
  base.Node.call(this, 'der', parent);
}
inherits(DERNode, base.Node);

DERNode.prototype._encodeComposite = function encodeComposite(tag,
                                                              primitive,
                                                              cls,
                                                              content) {
  var encodedTag = encodeTag(tag, primitive, cls, this.reporter);

  if (content.length < 0x80) {
    var header = new Buffer(2);
    header[0] = encodedTag;
    header[1] = content.length;
    return this._createEncoderBuffer([ header, content ]);
  }

  var lenOctets = 1;
  for (var i = content.length; i >= 0x100; i >>= 8)
    lenOctets++;

  var header = new Buffer(1 + 1 + lenOctets);
  header[0] = encodedTag;
  header[1] = 0x80 | lenOctets;

  for (var i = 1 + lenOctets, j = content.length; j > 0; i--, j >>= 8)
    header[i] = j & 0xff;

  return this._createEncoderBuffer([ header, content ]);
};

DERNode.prototype._encodeStr = function encodeStr(str, tag) {
  if (tag === 'octstr')
    return this._createEncoderBuffer(str);
  else if (tag === 'bitstr')
    return this._createEncoderBuffer([ str.unused | 0, str.data ]);
  else if (tag === 'ia5str')
    return this._createEncoderBuffer(str);
  return this.reporter.error('Encoding of string type: ' + tag +
                             ' unsupported');
};

DERNode.prototype._encodeObjid = function encodeObjid(id, values, relative) {
  if (typeof id === 'string') {
    if (!values)
      return this.reporter.error('string objid given, but no values map found');
    if (!values.hasOwnProperty(id))
      return this.reporter.error('objid not found in values map');
    id = values[id].split(/\s+/g);
    for (var i = 0; i < id.length; i++)
      id[i] |= 0;
  } else if (Array.isArray(id)) {
    id = id.slice();
  }

  if (!Array.isArray(id)) {
    return this.reporter.error('objid() should be either array or string, ' +
                               'got: ' + JSON.stringify(id));
  }

  if (!relative) {
    if (id[1] >= 40)
      return this.reporter.error('Second objid identifier OOB');
    id.splice(0, 2, id[0] * 40 + id[1]);
  }

  var size = 0;
  for (var i = 0; i < id.length; i++) {
    var ident = id[i];
    for (size++; ident >= 0x80; ident >>= 7)
      size++;
  }

  var objid = new Buffer(size);
  var offset = objid.length - 1;
  for (var i = id.length - 1; i >= 0; i--) {
    var ident = id[i];
    objid[offset--] = ident & 0x7f;
    while ((ident >>= 7) > 0)
      objid[offset--] = 0x80 | (ident & 0x7f);
  }

  return this._createEncoderBuffer(objid);
};

function two(num) {
  if (num <= 10)
    return '0' + num;
  else
    return num;
}

DERNode.prototype._encodeTime = function encodeTime(time, tag) {
  var str;
  var date = new Date(time);

  if (tag === 'gentime') {
    str = [
      date.getFullYear(),
      two(date.getUTCMonth() + 1),
      two(date.getUTCDate()),
      two(date.getUTCHours()),
      two(date.getUTCMinutes()),
      two(date.getUTCSeconds()),
      'Z'
    ].join('');
  } else if (tag === 'utctime') {
    str = [
      date.getFullYear() % 100,
      two(date.getUTCMonth() + 1),
      two(date.getUTCDate()),
      two(date.getUTCHours()),
      two(date.getUTCMinutes()),
      two(date.getUTCSeconds()),
      'Z'
    ].join('');
  } else {
    this.reporter.error('Encoding ' + tag + ' time is not supported yet');
  }

  return this._encodeStr(str, 'octstr');
};

DERNode.prototype._encodeNull = function encodeNull() {
  return this._createEncoderBuffer('');
};

DERNode.prototype._encodeInt = function encodeInt(num, values) {
  if (typeof num === 'string') {
    if (!values)
      return this.reporter.error('String int or enum given, but no values map');
    if (!values.hasOwnProperty(num)) {
      return this.reporter.error('Values map doesn\'t contain: ' +
                                 JSON.stringify(num));
    }
    num = values[num];
  }

  if (bignum !== null && num instanceof bignum) {
    var numArray = num.toArray();
    if(num.sign === false && numArray[0] & 0x80) {
      numArray.unshift(0);
    }
    num = new Buffer(numArray);
  }

  if (Buffer.isBuffer(num)) {
    var size = num.length;
    if (num.length === 0)
      size++;

    var out = new Buffer(size);
    num.copy(out);
    if (num.length === 0)
      out[0] = 0
    return this._createEncoderBuffer(out);
  }

  if (num < 0x80)
    return this._createEncoderBuffer(num);

  if (num < 0x100)
    return this._createEncoderBuffer([0, num]);

  var size = 1;
  for (var i = num; i >= 0x100; i >>= 8)
    size++;

  var out = new Array(size);
  for (var i = out.length - 1; i >= 0; i--) {
    out[i] = num & 0xff;
    num >>= 8;
  }
  if(out[0] & 0x80) {
    out.unshift(0);
  }

  return this._createEncoderBuffer(new Buffer(out));
};

DERNode.prototype._encodeBool = function encodeBool(value) {
  return this._createEncoderBuffer(value ? 0xff : 0);
};

DERNode.prototype._use = function use(entity, obj) {
  if (typeof entity === 'function')
    entity = entity(obj);
  return entity._getEncoder('der').tree;
};

DERNode.prototype._skipDefault = function skipDefault(dataBuffer, reporter, parent) {
  var state = this._baseState;
  var i;
  if (state['default'] === null)
    return false;

  var data = dataBuffer.join();
  if (state.defaultBuffer === undefined)
    state.defaultBuffer = this._encodeValue(state['default'], reporter, parent).join();

  if (data.length !== state.defaultBuffer.length)
    return false;

  for (i=0; i < data.length; i++)
    if (data[i] !== state.defaultBuffer[i])
      return false;

  return true;
};


function encodeTag(tag, primitive, cls, reporter) {
  var res;

  if (tag === 'seqof')
    tag = 'seq';
  else if (tag === 'setof')
    tag = 'set';

  if (der.tagByName.hasOwnProperty(tag))
    res = der.tagByName[tag];
  else if (typeof tag === 'number' && (tag | 0) === tag)
    res = tag;
  else
    return reporter.error('Unknown tag: ' + tag);

  if (res >= 0x1f)
    return reporter.error('Multi-octet tag encoding unsupported');

  if (!primitive)
    res |= 0x20;

  res |= (der.tagClassByName[cls || 'universal'] << 6);

  return res;
}

},{"../../asn1":106,"buffer":53,"inherits":195}],117:[function(require,module,exports){
var encoders = exports;

encoders.der = require('./der');

},{"./der":116}],118:[function(require,module,exports){
module.exports = assert;

function assert(val, msg) {
  if (!val)
    throw new Error(msg || 'Assertion failed');
}

assert.equal = function assertEqual(l, r, msg) {
  if (l != r)
    throw new Error(msg || ('Assertion failed: ' + l + ' != ' + r));
};

},{}],119:[function(require,module,exports){
(function (Buffer){
var createHmac = require('create-hmac')

exports.pbkdf2 = pbkdf2
function pbkdf2 (password, salt, iterations, keylen, digest, callback) {
  if (typeof digest === 'function') {
    callback = digest
    digest = undefined
  }

  if (typeof callback !== 'function') {
    throw new Error('No callback provided to pbkdf2')
  }

  var result = pbkdf2Sync(password, salt, iterations, keylen, digest)
  setTimeout(function () {
    callback(undefined, result)
  })
}

exports.pbkdf2Sync = pbkdf2Sync
function pbkdf2Sync (password, salt, iterations, keylen, digest) {
  if (typeof iterations !== 'number')
    throw new TypeError('Iterations not a number')

  if (iterations < 0)
    throw new TypeError('Bad iterations')

  if (typeof keylen !== 'number')
    throw new TypeError('Key length not a number')

  if (keylen < 0)
    throw new TypeError('Bad key length')

  digest = digest || 'sha1'

  if (!Buffer.isBuffer(password)) password = new Buffer(password)
  if (!Buffer.isBuffer(salt)) salt = new Buffer(salt)

  var hLen
  var l = 1
  var DK = new Buffer(keylen)
  var block1 = new Buffer(salt.length + 4)
  salt.copy(block1, 0, 0, salt.length)

  var r
  var T

  for (var i = 1; i <= l; i++) {
    block1.writeUInt32BE(i, salt.length)
    var U = createHmac(digest, password).update(block1).digest()

    if (!hLen) {
      hLen = U.length
      T = new Buffer(hLen)
      l = Math.ceil(keylen / hLen)
      r = keylen - (l - 1) * hLen

      if (keylen > (Math.pow(2, 32) - 1) * hLen)
        throw new TypeError('keylen exceeds maximum length')
    }

    U.copy(T, 0, 0, hLen)

    for (var j = 1; j < iterations; j++) {
      U = createHmac(digest, password).update(U).digest()

      for (var k = 0; k < hLen; k++) {
        T[k] ^= U[k]
      }
    }

    var destPos = (i - 1) * hLen
    var len = (i === l ? r : hLen)
    T.copy(DK, destPos, 0, len)
  }

  return DK
}

}).call(this,require("buffer").Buffer)
},{"buffer":53,"create-hmac":157}],120:[function(require,module,exports){
(function (Buffer){
var parseKeys = require('parse-asn1')
var BN = require('bn.js')
var elliptic = require('elliptic')
var crt = require('browserify-rsa')
var createHmac = require('create-hmac')
var curves = require('./curves')

module.exports = sign
function sign (hash, key, hashType, signType) {
  var priv = parseKeys(key)
  if (priv.curve) {
    if (signType !== 'ecdsa') {
      throw new Error('wrong public key type')
    }
    return ecSign(hash, priv)
  } else if (priv.type === 'dsa') {
    return dsaSign(hash, priv, hashType)
    if (signType !== 'dsa') {
      throw new Error('wrong public key type')
    }
  } else {
    if (signType !== 'rsa') {
      throw new Error('wrong public key type')
    }
  }
  var len = priv.modulus.byteLength()
  var pad = [ 0, 1 ]
  while (hash.length + pad.length + 1 < len) {
    pad.push(0xff)
  }
  pad.push(0x00)
  var i = -1
  while (++i < hash.length) {
    pad.push(hash[i])
  }

  var out = crt(pad, priv)
  return out
}
function ecSign (hash, priv) {
  var curveId = curves[priv.curve.join('.')]
  if (!curveId)
    throw new Error('unknown curve ' + priv.curve.join('.'))

  var curve = new elliptic.ec(curveId)

  var key = curve.genKeyPair()
  key._importPrivate(priv.privateKey)
  var out = key.sign(hash)
  return new Buffer(out.toDER())
}
function dsaSign (hash, priv, algo) {
  var x = priv.params.priv_key
  var p = priv.params.p
  var q = priv.params.q
  var montq = BN.mont(q)
  var g = priv.params.g
  var r = new BN(0)
  var k
  var H = bits2int(hash, q).mod(q)
  var s = false
  var kv = getKey(x, q, hash, algo)
  while (s === false) {
    k = makeKey(q, kv, algo)
    r = makeR(g, k, p, q)
    s = k.invm(q).imul(H.add(x.mul(r))).mod(q)
    if (!s.cmpn(0)) {
      s = false
      r = new BN(0)
    }
  }
  return toDER(r, s)
}
function toDER (r, s) {
  r = r.toArray()
  s = s.toArray()

  if (r[0] & 0x80)
    r = [ 0 ].concat(r)
  if (s[0] & 0x80)
    s = [0].concat(s)

  var total = r.length + s.length + 4
  var res = [ 0x30, total, 0x02, r.length ]
  res = res.concat(r, [ 0x02, s.length ], s)
  return new Buffer(res)
}
module.exports.getKey = getKey
function getKey (x, q, hash, algo) {
  x = new Buffer(x.toArray())
  if (x.length < q.byteLength()) {
    var zeros = new Buffer(q.byteLength() - x.length)
    zeros.fill(0)
    x = Buffer.concat([zeros, x])
  }
  var hlen = hash.length
  var hbits = bits2octets(hash, q)
  var v = new Buffer(hlen)
  v.fill(1)
  var k = new Buffer(hlen)
  k.fill(0)
  k = createHmac(algo, k)
    .update(v)
    .update(new Buffer([0]))
    .update(x)
    .update(hbits)
    .digest()
  v = createHmac(algo, k)
    .update(v)
    .digest()
  k = createHmac(algo, k)
    .update(v)
    .update(new Buffer([1]))
    .update(x)
    .update(hbits)
    .digest()
  v = createHmac(algo, k)
    .update(v)
    .digest()
  return {
    k: k,
    v: v
  }
}
function bits2int (obits, q) {
  var bits = new BN(obits)
  var shift = (obits.length << 3) - q.bitLength()
  if (shift > 0) {
    bits.ishrn(shift)
  }
  return bits
}
function bits2octets (bits, q) {
  bits = bits2int(bits, q)
  bits = bits.mod(q)
  var out = new Buffer(bits.toArray())
  if (out.length < q.byteLength()) {
    var zeros = new Buffer(q.byteLength() - out.length)
    zeros.fill(0)
    out = Buffer.concat([zeros, out])
  }
  return out
}
module.exports.makeKey = makeKey
function makeKey (q, kv, algo) {
  var t
  var k
  while (true) {
    t = new Buffer('')
    while (t.length * 8 < q.bitLength()) {
      kv.v = createHmac(algo, kv.k)
        .update(kv.v)
        .digest()
      t = Buffer.concat([t, kv.v])
    }
    k = bits2int(t, q)
    kv.k =  createHmac(algo, kv.k)
        .update(kv.v)
        .update(new Buffer([0]))
        .digest()
    kv.v = createHmac(algo, kv.k)
        .update(kv.v)
        .digest()
    if (k.cmp(q) === -1) {
      return k
    }
  }
}
function makeR (g, k, p, q) {
  return g.toRed(BN.mont(p)).redPow(k).fromRed().mod(q)
}

}).call(this,require("buffer").Buffer)
},{"./curves":78,"bn.js":79,"browserify-rsa":80,"buffer":53,"create-hmac":157,"elliptic":81,"parse-asn1":105}],121:[function(require,module,exports){
(function (Buffer){
'use strict'
var parseKeys = require('parse-asn1')
var elliptic = require('elliptic')
var curves = require('./curves')
var BN = require('bn.js')
module.exports = verify

function verify (sig, hash, key, signType) {
  var pub = parseKeys(key)
  if (pub.type === 'ec') {
    if (signType !== 'ecdsa') {
      throw new Error('wrong public key type')
    }
    return ecVerify(sig, hash, pub)
  } else if (pub.type === 'dsa') {
    if (signType !== 'dsa') {
      throw new Error('wrong public key type')
    }
    return dsaVerify(sig, hash, pub)
  } else {
    if (signType !== 'rsa') {
      throw new Error('wrong public key type')
    }
  }
  var len = pub.modulus.byteLength()
  var pad = [ 1 ]
  var padNum = 0
  while (hash.length + pad.length + 2 < len) {
    pad.push(0xff)
    padNum++
  }
  pad.push(0x00)
  var i = -1
  while (++i < hash.length) {
    pad.push(hash[i])
  }
  pad = new Buffer(pad)
  var red = BN.mont(pub.modulus)
  sig = new BN(sig).toRed(red)

  sig = sig.redPow(new BN(pub.publicExponent))

  sig = new Buffer(sig.fromRed().toArray())
  var out = 0
  if (padNum < 8) {
    out = 1
  }
  len = Math.min(sig.length, pad.length)
  if (sig.length !== pad.length) {
    out = 1
  }

  i = -1
  while (++i < len) {
    out |= (sig[i] ^ pad[i])
  }
  return out === 0
}
function ecVerify (sig, hash, pub) {
  var curveId = curves[pub.data.algorithm.curve.join('.')]
  if (!curveId)
    throw new Error('unknown curve ' + pub.data.algorithm.curve.join('.'))

  var curve = new elliptic.ec(curveId)

  var pubkey = pub.data.subjectPrivateKey.data
  return curve.verify(hash.toString('hex'), sig.toString('hex'), pubkey.toString('hex'))
}
function dsaVerify (sig, hash, pub) {
  var p = pub.data.p
  var q = pub.data.q
  var g = pub.data.g
  var y = pub.data.pub_key
  var unpacked = parseKeys.signature.decode(sig, 'der')
  var s = unpacked.s
  var r = unpacked.r
  checkValue(s, q)
  checkValue(r, q)
  var montq = BN.mont(q)
  var montp = BN.mont(p)
  var w =  s.invm(q)
  var v = g.toRed(montp)
  .redPow(new BN(hash).mul(w).mod(q))
  .fromRed()
  .mul(
    y.toRed(montp)
    .redPow(r.mul(w).mod(q))
    .fromRed()
  ).mod(p).mod(q)
  return !v.cmp(r)
}
function checkValue (b, q) {
  if (b.cmpn(0) <= 0) {
    throw new Error('invalid sig')
  }
  if (b.cmp(q) >= q) {
    throw new Error('invalid sig')
  }
}

}).call(this,require("buffer").Buffer)
},{"./curves":78,"bn.js":79,"buffer":53,"elliptic":81,"parse-asn1":105}],122:[function(require,module,exports){
(function (Buffer){
var elliptic = require('elliptic');
var BN = require('bn.js');

module.exports = function createECDH(curve) {
	return new ECDH(curve);
};

var aliases = {
	secp256k1: {
		name: 'secp256k1',
		byteLength: 32
	},
	secp224r1: {
		name: 'p224',
		byteLength: 28
	},
	prime256v1: {
		name: 'p256',
		byteLength: 32
	},
	prime192v1: {
		name: 'p192',
		byteLength: 24
	},
	ed25519: {
		name: 'ed25519',
		byteLength: 32
	}
};

aliases.p224 = aliases.secp224r1;
aliases.p256 = aliases.secp256r1 = aliases.prime256v1;
aliases.p192 = aliases.secp192r1 = aliases.prime192v1;

function ECDH(curve) {
	this.curveType = aliases[curve];
	if (!this.curveType ) {
		this.curveType = {
			name: curve
		};
	}
	this.curve = new elliptic.ec(this.curveType.name);
	this.keys = void 0;
}

ECDH.prototype.generateKeys = function (enc, format) {
	this.keys = this.curve.genKeyPair();
	return this.getPublicKey(enc, format);
};

ECDH.prototype.computeSecret = function (other, inenc, enc) {
	inenc = inenc || 'utf8';
	if (!Buffer.isBuffer(other)) {
		other = new Buffer(other, inenc);
	}
	other = new BN(other);
	other = other.toString(16);
	var otherPub = this.curve.keyPair(other, 'hex').getPublic();
	var out = otherPub.mul(this.keys.getPrivate()).getX();
	return formatReturnValue(out, enc, this.curveType.byteLength);
};

ECDH.prototype.getPublicKey = function (enc, format) {
	var key = this.keys.getPublic(format === 'compressed', true);
	if (format === 'hybrid') {
		if (key[key.length - 1] % 2) {
			key[0] = 7;
		} else {
			key [0] = 6;
		}
	}
	return formatReturnValue(key, enc);
};

ECDH.prototype.getPrivateKey = function (enc) {
	return formatReturnValue(this.keys.getPrivate(), enc);
};

ECDH.prototype.setPublicKey = function (pub, enc) {
	enc = enc || 'utf8';
	if (!Buffer.isBuffer(pub)) {
		pub = new Buffer(pub, enc);
	}
	var pkey = new BN(pub);
	pkey = pkey.toArray();
	this.keys._importPublicHex(pkey);
	return this;
};

ECDH.prototype.setPrivateKey = function (priv, enc) {
	enc = enc || 'utf8';
	if (!Buffer.isBuffer(priv)) {
		priv = new Buffer(priv, enc);
	}
	var _priv = new BN(priv);
	_priv = _priv.toString(16);
	this.keys._importPrivate(_priv);
	return this;
};

function formatReturnValue(bn, enc, len) {
	if (!Array.isArray(bn)) {
		bn = bn.toArray();
	}
	var buf = new Buffer(bn);
	if (len && buf.length < len) {
		var zeros = new Buffer(len - buf.length);
		zeros.fill(0);
		buf = Buffer.concat([zeros, buf]);
	}
	if (!enc) {
		return buf;
	} else {
		return buf.toString(enc);
	}
}
}).call(this,require("buffer").Buffer)
},{"bn.js":124,"buffer":53,"elliptic":125}],123:[function(require,module,exports){
var createECDH = require('crypto').createECDH;

module.exports = createECDH || require('./browser');
},{"./browser":122,"crypto":57}],124:[function(require,module,exports){
arguments[4][79][0].apply(exports,arguments)
},{"dup":79}],125:[function(require,module,exports){
arguments[4][81][0].apply(exports,arguments)
},{"../package.json":144,"./elliptic/curve":128,"./elliptic/curves":131,"./elliptic/ec":132,"./elliptic/hmac-drbg":135,"./elliptic/utils":136,"brorand":137,"dup":81}],126:[function(require,module,exports){
arguments[4][82][0].apply(exports,arguments)
},{"../../elliptic":125,"bn.js":124,"dup":82}],127:[function(require,module,exports){
arguments[4][83][0].apply(exports,arguments)
},{"../../elliptic":125,"../curve":128,"bn.js":124,"dup":83,"inherits":195}],128:[function(require,module,exports){
arguments[4][84][0].apply(exports,arguments)
},{"./base":126,"./edwards":127,"./mont":129,"./short":130,"dup":84}],129:[function(require,module,exports){
arguments[4][85][0].apply(exports,arguments)
},{"../../elliptic":125,"../curve":128,"bn.js":124,"dup":85,"inherits":195}],130:[function(require,module,exports){
arguments[4][86][0].apply(exports,arguments)
},{"../../elliptic":125,"../curve":128,"bn.js":124,"dup":86,"inherits":195}],131:[function(require,module,exports){
arguments[4][87][0].apply(exports,arguments)
},{"../elliptic":125,"bn.js":124,"dup":87,"hash.js":138}],132:[function(require,module,exports){
arguments[4][88][0].apply(exports,arguments)
},{"../../elliptic":125,"./key":133,"./signature":134,"bn.js":124,"dup":88}],133:[function(require,module,exports){
arguments[4][89][0].apply(exports,arguments)
},{"../../elliptic":125,"bn.js":124,"dup":89}],134:[function(require,module,exports){
arguments[4][90][0].apply(exports,arguments)
},{"../../elliptic":125,"bn.js":124,"dup":90}],135:[function(require,module,exports){
arguments[4][91][0].apply(exports,arguments)
},{"../elliptic":125,"dup":91,"hash.js":138}],136:[function(require,module,exports){
arguments[4][92][0].apply(exports,arguments)
},{"bn.js":124,"dup":92}],137:[function(require,module,exports){
arguments[4][93][0].apply(exports,arguments)
},{"dup":93}],138:[function(require,module,exports){
arguments[4][94][0].apply(exports,arguments)
},{"./hash/common":139,"./hash/hmac":140,"./hash/ripemd":141,"./hash/sha":142,"./hash/utils":143,"dup":94}],139:[function(require,module,exports){
arguments[4][95][0].apply(exports,arguments)
},{"../hash":138,"dup":95}],140:[function(require,module,exports){
arguments[4][96][0].apply(exports,arguments)
},{"../hash":138,"dup":96}],141:[function(require,module,exports){
arguments[4][97][0].apply(exports,arguments)
},{"../hash":138,"dup":97}],142:[function(require,module,exports){
arguments[4][98][0].apply(exports,arguments)
},{"../hash":138,"dup":98}],143:[function(require,module,exports){
arguments[4][99][0].apply(exports,arguments)
},{"dup":99,"inherits":195}],144:[function(require,module,exports){
module.exports={
  "name": "elliptic",
  "version": "1.0.1",
  "description": "EC cryptography",
  "main": "lib/elliptic.js",
  "scripts": {
    "test": "mocha --reporter=spec test/*-test.js"
  },
  "repository": {
    "type": "git",
    "url": "git@github.com:indutny/elliptic"
  },
  "keywords": [
    "EC",
    "Elliptic",
    "curve",
    "Cryptography"
  ],
  "author": {
    "name": "Fedor Indutny",
    "email": "fedor@indutny.com"
  },
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/indutny/elliptic/issues"
  },
  "homepage": "https://github.com/indutny/elliptic",
  "devDependencies": {
    "browserify": "^3.44.2",
    "mocha": "^1.18.2",
    "uglify-js": "^2.4.13"
  },
  "dependencies": {
    "bn.js": "^1.0.0",
    "brorand": "^1.0.1",
    "hash.js": "^1.0.0",
    "inherits": "^2.0.1"
  },
  "gitHead": "17dc013761dd1efcfb868e2b06b0b897627b40be",
  "_id": "elliptic@1.0.1",
  "_shasum": "d180376b66a17d74995c837796362ac4d22aefe3",
  "_from": "elliptic@>=1.0.0 <2.0.0",
  "_npmVersion": "1.4.28",
  "_npmUser": {
    "name": "indutny",
    "email": "fedor@indutny.com"
  },
  "maintainers": [
    {
      "name": "indutny",
      "email": "fedor@indutny.com"
    }
  ],
  "dist": {
    "shasum": "d180376b66a17d74995c837796362ac4d22aefe3",
    "tarball": "http://registry.npmjs.org/elliptic/-/elliptic-1.0.1.tgz"
  },
  "directories": {},
  "_resolved": "https://registry.npmjs.org/elliptic/-/elliptic-1.0.1.tgz"
}

},{}],145:[function(require,module,exports){
(function (Buffer){
'use strict';
var inherits = require('inherits')
var md5 = require('./md5')
var rmd160 = require('ripemd160')
var sha = require('sha.js')

var Transform = require('stream').Transform

function HashNoConstructor(hash) {
  Transform.call(this)

  this._hash = hash
  this.buffers = []
}

inherits(HashNoConstructor, Transform)

HashNoConstructor.prototype._transform = function (data, _, next) {
  this.buffers.push(data)

  next()
}

HashNoConstructor.prototype._flush = function (next) {
  this.push(this.digest())
  next()
}

HashNoConstructor.prototype.update = function (data, enc) {
  if (typeof data === 'string') {
    data = new Buffer(data, enc)
  }

  this.buffers.push(data)
  return this
}

HashNoConstructor.prototype.digest = function (enc) {
  var buf = Buffer.concat(this.buffers)
  var r = this._hash(buf)
  this.buffers = null

  return enc ? r.toString(enc) : r
}

function Hash(hash) {
  Transform.call(this)

  this._hash = hash
}

inherits(Hash, Transform)

Hash.prototype._transform = function (data, enc, next) {
  if (enc) data = new Buffer(data, enc)

  this._hash.update(data)

  next()
}

Hash.prototype._flush = function (next) {
  this.push(this._hash.digest())
  this._hash = null

  next()
}

Hash.prototype.update = function (data, enc) {
  if (typeof data === 'string') {
    data = new Buffer(data, enc)
  }

  this._hash.update(data)
  return this
}

Hash.prototype.digest = function (enc) {
  var outData = this._hash.digest()

  return enc ? outData.toString(enc) : outData
}

module.exports = function createHash (alg) {
  if ('md5' === alg) return new HashNoConstructor(md5)
  if ('rmd160' === alg) return new HashNoConstructor(rmd160)

  return new Hash(sha(alg))
}

}).call(this,require("buffer").Buffer)
},{"./md5":147,"buffer":53,"inherits":195,"ripemd160":148,"sha.js":150,"stream":213}],146:[function(require,module,exports){
(function (Buffer){
'use strict';
var intSize = 4;
var zeroBuffer = new Buffer(intSize); zeroBuffer.fill(0);
var chrsz = 8;

function toArray(buf, bigEndian) {
  if ((buf.length % intSize) !== 0) {
    var len = buf.length + (intSize - (buf.length % intSize));
    buf = Buffer.concat([buf, zeroBuffer], len);
  }

  var arr = [];
  var fn = bigEndian ? buf.readInt32BE : buf.readInt32LE;
  for (var i = 0; i < buf.length; i += intSize) {
    arr.push(fn.call(buf, i));
  }
  return arr;
}

function toBuffer(arr, size, bigEndian) {
  var buf = new Buffer(size);
  var fn = bigEndian ? buf.writeInt32BE : buf.writeInt32LE;
  for (var i = 0; i < arr.length; i++) {
    fn.call(buf, arr[i], i * 4, true);
  }
  return buf;
}

function hash(buf, fn, hashSize, bigEndian) {
  if (!Buffer.isBuffer(buf)) buf = new Buffer(buf);
  var arr = fn(toArray(buf, bigEndian), buf.length * chrsz);
  return toBuffer(arr, hashSize, bigEndian);
}
exports.hash = hash;
}).call(this,require("buffer").Buffer)
},{"buffer":53}],147:[function(require,module,exports){
'use strict';


var helpers = require('./helpers');


function core_md5(x, len)
{

  x[len >> 5] |= 0x80 << ((len) % 32);
  x[(((len + 64) >>> 9) << 4) + 14] = len;

  var a =  1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d =  271733878;

  for(var i = 0; i < x.length; i += 16)
  {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;

    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
  }
  return Array(a, b, c, d);

}


function md5_cmn(q, a, b, x, s, t)
{
  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
}
function md5_ff(a, b, c, d, x, s, t)
{
  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t)
{
  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t)
{
  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t)
{
  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}


function safe_add(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}


function bit_rol(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}

module.exports = function md5(buf) {
  return helpers.hash(buf, core_md5, 16);
};
},{"./helpers":146}],148:[function(require,module,exports){
(function (Buffer){



var zl = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
  3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12,
  1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
  4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13
]

var zr = [
  5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12,
  6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2,
  15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13,
  8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
  12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11
]

var sl = [
  11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8,
  7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12,
  11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5,
  11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12,
  9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6
]

var sr = [
  8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6,
  9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11,
  9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5,
  15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8,
  8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11
]

var hl = [0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]
var hr = [0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]

function bytesToWords (bytes) {
  var words = []
  for (var i = 0, b = 0; i < bytes.length; i++, b += 8) {
    words[b >>> 5] |= bytes[i] << (24 - b % 32)
  }
  return words
}

function wordsToBytes (words) {
  var bytes = []
  for (var b = 0; b < words.length * 32; b += 8) {
    bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF)
  }
  return bytes
}

function processBlock (H, M, offset) {
  for (var i = 0; i < 16; i++) {
    var offset_i = offset + i
    var M_offset_i = M[offset_i]

    M[offset_i] = (
      (((M_offset_i << 8) | (M_offset_i >>> 24)) & 0x00ff00ff) |
      (((M_offset_i << 24) | (M_offset_i >>> 8)) & 0xff00ff00)
    )
  }

  var al, bl, cl, dl, el
  var ar, br, cr, dr, er

  ar = al = H[0]
  br = bl = H[1]
  cr = cl = H[2]
  dr = dl = H[3]
  er = el = H[4]

  var t
  for (i = 0; i < 80; i += 1) {
    t = (al + M[offset + zl[i]]) | 0
    if (i < 16) {
      t += f1(bl, cl, dl) + hl[0]
    } else if (i < 32) {
      t += f2(bl, cl, dl) + hl[1]
    } else if (i < 48) {
      t += f3(bl, cl, dl) + hl[2]
    } else if (i < 64) {
      t += f4(bl, cl, dl) + hl[3]
    } else {// if (i<80) {
      t += f5(bl, cl, dl) + hl[4]
    }
    t = t | 0
    t = rotl(t, sl[i])
    t = (t + el) | 0
    al = el
    el = dl
    dl = rotl(cl, 10)
    cl = bl
    bl = t

    t = (ar + M[offset + zr[i]]) | 0
    if (i < 16) {
      t += f5(br, cr, dr) + hr[0]
    } else if (i < 32) {
      t += f4(br, cr, dr) + hr[1]
    } else if (i < 48) {
      t += f3(br, cr, dr) + hr[2]
    } else if (i < 64) {
      t += f2(br, cr, dr) + hr[3]
    } else {// if (i<80) {
      t += f1(br, cr, dr) + hr[4]
    }

    t = t | 0
    t = rotl(t, sr[i])
    t = (t + er) | 0
    ar = er
    er = dr
    dr = rotl(cr, 10)
    cr = br
    br = t
  }

  t = (H[1] + cl + dr) | 0
  H[1] = (H[2] + dl + er) | 0
  H[2] = (H[3] + el + ar) | 0
  H[3] = (H[4] + al + br) | 0
  H[4] = (H[0] + bl + cr) | 0
  H[0] = t
}

function f1 (x, y, z) {
  return ((x) ^ (y) ^ (z))
}

function f2 (x, y, z) {
  return (((x) & (y)) | ((~x) & (z)))
}

function f3 (x, y, z) {
  return (((x) | (~(y))) ^ (z))
}

function f4 (x, y, z) {
  return (((x) & (z)) | ((y) & (~(z))))
}

function f5 (x, y, z) {
  return ((x) ^ ((y) | (~(z))))
}

function rotl (x, n) {
  return (x << n) | (x >>> (32 - n))
}

function ripemd160 (message) {
  var H = [0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]

  if (typeof message === 'string') {
    message = new Buffer(message, 'utf8')
  }

  var m = bytesToWords(message)

  var nBitsLeft = message.length * 8
  var nBitsTotal = message.length * 8

  m[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32)
  m[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
    (((nBitsTotal << 8) | (nBitsTotal >>> 24)) & 0x00ff00ff) |
    (((nBitsTotal << 24) | (nBitsTotal >>> 8)) & 0xff00ff00)
  )

  for (var i = 0; i < m.length; i += 16) {
    processBlock(H, m, i)
  }

  for (i = 0; i < 5; i++) {
    var H_i = H[i]

    H[i] = (((H_i << 8) | (H_i >>> 24)) & 0x00ff00ff) |
      (((H_i << 24) | (H_i >>> 8)) & 0xff00ff00)
  }

  var digestbytes = wordsToBytes(H)
  return new Buffer(digestbytes)
}

module.exports = ripemd160

}).call(this,require("buffer").Buffer)
},{"buffer":53}],149:[function(require,module,exports){
(function (Buffer){
function Hash (blockSize, finalSize) {
  this._block = new Buffer(blockSize) //new Uint32Array(blockSize/4)
  this._finalSize = finalSize
  this._blockSize = blockSize
  this._len = 0
  this._s = 0
}

Hash.prototype.update = function (data, enc) {
  if ("string" === typeof data) {
    enc = enc || "utf8"
    data = new Buffer(data, enc)
  }

  var l = this._len += data.length
  var s = this._s || 0
  var f = 0
  var buffer = this._block

  while (s < l) {
    var t = Math.min(data.length, f + this._blockSize - (s % this._blockSize))
    var ch = (t - f)

    for (var i = 0; i < ch; i++) {
      buffer[(s % this._blockSize) + i] = data[i + f]
    }

    s += ch
    f += ch

    if ((s % this._blockSize) === 0) {
      this._update(buffer)
    }
  }
  this._s = s

  return this
}

Hash.prototype.digest = function (enc) {
  var l = this._len * 8

  this._block[this._len % this._blockSize] = 0x80

  this._block.fill(0, this._len % this._blockSize + 1)

  if (l % (this._blockSize * 8) >= this._finalSize * 8) {
    this._update(this._block)
    this._block.fill(0)
  }

  this._block.writeInt32BE(l, this._blockSize - 4)

  var hash = this._update(this._block) || this._hash()

  return enc ? hash.toString(enc) : hash
}

Hash.prototype._update = function () {
  throw new Error('_update must be implemented by subclass')
}

module.exports = Hash

}).call(this,require("buffer").Buffer)
},{"buffer":53}],150:[function(require,module,exports){
var exports = module.exports = function (alg) {
  var Alg = exports[alg.toLowerCase()]
  if(!Alg) throw new Error(alg + ' is not supported (we accept pull requests)')
  return new Alg()
}


exports.sha = require('./sha')
exports.sha1 = require('./sha1')
exports.sha224 = require('./sha224')
exports.sha256 = require('./sha256')
exports.sha384 = require('./sha384')
exports.sha512 = require('./sha512')

},{"./sha":151,"./sha1":152,"./sha224":153,"./sha256":154,"./sha384":155,"./sha512":156}],151:[function(require,module,exports){
(function (Buffer){


var inherits = require('inherits')
var Hash = require('./hash')

var W = new Array(80)

function Sha() {
  this.init()
  this._w = W

  Hash.call(this, 64, 56)
}

inherits(Sha, Hash)

Sha.prototype.init = function () {
  this._a = 0x67452301
  this._b = 0xefcdab89
  this._c = 0x98badcfe
  this._d = 0x10325476
  this._e = 0xc3d2e1f0

  return this
}


function rol(num, cnt) {
  return (num << cnt) | (num >>> (32 - cnt));
}

Sha.prototype._update = function (M) {
  var W = this._w

  var a = this._a
  var b = this._b
  var c = this._c
  var d = this._d
  var e = this._e

  var j = 0, k


  function calcW() { return W[j - 3] ^ W[j -  8] ^ W[j - 14] ^ W[j - 16] }
  function loop(w, f) {
    W[j] = w

    var t = rol(a, 5) + f + e + w + k

    e = d
    d = c
    c = rol(b, 30)
    b = a
    a = t
    j++
  }

  k = 1518500249
  while (j < 16) loop(M.readInt32BE(j * 4), (b & c) | ((~b) & d))
  while (j < 20) loop(calcW(), (b & c) | ((~b) & d))
  k = 1859775393
  while (j < 40) loop(calcW(), b ^ c ^ d)
  k = -1894007588
  while (j < 60) loop(calcW(), (b & c) | (b & d) | (c & d))
  k = -899497514
  while (j < 80) loop(calcW(), b ^ c ^ d)

  this._a = (a + this._a) | 0
  this._b = (b + this._b) | 0
  this._c = (c + this._c) | 0
  this._d = (d + this._d) | 0
  this._e = (e + this._e) | 0
}

Sha.prototype._hash = function () {
  var H = new Buffer(20)

  H.writeInt32BE(this._a|0, 0)
  H.writeInt32BE(this._b|0, 4)
  H.writeInt32BE(this._c|0, 8)
  H.writeInt32BE(this._d|0, 12)
  H.writeInt32BE(this._e|0, 16)

  return H
}

module.exports = Sha


}).call(this,require("buffer").Buffer)
},{"./hash":149,"buffer":53,"inherits":195}],152:[function(require,module,exports){
(function (Buffer){


var inherits = require('inherits')
var Hash = require('./hash')

var W = new Array(80)

function Sha1() {
  this.init()
  this._w = W

  Hash.call(this, 64, 56)
}

inherits(Sha1, Hash)

Sha1.prototype.init = function () {
  this._a = 0x67452301
  this._b = 0xefcdab89
  this._c = 0x98badcfe
  this._d = 0x10325476
  this._e = 0xc3d2e1f0

  return this
}


function rol(num, cnt) {
  return (num << cnt) | (num >>> (32 - cnt));
}

Sha1.prototype._update = function (M) {
  var W = this._w

  var a = this._a
  var b = this._b
  var c = this._c
  var d = this._d
  var e = this._e

  var j = 0, k

  function calcW() { return rol(W[j - 3] ^ W[j -  8] ^ W[j - 14] ^ W[j - 16], 1) }
  function loop(w, f) {
    W[j] = w

    var t = rol(a, 5) + f + e + w + k

    e = d
    d = c
    c = rol(b, 30)
    b = a
    a = t
    j++
  }

  k = 1518500249
  while (j < 16) loop(M.readInt32BE(j * 4), (b & c) | ((~b) & d))
  while (j < 20) loop(calcW(), (b & c) | ((~b) & d))
  k = 1859775393
  while (j < 40) loop(calcW(), b ^ c ^ d)
  k = -1894007588
  while (j < 60) loop(calcW(), (b & c) | (b & d) | (c & d))
  k = -899497514
  while (j < 80) loop(calcW(), b ^ c ^ d)

  this._a = (a + this._a) | 0
  this._b = (b + this._b) | 0
  this._c = (c + this._c) | 0
  this._d = (d + this._d) | 0
  this._e = (e + this._e) | 0
}

Sha1.prototype._hash = function () {
  var H = new Buffer(20)

  H.writeInt32BE(this._a|0, 0)
  H.writeInt32BE(this._b|0, 4)
  H.writeInt32BE(this._c|0, 8)
  H.writeInt32BE(this._d|0, 12)
  H.writeInt32BE(this._e|0, 16)

  return H
}

module.exports = Sha1


}).call(this,require("buffer").Buffer)
},{"./hash":149,"buffer":53,"inherits":195}],153:[function(require,module,exports){
(function (Buffer){


var inherits = require('inherits')
var SHA256 = require('./sha256')
var Hash = require('./hash')

var W = new Array(64)

function Sha224() {
  this.init()

  this._w = W // new Array(64)

  Hash.call(this, 64, 56)
}

inherits(Sha224, SHA256)

Sha224.prototype.init = function () {
  this._a = 0xc1059ed8|0
  this._b = 0x367cd507|0
  this._c = 0x3070dd17|0
  this._d = 0xf70e5939|0
  this._e = 0xffc00b31|0
  this._f = 0x68581511|0
  this._g = 0x64f98fa7|0
  this._h = 0xbefa4fa4|0

  return this
}

Sha224.prototype._hash = function () {
  var H = new Buffer(28)

  H.writeInt32BE(this._a,  0)
  H.writeInt32BE(this._b,  4)
  H.writeInt32BE(this._c,  8)
  H.writeInt32BE(this._d, 12)
  H.writeInt32BE(this._e, 16)
  H.writeInt32BE(this._f, 20)
  H.writeInt32BE(this._g, 24)

  return H
}

module.exports = Sha224

}).call(this,require("buffer").Buffer)
},{"./hash":149,"./sha256":154,"buffer":53,"inherits":195}],154:[function(require,module,exports){
(function (Buffer){


var inherits = require('inherits')
var Hash = require('./hash')

var K = [
  0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5,
  0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5,
  0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3,
  0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174,
  0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC,
  0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
  0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7,
  0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967,
  0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13,
  0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85,
  0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3,
  0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
  0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5,
  0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3,
  0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208,
  0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2
]

var W = new Array(64)

function Sha256() {
  this.init()

  this._w = W // new Array(64)

  Hash.call(this, 64, 56)
}

inherits(Sha256, Hash)

Sha256.prototype.init = function () {
  this._a = 0x6a09e667|0
  this._b = 0xbb67ae85|0
  this._c = 0x3c6ef372|0
  this._d = 0xa54ff53a|0
  this._e = 0x510e527f|0
  this._f = 0x9b05688c|0
  this._g = 0x1f83d9ab|0
  this._h = 0x5be0cd19|0

  return this
}

function S (X, n) {
  return (X >>> n) | (X << (32 - n));
}

function R (X, n) {
  return (X >>> n);
}

function Ch (x, y, z) {
  return ((x & y) ^ ((~x) & z));
}

function Maj (x, y, z) {
  return ((x & y) ^ (x & z) ^ (y & z));
}

function Sigma0256 (x) {
  return (S(x, 2) ^ S(x, 13) ^ S(x, 22));
}

function Sigma1256 (x) {
  return (S(x, 6) ^ S(x, 11) ^ S(x, 25));
}

function Gamma0256 (x) {
  return (S(x, 7) ^ S(x, 18) ^ R(x, 3));
}

function Gamma1256 (x) {
  return (S(x, 17) ^ S(x, 19) ^ R(x, 10));
}

Sha256.prototype._update = function(M) {
  var W = this._w

  var a = this._a | 0
  var b = this._b | 0
  var c = this._c | 0
  var d = this._d | 0
  var e = this._e | 0
  var f = this._f | 0
  var g = this._g | 0
  var h = this._h | 0

  var j = 0

  function calcW() { return Gamma1256(W[j - 2]) + W[j - 7] + Gamma0256(W[j - 15]) + W[j - 16] }
  function loop(w) {
    W[j] = w

    var T1 = h + Sigma1256(e) + Ch(e, f, g) + K[j] + w
    var T2 = Sigma0256(a) + Maj(a, b, c);

    h = g;
    g = f;
    f = e;
    e = d + T1;
    d = c;
    c = b;
    b = a;
    a = T1 + T2;

    j++
  }

  while (j < 16) loop(M.readInt32BE(j * 4))
  while (j < 64) loop(calcW())

  this._a = (a + this._a) | 0
  this._b = (b + this._b) | 0
  this._c = (c + this._c) | 0
  this._d = (d + this._d) | 0
  this._e = (e + this._e) | 0
  this._f = (f + this._f) | 0
  this._g = (g + this._g) | 0
  this._h = (h + this._h) | 0
};

Sha256.prototype._hash = function () {
  var H = new Buffer(32)

  H.writeInt32BE(this._a,  0)
  H.writeInt32BE(this._b,  4)
  H.writeInt32BE(this._c,  8)
  H.writeInt32BE(this._d, 12)
  H.writeInt32BE(this._e, 16)
  H.writeInt32BE(this._f, 20)
  H.writeInt32BE(this._g, 24)
  H.writeInt32BE(this._h, 28)

  return H
}

module.exports = Sha256

}).call(this,require("buffer").Buffer)
},{"./hash":149,"buffer":53,"inherits":195}],155:[function(require,module,exports){
(function (Buffer){
var inherits = require('inherits')
var SHA512 = require('./sha512');
var Hash = require('./hash')

var W = new Array(160)

function Sha384() {
  this.init()
  this._w = W

  Hash.call(this, 128, 112)
}

inherits(Sha384, SHA512)

Sha384.prototype.init = function () {
  this._a = 0xcbbb9d5d|0
  this._b = 0x629a292a|0
  this._c = 0x9159015a|0
  this._d = 0x152fecd8|0
  this._e = 0x67332667|0
  this._f = 0x8eb44a87|0
  this._g = 0xdb0c2e0d|0
  this._h = 0x47b5481d|0

  this._al = 0xc1059ed8|0
  this._bl = 0x367cd507|0
  this._cl = 0x3070dd17|0
  this._dl = 0xf70e5939|0
  this._el = 0xffc00b31|0
  this._fl = 0x68581511|0
  this._gl = 0x64f98fa7|0
  this._hl = 0xbefa4fa4|0

  return this
}

Sha384.prototype._hash = function () {
  var H = new Buffer(48)

  function writeInt64BE(h, l, offset) {
    H.writeInt32BE(h, offset)
    H.writeInt32BE(l, offset + 4)
  }

  writeInt64BE(this._a, this._al, 0)
  writeInt64BE(this._b, this._bl, 8)
  writeInt64BE(this._c, this._cl, 16)
  writeInt64BE(this._d, this._dl, 24)
  writeInt64BE(this._e, this._el, 32)
  writeInt64BE(this._f, this._fl, 40)

  return H
}

module.exports = Sha384

}).call(this,require("buffer").Buffer)
},{"./hash":149,"./sha512":156,"buffer":53,"inherits":195}],156:[function(require,module,exports){
(function (Buffer){
var inherits = require('inherits')
var Hash = require('./hash')

var K = [
  0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
  0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
  0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
  0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
  0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
  0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
  0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
  0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
  0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
  0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
  0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
  0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
  0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
  0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
  0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
  0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
  0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
  0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
  0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
  0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
  0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
  0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
  0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
  0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
  0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
  0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
  0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
  0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
  0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
  0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
  0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
  0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
  0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
  0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
  0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
  0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
  0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
  0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
  0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
  0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
]

var W = new Array(160)

function Sha512() {
  this.init()
  this._w = W

  Hash.call(this, 128, 112)
}

inherits(Sha512, Hash)

Sha512.prototype.init = function () {
  this._a = 0x6a09e667|0
  this._b = 0xbb67ae85|0
  this._c = 0x3c6ef372|0
  this._d = 0xa54ff53a|0
  this._e = 0x510e527f|0
  this._f = 0x9b05688c|0
  this._g = 0x1f83d9ab|0
  this._h = 0x5be0cd19|0

  this._al = 0xf3bcc908|0
  this._bl = 0x84caa73b|0
  this._cl = 0xfe94f82b|0
  this._dl = 0x5f1d36f1|0
  this._el = 0xade682d1|0
  this._fl = 0x2b3e6c1f|0
  this._gl = 0xfb41bd6b|0
  this._hl = 0x137e2179|0

  return this
}

function S (X, Xl, n) {
  return (X >>> n) | (Xl << (32 - n))
}

function Ch (x, y, z) {
  return ((x & y) ^ ((~x) & z));
}

function Maj (x, y, z) {
  return ((x & y) ^ (x & z) ^ (y & z));
}

Sha512.prototype._update = function(M) {
  var W = this._w

  var a = this._a | 0
  var b = this._b | 0
  var c = this._c | 0
  var d = this._d | 0
  var e = this._e | 0
  var f = this._f | 0
  var g = this._g | 0
  var h = this._h | 0

  var al = this._al | 0
  var bl = this._bl | 0
  var cl = this._cl | 0
  var dl = this._dl | 0
  var el = this._el | 0
  var fl = this._fl | 0
  var gl = this._gl | 0
  var hl = this._hl | 0

  var i = 0, j = 0
  var Wi, Wil
  function calcW() {
    var x  = W[j - 15*2]
    var xl = W[j - 15*2 + 1]
    var gamma0  = S(x, xl, 1) ^ S(x, xl, 8) ^ (x >>> 7)
    var gamma0l = S(xl, x, 1) ^ S(xl, x, 8) ^ S(xl, x, 7)

    x  = W[j - 2*2]
    xl = W[j - 2*2 + 1]
    var gamma1  = S(x, xl, 19) ^ S(xl, x, 29) ^ (x >>> 6)
    var gamma1l = S(xl, x, 19) ^ S(x, xl, 29) ^ S(xl, x, 6)

    var Wi7  = W[j - 7*2]
    var Wi7l = W[j - 7*2 + 1]

    var Wi16  = W[j - 16*2]
    var Wi16l = W[j - 16*2 + 1]

    Wil = gamma0l + Wi7l
    Wi  = gamma0  + Wi7 + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0)
    Wil = Wil + gamma1l
    Wi  = Wi  + gamma1  + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0)
    Wil = Wil + Wi16l
    Wi  = Wi  + Wi16 + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0)
  }

  function loop() {
    W[j] = Wi
    W[j + 1] = Wil

    var maj = Maj(a, b, c)
    var majl = Maj(al, bl, cl)

    var sigma0h = S(a, al, 28) ^ S(al, a, 2) ^ S(al, a, 7)
    var sigma0l = S(al, a, 28) ^ S(a, al, 2) ^ S(a, al, 7)
    var sigma1h = S(e, el, 14) ^ S(e, el, 18) ^ S(el, e, 9)
    var sigma1l = S(el, e, 14) ^ S(el, e, 18) ^ S(e, el, 9)

    var Ki = K[j]
    var Kil = K[j + 1]

    var ch = Ch(e, f, g)
    var chl = Ch(el, fl, gl)

    var t1l = hl + sigma1l
    var t1 = h + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0)
    t1l = t1l + chl
    t1 = t1 + ch + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0)
    t1l = t1l + Kil
    t1 = t1 + Ki + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0)
    t1l = t1l + Wil
    t1 = t1 + Wi + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0)

    var t2l = sigma0l + majl
    var t2 = sigma0h + maj + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0)

    h  = g
    hl = gl
    g  = f
    gl = fl
    f  = e
    fl = el
    el = (dl + t1l) | 0
    e  = (d + t1 + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0
    d  = c
    dl = cl
    c  = b
    cl = bl
    b  = a
    bl = al
    al = (t1l + t2l) | 0
    a  = (t1 + t2 + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0

    i++
    j += 2
  }

  while (i < 16) {
    Wi = M.readInt32BE(j * 4)
    Wil = M.readInt32BE(j * 4 + 4)

    loop()
  }

  while (i < 80) {
    calcW()
    loop()
  }

  this._al = (this._al + al) | 0
  this._bl = (this._bl + bl) | 0
  this._cl = (this._cl + cl) | 0
  this._dl = (this._dl + dl) | 0
  this._el = (this._el + el) | 0
  this._fl = (this._fl + fl) | 0
  this._gl = (this._gl + gl) | 0
  this._hl = (this._hl + hl) | 0

  this._a = (this._a + a + ((this._al >>> 0) < (al >>> 0) ? 1 : 0)) | 0
  this._b = (this._b + b + ((this._bl >>> 0) < (bl >>> 0) ? 1 : 0)) | 0
  this._c = (this._c + c + ((this._cl >>> 0) < (cl >>> 0) ? 1 : 0)) | 0
  this._d = (this._d + d + ((this._dl >>> 0) < (dl >>> 0) ? 1 : 0)) | 0
  this._e = (this._e + e + ((this._el >>> 0) < (el >>> 0) ? 1 : 0)) | 0
  this._f = (this._f + f + ((this._fl >>> 0) < (fl >>> 0) ? 1 : 0)) | 0
  this._g = (this._g + g + ((this._gl >>> 0) < (gl >>> 0) ? 1 : 0)) | 0
  this._h = (this._h + h + ((this._hl >>> 0) < (hl >>> 0) ? 1 : 0)) | 0
}

Sha512.prototype._hash = function () {
  var H = new Buffer(64)

  function writeInt64BE(h, l, offset) {
    H.writeInt32BE(h, offset)
    H.writeInt32BE(l, offset + 4)
  }

  writeInt64BE(this._a, this._al, 0)
  writeInt64BE(this._b, this._bl, 8)
  writeInt64BE(this._c, this._cl, 16)
  writeInt64BE(this._d, this._dl, 24)
  writeInt64BE(this._e, this._el, 32)
  writeInt64BE(this._f, this._fl, 40)
  writeInt64BE(this._g, this._gl, 48)
  writeInt64BE(this._h, this._hl, 56)

  return H
}

module.exports = Sha512

}).call(this,require("buffer").Buffer)
},{"./hash":149,"buffer":53,"inherits":195}],157:[function(require,module,exports){
(function (Buffer){
'use strict';
var createHash = require('create-hash/browser');
var inherits = require('inherits')

var Transform = require('stream').Transform

var ZEROS = new Buffer(128)
ZEROS.fill(0)

function Hmac(alg, key) {
  Transform.call(this)

  if (typeof key === 'string') {
    key = new Buffer(key)
  }

  var blocksize = (alg === 'sha512' || alg === 'sha384') ? 128 : 64

  this._alg = alg
  this._key = key

  if (key.length > blocksize) {
    key = createHash(alg).update(key).digest()

  } else if (key.length < blocksize) {
    key = Buffer.concat([key, ZEROS], blocksize)
  }

  var ipad = this._ipad = new Buffer(blocksize)
  var opad = this._opad = new Buffer(blocksize)

  for (var i = 0; i < blocksize; i++) {
    ipad[i] = key[i] ^ 0x36
    opad[i] = key[i] ^ 0x5C
  }

  this._hash = createHash(alg).update(ipad)
}

inherits(Hmac, Transform)

Hmac.prototype.update = function (data, enc) {
  this._hash.update(data, enc)

  return this
}

Hmac.prototype._transform = function (data, _, next) {
  this._hash.update(data)

  next()
}

Hmac.prototype._flush = function (next) {
  this.push(this.digest())

  next()
}

Hmac.prototype.digest = function (enc) {
  var h = this._hash.digest()

  return createHash(this._alg).update(this._opad).update(h).digest(enc)
}

module.exports = function createHmac(alg, key) {
  return new Hmac(alg, key)
}

}).call(this,require("buffer").Buffer)
},{"buffer":53,"create-hash/browser":145,"inherits":195,"stream":213}],158:[function(require,module,exports){
(function (Buffer){
var generatePrime = require('./lib/generatePrime');
var primes = require('./lib/primes');

var DH = require('./lib/dh');

function getDiffieHellman(mod) {
  var prime = new Buffer(primes[mod].prime, 'hex');
  var gen = new Buffer(primes[mod].gen, 'hex');

  return new DH(prime, gen);
}

function createDiffieHellman(prime, enc, generator, genc) {
  if (Buffer.isBuffer(enc) || (typeof enc === 'string' && ['hex', 'binary', 'base64'].indexOf(enc) === -1)) {
    genc = generator;
    generator = enc;
    enc = undefined;
  }

  enc = enc || 'binary';
  genc = genc || 'binary';
  generator = generator || new Buffer([2]);

  if (!Buffer.isBuffer(generator)) {
    generator = new Buffer(generator, genc);
  }

  if (typeof prime === 'number') {
    return new DH(generatePrime(prime, generator), generator, true);
  }

  if (!Buffer.isBuffer(prime)) {
    prime = new Buffer(prime, enc);
  }

  return new DH(prime, generator, true);
}

exports.DiffieHellmanGroup = exports.createDiffieHellmanGroup = exports.getDiffieHellman = getDiffieHellman;
exports.createDiffieHellman = exports.DiffieHellman = createDiffieHellman;

}).call(this,require("buffer").Buffer)
},{"./lib/dh":159,"./lib/generatePrime":160,"./lib/primes":161,"buffer":53}],159:[function(require,module,exports){
(function (Buffer){
var BN = require('bn.js');
var MillerRabin = require('miller-rabin');
var millerRabin = new MillerRabin();
var TWENTYFOUR = new BN(24);
var ELEVEN = new BN(11);
var TEN = new BN(10);
var THREE = new BN(3);
var SEVEN = new BN(7);
var primes = require('./generatePrime');
var randomBytes = require('randombytes');
module.exports = DH;

function setPublicKey(pub, enc) {
  enc = enc || 'utf8';
  if (!Buffer.isBuffer(pub)) {
    pub = new Buffer(pub, enc);
  }
  this._pub = new BN(pub);
  return this;
}

function setPrivateKey(priv, enc) {
  enc = enc || 'utf8';
  if (!Buffer.isBuffer(priv)) {
    priv = new Buffer(priv, enc);
  }
  this._priv = new BN(priv);
  return this;
}

var primeCache = {};
function checkPrime(prime, generator) {
  var gen = generator.toString('hex');
  var hex = [gen, prime.toString(16)].join('_');
  if (hex in primeCache) {
    return primeCache[hex];
  }
  var error = 0;
  
  if (prime.isEven() ||
    !primes.simpleSieve ||
    !primes.fermatTest(prime) ||
    !millerRabin.test(prime)) {
    error += 1;
    
    if (gen === '02' || gen === '05') {
      error += 8;
    } else {
      error += 4;
    }
    primeCache[hex] = error;
    return error;
  }
  if (!millerRabin.test(prime.shrn(1))) {
    error += 2;
  }
  var rem;
  switch (gen) {
    case '02':
      if (prime.mod(TWENTYFOUR).cmp(ELEVEN)) {
        error += 8;
      }
      break;
    case '05':
      rem = prime.mod(TEN);
      if (rem.cmp(THREE) && rem.cmp(SEVEN)) {
        error += 8;
      } 
      break;
    default: 
      error += 4;
  }
  primeCache[hex] = error;
  return error;
}

function defineError (self, error) {
  try {
    Object.defineProperty(self, 'verifyError', {
      enumerable: true,
      value: error,
      writable: false
    });
  } catch(e) {
    self.verifyError = error;
  }
}
function DH(prime, generator, malleable) {
  this.setGenerator(generator);
  this.__prime = new BN(prime);
  this._prime = BN.mont(this.__prime);
  this._primeLen = prime.length;
  this._pub = void 0;
  this._priv = void 0;
  
  if (malleable) {
    this.setPublicKey = setPublicKey;
    this.setPrivateKey = setPrivateKey;
    defineError(this, checkPrime(this.__prime, generator));
  } else {
    defineError(this, 8);
  }
}

DH.prototype.generateKeys = function () {
  if (!this._priv) {
    this._priv = new BN(randomBytes(this._primeLen));
  }
  this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed();
  return this.getPublicKey();
};

DH.prototype.computeSecret = function (other) {
  other = new BN(other);
  other = other.toRed(this._prime);
  var secret = other.redPow(this._priv).fromRed();
  var out = new Buffer(secret.toArray());
  var prime = this.getPrime();
  if (out.length < prime.length) {
    var front = new Buffer(prime.length - out.length);
    front.fill(0);
    out = Buffer.concat([front, out]);
  }
  return out;
};

DH.prototype.getPublicKey = function getPublicKey(enc) {
  return formatReturnValue(this._pub, enc);
};

DH.prototype.getPrivateKey = function getPrivateKey(enc) {
  return formatReturnValue(this._priv, enc);
};

DH.prototype.getPrime = function (enc) {
  return formatReturnValue(this.__prime, enc);
};

DH.prototype.getGenerator = function (enc) {
  return formatReturnValue(this._gen, enc);
};

DH.prototype.setGenerator = function (gen, enc) {
  enc = enc || 'utf8';
  if (!Buffer.isBuffer(gen)) {
    gen = new Buffer(gen, enc);
  }
  this._gen = new BN(gen);
  return this;
};

function formatReturnValue(bn, enc) {
  var buf = new Buffer(bn.toArray());
  if (!enc) {
    return buf;
  } else {
    return buf.toString(enc);
  }
}
}).call(this,require("buffer").Buffer)
},{"./generatePrime":160,"bn.js":162,"buffer":53,"miller-rabin":163,"randombytes":193}],160:[function(require,module,exports){
var randomBytes = require('randombytes');
module.exports = findPrime;
findPrime.simpleSieve = simpleSieve;
findPrime.fermatTest = fermatTest;
var BN = require('bn.js');
var TWENTYFOUR = new BN(24);
var MillerRabin = require('miller-rabin');
var millerRabin = new MillerRabin();
var ONE = new BN(1);
var TWO = new BN(2);
var FIVE = new BN(5);
var SIXTEEN = new BN(16);
var EIGHT = new BN(8);
var TEN = new BN(10);
var THREE = new BN(3);
var SEVEN = new BN(7);
var ELEVEN = new BN(11);
var FOUR = new BN(4);
var TWELVE = new BN(12);
var primes = null;

function _getPrimes() {
  if (primes !== null)
    return primes;

  var limit = 0x100000;
  var res = [];
  res[0] = 2;
  for (var i = 1, k = 3; k < limit; k += 2) {
    var sqrt = Math.ceil(Math.sqrt(k));
    for (var j = 0; j < i && res[j] <= sqrt; j++)
      if (k % res[j] === 0)
        break;

    if (i !== j && res[j] <= sqrt)
      continue;

    res[i++] = k;
  }
  primes = res;
  return res;
}

function simpleSieve(p) {
  var primes = _getPrimes();

  for (var i = 0; i < primes.length; i++)
    if (p.modn(primes[i]) === 0) {
      if (p.cmpn(primes[i]) === 0) {
        return true;
      } else {
        return false;
      }
    }

  return true;
}

function fermatTest(p) {
  var red = BN.mont(p);
  return TWO.toRed(red).redPow(p.subn(1)).fromRed().cmpn(1) === 0;
}

function findPrime(bits, gen) {
  if (bits < 16) {
    if (gen === 2 || gen === 5) {
      return new BN([0x8c, 0x7b]);
    } else {
      return new BN([0x8c, 0x27]);
    }
  }
  gen = new BN(gen);
  var runs, comp;
  function generateRandom(bits) {
    runs = -1;
    var out = new BN(randomBytes(Math.ceil(bits / 8)));
    while (out.bitLength() > bits) {
      out.ishrn(1);
    }
    if (out.isEven()) {
      out.iadd(ONE);
    }
    if (!out.testn(1)) {
      out.iadd(TWO);
    }
    if (!gen.cmp(TWO)) {
      while (out.mod(TWENTYFOUR).cmp(ELEVEN)) {
        out.iadd(FOUR);
      }
      comp = {
        major: [TWENTYFOUR],
        minor: [TWELVE]
      };
    } else if (!gen.cmp(FIVE)) {
      rem = out.mod(TEN);
      while (rem.cmp(THREE)) {
        out.iadd(FOUR);
        rem = out.mod(TEN);
      }
      comp = {
        major: [FOUR, SIXTEEN],
        minor: [TWO, EIGHT]
      };
    } else {
      comp = {
        major: [FOUR],
        minor: [TWO]
      };
    }
    return out;
  }
  var num = generateRandom(bits);

  var n2 = num.shrn(1);

  while (true) {
    while (num.bitLength() > bits) {
      num = generateRandom(bits);
      n2 = num.shrn(1);
    }
    runs++;
    if (simpleSieve(n2) &&  simpleSieve(num) &&
      fermatTest(n2) &&  fermatTest(num) &&
      millerRabin.test(n2) && millerRabin.test(num)) {
      return num;
    }
    num.iadd(comp.major[runs%comp.major.length]);
    n2.iadd(comp.minor[runs%comp.minor.length]);
  }

}
},{"bn.js":162,"miller-rabin":163,"randombytes":193}],161:[function(require,module,exports){
module.exports={
    "modp1": {
        "gen": "02",
        "prime": "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"
    },
    "modp2": {
        "gen": "02",
        "prime": "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"
    },
    "modp5": {
        "gen": "02",
        "prime": "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"
    },
    "modp14": {
        "gen": "02",
        "prime": "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"
    },
    "modp15": {
        "gen": "02",
        "prime": "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"
    },
    "modp16": {
        "gen": "02",
        "prime": "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"
    },
    "modp17": {
        "gen": "02",
        "prime": "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"
    },
    "modp18": {
        "gen": "02",
        "prime": "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"
    }
}
},{}],162:[function(require,module,exports){
arguments[4][79][0].apply(exports,arguments)
},{"dup":79}],163:[function(require,module,exports){
var bn = require('bn.js');
var brorand = require('brorand');

function MillerRabin(rand) {
  this.rand = rand || new brorand.Rand();
}
module.exports = MillerRabin;

MillerRabin.create = function create(rand) {
  return new MillerRabin(rand);
};

MillerRabin.prototype._rand = function _rand(n) {
  var len = n.bitLength();
  var buf = this.rand.generate(Math.ceil(len / 8));

  buf[0] |= 3;

  var mask = len & 0x7;
  if (mask !== 0)
    buf[buf.length - 1] >>= 7 - mask;

  return new bn(buf);
}

MillerRabin.prototype.test = function test(n, k, cb) {
  var len = n.bitLength();
  var red = bn.mont(n);
  var rone = new bn(1).toRed(red);

  if (!k)
    k = Math.max(1, (len / 48) | 0);

  var n1 = n.subn(1);
  var n2 = n1.subn(1);
  for (var s = 0; !n1.testn(s); s++) {}
  var d = n.shrn(s);

  var rn1 = n1.toRed(red);

  var prime = true;
  for (; k > 0; k--) {
    var a = this._rand(n2);
    if (cb)
      cb(a);

    var x = a.toRed(red).redPow(d);
    if (x.cmp(rone) === 0 || x.cmp(rn1) === 0)
      continue;

    for (var i = 1; i < s; i++) {
      x = x.redSqr();

      if (x.cmp(rone) === 0)
        return false;
      if (x.cmp(rn1) === 0)
        break;
    }

    if (i === s)
      return false;
  }

  return prime;
};

MillerRabin.prototype.getDivisor = function getDivisor(n, k) {
  var len = n.bitLength();
  var red = bn.mont(n);
  var rone = new bn(1).toRed(red);

  if (!k)
    k = Math.max(1, (len / 48) | 0);

  var n1 = n.subn(1);
  var n2 = n1.subn(1);
  for (var s = 0; !n1.testn(s); s++) {}
  var d = n.shrn(s);

  var rn1 = n1.toRed(red);

  var prime = true;
  for (; k > 0; k--) {
    var a = this._rand(n2);

    var g = n.gcd(a);
    if (g.cmpn(1) !== 0)
      return g;

    var x = a.toRed(red).redPow(d);
    if (x.cmp(rone) === 0 || x.cmp(rn1) === 0)
      continue;

    for (var i = 1; i < s; i++) {
      x = x.redSqr();

      if (x.cmp(rone) === 0)
        return x.fromRed().subn(1).gcd(n);
      if (x.cmp(rn1) === 0)
        break;
    }

    if (i === s) {
      x = x.redSqr();
      return x.fromRed().subn(1).gcd(n);
    }
  }

  return prime;
};

},{"bn.js":162,"brorand":164}],164:[function(require,module,exports){
arguments[4][93][0].apply(exports,arguments)
},{"dup":93}],165:[function(require,module,exports){
(function (Buffer){
var createHmac = require('create-hmac')
var MAX_ALLOC = Math.pow(2, 30) - 1 // default in iojs

exports.pbkdf2 = pbkdf2
function pbkdf2 (password, salt, iterations, keylen, digest, callback) {
  if (typeof digest === 'function') {
    callback = digest
    digest = undefined
  }

  if (typeof callback !== 'function') {
    throw new Error('No callback provided to pbkdf2')
  }

  var result = pbkdf2Sync(password, salt, iterations, keylen, digest)
  setTimeout(function () {
    callback(undefined, result)
  })
}

exports.pbkdf2Sync = pbkdf2Sync
function pbkdf2Sync (password, salt, iterations, keylen, digest) {
  if (typeof iterations !== 'number') {
    throw new TypeError('Iterations not a number')
  }

  if (iterations < 0) {
    throw new TypeError('Bad iterations')
  }

  if (typeof keylen !== 'number') {
    throw new TypeError('Key length not a number')
  }

  if (keylen < 0 || keylen > MAX_ALLOC) {
    throw new TypeError('Bad key length')
  }

  digest = digest || 'sha1'

  if (!Buffer.isBuffer(password)) password = new Buffer(password, 'binary')
  if (!Buffer.isBuffer(salt)) salt = new Buffer(salt, 'binary')

  var hLen
  var l = 1
  var DK = new Buffer(keylen)
  var block1 = new Buffer(salt.length + 4)
  salt.copy(block1, 0, 0, salt.length)

  var r
  var T

  for (var i = 1; i <= l; i++) {
    block1.writeUInt32BE(i, salt.length)
    var U = createHmac(digest, password).update(block1).digest()

    if (!hLen) {
      hLen = U.length
      T = new Buffer(hLen)
      l = Math.ceil(keylen / hLen)
      r = keylen - (l - 1) * hLen
    }

    U.copy(T, 0, 0, hLen)

    for (var j = 1; j < iterations; j++) {
      U = createHmac(digest, password).update(U).digest()

      for (var k = 0; k < hLen; k++) {
        T[k] ^= U[k]
      }
    }

    var destPos = (i - 1) * hLen
    var len = (i === l ? r : hLen)
    T.copy(DK, destPos, 0, len)
  }

  return DK
}

}).call(this,require("buffer").Buffer)
},{"buffer":53,"create-hmac":157}],166:[function(require,module,exports){
exports.publicEncrypt = require('./publicEncrypt');
exports.privateDecrypt = require('./privateDecrypt');

exports.privateEncrypt = function privateEncrypt(key, buf) {
  return exports.publicEncrypt(key, buf, true);
};

exports.publicDecrypt = function publicDecrypt(key, buf) {
  return exports.privateDecrypt(key, buf, true);
};
},{"./privateDecrypt":189,"./publicEncrypt":190}],167:[function(require,module,exports){
(function (Buffer){
var createHash = require('create-hash');
module.exports = function (seed, len) {
  var t = new Buffer('');
  var  i = 0, c;
  while (t.length < len) {
    c = i2ops(i++);
    t = Buffer.concat([t, createHash('sha1').update(seed).update(c).digest()]);
  }
  return t.slice(0, len);
};

function i2ops(c) {
  var out = new Buffer(4);
  out.writeUInt32BE(c,0);
  return out;
}
}).call(this,require("buffer").Buffer)
},{"buffer":53,"create-hash":145}],168:[function(require,module,exports){
arguments[4][79][0].apply(exports,arguments)
},{"dup":79}],169:[function(require,module,exports){
arguments[4][80][0].apply(exports,arguments)
},{"bn.js":168,"buffer":53,"dup":80,"randombytes":193}],170:[function(require,module,exports){
arguments[4][101][0].apply(exports,arguments)
},{"buffer":53,"create-hash":145,"dup":101}],171:[function(require,module,exports){
arguments[4][102][0].apply(exports,arguments)
},{"dup":102}],172:[function(require,module,exports){
arguments[4][103][0].apply(exports,arguments)
},{"asn1.js":175,"dup":103}],173:[function(require,module,exports){
arguments[4][104][0].apply(exports,arguments)
},{"./EVP_BytesToKey":170,"browserify-aes":61,"buffer":53,"dup":104}],174:[function(require,module,exports){
arguments[4][105][0].apply(exports,arguments)
},{"./aesid.json":171,"./asn1":172,"./fixProc":173,"browserify-aes":61,"buffer":53,"dup":105,"pbkdf2-compat":188}],175:[function(require,module,exports){
arguments[4][106][0].apply(exports,arguments)
},{"./asn1/api":176,"./asn1/base":178,"./asn1/constants":182,"./asn1/decoders":184,"./asn1/encoders":186,"bn.js":168,"dup":106}],176:[function(require,module,exports){
arguments[4][107][0].apply(exports,arguments)
},{"../asn1":175,"dup":107,"inherits":195,"vm":218}],177:[function(require,module,exports){
arguments[4][108][0].apply(exports,arguments)
},{"../base":178,"buffer":53,"dup":108,"inherits":195}],178:[function(require,module,exports){
arguments[4][109][0].apply(exports,arguments)
},{"./buffer":177,"./node":179,"./reporter":180,"dup":109}],179:[function(require,module,exports){
arguments[4][110][0].apply(exports,arguments)
},{"../base":178,"dup":110,"minimalistic-assert":187}],180:[function(require,module,exports){
arguments[4][111][0].apply(exports,arguments)
},{"dup":111,"inherits":195}],181:[function(require,module,exports){
arguments[4][112][0].apply(exports,arguments)
},{"../constants":182,"dup":112}],182:[function(require,module,exports){
arguments[4][113][0].apply(exports,arguments)
},{"./der":181,"dup":113}],183:[function(require,module,exports){
arguments[4][114][0].apply(exports,arguments)
},{"../../asn1":175,"dup":114,"inherits":195}],184:[function(require,module,exports){
arguments[4][115][0].apply(exports,arguments)
},{"./der":183,"dup":115}],185:[function(require,module,exports){
arguments[4][116][0].apply(exports,arguments)
},{"../../asn1":175,"buffer":53,"dup":116,"inherits":195}],186:[function(require,module,exports){
arguments[4][117][0].apply(exports,arguments)
},{"./der":185,"dup":117}],187:[function(require,module,exports){
arguments[4][118][0].apply(exports,arguments)
},{"dup":118}],188:[function(require,module,exports){
arguments[4][119][0].apply(exports,arguments)
},{"buffer":53,"create-hmac":157,"dup":119}],189:[function(require,module,exports){
(function (Buffer){
var parseKeys = require('parse-asn1');
var mgf = require('./mgf');
var xor = require('./xor');
var bn = require('bn.js');
var crt = require('browserify-rsa');
var createHash = require('create-hash');
var withPublic = require('./withPublic');
module.exports = function privateDecrypt(private_key, enc, reverse) {
  var padding;
  if (private_key.padding) {
    padding = private_key.padding;
  } else if (reverse) {
    padding = 1;
  } else {
    padding = 4;
  }
  
  var key = parseKeys(private_key);
  var k = key.modulus.byteLength();
  if (enc.length > k || new bn(enc).cmp(key.modulus) >= 0) {
    throw new Error('decryption error');
  }
  var msg;
  if (reverse) {
    msg = withPublic(new bn(enc), key);
  } else {
    msg = crt(enc, key);
  }
  var zBuffer = new Buffer(k - msg.length);
  zBuffer.fill(0);
  msg = Buffer.concat([zBuffer, msg], k);
  if (padding === 4) {
    return oaep(key, msg);
  } else if (padding === 1) {
    return pkcs1(key, msg, reverse);
  } else if (padding === 3) {
    return msg;
  } else {
    throw new Error('unknown padding');
  }
};

function oaep(key, msg){
  var n = key.modulus;
  var k = key.modulus.byteLength();
  var mLen = msg.length;
  var iHash = createHash('sha1').update(new Buffer('')).digest();
  var hLen = iHash.length;
  var hLen2 = 2 * hLen;
  if (msg[0] !== 0) {
    throw new Error('decryption error');
  }
  var maskedSeed = msg.slice(1, hLen + 1);
  var maskedDb =  msg.slice(hLen + 1);
  var seed = xor(maskedSeed, mgf(maskedDb, hLen));
  var db = xor(maskedDb, mgf(seed, k - hLen - 1));
  if (compare(iHash, db.slice(0, hLen))) {
    throw new Error('decryption error');
  }
  var i = hLen;
  while (db[i] === 0) {
    i++;
  }
  if (db[i++] !== 1) {
    throw new Error('decryption error');
  }
  return db.slice(i);
}

function pkcs1(key, msg, reverse){
  var p1 = msg.slice(0, 2);
  var i = 2;
  var status = 0;
  while (msg[i++] !== 0) {
    if (i >= msg.length) {
      status++;
      break;
    }
  }
  var ps = msg.slice(2, i - 1);
  var p2 = msg.slice(i - 1, i);

  if ((p1.toString('hex') !== '0002' && !reverse) || (p1.toString('hex') !== '0001' && reverse)){
    status++;
  }
  if (ps.length < 8) {
    status++;
  }
  if (status) {
    throw new Error('decryption error');
  }
  return  msg.slice(i);
}
function compare(a, b){
  a = new Buffer(a);
  b = new Buffer(b);
  var dif = 0;
  var len = a.length;
  if (a.length !== b.length) {
    dif++;
    len = Math.min(a.length, b.length);
  }
  var i = -1;
  while (++i < len) {
    dif += (a[i] ^ b[i]);
  }
  return dif;
}
}).call(this,require("buffer").Buffer)
},{"./mgf":167,"./withPublic":191,"./xor":192,"bn.js":168,"browserify-rsa":169,"buffer":53,"create-hash":145,"parse-asn1":174}],190:[function(require,module,exports){
(function (Buffer){
var parseKeys = require('parse-asn1');
var randomBytes = require('randombytes');
var createHash = require('create-hash');
var mgf = require('./mgf');
var xor = require('./xor');
var bn = require('bn.js');
var withPublic = require('./withPublic');
var crt = require('browserify-rsa');

var constants = {
  RSA_PKCS1_OAEP_PADDING: 4,
  RSA_PKCS1_PADDIN: 1,
  RSA_NO_PADDING: 3
};

module.exports = function publicEncrypt(public_key, msg, reverse) {
  var padding;
  if (public_key.padding) {
    padding = public_key.padding;
  } else if (reverse) {
    padding = 1;
  } else {
    padding = 4;
  }
  var key = parseKeys(public_key);
  var paddedMsg;
  if (padding === 4) {
    paddedMsg = oaep(key, msg);
  } else if (padding === 1) {
    paddedMsg = pkcs1(key, msg, reverse);
  } else if (padding === 3) {
    paddedMsg = new bn(msg);
    if (paddedMsg.cmp(key.modulus) >= 0) {
      throw new Error('data too long for modulus');
    }
  } else {
    throw new Error('unknown padding');
  }
  if (reverse) {
    return crt(paddedMsg, key);
  } else {
    return withPublic(paddedMsg, key);
  }
};

function oaep(key, msg){
  var k = key.modulus.byteLength();
  var mLen = msg.length;
  var iHash = createHash('sha1').update(new Buffer('')).digest();
  var hLen = iHash.length;
  var hLen2 = 2 * hLen;
  if (mLen > k - hLen2 - 2) {
    throw new Error('message too long');
  }
  var ps = new Buffer(k - mLen - hLen2 - 2);
  ps.fill(0);
  var dblen = k - hLen - 1;
  var seed = randomBytes(hLen);
  var maskedDb = xor(Buffer.concat([iHash, ps, new Buffer([1]), msg], dblen), mgf(seed, dblen));
  var maskedSeed = xor(seed, mgf(maskedDb, hLen));
  return new bn(Buffer.concat([new Buffer([0]), maskedSeed, maskedDb], k));
}
function pkcs1(key, msg, reverse){
  var mLen = msg.length;
  var k = key.modulus.byteLength();
  if (mLen > k - 11) {
    throw new Error('message too long');
  }
  var ps;
  if (reverse) {
    ps = new Buffer(k - mLen - 3);
    ps.fill(0xff);
  } else {
    ps = nonZero(k - mLen - 3);
  }
  return new bn(Buffer.concat([new Buffer([0, reverse?1:2]), ps, new Buffer([0]), msg], k));
}
function nonZero(len, crypto) {
  var out = new Buffer(len);
  var i = 0;
  var cache = randomBytes(len*2);
  var cur = 0;
  var num;
  while (i < len) {
    if (cur === cache.length) {
      cache = randomBytes(len*2);
      cur = 0;
    }
    num = cache[cur++];
    if (num) {
      out[i++] = num;
    }
  }
  return out;
}
}).call(this,require("buffer").Buffer)
},{"./mgf":167,"./withPublic":191,"./xor":192,"bn.js":168,"browserify-rsa":169,"buffer":53,"create-hash":145,"parse-asn1":174,"randombytes":193}],191:[function(require,module,exports){
(function (Buffer){
var bn = require('bn.js');
function withPublic(paddedMsg, key) {
  return new Buffer(paddedMsg
    .toRed(bn.mont(key.modulus))
    .redPow(new bn(key.publicExponent))
    .fromRed()
    .toArray());
}

module.exports = withPublic;
}).call(this,require("buffer").Buffer)
},{"bn.js":168,"buffer":53}],192:[function(require,module,exports){
module.exports = function xor(a, b) {
  var len = a.length;
  var i = -1;
  while (++i < len) {
    a[i] ^= b[i];
  }
  return a
};
},{}],193:[function(require,module,exports){
(function (process,global,Buffer){
'use strict';

var crypto = global.crypto || global.msCrypto
if(crypto && crypto.getRandomValues) {
  module.exports = randomBytes;
} else {
  module.exports = oldBrowser;
}
function randomBytes(size, cb) {
  var bytes = new Buffer(size); //in browserify, this is an extended Uint8Array


  crypto.getRandomValues(bytes);
  if (typeof cb === 'function') {
    return process.nextTick(function () {
      cb(null, bytes);
    });
  }
  return bytes;
}
function oldBrowser() {
  throw new Error(
      'secure random number generation not supported by this browser\n'+
      'use chrome, FireFox or Internet Explorer 11'
    )
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer)
},{"_process":197,"buffer":53}],194:[function(require,module,exports){

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

EventEmitter.defaultMaxListeners = 10;

EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      default:
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    len = arguments.length;
    args = new Array(len - 1);
    for (i = 1; i < len; i++)
      args[i - 1] = arguments[i];

    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    this._events[type].push(listener);
  else
    this._events[type] = [this._events[type], listener];

  if (isObject(this._events[type]) && !this._events[type].warned) {
    var m;
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else {
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  var ret;
  if (!emitter._events || !emitter._events[type])
    ret = 0;
  else if (isFunction(emitter._events[type]))
    ret = 1;
  else
    ret = emitter._events[type].length;
  return ret;
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],195:[function(require,module,exports){
if (typeof Object.create === 'function') {
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],196:[function(require,module,exports){
module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

},{}],197:[function(require,module,exports){

var process = module.exports = {};
var queue = [];
var draining = false;

function drainQueue() {
    if (draining) {
        return;
    }
    draining = true;
    var currentQueue;
    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        var i = -1;
        while (++i < len) {
            currentQueue[i]();
        }
        len = queue.length;
    }
    draining = false;
}
process.nextTick = function (fun) {
    queue.push(fun);
    if (!draining) {
        setTimeout(drainQueue, 0);
    }
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],198:[function(require,module,exports){
(function (global){

;(function(root) {


	var freeExports = typeof exports == 'object' && exports;
	var freeModule = typeof module == 'object' && module &&
		module.exports == freeExports && module;
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}


	var punycode,


	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1


	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'


	regexPunycode = /^xn--/,
	regexNonASCII = /[^ -~]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /\x2E|\u3002|\uFF0E|\uFF61/g, // RFC 3490 separators


	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},


	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,


	key;




	function error(type) {
		throw RangeError(errors[type]);
	}


	function map(array, fn) {
		var length = array.length;
		while (length--) {
			array[length] = fn(array[length]);
		}
		return array;
	}


	function mapDomain(string, fn) {
		return map(string.split(regexSeparators), fn).join('.');
	}


	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}


	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}


	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}


	function digitToBasic(digit, flag) {
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}


	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}


	function decode(input) {
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,

		    baseMinusT;


		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}


		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}


	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],

		    inputLength,

		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		input = ucs2decode(input);

		inputLength = input.length;

		n = initialN;
		delta = 0;
		bias = initialBias;

		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;


		if (basicLength) {
			output.push(delimiter);
		}

		while (handledCPCount < inputLength) {

			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}


	function toUnicode(domain) {
		return mapDomain(domain, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}


	function toASCII(domain) {
		return mapDomain(domain, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}




	punycode = {

		'version': '1.2.4',

		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};


	if (
		typeof define == 'function' &&
		typeof define.amd == 'object' &&
		define.amd
	) {
		define('punycode', function() {
			return punycode;
		});
	} else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else { // in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],199:[function(require,module,exports){

'use strict';

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

},{}],200:[function(require,module,exports){

'use strict';

var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};

},{}],201:[function(require,module,exports){
'use strict';

exports.decode = exports.parse = require('./decode');
exports.encode = exports.stringify = require('./encode');

},{"./decode":199,"./encode":200}],202:[function(require,module,exports){
module.exports = require("./lib/_stream_duplex.js")

},{"./lib/_stream_duplex.js":203}],203:[function(require,module,exports){
(function (process){


module.exports = Duplex;


var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}




var util = require('core-util-is');
util.inherits = require('inherits');


var Readable = require('./_stream_readable');
var Writable = require('./_stream_writable');

util.inherits(Duplex, Readable);

forEach(objectKeys(Writable.prototype), function(method) {
  if (!Duplex.prototype[method])
    Duplex.prototype[method] = Writable.prototype[method];
});

function Duplex(options) {
  if (!(this instanceof Duplex))
    return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false)
    this.readable = false;

  if (options && options.writable === false)
    this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false)
    this.allowHalfOpen = false;

  this.once('end', onend);
}

function onend() {
  if (this.allowHalfOpen || this._writableState.ended)
    return;

  process.nextTick(this.end.bind(this));
}

function forEach (xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

}).call(this,require('_process'))
},{"./_stream_readable":205,"./_stream_writable":207,"_process":197,"core-util-is":208,"inherits":195}],204:[function(require,module,exports){


module.exports = PassThrough;

var Transform = require('./_stream_transform');


var util = require('core-util-is');
util.inherits = require('inherits');


util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough))
    return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function(chunk, encoding, cb) {
  cb(null, chunk);
};

},{"./_stream_transform":206,"core-util-is":208,"inherits":195}],205:[function(require,module,exports){
(function (process){

module.exports = Readable;


var isArray = require('isarray');




var Buffer = require('buffer').Buffer;


Readable.ReadableState = ReadableState;

var EE = require('events').EventEmitter;


if (!EE.listenerCount) EE.listenerCount = function(emitter, type) {
  return emitter.listeners(type).length;
};


var Stream = require('stream');


var util = require('core-util-is');
util.inherits = require('inherits');


var StringDecoder;



var debug = require('util');
if (debug && debug.debuglog) {
  debug = debug.debuglog('stream');
} else {
  debug = function () {};
}



util.inherits(Readable, Stream);

function ReadableState(options, stream) {
  var Duplex = require('./_stream_duplex');

  options = options || {};

  var hwm = options.highWaterMark;
  var defaultHwm = options.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;

  this.highWaterMark = ~~this.highWaterMark;

  this.buffer = [];
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  this.sync = true;

  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;


  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex)
    this.objectMode = this.objectMode || !!options.readableObjectMode;

  this.defaultEncoding = options.defaultEncoding || 'utf8';

  this.ranOut = false;

  this.awaitDrain = 0;

  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder)
      StringDecoder = require('string_decoder/').StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  var Duplex = require('./_stream_duplex');

  if (!(this instanceof Readable))
    return new Readable(options);

  this._readableState = new ReadableState(options, this);

  this.readable = true;

  Stream.call(this);
}

Readable.prototype.push = function(chunk, encoding) {
  var state = this._readableState;

  if (util.isString(chunk) && !state.objectMode) {
    encoding = encoding || state.defaultEncoding;
    if (encoding !== state.encoding) {
      chunk = new Buffer(chunk, encoding);
      encoding = '';
    }
  }

  return readableAddChunk(this, state, chunk, encoding, false);
};

Readable.prototype.unshift = function(chunk) {
  var state = this._readableState;
  return readableAddChunk(this, state, chunk, '', true);
};

function readableAddChunk(stream, state, chunk, encoding, addToFront) {
  var er = chunkInvalid(state, chunk);
  if (er) {
    stream.emit('error', er);
  } else if (util.isNullOrUndefined(chunk)) {
    state.reading = false;
    if (!state.ended)
      onEofChunk(stream, state);
  } else if (state.objectMode || chunk && chunk.length > 0) {
    if (state.ended && !addToFront) {
      var e = new Error('stream.push() after EOF');
      stream.emit('error', e);
    } else if (state.endEmitted && addToFront) {
      var e = new Error('stream.unshift() after end event');
      stream.emit('error', e);
    } else {
      if (state.decoder && !addToFront && !encoding)
        chunk = state.decoder.write(chunk);

      if (!addToFront)
        state.reading = false;

      if (state.flowing && state.length === 0 && !state.sync) {
        stream.emit('data', chunk);
        stream.read(0);
      } else {
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront)
          state.buffer.unshift(chunk);
        else
          state.buffer.push(chunk);

        if (state.needReadable)
          emitReadable(stream);
      }

      maybeReadMore(stream, state);
    }
  } else if (!addToFront) {
    state.reading = false;
  }

  return needMoreData(state);
}



function needMoreData(state) {
  return !state.ended &&
         (state.needReadable ||
          state.length < state.highWaterMark ||
          state.length === 0);
}

Readable.prototype.setEncoding = function(enc) {
  if (!StringDecoder)
    StringDecoder = require('string_decoder/').StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

var MAX_HWM = 0x800000;
function roundUpToNextPowerOf2(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    n--;
    for (var p = 1; p < 32; p <<= 1) n |= n >> p;
    n++;
  }
  return n;
}

function howMuchToRead(n, state) {
  if (state.length === 0 && state.ended)
    return 0;

  if (state.objectMode)
    return n === 0 ? 0 : 1;

  if (isNaN(n) || util.isNull(n)) {
    if (state.flowing && state.buffer.length)
      return state.buffer[0].length;
    else
      return state.length;
  }

  if (n <= 0)
    return 0;

  if (n > state.highWaterMark)
    state.highWaterMark = roundUpToNextPowerOf2(n);

  if (n > state.length) {
    if (!state.ended) {
      state.needReadable = true;
      return 0;
    } else
      return state.length;
  }

  return n;
}

Readable.prototype.read = function(n) {
  debug('read', n);
  var state = this._readableState;
  var nOrig = n;

  if (!util.isNumber(n) || n > 0)
    state.emittedReadable = false;

  if (n === 0 &&
      state.needReadable &&
      (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended)
      endReadable(this);
    else
      emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  if (n === 0 && state.ended) {
    if (state.length === 0)
      endReadable(this);
    return null;
  }


  var doRead = state.needReadable;
  debug('need readable', doRead);

  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  }

  if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    if (state.length === 0)
      state.needReadable = true;
    this._read(state.highWaterMark);
    state.sync = false;
  }

  if (doRead && !state.reading)
    n = howMuchToRead(nOrig, state);

  var ret;
  if (n > 0)
    ret = fromList(n, state);
  else
    ret = null;

  if (util.isNull(ret)) {
    state.needReadable = true;
    n = 0;
  }

  state.length -= n;

  if (state.length === 0 && !state.ended)
    state.needReadable = true;

  if (nOrig !== n && state.ended && state.length === 0)
    endReadable(this);

  if (!util.isNull(ret))
    this.emit('data', ret);

  return ret;
};

function chunkInvalid(state, chunk) {
  var er = null;
  if (!util.isBuffer(chunk) &&
      !util.isString(chunk) &&
      !util.isNullOrUndefined(chunk) &&
      !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}


function onEofChunk(stream, state) {
  if (state.decoder && !state.ended) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  emitReadable(stream);
}

function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync)
      process.nextTick(function() {
        emitReadable_(stream);
      });
    else
      emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}


function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    process.nextTick(function() {
      maybeReadMore_(stream, state);
    });
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended &&
         state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      break;
    else
      len = state.length;
  }
  state.readingMore = false;
}

Readable.prototype._read = function(n) {
  this.emit('error', new Error('not implemented'));
};

Readable.prototype.pipe = function(dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false) &&
              dest !== process.stdout &&
              dest !== process.stderr;

  var endFn = doEnd ? onend : cleanup;
  if (state.endEmitted)
    process.nextTick(endFn);
  else
    src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable) {
    debug('onunpipe');
    if (readable === src) {
      cleanup();
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  function cleanup() {
    debug('cleanup');
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', cleanup);
    src.removeListener('data', ondata);

    if (state.awaitDrain &&
        (!dest._writableState || dest._writableState.needDrain))
      ondrain();
  }

  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    var ret = dest.write(chunk);
    if (false === ret) {
      debug('false write response, pause',
            src._readableState.awaitDrain);
      src._readableState.awaitDrain++;
      src.pause();
    }
  }

  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EE.listenerCount(dest, 'error') === 0)
      dest.emit('error', er);
  }
  if (!dest._events || !dest._events.error)
    dest.on('error', onerror);
  else if (isArray(dest._events.error))
    dest._events.error.unshift(onerror);
  else
    dest._events.error = [onerror, dest._events.error];



  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  dest.emit('pipe', src);

  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function() {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain)
      state.awaitDrain--;
    if (state.awaitDrain === 0 && EE.listenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}


Readable.prototype.unpipe = function(dest) {
  var state = this._readableState;

  if (state.pipesCount === 0)
    return this;

  if (state.pipesCount === 1) {
    if (dest && dest !== state.pipes)
      return this;

    if (!dest)
      dest = state.pipes;

    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest)
      dest.emit('unpipe', this);
    return this;
  }


  if (!dest) {
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++)
      dests[i].emit('unpipe', this);
    return this;
  }

  var i = indexOf(state.pipes, dest);
  if (i === -1)
    return this;

  state.pipes.splice(i, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1)
    state.pipes = state.pipes[0];

  dest.emit('unpipe', this);

  return this;
};

Readable.prototype.on = function(ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  if (ev === 'data' && false !== this._readableState.flowing) {
    this.resume();
  }

  if (ev === 'readable' && this.readable) {
    var state = this._readableState;
    if (!state.readableListening) {
      state.readableListening = true;
      state.emittedReadable = false;
      state.needReadable = true;
      if (!state.reading) {
        var self = this;
        process.nextTick(function() {
          debug('readable nexttick read 0');
          self.read(0);
        });
      } else if (state.length) {
        emitReadable(this, state);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

Readable.prototype.resume = function() {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    if (!state.reading) {
      debug('resume read 0');
      this.read(0);
    }
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    process.nextTick(function() {
      resume_(stream, state);
    });
  }
}

function resume_(stream, state) {
  state.resumeScheduled = false;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading)
    stream.read(0);
}

Readable.prototype.pause = function() {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  if (state.flowing) {
    do {
      var chunk = stream.read();
    } while (null !== chunk && state.flowing);
  }
}

Readable.prototype.wrap = function(stream) {
  var state = this._readableState;
  var paused = false;

  var self = this;
  stream.on('end', function() {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length)
        self.push(chunk);
    }

    self.push(null);
  });

  stream.on('data', function(chunk) {
    debug('wrapped data');
    if (state.decoder)
      chunk = state.decoder.write(chunk);
    if (!chunk || !state.objectMode && !chunk.length)
      return;

    var ret = self.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  for (var i in stream) {
    if (util.isFunction(stream[i]) && util.isUndefined(this[i])) {
      this[i] = function(method) { return function() {
        return stream[method].apply(stream, arguments);
      }}(i);
    }
  }

  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
  forEach(events, function(ev) {
    stream.on(ev, self.emit.bind(self, ev));
  });

  self._read = function(n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return self;
};



Readable._fromList = fromList;

function fromList(n, state) {
  var list = state.buffer;
  var length = state.length;
  var stringMode = !!state.decoder;
  var objectMode = !!state.objectMode;
  var ret;

  if (list.length === 0)
    return null;

  if (length === 0)
    ret = null;
  else if (objectMode)
    ret = list.shift();
  else if (!n || n >= length) {
    if (stringMode)
      ret = list.join('');
    else
      ret = Buffer.concat(list, length);
    list.length = 0;
  } else {
    if (n < list[0].length) {
      var buf = list[0];
      ret = buf.slice(0, n);
      list[0] = buf.slice(n);
    } else if (n === list[0].length) {
      ret = list.shift();
    } else {
      if (stringMode)
        ret = '';
      else
        ret = new Buffer(n);

      var c = 0;
      for (var i = 0, l = list.length; i < l && c < n; i++) {
        var buf = list[0];
        var cpy = Math.min(n - c, buf.length);

        if (stringMode)
          ret += buf.slice(0, cpy);
        else
          buf.copy(ret, c, 0, cpy);

        if (cpy < buf.length)
          list[0] = buf.slice(cpy);
        else
          list.shift();

        c += cpy;
      }
    }
  }

  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  if (state.length > 0)
    throw new Error('endReadable called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    process.nextTick(function() {
      if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit('end');
      }
    });
  }
}

function forEach (xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

function indexOf (xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}

}).call(this,require('_process'))
},{"./_stream_duplex":203,"_process":197,"buffer":53,"core-util-is":208,"events":194,"inherits":195,"isarray":196,"stream":213,"string_decoder/":214,"util":52}],206:[function(require,module,exports){



module.exports = Transform;

var Duplex = require('./_stream_duplex');


var util = require('core-util-is');
util.inherits = require('inherits');


util.inherits(Transform, Duplex);


function TransformState(options, stream) {
  this.afterTransform = function(er, data) {
    return afterTransform(stream, er, data);
  };

  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
}

function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb)
    return stream.emit('error', new Error('no writecb in Transform class'));

  ts.writechunk = null;
  ts.writecb = null;

  if (!util.isNullOrUndefined(data))
    stream.push(data);

  if (cb)
    cb(er);

  var rs = stream._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}


function Transform(options) {
  if (!(this instanceof Transform))
    return new Transform(options);

  Duplex.call(this, options);

  this._transformState = new TransformState(options, this);

  var stream = this;

  this._readableState.needReadable = true;

  this._readableState.sync = false;

  this.once('prefinish', function() {
    if (util.isFunction(this._flush))
      this._flush(function(er) {
        done(stream, er);
      });
    else
      done(stream);
  });
}

Transform.prototype.push = function(chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

Transform.prototype._transform = function(chunk, encoding, cb) {
  throw new Error('not implemented');
};

Transform.prototype._write = function(chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform ||
        rs.needReadable ||
        rs.length < rs.highWaterMark)
      this._read(rs.highWaterMark);
  }
};

Transform.prototype._read = function(n) {
  var ts = this._transformState;

  if (!util.isNull(ts.writechunk) && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    ts.needTransform = true;
  }
};


function done(stream, er) {
  if (er)
    return stream.emit('error', er);

  var ws = stream._writableState;
  var ts = stream._transformState;

  if (ws.length)
    throw new Error('calling transform done when ws.length != 0');

  if (ts.transforming)
    throw new Error('calling transform done when still transforming');

  return stream.push(null);
}

},{"./_stream_duplex":203,"core-util-is":208,"inherits":195}],207:[function(require,module,exports){
(function (process){


module.exports = Writable;


var Buffer = require('buffer').Buffer;


Writable.WritableState = WritableState;



var util = require('core-util-is');
util.inherits = require('inherits');


var Stream = require('stream');

util.inherits(Writable, Stream);

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
}

function WritableState(options, stream) {
  var Duplex = require('./_stream_duplex');

  options = options || {};

  var hwm = options.highWaterMark;
  var defaultHwm = options.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;

  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex)
    this.objectMode = this.objectMode || !!options.writableObjectMode;

  this.highWaterMark = ~~this.highWaterMark;

  this.needDrain = false;
  this.ending = false;
  this.ended = false;
  this.finished = false;

  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  this.defaultEncoding = options.defaultEncoding || 'utf8';

  this.length = 0;

  this.writing = false;

  this.corked = 0;

  this.sync = true;

  this.bufferProcessing = false;

  this.onwrite = function(er) {
    onwrite(stream, er);
  };

  this.writecb = null;

  this.writelen = 0;

  this.buffer = [];

  this.pendingcb = 0;

  this.prefinished = false;

  this.errorEmitted = false;
}

function Writable(options) {
  var Duplex = require('./_stream_duplex');

  if (!(this instanceof Writable) && !(this instanceof Duplex))
    return new Writable(options);

  this._writableState = new WritableState(options, this);

  this.writable = true;

  Stream.call(this);
}

Writable.prototype.pipe = function() {
  this.emit('error', new Error('Cannot pipe. Not readable.'));
};


function writeAfterEnd(stream, state, cb) {
  var er = new Error('write after end');
  stream.emit('error', er);
  process.nextTick(function() {
    cb(er);
  });
}

function validChunk(stream, state, chunk, cb) {
  var valid = true;
  if (!util.isBuffer(chunk) &&
      !util.isString(chunk) &&
      !util.isNullOrUndefined(chunk) &&
      !state.objectMode) {
    var er = new TypeError('Invalid non-string/buffer chunk');
    stream.emit('error', er);
    process.nextTick(function() {
      cb(er);
    });
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function(chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  if (util.isFunction(encoding)) {
    cb = encoding;
    encoding = null;
  }

  if (util.isBuffer(chunk))
    encoding = 'buffer';
  else if (!encoding)
    encoding = state.defaultEncoding;

  if (!util.isFunction(cb))
    cb = function() {};

  if (state.ended)
    writeAfterEnd(this, state, cb);
  else if (validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, chunk, encoding, cb);
  }

  return ret;
};

Writable.prototype.cork = function() {
  var state = this._writableState;

  state.corked++;
};

Writable.prototype.uncork = function() {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing &&
        !state.corked &&
        !state.finished &&
        !state.bufferProcessing &&
        state.buffer.length)
      clearBuffer(this, state);
  }
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode &&
      state.decodeStrings !== false &&
      util.isString(chunk)) {
    chunk = new Buffer(chunk, encoding);
  }
  return chunk;
}

function writeOrBuffer(stream, state, chunk, encoding, cb) {
  chunk = decodeChunk(state, chunk, encoding);
  if (util.isBuffer(chunk))
    encoding = 'buffer';
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  if (!ret)
    state.needDrain = true;

  if (state.writing || state.corked)
    state.buffer.push(new WriteReq(chunk, encoding, cb));
  else
    doWrite(stream, state, false, len, chunk, encoding, cb);

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev)
    stream._writev(chunk, state.onwrite);
  else
    stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  if (sync)
    process.nextTick(function() {
      state.pendingcb--;
      cb(er);
    });
  else {
    state.pendingcb--;
    cb(er);
  }

  stream._writableState.errorEmitted = true;
  stream.emit('error', er);
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er)
    onwriteError(stream, state, sync, er, cb);
  else {
    var finished = needFinish(stream, state);

    if (!finished &&
        !state.corked &&
        !state.bufferProcessing &&
        state.buffer.length) {
      clearBuffer(stream, state);
    }

    if (sync) {
      process.nextTick(function() {
        afterWrite(stream, state, finished, cb);
      });
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished)
    onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}


function clearBuffer(stream, state) {
  state.bufferProcessing = true;

  if (stream._writev && state.buffer.length > 1) {
    var cbs = [];
    for (var c = 0; c < state.buffer.length; c++)
      cbs.push(state.buffer[c].callback);

    state.pendingcb++;
    doWrite(stream, state, true, state.length, state.buffer, '', function(err) {
      for (var i = 0; i < cbs.length; i++) {
        state.pendingcb--;
        cbs[i](err);
      }
    });

    state.buffer = [];
  } else {
    for (var c = 0; c < state.buffer.length; c++) {
      var entry = state.buffer[c];
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);

      if (state.writing) {
        c++;
        break;
      }
    }

    if (c < state.buffer.length)
      state.buffer = state.buffer.slice(c);
    else
      state.buffer.length = 0;
  }

  state.bufferProcessing = false;
}

Writable.prototype._write = function(chunk, encoding, cb) {
  cb(new Error('not implemented'));

};

Writable.prototype._writev = null;

Writable.prototype.end = function(chunk, encoding, cb) {
  var state = this._writableState;

  if (util.isFunction(chunk)) {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (util.isFunction(encoding)) {
    cb = encoding;
    encoding = null;
  }

  if (!util.isNullOrUndefined(chunk))
    this.write(chunk, encoding);

  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  if (!state.ending && !state.finished)
    endWritable(this, state, cb);
};


function needFinish(stream, state) {
  return (state.ending &&
          state.length === 0 &&
          !state.finished &&
          !state.writing);
}

function prefinish(stream, state) {
  if (!state.prefinished) {
    state.prefinished = true;
    stream.emit('prefinish');
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(stream, state);
  if (need) {
    if (state.pendingcb === 0) {
      prefinish(stream, state);
      state.finished = true;
      stream.emit('finish');
    } else
      prefinish(stream, state);
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished)
      process.nextTick(cb);
    else
      stream.once('finish', cb);
  }
  state.ended = true;
}

}).call(this,require('_process'))
},{"./_stream_duplex":203,"_process":197,"buffer":53,"core-util-is":208,"inherits":195,"stream":213}],208:[function(require,module,exports){
(function (Buffer){

function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

function isBuffer(arg) {
  return Buffer.isBuffer(arg);
}
exports.isBuffer = isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}
}).call(this,require("buffer").Buffer)
},{"buffer":53}],209:[function(require,module,exports){
module.exports = require("./lib/_stream_passthrough.js")

},{"./lib/_stream_passthrough.js":204}],210:[function(require,module,exports){
exports = module.exports = require('./lib/_stream_readable.js');
exports.Stream = require('stream');
exports.Readable = exports;
exports.Writable = require('./lib/_stream_writable.js');
exports.Duplex = require('./lib/_stream_duplex.js');
exports.Transform = require('./lib/_stream_transform.js');
exports.PassThrough = require('./lib/_stream_passthrough.js');

},{"./lib/_stream_duplex.js":203,"./lib/_stream_passthrough.js":204,"./lib/_stream_readable.js":205,"./lib/_stream_transform.js":206,"./lib/_stream_writable.js":207,"stream":213}],211:[function(require,module,exports){
module.exports = require("./lib/_stream_transform.js")

},{"./lib/_stream_transform.js":206}],212:[function(require,module,exports){
module.exports = require("./lib/_stream_writable.js")

},{"./lib/_stream_writable.js":207}],213:[function(require,module,exports){

module.exports = Stream;

var EE = require('events').EventEmitter;
var inherits = require('inherits');

inherits(Stream, EE);
Stream.Readable = require('readable-stream/readable.js');
Stream.Writable = require('readable-stream/writable.js');
Stream.Duplex = require('readable-stream/duplex.js');
Stream.Transform = require('readable-stream/transform.js');
Stream.PassThrough = require('readable-stream/passthrough.js');

Stream.Stream = Stream;




function Stream() {
  EE.call(this);
}

Stream.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    if (typeof dest.destroy === 'function') dest.destroy();
  }

  function onerror(er) {
    cleanup();
    if (EE.listenerCount(this, 'error') === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);

    source.removeListener('end', onend);
    source.removeListener('close', onclose);

    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);

    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);

    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('close', cleanup);

  dest.emit('pipe', source);

  return dest;
};

},{"events":194,"inherits":195,"readable-stream/duplex.js":202,"readable-stream/passthrough.js":209,"readable-stream/readable.js":210,"readable-stream/transform.js":211,"readable-stream/writable.js":212}],214:[function(require,module,exports){

var Buffer = require('buffer').Buffer;

var isBufferEncoding = Buffer.isEncoding
  || function(encoding) {
       switch (encoding && encoding.toLowerCase()) {
         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
         default: return false;
       }
     }


function assertEncoding(encoding) {
  if (encoding && !isBufferEncoding(encoding)) {
    throw new Error('Unknown encoding: ' + encoding);
  }
}

var StringDecoder = exports.StringDecoder = function(encoding) {
  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
  assertEncoding(encoding);
  switch (this.encoding) {
    case 'utf8':
      this.surrogateSize = 3;
      break;
    case 'ucs2':
    case 'utf16le':
      this.surrogateSize = 2;
      this.detectIncompleteChar = utf16DetectIncompleteChar;
      break;
    case 'base64':
      this.surrogateSize = 3;
      this.detectIncompleteChar = base64DetectIncompleteChar;
      break;
    default:
      this.write = passThroughWrite;
      return;
  }

  this.charBuffer = new Buffer(6);
  this.charReceived = 0;
  this.charLength = 0;
};


StringDecoder.prototype.write = function(buffer) {
  var charStr = '';
  while (this.charLength) {
    var available = (buffer.length >= this.charLength - this.charReceived) ?
        this.charLength - this.charReceived :
        buffer.length;

    buffer.copy(this.charBuffer, this.charReceived, 0, available);
    this.charReceived += available;

    if (this.charReceived < this.charLength) {
      return '';
    }

    buffer = buffer.slice(available, buffer.length);

    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

    var charCode = charStr.charCodeAt(charStr.length - 1);
    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      this.charLength += this.surrogateSize;
      charStr = '';
      continue;
    }
    this.charReceived = this.charLength = 0;

    if (buffer.length === 0) {
      return charStr;
    }
    break;
  }

  this.detectIncompleteChar(buffer);

  var end = buffer.length;
  if (this.charLength) {
    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
    end -= this.charReceived;
  }

  charStr += buffer.toString(this.encoding, 0, end);

  var end = charStr.length - 1;
  var charCode = charStr.charCodeAt(end);
  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
    var size = this.surrogateSize;
    this.charLength += size;
    this.charReceived += size;
    this.charBuffer.copy(this.charBuffer, size, 0, size);
    buffer.copy(this.charBuffer, 0, 0, size);
    return charStr.substring(0, end);
  }

  return charStr;
};

StringDecoder.prototype.detectIncompleteChar = function(buffer) {
  var i = (buffer.length >= 3) ? 3 : buffer.length;

  for (; i > 0; i--) {
    var c = buffer[buffer.length - i];


    if (i == 1 && c >> 5 == 0x06) {
      this.charLength = 2;
      break;
    }

    if (i <= 2 && c >> 4 == 0x0E) {
      this.charLength = 3;
      break;
    }

    if (i <= 3 && c >> 3 == 0x1E) {
      this.charLength = 4;
      break;
    }
  }
  this.charReceived = i;
};

StringDecoder.prototype.end = function(buffer) {
  var res = '';
  if (buffer && buffer.length)
    res = this.write(buffer);

  if (this.charReceived) {
    var cr = this.charReceived;
    var buf = this.charBuffer;
    var enc = this.encoding;
    res += buf.slice(0, cr).toString(enc);
  }

  return res;
};

function passThroughWrite(buffer) {
  return buffer.toString(this.encoding);
}

function utf16DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 2;
  this.charLength = this.charReceived ? 2 : 0;
}

function base64DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 3;
  this.charLength = this.charReceived ? 3 : 0;
}

},{"buffer":53}],215:[function(require,module,exports){

var punycode = require('punycode');

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}


var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    autoEscape = ['\''].concat(unwise),
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = require('querystring');

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  var rest = url;

  rest = rest.trim();

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {



    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    var auth, atSign;
    if (hostEnd === -1) {
      atSign = rest.lastIndexOf('@');
    } else {
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    this.parseHost();

    this.hostname = this.hostname || '';

    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      var domainArray = this.hostname.split('.');
      var newOut = [];
      for (var i = 0; i < domainArray.length; ++i) {
        var s = domainArray[i];
        newOut.push(s.match(/[^A-Za-z0-9_-]/) ?
            'xn--' + punycode.encode(s) : s);
      }
      this.hostname = newOut.join('.');
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  if (!unsafeProtocol[lowerProto]) {

    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  var hash = rest.indexOf('#');
  if (hash !== -1) {
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  this.href = this.format();
  return this;
};

function urlFormat(obj) {
  if (isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  Object.keys(this).forEach(function(k) {
    result[k] = this[k];
  }, this);

  result.hash = relative.hash;

  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  if (relative.slashes && !relative.protocol) {
    Object.keys(relative).forEach(function(k) {
      if (k !== 'protocol')
        result[k] = relative[k];
    });

    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    if (!slashedProtocol[relative.protocol]) {
      Object.keys(relative).forEach(function(k) {
        result[k] = relative[k];
      });
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
  } else if (relPath.length) {
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!isNullOrUndefined(relative.search)) {
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    if (!isNull(result.pathname) || !isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    result.pathname = null;
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host) && (last === '.' || last === '..') ||
      last === '');

  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last == '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  if (!isNull(result.pathname) || !isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};

function isString(arg) {
  return typeof arg === "string";
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isNull(arg) {
  return arg === null;
}
function isNullOrUndefined(arg) {
  return  arg == null;
}

},{"punycode":198,"querystring":201}],216:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],217:[function(require,module,exports){
(function (process,global){

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


exports.deprecate = function(fn, msg) {
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};




function inspect(obj, opts) {
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    ctx.showHidden = opts;
  } else if (opts) {
    exports._extend(ctx, opts);
  }
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      value.inspect !== exports.inspect &&
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};



exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":216,"_process":197,"inherits":195}],218:[function(require,module,exports){
var indexOf = require('indexof');

var Object_keys = function (obj) {
    if (Object.keys) return Object.keys(obj)
    else {
        var res = [];
        for (var key in obj) res.push(key)
        return res;
    }
};

var forEach = function (xs, fn) {
    if (xs.forEach) return xs.forEach(fn)
    else for (var i = 0; i < xs.length; i++) {
        fn(xs[i], i, xs);
    }
};

var defineProp = (function() {
    try {
        Object.defineProperty({}, '_', {});
        return function(obj, name, value) {
            Object.defineProperty(obj, name, {
                writable: true,
                enumerable: false,
                configurable: true,
                value: value
            })
        };
    } catch(e) {
        return function(obj, name, value) {
            obj[name] = value;
        };
    }
}());

var globals = ['Array', 'Boolean', 'Date', 'Error', 'EvalError', 'Function',
'Infinity', 'JSON', 'Math', 'NaN', 'Number', 'Object', 'RangeError',
'ReferenceError', 'RegExp', 'String', 'SyntaxError', 'TypeError', 'URIError',
'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape',
'eval', 'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'undefined', 'unescape'];

function Context() {}
Context.prototype = {};

var Script = exports.Script = function NodeScript (code) {
    if (!(this instanceof Script)) return new Script(code);
    this.code = code;
};

Script.prototype.runInContext = function (context) {
    if (!(context instanceof Context)) {
        throw new TypeError("needs a 'context' argument.");
    }
    
    var iframe = document.createElement('iframe');
    if (!iframe.style) iframe.style = {};
    iframe.style.display = 'none';
    
    document.body.appendChild(iframe);
    
    var win = iframe.contentWindow;
    var wEval = win.eval, wExecScript = win.execScript;

    if (!wEval && wExecScript) {
        wExecScript.call(win, 'null');
        wEval = win.eval;
    }
    
    forEach(Object_keys(context), function (key) {
        win[key] = context[key];
    });
    forEach(globals, function (key) {
        if (context[key]) {
            win[key] = context[key];
        }
    });
    
    var winKeys = Object_keys(win);

    var res = wEval.call(win, this.code);
    
    forEach(Object_keys(win), function (key) {
        if (key in context || indexOf(winKeys, key) === -1) {
            context[key] = win[key];
        }
    });

    forEach(globals, function (key) {
        if (!(key in context)) {
            defineProp(context, key, win[key]);
        }
    });
    
    document.body.removeChild(iframe);
    
    return res;
};

Script.prototype.runInThisContext = function () {
    return eval(this.code); // maybe...
};

Script.prototype.runInNewContext = function (context) {
    var ctx = Script.createContext(context);
    var res = this.runInContext(ctx);

    forEach(Object_keys(ctx), function (key) {
        context[key] = ctx[key];
    });

    return res;
};

forEach(Object_keys(Script.prototype), function (name) {
    exports[name] = Script[name] = function (code) {
        var s = Script(code);
        return s[name].apply(s, [].slice.call(arguments, 1));
    };
});

exports.createScript = function (code) {
    return exports.Script(code);
};

exports.createContext = Script.createContext = function (context) {
    var copy = new Context();
    if(typeof context === 'object') {
        forEach(Object_keys(context), function (key) {
            copy[key] = context[key];
        });
    }
    return copy;
};

},{"indexof":219}],219:[function(require,module,exports){

var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};
},{}]},{},[1]);

