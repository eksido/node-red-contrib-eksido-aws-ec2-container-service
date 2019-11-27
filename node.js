'use strict';
var lib = require('./lib.js');

module.exports = function (RED) {
    function AmazonEc2ContainerServiceNode(config) {
        RED.nodes.createNode(this, config);
        this.service = RED.nodes.getNode(config.service);
        this.method = config.method;
        this.CreateCluster_body = config.CreateCluster_body;
        this.CreateCluster_bodyType = config.CreateCluster_bodyType || 'str';
        this.CreateCluster_xAmzTarget = config.CreateCluster_xAmzTarget;
        this.CreateCluster_xAmzTargetType = config.CreateCluster_xAmzTargetType || 'str';
        this.CreateCluster_xAmzContentSha256 = config.CreateCluster_xAmzContentSha256;
        this.CreateCluster_xAmzContentSha256Type = config.CreateCluster_xAmzContentSha256Type || 'str';
        this.CreateCluster_xAmzDate = config.CreateCluster_xAmzDate;
        this.CreateCluster_xAmzDateType = config.CreateCluster_xAmzDateType || 'str';
        this.CreateCluster_xAmzAlgorithm = config.CreateCluster_xAmzAlgorithm;
        this.CreateCluster_xAmzAlgorithmType = config.CreateCluster_xAmzAlgorithmType || 'str';
        this.CreateCluster_xAmzCredential = config.CreateCluster_xAmzCredential;
        this.CreateCluster_xAmzCredentialType = config.CreateCluster_xAmzCredentialType || 'str';
        this.CreateCluster_xAmzSecurityToken = config.CreateCluster_xAmzSecurityToken;
        this.CreateCluster_xAmzSecurityTokenType = config.CreateCluster_xAmzSecurityTokenType || 'str';
        this.CreateCluster_xAmzSignature = config.CreateCluster_xAmzSignature;
        this.CreateCluster_xAmzSignatureType = config.CreateCluster_xAmzSignatureType || 'str';
        this.CreateCluster_xAmzSignedHeaders = config.CreateCluster_xAmzSignedHeaders;
        this.CreateCluster_xAmzSignedHeadersType = config.CreateCluster_xAmzSignedHeadersType || 'str';
        this.CreateService_body = config.CreateService_body;
        this.CreateService_bodyType = config.CreateService_bodyType || 'str';
        this.CreateService_xAmzTarget = config.CreateService_xAmzTarget;
        this.CreateService_xAmzTargetType = config.CreateService_xAmzTargetType || 'str';
        this.CreateService_xAmzContentSha256 = config.CreateService_xAmzContentSha256;
        this.CreateService_xAmzContentSha256Type = config.CreateService_xAmzContentSha256Type || 'str';
        this.CreateService_xAmzDate = config.CreateService_xAmzDate;
        this.CreateService_xAmzDateType = config.CreateService_xAmzDateType || 'str';
        this.CreateService_xAmzAlgorithm = config.CreateService_xAmzAlgorithm;
        this.CreateService_xAmzAlgorithmType = config.CreateService_xAmzAlgorithmType || 'str';
        this.CreateService_xAmzCredential = config.CreateService_xAmzCredential;
        this.CreateService_xAmzCredentialType = config.CreateService_xAmzCredentialType || 'str';
        this.CreateService_xAmzSecurityToken = config.CreateService_xAmzSecurityToken;
        this.CreateService_xAmzSecurityTokenType = config.CreateService_xAmzSecurityTokenType || 'str';
        this.CreateService_xAmzSignature = config.CreateService_xAmzSignature;
        this.CreateService_xAmzSignatureType = config.CreateService_xAmzSignatureType || 'str';
        this.CreateService_xAmzSignedHeaders = config.CreateService_xAmzSignedHeaders;
        this.CreateService_xAmzSignedHeadersType = config.CreateService_xAmzSignedHeadersType || 'str';
        this.CreateTaskSet_body = config.CreateTaskSet_body;
        this.CreateTaskSet_bodyType = config.CreateTaskSet_bodyType || 'str';
        this.CreateTaskSet_xAmzTarget = config.CreateTaskSet_xAmzTarget;
        this.CreateTaskSet_xAmzTargetType = config.CreateTaskSet_xAmzTargetType || 'str';
        this.CreateTaskSet_xAmzContentSha256 = config.CreateTaskSet_xAmzContentSha256;
        this.CreateTaskSet_xAmzContentSha256Type = config.CreateTaskSet_xAmzContentSha256Type || 'str';
        this.CreateTaskSet_xAmzDate = config.CreateTaskSet_xAmzDate;
        this.CreateTaskSet_xAmzDateType = config.CreateTaskSet_xAmzDateType || 'str';
        this.CreateTaskSet_xAmzAlgorithm = config.CreateTaskSet_xAmzAlgorithm;
        this.CreateTaskSet_xAmzAlgorithmType = config.CreateTaskSet_xAmzAlgorithmType || 'str';
        this.CreateTaskSet_xAmzCredential = config.CreateTaskSet_xAmzCredential;
        this.CreateTaskSet_xAmzCredentialType = config.CreateTaskSet_xAmzCredentialType || 'str';
        this.CreateTaskSet_xAmzSecurityToken = config.CreateTaskSet_xAmzSecurityToken;
        this.CreateTaskSet_xAmzSecurityTokenType = config.CreateTaskSet_xAmzSecurityTokenType || 'str';
        this.CreateTaskSet_xAmzSignature = config.CreateTaskSet_xAmzSignature;
        this.CreateTaskSet_xAmzSignatureType = config.CreateTaskSet_xAmzSignatureType || 'str';
        this.CreateTaskSet_xAmzSignedHeaders = config.CreateTaskSet_xAmzSignedHeaders;
        this.CreateTaskSet_xAmzSignedHeadersType = config.CreateTaskSet_xAmzSignedHeadersType || 'str';
        this.DeleteAccountSetting_body = config.DeleteAccountSetting_body;
        this.DeleteAccountSetting_bodyType = config.DeleteAccountSetting_bodyType || 'str';
        this.DeleteAccountSetting_xAmzTarget = config.DeleteAccountSetting_xAmzTarget;
        this.DeleteAccountSetting_xAmzTargetType = config.DeleteAccountSetting_xAmzTargetType || 'str';
        this.DeleteAccountSetting_xAmzContentSha256 = config.DeleteAccountSetting_xAmzContentSha256;
        this.DeleteAccountSetting_xAmzContentSha256Type = config.DeleteAccountSetting_xAmzContentSha256Type || 'str';
        this.DeleteAccountSetting_xAmzDate = config.DeleteAccountSetting_xAmzDate;
        this.DeleteAccountSetting_xAmzDateType = config.DeleteAccountSetting_xAmzDateType || 'str';
        this.DeleteAccountSetting_xAmzAlgorithm = config.DeleteAccountSetting_xAmzAlgorithm;
        this.DeleteAccountSetting_xAmzAlgorithmType = config.DeleteAccountSetting_xAmzAlgorithmType || 'str';
        this.DeleteAccountSetting_xAmzCredential = config.DeleteAccountSetting_xAmzCredential;
        this.DeleteAccountSetting_xAmzCredentialType = config.DeleteAccountSetting_xAmzCredentialType || 'str';
        this.DeleteAccountSetting_xAmzSecurityToken = config.DeleteAccountSetting_xAmzSecurityToken;
        this.DeleteAccountSetting_xAmzSecurityTokenType = config.DeleteAccountSetting_xAmzSecurityTokenType || 'str';
        this.DeleteAccountSetting_xAmzSignature = config.DeleteAccountSetting_xAmzSignature;
        this.DeleteAccountSetting_xAmzSignatureType = config.DeleteAccountSetting_xAmzSignatureType || 'str';
        this.DeleteAccountSetting_xAmzSignedHeaders = config.DeleteAccountSetting_xAmzSignedHeaders;
        this.DeleteAccountSetting_xAmzSignedHeadersType = config.DeleteAccountSetting_xAmzSignedHeadersType || 'str';
        this.DeleteAttributes_body = config.DeleteAttributes_body;
        this.DeleteAttributes_bodyType = config.DeleteAttributes_bodyType || 'str';
        this.DeleteAttributes_xAmzTarget = config.DeleteAttributes_xAmzTarget;
        this.DeleteAttributes_xAmzTargetType = config.DeleteAttributes_xAmzTargetType || 'str';
        this.DeleteAttributes_xAmzContentSha256 = config.DeleteAttributes_xAmzContentSha256;
        this.DeleteAttributes_xAmzContentSha256Type = config.DeleteAttributes_xAmzContentSha256Type || 'str';
        this.DeleteAttributes_xAmzDate = config.DeleteAttributes_xAmzDate;
        this.DeleteAttributes_xAmzDateType = config.DeleteAttributes_xAmzDateType || 'str';
        this.DeleteAttributes_xAmzAlgorithm = config.DeleteAttributes_xAmzAlgorithm;
        this.DeleteAttributes_xAmzAlgorithmType = config.DeleteAttributes_xAmzAlgorithmType || 'str';
        this.DeleteAttributes_xAmzCredential = config.DeleteAttributes_xAmzCredential;
        this.DeleteAttributes_xAmzCredentialType = config.DeleteAttributes_xAmzCredentialType || 'str';
        this.DeleteAttributes_xAmzSecurityToken = config.DeleteAttributes_xAmzSecurityToken;
        this.DeleteAttributes_xAmzSecurityTokenType = config.DeleteAttributes_xAmzSecurityTokenType || 'str';
        this.DeleteAttributes_xAmzSignature = config.DeleteAttributes_xAmzSignature;
        this.DeleteAttributes_xAmzSignatureType = config.DeleteAttributes_xAmzSignatureType || 'str';
        this.DeleteAttributes_xAmzSignedHeaders = config.DeleteAttributes_xAmzSignedHeaders;
        this.DeleteAttributes_xAmzSignedHeadersType = config.DeleteAttributes_xAmzSignedHeadersType || 'str';
        this.DeleteCluster_body = config.DeleteCluster_body;
        this.DeleteCluster_bodyType = config.DeleteCluster_bodyType || 'str';
        this.DeleteCluster_xAmzTarget = config.DeleteCluster_xAmzTarget;
        this.DeleteCluster_xAmzTargetType = config.DeleteCluster_xAmzTargetType || 'str';
        this.DeleteCluster_xAmzContentSha256 = config.DeleteCluster_xAmzContentSha256;
        this.DeleteCluster_xAmzContentSha256Type = config.DeleteCluster_xAmzContentSha256Type || 'str';
        this.DeleteCluster_xAmzDate = config.DeleteCluster_xAmzDate;
        this.DeleteCluster_xAmzDateType = config.DeleteCluster_xAmzDateType || 'str';
        this.DeleteCluster_xAmzAlgorithm = config.DeleteCluster_xAmzAlgorithm;
        this.DeleteCluster_xAmzAlgorithmType = config.DeleteCluster_xAmzAlgorithmType || 'str';
        this.DeleteCluster_xAmzCredential = config.DeleteCluster_xAmzCredential;
        this.DeleteCluster_xAmzCredentialType = config.DeleteCluster_xAmzCredentialType || 'str';
        this.DeleteCluster_xAmzSecurityToken = config.DeleteCluster_xAmzSecurityToken;
        this.DeleteCluster_xAmzSecurityTokenType = config.DeleteCluster_xAmzSecurityTokenType || 'str';
        this.DeleteCluster_xAmzSignature = config.DeleteCluster_xAmzSignature;
        this.DeleteCluster_xAmzSignatureType = config.DeleteCluster_xAmzSignatureType || 'str';
        this.DeleteCluster_xAmzSignedHeaders = config.DeleteCluster_xAmzSignedHeaders;
        this.DeleteCluster_xAmzSignedHeadersType = config.DeleteCluster_xAmzSignedHeadersType || 'str';
        this.DeleteService_body = config.DeleteService_body;
        this.DeleteService_bodyType = config.DeleteService_bodyType || 'str';
        this.DeleteService_xAmzTarget = config.DeleteService_xAmzTarget;
        this.DeleteService_xAmzTargetType = config.DeleteService_xAmzTargetType || 'str';
        this.DeleteService_xAmzContentSha256 = config.DeleteService_xAmzContentSha256;
        this.DeleteService_xAmzContentSha256Type = config.DeleteService_xAmzContentSha256Type || 'str';
        this.DeleteService_xAmzDate = config.DeleteService_xAmzDate;
        this.DeleteService_xAmzDateType = config.DeleteService_xAmzDateType || 'str';
        this.DeleteService_xAmzAlgorithm = config.DeleteService_xAmzAlgorithm;
        this.DeleteService_xAmzAlgorithmType = config.DeleteService_xAmzAlgorithmType || 'str';
        this.DeleteService_xAmzCredential = config.DeleteService_xAmzCredential;
        this.DeleteService_xAmzCredentialType = config.DeleteService_xAmzCredentialType || 'str';
        this.DeleteService_xAmzSecurityToken = config.DeleteService_xAmzSecurityToken;
        this.DeleteService_xAmzSecurityTokenType = config.DeleteService_xAmzSecurityTokenType || 'str';
        this.DeleteService_xAmzSignature = config.DeleteService_xAmzSignature;
        this.DeleteService_xAmzSignatureType = config.DeleteService_xAmzSignatureType || 'str';
        this.DeleteService_xAmzSignedHeaders = config.DeleteService_xAmzSignedHeaders;
        this.DeleteService_xAmzSignedHeadersType = config.DeleteService_xAmzSignedHeadersType || 'str';
        this.DeleteTaskSet_body = config.DeleteTaskSet_body;
        this.DeleteTaskSet_bodyType = config.DeleteTaskSet_bodyType || 'str';
        this.DeleteTaskSet_xAmzTarget = config.DeleteTaskSet_xAmzTarget;
        this.DeleteTaskSet_xAmzTargetType = config.DeleteTaskSet_xAmzTargetType || 'str';
        this.DeleteTaskSet_xAmzContentSha256 = config.DeleteTaskSet_xAmzContentSha256;
        this.DeleteTaskSet_xAmzContentSha256Type = config.DeleteTaskSet_xAmzContentSha256Type || 'str';
        this.DeleteTaskSet_xAmzDate = config.DeleteTaskSet_xAmzDate;
        this.DeleteTaskSet_xAmzDateType = config.DeleteTaskSet_xAmzDateType || 'str';
        this.DeleteTaskSet_xAmzAlgorithm = config.DeleteTaskSet_xAmzAlgorithm;
        this.DeleteTaskSet_xAmzAlgorithmType = config.DeleteTaskSet_xAmzAlgorithmType || 'str';
        this.DeleteTaskSet_xAmzCredential = config.DeleteTaskSet_xAmzCredential;
        this.DeleteTaskSet_xAmzCredentialType = config.DeleteTaskSet_xAmzCredentialType || 'str';
        this.DeleteTaskSet_xAmzSecurityToken = config.DeleteTaskSet_xAmzSecurityToken;
        this.DeleteTaskSet_xAmzSecurityTokenType = config.DeleteTaskSet_xAmzSecurityTokenType || 'str';
        this.DeleteTaskSet_xAmzSignature = config.DeleteTaskSet_xAmzSignature;
        this.DeleteTaskSet_xAmzSignatureType = config.DeleteTaskSet_xAmzSignatureType || 'str';
        this.DeleteTaskSet_xAmzSignedHeaders = config.DeleteTaskSet_xAmzSignedHeaders;
        this.DeleteTaskSet_xAmzSignedHeadersType = config.DeleteTaskSet_xAmzSignedHeadersType || 'str';
        this.DeregisterContainerInstance_body = config.DeregisterContainerInstance_body;
        this.DeregisterContainerInstance_bodyType = config.DeregisterContainerInstance_bodyType || 'str';
        this.DeregisterContainerInstance_xAmzTarget = config.DeregisterContainerInstance_xAmzTarget;
        this.DeregisterContainerInstance_xAmzTargetType = config.DeregisterContainerInstance_xAmzTargetType || 'str';
        this.DeregisterContainerInstance_xAmzContentSha256 = config.DeregisterContainerInstance_xAmzContentSha256;
        this.DeregisterContainerInstance_xAmzContentSha256Type = config.DeregisterContainerInstance_xAmzContentSha256Type || 'str';
        this.DeregisterContainerInstance_xAmzDate = config.DeregisterContainerInstance_xAmzDate;
        this.DeregisterContainerInstance_xAmzDateType = config.DeregisterContainerInstance_xAmzDateType || 'str';
        this.DeregisterContainerInstance_xAmzAlgorithm = config.DeregisterContainerInstance_xAmzAlgorithm;
        this.DeregisterContainerInstance_xAmzAlgorithmType = config.DeregisterContainerInstance_xAmzAlgorithmType || 'str';
        this.DeregisterContainerInstance_xAmzCredential = config.DeregisterContainerInstance_xAmzCredential;
        this.DeregisterContainerInstance_xAmzCredentialType = config.DeregisterContainerInstance_xAmzCredentialType || 'str';
        this.DeregisterContainerInstance_xAmzSecurityToken = config.DeregisterContainerInstance_xAmzSecurityToken;
        this.DeregisterContainerInstance_xAmzSecurityTokenType = config.DeregisterContainerInstance_xAmzSecurityTokenType || 'str';
        this.DeregisterContainerInstance_xAmzSignature = config.DeregisterContainerInstance_xAmzSignature;
        this.DeregisterContainerInstance_xAmzSignatureType = config.DeregisterContainerInstance_xAmzSignatureType || 'str';
        this.DeregisterContainerInstance_xAmzSignedHeaders = config.DeregisterContainerInstance_xAmzSignedHeaders;
        this.DeregisterContainerInstance_xAmzSignedHeadersType = config.DeregisterContainerInstance_xAmzSignedHeadersType || 'str';
        this.DeregisterTaskDefinition_body = config.DeregisterTaskDefinition_body;
        this.DeregisterTaskDefinition_bodyType = config.DeregisterTaskDefinition_bodyType || 'str';
        this.DeregisterTaskDefinition_xAmzTarget = config.DeregisterTaskDefinition_xAmzTarget;
        this.DeregisterTaskDefinition_xAmzTargetType = config.DeregisterTaskDefinition_xAmzTargetType || 'str';
        this.DeregisterTaskDefinition_xAmzContentSha256 = config.DeregisterTaskDefinition_xAmzContentSha256;
        this.DeregisterTaskDefinition_xAmzContentSha256Type = config.DeregisterTaskDefinition_xAmzContentSha256Type || 'str';
        this.DeregisterTaskDefinition_xAmzDate = config.DeregisterTaskDefinition_xAmzDate;
        this.DeregisterTaskDefinition_xAmzDateType = config.DeregisterTaskDefinition_xAmzDateType || 'str';
        this.DeregisterTaskDefinition_xAmzAlgorithm = config.DeregisterTaskDefinition_xAmzAlgorithm;
        this.DeregisterTaskDefinition_xAmzAlgorithmType = config.DeregisterTaskDefinition_xAmzAlgorithmType || 'str';
        this.DeregisterTaskDefinition_xAmzCredential = config.DeregisterTaskDefinition_xAmzCredential;
        this.DeregisterTaskDefinition_xAmzCredentialType = config.DeregisterTaskDefinition_xAmzCredentialType || 'str';
        this.DeregisterTaskDefinition_xAmzSecurityToken = config.DeregisterTaskDefinition_xAmzSecurityToken;
        this.DeregisterTaskDefinition_xAmzSecurityTokenType = config.DeregisterTaskDefinition_xAmzSecurityTokenType || 'str';
        this.DeregisterTaskDefinition_xAmzSignature = config.DeregisterTaskDefinition_xAmzSignature;
        this.DeregisterTaskDefinition_xAmzSignatureType = config.DeregisterTaskDefinition_xAmzSignatureType || 'str';
        this.DeregisterTaskDefinition_xAmzSignedHeaders = config.DeregisterTaskDefinition_xAmzSignedHeaders;
        this.DeregisterTaskDefinition_xAmzSignedHeadersType = config.DeregisterTaskDefinition_xAmzSignedHeadersType || 'str';
        this.DescribeClusters_body = config.DescribeClusters_body;
        this.DescribeClusters_bodyType = config.DescribeClusters_bodyType || 'str';
        this.DescribeClusters_xAmzTarget = config.DescribeClusters_xAmzTarget;
        this.DescribeClusters_xAmzTargetType = config.DescribeClusters_xAmzTargetType || 'str';
        this.DescribeClusters_xAmzContentSha256 = config.DescribeClusters_xAmzContentSha256;
        this.DescribeClusters_xAmzContentSha256Type = config.DescribeClusters_xAmzContentSha256Type || 'str';
        this.DescribeClusters_xAmzDate = config.DescribeClusters_xAmzDate;
        this.DescribeClusters_xAmzDateType = config.DescribeClusters_xAmzDateType || 'str';
        this.DescribeClusters_xAmzAlgorithm = config.DescribeClusters_xAmzAlgorithm;
        this.DescribeClusters_xAmzAlgorithmType = config.DescribeClusters_xAmzAlgorithmType || 'str';
        this.DescribeClusters_xAmzCredential = config.DescribeClusters_xAmzCredential;
        this.DescribeClusters_xAmzCredentialType = config.DescribeClusters_xAmzCredentialType || 'str';
        this.DescribeClusters_xAmzSecurityToken = config.DescribeClusters_xAmzSecurityToken;
        this.DescribeClusters_xAmzSecurityTokenType = config.DescribeClusters_xAmzSecurityTokenType || 'str';
        this.DescribeClusters_xAmzSignature = config.DescribeClusters_xAmzSignature;
        this.DescribeClusters_xAmzSignatureType = config.DescribeClusters_xAmzSignatureType || 'str';
        this.DescribeClusters_xAmzSignedHeaders = config.DescribeClusters_xAmzSignedHeaders;
        this.DescribeClusters_xAmzSignedHeadersType = config.DescribeClusters_xAmzSignedHeadersType || 'str';
        this.DescribeContainerInstances_body = config.DescribeContainerInstances_body;
        this.DescribeContainerInstances_bodyType = config.DescribeContainerInstances_bodyType || 'str';
        this.DescribeContainerInstances_xAmzTarget = config.DescribeContainerInstances_xAmzTarget;
        this.DescribeContainerInstances_xAmzTargetType = config.DescribeContainerInstances_xAmzTargetType || 'str';
        this.DescribeContainerInstances_xAmzContentSha256 = config.DescribeContainerInstances_xAmzContentSha256;
        this.DescribeContainerInstances_xAmzContentSha256Type = config.DescribeContainerInstances_xAmzContentSha256Type || 'str';
        this.DescribeContainerInstances_xAmzDate = config.DescribeContainerInstances_xAmzDate;
        this.DescribeContainerInstances_xAmzDateType = config.DescribeContainerInstances_xAmzDateType || 'str';
        this.DescribeContainerInstances_xAmzAlgorithm = config.DescribeContainerInstances_xAmzAlgorithm;
        this.DescribeContainerInstances_xAmzAlgorithmType = config.DescribeContainerInstances_xAmzAlgorithmType || 'str';
        this.DescribeContainerInstances_xAmzCredential = config.DescribeContainerInstances_xAmzCredential;
        this.DescribeContainerInstances_xAmzCredentialType = config.DescribeContainerInstances_xAmzCredentialType || 'str';
        this.DescribeContainerInstances_xAmzSecurityToken = config.DescribeContainerInstances_xAmzSecurityToken;
        this.DescribeContainerInstances_xAmzSecurityTokenType = config.DescribeContainerInstances_xAmzSecurityTokenType || 'str';
        this.DescribeContainerInstances_xAmzSignature = config.DescribeContainerInstances_xAmzSignature;
        this.DescribeContainerInstances_xAmzSignatureType = config.DescribeContainerInstances_xAmzSignatureType || 'str';
        this.DescribeContainerInstances_xAmzSignedHeaders = config.DescribeContainerInstances_xAmzSignedHeaders;
        this.DescribeContainerInstances_xAmzSignedHeadersType = config.DescribeContainerInstances_xAmzSignedHeadersType || 'str';
        this.DescribeServices_body = config.DescribeServices_body;
        this.DescribeServices_bodyType = config.DescribeServices_bodyType || 'str';
        this.DescribeServices_xAmzTarget = config.DescribeServices_xAmzTarget;
        this.DescribeServices_xAmzTargetType = config.DescribeServices_xAmzTargetType || 'str';
        this.DescribeServices_xAmzContentSha256 = config.DescribeServices_xAmzContentSha256;
        this.DescribeServices_xAmzContentSha256Type = config.DescribeServices_xAmzContentSha256Type || 'str';
        this.DescribeServices_xAmzDate = config.DescribeServices_xAmzDate;
        this.DescribeServices_xAmzDateType = config.DescribeServices_xAmzDateType || 'str';
        this.DescribeServices_xAmzAlgorithm = config.DescribeServices_xAmzAlgorithm;
        this.DescribeServices_xAmzAlgorithmType = config.DescribeServices_xAmzAlgorithmType || 'str';
        this.DescribeServices_xAmzCredential = config.DescribeServices_xAmzCredential;
        this.DescribeServices_xAmzCredentialType = config.DescribeServices_xAmzCredentialType || 'str';
        this.DescribeServices_xAmzSecurityToken = config.DescribeServices_xAmzSecurityToken;
        this.DescribeServices_xAmzSecurityTokenType = config.DescribeServices_xAmzSecurityTokenType || 'str';
        this.DescribeServices_xAmzSignature = config.DescribeServices_xAmzSignature;
        this.DescribeServices_xAmzSignatureType = config.DescribeServices_xAmzSignatureType || 'str';
        this.DescribeServices_xAmzSignedHeaders = config.DescribeServices_xAmzSignedHeaders;
        this.DescribeServices_xAmzSignedHeadersType = config.DescribeServices_xAmzSignedHeadersType || 'str';
        this.DescribeTaskDefinition_body = config.DescribeTaskDefinition_body;
        this.DescribeTaskDefinition_bodyType = config.DescribeTaskDefinition_bodyType || 'str';
        this.DescribeTaskDefinition_xAmzTarget = config.DescribeTaskDefinition_xAmzTarget;
        this.DescribeTaskDefinition_xAmzTargetType = config.DescribeTaskDefinition_xAmzTargetType || 'str';
        this.DescribeTaskDefinition_xAmzContentSha256 = config.DescribeTaskDefinition_xAmzContentSha256;
        this.DescribeTaskDefinition_xAmzContentSha256Type = config.DescribeTaskDefinition_xAmzContentSha256Type || 'str';
        this.DescribeTaskDefinition_xAmzDate = config.DescribeTaskDefinition_xAmzDate;
        this.DescribeTaskDefinition_xAmzDateType = config.DescribeTaskDefinition_xAmzDateType || 'str';
        this.DescribeTaskDefinition_xAmzAlgorithm = config.DescribeTaskDefinition_xAmzAlgorithm;
        this.DescribeTaskDefinition_xAmzAlgorithmType = config.DescribeTaskDefinition_xAmzAlgorithmType || 'str';
        this.DescribeTaskDefinition_xAmzCredential = config.DescribeTaskDefinition_xAmzCredential;
        this.DescribeTaskDefinition_xAmzCredentialType = config.DescribeTaskDefinition_xAmzCredentialType || 'str';
        this.DescribeTaskDefinition_xAmzSecurityToken = config.DescribeTaskDefinition_xAmzSecurityToken;
        this.DescribeTaskDefinition_xAmzSecurityTokenType = config.DescribeTaskDefinition_xAmzSecurityTokenType || 'str';
        this.DescribeTaskDefinition_xAmzSignature = config.DescribeTaskDefinition_xAmzSignature;
        this.DescribeTaskDefinition_xAmzSignatureType = config.DescribeTaskDefinition_xAmzSignatureType || 'str';
        this.DescribeTaskDefinition_xAmzSignedHeaders = config.DescribeTaskDefinition_xAmzSignedHeaders;
        this.DescribeTaskDefinition_xAmzSignedHeadersType = config.DescribeTaskDefinition_xAmzSignedHeadersType || 'str';
        this.DescribeTaskSets_body = config.DescribeTaskSets_body;
        this.DescribeTaskSets_bodyType = config.DescribeTaskSets_bodyType || 'str';
        this.DescribeTaskSets_xAmzTarget = config.DescribeTaskSets_xAmzTarget;
        this.DescribeTaskSets_xAmzTargetType = config.DescribeTaskSets_xAmzTargetType || 'str';
        this.DescribeTaskSets_xAmzContentSha256 = config.DescribeTaskSets_xAmzContentSha256;
        this.DescribeTaskSets_xAmzContentSha256Type = config.DescribeTaskSets_xAmzContentSha256Type || 'str';
        this.DescribeTaskSets_xAmzDate = config.DescribeTaskSets_xAmzDate;
        this.DescribeTaskSets_xAmzDateType = config.DescribeTaskSets_xAmzDateType || 'str';
        this.DescribeTaskSets_xAmzAlgorithm = config.DescribeTaskSets_xAmzAlgorithm;
        this.DescribeTaskSets_xAmzAlgorithmType = config.DescribeTaskSets_xAmzAlgorithmType || 'str';
        this.DescribeTaskSets_xAmzCredential = config.DescribeTaskSets_xAmzCredential;
        this.DescribeTaskSets_xAmzCredentialType = config.DescribeTaskSets_xAmzCredentialType || 'str';
        this.DescribeTaskSets_xAmzSecurityToken = config.DescribeTaskSets_xAmzSecurityToken;
        this.DescribeTaskSets_xAmzSecurityTokenType = config.DescribeTaskSets_xAmzSecurityTokenType || 'str';
        this.DescribeTaskSets_xAmzSignature = config.DescribeTaskSets_xAmzSignature;
        this.DescribeTaskSets_xAmzSignatureType = config.DescribeTaskSets_xAmzSignatureType || 'str';
        this.DescribeTaskSets_xAmzSignedHeaders = config.DescribeTaskSets_xAmzSignedHeaders;
        this.DescribeTaskSets_xAmzSignedHeadersType = config.DescribeTaskSets_xAmzSignedHeadersType || 'str';
        this.DescribeTasks_body = config.DescribeTasks_body;
        this.DescribeTasks_bodyType = config.DescribeTasks_bodyType || 'str';
        this.DescribeTasks_xAmzTarget = config.DescribeTasks_xAmzTarget;
        this.DescribeTasks_xAmzTargetType = config.DescribeTasks_xAmzTargetType || 'str';
        this.DescribeTasks_xAmzContentSha256 = config.DescribeTasks_xAmzContentSha256;
        this.DescribeTasks_xAmzContentSha256Type = config.DescribeTasks_xAmzContentSha256Type || 'str';
        this.DescribeTasks_xAmzDate = config.DescribeTasks_xAmzDate;
        this.DescribeTasks_xAmzDateType = config.DescribeTasks_xAmzDateType || 'str';
        this.DescribeTasks_xAmzAlgorithm = config.DescribeTasks_xAmzAlgorithm;
        this.DescribeTasks_xAmzAlgorithmType = config.DescribeTasks_xAmzAlgorithmType || 'str';
        this.DescribeTasks_xAmzCredential = config.DescribeTasks_xAmzCredential;
        this.DescribeTasks_xAmzCredentialType = config.DescribeTasks_xAmzCredentialType || 'str';
        this.DescribeTasks_xAmzSecurityToken = config.DescribeTasks_xAmzSecurityToken;
        this.DescribeTasks_xAmzSecurityTokenType = config.DescribeTasks_xAmzSecurityTokenType || 'str';
        this.DescribeTasks_xAmzSignature = config.DescribeTasks_xAmzSignature;
        this.DescribeTasks_xAmzSignatureType = config.DescribeTasks_xAmzSignatureType || 'str';
        this.DescribeTasks_xAmzSignedHeaders = config.DescribeTasks_xAmzSignedHeaders;
        this.DescribeTasks_xAmzSignedHeadersType = config.DescribeTasks_xAmzSignedHeadersType || 'str';
        this.DiscoverPollEndpoint_body = config.DiscoverPollEndpoint_body;
        this.DiscoverPollEndpoint_bodyType = config.DiscoverPollEndpoint_bodyType || 'str';
        this.DiscoverPollEndpoint_xAmzTarget = config.DiscoverPollEndpoint_xAmzTarget;
        this.DiscoverPollEndpoint_xAmzTargetType = config.DiscoverPollEndpoint_xAmzTargetType || 'str';
        this.DiscoverPollEndpoint_xAmzContentSha256 = config.DiscoverPollEndpoint_xAmzContentSha256;
        this.DiscoverPollEndpoint_xAmzContentSha256Type = config.DiscoverPollEndpoint_xAmzContentSha256Type || 'str';
        this.DiscoverPollEndpoint_xAmzDate = config.DiscoverPollEndpoint_xAmzDate;
        this.DiscoverPollEndpoint_xAmzDateType = config.DiscoverPollEndpoint_xAmzDateType || 'str';
        this.DiscoverPollEndpoint_xAmzAlgorithm = config.DiscoverPollEndpoint_xAmzAlgorithm;
        this.DiscoverPollEndpoint_xAmzAlgorithmType = config.DiscoverPollEndpoint_xAmzAlgorithmType || 'str';
        this.DiscoverPollEndpoint_xAmzCredential = config.DiscoverPollEndpoint_xAmzCredential;
        this.DiscoverPollEndpoint_xAmzCredentialType = config.DiscoverPollEndpoint_xAmzCredentialType || 'str';
        this.DiscoverPollEndpoint_xAmzSecurityToken = config.DiscoverPollEndpoint_xAmzSecurityToken;
        this.DiscoverPollEndpoint_xAmzSecurityTokenType = config.DiscoverPollEndpoint_xAmzSecurityTokenType || 'str';
        this.DiscoverPollEndpoint_xAmzSignature = config.DiscoverPollEndpoint_xAmzSignature;
        this.DiscoverPollEndpoint_xAmzSignatureType = config.DiscoverPollEndpoint_xAmzSignatureType || 'str';
        this.DiscoverPollEndpoint_xAmzSignedHeaders = config.DiscoverPollEndpoint_xAmzSignedHeaders;
        this.DiscoverPollEndpoint_xAmzSignedHeadersType = config.DiscoverPollEndpoint_xAmzSignedHeadersType || 'str';
        this.ListAccountSettings_body = config.ListAccountSettings_body;
        this.ListAccountSettings_bodyType = config.ListAccountSettings_bodyType || 'str';
        this.ListAccountSettings_xAmzTarget = config.ListAccountSettings_xAmzTarget;
        this.ListAccountSettings_xAmzTargetType = config.ListAccountSettings_xAmzTargetType || 'str';
        this.ListAccountSettings_xAmzContentSha256 = config.ListAccountSettings_xAmzContentSha256;
        this.ListAccountSettings_xAmzContentSha256Type = config.ListAccountSettings_xAmzContentSha256Type || 'str';
        this.ListAccountSettings_xAmzDate = config.ListAccountSettings_xAmzDate;
        this.ListAccountSettings_xAmzDateType = config.ListAccountSettings_xAmzDateType || 'str';
        this.ListAccountSettings_xAmzAlgorithm = config.ListAccountSettings_xAmzAlgorithm;
        this.ListAccountSettings_xAmzAlgorithmType = config.ListAccountSettings_xAmzAlgorithmType || 'str';
        this.ListAccountSettings_xAmzCredential = config.ListAccountSettings_xAmzCredential;
        this.ListAccountSettings_xAmzCredentialType = config.ListAccountSettings_xAmzCredentialType || 'str';
        this.ListAccountSettings_xAmzSecurityToken = config.ListAccountSettings_xAmzSecurityToken;
        this.ListAccountSettings_xAmzSecurityTokenType = config.ListAccountSettings_xAmzSecurityTokenType || 'str';
        this.ListAccountSettings_xAmzSignature = config.ListAccountSettings_xAmzSignature;
        this.ListAccountSettings_xAmzSignatureType = config.ListAccountSettings_xAmzSignatureType || 'str';
        this.ListAccountSettings_xAmzSignedHeaders = config.ListAccountSettings_xAmzSignedHeaders;
        this.ListAccountSettings_xAmzSignedHeadersType = config.ListAccountSettings_xAmzSignedHeadersType || 'str';
        this.ListAttributes_body = config.ListAttributes_body;
        this.ListAttributes_bodyType = config.ListAttributes_bodyType || 'str';
        this.ListAttributes_xAmzTarget = config.ListAttributes_xAmzTarget;
        this.ListAttributes_xAmzTargetType = config.ListAttributes_xAmzTargetType || 'str';
        this.ListAttributes_xAmzContentSha256 = config.ListAttributes_xAmzContentSha256;
        this.ListAttributes_xAmzContentSha256Type = config.ListAttributes_xAmzContentSha256Type || 'str';
        this.ListAttributes_xAmzDate = config.ListAttributes_xAmzDate;
        this.ListAttributes_xAmzDateType = config.ListAttributes_xAmzDateType || 'str';
        this.ListAttributes_xAmzAlgorithm = config.ListAttributes_xAmzAlgorithm;
        this.ListAttributes_xAmzAlgorithmType = config.ListAttributes_xAmzAlgorithmType || 'str';
        this.ListAttributes_xAmzCredential = config.ListAttributes_xAmzCredential;
        this.ListAttributes_xAmzCredentialType = config.ListAttributes_xAmzCredentialType || 'str';
        this.ListAttributes_xAmzSecurityToken = config.ListAttributes_xAmzSecurityToken;
        this.ListAttributes_xAmzSecurityTokenType = config.ListAttributes_xAmzSecurityTokenType || 'str';
        this.ListAttributes_xAmzSignature = config.ListAttributes_xAmzSignature;
        this.ListAttributes_xAmzSignatureType = config.ListAttributes_xAmzSignatureType || 'str';
        this.ListAttributes_xAmzSignedHeaders = config.ListAttributes_xAmzSignedHeaders;
        this.ListAttributes_xAmzSignedHeadersType = config.ListAttributes_xAmzSignedHeadersType || 'str';
        this.ListClusters_body = config.ListClusters_body;
        this.ListClusters_bodyType = config.ListClusters_bodyType || 'str';
        this.ListClusters_maxResults = config.ListClusters_maxResults;
        this.ListClusters_maxResultsType = config.ListClusters_maxResultsType || 'str';
        this.ListClusters_nextToken = config.ListClusters_nextToken;
        this.ListClusters_nextTokenType = config.ListClusters_nextTokenType || 'str';
        this.ListClusters_xAmzTarget = config.ListClusters_xAmzTarget;
        this.ListClusters_xAmzTargetType = config.ListClusters_xAmzTargetType || 'str';
        this.ListClusters_xAmzContentSha256 = config.ListClusters_xAmzContentSha256;
        this.ListClusters_xAmzContentSha256Type = config.ListClusters_xAmzContentSha256Type || 'str';
        this.ListClusters_xAmzDate = config.ListClusters_xAmzDate;
        this.ListClusters_xAmzDateType = config.ListClusters_xAmzDateType || 'str';
        this.ListClusters_xAmzAlgorithm = config.ListClusters_xAmzAlgorithm;
        this.ListClusters_xAmzAlgorithmType = config.ListClusters_xAmzAlgorithmType || 'str';
        this.ListClusters_xAmzCredential = config.ListClusters_xAmzCredential;
        this.ListClusters_xAmzCredentialType = config.ListClusters_xAmzCredentialType || 'str';
        this.ListClusters_xAmzSecurityToken = config.ListClusters_xAmzSecurityToken;
        this.ListClusters_xAmzSecurityTokenType = config.ListClusters_xAmzSecurityTokenType || 'str';
        this.ListClusters_xAmzSignature = config.ListClusters_xAmzSignature;
        this.ListClusters_xAmzSignatureType = config.ListClusters_xAmzSignatureType || 'str';
        this.ListClusters_xAmzSignedHeaders = config.ListClusters_xAmzSignedHeaders;
        this.ListClusters_xAmzSignedHeadersType = config.ListClusters_xAmzSignedHeadersType || 'str';
        this.ListContainerInstances_body = config.ListContainerInstances_body;
        this.ListContainerInstances_bodyType = config.ListContainerInstances_bodyType || 'str';
        this.ListContainerInstances_maxResults = config.ListContainerInstances_maxResults;
        this.ListContainerInstances_maxResultsType = config.ListContainerInstances_maxResultsType || 'str';
        this.ListContainerInstances_nextToken = config.ListContainerInstances_nextToken;
        this.ListContainerInstances_nextTokenType = config.ListContainerInstances_nextTokenType || 'str';
        this.ListContainerInstances_xAmzTarget = config.ListContainerInstances_xAmzTarget;
        this.ListContainerInstances_xAmzTargetType = config.ListContainerInstances_xAmzTargetType || 'str';
        this.ListContainerInstances_xAmzContentSha256 = config.ListContainerInstances_xAmzContentSha256;
        this.ListContainerInstances_xAmzContentSha256Type = config.ListContainerInstances_xAmzContentSha256Type || 'str';
        this.ListContainerInstances_xAmzDate = config.ListContainerInstances_xAmzDate;
        this.ListContainerInstances_xAmzDateType = config.ListContainerInstances_xAmzDateType || 'str';
        this.ListContainerInstances_xAmzAlgorithm = config.ListContainerInstances_xAmzAlgorithm;
        this.ListContainerInstances_xAmzAlgorithmType = config.ListContainerInstances_xAmzAlgorithmType || 'str';
        this.ListContainerInstances_xAmzCredential = config.ListContainerInstances_xAmzCredential;
        this.ListContainerInstances_xAmzCredentialType = config.ListContainerInstances_xAmzCredentialType || 'str';
        this.ListContainerInstances_xAmzSecurityToken = config.ListContainerInstances_xAmzSecurityToken;
        this.ListContainerInstances_xAmzSecurityTokenType = config.ListContainerInstances_xAmzSecurityTokenType || 'str';
        this.ListContainerInstances_xAmzSignature = config.ListContainerInstances_xAmzSignature;
        this.ListContainerInstances_xAmzSignatureType = config.ListContainerInstances_xAmzSignatureType || 'str';
        this.ListContainerInstances_xAmzSignedHeaders = config.ListContainerInstances_xAmzSignedHeaders;
        this.ListContainerInstances_xAmzSignedHeadersType = config.ListContainerInstances_xAmzSignedHeadersType || 'str';
        this.ListServices_body = config.ListServices_body;
        this.ListServices_bodyType = config.ListServices_bodyType || 'str';
        this.ListServices_maxResults = config.ListServices_maxResults;
        this.ListServices_maxResultsType = config.ListServices_maxResultsType || 'str';
        this.ListServices_nextToken = config.ListServices_nextToken;
        this.ListServices_nextTokenType = config.ListServices_nextTokenType || 'str';
        this.ListServices_xAmzTarget = config.ListServices_xAmzTarget;
        this.ListServices_xAmzTargetType = config.ListServices_xAmzTargetType || 'str';
        this.ListServices_xAmzContentSha256 = config.ListServices_xAmzContentSha256;
        this.ListServices_xAmzContentSha256Type = config.ListServices_xAmzContentSha256Type || 'str';
        this.ListServices_xAmzDate = config.ListServices_xAmzDate;
        this.ListServices_xAmzDateType = config.ListServices_xAmzDateType || 'str';
        this.ListServices_xAmzAlgorithm = config.ListServices_xAmzAlgorithm;
        this.ListServices_xAmzAlgorithmType = config.ListServices_xAmzAlgorithmType || 'str';
        this.ListServices_xAmzCredential = config.ListServices_xAmzCredential;
        this.ListServices_xAmzCredentialType = config.ListServices_xAmzCredentialType || 'str';
        this.ListServices_xAmzSecurityToken = config.ListServices_xAmzSecurityToken;
        this.ListServices_xAmzSecurityTokenType = config.ListServices_xAmzSecurityTokenType || 'str';
        this.ListServices_xAmzSignature = config.ListServices_xAmzSignature;
        this.ListServices_xAmzSignatureType = config.ListServices_xAmzSignatureType || 'str';
        this.ListServices_xAmzSignedHeaders = config.ListServices_xAmzSignedHeaders;
        this.ListServices_xAmzSignedHeadersType = config.ListServices_xAmzSignedHeadersType || 'str';
        this.ListTagsForResource_body = config.ListTagsForResource_body;
        this.ListTagsForResource_bodyType = config.ListTagsForResource_bodyType || 'str';
        this.ListTagsForResource_xAmzTarget = config.ListTagsForResource_xAmzTarget;
        this.ListTagsForResource_xAmzTargetType = config.ListTagsForResource_xAmzTargetType || 'str';
        this.ListTagsForResource_xAmzContentSha256 = config.ListTagsForResource_xAmzContentSha256;
        this.ListTagsForResource_xAmzContentSha256Type = config.ListTagsForResource_xAmzContentSha256Type || 'str';
        this.ListTagsForResource_xAmzDate = config.ListTagsForResource_xAmzDate;
        this.ListTagsForResource_xAmzDateType = config.ListTagsForResource_xAmzDateType || 'str';
        this.ListTagsForResource_xAmzAlgorithm = config.ListTagsForResource_xAmzAlgorithm;
        this.ListTagsForResource_xAmzAlgorithmType = config.ListTagsForResource_xAmzAlgorithmType || 'str';
        this.ListTagsForResource_xAmzCredential = config.ListTagsForResource_xAmzCredential;
        this.ListTagsForResource_xAmzCredentialType = config.ListTagsForResource_xAmzCredentialType || 'str';
        this.ListTagsForResource_xAmzSecurityToken = config.ListTagsForResource_xAmzSecurityToken;
        this.ListTagsForResource_xAmzSecurityTokenType = config.ListTagsForResource_xAmzSecurityTokenType || 'str';
        this.ListTagsForResource_xAmzSignature = config.ListTagsForResource_xAmzSignature;
        this.ListTagsForResource_xAmzSignatureType = config.ListTagsForResource_xAmzSignatureType || 'str';
        this.ListTagsForResource_xAmzSignedHeaders = config.ListTagsForResource_xAmzSignedHeaders;
        this.ListTagsForResource_xAmzSignedHeadersType = config.ListTagsForResource_xAmzSignedHeadersType || 'str';
        this.ListTaskDefinitionFamilies_body = config.ListTaskDefinitionFamilies_body;
        this.ListTaskDefinitionFamilies_bodyType = config.ListTaskDefinitionFamilies_bodyType || 'str';
        this.ListTaskDefinitionFamilies_maxResults = config.ListTaskDefinitionFamilies_maxResults;
        this.ListTaskDefinitionFamilies_maxResultsType = config.ListTaskDefinitionFamilies_maxResultsType || 'str';
        this.ListTaskDefinitionFamilies_nextToken = config.ListTaskDefinitionFamilies_nextToken;
        this.ListTaskDefinitionFamilies_nextTokenType = config.ListTaskDefinitionFamilies_nextTokenType || 'str';
        this.ListTaskDefinitionFamilies_xAmzTarget = config.ListTaskDefinitionFamilies_xAmzTarget;
        this.ListTaskDefinitionFamilies_xAmzTargetType = config.ListTaskDefinitionFamilies_xAmzTargetType || 'str';
        this.ListTaskDefinitionFamilies_xAmzContentSha256 = config.ListTaskDefinitionFamilies_xAmzContentSha256;
        this.ListTaskDefinitionFamilies_xAmzContentSha256Type = config.ListTaskDefinitionFamilies_xAmzContentSha256Type || 'str';
        this.ListTaskDefinitionFamilies_xAmzDate = config.ListTaskDefinitionFamilies_xAmzDate;
        this.ListTaskDefinitionFamilies_xAmzDateType = config.ListTaskDefinitionFamilies_xAmzDateType || 'str';
        this.ListTaskDefinitionFamilies_xAmzAlgorithm = config.ListTaskDefinitionFamilies_xAmzAlgorithm;
        this.ListTaskDefinitionFamilies_xAmzAlgorithmType = config.ListTaskDefinitionFamilies_xAmzAlgorithmType || 'str';
        this.ListTaskDefinitionFamilies_xAmzCredential = config.ListTaskDefinitionFamilies_xAmzCredential;
        this.ListTaskDefinitionFamilies_xAmzCredentialType = config.ListTaskDefinitionFamilies_xAmzCredentialType || 'str';
        this.ListTaskDefinitionFamilies_xAmzSecurityToken = config.ListTaskDefinitionFamilies_xAmzSecurityToken;
        this.ListTaskDefinitionFamilies_xAmzSecurityTokenType = config.ListTaskDefinitionFamilies_xAmzSecurityTokenType || 'str';
        this.ListTaskDefinitionFamilies_xAmzSignature = config.ListTaskDefinitionFamilies_xAmzSignature;
        this.ListTaskDefinitionFamilies_xAmzSignatureType = config.ListTaskDefinitionFamilies_xAmzSignatureType || 'str';
        this.ListTaskDefinitionFamilies_xAmzSignedHeaders = config.ListTaskDefinitionFamilies_xAmzSignedHeaders;
        this.ListTaskDefinitionFamilies_xAmzSignedHeadersType = config.ListTaskDefinitionFamilies_xAmzSignedHeadersType || 'str';
        this.ListTaskDefinitions_body = config.ListTaskDefinitions_body;
        this.ListTaskDefinitions_bodyType = config.ListTaskDefinitions_bodyType || 'str';
        this.ListTaskDefinitions_maxResults = config.ListTaskDefinitions_maxResults;
        this.ListTaskDefinitions_maxResultsType = config.ListTaskDefinitions_maxResultsType || 'str';
        this.ListTaskDefinitions_nextToken = config.ListTaskDefinitions_nextToken;
        this.ListTaskDefinitions_nextTokenType = config.ListTaskDefinitions_nextTokenType || 'str';
        this.ListTaskDefinitions_xAmzTarget = config.ListTaskDefinitions_xAmzTarget;
        this.ListTaskDefinitions_xAmzTargetType = config.ListTaskDefinitions_xAmzTargetType || 'str';
        this.ListTaskDefinitions_xAmzContentSha256 = config.ListTaskDefinitions_xAmzContentSha256;
        this.ListTaskDefinitions_xAmzContentSha256Type = config.ListTaskDefinitions_xAmzContentSha256Type || 'str';
        this.ListTaskDefinitions_xAmzDate = config.ListTaskDefinitions_xAmzDate;
        this.ListTaskDefinitions_xAmzDateType = config.ListTaskDefinitions_xAmzDateType || 'str';
        this.ListTaskDefinitions_xAmzAlgorithm = config.ListTaskDefinitions_xAmzAlgorithm;
        this.ListTaskDefinitions_xAmzAlgorithmType = config.ListTaskDefinitions_xAmzAlgorithmType || 'str';
        this.ListTaskDefinitions_xAmzCredential = config.ListTaskDefinitions_xAmzCredential;
        this.ListTaskDefinitions_xAmzCredentialType = config.ListTaskDefinitions_xAmzCredentialType || 'str';
        this.ListTaskDefinitions_xAmzSecurityToken = config.ListTaskDefinitions_xAmzSecurityToken;
        this.ListTaskDefinitions_xAmzSecurityTokenType = config.ListTaskDefinitions_xAmzSecurityTokenType || 'str';
        this.ListTaskDefinitions_xAmzSignature = config.ListTaskDefinitions_xAmzSignature;
        this.ListTaskDefinitions_xAmzSignatureType = config.ListTaskDefinitions_xAmzSignatureType || 'str';
        this.ListTaskDefinitions_xAmzSignedHeaders = config.ListTaskDefinitions_xAmzSignedHeaders;
        this.ListTaskDefinitions_xAmzSignedHeadersType = config.ListTaskDefinitions_xAmzSignedHeadersType || 'str';
        this.ListTasks_body = config.ListTasks_body;
        this.ListTasks_bodyType = config.ListTasks_bodyType || 'str';
        this.ListTasks_maxResults = config.ListTasks_maxResults;
        this.ListTasks_maxResultsType = config.ListTasks_maxResultsType || 'str';
        this.ListTasks_nextToken = config.ListTasks_nextToken;
        this.ListTasks_nextTokenType = config.ListTasks_nextTokenType || 'str';
        this.ListTasks_xAmzTarget = config.ListTasks_xAmzTarget;
        this.ListTasks_xAmzTargetType = config.ListTasks_xAmzTargetType || 'str';
        this.ListTasks_xAmzContentSha256 = config.ListTasks_xAmzContentSha256;
        this.ListTasks_xAmzContentSha256Type = config.ListTasks_xAmzContentSha256Type || 'str';
        this.ListTasks_xAmzDate = config.ListTasks_xAmzDate;
        this.ListTasks_xAmzDateType = config.ListTasks_xAmzDateType || 'str';
        this.ListTasks_xAmzAlgorithm = config.ListTasks_xAmzAlgorithm;
        this.ListTasks_xAmzAlgorithmType = config.ListTasks_xAmzAlgorithmType || 'str';
        this.ListTasks_xAmzCredential = config.ListTasks_xAmzCredential;
        this.ListTasks_xAmzCredentialType = config.ListTasks_xAmzCredentialType || 'str';
        this.ListTasks_xAmzSecurityToken = config.ListTasks_xAmzSecurityToken;
        this.ListTasks_xAmzSecurityTokenType = config.ListTasks_xAmzSecurityTokenType || 'str';
        this.ListTasks_xAmzSignature = config.ListTasks_xAmzSignature;
        this.ListTasks_xAmzSignatureType = config.ListTasks_xAmzSignatureType || 'str';
        this.ListTasks_xAmzSignedHeaders = config.ListTasks_xAmzSignedHeaders;
        this.ListTasks_xAmzSignedHeadersType = config.ListTasks_xAmzSignedHeadersType || 'str';
        this.PutAccountSetting_body = config.PutAccountSetting_body;
        this.PutAccountSetting_bodyType = config.PutAccountSetting_bodyType || 'str';
        this.PutAccountSetting_xAmzTarget = config.PutAccountSetting_xAmzTarget;
        this.PutAccountSetting_xAmzTargetType = config.PutAccountSetting_xAmzTargetType || 'str';
        this.PutAccountSetting_xAmzContentSha256 = config.PutAccountSetting_xAmzContentSha256;
        this.PutAccountSetting_xAmzContentSha256Type = config.PutAccountSetting_xAmzContentSha256Type || 'str';
        this.PutAccountSetting_xAmzDate = config.PutAccountSetting_xAmzDate;
        this.PutAccountSetting_xAmzDateType = config.PutAccountSetting_xAmzDateType || 'str';
        this.PutAccountSetting_xAmzAlgorithm = config.PutAccountSetting_xAmzAlgorithm;
        this.PutAccountSetting_xAmzAlgorithmType = config.PutAccountSetting_xAmzAlgorithmType || 'str';
        this.PutAccountSetting_xAmzCredential = config.PutAccountSetting_xAmzCredential;
        this.PutAccountSetting_xAmzCredentialType = config.PutAccountSetting_xAmzCredentialType || 'str';
        this.PutAccountSetting_xAmzSecurityToken = config.PutAccountSetting_xAmzSecurityToken;
        this.PutAccountSetting_xAmzSecurityTokenType = config.PutAccountSetting_xAmzSecurityTokenType || 'str';
        this.PutAccountSetting_xAmzSignature = config.PutAccountSetting_xAmzSignature;
        this.PutAccountSetting_xAmzSignatureType = config.PutAccountSetting_xAmzSignatureType || 'str';
        this.PutAccountSetting_xAmzSignedHeaders = config.PutAccountSetting_xAmzSignedHeaders;
        this.PutAccountSetting_xAmzSignedHeadersType = config.PutAccountSetting_xAmzSignedHeadersType || 'str';
        this.PutAccountSettingDefault_body = config.PutAccountSettingDefault_body;
        this.PutAccountSettingDefault_bodyType = config.PutAccountSettingDefault_bodyType || 'str';
        this.PutAccountSettingDefault_xAmzTarget = config.PutAccountSettingDefault_xAmzTarget;
        this.PutAccountSettingDefault_xAmzTargetType = config.PutAccountSettingDefault_xAmzTargetType || 'str';
        this.PutAccountSettingDefault_xAmzContentSha256 = config.PutAccountSettingDefault_xAmzContentSha256;
        this.PutAccountSettingDefault_xAmzContentSha256Type = config.PutAccountSettingDefault_xAmzContentSha256Type || 'str';
        this.PutAccountSettingDefault_xAmzDate = config.PutAccountSettingDefault_xAmzDate;
        this.PutAccountSettingDefault_xAmzDateType = config.PutAccountSettingDefault_xAmzDateType || 'str';
        this.PutAccountSettingDefault_xAmzAlgorithm = config.PutAccountSettingDefault_xAmzAlgorithm;
        this.PutAccountSettingDefault_xAmzAlgorithmType = config.PutAccountSettingDefault_xAmzAlgorithmType || 'str';
        this.PutAccountSettingDefault_xAmzCredential = config.PutAccountSettingDefault_xAmzCredential;
        this.PutAccountSettingDefault_xAmzCredentialType = config.PutAccountSettingDefault_xAmzCredentialType || 'str';
        this.PutAccountSettingDefault_xAmzSecurityToken = config.PutAccountSettingDefault_xAmzSecurityToken;
        this.PutAccountSettingDefault_xAmzSecurityTokenType = config.PutAccountSettingDefault_xAmzSecurityTokenType || 'str';
        this.PutAccountSettingDefault_xAmzSignature = config.PutAccountSettingDefault_xAmzSignature;
        this.PutAccountSettingDefault_xAmzSignatureType = config.PutAccountSettingDefault_xAmzSignatureType || 'str';
        this.PutAccountSettingDefault_xAmzSignedHeaders = config.PutAccountSettingDefault_xAmzSignedHeaders;
        this.PutAccountSettingDefault_xAmzSignedHeadersType = config.PutAccountSettingDefault_xAmzSignedHeadersType || 'str';
        this.PutAttributes_body = config.PutAttributes_body;
        this.PutAttributes_bodyType = config.PutAttributes_bodyType || 'str';
        this.PutAttributes_xAmzTarget = config.PutAttributes_xAmzTarget;
        this.PutAttributes_xAmzTargetType = config.PutAttributes_xAmzTargetType || 'str';
        this.PutAttributes_xAmzContentSha256 = config.PutAttributes_xAmzContentSha256;
        this.PutAttributes_xAmzContentSha256Type = config.PutAttributes_xAmzContentSha256Type || 'str';
        this.PutAttributes_xAmzDate = config.PutAttributes_xAmzDate;
        this.PutAttributes_xAmzDateType = config.PutAttributes_xAmzDateType || 'str';
        this.PutAttributes_xAmzAlgorithm = config.PutAttributes_xAmzAlgorithm;
        this.PutAttributes_xAmzAlgorithmType = config.PutAttributes_xAmzAlgorithmType || 'str';
        this.PutAttributes_xAmzCredential = config.PutAttributes_xAmzCredential;
        this.PutAttributes_xAmzCredentialType = config.PutAttributes_xAmzCredentialType || 'str';
        this.PutAttributes_xAmzSecurityToken = config.PutAttributes_xAmzSecurityToken;
        this.PutAttributes_xAmzSecurityTokenType = config.PutAttributes_xAmzSecurityTokenType || 'str';
        this.PutAttributes_xAmzSignature = config.PutAttributes_xAmzSignature;
        this.PutAttributes_xAmzSignatureType = config.PutAttributes_xAmzSignatureType || 'str';
        this.PutAttributes_xAmzSignedHeaders = config.PutAttributes_xAmzSignedHeaders;
        this.PutAttributes_xAmzSignedHeadersType = config.PutAttributes_xAmzSignedHeadersType || 'str';
        this.RegisterContainerInstance_body = config.RegisterContainerInstance_body;
        this.RegisterContainerInstance_bodyType = config.RegisterContainerInstance_bodyType || 'str';
        this.RegisterContainerInstance_xAmzTarget = config.RegisterContainerInstance_xAmzTarget;
        this.RegisterContainerInstance_xAmzTargetType = config.RegisterContainerInstance_xAmzTargetType || 'str';
        this.RegisterContainerInstance_xAmzContentSha256 = config.RegisterContainerInstance_xAmzContentSha256;
        this.RegisterContainerInstance_xAmzContentSha256Type = config.RegisterContainerInstance_xAmzContentSha256Type || 'str';
        this.RegisterContainerInstance_xAmzDate = config.RegisterContainerInstance_xAmzDate;
        this.RegisterContainerInstance_xAmzDateType = config.RegisterContainerInstance_xAmzDateType || 'str';
        this.RegisterContainerInstance_xAmzAlgorithm = config.RegisterContainerInstance_xAmzAlgorithm;
        this.RegisterContainerInstance_xAmzAlgorithmType = config.RegisterContainerInstance_xAmzAlgorithmType || 'str';
        this.RegisterContainerInstance_xAmzCredential = config.RegisterContainerInstance_xAmzCredential;
        this.RegisterContainerInstance_xAmzCredentialType = config.RegisterContainerInstance_xAmzCredentialType || 'str';
        this.RegisterContainerInstance_xAmzSecurityToken = config.RegisterContainerInstance_xAmzSecurityToken;
        this.RegisterContainerInstance_xAmzSecurityTokenType = config.RegisterContainerInstance_xAmzSecurityTokenType || 'str';
        this.RegisterContainerInstance_xAmzSignature = config.RegisterContainerInstance_xAmzSignature;
        this.RegisterContainerInstance_xAmzSignatureType = config.RegisterContainerInstance_xAmzSignatureType || 'str';
        this.RegisterContainerInstance_xAmzSignedHeaders = config.RegisterContainerInstance_xAmzSignedHeaders;
        this.RegisterContainerInstance_xAmzSignedHeadersType = config.RegisterContainerInstance_xAmzSignedHeadersType || 'str';
        this.RegisterTaskDefinition_body = config.RegisterTaskDefinition_body;
        this.RegisterTaskDefinition_bodyType = config.RegisterTaskDefinition_bodyType || 'str';
        this.RegisterTaskDefinition_xAmzTarget = config.RegisterTaskDefinition_xAmzTarget;
        this.RegisterTaskDefinition_xAmzTargetType = config.RegisterTaskDefinition_xAmzTargetType || 'str';
        this.RegisterTaskDefinition_xAmzContentSha256 = config.RegisterTaskDefinition_xAmzContentSha256;
        this.RegisterTaskDefinition_xAmzContentSha256Type = config.RegisterTaskDefinition_xAmzContentSha256Type || 'str';
        this.RegisterTaskDefinition_xAmzDate = config.RegisterTaskDefinition_xAmzDate;
        this.RegisterTaskDefinition_xAmzDateType = config.RegisterTaskDefinition_xAmzDateType || 'str';
        this.RegisterTaskDefinition_xAmzAlgorithm = config.RegisterTaskDefinition_xAmzAlgorithm;
        this.RegisterTaskDefinition_xAmzAlgorithmType = config.RegisterTaskDefinition_xAmzAlgorithmType || 'str';
        this.RegisterTaskDefinition_xAmzCredential = config.RegisterTaskDefinition_xAmzCredential;
        this.RegisterTaskDefinition_xAmzCredentialType = config.RegisterTaskDefinition_xAmzCredentialType || 'str';
        this.RegisterTaskDefinition_xAmzSecurityToken = config.RegisterTaskDefinition_xAmzSecurityToken;
        this.RegisterTaskDefinition_xAmzSecurityTokenType = config.RegisterTaskDefinition_xAmzSecurityTokenType || 'str';
        this.RegisterTaskDefinition_xAmzSignature = config.RegisterTaskDefinition_xAmzSignature;
        this.RegisterTaskDefinition_xAmzSignatureType = config.RegisterTaskDefinition_xAmzSignatureType || 'str';
        this.RegisterTaskDefinition_xAmzSignedHeaders = config.RegisterTaskDefinition_xAmzSignedHeaders;
        this.RegisterTaskDefinition_xAmzSignedHeadersType = config.RegisterTaskDefinition_xAmzSignedHeadersType || 'str';
        this.RunTask_body = config.RunTask_body;
        this.RunTask_bodyType = config.RunTask_bodyType || 'str';
        this.RunTask_xAmzTarget = config.RunTask_xAmzTarget;
        this.RunTask_xAmzTargetType = config.RunTask_xAmzTargetType || 'str';
        this.RunTask_xAmzContentSha256 = config.RunTask_xAmzContentSha256;
        this.RunTask_xAmzContentSha256Type = config.RunTask_xAmzContentSha256Type || 'str';
        this.RunTask_xAmzDate = config.RunTask_xAmzDate;
        this.RunTask_xAmzDateType = config.RunTask_xAmzDateType || 'str';
        this.RunTask_xAmzAlgorithm = config.RunTask_xAmzAlgorithm;
        this.RunTask_xAmzAlgorithmType = config.RunTask_xAmzAlgorithmType || 'str';
        this.RunTask_xAmzCredential = config.RunTask_xAmzCredential;
        this.RunTask_xAmzCredentialType = config.RunTask_xAmzCredentialType || 'str';
        this.RunTask_xAmzSecurityToken = config.RunTask_xAmzSecurityToken;
        this.RunTask_xAmzSecurityTokenType = config.RunTask_xAmzSecurityTokenType || 'str';
        this.RunTask_xAmzSignature = config.RunTask_xAmzSignature;
        this.RunTask_xAmzSignatureType = config.RunTask_xAmzSignatureType || 'str';
        this.RunTask_xAmzSignedHeaders = config.RunTask_xAmzSignedHeaders;
        this.RunTask_xAmzSignedHeadersType = config.RunTask_xAmzSignedHeadersType || 'str';
        this.StartTask_body = config.StartTask_body;
        this.StartTask_bodyType = config.StartTask_bodyType || 'str';
        this.StartTask_xAmzTarget = config.StartTask_xAmzTarget;
        this.StartTask_xAmzTargetType = config.StartTask_xAmzTargetType || 'str';
        this.StartTask_xAmzContentSha256 = config.StartTask_xAmzContentSha256;
        this.StartTask_xAmzContentSha256Type = config.StartTask_xAmzContentSha256Type || 'str';
        this.StartTask_xAmzDate = config.StartTask_xAmzDate;
        this.StartTask_xAmzDateType = config.StartTask_xAmzDateType || 'str';
        this.StartTask_xAmzAlgorithm = config.StartTask_xAmzAlgorithm;
        this.StartTask_xAmzAlgorithmType = config.StartTask_xAmzAlgorithmType || 'str';
        this.StartTask_xAmzCredential = config.StartTask_xAmzCredential;
        this.StartTask_xAmzCredentialType = config.StartTask_xAmzCredentialType || 'str';
        this.StartTask_xAmzSecurityToken = config.StartTask_xAmzSecurityToken;
        this.StartTask_xAmzSecurityTokenType = config.StartTask_xAmzSecurityTokenType || 'str';
        this.StartTask_xAmzSignature = config.StartTask_xAmzSignature;
        this.StartTask_xAmzSignatureType = config.StartTask_xAmzSignatureType || 'str';
        this.StartTask_xAmzSignedHeaders = config.StartTask_xAmzSignedHeaders;
        this.StartTask_xAmzSignedHeadersType = config.StartTask_xAmzSignedHeadersType || 'str';
        this.StopTask_body = config.StopTask_body;
        this.StopTask_bodyType = config.StopTask_bodyType || 'str';
        this.StopTask_xAmzTarget = config.StopTask_xAmzTarget;
        this.StopTask_xAmzTargetType = config.StopTask_xAmzTargetType || 'str';
        this.StopTask_xAmzContentSha256 = config.StopTask_xAmzContentSha256;
        this.StopTask_xAmzContentSha256Type = config.StopTask_xAmzContentSha256Type || 'str';
        this.StopTask_xAmzDate = config.StopTask_xAmzDate;
        this.StopTask_xAmzDateType = config.StopTask_xAmzDateType || 'str';
        this.StopTask_xAmzAlgorithm = config.StopTask_xAmzAlgorithm;
        this.StopTask_xAmzAlgorithmType = config.StopTask_xAmzAlgorithmType || 'str';
        this.StopTask_xAmzCredential = config.StopTask_xAmzCredential;
        this.StopTask_xAmzCredentialType = config.StopTask_xAmzCredentialType || 'str';
        this.StopTask_xAmzSecurityToken = config.StopTask_xAmzSecurityToken;
        this.StopTask_xAmzSecurityTokenType = config.StopTask_xAmzSecurityTokenType || 'str';
        this.StopTask_xAmzSignature = config.StopTask_xAmzSignature;
        this.StopTask_xAmzSignatureType = config.StopTask_xAmzSignatureType || 'str';
        this.StopTask_xAmzSignedHeaders = config.StopTask_xAmzSignedHeaders;
        this.StopTask_xAmzSignedHeadersType = config.StopTask_xAmzSignedHeadersType || 'str';
        this.SubmitAttachmentStateChanges_body = config.SubmitAttachmentStateChanges_body;
        this.SubmitAttachmentStateChanges_bodyType = config.SubmitAttachmentStateChanges_bodyType || 'str';
        this.SubmitAttachmentStateChanges_xAmzTarget = config.SubmitAttachmentStateChanges_xAmzTarget;
        this.SubmitAttachmentStateChanges_xAmzTargetType = config.SubmitAttachmentStateChanges_xAmzTargetType || 'str';
        this.SubmitAttachmentStateChanges_xAmzContentSha256 = config.SubmitAttachmentStateChanges_xAmzContentSha256;
        this.SubmitAttachmentStateChanges_xAmzContentSha256Type = config.SubmitAttachmentStateChanges_xAmzContentSha256Type || 'str';
        this.SubmitAttachmentStateChanges_xAmzDate = config.SubmitAttachmentStateChanges_xAmzDate;
        this.SubmitAttachmentStateChanges_xAmzDateType = config.SubmitAttachmentStateChanges_xAmzDateType || 'str';
        this.SubmitAttachmentStateChanges_xAmzAlgorithm = config.SubmitAttachmentStateChanges_xAmzAlgorithm;
        this.SubmitAttachmentStateChanges_xAmzAlgorithmType = config.SubmitAttachmentStateChanges_xAmzAlgorithmType || 'str';
        this.SubmitAttachmentStateChanges_xAmzCredential = config.SubmitAttachmentStateChanges_xAmzCredential;
        this.SubmitAttachmentStateChanges_xAmzCredentialType = config.SubmitAttachmentStateChanges_xAmzCredentialType || 'str';
        this.SubmitAttachmentStateChanges_xAmzSecurityToken = config.SubmitAttachmentStateChanges_xAmzSecurityToken;
        this.SubmitAttachmentStateChanges_xAmzSecurityTokenType = config.SubmitAttachmentStateChanges_xAmzSecurityTokenType || 'str';
        this.SubmitAttachmentStateChanges_xAmzSignature = config.SubmitAttachmentStateChanges_xAmzSignature;
        this.SubmitAttachmentStateChanges_xAmzSignatureType = config.SubmitAttachmentStateChanges_xAmzSignatureType || 'str';
        this.SubmitAttachmentStateChanges_xAmzSignedHeaders = config.SubmitAttachmentStateChanges_xAmzSignedHeaders;
        this.SubmitAttachmentStateChanges_xAmzSignedHeadersType = config.SubmitAttachmentStateChanges_xAmzSignedHeadersType || 'str';
        this.SubmitContainerStateChange_body = config.SubmitContainerStateChange_body;
        this.SubmitContainerStateChange_bodyType = config.SubmitContainerStateChange_bodyType || 'str';
        this.SubmitContainerStateChange_xAmzTarget = config.SubmitContainerStateChange_xAmzTarget;
        this.SubmitContainerStateChange_xAmzTargetType = config.SubmitContainerStateChange_xAmzTargetType || 'str';
        this.SubmitContainerStateChange_xAmzContentSha256 = config.SubmitContainerStateChange_xAmzContentSha256;
        this.SubmitContainerStateChange_xAmzContentSha256Type = config.SubmitContainerStateChange_xAmzContentSha256Type || 'str';
        this.SubmitContainerStateChange_xAmzDate = config.SubmitContainerStateChange_xAmzDate;
        this.SubmitContainerStateChange_xAmzDateType = config.SubmitContainerStateChange_xAmzDateType || 'str';
        this.SubmitContainerStateChange_xAmzAlgorithm = config.SubmitContainerStateChange_xAmzAlgorithm;
        this.SubmitContainerStateChange_xAmzAlgorithmType = config.SubmitContainerStateChange_xAmzAlgorithmType || 'str';
        this.SubmitContainerStateChange_xAmzCredential = config.SubmitContainerStateChange_xAmzCredential;
        this.SubmitContainerStateChange_xAmzCredentialType = config.SubmitContainerStateChange_xAmzCredentialType || 'str';
        this.SubmitContainerStateChange_xAmzSecurityToken = config.SubmitContainerStateChange_xAmzSecurityToken;
        this.SubmitContainerStateChange_xAmzSecurityTokenType = config.SubmitContainerStateChange_xAmzSecurityTokenType || 'str';
        this.SubmitContainerStateChange_xAmzSignature = config.SubmitContainerStateChange_xAmzSignature;
        this.SubmitContainerStateChange_xAmzSignatureType = config.SubmitContainerStateChange_xAmzSignatureType || 'str';
        this.SubmitContainerStateChange_xAmzSignedHeaders = config.SubmitContainerStateChange_xAmzSignedHeaders;
        this.SubmitContainerStateChange_xAmzSignedHeadersType = config.SubmitContainerStateChange_xAmzSignedHeadersType || 'str';
        this.SubmitTaskStateChange_body = config.SubmitTaskStateChange_body;
        this.SubmitTaskStateChange_bodyType = config.SubmitTaskStateChange_bodyType || 'str';
        this.SubmitTaskStateChange_xAmzTarget = config.SubmitTaskStateChange_xAmzTarget;
        this.SubmitTaskStateChange_xAmzTargetType = config.SubmitTaskStateChange_xAmzTargetType || 'str';
        this.SubmitTaskStateChange_xAmzContentSha256 = config.SubmitTaskStateChange_xAmzContentSha256;
        this.SubmitTaskStateChange_xAmzContentSha256Type = config.SubmitTaskStateChange_xAmzContentSha256Type || 'str';
        this.SubmitTaskStateChange_xAmzDate = config.SubmitTaskStateChange_xAmzDate;
        this.SubmitTaskStateChange_xAmzDateType = config.SubmitTaskStateChange_xAmzDateType || 'str';
        this.SubmitTaskStateChange_xAmzAlgorithm = config.SubmitTaskStateChange_xAmzAlgorithm;
        this.SubmitTaskStateChange_xAmzAlgorithmType = config.SubmitTaskStateChange_xAmzAlgorithmType || 'str';
        this.SubmitTaskStateChange_xAmzCredential = config.SubmitTaskStateChange_xAmzCredential;
        this.SubmitTaskStateChange_xAmzCredentialType = config.SubmitTaskStateChange_xAmzCredentialType || 'str';
        this.SubmitTaskStateChange_xAmzSecurityToken = config.SubmitTaskStateChange_xAmzSecurityToken;
        this.SubmitTaskStateChange_xAmzSecurityTokenType = config.SubmitTaskStateChange_xAmzSecurityTokenType || 'str';
        this.SubmitTaskStateChange_xAmzSignature = config.SubmitTaskStateChange_xAmzSignature;
        this.SubmitTaskStateChange_xAmzSignatureType = config.SubmitTaskStateChange_xAmzSignatureType || 'str';
        this.SubmitTaskStateChange_xAmzSignedHeaders = config.SubmitTaskStateChange_xAmzSignedHeaders;
        this.SubmitTaskStateChange_xAmzSignedHeadersType = config.SubmitTaskStateChange_xAmzSignedHeadersType || 'str';
        this.TagResource_body = config.TagResource_body;
        this.TagResource_bodyType = config.TagResource_bodyType || 'str';
        this.TagResource_xAmzTarget = config.TagResource_xAmzTarget;
        this.TagResource_xAmzTargetType = config.TagResource_xAmzTargetType || 'str';
        this.TagResource_xAmzContentSha256 = config.TagResource_xAmzContentSha256;
        this.TagResource_xAmzContentSha256Type = config.TagResource_xAmzContentSha256Type || 'str';
        this.TagResource_xAmzDate = config.TagResource_xAmzDate;
        this.TagResource_xAmzDateType = config.TagResource_xAmzDateType || 'str';
        this.TagResource_xAmzAlgorithm = config.TagResource_xAmzAlgorithm;
        this.TagResource_xAmzAlgorithmType = config.TagResource_xAmzAlgorithmType || 'str';
        this.TagResource_xAmzCredential = config.TagResource_xAmzCredential;
        this.TagResource_xAmzCredentialType = config.TagResource_xAmzCredentialType || 'str';
        this.TagResource_xAmzSecurityToken = config.TagResource_xAmzSecurityToken;
        this.TagResource_xAmzSecurityTokenType = config.TagResource_xAmzSecurityTokenType || 'str';
        this.TagResource_xAmzSignature = config.TagResource_xAmzSignature;
        this.TagResource_xAmzSignatureType = config.TagResource_xAmzSignatureType || 'str';
        this.TagResource_xAmzSignedHeaders = config.TagResource_xAmzSignedHeaders;
        this.TagResource_xAmzSignedHeadersType = config.TagResource_xAmzSignedHeadersType || 'str';
        this.UntagResource_body = config.UntagResource_body;
        this.UntagResource_bodyType = config.UntagResource_bodyType || 'str';
        this.UntagResource_xAmzTarget = config.UntagResource_xAmzTarget;
        this.UntagResource_xAmzTargetType = config.UntagResource_xAmzTargetType || 'str';
        this.UntagResource_xAmzContentSha256 = config.UntagResource_xAmzContentSha256;
        this.UntagResource_xAmzContentSha256Type = config.UntagResource_xAmzContentSha256Type || 'str';
        this.UntagResource_xAmzDate = config.UntagResource_xAmzDate;
        this.UntagResource_xAmzDateType = config.UntagResource_xAmzDateType || 'str';
        this.UntagResource_xAmzAlgorithm = config.UntagResource_xAmzAlgorithm;
        this.UntagResource_xAmzAlgorithmType = config.UntagResource_xAmzAlgorithmType || 'str';
        this.UntagResource_xAmzCredential = config.UntagResource_xAmzCredential;
        this.UntagResource_xAmzCredentialType = config.UntagResource_xAmzCredentialType || 'str';
        this.UntagResource_xAmzSecurityToken = config.UntagResource_xAmzSecurityToken;
        this.UntagResource_xAmzSecurityTokenType = config.UntagResource_xAmzSecurityTokenType || 'str';
        this.UntagResource_xAmzSignature = config.UntagResource_xAmzSignature;
        this.UntagResource_xAmzSignatureType = config.UntagResource_xAmzSignatureType || 'str';
        this.UntagResource_xAmzSignedHeaders = config.UntagResource_xAmzSignedHeaders;
        this.UntagResource_xAmzSignedHeadersType = config.UntagResource_xAmzSignedHeadersType || 'str';
        this.UpdateClusterSettings_body = config.UpdateClusterSettings_body;
        this.UpdateClusterSettings_bodyType = config.UpdateClusterSettings_bodyType || 'str';
        this.UpdateClusterSettings_xAmzTarget = config.UpdateClusterSettings_xAmzTarget;
        this.UpdateClusterSettings_xAmzTargetType = config.UpdateClusterSettings_xAmzTargetType || 'str';
        this.UpdateClusterSettings_xAmzContentSha256 = config.UpdateClusterSettings_xAmzContentSha256;
        this.UpdateClusterSettings_xAmzContentSha256Type = config.UpdateClusterSettings_xAmzContentSha256Type || 'str';
        this.UpdateClusterSettings_xAmzDate = config.UpdateClusterSettings_xAmzDate;
        this.UpdateClusterSettings_xAmzDateType = config.UpdateClusterSettings_xAmzDateType || 'str';
        this.UpdateClusterSettings_xAmzAlgorithm = config.UpdateClusterSettings_xAmzAlgorithm;
        this.UpdateClusterSettings_xAmzAlgorithmType = config.UpdateClusterSettings_xAmzAlgorithmType || 'str';
        this.UpdateClusterSettings_xAmzCredential = config.UpdateClusterSettings_xAmzCredential;
        this.UpdateClusterSettings_xAmzCredentialType = config.UpdateClusterSettings_xAmzCredentialType || 'str';
        this.UpdateClusterSettings_xAmzSecurityToken = config.UpdateClusterSettings_xAmzSecurityToken;
        this.UpdateClusterSettings_xAmzSecurityTokenType = config.UpdateClusterSettings_xAmzSecurityTokenType || 'str';
        this.UpdateClusterSettings_xAmzSignature = config.UpdateClusterSettings_xAmzSignature;
        this.UpdateClusterSettings_xAmzSignatureType = config.UpdateClusterSettings_xAmzSignatureType || 'str';
        this.UpdateClusterSettings_xAmzSignedHeaders = config.UpdateClusterSettings_xAmzSignedHeaders;
        this.UpdateClusterSettings_xAmzSignedHeadersType = config.UpdateClusterSettings_xAmzSignedHeadersType || 'str';
        this.UpdateContainerAgent_body = config.UpdateContainerAgent_body;
        this.UpdateContainerAgent_bodyType = config.UpdateContainerAgent_bodyType || 'str';
        this.UpdateContainerAgent_xAmzTarget = config.UpdateContainerAgent_xAmzTarget;
        this.UpdateContainerAgent_xAmzTargetType = config.UpdateContainerAgent_xAmzTargetType || 'str';
        this.UpdateContainerAgent_xAmzContentSha256 = config.UpdateContainerAgent_xAmzContentSha256;
        this.UpdateContainerAgent_xAmzContentSha256Type = config.UpdateContainerAgent_xAmzContentSha256Type || 'str';
        this.UpdateContainerAgent_xAmzDate = config.UpdateContainerAgent_xAmzDate;
        this.UpdateContainerAgent_xAmzDateType = config.UpdateContainerAgent_xAmzDateType || 'str';
        this.UpdateContainerAgent_xAmzAlgorithm = config.UpdateContainerAgent_xAmzAlgorithm;
        this.UpdateContainerAgent_xAmzAlgorithmType = config.UpdateContainerAgent_xAmzAlgorithmType || 'str';
        this.UpdateContainerAgent_xAmzCredential = config.UpdateContainerAgent_xAmzCredential;
        this.UpdateContainerAgent_xAmzCredentialType = config.UpdateContainerAgent_xAmzCredentialType || 'str';
        this.UpdateContainerAgent_xAmzSecurityToken = config.UpdateContainerAgent_xAmzSecurityToken;
        this.UpdateContainerAgent_xAmzSecurityTokenType = config.UpdateContainerAgent_xAmzSecurityTokenType || 'str';
        this.UpdateContainerAgent_xAmzSignature = config.UpdateContainerAgent_xAmzSignature;
        this.UpdateContainerAgent_xAmzSignatureType = config.UpdateContainerAgent_xAmzSignatureType || 'str';
        this.UpdateContainerAgent_xAmzSignedHeaders = config.UpdateContainerAgent_xAmzSignedHeaders;
        this.UpdateContainerAgent_xAmzSignedHeadersType = config.UpdateContainerAgent_xAmzSignedHeadersType || 'str';
        this.UpdateContainerInstancesState_body = config.UpdateContainerInstancesState_body;
        this.UpdateContainerInstancesState_bodyType = config.UpdateContainerInstancesState_bodyType || 'str';
        this.UpdateContainerInstancesState_xAmzTarget = config.UpdateContainerInstancesState_xAmzTarget;
        this.UpdateContainerInstancesState_xAmzTargetType = config.UpdateContainerInstancesState_xAmzTargetType || 'str';
        this.UpdateContainerInstancesState_xAmzContentSha256 = config.UpdateContainerInstancesState_xAmzContentSha256;
        this.UpdateContainerInstancesState_xAmzContentSha256Type = config.UpdateContainerInstancesState_xAmzContentSha256Type || 'str';
        this.UpdateContainerInstancesState_xAmzDate = config.UpdateContainerInstancesState_xAmzDate;
        this.UpdateContainerInstancesState_xAmzDateType = config.UpdateContainerInstancesState_xAmzDateType || 'str';
        this.UpdateContainerInstancesState_xAmzAlgorithm = config.UpdateContainerInstancesState_xAmzAlgorithm;
        this.UpdateContainerInstancesState_xAmzAlgorithmType = config.UpdateContainerInstancesState_xAmzAlgorithmType || 'str';
        this.UpdateContainerInstancesState_xAmzCredential = config.UpdateContainerInstancesState_xAmzCredential;
        this.UpdateContainerInstancesState_xAmzCredentialType = config.UpdateContainerInstancesState_xAmzCredentialType || 'str';
        this.UpdateContainerInstancesState_xAmzSecurityToken = config.UpdateContainerInstancesState_xAmzSecurityToken;
        this.UpdateContainerInstancesState_xAmzSecurityTokenType = config.UpdateContainerInstancesState_xAmzSecurityTokenType || 'str';
        this.UpdateContainerInstancesState_xAmzSignature = config.UpdateContainerInstancesState_xAmzSignature;
        this.UpdateContainerInstancesState_xAmzSignatureType = config.UpdateContainerInstancesState_xAmzSignatureType || 'str';
        this.UpdateContainerInstancesState_xAmzSignedHeaders = config.UpdateContainerInstancesState_xAmzSignedHeaders;
        this.UpdateContainerInstancesState_xAmzSignedHeadersType = config.UpdateContainerInstancesState_xAmzSignedHeadersType || 'str';
        this.UpdateService_body = config.UpdateService_body;
        this.UpdateService_bodyType = config.UpdateService_bodyType || 'str';
        this.UpdateService_xAmzTarget = config.UpdateService_xAmzTarget;
        this.UpdateService_xAmzTargetType = config.UpdateService_xAmzTargetType || 'str';
        this.UpdateService_xAmzContentSha256 = config.UpdateService_xAmzContentSha256;
        this.UpdateService_xAmzContentSha256Type = config.UpdateService_xAmzContentSha256Type || 'str';
        this.UpdateService_xAmzDate = config.UpdateService_xAmzDate;
        this.UpdateService_xAmzDateType = config.UpdateService_xAmzDateType || 'str';
        this.UpdateService_xAmzAlgorithm = config.UpdateService_xAmzAlgorithm;
        this.UpdateService_xAmzAlgorithmType = config.UpdateService_xAmzAlgorithmType || 'str';
        this.UpdateService_xAmzCredential = config.UpdateService_xAmzCredential;
        this.UpdateService_xAmzCredentialType = config.UpdateService_xAmzCredentialType || 'str';
        this.UpdateService_xAmzSecurityToken = config.UpdateService_xAmzSecurityToken;
        this.UpdateService_xAmzSecurityTokenType = config.UpdateService_xAmzSecurityTokenType || 'str';
        this.UpdateService_xAmzSignature = config.UpdateService_xAmzSignature;
        this.UpdateService_xAmzSignatureType = config.UpdateService_xAmzSignatureType || 'str';
        this.UpdateService_xAmzSignedHeaders = config.UpdateService_xAmzSignedHeaders;
        this.UpdateService_xAmzSignedHeadersType = config.UpdateService_xAmzSignedHeadersType || 'str';
        this.UpdateServicePrimaryTaskSet_body = config.UpdateServicePrimaryTaskSet_body;
        this.UpdateServicePrimaryTaskSet_bodyType = config.UpdateServicePrimaryTaskSet_bodyType || 'str';
        this.UpdateServicePrimaryTaskSet_xAmzTarget = config.UpdateServicePrimaryTaskSet_xAmzTarget;
        this.UpdateServicePrimaryTaskSet_xAmzTargetType = config.UpdateServicePrimaryTaskSet_xAmzTargetType || 'str';
        this.UpdateServicePrimaryTaskSet_xAmzContentSha256 = config.UpdateServicePrimaryTaskSet_xAmzContentSha256;
        this.UpdateServicePrimaryTaskSet_xAmzContentSha256Type = config.UpdateServicePrimaryTaskSet_xAmzContentSha256Type || 'str';
        this.UpdateServicePrimaryTaskSet_xAmzDate = config.UpdateServicePrimaryTaskSet_xAmzDate;
        this.UpdateServicePrimaryTaskSet_xAmzDateType = config.UpdateServicePrimaryTaskSet_xAmzDateType || 'str';
        this.UpdateServicePrimaryTaskSet_xAmzAlgorithm = config.UpdateServicePrimaryTaskSet_xAmzAlgorithm;
        this.UpdateServicePrimaryTaskSet_xAmzAlgorithmType = config.UpdateServicePrimaryTaskSet_xAmzAlgorithmType || 'str';
        this.UpdateServicePrimaryTaskSet_xAmzCredential = config.UpdateServicePrimaryTaskSet_xAmzCredential;
        this.UpdateServicePrimaryTaskSet_xAmzCredentialType = config.UpdateServicePrimaryTaskSet_xAmzCredentialType || 'str';
        this.UpdateServicePrimaryTaskSet_xAmzSecurityToken = config.UpdateServicePrimaryTaskSet_xAmzSecurityToken;
        this.UpdateServicePrimaryTaskSet_xAmzSecurityTokenType = config.UpdateServicePrimaryTaskSet_xAmzSecurityTokenType || 'str';
        this.UpdateServicePrimaryTaskSet_xAmzSignature = config.UpdateServicePrimaryTaskSet_xAmzSignature;
        this.UpdateServicePrimaryTaskSet_xAmzSignatureType = config.UpdateServicePrimaryTaskSet_xAmzSignatureType || 'str';
        this.UpdateServicePrimaryTaskSet_xAmzSignedHeaders = config.UpdateServicePrimaryTaskSet_xAmzSignedHeaders;
        this.UpdateServicePrimaryTaskSet_xAmzSignedHeadersType = config.UpdateServicePrimaryTaskSet_xAmzSignedHeadersType || 'str';
        this.UpdateTaskSet_body = config.UpdateTaskSet_body;
        this.UpdateTaskSet_bodyType = config.UpdateTaskSet_bodyType || 'str';
        this.UpdateTaskSet_xAmzTarget = config.UpdateTaskSet_xAmzTarget;
        this.UpdateTaskSet_xAmzTargetType = config.UpdateTaskSet_xAmzTargetType || 'str';
        this.UpdateTaskSet_xAmzContentSha256 = config.UpdateTaskSet_xAmzContentSha256;
        this.UpdateTaskSet_xAmzContentSha256Type = config.UpdateTaskSet_xAmzContentSha256Type || 'str';
        this.UpdateTaskSet_xAmzDate = config.UpdateTaskSet_xAmzDate;
        this.UpdateTaskSet_xAmzDateType = config.UpdateTaskSet_xAmzDateType || 'str';
        this.UpdateTaskSet_xAmzAlgorithm = config.UpdateTaskSet_xAmzAlgorithm;
        this.UpdateTaskSet_xAmzAlgorithmType = config.UpdateTaskSet_xAmzAlgorithmType || 'str';
        this.UpdateTaskSet_xAmzCredential = config.UpdateTaskSet_xAmzCredential;
        this.UpdateTaskSet_xAmzCredentialType = config.UpdateTaskSet_xAmzCredentialType || 'str';
        this.UpdateTaskSet_xAmzSecurityToken = config.UpdateTaskSet_xAmzSecurityToken;
        this.UpdateTaskSet_xAmzSecurityTokenType = config.UpdateTaskSet_xAmzSecurityTokenType || 'str';
        this.UpdateTaskSet_xAmzSignature = config.UpdateTaskSet_xAmzSignature;
        this.UpdateTaskSet_xAmzSignatureType = config.UpdateTaskSet_xAmzSignatureType || 'str';
        this.UpdateTaskSet_xAmzSignedHeaders = config.UpdateTaskSet_xAmzSignedHeaders;
        this.UpdateTaskSet_xAmzSignedHeadersType = config.UpdateTaskSet_xAmzSignedHeadersType || 'str';
        var node = this;

        node.on('input', function (msg) {
            var errorFlag = false;
            var client = new lib.AmazonEc2ContainerService();
            if (!errorFlag && this.service && this.service.credentials && this.service.credentials.secureApiKeyValue) {
                if (this.service.secureApiKeyIsQuery) {
                    client.setApiKey(this.service.credentials.secureApiKeyValue,
                                     this.service.secureApiKeyHeaderOrQueryName, true);
                } else {
                    client.setApiKey(this.service.credentials.secureApiKeyValue,
                                     this.service.secureApiKeyHeaderOrQueryName, false);
                }
            }
            if (!errorFlag) {
                client.body = msg.payload;
            }

            var result;
            if (!errorFlag && node.method === 'CreateCluster') {
                var CreateCluster_parameters = [];
                var CreateCluster_nodeParam;
                var CreateCluster_nodeParamType;

                if (typeof msg.payload === 'object') {
                    CreateCluster_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                CreateCluster_nodeParam = node.CreateCluster_xAmzTarget;
                CreateCluster_nodeParamType = node.CreateCluster_xAmzTargetType;
                if (CreateCluster_nodeParamType === 'str') {
                    CreateCluster_parameters.xAmzTarget = CreateCluster_nodeParam || '';
                } else {
                    CreateCluster_parameters.xAmzTarget = RED.util.getMessageProperty(msg, CreateCluster_nodeParam);
                }
                CreateCluster_parameters.xAmzTarget = !!CreateCluster_parameters.xAmzTarget ? CreateCluster_parameters.xAmzTarget : msg.payload;
                
                CreateCluster_nodeParam = node.CreateCluster_xAmzContentSha256;
                CreateCluster_nodeParamType = node.CreateCluster_xAmzContentSha256Type;
                if (CreateCluster_nodeParamType === 'str') {
                    CreateCluster_parameters.xAmzContentSha256 = CreateCluster_nodeParam || '';
                } else {
                    CreateCluster_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, CreateCluster_nodeParam);
                }
                CreateCluster_parameters.xAmzContentSha256 = !!CreateCluster_parameters.xAmzContentSha256 ? CreateCluster_parameters.xAmzContentSha256 : msg.payload;
                
                CreateCluster_nodeParam = node.CreateCluster_xAmzDate;
                CreateCluster_nodeParamType = node.CreateCluster_xAmzDateType;
                if (CreateCluster_nodeParamType === 'str') {
                    CreateCluster_parameters.xAmzDate = CreateCluster_nodeParam || '';
                } else {
                    CreateCluster_parameters.xAmzDate = RED.util.getMessageProperty(msg, CreateCluster_nodeParam);
                }
                CreateCluster_parameters.xAmzDate = !!CreateCluster_parameters.xAmzDate ? CreateCluster_parameters.xAmzDate : msg.payload;
                
                CreateCluster_nodeParam = node.CreateCluster_xAmzAlgorithm;
                CreateCluster_nodeParamType = node.CreateCluster_xAmzAlgorithmType;
                if (CreateCluster_nodeParamType === 'str') {
                    CreateCluster_parameters.xAmzAlgorithm = CreateCluster_nodeParam || '';
                } else {
                    CreateCluster_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, CreateCluster_nodeParam);
                }
                CreateCluster_parameters.xAmzAlgorithm = !!CreateCluster_parameters.xAmzAlgorithm ? CreateCluster_parameters.xAmzAlgorithm : msg.payload;
                
                CreateCluster_nodeParam = node.CreateCluster_xAmzCredential;
                CreateCluster_nodeParamType = node.CreateCluster_xAmzCredentialType;
                if (CreateCluster_nodeParamType === 'str') {
                    CreateCluster_parameters.xAmzCredential = CreateCluster_nodeParam || '';
                } else {
                    CreateCluster_parameters.xAmzCredential = RED.util.getMessageProperty(msg, CreateCluster_nodeParam);
                }
                CreateCluster_parameters.xAmzCredential = !!CreateCluster_parameters.xAmzCredential ? CreateCluster_parameters.xAmzCredential : msg.payload;
                
                CreateCluster_nodeParam = node.CreateCluster_xAmzSecurityToken;
                CreateCluster_nodeParamType = node.CreateCluster_xAmzSecurityTokenType;
                if (CreateCluster_nodeParamType === 'str') {
                    CreateCluster_parameters.xAmzSecurityToken = CreateCluster_nodeParam || '';
                } else {
                    CreateCluster_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, CreateCluster_nodeParam);
                }
                CreateCluster_parameters.xAmzSecurityToken = !!CreateCluster_parameters.xAmzSecurityToken ? CreateCluster_parameters.xAmzSecurityToken : msg.payload;
                
                CreateCluster_nodeParam = node.CreateCluster_xAmzSignature;
                CreateCluster_nodeParamType = node.CreateCluster_xAmzSignatureType;
                if (CreateCluster_nodeParamType === 'str') {
                    CreateCluster_parameters.xAmzSignature = CreateCluster_nodeParam || '';
                } else {
                    CreateCluster_parameters.xAmzSignature = RED.util.getMessageProperty(msg, CreateCluster_nodeParam);
                }
                CreateCluster_parameters.xAmzSignature = !!CreateCluster_parameters.xAmzSignature ? CreateCluster_parameters.xAmzSignature : msg.payload;
                
                CreateCluster_nodeParam = node.CreateCluster_xAmzSignedHeaders;
                CreateCluster_nodeParamType = node.CreateCluster_xAmzSignedHeadersType;
                if (CreateCluster_nodeParamType === 'str') {
                    CreateCluster_parameters.xAmzSignedHeaders = CreateCluster_nodeParam || '';
                } else {
                    CreateCluster_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, CreateCluster_nodeParam);
                }
                CreateCluster_parameters.xAmzSignedHeaders = !!CreateCluster_parameters.xAmzSignedHeaders ? CreateCluster_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.CreateCluster(CreateCluster_parameters);
            }
            if (!errorFlag && node.method === 'CreateService') {
                var CreateService_parameters = [];
                var CreateService_nodeParam;
                var CreateService_nodeParamType;

                if (typeof msg.payload === 'object') {
                    CreateService_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                CreateService_nodeParam = node.CreateService_xAmzTarget;
                CreateService_nodeParamType = node.CreateService_xAmzTargetType;
                if (CreateService_nodeParamType === 'str') {
                    CreateService_parameters.xAmzTarget = CreateService_nodeParam || '';
                } else {
                    CreateService_parameters.xAmzTarget = RED.util.getMessageProperty(msg, CreateService_nodeParam);
                }
                CreateService_parameters.xAmzTarget = !!CreateService_parameters.xAmzTarget ? CreateService_parameters.xAmzTarget : msg.payload;
                
                CreateService_nodeParam = node.CreateService_xAmzContentSha256;
                CreateService_nodeParamType = node.CreateService_xAmzContentSha256Type;
                if (CreateService_nodeParamType === 'str') {
                    CreateService_parameters.xAmzContentSha256 = CreateService_nodeParam || '';
                } else {
                    CreateService_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, CreateService_nodeParam);
                }
                CreateService_parameters.xAmzContentSha256 = !!CreateService_parameters.xAmzContentSha256 ? CreateService_parameters.xAmzContentSha256 : msg.payload;
                
                CreateService_nodeParam = node.CreateService_xAmzDate;
                CreateService_nodeParamType = node.CreateService_xAmzDateType;
                if (CreateService_nodeParamType === 'str') {
                    CreateService_parameters.xAmzDate = CreateService_nodeParam || '';
                } else {
                    CreateService_parameters.xAmzDate = RED.util.getMessageProperty(msg, CreateService_nodeParam);
                }
                CreateService_parameters.xAmzDate = !!CreateService_parameters.xAmzDate ? CreateService_parameters.xAmzDate : msg.payload;
                
                CreateService_nodeParam = node.CreateService_xAmzAlgorithm;
                CreateService_nodeParamType = node.CreateService_xAmzAlgorithmType;
                if (CreateService_nodeParamType === 'str') {
                    CreateService_parameters.xAmzAlgorithm = CreateService_nodeParam || '';
                } else {
                    CreateService_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, CreateService_nodeParam);
                }
                CreateService_parameters.xAmzAlgorithm = !!CreateService_parameters.xAmzAlgorithm ? CreateService_parameters.xAmzAlgorithm : msg.payload;
                
                CreateService_nodeParam = node.CreateService_xAmzCredential;
                CreateService_nodeParamType = node.CreateService_xAmzCredentialType;
                if (CreateService_nodeParamType === 'str') {
                    CreateService_parameters.xAmzCredential = CreateService_nodeParam || '';
                } else {
                    CreateService_parameters.xAmzCredential = RED.util.getMessageProperty(msg, CreateService_nodeParam);
                }
                CreateService_parameters.xAmzCredential = !!CreateService_parameters.xAmzCredential ? CreateService_parameters.xAmzCredential : msg.payload;
                
                CreateService_nodeParam = node.CreateService_xAmzSecurityToken;
                CreateService_nodeParamType = node.CreateService_xAmzSecurityTokenType;
                if (CreateService_nodeParamType === 'str') {
                    CreateService_parameters.xAmzSecurityToken = CreateService_nodeParam || '';
                } else {
                    CreateService_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, CreateService_nodeParam);
                }
                CreateService_parameters.xAmzSecurityToken = !!CreateService_parameters.xAmzSecurityToken ? CreateService_parameters.xAmzSecurityToken : msg.payload;
                
                CreateService_nodeParam = node.CreateService_xAmzSignature;
                CreateService_nodeParamType = node.CreateService_xAmzSignatureType;
                if (CreateService_nodeParamType === 'str') {
                    CreateService_parameters.xAmzSignature = CreateService_nodeParam || '';
                } else {
                    CreateService_parameters.xAmzSignature = RED.util.getMessageProperty(msg, CreateService_nodeParam);
                }
                CreateService_parameters.xAmzSignature = !!CreateService_parameters.xAmzSignature ? CreateService_parameters.xAmzSignature : msg.payload;
                
                CreateService_nodeParam = node.CreateService_xAmzSignedHeaders;
                CreateService_nodeParamType = node.CreateService_xAmzSignedHeadersType;
                if (CreateService_nodeParamType === 'str') {
                    CreateService_parameters.xAmzSignedHeaders = CreateService_nodeParam || '';
                } else {
                    CreateService_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, CreateService_nodeParam);
                }
                CreateService_parameters.xAmzSignedHeaders = !!CreateService_parameters.xAmzSignedHeaders ? CreateService_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.CreateService(CreateService_parameters);
            }
            if (!errorFlag && node.method === 'CreateTaskSet') {
                var CreateTaskSet_parameters = [];
                var CreateTaskSet_nodeParam;
                var CreateTaskSet_nodeParamType;

                if (typeof msg.payload === 'object') {
                    CreateTaskSet_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                CreateTaskSet_nodeParam = node.CreateTaskSet_xAmzTarget;
                CreateTaskSet_nodeParamType = node.CreateTaskSet_xAmzTargetType;
                if (CreateTaskSet_nodeParamType === 'str') {
                    CreateTaskSet_parameters.xAmzTarget = CreateTaskSet_nodeParam || '';
                } else {
                    CreateTaskSet_parameters.xAmzTarget = RED.util.getMessageProperty(msg, CreateTaskSet_nodeParam);
                }
                CreateTaskSet_parameters.xAmzTarget = !!CreateTaskSet_parameters.xAmzTarget ? CreateTaskSet_parameters.xAmzTarget : msg.payload;
                
                CreateTaskSet_nodeParam = node.CreateTaskSet_xAmzContentSha256;
                CreateTaskSet_nodeParamType = node.CreateTaskSet_xAmzContentSha256Type;
                if (CreateTaskSet_nodeParamType === 'str') {
                    CreateTaskSet_parameters.xAmzContentSha256 = CreateTaskSet_nodeParam || '';
                } else {
                    CreateTaskSet_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, CreateTaskSet_nodeParam);
                }
                CreateTaskSet_parameters.xAmzContentSha256 = !!CreateTaskSet_parameters.xAmzContentSha256 ? CreateTaskSet_parameters.xAmzContentSha256 : msg.payload;
                
                CreateTaskSet_nodeParam = node.CreateTaskSet_xAmzDate;
                CreateTaskSet_nodeParamType = node.CreateTaskSet_xAmzDateType;
                if (CreateTaskSet_nodeParamType === 'str') {
                    CreateTaskSet_parameters.xAmzDate = CreateTaskSet_nodeParam || '';
                } else {
                    CreateTaskSet_parameters.xAmzDate = RED.util.getMessageProperty(msg, CreateTaskSet_nodeParam);
                }
                CreateTaskSet_parameters.xAmzDate = !!CreateTaskSet_parameters.xAmzDate ? CreateTaskSet_parameters.xAmzDate : msg.payload;
                
                CreateTaskSet_nodeParam = node.CreateTaskSet_xAmzAlgorithm;
                CreateTaskSet_nodeParamType = node.CreateTaskSet_xAmzAlgorithmType;
                if (CreateTaskSet_nodeParamType === 'str') {
                    CreateTaskSet_parameters.xAmzAlgorithm = CreateTaskSet_nodeParam || '';
                } else {
                    CreateTaskSet_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, CreateTaskSet_nodeParam);
                }
                CreateTaskSet_parameters.xAmzAlgorithm = !!CreateTaskSet_parameters.xAmzAlgorithm ? CreateTaskSet_parameters.xAmzAlgorithm : msg.payload;
                
                CreateTaskSet_nodeParam = node.CreateTaskSet_xAmzCredential;
                CreateTaskSet_nodeParamType = node.CreateTaskSet_xAmzCredentialType;
                if (CreateTaskSet_nodeParamType === 'str') {
                    CreateTaskSet_parameters.xAmzCredential = CreateTaskSet_nodeParam || '';
                } else {
                    CreateTaskSet_parameters.xAmzCredential = RED.util.getMessageProperty(msg, CreateTaskSet_nodeParam);
                }
                CreateTaskSet_parameters.xAmzCredential = !!CreateTaskSet_parameters.xAmzCredential ? CreateTaskSet_parameters.xAmzCredential : msg.payload;
                
                CreateTaskSet_nodeParam = node.CreateTaskSet_xAmzSecurityToken;
                CreateTaskSet_nodeParamType = node.CreateTaskSet_xAmzSecurityTokenType;
                if (CreateTaskSet_nodeParamType === 'str') {
                    CreateTaskSet_parameters.xAmzSecurityToken = CreateTaskSet_nodeParam || '';
                } else {
                    CreateTaskSet_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, CreateTaskSet_nodeParam);
                }
                CreateTaskSet_parameters.xAmzSecurityToken = !!CreateTaskSet_parameters.xAmzSecurityToken ? CreateTaskSet_parameters.xAmzSecurityToken : msg.payload;
                
                CreateTaskSet_nodeParam = node.CreateTaskSet_xAmzSignature;
                CreateTaskSet_nodeParamType = node.CreateTaskSet_xAmzSignatureType;
                if (CreateTaskSet_nodeParamType === 'str') {
                    CreateTaskSet_parameters.xAmzSignature = CreateTaskSet_nodeParam || '';
                } else {
                    CreateTaskSet_parameters.xAmzSignature = RED.util.getMessageProperty(msg, CreateTaskSet_nodeParam);
                }
                CreateTaskSet_parameters.xAmzSignature = !!CreateTaskSet_parameters.xAmzSignature ? CreateTaskSet_parameters.xAmzSignature : msg.payload;
                
                CreateTaskSet_nodeParam = node.CreateTaskSet_xAmzSignedHeaders;
                CreateTaskSet_nodeParamType = node.CreateTaskSet_xAmzSignedHeadersType;
                if (CreateTaskSet_nodeParamType === 'str') {
                    CreateTaskSet_parameters.xAmzSignedHeaders = CreateTaskSet_nodeParam || '';
                } else {
                    CreateTaskSet_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, CreateTaskSet_nodeParam);
                }
                CreateTaskSet_parameters.xAmzSignedHeaders = !!CreateTaskSet_parameters.xAmzSignedHeaders ? CreateTaskSet_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.CreateTaskSet(CreateTaskSet_parameters);
            }
            if (!errorFlag && node.method === 'DeleteAccountSetting') {
                var DeleteAccountSetting_parameters = [];
                var DeleteAccountSetting_nodeParam;
                var DeleteAccountSetting_nodeParamType;

                if (typeof msg.payload === 'object') {
                    DeleteAccountSetting_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                DeleteAccountSetting_nodeParam = node.DeleteAccountSetting_xAmzTarget;
                DeleteAccountSetting_nodeParamType = node.DeleteAccountSetting_xAmzTargetType;
                if (DeleteAccountSetting_nodeParamType === 'str') {
                    DeleteAccountSetting_parameters.xAmzTarget = DeleteAccountSetting_nodeParam || '';
                } else {
                    DeleteAccountSetting_parameters.xAmzTarget = RED.util.getMessageProperty(msg, DeleteAccountSetting_nodeParam);
                }
                DeleteAccountSetting_parameters.xAmzTarget = !!DeleteAccountSetting_parameters.xAmzTarget ? DeleteAccountSetting_parameters.xAmzTarget : msg.payload;
                
                DeleteAccountSetting_nodeParam = node.DeleteAccountSetting_xAmzContentSha256;
                DeleteAccountSetting_nodeParamType = node.DeleteAccountSetting_xAmzContentSha256Type;
                if (DeleteAccountSetting_nodeParamType === 'str') {
                    DeleteAccountSetting_parameters.xAmzContentSha256 = DeleteAccountSetting_nodeParam || '';
                } else {
                    DeleteAccountSetting_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, DeleteAccountSetting_nodeParam);
                }
                DeleteAccountSetting_parameters.xAmzContentSha256 = !!DeleteAccountSetting_parameters.xAmzContentSha256 ? DeleteAccountSetting_parameters.xAmzContentSha256 : msg.payload;
                
                DeleteAccountSetting_nodeParam = node.DeleteAccountSetting_xAmzDate;
                DeleteAccountSetting_nodeParamType = node.DeleteAccountSetting_xAmzDateType;
                if (DeleteAccountSetting_nodeParamType === 'str') {
                    DeleteAccountSetting_parameters.xAmzDate = DeleteAccountSetting_nodeParam || '';
                } else {
                    DeleteAccountSetting_parameters.xAmzDate = RED.util.getMessageProperty(msg, DeleteAccountSetting_nodeParam);
                }
                DeleteAccountSetting_parameters.xAmzDate = !!DeleteAccountSetting_parameters.xAmzDate ? DeleteAccountSetting_parameters.xAmzDate : msg.payload;
                
                DeleteAccountSetting_nodeParam = node.DeleteAccountSetting_xAmzAlgorithm;
                DeleteAccountSetting_nodeParamType = node.DeleteAccountSetting_xAmzAlgorithmType;
                if (DeleteAccountSetting_nodeParamType === 'str') {
                    DeleteAccountSetting_parameters.xAmzAlgorithm = DeleteAccountSetting_nodeParam || '';
                } else {
                    DeleteAccountSetting_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, DeleteAccountSetting_nodeParam);
                }
                DeleteAccountSetting_parameters.xAmzAlgorithm = !!DeleteAccountSetting_parameters.xAmzAlgorithm ? DeleteAccountSetting_parameters.xAmzAlgorithm : msg.payload;
                
                DeleteAccountSetting_nodeParam = node.DeleteAccountSetting_xAmzCredential;
                DeleteAccountSetting_nodeParamType = node.DeleteAccountSetting_xAmzCredentialType;
                if (DeleteAccountSetting_nodeParamType === 'str') {
                    DeleteAccountSetting_parameters.xAmzCredential = DeleteAccountSetting_nodeParam || '';
                } else {
                    DeleteAccountSetting_parameters.xAmzCredential = RED.util.getMessageProperty(msg, DeleteAccountSetting_nodeParam);
                }
                DeleteAccountSetting_parameters.xAmzCredential = !!DeleteAccountSetting_parameters.xAmzCredential ? DeleteAccountSetting_parameters.xAmzCredential : msg.payload;
                
                DeleteAccountSetting_nodeParam = node.DeleteAccountSetting_xAmzSecurityToken;
                DeleteAccountSetting_nodeParamType = node.DeleteAccountSetting_xAmzSecurityTokenType;
                if (DeleteAccountSetting_nodeParamType === 'str') {
                    DeleteAccountSetting_parameters.xAmzSecurityToken = DeleteAccountSetting_nodeParam || '';
                } else {
                    DeleteAccountSetting_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, DeleteAccountSetting_nodeParam);
                }
                DeleteAccountSetting_parameters.xAmzSecurityToken = !!DeleteAccountSetting_parameters.xAmzSecurityToken ? DeleteAccountSetting_parameters.xAmzSecurityToken : msg.payload;
                
                DeleteAccountSetting_nodeParam = node.DeleteAccountSetting_xAmzSignature;
                DeleteAccountSetting_nodeParamType = node.DeleteAccountSetting_xAmzSignatureType;
                if (DeleteAccountSetting_nodeParamType === 'str') {
                    DeleteAccountSetting_parameters.xAmzSignature = DeleteAccountSetting_nodeParam || '';
                } else {
                    DeleteAccountSetting_parameters.xAmzSignature = RED.util.getMessageProperty(msg, DeleteAccountSetting_nodeParam);
                }
                DeleteAccountSetting_parameters.xAmzSignature = !!DeleteAccountSetting_parameters.xAmzSignature ? DeleteAccountSetting_parameters.xAmzSignature : msg.payload;
                
                DeleteAccountSetting_nodeParam = node.DeleteAccountSetting_xAmzSignedHeaders;
                DeleteAccountSetting_nodeParamType = node.DeleteAccountSetting_xAmzSignedHeadersType;
                if (DeleteAccountSetting_nodeParamType === 'str') {
                    DeleteAccountSetting_parameters.xAmzSignedHeaders = DeleteAccountSetting_nodeParam || '';
                } else {
                    DeleteAccountSetting_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, DeleteAccountSetting_nodeParam);
                }
                DeleteAccountSetting_parameters.xAmzSignedHeaders = !!DeleteAccountSetting_parameters.xAmzSignedHeaders ? DeleteAccountSetting_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.DeleteAccountSetting(DeleteAccountSetting_parameters);
            }
            if (!errorFlag && node.method === 'DeleteAttributes') {
                var DeleteAttributes_parameters = [];
                var DeleteAttributes_nodeParam;
                var DeleteAttributes_nodeParamType;

                if (typeof msg.payload === 'object') {
                    DeleteAttributes_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                DeleteAttributes_nodeParam = node.DeleteAttributes_xAmzTarget;
                DeleteAttributes_nodeParamType = node.DeleteAttributes_xAmzTargetType;
                if (DeleteAttributes_nodeParamType === 'str') {
                    DeleteAttributes_parameters.xAmzTarget = DeleteAttributes_nodeParam || '';
                } else {
                    DeleteAttributes_parameters.xAmzTarget = RED.util.getMessageProperty(msg, DeleteAttributes_nodeParam);
                }
                DeleteAttributes_parameters.xAmzTarget = !!DeleteAttributes_parameters.xAmzTarget ? DeleteAttributes_parameters.xAmzTarget : msg.payload;
                
                DeleteAttributes_nodeParam = node.DeleteAttributes_xAmzContentSha256;
                DeleteAttributes_nodeParamType = node.DeleteAttributes_xAmzContentSha256Type;
                if (DeleteAttributes_nodeParamType === 'str') {
                    DeleteAttributes_parameters.xAmzContentSha256 = DeleteAttributes_nodeParam || '';
                } else {
                    DeleteAttributes_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, DeleteAttributes_nodeParam);
                }
                DeleteAttributes_parameters.xAmzContentSha256 = !!DeleteAttributes_parameters.xAmzContentSha256 ? DeleteAttributes_parameters.xAmzContentSha256 : msg.payload;
                
                DeleteAttributes_nodeParam = node.DeleteAttributes_xAmzDate;
                DeleteAttributes_nodeParamType = node.DeleteAttributes_xAmzDateType;
                if (DeleteAttributes_nodeParamType === 'str') {
                    DeleteAttributes_parameters.xAmzDate = DeleteAttributes_nodeParam || '';
                } else {
                    DeleteAttributes_parameters.xAmzDate = RED.util.getMessageProperty(msg, DeleteAttributes_nodeParam);
                }
                DeleteAttributes_parameters.xAmzDate = !!DeleteAttributes_parameters.xAmzDate ? DeleteAttributes_parameters.xAmzDate : msg.payload;
                
                DeleteAttributes_nodeParam = node.DeleteAttributes_xAmzAlgorithm;
                DeleteAttributes_nodeParamType = node.DeleteAttributes_xAmzAlgorithmType;
                if (DeleteAttributes_nodeParamType === 'str') {
                    DeleteAttributes_parameters.xAmzAlgorithm = DeleteAttributes_nodeParam || '';
                } else {
                    DeleteAttributes_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, DeleteAttributes_nodeParam);
                }
                DeleteAttributes_parameters.xAmzAlgorithm = !!DeleteAttributes_parameters.xAmzAlgorithm ? DeleteAttributes_parameters.xAmzAlgorithm : msg.payload;
                
                DeleteAttributes_nodeParam = node.DeleteAttributes_xAmzCredential;
                DeleteAttributes_nodeParamType = node.DeleteAttributes_xAmzCredentialType;
                if (DeleteAttributes_nodeParamType === 'str') {
                    DeleteAttributes_parameters.xAmzCredential = DeleteAttributes_nodeParam || '';
                } else {
                    DeleteAttributes_parameters.xAmzCredential = RED.util.getMessageProperty(msg, DeleteAttributes_nodeParam);
                }
                DeleteAttributes_parameters.xAmzCredential = !!DeleteAttributes_parameters.xAmzCredential ? DeleteAttributes_parameters.xAmzCredential : msg.payload;
                
                DeleteAttributes_nodeParam = node.DeleteAttributes_xAmzSecurityToken;
                DeleteAttributes_nodeParamType = node.DeleteAttributes_xAmzSecurityTokenType;
                if (DeleteAttributes_nodeParamType === 'str') {
                    DeleteAttributes_parameters.xAmzSecurityToken = DeleteAttributes_nodeParam || '';
                } else {
                    DeleteAttributes_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, DeleteAttributes_nodeParam);
                }
                DeleteAttributes_parameters.xAmzSecurityToken = !!DeleteAttributes_parameters.xAmzSecurityToken ? DeleteAttributes_parameters.xAmzSecurityToken : msg.payload;
                
                DeleteAttributes_nodeParam = node.DeleteAttributes_xAmzSignature;
                DeleteAttributes_nodeParamType = node.DeleteAttributes_xAmzSignatureType;
                if (DeleteAttributes_nodeParamType === 'str') {
                    DeleteAttributes_parameters.xAmzSignature = DeleteAttributes_nodeParam || '';
                } else {
                    DeleteAttributes_parameters.xAmzSignature = RED.util.getMessageProperty(msg, DeleteAttributes_nodeParam);
                }
                DeleteAttributes_parameters.xAmzSignature = !!DeleteAttributes_parameters.xAmzSignature ? DeleteAttributes_parameters.xAmzSignature : msg.payload;
                
                DeleteAttributes_nodeParam = node.DeleteAttributes_xAmzSignedHeaders;
                DeleteAttributes_nodeParamType = node.DeleteAttributes_xAmzSignedHeadersType;
                if (DeleteAttributes_nodeParamType === 'str') {
                    DeleteAttributes_parameters.xAmzSignedHeaders = DeleteAttributes_nodeParam || '';
                } else {
                    DeleteAttributes_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, DeleteAttributes_nodeParam);
                }
                DeleteAttributes_parameters.xAmzSignedHeaders = !!DeleteAttributes_parameters.xAmzSignedHeaders ? DeleteAttributes_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.DeleteAttributes(DeleteAttributes_parameters);
            }
            if (!errorFlag && node.method === 'DeleteCluster') {
                var DeleteCluster_parameters = [];
                var DeleteCluster_nodeParam;
                var DeleteCluster_nodeParamType;

                if (typeof msg.payload === 'object') {
                    DeleteCluster_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                DeleteCluster_nodeParam = node.DeleteCluster_xAmzTarget;
                DeleteCluster_nodeParamType = node.DeleteCluster_xAmzTargetType;
                if (DeleteCluster_nodeParamType === 'str') {
                    DeleteCluster_parameters.xAmzTarget = DeleteCluster_nodeParam || '';
                } else {
                    DeleteCluster_parameters.xAmzTarget = RED.util.getMessageProperty(msg, DeleteCluster_nodeParam);
                }
                DeleteCluster_parameters.xAmzTarget = !!DeleteCluster_parameters.xAmzTarget ? DeleteCluster_parameters.xAmzTarget : msg.payload;
                
                DeleteCluster_nodeParam = node.DeleteCluster_xAmzContentSha256;
                DeleteCluster_nodeParamType = node.DeleteCluster_xAmzContentSha256Type;
                if (DeleteCluster_nodeParamType === 'str') {
                    DeleteCluster_parameters.xAmzContentSha256 = DeleteCluster_nodeParam || '';
                } else {
                    DeleteCluster_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, DeleteCluster_nodeParam);
                }
                DeleteCluster_parameters.xAmzContentSha256 = !!DeleteCluster_parameters.xAmzContentSha256 ? DeleteCluster_parameters.xAmzContentSha256 : msg.payload;
                
                DeleteCluster_nodeParam = node.DeleteCluster_xAmzDate;
                DeleteCluster_nodeParamType = node.DeleteCluster_xAmzDateType;
                if (DeleteCluster_nodeParamType === 'str') {
                    DeleteCluster_parameters.xAmzDate = DeleteCluster_nodeParam || '';
                } else {
                    DeleteCluster_parameters.xAmzDate = RED.util.getMessageProperty(msg, DeleteCluster_nodeParam);
                }
                DeleteCluster_parameters.xAmzDate = !!DeleteCluster_parameters.xAmzDate ? DeleteCluster_parameters.xAmzDate : msg.payload;
                
                DeleteCluster_nodeParam = node.DeleteCluster_xAmzAlgorithm;
                DeleteCluster_nodeParamType = node.DeleteCluster_xAmzAlgorithmType;
                if (DeleteCluster_nodeParamType === 'str') {
                    DeleteCluster_parameters.xAmzAlgorithm = DeleteCluster_nodeParam || '';
                } else {
                    DeleteCluster_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, DeleteCluster_nodeParam);
                }
                DeleteCluster_parameters.xAmzAlgorithm = !!DeleteCluster_parameters.xAmzAlgorithm ? DeleteCluster_parameters.xAmzAlgorithm : msg.payload;
                
                DeleteCluster_nodeParam = node.DeleteCluster_xAmzCredential;
                DeleteCluster_nodeParamType = node.DeleteCluster_xAmzCredentialType;
                if (DeleteCluster_nodeParamType === 'str') {
                    DeleteCluster_parameters.xAmzCredential = DeleteCluster_nodeParam || '';
                } else {
                    DeleteCluster_parameters.xAmzCredential = RED.util.getMessageProperty(msg, DeleteCluster_nodeParam);
                }
                DeleteCluster_parameters.xAmzCredential = !!DeleteCluster_parameters.xAmzCredential ? DeleteCluster_parameters.xAmzCredential : msg.payload;
                
                DeleteCluster_nodeParam = node.DeleteCluster_xAmzSecurityToken;
                DeleteCluster_nodeParamType = node.DeleteCluster_xAmzSecurityTokenType;
                if (DeleteCluster_nodeParamType === 'str') {
                    DeleteCluster_parameters.xAmzSecurityToken = DeleteCluster_nodeParam || '';
                } else {
                    DeleteCluster_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, DeleteCluster_nodeParam);
                }
                DeleteCluster_parameters.xAmzSecurityToken = !!DeleteCluster_parameters.xAmzSecurityToken ? DeleteCluster_parameters.xAmzSecurityToken : msg.payload;
                
                DeleteCluster_nodeParam = node.DeleteCluster_xAmzSignature;
                DeleteCluster_nodeParamType = node.DeleteCluster_xAmzSignatureType;
                if (DeleteCluster_nodeParamType === 'str') {
                    DeleteCluster_parameters.xAmzSignature = DeleteCluster_nodeParam || '';
                } else {
                    DeleteCluster_parameters.xAmzSignature = RED.util.getMessageProperty(msg, DeleteCluster_nodeParam);
                }
                DeleteCluster_parameters.xAmzSignature = !!DeleteCluster_parameters.xAmzSignature ? DeleteCluster_parameters.xAmzSignature : msg.payload;
                
                DeleteCluster_nodeParam = node.DeleteCluster_xAmzSignedHeaders;
                DeleteCluster_nodeParamType = node.DeleteCluster_xAmzSignedHeadersType;
                if (DeleteCluster_nodeParamType === 'str') {
                    DeleteCluster_parameters.xAmzSignedHeaders = DeleteCluster_nodeParam || '';
                } else {
                    DeleteCluster_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, DeleteCluster_nodeParam);
                }
                DeleteCluster_parameters.xAmzSignedHeaders = !!DeleteCluster_parameters.xAmzSignedHeaders ? DeleteCluster_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.DeleteCluster(DeleteCluster_parameters);
            }
            if (!errorFlag && node.method === 'DeleteService') {
                var DeleteService_parameters = [];
                var DeleteService_nodeParam;
                var DeleteService_nodeParamType;

                if (typeof msg.payload === 'object') {
                    DeleteService_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                DeleteService_nodeParam = node.DeleteService_xAmzTarget;
                DeleteService_nodeParamType = node.DeleteService_xAmzTargetType;
                if (DeleteService_nodeParamType === 'str') {
                    DeleteService_parameters.xAmzTarget = DeleteService_nodeParam || '';
                } else {
                    DeleteService_parameters.xAmzTarget = RED.util.getMessageProperty(msg, DeleteService_nodeParam);
                }
                DeleteService_parameters.xAmzTarget = !!DeleteService_parameters.xAmzTarget ? DeleteService_parameters.xAmzTarget : msg.payload;
                
                DeleteService_nodeParam = node.DeleteService_xAmzContentSha256;
                DeleteService_nodeParamType = node.DeleteService_xAmzContentSha256Type;
                if (DeleteService_nodeParamType === 'str') {
                    DeleteService_parameters.xAmzContentSha256 = DeleteService_nodeParam || '';
                } else {
                    DeleteService_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, DeleteService_nodeParam);
                }
                DeleteService_parameters.xAmzContentSha256 = !!DeleteService_parameters.xAmzContentSha256 ? DeleteService_parameters.xAmzContentSha256 : msg.payload;
                
                DeleteService_nodeParam = node.DeleteService_xAmzDate;
                DeleteService_nodeParamType = node.DeleteService_xAmzDateType;
                if (DeleteService_nodeParamType === 'str') {
                    DeleteService_parameters.xAmzDate = DeleteService_nodeParam || '';
                } else {
                    DeleteService_parameters.xAmzDate = RED.util.getMessageProperty(msg, DeleteService_nodeParam);
                }
                DeleteService_parameters.xAmzDate = !!DeleteService_parameters.xAmzDate ? DeleteService_parameters.xAmzDate : msg.payload;
                
                DeleteService_nodeParam = node.DeleteService_xAmzAlgorithm;
                DeleteService_nodeParamType = node.DeleteService_xAmzAlgorithmType;
                if (DeleteService_nodeParamType === 'str') {
                    DeleteService_parameters.xAmzAlgorithm = DeleteService_nodeParam || '';
                } else {
                    DeleteService_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, DeleteService_nodeParam);
                }
                DeleteService_parameters.xAmzAlgorithm = !!DeleteService_parameters.xAmzAlgorithm ? DeleteService_parameters.xAmzAlgorithm : msg.payload;
                
                DeleteService_nodeParam = node.DeleteService_xAmzCredential;
                DeleteService_nodeParamType = node.DeleteService_xAmzCredentialType;
                if (DeleteService_nodeParamType === 'str') {
                    DeleteService_parameters.xAmzCredential = DeleteService_nodeParam || '';
                } else {
                    DeleteService_parameters.xAmzCredential = RED.util.getMessageProperty(msg, DeleteService_nodeParam);
                }
                DeleteService_parameters.xAmzCredential = !!DeleteService_parameters.xAmzCredential ? DeleteService_parameters.xAmzCredential : msg.payload;
                
                DeleteService_nodeParam = node.DeleteService_xAmzSecurityToken;
                DeleteService_nodeParamType = node.DeleteService_xAmzSecurityTokenType;
                if (DeleteService_nodeParamType === 'str') {
                    DeleteService_parameters.xAmzSecurityToken = DeleteService_nodeParam || '';
                } else {
                    DeleteService_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, DeleteService_nodeParam);
                }
                DeleteService_parameters.xAmzSecurityToken = !!DeleteService_parameters.xAmzSecurityToken ? DeleteService_parameters.xAmzSecurityToken : msg.payload;
                
                DeleteService_nodeParam = node.DeleteService_xAmzSignature;
                DeleteService_nodeParamType = node.DeleteService_xAmzSignatureType;
                if (DeleteService_nodeParamType === 'str') {
                    DeleteService_parameters.xAmzSignature = DeleteService_nodeParam || '';
                } else {
                    DeleteService_parameters.xAmzSignature = RED.util.getMessageProperty(msg, DeleteService_nodeParam);
                }
                DeleteService_parameters.xAmzSignature = !!DeleteService_parameters.xAmzSignature ? DeleteService_parameters.xAmzSignature : msg.payload;
                
                DeleteService_nodeParam = node.DeleteService_xAmzSignedHeaders;
                DeleteService_nodeParamType = node.DeleteService_xAmzSignedHeadersType;
                if (DeleteService_nodeParamType === 'str') {
                    DeleteService_parameters.xAmzSignedHeaders = DeleteService_nodeParam || '';
                } else {
                    DeleteService_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, DeleteService_nodeParam);
                }
                DeleteService_parameters.xAmzSignedHeaders = !!DeleteService_parameters.xAmzSignedHeaders ? DeleteService_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.DeleteService(DeleteService_parameters);
            }
            if (!errorFlag && node.method === 'DeleteTaskSet') {
                var DeleteTaskSet_parameters = [];
                var DeleteTaskSet_nodeParam;
                var DeleteTaskSet_nodeParamType;

                if (typeof msg.payload === 'object') {
                    DeleteTaskSet_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                DeleteTaskSet_nodeParam = node.DeleteTaskSet_xAmzTarget;
                DeleteTaskSet_nodeParamType = node.DeleteTaskSet_xAmzTargetType;
                if (DeleteTaskSet_nodeParamType === 'str') {
                    DeleteTaskSet_parameters.xAmzTarget = DeleteTaskSet_nodeParam || '';
                } else {
                    DeleteTaskSet_parameters.xAmzTarget = RED.util.getMessageProperty(msg, DeleteTaskSet_nodeParam);
                }
                DeleteTaskSet_parameters.xAmzTarget = !!DeleteTaskSet_parameters.xAmzTarget ? DeleteTaskSet_parameters.xAmzTarget : msg.payload;
                
                DeleteTaskSet_nodeParam = node.DeleteTaskSet_xAmzContentSha256;
                DeleteTaskSet_nodeParamType = node.DeleteTaskSet_xAmzContentSha256Type;
                if (DeleteTaskSet_nodeParamType === 'str') {
                    DeleteTaskSet_parameters.xAmzContentSha256 = DeleteTaskSet_nodeParam || '';
                } else {
                    DeleteTaskSet_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, DeleteTaskSet_nodeParam);
                }
                DeleteTaskSet_parameters.xAmzContentSha256 = !!DeleteTaskSet_parameters.xAmzContentSha256 ? DeleteTaskSet_parameters.xAmzContentSha256 : msg.payload;
                
                DeleteTaskSet_nodeParam = node.DeleteTaskSet_xAmzDate;
                DeleteTaskSet_nodeParamType = node.DeleteTaskSet_xAmzDateType;
                if (DeleteTaskSet_nodeParamType === 'str') {
                    DeleteTaskSet_parameters.xAmzDate = DeleteTaskSet_nodeParam || '';
                } else {
                    DeleteTaskSet_parameters.xAmzDate = RED.util.getMessageProperty(msg, DeleteTaskSet_nodeParam);
                }
                DeleteTaskSet_parameters.xAmzDate = !!DeleteTaskSet_parameters.xAmzDate ? DeleteTaskSet_parameters.xAmzDate : msg.payload;
                
                DeleteTaskSet_nodeParam = node.DeleteTaskSet_xAmzAlgorithm;
                DeleteTaskSet_nodeParamType = node.DeleteTaskSet_xAmzAlgorithmType;
                if (DeleteTaskSet_nodeParamType === 'str') {
                    DeleteTaskSet_parameters.xAmzAlgorithm = DeleteTaskSet_nodeParam || '';
                } else {
                    DeleteTaskSet_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, DeleteTaskSet_nodeParam);
                }
                DeleteTaskSet_parameters.xAmzAlgorithm = !!DeleteTaskSet_parameters.xAmzAlgorithm ? DeleteTaskSet_parameters.xAmzAlgorithm : msg.payload;
                
                DeleteTaskSet_nodeParam = node.DeleteTaskSet_xAmzCredential;
                DeleteTaskSet_nodeParamType = node.DeleteTaskSet_xAmzCredentialType;
                if (DeleteTaskSet_nodeParamType === 'str') {
                    DeleteTaskSet_parameters.xAmzCredential = DeleteTaskSet_nodeParam || '';
                } else {
                    DeleteTaskSet_parameters.xAmzCredential = RED.util.getMessageProperty(msg, DeleteTaskSet_nodeParam);
                }
                DeleteTaskSet_parameters.xAmzCredential = !!DeleteTaskSet_parameters.xAmzCredential ? DeleteTaskSet_parameters.xAmzCredential : msg.payload;
                
                DeleteTaskSet_nodeParam = node.DeleteTaskSet_xAmzSecurityToken;
                DeleteTaskSet_nodeParamType = node.DeleteTaskSet_xAmzSecurityTokenType;
                if (DeleteTaskSet_nodeParamType === 'str') {
                    DeleteTaskSet_parameters.xAmzSecurityToken = DeleteTaskSet_nodeParam || '';
                } else {
                    DeleteTaskSet_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, DeleteTaskSet_nodeParam);
                }
                DeleteTaskSet_parameters.xAmzSecurityToken = !!DeleteTaskSet_parameters.xAmzSecurityToken ? DeleteTaskSet_parameters.xAmzSecurityToken : msg.payload;
                
                DeleteTaskSet_nodeParam = node.DeleteTaskSet_xAmzSignature;
                DeleteTaskSet_nodeParamType = node.DeleteTaskSet_xAmzSignatureType;
                if (DeleteTaskSet_nodeParamType === 'str') {
                    DeleteTaskSet_parameters.xAmzSignature = DeleteTaskSet_nodeParam || '';
                } else {
                    DeleteTaskSet_parameters.xAmzSignature = RED.util.getMessageProperty(msg, DeleteTaskSet_nodeParam);
                }
                DeleteTaskSet_parameters.xAmzSignature = !!DeleteTaskSet_parameters.xAmzSignature ? DeleteTaskSet_parameters.xAmzSignature : msg.payload;
                
                DeleteTaskSet_nodeParam = node.DeleteTaskSet_xAmzSignedHeaders;
                DeleteTaskSet_nodeParamType = node.DeleteTaskSet_xAmzSignedHeadersType;
                if (DeleteTaskSet_nodeParamType === 'str') {
                    DeleteTaskSet_parameters.xAmzSignedHeaders = DeleteTaskSet_nodeParam || '';
                } else {
                    DeleteTaskSet_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, DeleteTaskSet_nodeParam);
                }
                DeleteTaskSet_parameters.xAmzSignedHeaders = !!DeleteTaskSet_parameters.xAmzSignedHeaders ? DeleteTaskSet_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.DeleteTaskSet(DeleteTaskSet_parameters);
            }
            if (!errorFlag && node.method === 'DeregisterContainerInstance') {
                var DeregisterContainerInstance_parameters = [];
                var DeregisterContainerInstance_nodeParam;
                var DeregisterContainerInstance_nodeParamType;

                if (typeof msg.payload === 'object') {
                    DeregisterContainerInstance_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                DeregisterContainerInstance_nodeParam = node.DeregisterContainerInstance_xAmzTarget;
                DeregisterContainerInstance_nodeParamType = node.DeregisterContainerInstance_xAmzTargetType;
                if (DeregisterContainerInstance_nodeParamType === 'str') {
                    DeregisterContainerInstance_parameters.xAmzTarget = DeregisterContainerInstance_nodeParam || '';
                } else {
                    DeregisterContainerInstance_parameters.xAmzTarget = RED.util.getMessageProperty(msg, DeregisterContainerInstance_nodeParam);
                }
                DeregisterContainerInstance_parameters.xAmzTarget = !!DeregisterContainerInstance_parameters.xAmzTarget ? DeregisterContainerInstance_parameters.xAmzTarget : msg.payload;
                
                DeregisterContainerInstance_nodeParam = node.DeregisterContainerInstance_xAmzContentSha256;
                DeregisterContainerInstance_nodeParamType = node.DeregisterContainerInstance_xAmzContentSha256Type;
                if (DeregisterContainerInstance_nodeParamType === 'str') {
                    DeregisterContainerInstance_parameters.xAmzContentSha256 = DeregisterContainerInstance_nodeParam || '';
                } else {
                    DeregisterContainerInstance_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, DeregisterContainerInstance_nodeParam);
                }
                DeregisterContainerInstance_parameters.xAmzContentSha256 = !!DeregisterContainerInstance_parameters.xAmzContentSha256 ? DeregisterContainerInstance_parameters.xAmzContentSha256 : msg.payload;
                
                DeregisterContainerInstance_nodeParam = node.DeregisterContainerInstance_xAmzDate;
                DeregisterContainerInstance_nodeParamType = node.DeregisterContainerInstance_xAmzDateType;
                if (DeregisterContainerInstance_nodeParamType === 'str') {
                    DeregisterContainerInstance_parameters.xAmzDate = DeregisterContainerInstance_nodeParam || '';
                } else {
                    DeregisterContainerInstance_parameters.xAmzDate = RED.util.getMessageProperty(msg, DeregisterContainerInstance_nodeParam);
                }
                DeregisterContainerInstance_parameters.xAmzDate = !!DeregisterContainerInstance_parameters.xAmzDate ? DeregisterContainerInstance_parameters.xAmzDate : msg.payload;
                
                DeregisterContainerInstance_nodeParam = node.DeregisterContainerInstance_xAmzAlgorithm;
                DeregisterContainerInstance_nodeParamType = node.DeregisterContainerInstance_xAmzAlgorithmType;
                if (DeregisterContainerInstance_nodeParamType === 'str') {
                    DeregisterContainerInstance_parameters.xAmzAlgorithm = DeregisterContainerInstance_nodeParam || '';
                } else {
                    DeregisterContainerInstance_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, DeregisterContainerInstance_nodeParam);
                }
                DeregisterContainerInstance_parameters.xAmzAlgorithm = !!DeregisterContainerInstance_parameters.xAmzAlgorithm ? DeregisterContainerInstance_parameters.xAmzAlgorithm : msg.payload;
                
                DeregisterContainerInstance_nodeParam = node.DeregisterContainerInstance_xAmzCredential;
                DeregisterContainerInstance_nodeParamType = node.DeregisterContainerInstance_xAmzCredentialType;
                if (DeregisterContainerInstance_nodeParamType === 'str') {
                    DeregisterContainerInstance_parameters.xAmzCredential = DeregisterContainerInstance_nodeParam || '';
                } else {
                    DeregisterContainerInstance_parameters.xAmzCredential = RED.util.getMessageProperty(msg, DeregisterContainerInstance_nodeParam);
                }
                DeregisterContainerInstance_parameters.xAmzCredential = !!DeregisterContainerInstance_parameters.xAmzCredential ? DeregisterContainerInstance_parameters.xAmzCredential : msg.payload;
                
                DeregisterContainerInstance_nodeParam = node.DeregisterContainerInstance_xAmzSecurityToken;
                DeregisterContainerInstance_nodeParamType = node.DeregisterContainerInstance_xAmzSecurityTokenType;
                if (DeregisterContainerInstance_nodeParamType === 'str') {
                    DeregisterContainerInstance_parameters.xAmzSecurityToken = DeregisterContainerInstance_nodeParam || '';
                } else {
                    DeregisterContainerInstance_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, DeregisterContainerInstance_nodeParam);
                }
                DeregisterContainerInstance_parameters.xAmzSecurityToken = !!DeregisterContainerInstance_parameters.xAmzSecurityToken ? DeregisterContainerInstance_parameters.xAmzSecurityToken : msg.payload;
                
                DeregisterContainerInstance_nodeParam = node.DeregisterContainerInstance_xAmzSignature;
                DeregisterContainerInstance_nodeParamType = node.DeregisterContainerInstance_xAmzSignatureType;
                if (DeregisterContainerInstance_nodeParamType === 'str') {
                    DeregisterContainerInstance_parameters.xAmzSignature = DeregisterContainerInstance_nodeParam || '';
                } else {
                    DeregisterContainerInstance_parameters.xAmzSignature = RED.util.getMessageProperty(msg, DeregisterContainerInstance_nodeParam);
                }
                DeregisterContainerInstance_parameters.xAmzSignature = !!DeregisterContainerInstance_parameters.xAmzSignature ? DeregisterContainerInstance_parameters.xAmzSignature : msg.payload;
                
                DeregisterContainerInstance_nodeParam = node.DeregisterContainerInstance_xAmzSignedHeaders;
                DeregisterContainerInstance_nodeParamType = node.DeregisterContainerInstance_xAmzSignedHeadersType;
                if (DeregisterContainerInstance_nodeParamType === 'str') {
                    DeregisterContainerInstance_parameters.xAmzSignedHeaders = DeregisterContainerInstance_nodeParam || '';
                } else {
                    DeregisterContainerInstance_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, DeregisterContainerInstance_nodeParam);
                }
                DeregisterContainerInstance_parameters.xAmzSignedHeaders = !!DeregisterContainerInstance_parameters.xAmzSignedHeaders ? DeregisterContainerInstance_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.DeregisterContainerInstance(DeregisterContainerInstance_parameters);
            }
            if (!errorFlag && node.method === 'DeregisterTaskDefinition') {
                var DeregisterTaskDefinition_parameters = [];
                var DeregisterTaskDefinition_nodeParam;
                var DeregisterTaskDefinition_nodeParamType;

                if (typeof msg.payload === 'object') {
                    DeregisterTaskDefinition_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                DeregisterTaskDefinition_nodeParam = node.DeregisterTaskDefinition_xAmzTarget;
                DeregisterTaskDefinition_nodeParamType = node.DeregisterTaskDefinition_xAmzTargetType;
                if (DeregisterTaskDefinition_nodeParamType === 'str') {
                    DeregisterTaskDefinition_parameters.xAmzTarget = DeregisterTaskDefinition_nodeParam || '';
                } else {
                    DeregisterTaskDefinition_parameters.xAmzTarget = RED.util.getMessageProperty(msg, DeregisterTaskDefinition_nodeParam);
                }
                DeregisterTaskDefinition_parameters.xAmzTarget = !!DeregisterTaskDefinition_parameters.xAmzTarget ? DeregisterTaskDefinition_parameters.xAmzTarget : msg.payload;
                
                DeregisterTaskDefinition_nodeParam = node.DeregisterTaskDefinition_xAmzContentSha256;
                DeregisterTaskDefinition_nodeParamType = node.DeregisterTaskDefinition_xAmzContentSha256Type;
                if (DeregisterTaskDefinition_nodeParamType === 'str') {
                    DeregisterTaskDefinition_parameters.xAmzContentSha256 = DeregisterTaskDefinition_nodeParam || '';
                } else {
                    DeregisterTaskDefinition_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, DeregisterTaskDefinition_nodeParam);
                }
                DeregisterTaskDefinition_parameters.xAmzContentSha256 = !!DeregisterTaskDefinition_parameters.xAmzContentSha256 ? DeregisterTaskDefinition_parameters.xAmzContentSha256 : msg.payload;
                
                DeregisterTaskDefinition_nodeParam = node.DeregisterTaskDefinition_xAmzDate;
                DeregisterTaskDefinition_nodeParamType = node.DeregisterTaskDefinition_xAmzDateType;
                if (DeregisterTaskDefinition_nodeParamType === 'str') {
                    DeregisterTaskDefinition_parameters.xAmzDate = DeregisterTaskDefinition_nodeParam || '';
                } else {
                    DeregisterTaskDefinition_parameters.xAmzDate = RED.util.getMessageProperty(msg, DeregisterTaskDefinition_nodeParam);
                }
                DeregisterTaskDefinition_parameters.xAmzDate = !!DeregisterTaskDefinition_parameters.xAmzDate ? DeregisterTaskDefinition_parameters.xAmzDate : msg.payload;
                
                DeregisterTaskDefinition_nodeParam = node.DeregisterTaskDefinition_xAmzAlgorithm;
                DeregisterTaskDefinition_nodeParamType = node.DeregisterTaskDefinition_xAmzAlgorithmType;
                if (DeregisterTaskDefinition_nodeParamType === 'str') {
                    DeregisterTaskDefinition_parameters.xAmzAlgorithm = DeregisterTaskDefinition_nodeParam || '';
                } else {
                    DeregisterTaskDefinition_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, DeregisterTaskDefinition_nodeParam);
                }
                DeregisterTaskDefinition_parameters.xAmzAlgorithm = !!DeregisterTaskDefinition_parameters.xAmzAlgorithm ? DeregisterTaskDefinition_parameters.xAmzAlgorithm : msg.payload;
                
                DeregisterTaskDefinition_nodeParam = node.DeregisterTaskDefinition_xAmzCredential;
                DeregisterTaskDefinition_nodeParamType = node.DeregisterTaskDefinition_xAmzCredentialType;
                if (DeregisterTaskDefinition_nodeParamType === 'str') {
                    DeregisterTaskDefinition_parameters.xAmzCredential = DeregisterTaskDefinition_nodeParam || '';
                } else {
                    DeregisterTaskDefinition_parameters.xAmzCredential = RED.util.getMessageProperty(msg, DeregisterTaskDefinition_nodeParam);
                }
                DeregisterTaskDefinition_parameters.xAmzCredential = !!DeregisterTaskDefinition_parameters.xAmzCredential ? DeregisterTaskDefinition_parameters.xAmzCredential : msg.payload;
                
                DeregisterTaskDefinition_nodeParam = node.DeregisterTaskDefinition_xAmzSecurityToken;
                DeregisterTaskDefinition_nodeParamType = node.DeregisterTaskDefinition_xAmzSecurityTokenType;
                if (DeregisterTaskDefinition_nodeParamType === 'str') {
                    DeregisterTaskDefinition_parameters.xAmzSecurityToken = DeregisterTaskDefinition_nodeParam || '';
                } else {
                    DeregisterTaskDefinition_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, DeregisterTaskDefinition_nodeParam);
                }
                DeregisterTaskDefinition_parameters.xAmzSecurityToken = !!DeregisterTaskDefinition_parameters.xAmzSecurityToken ? DeregisterTaskDefinition_parameters.xAmzSecurityToken : msg.payload;
                
                DeregisterTaskDefinition_nodeParam = node.DeregisterTaskDefinition_xAmzSignature;
                DeregisterTaskDefinition_nodeParamType = node.DeregisterTaskDefinition_xAmzSignatureType;
                if (DeregisterTaskDefinition_nodeParamType === 'str') {
                    DeregisterTaskDefinition_parameters.xAmzSignature = DeregisterTaskDefinition_nodeParam || '';
                } else {
                    DeregisterTaskDefinition_parameters.xAmzSignature = RED.util.getMessageProperty(msg, DeregisterTaskDefinition_nodeParam);
                }
                DeregisterTaskDefinition_parameters.xAmzSignature = !!DeregisterTaskDefinition_parameters.xAmzSignature ? DeregisterTaskDefinition_parameters.xAmzSignature : msg.payload;
                
                DeregisterTaskDefinition_nodeParam = node.DeregisterTaskDefinition_xAmzSignedHeaders;
                DeregisterTaskDefinition_nodeParamType = node.DeregisterTaskDefinition_xAmzSignedHeadersType;
                if (DeregisterTaskDefinition_nodeParamType === 'str') {
                    DeregisterTaskDefinition_parameters.xAmzSignedHeaders = DeregisterTaskDefinition_nodeParam || '';
                } else {
                    DeregisterTaskDefinition_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, DeregisterTaskDefinition_nodeParam);
                }
                DeregisterTaskDefinition_parameters.xAmzSignedHeaders = !!DeregisterTaskDefinition_parameters.xAmzSignedHeaders ? DeregisterTaskDefinition_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.DeregisterTaskDefinition(DeregisterTaskDefinition_parameters);
            }
            if (!errorFlag && node.method === 'DescribeClusters') {
                var DescribeClusters_parameters = [];
                var DescribeClusters_nodeParam;
                var DescribeClusters_nodeParamType;

                if (typeof msg.payload === 'object') {
                    DescribeClusters_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                DescribeClusters_nodeParam = node.DescribeClusters_xAmzTarget;
                DescribeClusters_nodeParamType = node.DescribeClusters_xAmzTargetType;
                if (DescribeClusters_nodeParamType === 'str') {
                    DescribeClusters_parameters.xAmzTarget = DescribeClusters_nodeParam || '';
                } else {
                    DescribeClusters_parameters.xAmzTarget = RED.util.getMessageProperty(msg, DescribeClusters_nodeParam);
                }
                DescribeClusters_parameters.xAmzTarget = !!DescribeClusters_parameters.xAmzTarget ? DescribeClusters_parameters.xAmzTarget : msg.payload;
                
                DescribeClusters_nodeParam = node.DescribeClusters_xAmzContentSha256;
                DescribeClusters_nodeParamType = node.DescribeClusters_xAmzContentSha256Type;
                if (DescribeClusters_nodeParamType === 'str') {
                    DescribeClusters_parameters.xAmzContentSha256 = DescribeClusters_nodeParam || '';
                } else {
                    DescribeClusters_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, DescribeClusters_nodeParam);
                }
                DescribeClusters_parameters.xAmzContentSha256 = !!DescribeClusters_parameters.xAmzContentSha256 ? DescribeClusters_parameters.xAmzContentSha256 : msg.payload;
                
                DescribeClusters_nodeParam = node.DescribeClusters_xAmzDate;
                DescribeClusters_nodeParamType = node.DescribeClusters_xAmzDateType;
                if (DescribeClusters_nodeParamType === 'str') {
                    DescribeClusters_parameters.xAmzDate = DescribeClusters_nodeParam || '';
                } else {
                    DescribeClusters_parameters.xAmzDate = RED.util.getMessageProperty(msg, DescribeClusters_nodeParam);
                }
                DescribeClusters_parameters.xAmzDate = !!DescribeClusters_parameters.xAmzDate ? DescribeClusters_parameters.xAmzDate : msg.payload;
                
                DescribeClusters_nodeParam = node.DescribeClusters_xAmzAlgorithm;
                DescribeClusters_nodeParamType = node.DescribeClusters_xAmzAlgorithmType;
                if (DescribeClusters_nodeParamType === 'str') {
                    DescribeClusters_parameters.xAmzAlgorithm = DescribeClusters_nodeParam || '';
                } else {
                    DescribeClusters_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, DescribeClusters_nodeParam);
                }
                DescribeClusters_parameters.xAmzAlgorithm = !!DescribeClusters_parameters.xAmzAlgorithm ? DescribeClusters_parameters.xAmzAlgorithm : msg.payload;
                
                DescribeClusters_nodeParam = node.DescribeClusters_xAmzCredential;
                DescribeClusters_nodeParamType = node.DescribeClusters_xAmzCredentialType;
                if (DescribeClusters_nodeParamType === 'str') {
                    DescribeClusters_parameters.xAmzCredential = DescribeClusters_nodeParam || '';
                } else {
                    DescribeClusters_parameters.xAmzCredential = RED.util.getMessageProperty(msg, DescribeClusters_nodeParam);
                }
                DescribeClusters_parameters.xAmzCredential = !!DescribeClusters_parameters.xAmzCredential ? DescribeClusters_parameters.xAmzCredential : msg.payload;
                
                DescribeClusters_nodeParam = node.DescribeClusters_xAmzSecurityToken;
                DescribeClusters_nodeParamType = node.DescribeClusters_xAmzSecurityTokenType;
                if (DescribeClusters_nodeParamType === 'str') {
                    DescribeClusters_parameters.xAmzSecurityToken = DescribeClusters_nodeParam || '';
                } else {
                    DescribeClusters_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, DescribeClusters_nodeParam);
                }
                DescribeClusters_parameters.xAmzSecurityToken = !!DescribeClusters_parameters.xAmzSecurityToken ? DescribeClusters_parameters.xAmzSecurityToken : msg.payload;
                
                DescribeClusters_nodeParam = node.DescribeClusters_xAmzSignature;
                DescribeClusters_nodeParamType = node.DescribeClusters_xAmzSignatureType;
                if (DescribeClusters_nodeParamType === 'str') {
                    DescribeClusters_parameters.xAmzSignature = DescribeClusters_nodeParam || '';
                } else {
                    DescribeClusters_parameters.xAmzSignature = RED.util.getMessageProperty(msg, DescribeClusters_nodeParam);
                }
                DescribeClusters_parameters.xAmzSignature = !!DescribeClusters_parameters.xAmzSignature ? DescribeClusters_parameters.xAmzSignature : msg.payload;
                
                DescribeClusters_nodeParam = node.DescribeClusters_xAmzSignedHeaders;
                DescribeClusters_nodeParamType = node.DescribeClusters_xAmzSignedHeadersType;
                if (DescribeClusters_nodeParamType === 'str') {
                    DescribeClusters_parameters.xAmzSignedHeaders = DescribeClusters_nodeParam || '';
                } else {
                    DescribeClusters_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, DescribeClusters_nodeParam);
                }
                DescribeClusters_parameters.xAmzSignedHeaders = !!DescribeClusters_parameters.xAmzSignedHeaders ? DescribeClusters_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.DescribeClusters(DescribeClusters_parameters);
            }
            if (!errorFlag && node.method === 'DescribeContainerInstances') {
                var DescribeContainerInstances_parameters = [];
                var DescribeContainerInstances_nodeParam;
                var DescribeContainerInstances_nodeParamType;

                if (typeof msg.payload === 'object') {
                    DescribeContainerInstances_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                DescribeContainerInstances_nodeParam = node.DescribeContainerInstances_xAmzTarget;
                DescribeContainerInstances_nodeParamType = node.DescribeContainerInstances_xAmzTargetType;
                if (DescribeContainerInstances_nodeParamType === 'str') {
                    DescribeContainerInstances_parameters.xAmzTarget = DescribeContainerInstances_nodeParam || '';
                } else {
                    DescribeContainerInstances_parameters.xAmzTarget = RED.util.getMessageProperty(msg, DescribeContainerInstances_nodeParam);
                }
                DescribeContainerInstances_parameters.xAmzTarget = !!DescribeContainerInstances_parameters.xAmzTarget ? DescribeContainerInstances_parameters.xAmzTarget : msg.payload;
                
                DescribeContainerInstances_nodeParam = node.DescribeContainerInstances_xAmzContentSha256;
                DescribeContainerInstances_nodeParamType = node.DescribeContainerInstances_xAmzContentSha256Type;
                if (DescribeContainerInstances_nodeParamType === 'str') {
                    DescribeContainerInstances_parameters.xAmzContentSha256 = DescribeContainerInstances_nodeParam || '';
                } else {
                    DescribeContainerInstances_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, DescribeContainerInstances_nodeParam);
                }
                DescribeContainerInstances_parameters.xAmzContentSha256 = !!DescribeContainerInstances_parameters.xAmzContentSha256 ? DescribeContainerInstances_parameters.xAmzContentSha256 : msg.payload;
                
                DescribeContainerInstances_nodeParam = node.DescribeContainerInstances_xAmzDate;
                DescribeContainerInstances_nodeParamType = node.DescribeContainerInstances_xAmzDateType;
                if (DescribeContainerInstances_nodeParamType === 'str') {
                    DescribeContainerInstances_parameters.xAmzDate = DescribeContainerInstances_nodeParam || '';
                } else {
                    DescribeContainerInstances_parameters.xAmzDate = RED.util.getMessageProperty(msg, DescribeContainerInstances_nodeParam);
                }
                DescribeContainerInstances_parameters.xAmzDate = !!DescribeContainerInstances_parameters.xAmzDate ? DescribeContainerInstances_parameters.xAmzDate : msg.payload;
                
                DescribeContainerInstances_nodeParam = node.DescribeContainerInstances_xAmzAlgorithm;
                DescribeContainerInstances_nodeParamType = node.DescribeContainerInstances_xAmzAlgorithmType;
                if (DescribeContainerInstances_nodeParamType === 'str') {
                    DescribeContainerInstances_parameters.xAmzAlgorithm = DescribeContainerInstances_nodeParam || '';
                } else {
                    DescribeContainerInstances_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, DescribeContainerInstances_nodeParam);
                }
                DescribeContainerInstances_parameters.xAmzAlgorithm = !!DescribeContainerInstances_parameters.xAmzAlgorithm ? DescribeContainerInstances_parameters.xAmzAlgorithm : msg.payload;
                
                DescribeContainerInstances_nodeParam = node.DescribeContainerInstances_xAmzCredential;
                DescribeContainerInstances_nodeParamType = node.DescribeContainerInstances_xAmzCredentialType;
                if (DescribeContainerInstances_nodeParamType === 'str') {
                    DescribeContainerInstances_parameters.xAmzCredential = DescribeContainerInstances_nodeParam || '';
                } else {
                    DescribeContainerInstances_parameters.xAmzCredential = RED.util.getMessageProperty(msg, DescribeContainerInstances_nodeParam);
                }
                DescribeContainerInstances_parameters.xAmzCredential = !!DescribeContainerInstances_parameters.xAmzCredential ? DescribeContainerInstances_parameters.xAmzCredential : msg.payload;
                
                DescribeContainerInstances_nodeParam = node.DescribeContainerInstances_xAmzSecurityToken;
                DescribeContainerInstances_nodeParamType = node.DescribeContainerInstances_xAmzSecurityTokenType;
                if (DescribeContainerInstances_nodeParamType === 'str') {
                    DescribeContainerInstances_parameters.xAmzSecurityToken = DescribeContainerInstances_nodeParam || '';
                } else {
                    DescribeContainerInstances_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, DescribeContainerInstances_nodeParam);
                }
                DescribeContainerInstances_parameters.xAmzSecurityToken = !!DescribeContainerInstances_parameters.xAmzSecurityToken ? DescribeContainerInstances_parameters.xAmzSecurityToken : msg.payload;
                
                DescribeContainerInstances_nodeParam = node.DescribeContainerInstances_xAmzSignature;
                DescribeContainerInstances_nodeParamType = node.DescribeContainerInstances_xAmzSignatureType;
                if (DescribeContainerInstances_nodeParamType === 'str') {
                    DescribeContainerInstances_parameters.xAmzSignature = DescribeContainerInstances_nodeParam || '';
                } else {
                    DescribeContainerInstances_parameters.xAmzSignature = RED.util.getMessageProperty(msg, DescribeContainerInstances_nodeParam);
                }
                DescribeContainerInstances_parameters.xAmzSignature = !!DescribeContainerInstances_parameters.xAmzSignature ? DescribeContainerInstances_parameters.xAmzSignature : msg.payload;
                
                DescribeContainerInstances_nodeParam = node.DescribeContainerInstances_xAmzSignedHeaders;
                DescribeContainerInstances_nodeParamType = node.DescribeContainerInstances_xAmzSignedHeadersType;
                if (DescribeContainerInstances_nodeParamType === 'str') {
                    DescribeContainerInstances_parameters.xAmzSignedHeaders = DescribeContainerInstances_nodeParam || '';
                } else {
                    DescribeContainerInstances_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, DescribeContainerInstances_nodeParam);
                }
                DescribeContainerInstances_parameters.xAmzSignedHeaders = !!DescribeContainerInstances_parameters.xAmzSignedHeaders ? DescribeContainerInstances_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.DescribeContainerInstances(DescribeContainerInstances_parameters);
            }
            if (!errorFlag && node.method === 'DescribeServices') {
                var DescribeServices_parameters = [];
                var DescribeServices_nodeParam;
                var DescribeServices_nodeParamType;

                if (typeof msg.payload === 'object') {
                    DescribeServices_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                DescribeServices_nodeParam = node.DescribeServices_xAmzTarget;
                DescribeServices_nodeParamType = node.DescribeServices_xAmzTargetType;
                if (DescribeServices_nodeParamType === 'str') {
                    DescribeServices_parameters.xAmzTarget = DescribeServices_nodeParam || '';
                } else {
                    DescribeServices_parameters.xAmzTarget = RED.util.getMessageProperty(msg, DescribeServices_nodeParam);
                }
                DescribeServices_parameters.xAmzTarget = !!DescribeServices_parameters.xAmzTarget ? DescribeServices_parameters.xAmzTarget : msg.payload;
                
                DescribeServices_nodeParam = node.DescribeServices_xAmzContentSha256;
                DescribeServices_nodeParamType = node.DescribeServices_xAmzContentSha256Type;
                if (DescribeServices_nodeParamType === 'str') {
                    DescribeServices_parameters.xAmzContentSha256 = DescribeServices_nodeParam || '';
                } else {
                    DescribeServices_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, DescribeServices_nodeParam);
                }
                DescribeServices_parameters.xAmzContentSha256 = !!DescribeServices_parameters.xAmzContentSha256 ? DescribeServices_parameters.xAmzContentSha256 : msg.payload;
                
                DescribeServices_nodeParam = node.DescribeServices_xAmzDate;
                DescribeServices_nodeParamType = node.DescribeServices_xAmzDateType;
                if (DescribeServices_nodeParamType === 'str') {
                    DescribeServices_parameters.xAmzDate = DescribeServices_nodeParam || '';
                } else {
                    DescribeServices_parameters.xAmzDate = RED.util.getMessageProperty(msg, DescribeServices_nodeParam);
                }
                DescribeServices_parameters.xAmzDate = !!DescribeServices_parameters.xAmzDate ? DescribeServices_parameters.xAmzDate : msg.payload;
                
                DescribeServices_nodeParam = node.DescribeServices_xAmzAlgorithm;
                DescribeServices_nodeParamType = node.DescribeServices_xAmzAlgorithmType;
                if (DescribeServices_nodeParamType === 'str') {
                    DescribeServices_parameters.xAmzAlgorithm = DescribeServices_nodeParam || '';
                } else {
                    DescribeServices_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, DescribeServices_nodeParam);
                }
                DescribeServices_parameters.xAmzAlgorithm = !!DescribeServices_parameters.xAmzAlgorithm ? DescribeServices_parameters.xAmzAlgorithm : msg.payload;
                
                DescribeServices_nodeParam = node.DescribeServices_xAmzCredential;
                DescribeServices_nodeParamType = node.DescribeServices_xAmzCredentialType;
                if (DescribeServices_nodeParamType === 'str') {
                    DescribeServices_parameters.xAmzCredential = DescribeServices_nodeParam || '';
                } else {
                    DescribeServices_parameters.xAmzCredential = RED.util.getMessageProperty(msg, DescribeServices_nodeParam);
                }
                DescribeServices_parameters.xAmzCredential = !!DescribeServices_parameters.xAmzCredential ? DescribeServices_parameters.xAmzCredential : msg.payload;
                
                DescribeServices_nodeParam = node.DescribeServices_xAmzSecurityToken;
                DescribeServices_nodeParamType = node.DescribeServices_xAmzSecurityTokenType;
                if (DescribeServices_nodeParamType === 'str') {
                    DescribeServices_parameters.xAmzSecurityToken = DescribeServices_nodeParam || '';
                } else {
                    DescribeServices_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, DescribeServices_nodeParam);
                }
                DescribeServices_parameters.xAmzSecurityToken = !!DescribeServices_parameters.xAmzSecurityToken ? DescribeServices_parameters.xAmzSecurityToken : msg.payload;
                
                DescribeServices_nodeParam = node.DescribeServices_xAmzSignature;
                DescribeServices_nodeParamType = node.DescribeServices_xAmzSignatureType;
                if (DescribeServices_nodeParamType === 'str') {
                    DescribeServices_parameters.xAmzSignature = DescribeServices_nodeParam || '';
                } else {
                    DescribeServices_parameters.xAmzSignature = RED.util.getMessageProperty(msg, DescribeServices_nodeParam);
                }
                DescribeServices_parameters.xAmzSignature = !!DescribeServices_parameters.xAmzSignature ? DescribeServices_parameters.xAmzSignature : msg.payload;
                
                DescribeServices_nodeParam = node.DescribeServices_xAmzSignedHeaders;
                DescribeServices_nodeParamType = node.DescribeServices_xAmzSignedHeadersType;
                if (DescribeServices_nodeParamType === 'str') {
                    DescribeServices_parameters.xAmzSignedHeaders = DescribeServices_nodeParam || '';
                } else {
                    DescribeServices_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, DescribeServices_nodeParam);
                }
                DescribeServices_parameters.xAmzSignedHeaders = !!DescribeServices_parameters.xAmzSignedHeaders ? DescribeServices_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.DescribeServices(DescribeServices_parameters);
            }
            if (!errorFlag && node.method === 'DescribeTaskDefinition') {
                var DescribeTaskDefinition_parameters = [];
                var DescribeTaskDefinition_nodeParam;
                var DescribeTaskDefinition_nodeParamType;

                if (typeof msg.payload === 'object') {
                    DescribeTaskDefinition_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                DescribeTaskDefinition_nodeParam = node.DescribeTaskDefinition_xAmzTarget;
                DescribeTaskDefinition_nodeParamType = node.DescribeTaskDefinition_xAmzTargetType;
                if (DescribeTaskDefinition_nodeParamType === 'str') {
                    DescribeTaskDefinition_parameters.xAmzTarget = DescribeTaskDefinition_nodeParam || '';
                } else {
                    DescribeTaskDefinition_parameters.xAmzTarget = RED.util.getMessageProperty(msg, DescribeTaskDefinition_nodeParam);
                }
                DescribeTaskDefinition_parameters.xAmzTarget = !!DescribeTaskDefinition_parameters.xAmzTarget ? DescribeTaskDefinition_parameters.xAmzTarget : msg.payload;
                
                DescribeTaskDefinition_nodeParam = node.DescribeTaskDefinition_xAmzContentSha256;
                DescribeTaskDefinition_nodeParamType = node.DescribeTaskDefinition_xAmzContentSha256Type;
                if (DescribeTaskDefinition_nodeParamType === 'str') {
                    DescribeTaskDefinition_parameters.xAmzContentSha256 = DescribeTaskDefinition_nodeParam || '';
                } else {
                    DescribeTaskDefinition_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, DescribeTaskDefinition_nodeParam);
                }
                DescribeTaskDefinition_parameters.xAmzContentSha256 = !!DescribeTaskDefinition_parameters.xAmzContentSha256 ? DescribeTaskDefinition_parameters.xAmzContentSha256 : msg.payload;
                
                DescribeTaskDefinition_nodeParam = node.DescribeTaskDefinition_xAmzDate;
                DescribeTaskDefinition_nodeParamType = node.DescribeTaskDefinition_xAmzDateType;
                if (DescribeTaskDefinition_nodeParamType === 'str') {
                    DescribeTaskDefinition_parameters.xAmzDate = DescribeTaskDefinition_nodeParam || '';
                } else {
                    DescribeTaskDefinition_parameters.xAmzDate = RED.util.getMessageProperty(msg, DescribeTaskDefinition_nodeParam);
                }
                DescribeTaskDefinition_parameters.xAmzDate = !!DescribeTaskDefinition_parameters.xAmzDate ? DescribeTaskDefinition_parameters.xAmzDate : msg.payload;
                
                DescribeTaskDefinition_nodeParam = node.DescribeTaskDefinition_xAmzAlgorithm;
                DescribeTaskDefinition_nodeParamType = node.DescribeTaskDefinition_xAmzAlgorithmType;
                if (DescribeTaskDefinition_nodeParamType === 'str') {
                    DescribeTaskDefinition_parameters.xAmzAlgorithm = DescribeTaskDefinition_nodeParam || '';
                } else {
                    DescribeTaskDefinition_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, DescribeTaskDefinition_nodeParam);
                }
                DescribeTaskDefinition_parameters.xAmzAlgorithm = !!DescribeTaskDefinition_parameters.xAmzAlgorithm ? DescribeTaskDefinition_parameters.xAmzAlgorithm : msg.payload;
                
                DescribeTaskDefinition_nodeParam = node.DescribeTaskDefinition_xAmzCredential;
                DescribeTaskDefinition_nodeParamType = node.DescribeTaskDefinition_xAmzCredentialType;
                if (DescribeTaskDefinition_nodeParamType === 'str') {
                    DescribeTaskDefinition_parameters.xAmzCredential = DescribeTaskDefinition_nodeParam || '';
                } else {
                    DescribeTaskDefinition_parameters.xAmzCredential = RED.util.getMessageProperty(msg, DescribeTaskDefinition_nodeParam);
                }
                DescribeTaskDefinition_parameters.xAmzCredential = !!DescribeTaskDefinition_parameters.xAmzCredential ? DescribeTaskDefinition_parameters.xAmzCredential : msg.payload;
                
                DescribeTaskDefinition_nodeParam = node.DescribeTaskDefinition_xAmzSecurityToken;
                DescribeTaskDefinition_nodeParamType = node.DescribeTaskDefinition_xAmzSecurityTokenType;
                if (DescribeTaskDefinition_nodeParamType === 'str') {
                    DescribeTaskDefinition_parameters.xAmzSecurityToken = DescribeTaskDefinition_nodeParam || '';
                } else {
                    DescribeTaskDefinition_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, DescribeTaskDefinition_nodeParam);
                }
                DescribeTaskDefinition_parameters.xAmzSecurityToken = !!DescribeTaskDefinition_parameters.xAmzSecurityToken ? DescribeTaskDefinition_parameters.xAmzSecurityToken : msg.payload;
                
                DescribeTaskDefinition_nodeParam = node.DescribeTaskDefinition_xAmzSignature;
                DescribeTaskDefinition_nodeParamType = node.DescribeTaskDefinition_xAmzSignatureType;
                if (DescribeTaskDefinition_nodeParamType === 'str') {
                    DescribeTaskDefinition_parameters.xAmzSignature = DescribeTaskDefinition_nodeParam || '';
                } else {
                    DescribeTaskDefinition_parameters.xAmzSignature = RED.util.getMessageProperty(msg, DescribeTaskDefinition_nodeParam);
                }
                DescribeTaskDefinition_parameters.xAmzSignature = !!DescribeTaskDefinition_parameters.xAmzSignature ? DescribeTaskDefinition_parameters.xAmzSignature : msg.payload;
                
                DescribeTaskDefinition_nodeParam = node.DescribeTaskDefinition_xAmzSignedHeaders;
                DescribeTaskDefinition_nodeParamType = node.DescribeTaskDefinition_xAmzSignedHeadersType;
                if (DescribeTaskDefinition_nodeParamType === 'str') {
                    DescribeTaskDefinition_parameters.xAmzSignedHeaders = DescribeTaskDefinition_nodeParam || '';
                } else {
                    DescribeTaskDefinition_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, DescribeTaskDefinition_nodeParam);
                }
                DescribeTaskDefinition_parameters.xAmzSignedHeaders = !!DescribeTaskDefinition_parameters.xAmzSignedHeaders ? DescribeTaskDefinition_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.DescribeTaskDefinition(DescribeTaskDefinition_parameters);
            }
            if (!errorFlag && node.method === 'DescribeTaskSets') {
                var DescribeTaskSets_parameters = [];
                var DescribeTaskSets_nodeParam;
                var DescribeTaskSets_nodeParamType;

                if (typeof msg.payload === 'object') {
                    DescribeTaskSets_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                DescribeTaskSets_nodeParam = node.DescribeTaskSets_xAmzTarget;
                DescribeTaskSets_nodeParamType = node.DescribeTaskSets_xAmzTargetType;
                if (DescribeTaskSets_nodeParamType === 'str') {
                    DescribeTaskSets_parameters.xAmzTarget = DescribeTaskSets_nodeParam || '';
                } else {
                    DescribeTaskSets_parameters.xAmzTarget = RED.util.getMessageProperty(msg, DescribeTaskSets_nodeParam);
                }
                DescribeTaskSets_parameters.xAmzTarget = !!DescribeTaskSets_parameters.xAmzTarget ? DescribeTaskSets_parameters.xAmzTarget : msg.payload;
                
                DescribeTaskSets_nodeParam = node.DescribeTaskSets_xAmzContentSha256;
                DescribeTaskSets_nodeParamType = node.DescribeTaskSets_xAmzContentSha256Type;
                if (DescribeTaskSets_nodeParamType === 'str') {
                    DescribeTaskSets_parameters.xAmzContentSha256 = DescribeTaskSets_nodeParam || '';
                } else {
                    DescribeTaskSets_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, DescribeTaskSets_nodeParam);
                }
                DescribeTaskSets_parameters.xAmzContentSha256 = !!DescribeTaskSets_parameters.xAmzContentSha256 ? DescribeTaskSets_parameters.xAmzContentSha256 : msg.payload;
                
                DescribeTaskSets_nodeParam = node.DescribeTaskSets_xAmzDate;
                DescribeTaskSets_nodeParamType = node.DescribeTaskSets_xAmzDateType;
                if (DescribeTaskSets_nodeParamType === 'str') {
                    DescribeTaskSets_parameters.xAmzDate = DescribeTaskSets_nodeParam || '';
                } else {
                    DescribeTaskSets_parameters.xAmzDate = RED.util.getMessageProperty(msg, DescribeTaskSets_nodeParam);
                }
                DescribeTaskSets_parameters.xAmzDate = !!DescribeTaskSets_parameters.xAmzDate ? DescribeTaskSets_parameters.xAmzDate : msg.payload;
                
                DescribeTaskSets_nodeParam = node.DescribeTaskSets_xAmzAlgorithm;
                DescribeTaskSets_nodeParamType = node.DescribeTaskSets_xAmzAlgorithmType;
                if (DescribeTaskSets_nodeParamType === 'str') {
                    DescribeTaskSets_parameters.xAmzAlgorithm = DescribeTaskSets_nodeParam || '';
                } else {
                    DescribeTaskSets_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, DescribeTaskSets_nodeParam);
                }
                DescribeTaskSets_parameters.xAmzAlgorithm = !!DescribeTaskSets_parameters.xAmzAlgorithm ? DescribeTaskSets_parameters.xAmzAlgorithm : msg.payload;
                
                DescribeTaskSets_nodeParam = node.DescribeTaskSets_xAmzCredential;
                DescribeTaskSets_nodeParamType = node.DescribeTaskSets_xAmzCredentialType;
                if (DescribeTaskSets_nodeParamType === 'str') {
                    DescribeTaskSets_parameters.xAmzCredential = DescribeTaskSets_nodeParam || '';
                } else {
                    DescribeTaskSets_parameters.xAmzCredential = RED.util.getMessageProperty(msg, DescribeTaskSets_nodeParam);
                }
                DescribeTaskSets_parameters.xAmzCredential = !!DescribeTaskSets_parameters.xAmzCredential ? DescribeTaskSets_parameters.xAmzCredential : msg.payload;
                
                DescribeTaskSets_nodeParam = node.DescribeTaskSets_xAmzSecurityToken;
                DescribeTaskSets_nodeParamType = node.DescribeTaskSets_xAmzSecurityTokenType;
                if (DescribeTaskSets_nodeParamType === 'str') {
                    DescribeTaskSets_parameters.xAmzSecurityToken = DescribeTaskSets_nodeParam || '';
                } else {
                    DescribeTaskSets_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, DescribeTaskSets_nodeParam);
                }
                DescribeTaskSets_parameters.xAmzSecurityToken = !!DescribeTaskSets_parameters.xAmzSecurityToken ? DescribeTaskSets_parameters.xAmzSecurityToken : msg.payload;
                
                DescribeTaskSets_nodeParam = node.DescribeTaskSets_xAmzSignature;
                DescribeTaskSets_nodeParamType = node.DescribeTaskSets_xAmzSignatureType;
                if (DescribeTaskSets_nodeParamType === 'str') {
                    DescribeTaskSets_parameters.xAmzSignature = DescribeTaskSets_nodeParam || '';
                } else {
                    DescribeTaskSets_parameters.xAmzSignature = RED.util.getMessageProperty(msg, DescribeTaskSets_nodeParam);
                }
                DescribeTaskSets_parameters.xAmzSignature = !!DescribeTaskSets_parameters.xAmzSignature ? DescribeTaskSets_parameters.xAmzSignature : msg.payload;
                
                DescribeTaskSets_nodeParam = node.DescribeTaskSets_xAmzSignedHeaders;
                DescribeTaskSets_nodeParamType = node.DescribeTaskSets_xAmzSignedHeadersType;
                if (DescribeTaskSets_nodeParamType === 'str') {
                    DescribeTaskSets_parameters.xAmzSignedHeaders = DescribeTaskSets_nodeParam || '';
                } else {
                    DescribeTaskSets_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, DescribeTaskSets_nodeParam);
                }
                DescribeTaskSets_parameters.xAmzSignedHeaders = !!DescribeTaskSets_parameters.xAmzSignedHeaders ? DescribeTaskSets_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.DescribeTaskSets(DescribeTaskSets_parameters);
            }
            if (!errorFlag && node.method === 'DescribeTasks') {
                var DescribeTasks_parameters = [];
                var DescribeTasks_nodeParam;
                var DescribeTasks_nodeParamType;

                if (typeof msg.payload === 'object') {
                    DescribeTasks_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                DescribeTasks_nodeParam = node.DescribeTasks_xAmzTarget;
                DescribeTasks_nodeParamType = node.DescribeTasks_xAmzTargetType;
                if (DescribeTasks_nodeParamType === 'str') {
                    DescribeTasks_parameters.xAmzTarget = DescribeTasks_nodeParam || '';
                } else {
                    DescribeTasks_parameters.xAmzTarget = RED.util.getMessageProperty(msg, DescribeTasks_nodeParam);
                }
                DescribeTasks_parameters.xAmzTarget = !!DescribeTasks_parameters.xAmzTarget ? DescribeTasks_parameters.xAmzTarget : msg.payload;
                
                DescribeTasks_nodeParam = node.DescribeTasks_xAmzContentSha256;
                DescribeTasks_nodeParamType = node.DescribeTasks_xAmzContentSha256Type;
                if (DescribeTasks_nodeParamType === 'str') {
                    DescribeTasks_parameters.xAmzContentSha256 = DescribeTasks_nodeParam || '';
                } else {
                    DescribeTasks_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, DescribeTasks_nodeParam);
                }
                DescribeTasks_parameters.xAmzContentSha256 = !!DescribeTasks_parameters.xAmzContentSha256 ? DescribeTasks_parameters.xAmzContentSha256 : msg.payload;
                
                DescribeTasks_nodeParam = node.DescribeTasks_xAmzDate;
                DescribeTasks_nodeParamType = node.DescribeTasks_xAmzDateType;
                if (DescribeTasks_nodeParamType === 'str') {
                    DescribeTasks_parameters.xAmzDate = DescribeTasks_nodeParam || '';
                } else {
                    DescribeTasks_parameters.xAmzDate = RED.util.getMessageProperty(msg, DescribeTasks_nodeParam);
                }
                DescribeTasks_parameters.xAmzDate = !!DescribeTasks_parameters.xAmzDate ? DescribeTasks_parameters.xAmzDate : msg.payload;
                
                DescribeTasks_nodeParam = node.DescribeTasks_xAmzAlgorithm;
                DescribeTasks_nodeParamType = node.DescribeTasks_xAmzAlgorithmType;
                if (DescribeTasks_nodeParamType === 'str') {
                    DescribeTasks_parameters.xAmzAlgorithm = DescribeTasks_nodeParam || '';
                } else {
                    DescribeTasks_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, DescribeTasks_nodeParam);
                }
                DescribeTasks_parameters.xAmzAlgorithm = !!DescribeTasks_parameters.xAmzAlgorithm ? DescribeTasks_parameters.xAmzAlgorithm : msg.payload;
                
                DescribeTasks_nodeParam = node.DescribeTasks_xAmzCredential;
                DescribeTasks_nodeParamType = node.DescribeTasks_xAmzCredentialType;
                if (DescribeTasks_nodeParamType === 'str') {
                    DescribeTasks_parameters.xAmzCredential = DescribeTasks_nodeParam || '';
                } else {
                    DescribeTasks_parameters.xAmzCredential = RED.util.getMessageProperty(msg, DescribeTasks_nodeParam);
                }
                DescribeTasks_parameters.xAmzCredential = !!DescribeTasks_parameters.xAmzCredential ? DescribeTasks_parameters.xAmzCredential : msg.payload;
                
                DescribeTasks_nodeParam = node.DescribeTasks_xAmzSecurityToken;
                DescribeTasks_nodeParamType = node.DescribeTasks_xAmzSecurityTokenType;
                if (DescribeTasks_nodeParamType === 'str') {
                    DescribeTasks_parameters.xAmzSecurityToken = DescribeTasks_nodeParam || '';
                } else {
                    DescribeTasks_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, DescribeTasks_nodeParam);
                }
                DescribeTasks_parameters.xAmzSecurityToken = !!DescribeTasks_parameters.xAmzSecurityToken ? DescribeTasks_parameters.xAmzSecurityToken : msg.payload;
                
                DescribeTasks_nodeParam = node.DescribeTasks_xAmzSignature;
                DescribeTasks_nodeParamType = node.DescribeTasks_xAmzSignatureType;
                if (DescribeTasks_nodeParamType === 'str') {
                    DescribeTasks_parameters.xAmzSignature = DescribeTasks_nodeParam || '';
                } else {
                    DescribeTasks_parameters.xAmzSignature = RED.util.getMessageProperty(msg, DescribeTasks_nodeParam);
                }
                DescribeTasks_parameters.xAmzSignature = !!DescribeTasks_parameters.xAmzSignature ? DescribeTasks_parameters.xAmzSignature : msg.payload;
                
                DescribeTasks_nodeParam = node.DescribeTasks_xAmzSignedHeaders;
                DescribeTasks_nodeParamType = node.DescribeTasks_xAmzSignedHeadersType;
                if (DescribeTasks_nodeParamType === 'str') {
                    DescribeTasks_parameters.xAmzSignedHeaders = DescribeTasks_nodeParam || '';
                } else {
                    DescribeTasks_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, DescribeTasks_nodeParam);
                }
                DescribeTasks_parameters.xAmzSignedHeaders = !!DescribeTasks_parameters.xAmzSignedHeaders ? DescribeTasks_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.DescribeTasks(DescribeTasks_parameters);
            }
            if (!errorFlag && node.method === 'DiscoverPollEndpoint') {
                var DiscoverPollEndpoint_parameters = [];
                var DiscoverPollEndpoint_nodeParam;
                var DiscoverPollEndpoint_nodeParamType;

                if (typeof msg.payload === 'object') {
                    DiscoverPollEndpoint_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                DiscoverPollEndpoint_nodeParam = node.DiscoverPollEndpoint_xAmzTarget;
                DiscoverPollEndpoint_nodeParamType = node.DiscoverPollEndpoint_xAmzTargetType;
                if (DiscoverPollEndpoint_nodeParamType === 'str') {
                    DiscoverPollEndpoint_parameters.xAmzTarget = DiscoverPollEndpoint_nodeParam || '';
                } else {
                    DiscoverPollEndpoint_parameters.xAmzTarget = RED.util.getMessageProperty(msg, DiscoverPollEndpoint_nodeParam);
                }
                DiscoverPollEndpoint_parameters.xAmzTarget = !!DiscoverPollEndpoint_parameters.xAmzTarget ? DiscoverPollEndpoint_parameters.xAmzTarget : msg.payload;
                
                DiscoverPollEndpoint_nodeParam = node.DiscoverPollEndpoint_xAmzContentSha256;
                DiscoverPollEndpoint_nodeParamType = node.DiscoverPollEndpoint_xAmzContentSha256Type;
                if (DiscoverPollEndpoint_nodeParamType === 'str') {
                    DiscoverPollEndpoint_parameters.xAmzContentSha256 = DiscoverPollEndpoint_nodeParam || '';
                } else {
                    DiscoverPollEndpoint_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, DiscoverPollEndpoint_nodeParam);
                }
                DiscoverPollEndpoint_parameters.xAmzContentSha256 = !!DiscoverPollEndpoint_parameters.xAmzContentSha256 ? DiscoverPollEndpoint_parameters.xAmzContentSha256 : msg.payload;
                
                DiscoverPollEndpoint_nodeParam = node.DiscoverPollEndpoint_xAmzDate;
                DiscoverPollEndpoint_nodeParamType = node.DiscoverPollEndpoint_xAmzDateType;
                if (DiscoverPollEndpoint_nodeParamType === 'str') {
                    DiscoverPollEndpoint_parameters.xAmzDate = DiscoverPollEndpoint_nodeParam || '';
                } else {
                    DiscoverPollEndpoint_parameters.xAmzDate = RED.util.getMessageProperty(msg, DiscoverPollEndpoint_nodeParam);
                }
                DiscoverPollEndpoint_parameters.xAmzDate = !!DiscoverPollEndpoint_parameters.xAmzDate ? DiscoverPollEndpoint_parameters.xAmzDate : msg.payload;
                
                DiscoverPollEndpoint_nodeParam = node.DiscoverPollEndpoint_xAmzAlgorithm;
                DiscoverPollEndpoint_nodeParamType = node.DiscoverPollEndpoint_xAmzAlgorithmType;
                if (DiscoverPollEndpoint_nodeParamType === 'str') {
                    DiscoverPollEndpoint_parameters.xAmzAlgorithm = DiscoverPollEndpoint_nodeParam || '';
                } else {
                    DiscoverPollEndpoint_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, DiscoverPollEndpoint_nodeParam);
                }
                DiscoverPollEndpoint_parameters.xAmzAlgorithm = !!DiscoverPollEndpoint_parameters.xAmzAlgorithm ? DiscoverPollEndpoint_parameters.xAmzAlgorithm : msg.payload;
                
                DiscoverPollEndpoint_nodeParam = node.DiscoverPollEndpoint_xAmzCredential;
                DiscoverPollEndpoint_nodeParamType = node.DiscoverPollEndpoint_xAmzCredentialType;
                if (DiscoverPollEndpoint_nodeParamType === 'str') {
                    DiscoverPollEndpoint_parameters.xAmzCredential = DiscoverPollEndpoint_nodeParam || '';
                } else {
                    DiscoverPollEndpoint_parameters.xAmzCredential = RED.util.getMessageProperty(msg, DiscoverPollEndpoint_nodeParam);
                }
                DiscoverPollEndpoint_parameters.xAmzCredential = !!DiscoverPollEndpoint_parameters.xAmzCredential ? DiscoverPollEndpoint_parameters.xAmzCredential : msg.payload;
                
                DiscoverPollEndpoint_nodeParam = node.DiscoverPollEndpoint_xAmzSecurityToken;
                DiscoverPollEndpoint_nodeParamType = node.DiscoverPollEndpoint_xAmzSecurityTokenType;
                if (DiscoverPollEndpoint_nodeParamType === 'str') {
                    DiscoverPollEndpoint_parameters.xAmzSecurityToken = DiscoverPollEndpoint_nodeParam || '';
                } else {
                    DiscoverPollEndpoint_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, DiscoverPollEndpoint_nodeParam);
                }
                DiscoverPollEndpoint_parameters.xAmzSecurityToken = !!DiscoverPollEndpoint_parameters.xAmzSecurityToken ? DiscoverPollEndpoint_parameters.xAmzSecurityToken : msg.payload;
                
                DiscoverPollEndpoint_nodeParam = node.DiscoverPollEndpoint_xAmzSignature;
                DiscoverPollEndpoint_nodeParamType = node.DiscoverPollEndpoint_xAmzSignatureType;
                if (DiscoverPollEndpoint_nodeParamType === 'str') {
                    DiscoverPollEndpoint_parameters.xAmzSignature = DiscoverPollEndpoint_nodeParam || '';
                } else {
                    DiscoverPollEndpoint_parameters.xAmzSignature = RED.util.getMessageProperty(msg, DiscoverPollEndpoint_nodeParam);
                }
                DiscoverPollEndpoint_parameters.xAmzSignature = !!DiscoverPollEndpoint_parameters.xAmzSignature ? DiscoverPollEndpoint_parameters.xAmzSignature : msg.payload;
                
                DiscoverPollEndpoint_nodeParam = node.DiscoverPollEndpoint_xAmzSignedHeaders;
                DiscoverPollEndpoint_nodeParamType = node.DiscoverPollEndpoint_xAmzSignedHeadersType;
                if (DiscoverPollEndpoint_nodeParamType === 'str') {
                    DiscoverPollEndpoint_parameters.xAmzSignedHeaders = DiscoverPollEndpoint_nodeParam || '';
                } else {
                    DiscoverPollEndpoint_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, DiscoverPollEndpoint_nodeParam);
                }
                DiscoverPollEndpoint_parameters.xAmzSignedHeaders = !!DiscoverPollEndpoint_parameters.xAmzSignedHeaders ? DiscoverPollEndpoint_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.DiscoverPollEndpoint(DiscoverPollEndpoint_parameters);
            }
            if (!errorFlag && node.method === 'ListAccountSettings') {
                var ListAccountSettings_parameters = [];
                var ListAccountSettings_nodeParam;
                var ListAccountSettings_nodeParamType;

                if (typeof msg.payload === 'object') {
                    ListAccountSettings_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                ListAccountSettings_nodeParam = node.ListAccountSettings_xAmzTarget;
                ListAccountSettings_nodeParamType = node.ListAccountSettings_xAmzTargetType;
                if (ListAccountSettings_nodeParamType === 'str') {
                    ListAccountSettings_parameters.xAmzTarget = ListAccountSettings_nodeParam || '';
                } else {
                    ListAccountSettings_parameters.xAmzTarget = RED.util.getMessageProperty(msg, ListAccountSettings_nodeParam);
                }
                ListAccountSettings_parameters.xAmzTarget = !!ListAccountSettings_parameters.xAmzTarget ? ListAccountSettings_parameters.xAmzTarget : msg.payload;
                
                ListAccountSettings_nodeParam = node.ListAccountSettings_xAmzContentSha256;
                ListAccountSettings_nodeParamType = node.ListAccountSettings_xAmzContentSha256Type;
                if (ListAccountSettings_nodeParamType === 'str') {
                    ListAccountSettings_parameters.xAmzContentSha256 = ListAccountSettings_nodeParam || '';
                } else {
                    ListAccountSettings_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, ListAccountSettings_nodeParam);
                }
                ListAccountSettings_parameters.xAmzContentSha256 = !!ListAccountSettings_parameters.xAmzContentSha256 ? ListAccountSettings_parameters.xAmzContentSha256 : msg.payload;
                
                ListAccountSettings_nodeParam = node.ListAccountSettings_xAmzDate;
                ListAccountSettings_nodeParamType = node.ListAccountSettings_xAmzDateType;
                if (ListAccountSettings_nodeParamType === 'str') {
                    ListAccountSettings_parameters.xAmzDate = ListAccountSettings_nodeParam || '';
                } else {
                    ListAccountSettings_parameters.xAmzDate = RED.util.getMessageProperty(msg, ListAccountSettings_nodeParam);
                }
                ListAccountSettings_parameters.xAmzDate = !!ListAccountSettings_parameters.xAmzDate ? ListAccountSettings_parameters.xAmzDate : msg.payload;
                
                ListAccountSettings_nodeParam = node.ListAccountSettings_xAmzAlgorithm;
                ListAccountSettings_nodeParamType = node.ListAccountSettings_xAmzAlgorithmType;
                if (ListAccountSettings_nodeParamType === 'str') {
                    ListAccountSettings_parameters.xAmzAlgorithm = ListAccountSettings_nodeParam || '';
                } else {
                    ListAccountSettings_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, ListAccountSettings_nodeParam);
                }
                ListAccountSettings_parameters.xAmzAlgorithm = !!ListAccountSettings_parameters.xAmzAlgorithm ? ListAccountSettings_parameters.xAmzAlgorithm : msg.payload;
                
                ListAccountSettings_nodeParam = node.ListAccountSettings_xAmzCredential;
                ListAccountSettings_nodeParamType = node.ListAccountSettings_xAmzCredentialType;
                if (ListAccountSettings_nodeParamType === 'str') {
                    ListAccountSettings_parameters.xAmzCredential = ListAccountSettings_nodeParam || '';
                } else {
                    ListAccountSettings_parameters.xAmzCredential = RED.util.getMessageProperty(msg, ListAccountSettings_nodeParam);
                }
                ListAccountSettings_parameters.xAmzCredential = !!ListAccountSettings_parameters.xAmzCredential ? ListAccountSettings_parameters.xAmzCredential : msg.payload;
                
                ListAccountSettings_nodeParam = node.ListAccountSettings_xAmzSecurityToken;
                ListAccountSettings_nodeParamType = node.ListAccountSettings_xAmzSecurityTokenType;
                if (ListAccountSettings_nodeParamType === 'str') {
                    ListAccountSettings_parameters.xAmzSecurityToken = ListAccountSettings_nodeParam || '';
                } else {
                    ListAccountSettings_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, ListAccountSettings_nodeParam);
                }
                ListAccountSettings_parameters.xAmzSecurityToken = !!ListAccountSettings_parameters.xAmzSecurityToken ? ListAccountSettings_parameters.xAmzSecurityToken : msg.payload;
                
                ListAccountSettings_nodeParam = node.ListAccountSettings_xAmzSignature;
                ListAccountSettings_nodeParamType = node.ListAccountSettings_xAmzSignatureType;
                if (ListAccountSettings_nodeParamType === 'str') {
                    ListAccountSettings_parameters.xAmzSignature = ListAccountSettings_nodeParam || '';
                } else {
                    ListAccountSettings_parameters.xAmzSignature = RED.util.getMessageProperty(msg, ListAccountSettings_nodeParam);
                }
                ListAccountSettings_parameters.xAmzSignature = !!ListAccountSettings_parameters.xAmzSignature ? ListAccountSettings_parameters.xAmzSignature : msg.payload;
                
                ListAccountSettings_nodeParam = node.ListAccountSettings_xAmzSignedHeaders;
                ListAccountSettings_nodeParamType = node.ListAccountSettings_xAmzSignedHeadersType;
                if (ListAccountSettings_nodeParamType === 'str') {
                    ListAccountSettings_parameters.xAmzSignedHeaders = ListAccountSettings_nodeParam || '';
                } else {
                    ListAccountSettings_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, ListAccountSettings_nodeParam);
                }
                ListAccountSettings_parameters.xAmzSignedHeaders = !!ListAccountSettings_parameters.xAmzSignedHeaders ? ListAccountSettings_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.ListAccountSettings(ListAccountSettings_parameters);
            }
            if (!errorFlag && node.method === 'ListAttributes') {
                var ListAttributes_parameters = [];
                var ListAttributes_nodeParam;
                var ListAttributes_nodeParamType;

                if (typeof msg.payload === 'object') {
                    ListAttributes_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                ListAttributes_nodeParam = node.ListAttributes_xAmzTarget;
                ListAttributes_nodeParamType = node.ListAttributes_xAmzTargetType;
                if (ListAttributes_nodeParamType === 'str') {
                    ListAttributes_parameters.xAmzTarget = ListAttributes_nodeParam || '';
                } else {
                    ListAttributes_parameters.xAmzTarget = RED.util.getMessageProperty(msg, ListAttributes_nodeParam);
                }
                ListAttributes_parameters.xAmzTarget = !!ListAttributes_parameters.xAmzTarget ? ListAttributes_parameters.xAmzTarget : msg.payload;
                
                ListAttributes_nodeParam = node.ListAttributes_xAmzContentSha256;
                ListAttributes_nodeParamType = node.ListAttributes_xAmzContentSha256Type;
                if (ListAttributes_nodeParamType === 'str') {
                    ListAttributes_parameters.xAmzContentSha256 = ListAttributes_nodeParam || '';
                } else {
                    ListAttributes_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, ListAttributes_nodeParam);
                }
                ListAttributes_parameters.xAmzContentSha256 = !!ListAttributes_parameters.xAmzContentSha256 ? ListAttributes_parameters.xAmzContentSha256 : msg.payload;
                
                ListAttributes_nodeParam = node.ListAttributes_xAmzDate;
                ListAttributes_nodeParamType = node.ListAttributes_xAmzDateType;
                if (ListAttributes_nodeParamType === 'str') {
                    ListAttributes_parameters.xAmzDate = ListAttributes_nodeParam || '';
                } else {
                    ListAttributes_parameters.xAmzDate = RED.util.getMessageProperty(msg, ListAttributes_nodeParam);
                }
                ListAttributes_parameters.xAmzDate = !!ListAttributes_parameters.xAmzDate ? ListAttributes_parameters.xAmzDate : msg.payload;
                
                ListAttributes_nodeParam = node.ListAttributes_xAmzAlgorithm;
                ListAttributes_nodeParamType = node.ListAttributes_xAmzAlgorithmType;
                if (ListAttributes_nodeParamType === 'str') {
                    ListAttributes_parameters.xAmzAlgorithm = ListAttributes_nodeParam || '';
                } else {
                    ListAttributes_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, ListAttributes_nodeParam);
                }
                ListAttributes_parameters.xAmzAlgorithm = !!ListAttributes_parameters.xAmzAlgorithm ? ListAttributes_parameters.xAmzAlgorithm : msg.payload;
                
                ListAttributes_nodeParam = node.ListAttributes_xAmzCredential;
                ListAttributes_nodeParamType = node.ListAttributes_xAmzCredentialType;
                if (ListAttributes_nodeParamType === 'str') {
                    ListAttributes_parameters.xAmzCredential = ListAttributes_nodeParam || '';
                } else {
                    ListAttributes_parameters.xAmzCredential = RED.util.getMessageProperty(msg, ListAttributes_nodeParam);
                }
                ListAttributes_parameters.xAmzCredential = !!ListAttributes_parameters.xAmzCredential ? ListAttributes_parameters.xAmzCredential : msg.payload;
                
                ListAttributes_nodeParam = node.ListAttributes_xAmzSecurityToken;
                ListAttributes_nodeParamType = node.ListAttributes_xAmzSecurityTokenType;
                if (ListAttributes_nodeParamType === 'str') {
                    ListAttributes_parameters.xAmzSecurityToken = ListAttributes_nodeParam || '';
                } else {
                    ListAttributes_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, ListAttributes_nodeParam);
                }
                ListAttributes_parameters.xAmzSecurityToken = !!ListAttributes_parameters.xAmzSecurityToken ? ListAttributes_parameters.xAmzSecurityToken : msg.payload;
                
                ListAttributes_nodeParam = node.ListAttributes_xAmzSignature;
                ListAttributes_nodeParamType = node.ListAttributes_xAmzSignatureType;
                if (ListAttributes_nodeParamType === 'str') {
                    ListAttributes_parameters.xAmzSignature = ListAttributes_nodeParam || '';
                } else {
                    ListAttributes_parameters.xAmzSignature = RED.util.getMessageProperty(msg, ListAttributes_nodeParam);
                }
                ListAttributes_parameters.xAmzSignature = !!ListAttributes_parameters.xAmzSignature ? ListAttributes_parameters.xAmzSignature : msg.payload;
                
                ListAttributes_nodeParam = node.ListAttributes_xAmzSignedHeaders;
                ListAttributes_nodeParamType = node.ListAttributes_xAmzSignedHeadersType;
                if (ListAttributes_nodeParamType === 'str') {
                    ListAttributes_parameters.xAmzSignedHeaders = ListAttributes_nodeParam || '';
                } else {
                    ListAttributes_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, ListAttributes_nodeParam);
                }
                ListAttributes_parameters.xAmzSignedHeaders = !!ListAttributes_parameters.xAmzSignedHeaders ? ListAttributes_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.ListAttributes(ListAttributes_parameters);
            }
            if (!errorFlag && node.method === 'ListClusters') {
                var ListClusters_parameters = [];
                var ListClusters_nodeParam;
                var ListClusters_nodeParamType;

                if (typeof msg.payload === 'object') {
                    ListClusters_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                ListClusters_nodeParam = node.ListClusters_maxResults;
                ListClusters_nodeParamType = node.ListClusters_maxResultsType;
                if (ListClusters_nodeParamType === 'str') {
                    ListClusters_parameters.maxResults = ListClusters_nodeParam || '';
                } else {
                    ListClusters_parameters.maxResults = RED.util.getMessageProperty(msg, ListClusters_nodeParam);
                }
                ListClusters_parameters.maxResults = !!ListClusters_parameters.maxResults ? ListClusters_parameters.maxResults : msg.payload;
                
                ListClusters_nodeParam = node.ListClusters_nextToken;
                ListClusters_nodeParamType = node.ListClusters_nextTokenType;
                if (ListClusters_nodeParamType === 'str') {
                    ListClusters_parameters.nextToken = ListClusters_nodeParam || '';
                } else {
                    ListClusters_parameters.nextToken = RED.util.getMessageProperty(msg, ListClusters_nodeParam);
                }
                ListClusters_parameters.nextToken = !!ListClusters_parameters.nextToken ? ListClusters_parameters.nextToken : msg.payload;
                
                ListClusters_nodeParam = node.ListClusters_xAmzTarget;
                ListClusters_nodeParamType = node.ListClusters_xAmzTargetType;
                if (ListClusters_nodeParamType === 'str') {
                    ListClusters_parameters.xAmzTarget = ListClusters_nodeParam || '';
                } else {
                    ListClusters_parameters.xAmzTarget = RED.util.getMessageProperty(msg, ListClusters_nodeParam);
                }
                ListClusters_parameters.xAmzTarget = !!ListClusters_parameters.xAmzTarget ? ListClusters_parameters.xAmzTarget : msg.payload;
                
                ListClusters_nodeParam = node.ListClusters_xAmzContentSha256;
                ListClusters_nodeParamType = node.ListClusters_xAmzContentSha256Type;
                if (ListClusters_nodeParamType === 'str') {
                    ListClusters_parameters.xAmzContentSha256 = ListClusters_nodeParam || '';
                } else {
                    ListClusters_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, ListClusters_nodeParam);
                }
                ListClusters_parameters.xAmzContentSha256 = !!ListClusters_parameters.xAmzContentSha256 ? ListClusters_parameters.xAmzContentSha256 : msg.payload;
                
                ListClusters_nodeParam = node.ListClusters_xAmzDate;
                ListClusters_nodeParamType = node.ListClusters_xAmzDateType;
                if (ListClusters_nodeParamType === 'str') {
                    ListClusters_parameters.xAmzDate = ListClusters_nodeParam || '';
                } else {
                    ListClusters_parameters.xAmzDate = RED.util.getMessageProperty(msg, ListClusters_nodeParam);
                }
                ListClusters_parameters.xAmzDate = !!ListClusters_parameters.xAmzDate ? ListClusters_parameters.xAmzDate : msg.payload;
                
                ListClusters_nodeParam = node.ListClusters_xAmzAlgorithm;
                ListClusters_nodeParamType = node.ListClusters_xAmzAlgorithmType;
                if (ListClusters_nodeParamType === 'str') {
                    ListClusters_parameters.xAmzAlgorithm = ListClusters_nodeParam || '';
                } else {
                    ListClusters_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, ListClusters_nodeParam);
                }
                ListClusters_parameters.xAmzAlgorithm = !!ListClusters_parameters.xAmzAlgorithm ? ListClusters_parameters.xAmzAlgorithm : msg.payload;
                
                ListClusters_nodeParam = node.ListClusters_xAmzCredential;
                ListClusters_nodeParamType = node.ListClusters_xAmzCredentialType;
                if (ListClusters_nodeParamType === 'str') {
                    ListClusters_parameters.xAmzCredential = ListClusters_nodeParam || '';
                } else {
                    ListClusters_parameters.xAmzCredential = RED.util.getMessageProperty(msg, ListClusters_nodeParam);
                }
                ListClusters_parameters.xAmzCredential = !!ListClusters_parameters.xAmzCredential ? ListClusters_parameters.xAmzCredential : msg.payload;
                
                ListClusters_nodeParam = node.ListClusters_xAmzSecurityToken;
                ListClusters_nodeParamType = node.ListClusters_xAmzSecurityTokenType;
                if (ListClusters_nodeParamType === 'str') {
                    ListClusters_parameters.xAmzSecurityToken = ListClusters_nodeParam || '';
                } else {
                    ListClusters_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, ListClusters_nodeParam);
                }
                ListClusters_parameters.xAmzSecurityToken = !!ListClusters_parameters.xAmzSecurityToken ? ListClusters_parameters.xAmzSecurityToken : msg.payload;
                
                ListClusters_nodeParam = node.ListClusters_xAmzSignature;
                ListClusters_nodeParamType = node.ListClusters_xAmzSignatureType;
                if (ListClusters_nodeParamType === 'str') {
                    ListClusters_parameters.xAmzSignature = ListClusters_nodeParam || '';
                } else {
                    ListClusters_parameters.xAmzSignature = RED.util.getMessageProperty(msg, ListClusters_nodeParam);
                }
                ListClusters_parameters.xAmzSignature = !!ListClusters_parameters.xAmzSignature ? ListClusters_parameters.xAmzSignature : msg.payload;
                
                ListClusters_nodeParam = node.ListClusters_xAmzSignedHeaders;
                ListClusters_nodeParamType = node.ListClusters_xAmzSignedHeadersType;
                if (ListClusters_nodeParamType === 'str') {
                    ListClusters_parameters.xAmzSignedHeaders = ListClusters_nodeParam || '';
                } else {
                    ListClusters_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, ListClusters_nodeParam);
                }
                ListClusters_parameters.xAmzSignedHeaders = !!ListClusters_parameters.xAmzSignedHeaders ? ListClusters_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.ListClusters(ListClusters_parameters);
            }
            if (!errorFlag && node.method === 'ListContainerInstances') {
                var ListContainerInstances_parameters = [];
                var ListContainerInstances_nodeParam;
                var ListContainerInstances_nodeParamType;

                if (typeof msg.payload === 'object') {
                    ListContainerInstances_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                ListContainerInstances_nodeParam = node.ListContainerInstances_maxResults;
                ListContainerInstances_nodeParamType = node.ListContainerInstances_maxResultsType;
                if (ListContainerInstances_nodeParamType === 'str') {
                    ListContainerInstances_parameters.maxResults = ListContainerInstances_nodeParam || '';
                } else {
                    ListContainerInstances_parameters.maxResults = RED.util.getMessageProperty(msg, ListContainerInstances_nodeParam);
                }
                ListContainerInstances_parameters.maxResults = !!ListContainerInstances_parameters.maxResults ? ListContainerInstances_parameters.maxResults : msg.payload;
                
                ListContainerInstances_nodeParam = node.ListContainerInstances_nextToken;
                ListContainerInstances_nodeParamType = node.ListContainerInstances_nextTokenType;
                if (ListContainerInstances_nodeParamType === 'str') {
                    ListContainerInstances_parameters.nextToken = ListContainerInstances_nodeParam || '';
                } else {
                    ListContainerInstances_parameters.nextToken = RED.util.getMessageProperty(msg, ListContainerInstances_nodeParam);
                }
                ListContainerInstances_parameters.nextToken = !!ListContainerInstances_parameters.nextToken ? ListContainerInstances_parameters.nextToken : msg.payload;
                
                ListContainerInstances_nodeParam = node.ListContainerInstances_xAmzTarget;
                ListContainerInstances_nodeParamType = node.ListContainerInstances_xAmzTargetType;
                if (ListContainerInstances_nodeParamType === 'str') {
                    ListContainerInstances_parameters.xAmzTarget = ListContainerInstances_nodeParam || '';
                } else {
                    ListContainerInstances_parameters.xAmzTarget = RED.util.getMessageProperty(msg, ListContainerInstances_nodeParam);
                }
                ListContainerInstances_parameters.xAmzTarget = !!ListContainerInstances_parameters.xAmzTarget ? ListContainerInstances_parameters.xAmzTarget : msg.payload;
                
                ListContainerInstances_nodeParam = node.ListContainerInstances_xAmzContentSha256;
                ListContainerInstances_nodeParamType = node.ListContainerInstances_xAmzContentSha256Type;
                if (ListContainerInstances_nodeParamType === 'str') {
                    ListContainerInstances_parameters.xAmzContentSha256 = ListContainerInstances_nodeParam || '';
                } else {
                    ListContainerInstances_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, ListContainerInstances_nodeParam);
                }
                ListContainerInstances_parameters.xAmzContentSha256 = !!ListContainerInstances_parameters.xAmzContentSha256 ? ListContainerInstances_parameters.xAmzContentSha256 : msg.payload;
                
                ListContainerInstances_nodeParam = node.ListContainerInstances_xAmzDate;
                ListContainerInstances_nodeParamType = node.ListContainerInstances_xAmzDateType;
                if (ListContainerInstances_nodeParamType === 'str') {
                    ListContainerInstances_parameters.xAmzDate = ListContainerInstances_nodeParam || '';
                } else {
                    ListContainerInstances_parameters.xAmzDate = RED.util.getMessageProperty(msg, ListContainerInstances_nodeParam);
                }
                ListContainerInstances_parameters.xAmzDate = !!ListContainerInstances_parameters.xAmzDate ? ListContainerInstances_parameters.xAmzDate : msg.payload;
                
                ListContainerInstances_nodeParam = node.ListContainerInstances_xAmzAlgorithm;
                ListContainerInstances_nodeParamType = node.ListContainerInstances_xAmzAlgorithmType;
                if (ListContainerInstances_nodeParamType === 'str') {
                    ListContainerInstances_parameters.xAmzAlgorithm = ListContainerInstances_nodeParam || '';
                } else {
                    ListContainerInstances_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, ListContainerInstances_nodeParam);
                }
                ListContainerInstances_parameters.xAmzAlgorithm = !!ListContainerInstances_parameters.xAmzAlgorithm ? ListContainerInstances_parameters.xAmzAlgorithm : msg.payload;
                
                ListContainerInstances_nodeParam = node.ListContainerInstances_xAmzCredential;
                ListContainerInstances_nodeParamType = node.ListContainerInstances_xAmzCredentialType;
                if (ListContainerInstances_nodeParamType === 'str') {
                    ListContainerInstances_parameters.xAmzCredential = ListContainerInstances_nodeParam || '';
                } else {
                    ListContainerInstances_parameters.xAmzCredential = RED.util.getMessageProperty(msg, ListContainerInstances_nodeParam);
                }
                ListContainerInstances_parameters.xAmzCredential = !!ListContainerInstances_parameters.xAmzCredential ? ListContainerInstances_parameters.xAmzCredential : msg.payload;
                
                ListContainerInstances_nodeParam = node.ListContainerInstances_xAmzSecurityToken;
                ListContainerInstances_nodeParamType = node.ListContainerInstances_xAmzSecurityTokenType;
                if (ListContainerInstances_nodeParamType === 'str') {
                    ListContainerInstances_parameters.xAmzSecurityToken = ListContainerInstances_nodeParam || '';
                } else {
                    ListContainerInstances_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, ListContainerInstances_nodeParam);
                }
                ListContainerInstances_parameters.xAmzSecurityToken = !!ListContainerInstances_parameters.xAmzSecurityToken ? ListContainerInstances_parameters.xAmzSecurityToken : msg.payload;
                
                ListContainerInstances_nodeParam = node.ListContainerInstances_xAmzSignature;
                ListContainerInstances_nodeParamType = node.ListContainerInstances_xAmzSignatureType;
                if (ListContainerInstances_nodeParamType === 'str') {
                    ListContainerInstances_parameters.xAmzSignature = ListContainerInstances_nodeParam || '';
                } else {
                    ListContainerInstances_parameters.xAmzSignature = RED.util.getMessageProperty(msg, ListContainerInstances_nodeParam);
                }
                ListContainerInstances_parameters.xAmzSignature = !!ListContainerInstances_parameters.xAmzSignature ? ListContainerInstances_parameters.xAmzSignature : msg.payload;
                
                ListContainerInstances_nodeParam = node.ListContainerInstances_xAmzSignedHeaders;
                ListContainerInstances_nodeParamType = node.ListContainerInstances_xAmzSignedHeadersType;
                if (ListContainerInstances_nodeParamType === 'str') {
                    ListContainerInstances_parameters.xAmzSignedHeaders = ListContainerInstances_nodeParam || '';
                } else {
                    ListContainerInstances_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, ListContainerInstances_nodeParam);
                }
                ListContainerInstances_parameters.xAmzSignedHeaders = !!ListContainerInstances_parameters.xAmzSignedHeaders ? ListContainerInstances_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.ListContainerInstances(ListContainerInstances_parameters);
            }
            if (!errorFlag && node.method === 'ListServices') {
                var ListServices_parameters = [];
                var ListServices_nodeParam;
                var ListServices_nodeParamType;

                if (typeof msg.payload === 'object') {
                    ListServices_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                ListServices_nodeParam = node.ListServices_maxResults;
                ListServices_nodeParamType = node.ListServices_maxResultsType;
                if (ListServices_nodeParamType === 'str') {
                    ListServices_parameters.maxResults = ListServices_nodeParam || '';
                } else {
                    ListServices_parameters.maxResults = RED.util.getMessageProperty(msg, ListServices_nodeParam);
                }
                ListServices_parameters.maxResults = !!ListServices_parameters.maxResults ? ListServices_parameters.maxResults : msg.payload;
                
                ListServices_nodeParam = node.ListServices_nextToken;
                ListServices_nodeParamType = node.ListServices_nextTokenType;
                if (ListServices_nodeParamType === 'str') {
                    ListServices_parameters.nextToken = ListServices_nodeParam || '';
                } else {
                    ListServices_parameters.nextToken = RED.util.getMessageProperty(msg, ListServices_nodeParam);
                }
                ListServices_parameters.nextToken = !!ListServices_parameters.nextToken ? ListServices_parameters.nextToken : msg.payload;
                
                ListServices_nodeParam = node.ListServices_xAmzTarget;
                ListServices_nodeParamType = node.ListServices_xAmzTargetType;
                if (ListServices_nodeParamType === 'str') {
                    ListServices_parameters.xAmzTarget = ListServices_nodeParam || '';
                } else {
                    ListServices_parameters.xAmzTarget = RED.util.getMessageProperty(msg, ListServices_nodeParam);
                }
                ListServices_parameters.xAmzTarget = !!ListServices_parameters.xAmzTarget ? ListServices_parameters.xAmzTarget : msg.payload;
                
                ListServices_nodeParam = node.ListServices_xAmzContentSha256;
                ListServices_nodeParamType = node.ListServices_xAmzContentSha256Type;
                if (ListServices_nodeParamType === 'str') {
                    ListServices_parameters.xAmzContentSha256 = ListServices_nodeParam || '';
                } else {
                    ListServices_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, ListServices_nodeParam);
                }
                ListServices_parameters.xAmzContentSha256 = !!ListServices_parameters.xAmzContentSha256 ? ListServices_parameters.xAmzContentSha256 : msg.payload;
                
                ListServices_nodeParam = node.ListServices_xAmzDate;
                ListServices_nodeParamType = node.ListServices_xAmzDateType;
                if (ListServices_nodeParamType === 'str') {
                    ListServices_parameters.xAmzDate = ListServices_nodeParam || '';
                } else {
                    ListServices_parameters.xAmzDate = RED.util.getMessageProperty(msg, ListServices_nodeParam);
                }
                ListServices_parameters.xAmzDate = !!ListServices_parameters.xAmzDate ? ListServices_parameters.xAmzDate : msg.payload;
                
                ListServices_nodeParam = node.ListServices_xAmzAlgorithm;
                ListServices_nodeParamType = node.ListServices_xAmzAlgorithmType;
                if (ListServices_nodeParamType === 'str') {
                    ListServices_parameters.xAmzAlgorithm = ListServices_nodeParam || '';
                } else {
                    ListServices_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, ListServices_nodeParam);
                }
                ListServices_parameters.xAmzAlgorithm = !!ListServices_parameters.xAmzAlgorithm ? ListServices_parameters.xAmzAlgorithm : msg.payload;
                
                ListServices_nodeParam = node.ListServices_xAmzCredential;
                ListServices_nodeParamType = node.ListServices_xAmzCredentialType;
                if (ListServices_nodeParamType === 'str') {
                    ListServices_parameters.xAmzCredential = ListServices_nodeParam || '';
                } else {
                    ListServices_parameters.xAmzCredential = RED.util.getMessageProperty(msg, ListServices_nodeParam);
                }
                ListServices_parameters.xAmzCredential = !!ListServices_parameters.xAmzCredential ? ListServices_parameters.xAmzCredential : msg.payload;
                
                ListServices_nodeParam = node.ListServices_xAmzSecurityToken;
                ListServices_nodeParamType = node.ListServices_xAmzSecurityTokenType;
                if (ListServices_nodeParamType === 'str') {
                    ListServices_parameters.xAmzSecurityToken = ListServices_nodeParam || '';
                } else {
                    ListServices_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, ListServices_nodeParam);
                }
                ListServices_parameters.xAmzSecurityToken = !!ListServices_parameters.xAmzSecurityToken ? ListServices_parameters.xAmzSecurityToken : msg.payload;
                
                ListServices_nodeParam = node.ListServices_xAmzSignature;
                ListServices_nodeParamType = node.ListServices_xAmzSignatureType;
                if (ListServices_nodeParamType === 'str') {
                    ListServices_parameters.xAmzSignature = ListServices_nodeParam || '';
                } else {
                    ListServices_parameters.xAmzSignature = RED.util.getMessageProperty(msg, ListServices_nodeParam);
                }
                ListServices_parameters.xAmzSignature = !!ListServices_parameters.xAmzSignature ? ListServices_parameters.xAmzSignature : msg.payload;
                
                ListServices_nodeParam = node.ListServices_xAmzSignedHeaders;
                ListServices_nodeParamType = node.ListServices_xAmzSignedHeadersType;
                if (ListServices_nodeParamType === 'str') {
                    ListServices_parameters.xAmzSignedHeaders = ListServices_nodeParam || '';
                } else {
                    ListServices_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, ListServices_nodeParam);
                }
                ListServices_parameters.xAmzSignedHeaders = !!ListServices_parameters.xAmzSignedHeaders ? ListServices_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.ListServices(ListServices_parameters);
            }
            if (!errorFlag && node.method === 'ListTagsForResource') {
                var ListTagsForResource_parameters = [];
                var ListTagsForResource_nodeParam;
                var ListTagsForResource_nodeParamType;

                if (typeof msg.payload === 'object') {
                    ListTagsForResource_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                ListTagsForResource_nodeParam = node.ListTagsForResource_xAmzTarget;
                ListTagsForResource_nodeParamType = node.ListTagsForResource_xAmzTargetType;
                if (ListTagsForResource_nodeParamType === 'str') {
                    ListTagsForResource_parameters.xAmzTarget = ListTagsForResource_nodeParam || '';
                } else {
                    ListTagsForResource_parameters.xAmzTarget = RED.util.getMessageProperty(msg, ListTagsForResource_nodeParam);
                }
                ListTagsForResource_parameters.xAmzTarget = !!ListTagsForResource_parameters.xAmzTarget ? ListTagsForResource_parameters.xAmzTarget : msg.payload;
                
                ListTagsForResource_nodeParam = node.ListTagsForResource_xAmzContentSha256;
                ListTagsForResource_nodeParamType = node.ListTagsForResource_xAmzContentSha256Type;
                if (ListTagsForResource_nodeParamType === 'str') {
                    ListTagsForResource_parameters.xAmzContentSha256 = ListTagsForResource_nodeParam || '';
                } else {
                    ListTagsForResource_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, ListTagsForResource_nodeParam);
                }
                ListTagsForResource_parameters.xAmzContentSha256 = !!ListTagsForResource_parameters.xAmzContentSha256 ? ListTagsForResource_parameters.xAmzContentSha256 : msg.payload;
                
                ListTagsForResource_nodeParam = node.ListTagsForResource_xAmzDate;
                ListTagsForResource_nodeParamType = node.ListTagsForResource_xAmzDateType;
                if (ListTagsForResource_nodeParamType === 'str') {
                    ListTagsForResource_parameters.xAmzDate = ListTagsForResource_nodeParam || '';
                } else {
                    ListTagsForResource_parameters.xAmzDate = RED.util.getMessageProperty(msg, ListTagsForResource_nodeParam);
                }
                ListTagsForResource_parameters.xAmzDate = !!ListTagsForResource_parameters.xAmzDate ? ListTagsForResource_parameters.xAmzDate : msg.payload;
                
                ListTagsForResource_nodeParam = node.ListTagsForResource_xAmzAlgorithm;
                ListTagsForResource_nodeParamType = node.ListTagsForResource_xAmzAlgorithmType;
                if (ListTagsForResource_nodeParamType === 'str') {
                    ListTagsForResource_parameters.xAmzAlgorithm = ListTagsForResource_nodeParam || '';
                } else {
                    ListTagsForResource_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, ListTagsForResource_nodeParam);
                }
                ListTagsForResource_parameters.xAmzAlgorithm = !!ListTagsForResource_parameters.xAmzAlgorithm ? ListTagsForResource_parameters.xAmzAlgorithm : msg.payload;
                
                ListTagsForResource_nodeParam = node.ListTagsForResource_xAmzCredential;
                ListTagsForResource_nodeParamType = node.ListTagsForResource_xAmzCredentialType;
                if (ListTagsForResource_nodeParamType === 'str') {
                    ListTagsForResource_parameters.xAmzCredential = ListTagsForResource_nodeParam || '';
                } else {
                    ListTagsForResource_parameters.xAmzCredential = RED.util.getMessageProperty(msg, ListTagsForResource_nodeParam);
                }
                ListTagsForResource_parameters.xAmzCredential = !!ListTagsForResource_parameters.xAmzCredential ? ListTagsForResource_parameters.xAmzCredential : msg.payload;
                
                ListTagsForResource_nodeParam = node.ListTagsForResource_xAmzSecurityToken;
                ListTagsForResource_nodeParamType = node.ListTagsForResource_xAmzSecurityTokenType;
                if (ListTagsForResource_nodeParamType === 'str') {
                    ListTagsForResource_parameters.xAmzSecurityToken = ListTagsForResource_nodeParam || '';
                } else {
                    ListTagsForResource_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, ListTagsForResource_nodeParam);
                }
                ListTagsForResource_parameters.xAmzSecurityToken = !!ListTagsForResource_parameters.xAmzSecurityToken ? ListTagsForResource_parameters.xAmzSecurityToken : msg.payload;
                
                ListTagsForResource_nodeParam = node.ListTagsForResource_xAmzSignature;
                ListTagsForResource_nodeParamType = node.ListTagsForResource_xAmzSignatureType;
                if (ListTagsForResource_nodeParamType === 'str') {
                    ListTagsForResource_parameters.xAmzSignature = ListTagsForResource_nodeParam || '';
                } else {
                    ListTagsForResource_parameters.xAmzSignature = RED.util.getMessageProperty(msg, ListTagsForResource_nodeParam);
                }
                ListTagsForResource_parameters.xAmzSignature = !!ListTagsForResource_parameters.xAmzSignature ? ListTagsForResource_parameters.xAmzSignature : msg.payload;
                
                ListTagsForResource_nodeParam = node.ListTagsForResource_xAmzSignedHeaders;
                ListTagsForResource_nodeParamType = node.ListTagsForResource_xAmzSignedHeadersType;
                if (ListTagsForResource_nodeParamType === 'str') {
                    ListTagsForResource_parameters.xAmzSignedHeaders = ListTagsForResource_nodeParam || '';
                } else {
                    ListTagsForResource_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, ListTagsForResource_nodeParam);
                }
                ListTagsForResource_parameters.xAmzSignedHeaders = !!ListTagsForResource_parameters.xAmzSignedHeaders ? ListTagsForResource_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.ListTagsForResource(ListTagsForResource_parameters);
            }
            if (!errorFlag && node.method === 'ListTaskDefinitionFamilies') {
                var ListTaskDefinitionFamilies_parameters = [];
                var ListTaskDefinitionFamilies_nodeParam;
                var ListTaskDefinitionFamilies_nodeParamType;

                if (typeof msg.payload === 'object') {
                    ListTaskDefinitionFamilies_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                ListTaskDefinitionFamilies_nodeParam = node.ListTaskDefinitionFamilies_maxResults;
                ListTaskDefinitionFamilies_nodeParamType = node.ListTaskDefinitionFamilies_maxResultsType;
                if (ListTaskDefinitionFamilies_nodeParamType === 'str') {
                    ListTaskDefinitionFamilies_parameters.maxResults = ListTaskDefinitionFamilies_nodeParam || '';
                } else {
                    ListTaskDefinitionFamilies_parameters.maxResults = RED.util.getMessageProperty(msg, ListTaskDefinitionFamilies_nodeParam);
                }
                ListTaskDefinitionFamilies_parameters.maxResults = !!ListTaskDefinitionFamilies_parameters.maxResults ? ListTaskDefinitionFamilies_parameters.maxResults : msg.payload;
                
                ListTaskDefinitionFamilies_nodeParam = node.ListTaskDefinitionFamilies_nextToken;
                ListTaskDefinitionFamilies_nodeParamType = node.ListTaskDefinitionFamilies_nextTokenType;
                if (ListTaskDefinitionFamilies_nodeParamType === 'str') {
                    ListTaskDefinitionFamilies_parameters.nextToken = ListTaskDefinitionFamilies_nodeParam || '';
                } else {
                    ListTaskDefinitionFamilies_parameters.nextToken = RED.util.getMessageProperty(msg, ListTaskDefinitionFamilies_nodeParam);
                }
                ListTaskDefinitionFamilies_parameters.nextToken = !!ListTaskDefinitionFamilies_parameters.nextToken ? ListTaskDefinitionFamilies_parameters.nextToken : msg.payload;
                
                ListTaskDefinitionFamilies_nodeParam = node.ListTaskDefinitionFamilies_xAmzTarget;
                ListTaskDefinitionFamilies_nodeParamType = node.ListTaskDefinitionFamilies_xAmzTargetType;
                if (ListTaskDefinitionFamilies_nodeParamType === 'str') {
                    ListTaskDefinitionFamilies_parameters.xAmzTarget = ListTaskDefinitionFamilies_nodeParam || '';
                } else {
                    ListTaskDefinitionFamilies_parameters.xAmzTarget = RED.util.getMessageProperty(msg, ListTaskDefinitionFamilies_nodeParam);
                }
                ListTaskDefinitionFamilies_parameters.xAmzTarget = !!ListTaskDefinitionFamilies_parameters.xAmzTarget ? ListTaskDefinitionFamilies_parameters.xAmzTarget : msg.payload;
                
                ListTaskDefinitionFamilies_nodeParam = node.ListTaskDefinitionFamilies_xAmzContentSha256;
                ListTaskDefinitionFamilies_nodeParamType = node.ListTaskDefinitionFamilies_xAmzContentSha256Type;
                if (ListTaskDefinitionFamilies_nodeParamType === 'str') {
                    ListTaskDefinitionFamilies_parameters.xAmzContentSha256 = ListTaskDefinitionFamilies_nodeParam || '';
                } else {
                    ListTaskDefinitionFamilies_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, ListTaskDefinitionFamilies_nodeParam);
                }
                ListTaskDefinitionFamilies_parameters.xAmzContentSha256 = !!ListTaskDefinitionFamilies_parameters.xAmzContentSha256 ? ListTaskDefinitionFamilies_parameters.xAmzContentSha256 : msg.payload;
                
                ListTaskDefinitionFamilies_nodeParam = node.ListTaskDefinitionFamilies_xAmzDate;
                ListTaskDefinitionFamilies_nodeParamType = node.ListTaskDefinitionFamilies_xAmzDateType;
                if (ListTaskDefinitionFamilies_nodeParamType === 'str') {
                    ListTaskDefinitionFamilies_parameters.xAmzDate = ListTaskDefinitionFamilies_nodeParam || '';
                } else {
                    ListTaskDefinitionFamilies_parameters.xAmzDate = RED.util.getMessageProperty(msg, ListTaskDefinitionFamilies_nodeParam);
                }
                ListTaskDefinitionFamilies_parameters.xAmzDate = !!ListTaskDefinitionFamilies_parameters.xAmzDate ? ListTaskDefinitionFamilies_parameters.xAmzDate : msg.payload;
                
                ListTaskDefinitionFamilies_nodeParam = node.ListTaskDefinitionFamilies_xAmzAlgorithm;
                ListTaskDefinitionFamilies_nodeParamType = node.ListTaskDefinitionFamilies_xAmzAlgorithmType;
                if (ListTaskDefinitionFamilies_nodeParamType === 'str') {
                    ListTaskDefinitionFamilies_parameters.xAmzAlgorithm = ListTaskDefinitionFamilies_nodeParam || '';
                } else {
                    ListTaskDefinitionFamilies_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, ListTaskDefinitionFamilies_nodeParam);
                }
                ListTaskDefinitionFamilies_parameters.xAmzAlgorithm = !!ListTaskDefinitionFamilies_parameters.xAmzAlgorithm ? ListTaskDefinitionFamilies_parameters.xAmzAlgorithm : msg.payload;
                
                ListTaskDefinitionFamilies_nodeParam = node.ListTaskDefinitionFamilies_xAmzCredential;
                ListTaskDefinitionFamilies_nodeParamType = node.ListTaskDefinitionFamilies_xAmzCredentialType;
                if (ListTaskDefinitionFamilies_nodeParamType === 'str') {
                    ListTaskDefinitionFamilies_parameters.xAmzCredential = ListTaskDefinitionFamilies_nodeParam || '';
                } else {
                    ListTaskDefinitionFamilies_parameters.xAmzCredential = RED.util.getMessageProperty(msg, ListTaskDefinitionFamilies_nodeParam);
                }
                ListTaskDefinitionFamilies_parameters.xAmzCredential = !!ListTaskDefinitionFamilies_parameters.xAmzCredential ? ListTaskDefinitionFamilies_parameters.xAmzCredential : msg.payload;
                
                ListTaskDefinitionFamilies_nodeParam = node.ListTaskDefinitionFamilies_xAmzSecurityToken;
                ListTaskDefinitionFamilies_nodeParamType = node.ListTaskDefinitionFamilies_xAmzSecurityTokenType;
                if (ListTaskDefinitionFamilies_nodeParamType === 'str') {
                    ListTaskDefinitionFamilies_parameters.xAmzSecurityToken = ListTaskDefinitionFamilies_nodeParam || '';
                } else {
                    ListTaskDefinitionFamilies_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, ListTaskDefinitionFamilies_nodeParam);
                }
                ListTaskDefinitionFamilies_parameters.xAmzSecurityToken = !!ListTaskDefinitionFamilies_parameters.xAmzSecurityToken ? ListTaskDefinitionFamilies_parameters.xAmzSecurityToken : msg.payload;
                
                ListTaskDefinitionFamilies_nodeParam = node.ListTaskDefinitionFamilies_xAmzSignature;
                ListTaskDefinitionFamilies_nodeParamType = node.ListTaskDefinitionFamilies_xAmzSignatureType;
                if (ListTaskDefinitionFamilies_nodeParamType === 'str') {
                    ListTaskDefinitionFamilies_parameters.xAmzSignature = ListTaskDefinitionFamilies_nodeParam || '';
                } else {
                    ListTaskDefinitionFamilies_parameters.xAmzSignature = RED.util.getMessageProperty(msg, ListTaskDefinitionFamilies_nodeParam);
                }
                ListTaskDefinitionFamilies_parameters.xAmzSignature = !!ListTaskDefinitionFamilies_parameters.xAmzSignature ? ListTaskDefinitionFamilies_parameters.xAmzSignature : msg.payload;
                
                ListTaskDefinitionFamilies_nodeParam = node.ListTaskDefinitionFamilies_xAmzSignedHeaders;
                ListTaskDefinitionFamilies_nodeParamType = node.ListTaskDefinitionFamilies_xAmzSignedHeadersType;
                if (ListTaskDefinitionFamilies_nodeParamType === 'str') {
                    ListTaskDefinitionFamilies_parameters.xAmzSignedHeaders = ListTaskDefinitionFamilies_nodeParam || '';
                } else {
                    ListTaskDefinitionFamilies_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, ListTaskDefinitionFamilies_nodeParam);
                }
                ListTaskDefinitionFamilies_parameters.xAmzSignedHeaders = !!ListTaskDefinitionFamilies_parameters.xAmzSignedHeaders ? ListTaskDefinitionFamilies_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.ListTaskDefinitionFamilies(ListTaskDefinitionFamilies_parameters);
            }
            if (!errorFlag && node.method === 'ListTaskDefinitions') {
                var ListTaskDefinitions_parameters = [];
                var ListTaskDefinitions_nodeParam;
                var ListTaskDefinitions_nodeParamType;

                if (typeof msg.payload === 'object') {
                    ListTaskDefinitions_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                ListTaskDefinitions_nodeParam = node.ListTaskDefinitions_maxResults;
                ListTaskDefinitions_nodeParamType = node.ListTaskDefinitions_maxResultsType;
                if (ListTaskDefinitions_nodeParamType === 'str') {
                    ListTaskDefinitions_parameters.maxResults = ListTaskDefinitions_nodeParam || '';
                } else {
                    ListTaskDefinitions_parameters.maxResults = RED.util.getMessageProperty(msg, ListTaskDefinitions_nodeParam);
                }
                ListTaskDefinitions_parameters.maxResults = !!ListTaskDefinitions_parameters.maxResults ? ListTaskDefinitions_parameters.maxResults : msg.payload;
                
                ListTaskDefinitions_nodeParam = node.ListTaskDefinitions_nextToken;
                ListTaskDefinitions_nodeParamType = node.ListTaskDefinitions_nextTokenType;
                if (ListTaskDefinitions_nodeParamType === 'str') {
                    ListTaskDefinitions_parameters.nextToken = ListTaskDefinitions_nodeParam || '';
                } else {
                    ListTaskDefinitions_parameters.nextToken = RED.util.getMessageProperty(msg, ListTaskDefinitions_nodeParam);
                }
                ListTaskDefinitions_parameters.nextToken = !!ListTaskDefinitions_parameters.nextToken ? ListTaskDefinitions_parameters.nextToken : msg.payload;
                
                ListTaskDefinitions_nodeParam = node.ListTaskDefinitions_xAmzTarget;
                ListTaskDefinitions_nodeParamType = node.ListTaskDefinitions_xAmzTargetType;
                if (ListTaskDefinitions_nodeParamType === 'str') {
                    ListTaskDefinitions_parameters.xAmzTarget = ListTaskDefinitions_nodeParam || '';
                } else {
                    ListTaskDefinitions_parameters.xAmzTarget = RED.util.getMessageProperty(msg, ListTaskDefinitions_nodeParam);
                }
                ListTaskDefinitions_parameters.xAmzTarget = !!ListTaskDefinitions_parameters.xAmzTarget ? ListTaskDefinitions_parameters.xAmzTarget : msg.payload;
                
                ListTaskDefinitions_nodeParam = node.ListTaskDefinitions_xAmzContentSha256;
                ListTaskDefinitions_nodeParamType = node.ListTaskDefinitions_xAmzContentSha256Type;
                if (ListTaskDefinitions_nodeParamType === 'str') {
                    ListTaskDefinitions_parameters.xAmzContentSha256 = ListTaskDefinitions_nodeParam || '';
                } else {
                    ListTaskDefinitions_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, ListTaskDefinitions_nodeParam);
                }
                ListTaskDefinitions_parameters.xAmzContentSha256 = !!ListTaskDefinitions_parameters.xAmzContentSha256 ? ListTaskDefinitions_parameters.xAmzContentSha256 : msg.payload;
                
                ListTaskDefinitions_nodeParam = node.ListTaskDefinitions_xAmzDate;
                ListTaskDefinitions_nodeParamType = node.ListTaskDefinitions_xAmzDateType;
                if (ListTaskDefinitions_nodeParamType === 'str') {
                    ListTaskDefinitions_parameters.xAmzDate = ListTaskDefinitions_nodeParam || '';
                } else {
                    ListTaskDefinitions_parameters.xAmzDate = RED.util.getMessageProperty(msg, ListTaskDefinitions_nodeParam);
                }
                ListTaskDefinitions_parameters.xAmzDate = !!ListTaskDefinitions_parameters.xAmzDate ? ListTaskDefinitions_parameters.xAmzDate : msg.payload;
                
                ListTaskDefinitions_nodeParam = node.ListTaskDefinitions_xAmzAlgorithm;
                ListTaskDefinitions_nodeParamType = node.ListTaskDefinitions_xAmzAlgorithmType;
                if (ListTaskDefinitions_nodeParamType === 'str') {
                    ListTaskDefinitions_parameters.xAmzAlgorithm = ListTaskDefinitions_nodeParam || '';
                } else {
                    ListTaskDefinitions_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, ListTaskDefinitions_nodeParam);
                }
                ListTaskDefinitions_parameters.xAmzAlgorithm = !!ListTaskDefinitions_parameters.xAmzAlgorithm ? ListTaskDefinitions_parameters.xAmzAlgorithm : msg.payload;
                
                ListTaskDefinitions_nodeParam = node.ListTaskDefinitions_xAmzCredential;
                ListTaskDefinitions_nodeParamType = node.ListTaskDefinitions_xAmzCredentialType;
                if (ListTaskDefinitions_nodeParamType === 'str') {
                    ListTaskDefinitions_parameters.xAmzCredential = ListTaskDefinitions_nodeParam || '';
                } else {
                    ListTaskDefinitions_parameters.xAmzCredential = RED.util.getMessageProperty(msg, ListTaskDefinitions_nodeParam);
                }
                ListTaskDefinitions_parameters.xAmzCredential = !!ListTaskDefinitions_parameters.xAmzCredential ? ListTaskDefinitions_parameters.xAmzCredential : msg.payload;
                
                ListTaskDefinitions_nodeParam = node.ListTaskDefinitions_xAmzSecurityToken;
                ListTaskDefinitions_nodeParamType = node.ListTaskDefinitions_xAmzSecurityTokenType;
                if (ListTaskDefinitions_nodeParamType === 'str') {
                    ListTaskDefinitions_parameters.xAmzSecurityToken = ListTaskDefinitions_nodeParam || '';
                } else {
                    ListTaskDefinitions_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, ListTaskDefinitions_nodeParam);
                }
                ListTaskDefinitions_parameters.xAmzSecurityToken = !!ListTaskDefinitions_parameters.xAmzSecurityToken ? ListTaskDefinitions_parameters.xAmzSecurityToken : msg.payload;
                
                ListTaskDefinitions_nodeParam = node.ListTaskDefinitions_xAmzSignature;
                ListTaskDefinitions_nodeParamType = node.ListTaskDefinitions_xAmzSignatureType;
                if (ListTaskDefinitions_nodeParamType === 'str') {
                    ListTaskDefinitions_parameters.xAmzSignature = ListTaskDefinitions_nodeParam || '';
                } else {
                    ListTaskDefinitions_parameters.xAmzSignature = RED.util.getMessageProperty(msg, ListTaskDefinitions_nodeParam);
                }
                ListTaskDefinitions_parameters.xAmzSignature = !!ListTaskDefinitions_parameters.xAmzSignature ? ListTaskDefinitions_parameters.xAmzSignature : msg.payload;
                
                ListTaskDefinitions_nodeParam = node.ListTaskDefinitions_xAmzSignedHeaders;
                ListTaskDefinitions_nodeParamType = node.ListTaskDefinitions_xAmzSignedHeadersType;
                if (ListTaskDefinitions_nodeParamType === 'str') {
                    ListTaskDefinitions_parameters.xAmzSignedHeaders = ListTaskDefinitions_nodeParam || '';
                } else {
                    ListTaskDefinitions_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, ListTaskDefinitions_nodeParam);
                }
                ListTaskDefinitions_parameters.xAmzSignedHeaders = !!ListTaskDefinitions_parameters.xAmzSignedHeaders ? ListTaskDefinitions_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.ListTaskDefinitions(ListTaskDefinitions_parameters);
            }
            if (!errorFlag && node.method === 'ListTasks') {
                var ListTasks_parameters = [];
                var ListTasks_nodeParam;
                var ListTasks_nodeParamType;

                if (typeof msg.payload === 'object') {
                    ListTasks_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                ListTasks_nodeParam = node.ListTasks_maxResults;
                ListTasks_nodeParamType = node.ListTasks_maxResultsType;
                if (ListTasks_nodeParamType === 'str') {
                    ListTasks_parameters.maxResults = ListTasks_nodeParam || '';
                } else {
                    ListTasks_parameters.maxResults = RED.util.getMessageProperty(msg, ListTasks_nodeParam);
                }
                ListTasks_parameters.maxResults = !!ListTasks_parameters.maxResults ? ListTasks_parameters.maxResults : msg.payload;
                
                ListTasks_nodeParam = node.ListTasks_nextToken;
                ListTasks_nodeParamType = node.ListTasks_nextTokenType;
                if (ListTasks_nodeParamType === 'str') {
                    ListTasks_parameters.nextToken = ListTasks_nodeParam || '';
                } else {
                    ListTasks_parameters.nextToken = RED.util.getMessageProperty(msg, ListTasks_nodeParam);
                }
                ListTasks_parameters.nextToken = !!ListTasks_parameters.nextToken ? ListTasks_parameters.nextToken : msg.payload;
                
                ListTasks_nodeParam = node.ListTasks_xAmzTarget;
                ListTasks_nodeParamType = node.ListTasks_xAmzTargetType;
                if (ListTasks_nodeParamType === 'str') {
                    ListTasks_parameters.xAmzTarget = ListTasks_nodeParam || '';
                } else {
                    ListTasks_parameters.xAmzTarget = RED.util.getMessageProperty(msg, ListTasks_nodeParam);
                }
                ListTasks_parameters.xAmzTarget = !!ListTasks_parameters.xAmzTarget ? ListTasks_parameters.xAmzTarget : msg.payload;
                
                ListTasks_nodeParam = node.ListTasks_xAmzContentSha256;
                ListTasks_nodeParamType = node.ListTasks_xAmzContentSha256Type;
                if (ListTasks_nodeParamType === 'str') {
                    ListTasks_parameters.xAmzContentSha256 = ListTasks_nodeParam || '';
                } else {
                    ListTasks_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, ListTasks_nodeParam);
                }
                ListTasks_parameters.xAmzContentSha256 = !!ListTasks_parameters.xAmzContentSha256 ? ListTasks_parameters.xAmzContentSha256 : msg.payload;
                
                ListTasks_nodeParam = node.ListTasks_xAmzDate;
                ListTasks_nodeParamType = node.ListTasks_xAmzDateType;
                if (ListTasks_nodeParamType === 'str') {
                    ListTasks_parameters.xAmzDate = ListTasks_nodeParam || '';
                } else {
                    ListTasks_parameters.xAmzDate = RED.util.getMessageProperty(msg, ListTasks_nodeParam);
                }
                ListTasks_parameters.xAmzDate = !!ListTasks_parameters.xAmzDate ? ListTasks_parameters.xAmzDate : msg.payload;
                
                ListTasks_nodeParam = node.ListTasks_xAmzAlgorithm;
                ListTasks_nodeParamType = node.ListTasks_xAmzAlgorithmType;
                if (ListTasks_nodeParamType === 'str') {
                    ListTasks_parameters.xAmzAlgorithm = ListTasks_nodeParam || '';
                } else {
                    ListTasks_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, ListTasks_nodeParam);
                }
                ListTasks_parameters.xAmzAlgorithm = !!ListTasks_parameters.xAmzAlgorithm ? ListTasks_parameters.xAmzAlgorithm : msg.payload;
                
                ListTasks_nodeParam = node.ListTasks_xAmzCredential;
                ListTasks_nodeParamType = node.ListTasks_xAmzCredentialType;
                if (ListTasks_nodeParamType === 'str') {
                    ListTasks_parameters.xAmzCredential = ListTasks_nodeParam || '';
                } else {
                    ListTasks_parameters.xAmzCredential = RED.util.getMessageProperty(msg, ListTasks_nodeParam);
                }
                ListTasks_parameters.xAmzCredential = !!ListTasks_parameters.xAmzCredential ? ListTasks_parameters.xAmzCredential : msg.payload;
                
                ListTasks_nodeParam = node.ListTasks_xAmzSecurityToken;
                ListTasks_nodeParamType = node.ListTasks_xAmzSecurityTokenType;
                if (ListTasks_nodeParamType === 'str') {
                    ListTasks_parameters.xAmzSecurityToken = ListTasks_nodeParam || '';
                } else {
                    ListTasks_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, ListTasks_nodeParam);
                }
                ListTasks_parameters.xAmzSecurityToken = !!ListTasks_parameters.xAmzSecurityToken ? ListTasks_parameters.xAmzSecurityToken : msg.payload;
                
                ListTasks_nodeParam = node.ListTasks_xAmzSignature;
                ListTasks_nodeParamType = node.ListTasks_xAmzSignatureType;
                if (ListTasks_nodeParamType === 'str') {
                    ListTasks_parameters.xAmzSignature = ListTasks_nodeParam || '';
                } else {
                    ListTasks_parameters.xAmzSignature = RED.util.getMessageProperty(msg, ListTasks_nodeParam);
                }
                ListTasks_parameters.xAmzSignature = !!ListTasks_parameters.xAmzSignature ? ListTasks_parameters.xAmzSignature : msg.payload;
                
                ListTasks_nodeParam = node.ListTasks_xAmzSignedHeaders;
                ListTasks_nodeParamType = node.ListTasks_xAmzSignedHeadersType;
                if (ListTasks_nodeParamType === 'str') {
                    ListTasks_parameters.xAmzSignedHeaders = ListTasks_nodeParam || '';
                } else {
                    ListTasks_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, ListTasks_nodeParam);
                }
                ListTasks_parameters.xAmzSignedHeaders = !!ListTasks_parameters.xAmzSignedHeaders ? ListTasks_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.ListTasks(ListTasks_parameters);
            }
            if (!errorFlag && node.method === 'PutAccountSetting') {
                var PutAccountSetting_parameters = [];
                var PutAccountSetting_nodeParam;
                var PutAccountSetting_nodeParamType;

                if (typeof msg.payload === 'object') {
                    PutAccountSetting_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                PutAccountSetting_nodeParam = node.PutAccountSetting_xAmzTarget;
                PutAccountSetting_nodeParamType = node.PutAccountSetting_xAmzTargetType;
                if (PutAccountSetting_nodeParamType === 'str') {
                    PutAccountSetting_parameters.xAmzTarget = PutAccountSetting_nodeParam || '';
                } else {
                    PutAccountSetting_parameters.xAmzTarget = RED.util.getMessageProperty(msg, PutAccountSetting_nodeParam);
                }
                PutAccountSetting_parameters.xAmzTarget = !!PutAccountSetting_parameters.xAmzTarget ? PutAccountSetting_parameters.xAmzTarget : msg.payload;
                
                PutAccountSetting_nodeParam = node.PutAccountSetting_xAmzContentSha256;
                PutAccountSetting_nodeParamType = node.PutAccountSetting_xAmzContentSha256Type;
                if (PutAccountSetting_nodeParamType === 'str') {
                    PutAccountSetting_parameters.xAmzContentSha256 = PutAccountSetting_nodeParam || '';
                } else {
                    PutAccountSetting_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, PutAccountSetting_nodeParam);
                }
                PutAccountSetting_parameters.xAmzContentSha256 = !!PutAccountSetting_parameters.xAmzContentSha256 ? PutAccountSetting_parameters.xAmzContentSha256 : msg.payload;
                
                PutAccountSetting_nodeParam = node.PutAccountSetting_xAmzDate;
                PutAccountSetting_nodeParamType = node.PutAccountSetting_xAmzDateType;
                if (PutAccountSetting_nodeParamType === 'str') {
                    PutAccountSetting_parameters.xAmzDate = PutAccountSetting_nodeParam || '';
                } else {
                    PutAccountSetting_parameters.xAmzDate = RED.util.getMessageProperty(msg, PutAccountSetting_nodeParam);
                }
                PutAccountSetting_parameters.xAmzDate = !!PutAccountSetting_parameters.xAmzDate ? PutAccountSetting_parameters.xAmzDate : msg.payload;
                
                PutAccountSetting_nodeParam = node.PutAccountSetting_xAmzAlgorithm;
                PutAccountSetting_nodeParamType = node.PutAccountSetting_xAmzAlgorithmType;
                if (PutAccountSetting_nodeParamType === 'str') {
                    PutAccountSetting_parameters.xAmzAlgorithm = PutAccountSetting_nodeParam || '';
                } else {
                    PutAccountSetting_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, PutAccountSetting_nodeParam);
                }
                PutAccountSetting_parameters.xAmzAlgorithm = !!PutAccountSetting_parameters.xAmzAlgorithm ? PutAccountSetting_parameters.xAmzAlgorithm : msg.payload;
                
                PutAccountSetting_nodeParam = node.PutAccountSetting_xAmzCredential;
                PutAccountSetting_nodeParamType = node.PutAccountSetting_xAmzCredentialType;
                if (PutAccountSetting_nodeParamType === 'str') {
                    PutAccountSetting_parameters.xAmzCredential = PutAccountSetting_nodeParam || '';
                } else {
                    PutAccountSetting_parameters.xAmzCredential = RED.util.getMessageProperty(msg, PutAccountSetting_nodeParam);
                }
                PutAccountSetting_parameters.xAmzCredential = !!PutAccountSetting_parameters.xAmzCredential ? PutAccountSetting_parameters.xAmzCredential : msg.payload;
                
                PutAccountSetting_nodeParam = node.PutAccountSetting_xAmzSecurityToken;
                PutAccountSetting_nodeParamType = node.PutAccountSetting_xAmzSecurityTokenType;
                if (PutAccountSetting_nodeParamType === 'str') {
                    PutAccountSetting_parameters.xAmzSecurityToken = PutAccountSetting_nodeParam || '';
                } else {
                    PutAccountSetting_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, PutAccountSetting_nodeParam);
                }
                PutAccountSetting_parameters.xAmzSecurityToken = !!PutAccountSetting_parameters.xAmzSecurityToken ? PutAccountSetting_parameters.xAmzSecurityToken : msg.payload;
                
                PutAccountSetting_nodeParam = node.PutAccountSetting_xAmzSignature;
                PutAccountSetting_nodeParamType = node.PutAccountSetting_xAmzSignatureType;
                if (PutAccountSetting_nodeParamType === 'str') {
                    PutAccountSetting_parameters.xAmzSignature = PutAccountSetting_nodeParam || '';
                } else {
                    PutAccountSetting_parameters.xAmzSignature = RED.util.getMessageProperty(msg, PutAccountSetting_nodeParam);
                }
                PutAccountSetting_parameters.xAmzSignature = !!PutAccountSetting_parameters.xAmzSignature ? PutAccountSetting_parameters.xAmzSignature : msg.payload;
                
                PutAccountSetting_nodeParam = node.PutAccountSetting_xAmzSignedHeaders;
                PutAccountSetting_nodeParamType = node.PutAccountSetting_xAmzSignedHeadersType;
                if (PutAccountSetting_nodeParamType === 'str') {
                    PutAccountSetting_parameters.xAmzSignedHeaders = PutAccountSetting_nodeParam || '';
                } else {
                    PutAccountSetting_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, PutAccountSetting_nodeParam);
                }
                PutAccountSetting_parameters.xAmzSignedHeaders = !!PutAccountSetting_parameters.xAmzSignedHeaders ? PutAccountSetting_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.PutAccountSetting(PutAccountSetting_parameters);
            }
            if (!errorFlag && node.method === 'PutAccountSettingDefault') {
                var PutAccountSettingDefault_parameters = [];
                var PutAccountSettingDefault_nodeParam;
                var PutAccountSettingDefault_nodeParamType;

                if (typeof msg.payload === 'object') {
                    PutAccountSettingDefault_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                PutAccountSettingDefault_nodeParam = node.PutAccountSettingDefault_xAmzTarget;
                PutAccountSettingDefault_nodeParamType = node.PutAccountSettingDefault_xAmzTargetType;
                if (PutAccountSettingDefault_nodeParamType === 'str') {
                    PutAccountSettingDefault_parameters.xAmzTarget = PutAccountSettingDefault_nodeParam || '';
                } else {
                    PutAccountSettingDefault_parameters.xAmzTarget = RED.util.getMessageProperty(msg, PutAccountSettingDefault_nodeParam);
                }
                PutAccountSettingDefault_parameters.xAmzTarget = !!PutAccountSettingDefault_parameters.xAmzTarget ? PutAccountSettingDefault_parameters.xAmzTarget : msg.payload;
                
                PutAccountSettingDefault_nodeParam = node.PutAccountSettingDefault_xAmzContentSha256;
                PutAccountSettingDefault_nodeParamType = node.PutAccountSettingDefault_xAmzContentSha256Type;
                if (PutAccountSettingDefault_nodeParamType === 'str') {
                    PutAccountSettingDefault_parameters.xAmzContentSha256 = PutAccountSettingDefault_nodeParam || '';
                } else {
                    PutAccountSettingDefault_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, PutAccountSettingDefault_nodeParam);
                }
                PutAccountSettingDefault_parameters.xAmzContentSha256 = !!PutAccountSettingDefault_parameters.xAmzContentSha256 ? PutAccountSettingDefault_parameters.xAmzContentSha256 : msg.payload;
                
                PutAccountSettingDefault_nodeParam = node.PutAccountSettingDefault_xAmzDate;
                PutAccountSettingDefault_nodeParamType = node.PutAccountSettingDefault_xAmzDateType;
                if (PutAccountSettingDefault_nodeParamType === 'str') {
                    PutAccountSettingDefault_parameters.xAmzDate = PutAccountSettingDefault_nodeParam || '';
                } else {
                    PutAccountSettingDefault_parameters.xAmzDate = RED.util.getMessageProperty(msg, PutAccountSettingDefault_nodeParam);
                }
                PutAccountSettingDefault_parameters.xAmzDate = !!PutAccountSettingDefault_parameters.xAmzDate ? PutAccountSettingDefault_parameters.xAmzDate : msg.payload;
                
                PutAccountSettingDefault_nodeParam = node.PutAccountSettingDefault_xAmzAlgorithm;
                PutAccountSettingDefault_nodeParamType = node.PutAccountSettingDefault_xAmzAlgorithmType;
                if (PutAccountSettingDefault_nodeParamType === 'str') {
                    PutAccountSettingDefault_parameters.xAmzAlgorithm = PutAccountSettingDefault_nodeParam || '';
                } else {
                    PutAccountSettingDefault_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, PutAccountSettingDefault_nodeParam);
                }
                PutAccountSettingDefault_parameters.xAmzAlgorithm = !!PutAccountSettingDefault_parameters.xAmzAlgorithm ? PutAccountSettingDefault_parameters.xAmzAlgorithm : msg.payload;
                
                PutAccountSettingDefault_nodeParam = node.PutAccountSettingDefault_xAmzCredential;
                PutAccountSettingDefault_nodeParamType = node.PutAccountSettingDefault_xAmzCredentialType;
                if (PutAccountSettingDefault_nodeParamType === 'str') {
                    PutAccountSettingDefault_parameters.xAmzCredential = PutAccountSettingDefault_nodeParam || '';
                } else {
                    PutAccountSettingDefault_parameters.xAmzCredential = RED.util.getMessageProperty(msg, PutAccountSettingDefault_nodeParam);
                }
                PutAccountSettingDefault_parameters.xAmzCredential = !!PutAccountSettingDefault_parameters.xAmzCredential ? PutAccountSettingDefault_parameters.xAmzCredential : msg.payload;
                
                PutAccountSettingDefault_nodeParam = node.PutAccountSettingDefault_xAmzSecurityToken;
                PutAccountSettingDefault_nodeParamType = node.PutAccountSettingDefault_xAmzSecurityTokenType;
                if (PutAccountSettingDefault_nodeParamType === 'str') {
                    PutAccountSettingDefault_parameters.xAmzSecurityToken = PutAccountSettingDefault_nodeParam || '';
                } else {
                    PutAccountSettingDefault_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, PutAccountSettingDefault_nodeParam);
                }
                PutAccountSettingDefault_parameters.xAmzSecurityToken = !!PutAccountSettingDefault_parameters.xAmzSecurityToken ? PutAccountSettingDefault_parameters.xAmzSecurityToken : msg.payload;
                
                PutAccountSettingDefault_nodeParam = node.PutAccountSettingDefault_xAmzSignature;
                PutAccountSettingDefault_nodeParamType = node.PutAccountSettingDefault_xAmzSignatureType;
                if (PutAccountSettingDefault_nodeParamType === 'str') {
                    PutAccountSettingDefault_parameters.xAmzSignature = PutAccountSettingDefault_nodeParam || '';
                } else {
                    PutAccountSettingDefault_parameters.xAmzSignature = RED.util.getMessageProperty(msg, PutAccountSettingDefault_nodeParam);
                }
                PutAccountSettingDefault_parameters.xAmzSignature = !!PutAccountSettingDefault_parameters.xAmzSignature ? PutAccountSettingDefault_parameters.xAmzSignature : msg.payload;
                
                PutAccountSettingDefault_nodeParam = node.PutAccountSettingDefault_xAmzSignedHeaders;
                PutAccountSettingDefault_nodeParamType = node.PutAccountSettingDefault_xAmzSignedHeadersType;
                if (PutAccountSettingDefault_nodeParamType === 'str') {
                    PutAccountSettingDefault_parameters.xAmzSignedHeaders = PutAccountSettingDefault_nodeParam || '';
                } else {
                    PutAccountSettingDefault_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, PutAccountSettingDefault_nodeParam);
                }
                PutAccountSettingDefault_parameters.xAmzSignedHeaders = !!PutAccountSettingDefault_parameters.xAmzSignedHeaders ? PutAccountSettingDefault_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.PutAccountSettingDefault(PutAccountSettingDefault_parameters);
            }
            if (!errorFlag && node.method === 'PutAttributes') {
                var PutAttributes_parameters = [];
                var PutAttributes_nodeParam;
                var PutAttributes_nodeParamType;

                if (typeof msg.payload === 'object') {
                    PutAttributes_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                PutAttributes_nodeParam = node.PutAttributes_xAmzTarget;
                PutAttributes_nodeParamType = node.PutAttributes_xAmzTargetType;
                if (PutAttributes_nodeParamType === 'str') {
                    PutAttributes_parameters.xAmzTarget = PutAttributes_nodeParam || '';
                } else {
                    PutAttributes_parameters.xAmzTarget = RED.util.getMessageProperty(msg, PutAttributes_nodeParam);
                }
                PutAttributes_parameters.xAmzTarget = !!PutAttributes_parameters.xAmzTarget ? PutAttributes_parameters.xAmzTarget : msg.payload;
                
                PutAttributes_nodeParam = node.PutAttributes_xAmzContentSha256;
                PutAttributes_nodeParamType = node.PutAttributes_xAmzContentSha256Type;
                if (PutAttributes_nodeParamType === 'str') {
                    PutAttributes_parameters.xAmzContentSha256 = PutAttributes_nodeParam || '';
                } else {
                    PutAttributes_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, PutAttributes_nodeParam);
                }
                PutAttributes_parameters.xAmzContentSha256 = !!PutAttributes_parameters.xAmzContentSha256 ? PutAttributes_parameters.xAmzContentSha256 : msg.payload;
                
                PutAttributes_nodeParam = node.PutAttributes_xAmzDate;
                PutAttributes_nodeParamType = node.PutAttributes_xAmzDateType;
                if (PutAttributes_nodeParamType === 'str') {
                    PutAttributes_parameters.xAmzDate = PutAttributes_nodeParam || '';
                } else {
                    PutAttributes_parameters.xAmzDate = RED.util.getMessageProperty(msg, PutAttributes_nodeParam);
                }
                PutAttributes_parameters.xAmzDate = !!PutAttributes_parameters.xAmzDate ? PutAttributes_parameters.xAmzDate : msg.payload;
                
                PutAttributes_nodeParam = node.PutAttributes_xAmzAlgorithm;
                PutAttributes_nodeParamType = node.PutAttributes_xAmzAlgorithmType;
                if (PutAttributes_nodeParamType === 'str') {
                    PutAttributes_parameters.xAmzAlgorithm = PutAttributes_nodeParam || '';
                } else {
                    PutAttributes_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, PutAttributes_nodeParam);
                }
                PutAttributes_parameters.xAmzAlgorithm = !!PutAttributes_parameters.xAmzAlgorithm ? PutAttributes_parameters.xAmzAlgorithm : msg.payload;
                
                PutAttributes_nodeParam = node.PutAttributes_xAmzCredential;
                PutAttributes_nodeParamType = node.PutAttributes_xAmzCredentialType;
                if (PutAttributes_nodeParamType === 'str') {
                    PutAttributes_parameters.xAmzCredential = PutAttributes_nodeParam || '';
                } else {
                    PutAttributes_parameters.xAmzCredential = RED.util.getMessageProperty(msg, PutAttributes_nodeParam);
                }
                PutAttributes_parameters.xAmzCredential = !!PutAttributes_parameters.xAmzCredential ? PutAttributes_parameters.xAmzCredential : msg.payload;
                
                PutAttributes_nodeParam = node.PutAttributes_xAmzSecurityToken;
                PutAttributes_nodeParamType = node.PutAttributes_xAmzSecurityTokenType;
                if (PutAttributes_nodeParamType === 'str') {
                    PutAttributes_parameters.xAmzSecurityToken = PutAttributes_nodeParam || '';
                } else {
                    PutAttributes_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, PutAttributes_nodeParam);
                }
                PutAttributes_parameters.xAmzSecurityToken = !!PutAttributes_parameters.xAmzSecurityToken ? PutAttributes_parameters.xAmzSecurityToken : msg.payload;
                
                PutAttributes_nodeParam = node.PutAttributes_xAmzSignature;
                PutAttributes_nodeParamType = node.PutAttributes_xAmzSignatureType;
                if (PutAttributes_nodeParamType === 'str') {
                    PutAttributes_parameters.xAmzSignature = PutAttributes_nodeParam || '';
                } else {
                    PutAttributes_parameters.xAmzSignature = RED.util.getMessageProperty(msg, PutAttributes_nodeParam);
                }
                PutAttributes_parameters.xAmzSignature = !!PutAttributes_parameters.xAmzSignature ? PutAttributes_parameters.xAmzSignature : msg.payload;
                
                PutAttributes_nodeParam = node.PutAttributes_xAmzSignedHeaders;
                PutAttributes_nodeParamType = node.PutAttributes_xAmzSignedHeadersType;
                if (PutAttributes_nodeParamType === 'str') {
                    PutAttributes_parameters.xAmzSignedHeaders = PutAttributes_nodeParam || '';
                } else {
                    PutAttributes_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, PutAttributes_nodeParam);
                }
                PutAttributes_parameters.xAmzSignedHeaders = !!PutAttributes_parameters.xAmzSignedHeaders ? PutAttributes_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.PutAttributes(PutAttributes_parameters);
            }
            if (!errorFlag && node.method === 'RegisterContainerInstance') {
                var RegisterContainerInstance_parameters = [];
                var RegisterContainerInstance_nodeParam;
                var RegisterContainerInstance_nodeParamType;

                if (typeof msg.payload === 'object') {
                    RegisterContainerInstance_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                RegisterContainerInstance_nodeParam = node.RegisterContainerInstance_xAmzTarget;
                RegisterContainerInstance_nodeParamType = node.RegisterContainerInstance_xAmzTargetType;
                if (RegisterContainerInstance_nodeParamType === 'str') {
                    RegisterContainerInstance_parameters.xAmzTarget = RegisterContainerInstance_nodeParam || '';
                } else {
                    RegisterContainerInstance_parameters.xAmzTarget = RED.util.getMessageProperty(msg, RegisterContainerInstance_nodeParam);
                }
                RegisterContainerInstance_parameters.xAmzTarget = !!RegisterContainerInstance_parameters.xAmzTarget ? RegisterContainerInstance_parameters.xAmzTarget : msg.payload;
                
                RegisterContainerInstance_nodeParam = node.RegisterContainerInstance_xAmzContentSha256;
                RegisterContainerInstance_nodeParamType = node.RegisterContainerInstance_xAmzContentSha256Type;
                if (RegisterContainerInstance_nodeParamType === 'str') {
                    RegisterContainerInstance_parameters.xAmzContentSha256 = RegisterContainerInstance_nodeParam || '';
                } else {
                    RegisterContainerInstance_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, RegisterContainerInstance_nodeParam);
                }
                RegisterContainerInstance_parameters.xAmzContentSha256 = !!RegisterContainerInstance_parameters.xAmzContentSha256 ? RegisterContainerInstance_parameters.xAmzContentSha256 : msg.payload;
                
                RegisterContainerInstance_nodeParam = node.RegisterContainerInstance_xAmzDate;
                RegisterContainerInstance_nodeParamType = node.RegisterContainerInstance_xAmzDateType;
                if (RegisterContainerInstance_nodeParamType === 'str') {
                    RegisterContainerInstance_parameters.xAmzDate = RegisterContainerInstance_nodeParam || '';
                } else {
                    RegisterContainerInstance_parameters.xAmzDate = RED.util.getMessageProperty(msg, RegisterContainerInstance_nodeParam);
                }
                RegisterContainerInstance_parameters.xAmzDate = !!RegisterContainerInstance_parameters.xAmzDate ? RegisterContainerInstance_parameters.xAmzDate : msg.payload;
                
                RegisterContainerInstance_nodeParam = node.RegisterContainerInstance_xAmzAlgorithm;
                RegisterContainerInstance_nodeParamType = node.RegisterContainerInstance_xAmzAlgorithmType;
                if (RegisterContainerInstance_nodeParamType === 'str') {
                    RegisterContainerInstance_parameters.xAmzAlgorithm = RegisterContainerInstance_nodeParam || '';
                } else {
                    RegisterContainerInstance_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, RegisterContainerInstance_nodeParam);
                }
                RegisterContainerInstance_parameters.xAmzAlgorithm = !!RegisterContainerInstance_parameters.xAmzAlgorithm ? RegisterContainerInstance_parameters.xAmzAlgorithm : msg.payload;
                
                RegisterContainerInstance_nodeParam = node.RegisterContainerInstance_xAmzCredential;
                RegisterContainerInstance_nodeParamType = node.RegisterContainerInstance_xAmzCredentialType;
                if (RegisterContainerInstance_nodeParamType === 'str') {
                    RegisterContainerInstance_parameters.xAmzCredential = RegisterContainerInstance_nodeParam || '';
                } else {
                    RegisterContainerInstance_parameters.xAmzCredential = RED.util.getMessageProperty(msg, RegisterContainerInstance_nodeParam);
                }
                RegisterContainerInstance_parameters.xAmzCredential = !!RegisterContainerInstance_parameters.xAmzCredential ? RegisterContainerInstance_parameters.xAmzCredential : msg.payload;
                
                RegisterContainerInstance_nodeParam = node.RegisterContainerInstance_xAmzSecurityToken;
                RegisterContainerInstance_nodeParamType = node.RegisterContainerInstance_xAmzSecurityTokenType;
                if (RegisterContainerInstance_nodeParamType === 'str') {
                    RegisterContainerInstance_parameters.xAmzSecurityToken = RegisterContainerInstance_nodeParam || '';
                } else {
                    RegisterContainerInstance_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, RegisterContainerInstance_nodeParam);
                }
                RegisterContainerInstance_parameters.xAmzSecurityToken = !!RegisterContainerInstance_parameters.xAmzSecurityToken ? RegisterContainerInstance_parameters.xAmzSecurityToken : msg.payload;
                
                RegisterContainerInstance_nodeParam = node.RegisterContainerInstance_xAmzSignature;
                RegisterContainerInstance_nodeParamType = node.RegisterContainerInstance_xAmzSignatureType;
                if (RegisterContainerInstance_nodeParamType === 'str') {
                    RegisterContainerInstance_parameters.xAmzSignature = RegisterContainerInstance_nodeParam || '';
                } else {
                    RegisterContainerInstance_parameters.xAmzSignature = RED.util.getMessageProperty(msg, RegisterContainerInstance_nodeParam);
                }
                RegisterContainerInstance_parameters.xAmzSignature = !!RegisterContainerInstance_parameters.xAmzSignature ? RegisterContainerInstance_parameters.xAmzSignature : msg.payload;
                
                RegisterContainerInstance_nodeParam = node.RegisterContainerInstance_xAmzSignedHeaders;
                RegisterContainerInstance_nodeParamType = node.RegisterContainerInstance_xAmzSignedHeadersType;
                if (RegisterContainerInstance_nodeParamType === 'str') {
                    RegisterContainerInstance_parameters.xAmzSignedHeaders = RegisterContainerInstance_nodeParam || '';
                } else {
                    RegisterContainerInstance_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, RegisterContainerInstance_nodeParam);
                }
                RegisterContainerInstance_parameters.xAmzSignedHeaders = !!RegisterContainerInstance_parameters.xAmzSignedHeaders ? RegisterContainerInstance_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.RegisterContainerInstance(RegisterContainerInstance_parameters);
            }
            if (!errorFlag && node.method === 'RegisterTaskDefinition') {
                var RegisterTaskDefinition_parameters = [];
                var RegisterTaskDefinition_nodeParam;
                var RegisterTaskDefinition_nodeParamType;

                if (typeof msg.payload === 'object') {
                    RegisterTaskDefinition_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                RegisterTaskDefinition_nodeParam = node.RegisterTaskDefinition_xAmzTarget;
                RegisterTaskDefinition_nodeParamType = node.RegisterTaskDefinition_xAmzTargetType;
                if (RegisterTaskDefinition_nodeParamType === 'str') {
                    RegisterTaskDefinition_parameters.xAmzTarget = RegisterTaskDefinition_nodeParam || '';
                } else {
                    RegisterTaskDefinition_parameters.xAmzTarget = RED.util.getMessageProperty(msg, RegisterTaskDefinition_nodeParam);
                }
                RegisterTaskDefinition_parameters.xAmzTarget = !!RegisterTaskDefinition_parameters.xAmzTarget ? RegisterTaskDefinition_parameters.xAmzTarget : msg.payload;
                
                RegisterTaskDefinition_nodeParam = node.RegisterTaskDefinition_xAmzContentSha256;
                RegisterTaskDefinition_nodeParamType = node.RegisterTaskDefinition_xAmzContentSha256Type;
                if (RegisterTaskDefinition_nodeParamType === 'str') {
                    RegisterTaskDefinition_parameters.xAmzContentSha256 = RegisterTaskDefinition_nodeParam || '';
                } else {
                    RegisterTaskDefinition_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, RegisterTaskDefinition_nodeParam);
                }
                RegisterTaskDefinition_parameters.xAmzContentSha256 = !!RegisterTaskDefinition_parameters.xAmzContentSha256 ? RegisterTaskDefinition_parameters.xAmzContentSha256 : msg.payload;
                
                RegisterTaskDefinition_nodeParam = node.RegisterTaskDefinition_xAmzDate;
                RegisterTaskDefinition_nodeParamType = node.RegisterTaskDefinition_xAmzDateType;
                if (RegisterTaskDefinition_nodeParamType === 'str') {
                    RegisterTaskDefinition_parameters.xAmzDate = RegisterTaskDefinition_nodeParam || '';
                } else {
                    RegisterTaskDefinition_parameters.xAmzDate = RED.util.getMessageProperty(msg, RegisterTaskDefinition_nodeParam);
                }
                RegisterTaskDefinition_parameters.xAmzDate = !!RegisterTaskDefinition_parameters.xAmzDate ? RegisterTaskDefinition_parameters.xAmzDate : msg.payload;
                
                RegisterTaskDefinition_nodeParam = node.RegisterTaskDefinition_xAmzAlgorithm;
                RegisterTaskDefinition_nodeParamType = node.RegisterTaskDefinition_xAmzAlgorithmType;
                if (RegisterTaskDefinition_nodeParamType === 'str') {
                    RegisterTaskDefinition_parameters.xAmzAlgorithm = RegisterTaskDefinition_nodeParam || '';
                } else {
                    RegisterTaskDefinition_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, RegisterTaskDefinition_nodeParam);
                }
                RegisterTaskDefinition_parameters.xAmzAlgorithm = !!RegisterTaskDefinition_parameters.xAmzAlgorithm ? RegisterTaskDefinition_parameters.xAmzAlgorithm : msg.payload;
                
                RegisterTaskDefinition_nodeParam = node.RegisterTaskDefinition_xAmzCredential;
                RegisterTaskDefinition_nodeParamType = node.RegisterTaskDefinition_xAmzCredentialType;
                if (RegisterTaskDefinition_nodeParamType === 'str') {
                    RegisterTaskDefinition_parameters.xAmzCredential = RegisterTaskDefinition_nodeParam || '';
                } else {
                    RegisterTaskDefinition_parameters.xAmzCredential = RED.util.getMessageProperty(msg, RegisterTaskDefinition_nodeParam);
                }
                RegisterTaskDefinition_parameters.xAmzCredential = !!RegisterTaskDefinition_parameters.xAmzCredential ? RegisterTaskDefinition_parameters.xAmzCredential : msg.payload;
                
                RegisterTaskDefinition_nodeParam = node.RegisterTaskDefinition_xAmzSecurityToken;
                RegisterTaskDefinition_nodeParamType = node.RegisterTaskDefinition_xAmzSecurityTokenType;
                if (RegisterTaskDefinition_nodeParamType === 'str') {
                    RegisterTaskDefinition_parameters.xAmzSecurityToken = RegisterTaskDefinition_nodeParam || '';
                } else {
                    RegisterTaskDefinition_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, RegisterTaskDefinition_nodeParam);
                }
                RegisterTaskDefinition_parameters.xAmzSecurityToken = !!RegisterTaskDefinition_parameters.xAmzSecurityToken ? RegisterTaskDefinition_parameters.xAmzSecurityToken : msg.payload;
                
                RegisterTaskDefinition_nodeParam = node.RegisterTaskDefinition_xAmzSignature;
                RegisterTaskDefinition_nodeParamType = node.RegisterTaskDefinition_xAmzSignatureType;
                if (RegisterTaskDefinition_nodeParamType === 'str') {
                    RegisterTaskDefinition_parameters.xAmzSignature = RegisterTaskDefinition_nodeParam || '';
                } else {
                    RegisterTaskDefinition_parameters.xAmzSignature = RED.util.getMessageProperty(msg, RegisterTaskDefinition_nodeParam);
                }
                RegisterTaskDefinition_parameters.xAmzSignature = !!RegisterTaskDefinition_parameters.xAmzSignature ? RegisterTaskDefinition_parameters.xAmzSignature : msg.payload;
                
                RegisterTaskDefinition_nodeParam = node.RegisterTaskDefinition_xAmzSignedHeaders;
                RegisterTaskDefinition_nodeParamType = node.RegisterTaskDefinition_xAmzSignedHeadersType;
                if (RegisterTaskDefinition_nodeParamType === 'str') {
                    RegisterTaskDefinition_parameters.xAmzSignedHeaders = RegisterTaskDefinition_nodeParam || '';
                } else {
                    RegisterTaskDefinition_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, RegisterTaskDefinition_nodeParam);
                }
                RegisterTaskDefinition_parameters.xAmzSignedHeaders = !!RegisterTaskDefinition_parameters.xAmzSignedHeaders ? RegisterTaskDefinition_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.RegisterTaskDefinition(RegisterTaskDefinition_parameters);
            }
            if (!errorFlag && node.method === 'RunTask') {
                var RunTask_parameters = [];
                var RunTask_nodeParam;
                var RunTask_nodeParamType;

                if (typeof msg.payload === 'object') {
                    RunTask_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                RunTask_nodeParam = node.RunTask_xAmzTarget;
                RunTask_nodeParamType = node.RunTask_xAmzTargetType;
                if (RunTask_nodeParamType === 'str') {
                    RunTask_parameters.xAmzTarget = RunTask_nodeParam || '';
                } else {
                    RunTask_parameters.xAmzTarget = RED.util.getMessageProperty(msg, RunTask_nodeParam);
                }
                RunTask_parameters.xAmzTarget = !!RunTask_parameters.xAmzTarget ? RunTask_parameters.xAmzTarget : msg.payload;
                
                RunTask_nodeParam = node.RunTask_xAmzContentSha256;
                RunTask_nodeParamType = node.RunTask_xAmzContentSha256Type;
                if (RunTask_nodeParamType === 'str') {
                    RunTask_parameters.xAmzContentSha256 = RunTask_nodeParam || '';
                } else {
                    RunTask_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, RunTask_nodeParam);
                }
                RunTask_parameters.xAmzContentSha256 = !!RunTask_parameters.xAmzContentSha256 ? RunTask_parameters.xAmzContentSha256 : msg.payload;
                
                RunTask_nodeParam = node.RunTask_xAmzDate;
                RunTask_nodeParamType = node.RunTask_xAmzDateType;
                if (RunTask_nodeParamType === 'str') {
                    RunTask_parameters.xAmzDate = RunTask_nodeParam || '';
                } else {
                    RunTask_parameters.xAmzDate = RED.util.getMessageProperty(msg, RunTask_nodeParam);
                }
                RunTask_parameters.xAmzDate = !!RunTask_parameters.xAmzDate ? RunTask_parameters.xAmzDate : msg.payload;
                
                RunTask_nodeParam = node.RunTask_xAmzAlgorithm;
                RunTask_nodeParamType = node.RunTask_xAmzAlgorithmType;
                if (RunTask_nodeParamType === 'str') {
                    RunTask_parameters.xAmzAlgorithm = RunTask_nodeParam || '';
                } else {
                    RunTask_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, RunTask_nodeParam);
                }
                RunTask_parameters.xAmzAlgorithm = !!RunTask_parameters.xAmzAlgorithm ? RunTask_parameters.xAmzAlgorithm : msg.payload;
                
                RunTask_nodeParam = node.RunTask_xAmzCredential;
                RunTask_nodeParamType = node.RunTask_xAmzCredentialType;
                if (RunTask_nodeParamType === 'str') {
                    RunTask_parameters.xAmzCredential = RunTask_nodeParam || '';
                } else {
                    RunTask_parameters.xAmzCredential = RED.util.getMessageProperty(msg, RunTask_nodeParam);
                }
                RunTask_parameters.xAmzCredential = !!RunTask_parameters.xAmzCredential ? RunTask_parameters.xAmzCredential : msg.payload;
                
                RunTask_nodeParam = node.RunTask_xAmzSecurityToken;
                RunTask_nodeParamType = node.RunTask_xAmzSecurityTokenType;
                if (RunTask_nodeParamType === 'str') {
                    RunTask_parameters.xAmzSecurityToken = RunTask_nodeParam || '';
                } else {
                    RunTask_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, RunTask_nodeParam);
                }
                RunTask_parameters.xAmzSecurityToken = !!RunTask_parameters.xAmzSecurityToken ? RunTask_parameters.xAmzSecurityToken : msg.payload;
                
                RunTask_nodeParam = node.RunTask_xAmzSignature;
                RunTask_nodeParamType = node.RunTask_xAmzSignatureType;
                if (RunTask_nodeParamType === 'str') {
                    RunTask_parameters.xAmzSignature = RunTask_nodeParam || '';
                } else {
                    RunTask_parameters.xAmzSignature = RED.util.getMessageProperty(msg, RunTask_nodeParam);
                }
                RunTask_parameters.xAmzSignature = !!RunTask_parameters.xAmzSignature ? RunTask_parameters.xAmzSignature : msg.payload;
                
                RunTask_nodeParam = node.RunTask_xAmzSignedHeaders;
                RunTask_nodeParamType = node.RunTask_xAmzSignedHeadersType;
                if (RunTask_nodeParamType === 'str') {
                    RunTask_parameters.xAmzSignedHeaders = RunTask_nodeParam || '';
                } else {
                    RunTask_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, RunTask_nodeParam);
                }
                RunTask_parameters.xAmzSignedHeaders = !!RunTask_parameters.xAmzSignedHeaders ? RunTask_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.RunTask(RunTask_parameters);
            }
            if (!errorFlag && node.method === 'StartTask') {
                var StartTask_parameters = [];
                var StartTask_nodeParam;
                var StartTask_nodeParamType;

                if (typeof msg.payload === 'object') {
                    StartTask_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                StartTask_nodeParam = node.StartTask_xAmzTarget;
                StartTask_nodeParamType = node.StartTask_xAmzTargetType;
                if (StartTask_nodeParamType === 'str') {
                    StartTask_parameters.xAmzTarget = StartTask_nodeParam || '';
                } else {
                    StartTask_parameters.xAmzTarget = RED.util.getMessageProperty(msg, StartTask_nodeParam);
                }
                StartTask_parameters.xAmzTarget = !!StartTask_parameters.xAmzTarget ? StartTask_parameters.xAmzTarget : msg.payload;
                
                StartTask_nodeParam = node.StartTask_xAmzContentSha256;
                StartTask_nodeParamType = node.StartTask_xAmzContentSha256Type;
                if (StartTask_nodeParamType === 'str') {
                    StartTask_parameters.xAmzContentSha256 = StartTask_nodeParam || '';
                } else {
                    StartTask_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, StartTask_nodeParam);
                }
                StartTask_parameters.xAmzContentSha256 = !!StartTask_parameters.xAmzContentSha256 ? StartTask_parameters.xAmzContentSha256 : msg.payload;
                
                StartTask_nodeParam = node.StartTask_xAmzDate;
                StartTask_nodeParamType = node.StartTask_xAmzDateType;
                if (StartTask_nodeParamType === 'str') {
                    StartTask_parameters.xAmzDate = StartTask_nodeParam || '';
                } else {
                    StartTask_parameters.xAmzDate = RED.util.getMessageProperty(msg, StartTask_nodeParam);
                }
                StartTask_parameters.xAmzDate = !!StartTask_parameters.xAmzDate ? StartTask_parameters.xAmzDate : msg.payload;
                
                StartTask_nodeParam = node.StartTask_xAmzAlgorithm;
                StartTask_nodeParamType = node.StartTask_xAmzAlgorithmType;
                if (StartTask_nodeParamType === 'str') {
                    StartTask_parameters.xAmzAlgorithm = StartTask_nodeParam || '';
                } else {
                    StartTask_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, StartTask_nodeParam);
                }
                StartTask_parameters.xAmzAlgorithm = !!StartTask_parameters.xAmzAlgorithm ? StartTask_parameters.xAmzAlgorithm : msg.payload;
                
                StartTask_nodeParam = node.StartTask_xAmzCredential;
                StartTask_nodeParamType = node.StartTask_xAmzCredentialType;
                if (StartTask_nodeParamType === 'str') {
                    StartTask_parameters.xAmzCredential = StartTask_nodeParam || '';
                } else {
                    StartTask_parameters.xAmzCredential = RED.util.getMessageProperty(msg, StartTask_nodeParam);
                }
                StartTask_parameters.xAmzCredential = !!StartTask_parameters.xAmzCredential ? StartTask_parameters.xAmzCredential : msg.payload;
                
                StartTask_nodeParam = node.StartTask_xAmzSecurityToken;
                StartTask_nodeParamType = node.StartTask_xAmzSecurityTokenType;
                if (StartTask_nodeParamType === 'str') {
                    StartTask_parameters.xAmzSecurityToken = StartTask_nodeParam || '';
                } else {
                    StartTask_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, StartTask_nodeParam);
                }
                StartTask_parameters.xAmzSecurityToken = !!StartTask_parameters.xAmzSecurityToken ? StartTask_parameters.xAmzSecurityToken : msg.payload;
                
                StartTask_nodeParam = node.StartTask_xAmzSignature;
                StartTask_nodeParamType = node.StartTask_xAmzSignatureType;
                if (StartTask_nodeParamType === 'str') {
                    StartTask_parameters.xAmzSignature = StartTask_nodeParam || '';
                } else {
                    StartTask_parameters.xAmzSignature = RED.util.getMessageProperty(msg, StartTask_nodeParam);
                }
                StartTask_parameters.xAmzSignature = !!StartTask_parameters.xAmzSignature ? StartTask_parameters.xAmzSignature : msg.payload;
                
                StartTask_nodeParam = node.StartTask_xAmzSignedHeaders;
                StartTask_nodeParamType = node.StartTask_xAmzSignedHeadersType;
                if (StartTask_nodeParamType === 'str') {
                    StartTask_parameters.xAmzSignedHeaders = StartTask_nodeParam || '';
                } else {
                    StartTask_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, StartTask_nodeParam);
                }
                StartTask_parameters.xAmzSignedHeaders = !!StartTask_parameters.xAmzSignedHeaders ? StartTask_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.StartTask(StartTask_parameters);
            }
            if (!errorFlag && node.method === 'StopTask') {
                var StopTask_parameters = [];
                var StopTask_nodeParam;
                var StopTask_nodeParamType;

                if (typeof msg.payload === 'object') {
                    StopTask_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                StopTask_nodeParam = node.StopTask_xAmzTarget;
                StopTask_nodeParamType = node.StopTask_xAmzTargetType;
                if (StopTask_nodeParamType === 'str') {
                    StopTask_parameters.xAmzTarget = StopTask_nodeParam || '';
                } else {
                    StopTask_parameters.xAmzTarget = RED.util.getMessageProperty(msg, StopTask_nodeParam);
                }
                StopTask_parameters.xAmzTarget = !!StopTask_parameters.xAmzTarget ? StopTask_parameters.xAmzTarget : msg.payload;
                
                StopTask_nodeParam = node.StopTask_xAmzContentSha256;
                StopTask_nodeParamType = node.StopTask_xAmzContentSha256Type;
                if (StopTask_nodeParamType === 'str') {
                    StopTask_parameters.xAmzContentSha256 = StopTask_nodeParam || '';
                } else {
                    StopTask_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, StopTask_nodeParam);
                }
                StopTask_parameters.xAmzContentSha256 = !!StopTask_parameters.xAmzContentSha256 ? StopTask_parameters.xAmzContentSha256 : msg.payload;
                
                StopTask_nodeParam = node.StopTask_xAmzDate;
                StopTask_nodeParamType = node.StopTask_xAmzDateType;
                if (StopTask_nodeParamType === 'str') {
                    StopTask_parameters.xAmzDate = StopTask_nodeParam || '';
                } else {
                    StopTask_parameters.xAmzDate = RED.util.getMessageProperty(msg, StopTask_nodeParam);
                }
                StopTask_parameters.xAmzDate = !!StopTask_parameters.xAmzDate ? StopTask_parameters.xAmzDate : msg.payload;
                
                StopTask_nodeParam = node.StopTask_xAmzAlgorithm;
                StopTask_nodeParamType = node.StopTask_xAmzAlgorithmType;
                if (StopTask_nodeParamType === 'str') {
                    StopTask_parameters.xAmzAlgorithm = StopTask_nodeParam || '';
                } else {
                    StopTask_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, StopTask_nodeParam);
                }
                StopTask_parameters.xAmzAlgorithm = !!StopTask_parameters.xAmzAlgorithm ? StopTask_parameters.xAmzAlgorithm : msg.payload;
                
                StopTask_nodeParam = node.StopTask_xAmzCredential;
                StopTask_nodeParamType = node.StopTask_xAmzCredentialType;
                if (StopTask_nodeParamType === 'str') {
                    StopTask_parameters.xAmzCredential = StopTask_nodeParam || '';
                } else {
                    StopTask_parameters.xAmzCredential = RED.util.getMessageProperty(msg, StopTask_nodeParam);
                }
                StopTask_parameters.xAmzCredential = !!StopTask_parameters.xAmzCredential ? StopTask_parameters.xAmzCredential : msg.payload;
                
                StopTask_nodeParam = node.StopTask_xAmzSecurityToken;
                StopTask_nodeParamType = node.StopTask_xAmzSecurityTokenType;
                if (StopTask_nodeParamType === 'str') {
                    StopTask_parameters.xAmzSecurityToken = StopTask_nodeParam || '';
                } else {
                    StopTask_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, StopTask_nodeParam);
                }
                StopTask_parameters.xAmzSecurityToken = !!StopTask_parameters.xAmzSecurityToken ? StopTask_parameters.xAmzSecurityToken : msg.payload;
                
                StopTask_nodeParam = node.StopTask_xAmzSignature;
                StopTask_nodeParamType = node.StopTask_xAmzSignatureType;
                if (StopTask_nodeParamType === 'str') {
                    StopTask_parameters.xAmzSignature = StopTask_nodeParam || '';
                } else {
                    StopTask_parameters.xAmzSignature = RED.util.getMessageProperty(msg, StopTask_nodeParam);
                }
                StopTask_parameters.xAmzSignature = !!StopTask_parameters.xAmzSignature ? StopTask_parameters.xAmzSignature : msg.payload;
                
                StopTask_nodeParam = node.StopTask_xAmzSignedHeaders;
                StopTask_nodeParamType = node.StopTask_xAmzSignedHeadersType;
                if (StopTask_nodeParamType === 'str') {
                    StopTask_parameters.xAmzSignedHeaders = StopTask_nodeParam || '';
                } else {
                    StopTask_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, StopTask_nodeParam);
                }
                StopTask_parameters.xAmzSignedHeaders = !!StopTask_parameters.xAmzSignedHeaders ? StopTask_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.StopTask(StopTask_parameters);
            }
            if (!errorFlag && node.method === 'SubmitAttachmentStateChanges') {
                var SubmitAttachmentStateChanges_parameters = [];
                var SubmitAttachmentStateChanges_nodeParam;
                var SubmitAttachmentStateChanges_nodeParamType;

                if (typeof msg.payload === 'object') {
                    SubmitAttachmentStateChanges_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                SubmitAttachmentStateChanges_nodeParam = node.SubmitAttachmentStateChanges_xAmzTarget;
                SubmitAttachmentStateChanges_nodeParamType = node.SubmitAttachmentStateChanges_xAmzTargetType;
                if (SubmitAttachmentStateChanges_nodeParamType === 'str') {
                    SubmitAttachmentStateChanges_parameters.xAmzTarget = SubmitAttachmentStateChanges_nodeParam || '';
                } else {
                    SubmitAttachmentStateChanges_parameters.xAmzTarget = RED.util.getMessageProperty(msg, SubmitAttachmentStateChanges_nodeParam);
                }
                SubmitAttachmentStateChanges_parameters.xAmzTarget = !!SubmitAttachmentStateChanges_parameters.xAmzTarget ? SubmitAttachmentStateChanges_parameters.xAmzTarget : msg.payload;
                
                SubmitAttachmentStateChanges_nodeParam = node.SubmitAttachmentStateChanges_xAmzContentSha256;
                SubmitAttachmentStateChanges_nodeParamType = node.SubmitAttachmentStateChanges_xAmzContentSha256Type;
                if (SubmitAttachmentStateChanges_nodeParamType === 'str') {
                    SubmitAttachmentStateChanges_parameters.xAmzContentSha256 = SubmitAttachmentStateChanges_nodeParam || '';
                } else {
                    SubmitAttachmentStateChanges_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, SubmitAttachmentStateChanges_nodeParam);
                }
                SubmitAttachmentStateChanges_parameters.xAmzContentSha256 = !!SubmitAttachmentStateChanges_parameters.xAmzContentSha256 ? SubmitAttachmentStateChanges_parameters.xAmzContentSha256 : msg.payload;
                
                SubmitAttachmentStateChanges_nodeParam = node.SubmitAttachmentStateChanges_xAmzDate;
                SubmitAttachmentStateChanges_nodeParamType = node.SubmitAttachmentStateChanges_xAmzDateType;
                if (SubmitAttachmentStateChanges_nodeParamType === 'str') {
                    SubmitAttachmentStateChanges_parameters.xAmzDate = SubmitAttachmentStateChanges_nodeParam || '';
                } else {
                    SubmitAttachmentStateChanges_parameters.xAmzDate = RED.util.getMessageProperty(msg, SubmitAttachmentStateChanges_nodeParam);
                }
                SubmitAttachmentStateChanges_parameters.xAmzDate = !!SubmitAttachmentStateChanges_parameters.xAmzDate ? SubmitAttachmentStateChanges_parameters.xAmzDate : msg.payload;
                
                SubmitAttachmentStateChanges_nodeParam = node.SubmitAttachmentStateChanges_xAmzAlgorithm;
                SubmitAttachmentStateChanges_nodeParamType = node.SubmitAttachmentStateChanges_xAmzAlgorithmType;
                if (SubmitAttachmentStateChanges_nodeParamType === 'str') {
                    SubmitAttachmentStateChanges_parameters.xAmzAlgorithm = SubmitAttachmentStateChanges_nodeParam || '';
                } else {
                    SubmitAttachmentStateChanges_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, SubmitAttachmentStateChanges_nodeParam);
                }
                SubmitAttachmentStateChanges_parameters.xAmzAlgorithm = !!SubmitAttachmentStateChanges_parameters.xAmzAlgorithm ? SubmitAttachmentStateChanges_parameters.xAmzAlgorithm : msg.payload;
                
                SubmitAttachmentStateChanges_nodeParam = node.SubmitAttachmentStateChanges_xAmzCredential;
                SubmitAttachmentStateChanges_nodeParamType = node.SubmitAttachmentStateChanges_xAmzCredentialType;
                if (SubmitAttachmentStateChanges_nodeParamType === 'str') {
                    SubmitAttachmentStateChanges_parameters.xAmzCredential = SubmitAttachmentStateChanges_nodeParam || '';
                } else {
                    SubmitAttachmentStateChanges_parameters.xAmzCredential = RED.util.getMessageProperty(msg, SubmitAttachmentStateChanges_nodeParam);
                }
                SubmitAttachmentStateChanges_parameters.xAmzCredential = !!SubmitAttachmentStateChanges_parameters.xAmzCredential ? SubmitAttachmentStateChanges_parameters.xAmzCredential : msg.payload;
                
                SubmitAttachmentStateChanges_nodeParam = node.SubmitAttachmentStateChanges_xAmzSecurityToken;
                SubmitAttachmentStateChanges_nodeParamType = node.SubmitAttachmentStateChanges_xAmzSecurityTokenType;
                if (SubmitAttachmentStateChanges_nodeParamType === 'str') {
                    SubmitAttachmentStateChanges_parameters.xAmzSecurityToken = SubmitAttachmentStateChanges_nodeParam || '';
                } else {
                    SubmitAttachmentStateChanges_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, SubmitAttachmentStateChanges_nodeParam);
                }
                SubmitAttachmentStateChanges_parameters.xAmzSecurityToken = !!SubmitAttachmentStateChanges_parameters.xAmzSecurityToken ? SubmitAttachmentStateChanges_parameters.xAmzSecurityToken : msg.payload;
                
                SubmitAttachmentStateChanges_nodeParam = node.SubmitAttachmentStateChanges_xAmzSignature;
                SubmitAttachmentStateChanges_nodeParamType = node.SubmitAttachmentStateChanges_xAmzSignatureType;
                if (SubmitAttachmentStateChanges_nodeParamType === 'str') {
                    SubmitAttachmentStateChanges_parameters.xAmzSignature = SubmitAttachmentStateChanges_nodeParam || '';
                } else {
                    SubmitAttachmentStateChanges_parameters.xAmzSignature = RED.util.getMessageProperty(msg, SubmitAttachmentStateChanges_nodeParam);
                }
                SubmitAttachmentStateChanges_parameters.xAmzSignature = !!SubmitAttachmentStateChanges_parameters.xAmzSignature ? SubmitAttachmentStateChanges_parameters.xAmzSignature : msg.payload;
                
                SubmitAttachmentStateChanges_nodeParam = node.SubmitAttachmentStateChanges_xAmzSignedHeaders;
                SubmitAttachmentStateChanges_nodeParamType = node.SubmitAttachmentStateChanges_xAmzSignedHeadersType;
                if (SubmitAttachmentStateChanges_nodeParamType === 'str') {
                    SubmitAttachmentStateChanges_parameters.xAmzSignedHeaders = SubmitAttachmentStateChanges_nodeParam || '';
                } else {
                    SubmitAttachmentStateChanges_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, SubmitAttachmentStateChanges_nodeParam);
                }
                SubmitAttachmentStateChanges_parameters.xAmzSignedHeaders = !!SubmitAttachmentStateChanges_parameters.xAmzSignedHeaders ? SubmitAttachmentStateChanges_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.SubmitAttachmentStateChanges(SubmitAttachmentStateChanges_parameters);
            }
            if (!errorFlag && node.method === 'SubmitContainerStateChange') {
                var SubmitContainerStateChange_parameters = [];
                var SubmitContainerStateChange_nodeParam;
                var SubmitContainerStateChange_nodeParamType;

                if (typeof msg.payload === 'object') {
                    SubmitContainerStateChange_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                SubmitContainerStateChange_nodeParam = node.SubmitContainerStateChange_xAmzTarget;
                SubmitContainerStateChange_nodeParamType = node.SubmitContainerStateChange_xAmzTargetType;
                if (SubmitContainerStateChange_nodeParamType === 'str') {
                    SubmitContainerStateChange_parameters.xAmzTarget = SubmitContainerStateChange_nodeParam || '';
                } else {
                    SubmitContainerStateChange_parameters.xAmzTarget = RED.util.getMessageProperty(msg, SubmitContainerStateChange_nodeParam);
                }
                SubmitContainerStateChange_parameters.xAmzTarget = !!SubmitContainerStateChange_parameters.xAmzTarget ? SubmitContainerStateChange_parameters.xAmzTarget : msg.payload;
                
                SubmitContainerStateChange_nodeParam = node.SubmitContainerStateChange_xAmzContentSha256;
                SubmitContainerStateChange_nodeParamType = node.SubmitContainerStateChange_xAmzContentSha256Type;
                if (SubmitContainerStateChange_nodeParamType === 'str') {
                    SubmitContainerStateChange_parameters.xAmzContentSha256 = SubmitContainerStateChange_nodeParam || '';
                } else {
                    SubmitContainerStateChange_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, SubmitContainerStateChange_nodeParam);
                }
                SubmitContainerStateChange_parameters.xAmzContentSha256 = !!SubmitContainerStateChange_parameters.xAmzContentSha256 ? SubmitContainerStateChange_parameters.xAmzContentSha256 : msg.payload;
                
                SubmitContainerStateChange_nodeParam = node.SubmitContainerStateChange_xAmzDate;
                SubmitContainerStateChange_nodeParamType = node.SubmitContainerStateChange_xAmzDateType;
                if (SubmitContainerStateChange_nodeParamType === 'str') {
                    SubmitContainerStateChange_parameters.xAmzDate = SubmitContainerStateChange_nodeParam || '';
                } else {
                    SubmitContainerStateChange_parameters.xAmzDate = RED.util.getMessageProperty(msg, SubmitContainerStateChange_nodeParam);
                }
                SubmitContainerStateChange_parameters.xAmzDate = !!SubmitContainerStateChange_parameters.xAmzDate ? SubmitContainerStateChange_parameters.xAmzDate : msg.payload;
                
                SubmitContainerStateChange_nodeParam = node.SubmitContainerStateChange_xAmzAlgorithm;
                SubmitContainerStateChange_nodeParamType = node.SubmitContainerStateChange_xAmzAlgorithmType;
                if (SubmitContainerStateChange_nodeParamType === 'str') {
                    SubmitContainerStateChange_parameters.xAmzAlgorithm = SubmitContainerStateChange_nodeParam || '';
                } else {
                    SubmitContainerStateChange_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, SubmitContainerStateChange_nodeParam);
                }
                SubmitContainerStateChange_parameters.xAmzAlgorithm = !!SubmitContainerStateChange_parameters.xAmzAlgorithm ? SubmitContainerStateChange_parameters.xAmzAlgorithm : msg.payload;
                
                SubmitContainerStateChange_nodeParam = node.SubmitContainerStateChange_xAmzCredential;
                SubmitContainerStateChange_nodeParamType = node.SubmitContainerStateChange_xAmzCredentialType;
                if (SubmitContainerStateChange_nodeParamType === 'str') {
                    SubmitContainerStateChange_parameters.xAmzCredential = SubmitContainerStateChange_nodeParam || '';
                } else {
                    SubmitContainerStateChange_parameters.xAmzCredential = RED.util.getMessageProperty(msg, SubmitContainerStateChange_nodeParam);
                }
                SubmitContainerStateChange_parameters.xAmzCredential = !!SubmitContainerStateChange_parameters.xAmzCredential ? SubmitContainerStateChange_parameters.xAmzCredential : msg.payload;
                
                SubmitContainerStateChange_nodeParam = node.SubmitContainerStateChange_xAmzSecurityToken;
                SubmitContainerStateChange_nodeParamType = node.SubmitContainerStateChange_xAmzSecurityTokenType;
                if (SubmitContainerStateChange_nodeParamType === 'str') {
                    SubmitContainerStateChange_parameters.xAmzSecurityToken = SubmitContainerStateChange_nodeParam || '';
                } else {
                    SubmitContainerStateChange_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, SubmitContainerStateChange_nodeParam);
                }
                SubmitContainerStateChange_parameters.xAmzSecurityToken = !!SubmitContainerStateChange_parameters.xAmzSecurityToken ? SubmitContainerStateChange_parameters.xAmzSecurityToken : msg.payload;
                
                SubmitContainerStateChange_nodeParam = node.SubmitContainerStateChange_xAmzSignature;
                SubmitContainerStateChange_nodeParamType = node.SubmitContainerStateChange_xAmzSignatureType;
                if (SubmitContainerStateChange_nodeParamType === 'str') {
                    SubmitContainerStateChange_parameters.xAmzSignature = SubmitContainerStateChange_nodeParam || '';
                } else {
                    SubmitContainerStateChange_parameters.xAmzSignature = RED.util.getMessageProperty(msg, SubmitContainerStateChange_nodeParam);
                }
                SubmitContainerStateChange_parameters.xAmzSignature = !!SubmitContainerStateChange_parameters.xAmzSignature ? SubmitContainerStateChange_parameters.xAmzSignature : msg.payload;
                
                SubmitContainerStateChange_nodeParam = node.SubmitContainerStateChange_xAmzSignedHeaders;
                SubmitContainerStateChange_nodeParamType = node.SubmitContainerStateChange_xAmzSignedHeadersType;
                if (SubmitContainerStateChange_nodeParamType === 'str') {
                    SubmitContainerStateChange_parameters.xAmzSignedHeaders = SubmitContainerStateChange_nodeParam || '';
                } else {
                    SubmitContainerStateChange_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, SubmitContainerStateChange_nodeParam);
                }
                SubmitContainerStateChange_parameters.xAmzSignedHeaders = !!SubmitContainerStateChange_parameters.xAmzSignedHeaders ? SubmitContainerStateChange_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.SubmitContainerStateChange(SubmitContainerStateChange_parameters);
            }
            if (!errorFlag && node.method === 'SubmitTaskStateChange') {
                var SubmitTaskStateChange_parameters = [];
                var SubmitTaskStateChange_nodeParam;
                var SubmitTaskStateChange_nodeParamType;

                if (typeof msg.payload === 'object') {
                    SubmitTaskStateChange_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                SubmitTaskStateChange_nodeParam = node.SubmitTaskStateChange_xAmzTarget;
                SubmitTaskStateChange_nodeParamType = node.SubmitTaskStateChange_xAmzTargetType;
                if (SubmitTaskStateChange_nodeParamType === 'str') {
                    SubmitTaskStateChange_parameters.xAmzTarget = SubmitTaskStateChange_nodeParam || '';
                } else {
                    SubmitTaskStateChange_parameters.xAmzTarget = RED.util.getMessageProperty(msg, SubmitTaskStateChange_nodeParam);
                }
                SubmitTaskStateChange_parameters.xAmzTarget = !!SubmitTaskStateChange_parameters.xAmzTarget ? SubmitTaskStateChange_parameters.xAmzTarget : msg.payload;
                
                SubmitTaskStateChange_nodeParam = node.SubmitTaskStateChange_xAmzContentSha256;
                SubmitTaskStateChange_nodeParamType = node.SubmitTaskStateChange_xAmzContentSha256Type;
                if (SubmitTaskStateChange_nodeParamType === 'str') {
                    SubmitTaskStateChange_parameters.xAmzContentSha256 = SubmitTaskStateChange_nodeParam || '';
                } else {
                    SubmitTaskStateChange_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, SubmitTaskStateChange_nodeParam);
                }
                SubmitTaskStateChange_parameters.xAmzContentSha256 = !!SubmitTaskStateChange_parameters.xAmzContentSha256 ? SubmitTaskStateChange_parameters.xAmzContentSha256 : msg.payload;
                
                SubmitTaskStateChange_nodeParam = node.SubmitTaskStateChange_xAmzDate;
                SubmitTaskStateChange_nodeParamType = node.SubmitTaskStateChange_xAmzDateType;
                if (SubmitTaskStateChange_nodeParamType === 'str') {
                    SubmitTaskStateChange_parameters.xAmzDate = SubmitTaskStateChange_nodeParam || '';
                } else {
                    SubmitTaskStateChange_parameters.xAmzDate = RED.util.getMessageProperty(msg, SubmitTaskStateChange_nodeParam);
                }
                SubmitTaskStateChange_parameters.xAmzDate = !!SubmitTaskStateChange_parameters.xAmzDate ? SubmitTaskStateChange_parameters.xAmzDate : msg.payload;
                
                SubmitTaskStateChange_nodeParam = node.SubmitTaskStateChange_xAmzAlgorithm;
                SubmitTaskStateChange_nodeParamType = node.SubmitTaskStateChange_xAmzAlgorithmType;
                if (SubmitTaskStateChange_nodeParamType === 'str') {
                    SubmitTaskStateChange_parameters.xAmzAlgorithm = SubmitTaskStateChange_nodeParam || '';
                } else {
                    SubmitTaskStateChange_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, SubmitTaskStateChange_nodeParam);
                }
                SubmitTaskStateChange_parameters.xAmzAlgorithm = !!SubmitTaskStateChange_parameters.xAmzAlgorithm ? SubmitTaskStateChange_parameters.xAmzAlgorithm : msg.payload;
                
                SubmitTaskStateChange_nodeParam = node.SubmitTaskStateChange_xAmzCredential;
                SubmitTaskStateChange_nodeParamType = node.SubmitTaskStateChange_xAmzCredentialType;
                if (SubmitTaskStateChange_nodeParamType === 'str') {
                    SubmitTaskStateChange_parameters.xAmzCredential = SubmitTaskStateChange_nodeParam || '';
                } else {
                    SubmitTaskStateChange_parameters.xAmzCredential = RED.util.getMessageProperty(msg, SubmitTaskStateChange_nodeParam);
                }
                SubmitTaskStateChange_parameters.xAmzCredential = !!SubmitTaskStateChange_parameters.xAmzCredential ? SubmitTaskStateChange_parameters.xAmzCredential : msg.payload;
                
                SubmitTaskStateChange_nodeParam = node.SubmitTaskStateChange_xAmzSecurityToken;
                SubmitTaskStateChange_nodeParamType = node.SubmitTaskStateChange_xAmzSecurityTokenType;
                if (SubmitTaskStateChange_nodeParamType === 'str') {
                    SubmitTaskStateChange_parameters.xAmzSecurityToken = SubmitTaskStateChange_nodeParam || '';
                } else {
                    SubmitTaskStateChange_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, SubmitTaskStateChange_nodeParam);
                }
                SubmitTaskStateChange_parameters.xAmzSecurityToken = !!SubmitTaskStateChange_parameters.xAmzSecurityToken ? SubmitTaskStateChange_parameters.xAmzSecurityToken : msg.payload;
                
                SubmitTaskStateChange_nodeParam = node.SubmitTaskStateChange_xAmzSignature;
                SubmitTaskStateChange_nodeParamType = node.SubmitTaskStateChange_xAmzSignatureType;
                if (SubmitTaskStateChange_nodeParamType === 'str') {
                    SubmitTaskStateChange_parameters.xAmzSignature = SubmitTaskStateChange_nodeParam || '';
                } else {
                    SubmitTaskStateChange_parameters.xAmzSignature = RED.util.getMessageProperty(msg, SubmitTaskStateChange_nodeParam);
                }
                SubmitTaskStateChange_parameters.xAmzSignature = !!SubmitTaskStateChange_parameters.xAmzSignature ? SubmitTaskStateChange_parameters.xAmzSignature : msg.payload;
                
                SubmitTaskStateChange_nodeParam = node.SubmitTaskStateChange_xAmzSignedHeaders;
                SubmitTaskStateChange_nodeParamType = node.SubmitTaskStateChange_xAmzSignedHeadersType;
                if (SubmitTaskStateChange_nodeParamType === 'str') {
                    SubmitTaskStateChange_parameters.xAmzSignedHeaders = SubmitTaskStateChange_nodeParam || '';
                } else {
                    SubmitTaskStateChange_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, SubmitTaskStateChange_nodeParam);
                }
                SubmitTaskStateChange_parameters.xAmzSignedHeaders = !!SubmitTaskStateChange_parameters.xAmzSignedHeaders ? SubmitTaskStateChange_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.SubmitTaskStateChange(SubmitTaskStateChange_parameters);
            }
            if (!errorFlag && node.method === 'TagResource') {
                var TagResource_parameters = [];
                var TagResource_nodeParam;
                var TagResource_nodeParamType;

                if (typeof msg.payload === 'object') {
                    TagResource_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                TagResource_nodeParam = node.TagResource_xAmzTarget;
                TagResource_nodeParamType = node.TagResource_xAmzTargetType;
                if (TagResource_nodeParamType === 'str') {
                    TagResource_parameters.xAmzTarget = TagResource_nodeParam || '';
                } else {
                    TagResource_parameters.xAmzTarget = RED.util.getMessageProperty(msg, TagResource_nodeParam);
                }
                TagResource_parameters.xAmzTarget = !!TagResource_parameters.xAmzTarget ? TagResource_parameters.xAmzTarget : msg.payload;
                
                TagResource_nodeParam = node.TagResource_xAmzContentSha256;
                TagResource_nodeParamType = node.TagResource_xAmzContentSha256Type;
                if (TagResource_nodeParamType === 'str') {
                    TagResource_parameters.xAmzContentSha256 = TagResource_nodeParam || '';
                } else {
                    TagResource_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, TagResource_nodeParam);
                }
                TagResource_parameters.xAmzContentSha256 = !!TagResource_parameters.xAmzContentSha256 ? TagResource_parameters.xAmzContentSha256 : msg.payload;
                
                TagResource_nodeParam = node.TagResource_xAmzDate;
                TagResource_nodeParamType = node.TagResource_xAmzDateType;
                if (TagResource_nodeParamType === 'str') {
                    TagResource_parameters.xAmzDate = TagResource_nodeParam || '';
                } else {
                    TagResource_parameters.xAmzDate = RED.util.getMessageProperty(msg, TagResource_nodeParam);
                }
                TagResource_parameters.xAmzDate = !!TagResource_parameters.xAmzDate ? TagResource_parameters.xAmzDate : msg.payload;
                
                TagResource_nodeParam = node.TagResource_xAmzAlgorithm;
                TagResource_nodeParamType = node.TagResource_xAmzAlgorithmType;
                if (TagResource_nodeParamType === 'str') {
                    TagResource_parameters.xAmzAlgorithm = TagResource_nodeParam || '';
                } else {
                    TagResource_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, TagResource_nodeParam);
                }
                TagResource_parameters.xAmzAlgorithm = !!TagResource_parameters.xAmzAlgorithm ? TagResource_parameters.xAmzAlgorithm : msg.payload;
                
                TagResource_nodeParam = node.TagResource_xAmzCredential;
                TagResource_nodeParamType = node.TagResource_xAmzCredentialType;
                if (TagResource_nodeParamType === 'str') {
                    TagResource_parameters.xAmzCredential = TagResource_nodeParam || '';
                } else {
                    TagResource_parameters.xAmzCredential = RED.util.getMessageProperty(msg, TagResource_nodeParam);
                }
                TagResource_parameters.xAmzCredential = !!TagResource_parameters.xAmzCredential ? TagResource_parameters.xAmzCredential : msg.payload;
                
                TagResource_nodeParam = node.TagResource_xAmzSecurityToken;
                TagResource_nodeParamType = node.TagResource_xAmzSecurityTokenType;
                if (TagResource_nodeParamType === 'str') {
                    TagResource_parameters.xAmzSecurityToken = TagResource_nodeParam || '';
                } else {
                    TagResource_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, TagResource_nodeParam);
                }
                TagResource_parameters.xAmzSecurityToken = !!TagResource_parameters.xAmzSecurityToken ? TagResource_parameters.xAmzSecurityToken : msg.payload;
                
                TagResource_nodeParam = node.TagResource_xAmzSignature;
                TagResource_nodeParamType = node.TagResource_xAmzSignatureType;
                if (TagResource_nodeParamType === 'str') {
                    TagResource_parameters.xAmzSignature = TagResource_nodeParam || '';
                } else {
                    TagResource_parameters.xAmzSignature = RED.util.getMessageProperty(msg, TagResource_nodeParam);
                }
                TagResource_parameters.xAmzSignature = !!TagResource_parameters.xAmzSignature ? TagResource_parameters.xAmzSignature : msg.payload;
                
                TagResource_nodeParam = node.TagResource_xAmzSignedHeaders;
                TagResource_nodeParamType = node.TagResource_xAmzSignedHeadersType;
                if (TagResource_nodeParamType === 'str') {
                    TagResource_parameters.xAmzSignedHeaders = TagResource_nodeParam || '';
                } else {
                    TagResource_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, TagResource_nodeParam);
                }
                TagResource_parameters.xAmzSignedHeaders = !!TagResource_parameters.xAmzSignedHeaders ? TagResource_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.TagResource(TagResource_parameters);
            }
            if (!errorFlag && node.method === 'UntagResource') {
                var UntagResource_parameters = [];
                var UntagResource_nodeParam;
                var UntagResource_nodeParamType;

                if (typeof msg.payload === 'object') {
                    UntagResource_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                UntagResource_nodeParam = node.UntagResource_xAmzTarget;
                UntagResource_nodeParamType = node.UntagResource_xAmzTargetType;
                if (UntagResource_nodeParamType === 'str') {
                    UntagResource_parameters.xAmzTarget = UntagResource_nodeParam || '';
                } else {
                    UntagResource_parameters.xAmzTarget = RED.util.getMessageProperty(msg, UntagResource_nodeParam);
                }
                UntagResource_parameters.xAmzTarget = !!UntagResource_parameters.xAmzTarget ? UntagResource_parameters.xAmzTarget : msg.payload;
                
                UntagResource_nodeParam = node.UntagResource_xAmzContentSha256;
                UntagResource_nodeParamType = node.UntagResource_xAmzContentSha256Type;
                if (UntagResource_nodeParamType === 'str') {
                    UntagResource_parameters.xAmzContentSha256 = UntagResource_nodeParam || '';
                } else {
                    UntagResource_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, UntagResource_nodeParam);
                }
                UntagResource_parameters.xAmzContentSha256 = !!UntagResource_parameters.xAmzContentSha256 ? UntagResource_parameters.xAmzContentSha256 : msg.payload;
                
                UntagResource_nodeParam = node.UntagResource_xAmzDate;
                UntagResource_nodeParamType = node.UntagResource_xAmzDateType;
                if (UntagResource_nodeParamType === 'str') {
                    UntagResource_parameters.xAmzDate = UntagResource_nodeParam || '';
                } else {
                    UntagResource_parameters.xAmzDate = RED.util.getMessageProperty(msg, UntagResource_nodeParam);
                }
                UntagResource_parameters.xAmzDate = !!UntagResource_parameters.xAmzDate ? UntagResource_parameters.xAmzDate : msg.payload;
                
                UntagResource_nodeParam = node.UntagResource_xAmzAlgorithm;
                UntagResource_nodeParamType = node.UntagResource_xAmzAlgorithmType;
                if (UntagResource_nodeParamType === 'str') {
                    UntagResource_parameters.xAmzAlgorithm = UntagResource_nodeParam || '';
                } else {
                    UntagResource_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, UntagResource_nodeParam);
                }
                UntagResource_parameters.xAmzAlgorithm = !!UntagResource_parameters.xAmzAlgorithm ? UntagResource_parameters.xAmzAlgorithm : msg.payload;
                
                UntagResource_nodeParam = node.UntagResource_xAmzCredential;
                UntagResource_nodeParamType = node.UntagResource_xAmzCredentialType;
                if (UntagResource_nodeParamType === 'str') {
                    UntagResource_parameters.xAmzCredential = UntagResource_nodeParam || '';
                } else {
                    UntagResource_parameters.xAmzCredential = RED.util.getMessageProperty(msg, UntagResource_nodeParam);
                }
                UntagResource_parameters.xAmzCredential = !!UntagResource_parameters.xAmzCredential ? UntagResource_parameters.xAmzCredential : msg.payload;
                
                UntagResource_nodeParam = node.UntagResource_xAmzSecurityToken;
                UntagResource_nodeParamType = node.UntagResource_xAmzSecurityTokenType;
                if (UntagResource_nodeParamType === 'str') {
                    UntagResource_parameters.xAmzSecurityToken = UntagResource_nodeParam || '';
                } else {
                    UntagResource_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, UntagResource_nodeParam);
                }
                UntagResource_parameters.xAmzSecurityToken = !!UntagResource_parameters.xAmzSecurityToken ? UntagResource_parameters.xAmzSecurityToken : msg.payload;
                
                UntagResource_nodeParam = node.UntagResource_xAmzSignature;
                UntagResource_nodeParamType = node.UntagResource_xAmzSignatureType;
                if (UntagResource_nodeParamType === 'str') {
                    UntagResource_parameters.xAmzSignature = UntagResource_nodeParam || '';
                } else {
                    UntagResource_parameters.xAmzSignature = RED.util.getMessageProperty(msg, UntagResource_nodeParam);
                }
                UntagResource_parameters.xAmzSignature = !!UntagResource_parameters.xAmzSignature ? UntagResource_parameters.xAmzSignature : msg.payload;
                
                UntagResource_nodeParam = node.UntagResource_xAmzSignedHeaders;
                UntagResource_nodeParamType = node.UntagResource_xAmzSignedHeadersType;
                if (UntagResource_nodeParamType === 'str') {
                    UntagResource_parameters.xAmzSignedHeaders = UntagResource_nodeParam || '';
                } else {
                    UntagResource_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, UntagResource_nodeParam);
                }
                UntagResource_parameters.xAmzSignedHeaders = !!UntagResource_parameters.xAmzSignedHeaders ? UntagResource_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.UntagResource(UntagResource_parameters);
            }
            if (!errorFlag && node.method === 'UpdateClusterSettings') {
                var UpdateClusterSettings_parameters = [];
                var UpdateClusterSettings_nodeParam;
                var UpdateClusterSettings_nodeParamType;

                if (typeof msg.payload === 'object') {
                    UpdateClusterSettings_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                UpdateClusterSettings_nodeParam = node.UpdateClusterSettings_xAmzTarget;
                UpdateClusterSettings_nodeParamType = node.UpdateClusterSettings_xAmzTargetType;
                if (UpdateClusterSettings_nodeParamType === 'str') {
                    UpdateClusterSettings_parameters.xAmzTarget = UpdateClusterSettings_nodeParam || '';
                } else {
                    UpdateClusterSettings_parameters.xAmzTarget = RED.util.getMessageProperty(msg, UpdateClusterSettings_nodeParam);
                }
                UpdateClusterSettings_parameters.xAmzTarget = !!UpdateClusterSettings_parameters.xAmzTarget ? UpdateClusterSettings_parameters.xAmzTarget : msg.payload;
                
                UpdateClusterSettings_nodeParam = node.UpdateClusterSettings_xAmzContentSha256;
                UpdateClusterSettings_nodeParamType = node.UpdateClusterSettings_xAmzContentSha256Type;
                if (UpdateClusterSettings_nodeParamType === 'str') {
                    UpdateClusterSettings_parameters.xAmzContentSha256 = UpdateClusterSettings_nodeParam || '';
                } else {
                    UpdateClusterSettings_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, UpdateClusterSettings_nodeParam);
                }
                UpdateClusterSettings_parameters.xAmzContentSha256 = !!UpdateClusterSettings_parameters.xAmzContentSha256 ? UpdateClusterSettings_parameters.xAmzContentSha256 : msg.payload;
                
                UpdateClusterSettings_nodeParam = node.UpdateClusterSettings_xAmzDate;
                UpdateClusterSettings_nodeParamType = node.UpdateClusterSettings_xAmzDateType;
                if (UpdateClusterSettings_nodeParamType === 'str') {
                    UpdateClusterSettings_parameters.xAmzDate = UpdateClusterSettings_nodeParam || '';
                } else {
                    UpdateClusterSettings_parameters.xAmzDate = RED.util.getMessageProperty(msg, UpdateClusterSettings_nodeParam);
                }
                UpdateClusterSettings_parameters.xAmzDate = !!UpdateClusterSettings_parameters.xAmzDate ? UpdateClusterSettings_parameters.xAmzDate : msg.payload;
                
                UpdateClusterSettings_nodeParam = node.UpdateClusterSettings_xAmzAlgorithm;
                UpdateClusterSettings_nodeParamType = node.UpdateClusterSettings_xAmzAlgorithmType;
                if (UpdateClusterSettings_nodeParamType === 'str') {
                    UpdateClusterSettings_parameters.xAmzAlgorithm = UpdateClusterSettings_nodeParam || '';
                } else {
                    UpdateClusterSettings_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, UpdateClusterSettings_nodeParam);
                }
                UpdateClusterSettings_parameters.xAmzAlgorithm = !!UpdateClusterSettings_parameters.xAmzAlgorithm ? UpdateClusterSettings_parameters.xAmzAlgorithm : msg.payload;
                
                UpdateClusterSettings_nodeParam = node.UpdateClusterSettings_xAmzCredential;
                UpdateClusterSettings_nodeParamType = node.UpdateClusterSettings_xAmzCredentialType;
                if (UpdateClusterSettings_nodeParamType === 'str') {
                    UpdateClusterSettings_parameters.xAmzCredential = UpdateClusterSettings_nodeParam || '';
                } else {
                    UpdateClusterSettings_parameters.xAmzCredential = RED.util.getMessageProperty(msg, UpdateClusterSettings_nodeParam);
                }
                UpdateClusterSettings_parameters.xAmzCredential = !!UpdateClusterSettings_parameters.xAmzCredential ? UpdateClusterSettings_parameters.xAmzCredential : msg.payload;
                
                UpdateClusterSettings_nodeParam = node.UpdateClusterSettings_xAmzSecurityToken;
                UpdateClusterSettings_nodeParamType = node.UpdateClusterSettings_xAmzSecurityTokenType;
                if (UpdateClusterSettings_nodeParamType === 'str') {
                    UpdateClusterSettings_parameters.xAmzSecurityToken = UpdateClusterSettings_nodeParam || '';
                } else {
                    UpdateClusterSettings_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, UpdateClusterSettings_nodeParam);
                }
                UpdateClusterSettings_parameters.xAmzSecurityToken = !!UpdateClusterSettings_parameters.xAmzSecurityToken ? UpdateClusterSettings_parameters.xAmzSecurityToken : msg.payload;
                
                UpdateClusterSettings_nodeParam = node.UpdateClusterSettings_xAmzSignature;
                UpdateClusterSettings_nodeParamType = node.UpdateClusterSettings_xAmzSignatureType;
                if (UpdateClusterSettings_nodeParamType === 'str') {
                    UpdateClusterSettings_parameters.xAmzSignature = UpdateClusterSettings_nodeParam || '';
                } else {
                    UpdateClusterSettings_parameters.xAmzSignature = RED.util.getMessageProperty(msg, UpdateClusterSettings_nodeParam);
                }
                UpdateClusterSettings_parameters.xAmzSignature = !!UpdateClusterSettings_parameters.xAmzSignature ? UpdateClusterSettings_parameters.xAmzSignature : msg.payload;
                
                UpdateClusterSettings_nodeParam = node.UpdateClusterSettings_xAmzSignedHeaders;
                UpdateClusterSettings_nodeParamType = node.UpdateClusterSettings_xAmzSignedHeadersType;
                if (UpdateClusterSettings_nodeParamType === 'str') {
                    UpdateClusterSettings_parameters.xAmzSignedHeaders = UpdateClusterSettings_nodeParam || '';
                } else {
                    UpdateClusterSettings_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, UpdateClusterSettings_nodeParam);
                }
                UpdateClusterSettings_parameters.xAmzSignedHeaders = !!UpdateClusterSettings_parameters.xAmzSignedHeaders ? UpdateClusterSettings_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.UpdateClusterSettings(UpdateClusterSettings_parameters);
            }
            if (!errorFlag && node.method === 'UpdateContainerAgent') {
                var UpdateContainerAgent_parameters = [];
                var UpdateContainerAgent_nodeParam;
                var UpdateContainerAgent_nodeParamType;

                if (typeof msg.payload === 'object') {
                    UpdateContainerAgent_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                UpdateContainerAgent_nodeParam = node.UpdateContainerAgent_xAmzTarget;
                UpdateContainerAgent_nodeParamType = node.UpdateContainerAgent_xAmzTargetType;
                if (UpdateContainerAgent_nodeParamType === 'str') {
                    UpdateContainerAgent_parameters.xAmzTarget = UpdateContainerAgent_nodeParam || '';
                } else {
                    UpdateContainerAgent_parameters.xAmzTarget = RED.util.getMessageProperty(msg, UpdateContainerAgent_nodeParam);
                }
                UpdateContainerAgent_parameters.xAmzTarget = !!UpdateContainerAgent_parameters.xAmzTarget ? UpdateContainerAgent_parameters.xAmzTarget : msg.payload;
                
                UpdateContainerAgent_nodeParam = node.UpdateContainerAgent_xAmzContentSha256;
                UpdateContainerAgent_nodeParamType = node.UpdateContainerAgent_xAmzContentSha256Type;
                if (UpdateContainerAgent_nodeParamType === 'str') {
                    UpdateContainerAgent_parameters.xAmzContentSha256 = UpdateContainerAgent_nodeParam || '';
                } else {
                    UpdateContainerAgent_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, UpdateContainerAgent_nodeParam);
                }
                UpdateContainerAgent_parameters.xAmzContentSha256 = !!UpdateContainerAgent_parameters.xAmzContentSha256 ? UpdateContainerAgent_parameters.xAmzContentSha256 : msg.payload;
                
                UpdateContainerAgent_nodeParam = node.UpdateContainerAgent_xAmzDate;
                UpdateContainerAgent_nodeParamType = node.UpdateContainerAgent_xAmzDateType;
                if (UpdateContainerAgent_nodeParamType === 'str') {
                    UpdateContainerAgent_parameters.xAmzDate = UpdateContainerAgent_nodeParam || '';
                } else {
                    UpdateContainerAgent_parameters.xAmzDate = RED.util.getMessageProperty(msg, UpdateContainerAgent_nodeParam);
                }
                UpdateContainerAgent_parameters.xAmzDate = !!UpdateContainerAgent_parameters.xAmzDate ? UpdateContainerAgent_parameters.xAmzDate : msg.payload;
                
                UpdateContainerAgent_nodeParam = node.UpdateContainerAgent_xAmzAlgorithm;
                UpdateContainerAgent_nodeParamType = node.UpdateContainerAgent_xAmzAlgorithmType;
                if (UpdateContainerAgent_nodeParamType === 'str') {
                    UpdateContainerAgent_parameters.xAmzAlgorithm = UpdateContainerAgent_nodeParam || '';
                } else {
                    UpdateContainerAgent_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, UpdateContainerAgent_nodeParam);
                }
                UpdateContainerAgent_parameters.xAmzAlgorithm = !!UpdateContainerAgent_parameters.xAmzAlgorithm ? UpdateContainerAgent_parameters.xAmzAlgorithm : msg.payload;
                
                UpdateContainerAgent_nodeParam = node.UpdateContainerAgent_xAmzCredential;
                UpdateContainerAgent_nodeParamType = node.UpdateContainerAgent_xAmzCredentialType;
                if (UpdateContainerAgent_nodeParamType === 'str') {
                    UpdateContainerAgent_parameters.xAmzCredential = UpdateContainerAgent_nodeParam || '';
                } else {
                    UpdateContainerAgent_parameters.xAmzCredential = RED.util.getMessageProperty(msg, UpdateContainerAgent_nodeParam);
                }
                UpdateContainerAgent_parameters.xAmzCredential = !!UpdateContainerAgent_parameters.xAmzCredential ? UpdateContainerAgent_parameters.xAmzCredential : msg.payload;
                
                UpdateContainerAgent_nodeParam = node.UpdateContainerAgent_xAmzSecurityToken;
                UpdateContainerAgent_nodeParamType = node.UpdateContainerAgent_xAmzSecurityTokenType;
                if (UpdateContainerAgent_nodeParamType === 'str') {
                    UpdateContainerAgent_parameters.xAmzSecurityToken = UpdateContainerAgent_nodeParam || '';
                } else {
                    UpdateContainerAgent_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, UpdateContainerAgent_nodeParam);
                }
                UpdateContainerAgent_parameters.xAmzSecurityToken = !!UpdateContainerAgent_parameters.xAmzSecurityToken ? UpdateContainerAgent_parameters.xAmzSecurityToken : msg.payload;
                
                UpdateContainerAgent_nodeParam = node.UpdateContainerAgent_xAmzSignature;
                UpdateContainerAgent_nodeParamType = node.UpdateContainerAgent_xAmzSignatureType;
                if (UpdateContainerAgent_nodeParamType === 'str') {
                    UpdateContainerAgent_parameters.xAmzSignature = UpdateContainerAgent_nodeParam || '';
                } else {
                    UpdateContainerAgent_parameters.xAmzSignature = RED.util.getMessageProperty(msg, UpdateContainerAgent_nodeParam);
                }
                UpdateContainerAgent_parameters.xAmzSignature = !!UpdateContainerAgent_parameters.xAmzSignature ? UpdateContainerAgent_parameters.xAmzSignature : msg.payload;
                
                UpdateContainerAgent_nodeParam = node.UpdateContainerAgent_xAmzSignedHeaders;
                UpdateContainerAgent_nodeParamType = node.UpdateContainerAgent_xAmzSignedHeadersType;
                if (UpdateContainerAgent_nodeParamType === 'str') {
                    UpdateContainerAgent_parameters.xAmzSignedHeaders = UpdateContainerAgent_nodeParam || '';
                } else {
                    UpdateContainerAgent_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, UpdateContainerAgent_nodeParam);
                }
                UpdateContainerAgent_parameters.xAmzSignedHeaders = !!UpdateContainerAgent_parameters.xAmzSignedHeaders ? UpdateContainerAgent_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.UpdateContainerAgent(UpdateContainerAgent_parameters);
            }
            if (!errorFlag && node.method === 'UpdateContainerInstancesState') {
                var UpdateContainerInstancesState_parameters = [];
                var UpdateContainerInstancesState_nodeParam;
                var UpdateContainerInstancesState_nodeParamType;

                if (typeof msg.payload === 'object') {
                    UpdateContainerInstancesState_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                UpdateContainerInstancesState_nodeParam = node.UpdateContainerInstancesState_xAmzTarget;
                UpdateContainerInstancesState_nodeParamType = node.UpdateContainerInstancesState_xAmzTargetType;
                if (UpdateContainerInstancesState_nodeParamType === 'str') {
                    UpdateContainerInstancesState_parameters.xAmzTarget = UpdateContainerInstancesState_nodeParam || '';
                } else {
                    UpdateContainerInstancesState_parameters.xAmzTarget = RED.util.getMessageProperty(msg, UpdateContainerInstancesState_nodeParam);
                }
                UpdateContainerInstancesState_parameters.xAmzTarget = !!UpdateContainerInstancesState_parameters.xAmzTarget ? UpdateContainerInstancesState_parameters.xAmzTarget : msg.payload;
                
                UpdateContainerInstancesState_nodeParam = node.UpdateContainerInstancesState_xAmzContentSha256;
                UpdateContainerInstancesState_nodeParamType = node.UpdateContainerInstancesState_xAmzContentSha256Type;
                if (UpdateContainerInstancesState_nodeParamType === 'str') {
                    UpdateContainerInstancesState_parameters.xAmzContentSha256 = UpdateContainerInstancesState_nodeParam || '';
                } else {
                    UpdateContainerInstancesState_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, UpdateContainerInstancesState_nodeParam);
                }
                UpdateContainerInstancesState_parameters.xAmzContentSha256 = !!UpdateContainerInstancesState_parameters.xAmzContentSha256 ? UpdateContainerInstancesState_parameters.xAmzContentSha256 : msg.payload;
                
                UpdateContainerInstancesState_nodeParam = node.UpdateContainerInstancesState_xAmzDate;
                UpdateContainerInstancesState_nodeParamType = node.UpdateContainerInstancesState_xAmzDateType;
                if (UpdateContainerInstancesState_nodeParamType === 'str') {
                    UpdateContainerInstancesState_parameters.xAmzDate = UpdateContainerInstancesState_nodeParam || '';
                } else {
                    UpdateContainerInstancesState_parameters.xAmzDate = RED.util.getMessageProperty(msg, UpdateContainerInstancesState_nodeParam);
                }
                UpdateContainerInstancesState_parameters.xAmzDate = !!UpdateContainerInstancesState_parameters.xAmzDate ? UpdateContainerInstancesState_parameters.xAmzDate : msg.payload;
                
                UpdateContainerInstancesState_nodeParam = node.UpdateContainerInstancesState_xAmzAlgorithm;
                UpdateContainerInstancesState_nodeParamType = node.UpdateContainerInstancesState_xAmzAlgorithmType;
                if (UpdateContainerInstancesState_nodeParamType === 'str') {
                    UpdateContainerInstancesState_parameters.xAmzAlgorithm = UpdateContainerInstancesState_nodeParam || '';
                } else {
                    UpdateContainerInstancesState_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, UpdateContainerInstancesState_nodeParam);
                }
                UpdateContainerInstancesState_parameters.xAmzAlgorithm = !!UpdateContainerInstancesState_parameters.xAmzAlgorithm ? UpdateContainerInstancesState_parameters.xAmzAlgorithm : msg.payload;
                
                UpdateContainerInstancesState_nodeParam = node.UpdateContainerInstancesState_xAmzCredential;
                UpdateContainerInstancesState_nodeParamType = node.UpdateContainerInstancesState_xAmzCredentialType;
                if (UpdateContainerInstancesState_nodeParamType === 'str') {
                    UpdateContainerInstancesState_parameters.xAmzCredential = UpdateContainerInstancesState_nodeParam || '';
                } else {
                    UpdateContainerInstancesState_parameters.xAmzCredential = RED.util.getMessageProperty(msg, UpdateContainerInstancesState_nodeParam);
                }
                UpdateContainerInstancesState_parameters.xAmzCredential = !!UpdateContainerInstancesState_parameters.xAmzCredential ? UpdateContainerInstancesState_parameters.xAmzCredential : msg.payload;
                
                UpdateContainerInstancesState_nodeParam = node.UpdateContainerInstancesState_xAmzSecurityToken;
                UpdateContainerInstancesState_nodeParamType = node.UpdateContainerInstancesState_xAmzSecurityTokenType;
                if (UpdateContainerInstancesState_nodeParamType === 'str') {
                    UpdateContainerInstancesState_parameters.xAmzSecurityToken = UpdateContainerInstancesState_nodeParam || '';
                } else {
                    UpdateContainerInstancesState_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, UpdateContainerInstancesState_nodeParam);
                }
                UpdateContainerInstancesState_parameters.xAmzSecurityToken = !!UpdateContainerInstancesState_parameters.xAmzSecurityToken ? UpdateContainerInstancesState_parameters.xAmzSecurityToken : msg.payload;
                
                UpdateContainerInstancesState_nodeParam = node.UpdateContainerInstancesState_xAmzSignature;
                UpdateContainerInstancesState_nodeParamType = node.UpdateContainerInstancesState_xAmzSignatureType;
                if (UpdateContainerInstancesState_nodeParamType === 'str') {
                    UpdateContainerInstancesState_parameters.xAmzSignature = UpdateContainerInstancesState_nodeParam || '';
                } else {
                    UpdateContainerInstancesState_parameters.xAmzSignature = RED.util.getMessageProperty(msg, UpdateContainerInstancesState_nodeParam);
                }
                UpdateContainerInstancesState_parameters.xAmzSignature = !!UpdateContainerInstancesState_parameters.xAmzSignature ? UpdateContainerInstancesState_parameters.xAmzSignature : msg.payload;
                
                UpdateContainerInstancesState_nodeParam = node.UpdateContainerInstancesState_xAmzSignedHeaders;
                UpdateContainerInstancesState_nodeParamType = node.UpdateContainerInstancesState_xAmzSignedHeadersType;
                if (UpdateContainerInstancesState_nodeParamType === 'str') {
                    UpdateContainerInstancesState_parameters.xAmzSignedHeaders = UpdateContainerInstancesState_nodeParam || '';
                } else {
                    UpdateContainerInstancesState_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, UpdateContainerInstancesState_nodeParam);
                }
                UpdateContainerInstancesState_parameters.xAmzSignedHeaders = !!UpdateContainerInstancesState_parameters.xAmzSignedHeaders ? UpdateContainerInstancesState_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.UpdateContainerInstancesState(UpdateContainerInstancesState_parameters);
            }
            if (!errorFlag && node.method === 'UpdateService') {
                var UpdateService_parameters = [];
                var UpdateService_nodeParam;
                var UpdateService_nodeParamType;

                if (typeof msg.payload === 'object') {
                    UpdateService_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                UpdateService_nodeParam = node.UpdateService_xAmzTarget;
                UpdateService_nodeParamType = node.UpdateService_xAmzTargetType;
                if (UpdateService_nodeParamType === 'str') {
                    UpdateService_parameters.xAmzTarget = UpdateService_nodeParam || '';
                } else {
                    UpdateService_parameters.xAmzTarget = RED.util.getMessageProperty(msg, UpdateService_nodeParam);
                }
                UpdateService_parameters.xAmzTarget = !!UpdateService_parameters.xAmzTarget ? UpdateService_parameters.xAmzTarget : msg.payload;
                
                UpdateService_nodeParam = node.UpdateService_xAmzContentSha256;
                UpdateService_nodeParamType = node.UpdateService_xAmzContentSha256Type;
                if (UpdateService_nodeParamType === 'str') {
                    UpdateService_parameters.xAmzContentSha256 = UpdateService_nodeParam || '';
                } else {
                    UpdateService_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, UpdateService_nodeParam);
                }
                UpdateService_parameters.xAmzContentSha256 = !!UpdateService_parameters.xAmzContentSha256 ? UpdateService_parameters.xAmzContentSha256 : msg.payload;
                
                UpdateService_nodeParam = node.UpdateService_xAmzDate;
                UpdateService_nodeParamType = node.UpdateService_xAmzDateType;
                if (UpdateService_nodeParamType === 'str') {
                    UpdateService_parameters.xAmzDate = UpdateService_nodeParam || '';
                } else {
                    UpdateService_parameters.xAmzDate = RED.util.getMessageProperty(msg, UpdateService_nodeParam);
                }
                UpdateService_parameters.xAmzDate = !!UpdateService_parameters.xAmzDate ? UpdateService_parameters.xAmzDate : msg.payload;
                
                UpdateService_nodeParam = node.UpdateService_xAmzAlgorithm;
                UpdateService_nodeParamType = node.UpdateService_xAmzAlgorithmType;
                if (UpdateService_nodeParamType === 'str') {
                    UpdateService_parameters.xAmzAlgorithm = UpdateService_nodeParam || '';
                } else {
                    UpdateService_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, UpdateService_nodeParam);
                }
                UpdateService_parameters.xAmzAlgorithm = !!UpdateService_parameters.xAmzAlgorithm ? UpdateService_parameters.xAmzAlgorithm : msg.payload;
                
                UpdateService_nodeParam = node.UpdateService_xAmzCredential;
                UpdateService_nodeParamType = node.UpdateService_xAmzCredentialType;
                if (UpdateService_nodeParamType === 'str') {
                    UpdateService_parameters.xAmzCredential = UpdateService_nodeParam || '';
                } else {
                    UpdateService_parameters.xAmzCredential = RED.util.getMessageProperty(msg, UpdateService_nodeParam);
                }
                UpdateService_parameters.xAmzCredential = !!UpdateService_parameters.xAmzCredential ? UpdateService_parameters.xAmzCredential : msg.payload;
                
                UpdateService_nodeParam = node.UpdateService_xAmzSecurityToken;
                UpdateService_nodeParamType = node.UpdateService_xAmzSecurityTokenType;
                if (UpdateService_nodeParamType === 'str') {
                    UpdateService_parameters.xAmzSecurityToken = UpdateService_nodeParam || '';
                } else {
                    UpdateService_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, UpdateService_nodeParam);
                }
                UpdateService_parameters.xAmzSecurityToken = !!UpdateService_parameters.xAmzSecurityToken ? UpdateService_parameters.xAmzSecurityToken : msg.payload;
                
                UpdateService_nodeParam = node.UpdateService_xAmzSignature;
                UpdateService_nodeParamType = node.UpdateService_xAmzSignatureType;
                if (UpdateService_nodeParamType === 'str') {
                    UpdateService_parameters.xAmzSignature = UpdateService_nodeParam || '';
                } else {
                    UpdateService_parameters.xAmzSignature = RED.util.getMessageProperty(msg, UpdateService_nodeParam);
                }
                UpdateService_parameters.xAmzSignature = !!UpdateService_parameters.xAmzSignature ? UpdateService_parameters.xAmzSignature : msg.payload;
                
                UpdateService_nodeParam = node.UpdateService_xAmzSignedHeaders;
                UpdateService_nodeParamType = node.UpdateService_xAmzSignedHeadersType;
                if (UpdateService_nodeParamType === 'str') {
                    UpdateService_parameters.xAmzSignedHeaders = UpdateService_nodeParam || '';
                } else {
                    UpdateService_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, UpdateService_nodeParam);
                }
                UpdateService_parameters.xAmzSignedHeaders = !!UpdateService_parameters.xAmzSignedHeaders ? UpdateService_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.UpdateService(UpdateService_parameters);
            }
            if (!errorFlag && node.method === 'UpdateServicePrimaryTaskSet') {
                var UpdateServicePrimaryTaskSet_parameters = [];
                var UpdateServicePrimaryTaskSet_nodeParam;
                var UpdateServicePrimaryTaskSet_nodeParamType;

                if (typeof msg.payload === 'object') {
                    UpdateServicePrimaryTaskSet_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                UpdateServicePrimaryTaskSet_nodeParam = node.UpdateServicePrimaryTaskSet_xAmzTarget;
                UpdateServicePrimaryTaskSet_nodeParamType = node.UpdateServicePrimaryTaskSet_xAmzTargetType;
                if (UpdateServicePrimaryTaskSet_nodeParamType === 'str') {
                    UpdateServicePrimaryTaskSet_parameters.xAmzTarget = UpdateServicePrimaryTaskSet_nodeParam || '';
                } else {
                    UpdateServicePrimaryTaskSet_parameters.xAmzTarget = RED.util.getMessageProperty(msg, UpdateServicePrimaryTaskSet_nodeParam);
                }
                UpdateServicePrimaryTaskSet_parameters.xAmzTarget = !!UpdateServicePrimaryTaskSet_parameters.xAmzTarget ? UpdateServicePrimaryTaskSet_parameters.xAmzTarget : msg.payload;
                
                UpdateServicePrimaryTaskSet_nodeParam = node.UpdateServicePrimaryTaskSet_xAmzContentSha256;
                UpdateServicePrimaryTaskSet_nodeParamType = node.UpdateServicePrimaryTaskSet_xAmzContentSha256Type;
                if (UpdateServicePrimaryTaskSet_nodeParamType === 'str') {
                    UpdateServicePrimaryTaskSet_parameters.xAmzContentSha256 = UpdateServicePrimaryTaskSet_nodeParam || '';
                } else {
                    UpdateServicePrimaryTaskSet_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, UpdateServicePrimaryTaskSet_nodeParam);
                }
                UpdateServicePrimaryTaskSet_parameters.xAmzContentSha256 = !!UpdateServicePrimaryTaskSet_parameters.xAmzContentSha256 ? UpdateServicePrimaryTaskSet_parameters.xAmzContentSha256 : msg.payload;
                
                UpdateServicePrimaryTaskSet_nodeParam = node.UpdateServicePrimaryTaskSet_xAmzDate;
                UpdateServicePrimaryTaskSet_nodeParamType = node.UpdateServicePrimaryTaskSet_xAmzDateType;
                if (UpdateServicePrimaryTaskSet_nodeParamType === 'str') {
                    UpdateServicePrimaryTaskSet_parameters.xAmzDate = UpdateServicePrimaryTaskSet_nodeParam || '';
                } else {
                    UpdateServicePrimaryTaskSet_parameters.xAmzDate = RED.util.getMessageProperty(msg, UpdateServicePrimaryTaskSet_nodeParam);
                }
                UpdateServicePrimaryTaskSet_parameters.xAmzDate = !!UpdateServicePrimaryTaskSet_parameters.xAmzDate ? UpdateServicePrimaryTaskSet_parameters.xAmzDate : msg.payload;
                
                UpdateServicePrimaryTaskSet_nodeParam = node.UpdateServicePrimaryTaskSet_xAmzAlgorithm;
                UpdateServicePrimaryTaskSet_nodeParamType = node.UpdateServicePrimaryTaskSet_xAmzAlgorithmType;
                if (UpdateServicePrimaryTaskSet_nodeParamType === 'str') {
                    UpdateServicePrimaryTaskSet_parameters.xAmzAlgorithm = UpdateServicePrimaryTaskSet_nodeParam || '';
                } else {
                    UpdateServicePrimaryTaskSet_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, UpdateServicePrimaryTaskSet_nodeParam);
                }
                UpdateServicePrimaryTaskSet_parameters.xAmzAlgorithm = !!UpdateServicePrimaryTaskSet_parameters.xAmzAlgorithm ? UpdateServicePrimaryTaskSet_parameters.xAmzAlgorithm : msg.payload;
                
                UpdateServicePrimaryTaskSet_nodeParam = node.UpdateServicePrimaryTaskSet_xAmzCredential;
                UpdateServicePrimaryTaskSet_nodeParamType = node.UpdateServicePrimaryTaskSet_xAmzCredentialType;
                if (UpdateServicePrimaryTaskSet_nodeParamType === 'str') {
                    UpdateServicePrimaryTaskSet_parameters.xAmzCredential = UpdateServicePrimaryTaskSet_nodeParam || '';
                } else {
                    UpdateServicePrimaryTaskSet_parameters.xAmzCredential = RED.util.getMessageProperty(msg, UpdateServicePrimaryTaskSet_nodeParam);
                }
                UpdateServicePrimaryTaskSet_parameters.xAmzCredential = !!UpdateServicePrimaryTaskSet_parameters.xAmzCredential ? UpdateServicePrimaryTaskSet_parameters.xAmzCredential : msg.payload;
                
                UpdateServicePrimaryTaskSet_nodeParam = node.UpdateServicePrimaryTaskSet_xAmzSecurityToken;
                UpdateServicePrimaryTaskSet_nodeParamType = node.UpdateServicePrimaryTaskSet_xAmzSecurityTokenType;
                if (UpdateServicePrimaryTaskSet_nodeParamType === 'str') {
                    UpdateServicePrimaryTaskSet_parameters.xAmzSecurityToken = UpdateServicePrimaryTaskSet_nodeParam || '';
                } else {
                    UpdateServicePrimaryTaskSet_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, UpdateServicePrimaryTaskSet_nodeParam);
                }
                UpdateServicePrimaryTaskSet_parameters.xAmzSecurityToken = !!UpdateServicePrimaryTaskSet_parameters.xAmzSecurityToken ? UpdateServicePrimaryTaskSet_parameters.xAmzSecurityToken : msg.payload;
                
                UpdateServicePrimaryTaskSet_nodeParam = node.UpdateServicePrimaryTaskSet_xAmzSignature;
                UpdateServicePrimaryTaskSet_nodeParamType = node.UpdateServicePrimaryTaskSet_xAmzSignatureType;
                if (UpdateServicePrimaryTaskSet_nodeParamType === 'str') {
                    UpdateServicePrimaryTaskSet_parameters.xAmzSignature = UpdateServicePrimaryTaskSet_nodeParam || '';
                } else {
                    UpdateServicePrimaryTaskSet_parameters.xAmzSignature = RED.util.getMessageProperty(msg, UpdateServicePrimaryTaskSet_nodeParam);
                }
                UpdateServicePrimaryTaskSet_parameters.xAmzSignature = !!UpdateServicePrimaryTaskSet_parameters.xAmzSignature ? UpdateServicePrimaryTaskSet_parameters.xAmzSignature : msg.payload;
                
                UpdateServicePrimaryTaskSet_nodeParam = node.UpdateServicePrimaryTaskSet_xAmzSignedHeaders;
                UpdateServicePrimaryTaskSet_nodeParamType = node.UpdateServicePrimaryTaskSet_xAmzSignedHeadersType;
                if (UpdateServicePrimaryTaskSet_nodeParamType === 'str') {
                    UpdateServicePrimaryTaskSet_parameters.xAmzSignedHeaders = UpdateServicePrimaryTaskSet_nodeParam || '';
                } else {
                    UpdateServicePrimaryTaskSet_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, UpdateServicePrimaryTaskSet_nodeParam);
                }
                UpdateServicePrimaryTaskSet_parameters.xAmzSignedHeaders = !!UpdateServicePrimaryTaskSet_parameters.xAmzSignedHeaders ? UpdateServicePrimaryTaskSet_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.UpdateServicePrimaryTaskSet(UpdateServicePrimaryTaskSet_parameters);
            }
            if (!errorFlag && node.method === 'UpdateTaskSet') {
                var UpdateTaskSet_parameters = [];
                var UpdateTaskSet_nodeParam;
                var UpdateTaskSet_nodeParamType;

                if (typeof msg.payload === 'object') {
                    UpdateTaskSet_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                
                UpdateTaskSet_nodeParam = node.UpdateTaskSet_xAmzTarget;
                UpdateTaskSet_nodeParamType = node.UpdateTaskSet_xAmzTargetType;
                if (UpdateTaskSet_nodeParamType === 'str') {
                    UpdateTaskSet_parameters.xAmzTarget = UpdateTaskSet_nodeParam || '';
                } else {
                    UpdateTaskSet_parameters.xAmzTarget = RED.util.getMessageProperty(msg, UpdateTaskSet_nodeParam);
                }
                UpdateTaskSet_parameters.xAmzTarget = !!UpdateTaskSet_parameters.xAmzTarget ? UpdateTaskSet_parameters.xAmzTarget : msg.payload;
                
                UpdateTaskSet_nodeParam = node.UpdateTaskSet_xAmzContentSha256;
                UpdateTaskSet_nodeParamType = node.UpdateTaskSet_xAmzContentSha256Type;
                if (UpdateTaskSet_nodeParamType === 'str') {
                    UpdateTaskSet_parameters.xAmzContentSha256 = UpdateTaskSet_nodeParam || '';
                } else {
                    UpdateTaskSet_parameters.xAmzContentSha256 = RED.util.getMessageProperty(msg, UpdateTaskSet_nodeParam);
                }
                UpdateTaskSet_parameters.xAmzContentSha256 = !!UpdateTaskSet_parameters.xAmzContentSha256 ? UpdateTaskSet_parameters.xAmzContentSha256 : msg.payload;
                
                UpdateTaskSet_nodeParam = node.UpdateTaskSet_xAmzDate;
                UpdateTaskSet_nodeParamType = node.UpdateTaskSet_xAmzDateType;
                if (UpdateTaskSet_nodeParamType === 'str') {
                    UpdateTaskSet_parameters.xAmzDate = UpdateTaskSet_nodeParam || '';
                } else {
                    UpdateTaskSet_parameters.xAmzDate = RED.util.getMessageProperty(msg, UpdateTaskSet_nodeParam);
                }
                UpdateTaskSet_parameters.xAmzDate = !!UpdateTaskSet_parameters.xAmzDate ? UpdateTaskSet_parameters.xAmzDate : msg.payload;
                
                UpdateTaskSet_nodeParam = node.UpdateTaskSet_xAmzAlgorithm;
                UpdateTaskSet_nodeParamType = node.UpdateTaskSet_xAmzAlgorithmType;
                if (UpdateTaskSet_nodeParamType === 'str') {
                    UpdateTaskSet_parameters.xAmzAlgorithm = UpdateTaskSet_nodeParam || '';
                } else {
                    UpdateTaskSet_parameters.xAmzAlgorithm = RED.util.getMessageProperty(msg, UpdateTaskSet_nodeParam);
                }
                UpdateTaskSet_parameters.xAmzAlgorithm = !!UpdateTaskSet_parameters.xAmzAlgorithm ? UpdateTaskSet_parameters.xAmzAlgorithm : msg.payload;
                
                UpdateTaskSet_nodeParam = node.UpdateTaskSet_xAmzCredential;
                UpdateTaskSet_nodeParamType = node.UpdateTaskSet_xAmzCredentialType;
                if (UpdateTaskSet_nodeParamType === 'str') {
                    UpdateTaskSet_parameters.xAmzCredential = UpdateTaskSet_nodeParam || '';
                } else {
                    UpdateTaskSet_parameters.xAmzCredential = RED.util.getMessageProperty(msg, UpdateTaskSet_nodeParam);
                }
                UpdateTaskSet_parameters.xAmzCredential = !!UpdateTaskSet_parameters.xAmzCredential ? UpdateTaskSet_parameters.xAmzCredential : msg.payload;
                
                UpdateTaskSet_nodeParam = node.UpdateTaskSet_xAmzSecurityToken;
                UpdateTaskSet_nodeParamType = node.UpdateTaskSet_xAmzSecurityTokenType;
                if (UpdateTaskSet_nodeParamType === 'str') {
                    UpdateTaskSet_parameters.xAmzSecurityToken = UpdateTaskSet_nodeParam || '';
                } else {
                    UpdateTaskSet_parameters.xAmzSecurityToken = RED.util.getMessageProperty(msg, UpdateTaskSet_nodeParam);
                }
                UpdateTaskSet_parameters.xAmzSecurityToken = !!UpdateTaskSet_parameters.xAmzSecurityToken ? UpdateTaskSet_parameters.xAmzSecurityToken : msg.payload;
                
                UpdateTaskSet_nodeParam = node.UpdateTaskSet_xAmzSignature;
                UpdateTaskSet_nodeParamType = node.UpdateTaskSet_xAmzSignatureType;
                if (UpdateTaskSet_nodeParamType === 'str') {
                    UpdateTaskSet_parameters.xAmzSignature = UpdateTaskSet_nodeParam || '';
                } else {
                    UpdateTaskSet_parameters.xAmzSignature = RED.util.getMessageProperty(msg, UpdateTaskSet_nodeParam);
                }
                UpdateTaskSet_parameters.xAmzSignature = !!UpdateTaskSet_parameters.xAmzSignature ? UpdateTaskSet_parameters.xAmzSignature : msg.payload;
                
                UpdateTaskSet_nodeParam = node.UpdateTaskSet_xAmzSignedHeaders;
                UpdateTaskSet_nodeParamType = node.UpdateTaskSet_xAmzSignedHeadersType;
                if (UpdateTaskSet_nodeParamType === 'str') {
                    UpdateTaskSet_parameters.xAmzSignedHeaders = UpdateTaskSet_nodeParam || '';
                } else {
                    UpdateTaskSet_parameters.xAmzSignedHeaders = RED.util.getMessageProperty(msg, UpdateTaskSet_nodeParam);
                }
                UpdateTaskSet_parameters.xAmzSignedHeaders = !!UpdateTaskSet_parameters.xAmzSignedHeaders ? UpdateTaskSet_parameters.xAmzSignedHeaders : msg.payload;
                                result = client.UpdateTaskSet(UpdateTaskSet_parameters);
            }
            if (!errorFlag && result === undefined) {
                node.error('Method is not specified.', msg);
                errorFlag = true;
            }
            var setData = function (msg, data) {
                if (data) {
                    if (data.response) {
                        if (data.response.statusCode) {
                            msg.statusCode = data.response.statusCode;
                        }
                        if (data.response.headers) {
                            msg.headers = data.response.headers;
                        }
                        if (data.response.request && data.response.request.uri && data.response.request.uri.href) {
                            msg.responseUrl = data.response.request.uri.href;
                        }
                    }
                    if (data.body) {
                        msg.payload = data.body;
                    }
                }
                return msg;
            };
            if (!errorFlag) {
                node.status({ fill: 'blue', shape: 'dot', text: 'AmazonEc2ContainerService.status.requesting' });
                result.then(function (data) {
                    node.send(setData(msg, data));
                    node.status({});
                }).catch(function (error) {
                    var message = null;
                    if (error && error.body && error.body.message) {
                        message = error.body.message;
                    }
                    node.error(message, setData(msg, error));
                    node.status({ fill: 'red', shape: 'ring', text: 'node-red:common.status.error' });
                });
            }
        });
    }

    RED.nodes.registerType('eksido-aws-ec2-container-service', AmazonEc2ContainerServiceNode);
    function AmazonEc2ContainerServiceServiceNode(n) {
        RED.nodes.createNode(this, n);

        this.secureApiKeyValue = n.secureApiKeyValue;
        this.secureApiKeyHeaderOrQueryName = n.secureApiKeyHeaderOrQueryName;
        this.secureApiKeyIsQuery = n.secureApiKeyIsQuery;
    }

    RED.nodes.registerType('eksido-aws-ec2-container-service-service', AmazonEc2ContainerServiceServiceNode, {
        credentials: {
            secureApiKeyValue: { type: 'password' },
            temp: { type: 'text' }
        }
    });
};
