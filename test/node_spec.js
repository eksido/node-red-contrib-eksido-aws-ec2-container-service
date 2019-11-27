var should = require('should');
var helper = require('node-red-node-test-helper');
var node = require('../node.js');

helper.init(require.resolve('node-red'));

describe('eksido-aws-ec2-container-service node', function () {

    before(function (done) {
        helper.startServer(done);
    });

    after(function (done) {
        helper.stopServer(done);
    });

    afterEach(function () {
        helper.unload();
    });

    it('should be loaded', function (done) {
        var flow = [{ id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service' }];
        helper.load(node, flow, function () {
            var n1 = helper.getNode('n1');
            n1.should.have.property('name', 'eksido-aws-ec2-container-service');
            done();
        });
    });

    it('should handle CreateCluster()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'CreateCluster',
                CreateCluster_body: '<node property>', // (1) define node properties
                CreateCluster_xAmzTarget: '<node property>', // (1) define node properties
                CreateCluster_xAmzContentSha256: '<node property>', // (1) define node properties
                CreateCluster_xAmzDate: '<node property>', // (1) define node properties
                CreateCluster_xAmzAlgorithm: '<node property>', // (1) define node properties
                CreateCluster_xAmzCredential: '<node property>', // (1) define node properties
                CreateCluster_xAmzSecurityToken: '<node property>', // (1) define node properties
                CreateCluster_xAmzSignature: '<node property>', // (1) define node properties
                CreateCluster_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle CreateService()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'CreateService',
                CreateService_body: '<node property>', // (1) define node properties
                CreateService_xAmzTarget: '<node property>', // (1) define node properties
                CreateService_xAmzContentSha256: '<node property>', // (1) define node properties
                CreateService_xAmzDate: '<node property>', // (1) define node properties
                CreateService_xAmzAlgorithm: '<node property>', // (1) define node properties
                CreateService_xAmzCredential: '<node property>', // (1) define node properties
                CreateService_xAmzSecurityToken: '<node property>', // (1) define node properties
                CreateService_xAmzSignature: '<node property>', // (1) define node properties
                CreateService_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle CreateTaskSet()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'CreateTaskSet',
                CreateTaskSet_body: '<node property>', // (1) define node properties
                CreateTaskSet_xAmzTarget: '<node property>', // (1) define node properties
                CreateTaskSet_xAmzContentSha256: '<node property>', // (1) define node properties
                CreateTaskSet_xAmzDate: '<node property>', // (1) define node properties
                CreateTaskSet_xAmzAlgorithm: '<node property>', // (1) define node properties
                CreateTaskSet_xAmzCredential: '<node property>', // (1) define node properties
                CreateTaskSet_xAmzSecurityToken: '<node property>', // (1) define node properties
                CreateTaskSet_xAmzSignature: '<node property>', // (1) define node properties
                CreateTaskSet_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle DeleteAccountSetting()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'DeleteAccountSetting',
                DeleteAccountSetting_body: '<node property>', // (1) define node properties
                DeleteAccountSetting_xAmzTarget: '<node property>', // (1) define node properties
                DeleteAccountSetting_xAmzContentSha256: '<node property>', // (1) define node properties
                DeleteAccountSetting_xAmzDate: '<node property>', // (1) define node properties
                DeleteAccountSetting_xAmzAlgorithm: '<node property>', // (1) define node properties
                DeleteAccountSetting_xAmzCredential: '<node property>', // (1) define node properties
                DeleteAccountSetting_xAmzSecurityToken: '<node property>', // (1) define node properties
                DeleteAccountSetting_xAmzSignature: '<node property>', // (1) define node properties
                DeleteAccountSetting_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle DeleteAttributes()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'DeleteAttributes',
                DeleteAttributes_body: '<node property>', // (1) define node properties
                DeleteAttributes_xAmzTarget: '<node property>', // (1) define node properties
                DeleteAttributes_xAmzContentSha256: '<node property>', // (1) define node properties
                DeleteAttributes_xAmzDate: '<node property>', // (1) define node properties
                DeleteAttributes_xAmzAlgorithm: '<node property>', // (1) define node properties
                DeleteAttributes_xAmzCredential: '<node property>', // (1) define node properties
                DeleteAttributes_xAmzSecurityToken: '<node property>', // (1) define node properties
                DeleteAttributes_xAmzSignature: '<node property>', // (1) define node properties
                DeleteAttributes_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle DeleteCluster()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'DeleteCluster',
                DeleteCluster_body: '<node property>', // (1) define node properties
                DeleteCluster_xAmzTarget: '<node property>', // (1) define node properties
                DeleteCluster_xAmzContentSha256: '<node property>', // (1) define node properties
                DeleteCluster_xAmzDate: '<node property>', // (1) define node properties
                DeleteCluster_xAmzAlgorithm: '<node property>', // (1) define node properties
                DeleteCluster_xAmzCredential: '<node property>', // (1) define node properties
                DeleteCluster_xAmzSecurityToken: '<node property>', // (1) define node properties
                DeleteCluster_xAmzSignature: '<node property>', // (1) define node properties
                DeleteCluster_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle DeleteService()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'DeleteService',
                DeleteService_body: '<node property>', // (1) define node properties
                DeleteService_xAmzTarget: '<node property>', // (1) define node properties
                DeleteService_xAmzContentSha256: '<node property>', // (1) define node properties
                DeleteService_xAmzDate: '<node property>', // (1) define node properties
                DeleteService_xAmzAlgorithm: '<node property>', // (1) define node properties
                DeleteService_xAmzCredential: '<node property>', // (1) define node properties
                DeleteService_xAmzSecurityToken: '<node property>', // (1) define node properties
                DeleteService_xAmzSignature: '<node property>', // (1) define node properties
                DeleteService_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle DeleteTaskSet()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'DeleteTaskSet',
                DeleteTaskSet_body: '<node property>', // (1) define node properties
                DeleteTaskSet_xAmzTarget: '<node property>', // (1) define node properties
                DeleteTaskSet_xAmzContentSha256: '<node property>', // (1) define node properties
                DeleteTaskSet_xAmzDate: '<node property>', // (1) define node properties
                DeleteTaskSet_xAmzAlgorithm: '<node property>', // (1) define node properties
                DeleteTaskSet_xAmzCredential: '<node property>', // (1) define node properties
                DeleteTaskSet_xAmzSecurityToken: '<node property>', // (1) define node properties
                DeleteTaskSet_xAmzSignature: '<node property>', // (1) define node properties
                DeleteTaskSet_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle DeregisterContainerInstance()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'DeregisterContainerInstance',
                DeregisterContainerInstance_body: '<node property>', // (1) define node properties
                DeregisterContainerInstance_xAmzTarget: '<node property>', // (1) define node properties
                DeregisterContainerInstance_xAmzContentSha256: '<node property>', // (1) define node properties
                DeregisterContainerInstance_xAmzDate: '<node property>', // (1) define node properties
                DeregisterContainerInstance_xAmzAlgorithm: '<node property>', // (1) define node properties
                DeregisterContainerInstance_xAmzCredential: '<node property>', // (1) define node properties
                DeregisterContainerInstance_xAmzSecurityToken: '<node property>', // (1) define node properties
                DeregisterContainerInstance_xAmzSignature: '<node property>', // (1) define node properties
                DeregisterContainerInstance_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle DeregisterTaskDefinition()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'DeregisterTaskDefinition',
                DeregisterTaskDefinition_body: '<node property>', // (1) define node properties
                DeregisterTaskDefinition_xAmzTarget: '<node property>', // (1) define node properties
                DeregisterTaskDefinition_xAmzContentSha256: '<node property>', // (1) define node properties
                DeregisterTaskDefinition_xAmzDate: '<node property>', // (1) define node properties
                DeregisterTaskDefinition_xAmzAlgorithm: '<node property>', // (1) define node properties
                DeregisterTaskDefinition_xAmzCredential: '<node property>', // (1) define node properties
                DeregisterTaskDefinition_xAmzSecurityToken: '<node property>', // (1) define node properties
                DeregisterTaskDefinition_xAmzSignature: '<node property>', // (1) define node properties
                DeregisterTaskDefinition_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle DescribeClusters()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'DescribeClusters',
                DescribeClusters_body: '<node property>', // (1) define node properties
                DescribeClusters_xAmzTarget: '<node property>', // (1) define node properties
                DescribeClusters_xAmzContentSha256: '<node property>', // (1) define node properties
                DescribeClusters_xAmzDate: '<node property>', // (1) define node properties
                DescribeClusters_xAmzAlgorithm: '<node property>', // (1) define node properties
                DescribeClusters_xAmzCredential: '<node property>', // (1) define node properties
                DescribeClusters_xAmzSecurityToken: '<node property>', // (1) define node properties
                DescribeClusters_xAmzSignature: '<node property>', // (1) define node properties
                DescribeClusters_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle DescribeContainerInstances()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'DescribeContainerInstances',
                DescribeContainerInstances_body: '<node property>', // (1) define node properties
                DescribeContainerInstances_xAmzTarget: '<node property>', // (1) define node properties
                DescribeContainerInstances_xAmzContentSha256: '<node property>', // (1) define node properties
                DescribeContainerInstances_xAmzDate: '<node property>', // (1) define node properties
                DescribeContainerInstances_xAmzAlgorithm: '<node property>', // (1) define node properties
                DescribeContainerInstances_xAmzCredential: '<node property>', // (1) define node properties
                DescribeContainerInstances_xAmzSecurityToken: '<node property>', // (1) define node properties
                DescribeContainerInstances_xAmzSignature: '<node property>', // (1) define node properties
                DescribeContainerInstances_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle DescribeServices()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'DescribeServices',
                DescribeServices_body: '<node property>', // (1) define node properties
                DescribeServices_xAmzTarget: '<node property>', // (1) define node properties
                DescribeServices_xAmzContentSha256: '<node property>', // (1) define node properties
                DescribeServices_xAmzDate: '<node property>', // (1) define node properties
                DescribeServices_xAmzAlgorithm: '<node property>', // (1) define node properties
                DescribeServices_xAmzCredential: '<node property>', // (1) define node properties
                DescribeServices_xAmzSecurityToken: '<node property>', // (1) define node properties
                DescribeServices_xAmzSignature: '<node property>', // (1) define node properties
                DescribeServices_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle DescribeTaskDefinition()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'DescribeTaskDefinition',
                DescribeTaskDefinition_body: '<node property>', // (1) define node properties
                DescribeTaskDefinition_xAmzTarget: '<node property>', // (1) define node properties
                DescribeTaskDefinition_xAmzContentSha256: '<node property>', // (1) define node properties
                DescribeTaskDefinition_xAmzDate: '<node property>', // (1) define node properties
                DescribeTaskDefinition_xAmzAlgorithm: '<node property>', // (1) define node properties
                DescribeTaskDefinition_xAmzCredential: '<node property>', // (1) define node properties
                DescribeTaskDefinition_xAmzSecurityToken: '<node property>', // (1) define node properties
                DescribeTaskDefinition_xAmzSignature: '<node property>', // (1) define node properties
                DescribeTaskDefinition_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle DescribeTaskSets()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'DescribeTaskSets',
                DescribeTaskSets_body: '<node property>', // (1) define node properties
                DescribeTaskSets_xAmzTarget: '<node property>', // (1) define node properties
                DescribeTaskSets_xAmzContentSha256: '<node property>', // (1) define node properties
                DescribeTaskSets_xAmzDate: '<node property>', // (1) define node properties
                DescribeTaskSets_xAmzAlgorithm: '<node property>', // (1) define node properties
                DescribeTaskSets_xAmzCredential: '<node property>', // (1) define node properties
                DescribeTaskSets_xAmzSecurityToken: '<node property>', // (1) define node properties
                DescribeTaskSets_xAmzSignature: '<node property>', // (1) define node properties
                DescribeTaskSets_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle DescribeTasks()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'DescribeTasks',
                DescribeTasks_body: '<node property>', // (1) define node properties
                DescribeTasks_xAmzTarget: '<node property>', // (1) define node properties
                DescribeTasks_xAmzContentSha256: '<node property>', // (1) define node properties
                DescribeTasks_xAmzDate: '<node property>', // (1) define node properties
                DescribeTasks_xAmzAlgorithm: '<node property>', // (1) define node properties
                DescribeTasks_xAmzCredential: '<node property>', // (1) define node properties
                DescribeTasks_xAmzSecurityToken: '<node property>', // (1) define node properties
                DescribeTasks_xAmzSignature: '<node property>', // (1) define node properties
                DescribeTasks_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle DiscoverPollEndpoint()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'DiscoverPollEndpoint',
                DiscoverPollEndpoint_body: '<node property>', // (1) define node properties
                DiscoverPollEndpoint_xAmzTarget: '<node property>', // (1) define node properties
                DiscoverPollEndpoint_xAmzContentSha256: '<node property>', // (1) define node properties
                DiscoverPollEndpoint_xAmzDate: '<node property>', // (1) define node properties
                DiscoverPollEndpoint_xAmzAlgorithm: '<node property>', // (1) define node properties
                DiscoverPollEndpoint_xAmzCredential: '<node property>', // (1) define node properties
                DiscoverPollEndpoint_xAmzSecurityToken: '<node property>', // (1) define node properties
                DiscoverPollEndpoint_xAmzSignature: '<node property>', // (1) define node properties
                DiscoverPollEndpoint_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle ListAccountSettings()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'ListAccountSettings',
                ListAccountSettings_body: '<node property>', // (1) define node properties
                ListAccountSettings_xAmzTarget: '<node property>', // (1) define node properties
                ListAccountSettings_xAmzContentSha256: '<node property>', // (1) define node properties
                ListAccountSettings_xAmzDate: '<node property>', // (1) define node properties
                ListAccountSettings_xAmzAlgorithm: '<node property>', // (1) define node properties
                ListAccountSettings_xAmzCredential: '<node property>', // (1) define node properties
                ListAccountSettings_xAmzSecurityToken: '<node property>', // (1) define node properties
                ListAccountSettings_xAmzSignature: '<node property>', // (1) define node properties
                ListAccountSettings_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle ListAttributes()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'ListAttributes',
                ListAttributes_body: '<node property>', // (1) define node properties
                ListAttributes_xAmzTarget: '<node property>', // (1) define node properties
                ListAttributes_xAmzContentSha256: '<node property>', // (1) define node properties
                ListAttributes_xAmzDate: '<node property>', // (1) define node properties
                ListAttributes_xAmzAlgorithm: '<node property>', // (1) define node properties
                ListAttributes_xAmzCredential: '<node property>', // (1) define node properties
                ListAttributes_xAmzSecurityToken: '<node property>', // (1) define node properties
                ListAttributes_xAmzSignature: '<node property>', // (1) define node properties
                ListAttributes_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle ListClusters()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'ListClusters',
                ListClusters_body: '<node property>', // (1) define node properties
                ListClusters_maxResults: '<node property>', // (1) define node properties
                ListClusters_nextToken: '<node property>', // (1) define node properties
                ListClusters_xAmzTarget: '<node property>', // (1) define node properties
                ListClusters_xAmzContentSha256: '<node property>', // (1) define node properties
                ListClusters_xAmzDate: '<node property>', // (1) define node properties
                ListClusters_xAmzAlgorithm: '<node property>', // (1) define node properties
                ListClusters_xAmzCredential: '<node property>', // (1) define node properties
                ListClusters_xAmzSecurityToken: '<node property>', // (1) define node properties
                ListClusters_xAmzSignature: '<node property>', // (1) define node properties
                ListClusters_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle ListContainerInstances()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'ListContainerInstances',
                ListContainerInstances_body: '<node property>', // (1) define node properties
                ListContainerInstances_maxResults: '<node property>', // (1) define node properties
                ListContainerInstances_nextToken: '<node property>', // (1) define node properties
                ListContainerInstances_xAmzTarget: '<node property>', // (1) define node properties
                ListContainerInstances_xAmzContentSha256: '<node property>', // (1) define node properties
                ListContainerInstances_xAmzDate: '<node property>', // (1) define node properties
                ListContainerInstances_xAmzAlgorithm: '<node property>', // (1) define node properties
                ListContainerInstances_xAmzCredential: '<node property>', // (1) define node properties
                ListContainerInstances_xAmzSecurityToken: '<node property>', // (1) define node properties
                ListContainerInstances_xAmzSignature: '<node property>', // (1) define node properties
                ListContainerInstances_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle ListServices()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'ListServices',
                ListServices_body: '<node property>', // (1) define node properties
                ListServices_maxResults: '<node property>', // (1) define node properties
                ListServices_nextToken: '<node property>', // (1) define node properties
                ListServices_xAmzTarget: '<node property>', // (1) define node properties
                ListServices_xAmzContentSha256: '<node property>', // (1) define node properties
                ListServices_xAmzDate: '<node property>', // (1) define node properties
                ListServices_xAmzAlgorithm: '<node property>', // (1) define node properties
                ListServices_xAmzCredential: '<node property>', // (1) define node properties
                ListServices_xAmzSecurityToken: '<node property>', // (1) define node properties
                ListServices_xAmzSignature: '<node property>', // (1) define node properties
                ListServices_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle ListTagsForResource()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'ListTagsForResource',
                ListTagsForResource_body: '<node property>', // (1) define node properties
                ListTagsForResource_xAmzTarget: '<node property>', // (1) define node properties
                ListTagsForResource_xAmzContentSha256: '<node property>', // (1) define node properties
                ListTagsForResource_xAmzDate: '<node property>', // (1) define node properties
                ListTagsForResource_xAmzAlgorithm: '<node property>', // (1) define node properties
                ListTagsForResource_xAmzCredential: '<node property>', // (1) define node properties
                ListTagsForResource_xAmzSecurityToken: '<node property>', // (1) define node properties
                ListTagsForResource_xAmzSignature: '<node property>', // (1) define node properties
                ListTagsForResource_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle ListTaskDefinitionFamilies()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'ListTaskDefinitionFamilies',
                ListTaskDefinitionFamilies_body: '<node property>', // (1) define node properties
                ListTaskDefinitionFamilies_maxResults: '<node property>', // (1) define node properties
                ListTaskDefinitionFamilies_nextToken: '<node property>', // (1) define node properties
                ListTaskDefinitionFamilies_xAmzTarget: '<node property>', // (1) define node properties
                ListTaskDefinitionFamilies_xAmzContentSha256: '<node property>', // (1) define node properties
                ListTaskDefinitionFamilies_xAmzDate: '<node property>', // (1) define node properties
                ListTaskDefinitionFamilies_xAmzAlgorithm: '<node property>', // (1) define node properties
                ListTaskDefinitionFamilies_xAmzCredential: '<node property>', // (1) define node properties
                ListTaskDefinitionFamilies_xAmzSecurityToken: '<node property>', // (1) define node properties
                ListTaskDefinitionFamilies_xAmzSignature: '<node property>', // (1) define node properties
                ListTaskDefinitionFamilies_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle ListTaskDefinitions()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'ListTaskDefinitions',
                ListTaskDefinitions_body: '<node property>', // (1) define node properties
                ListTaskDefinitions_maxResults: '<node property>', // (1) define node properties
                ListTaskDefinitions_nextToken: '<node property>', // (1) define node properties
                ListTaskDefinitions_xAmzTarget: '<node property>', // (1) define node properties
                ListTaskDefinitions_xAmzContentSha256: '<node property>', // (1) define node properties
                ListTaskDefinitions_xAmzDate: '<node property>', // (1) define node properties
                ListTaskDefinitions_xAmzAlgorithm: '<node property>', // (1) define node properties
                ListTaskDefinitions_xAmzCredential: '<node property>', // (1) define node properties
                ListTaskDefinitions_xAmzSecurityToken: '<node property>', // (1) define node properties
                ListTaskDefinitions_xAmzSignature: '<node property>', // (1) define node properties
                ListTaskDefinitions_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle ListTasks()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'ListTasks',
                ListTasks_body: '<node property>', // (1) define node properties
                ListTasks_maxResults: '<node property>', // (1) define node properties
                ListTasks_nextToken: '<node property>', // (1) define node properties
                ListTasks_xAmzTarget: '<node property>', // (1) define node properties
                ListTasks_xAmzContentSha256: '<node property>', // (1) define node properties
                ListTasks_xAmzDate: '<node property>', // (1) define node properties
                ListTasks_xAmzAlgorithm: '<node property>', // (1) define node properties
                ListTasks_xAmzCredential: '<node property>', // (1) define node properties
                ListTasks_xAmzSecurityToken: '<node property>', // (1) define node properties
                ListTasks_xAmzSignature: '<node property>', // (1) define node properties
                ListTasks_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle PutAccountSetting()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'PutAccountSetting',
                PutAccountSetting_body: '<node property>', // (1) define node properties
                PutAccountSetting_xAmzTarget: '<node property>', // (1) define node properties
                PutAccountSetting_xAmzContentSha256: '<node property>', // (1) define node properties
                PutAccountSetting_xAmzDate: '<node property>', // (1) define node properties
                PutAccountSetting_xAmzAlgorithm: '<node property>', // (1) define node properties
                PutAccountSetting_xAmzCredential: '<node property>', // (1) define node properties
                PutAccountSetting_xAmzSecurityToken: '<node property>', // (1) define node properties
                PutAccountSetting_xAmzSignature: '<node property>', // (1) define node properties
                PutAccountSetting_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle PutAccountSettingDefault()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'PutAccountSettingDefault',
                PutAccountSettingDefault_body: '<node property>', // (1) define node properties
                PutAccountSettingDefault_xAmzTarget: '<node property>', // (1) define node properties
                PutAccountSettingDefault_xAmzContentSha256: '<node property>', // (1) define node properties
                PutAccountSettingDefault_xAmzDate: '<node property>', // (1) define node properties
                PutAccountSettingDefault_xAmzAlgorithm: '<node property>', // (1) define node properties
                PutAccountSettingDefault_xAmzCredential: '<node property>', // (1) define node properties
                PutAccountSettingDefault_xAmzSecurityToken: '<node property>', // (1) define node properties
                PutAccountSettingDefault_xAmzSignature: '<node property>', // (1) define node properties
                PutAccountSettingDefault_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle PutAttributes()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'PutAttributes',
                PutAttributes_body: '<node property>', // (1) define node properties
                PutAttributes_xAmzTarget: '<node property>', // (1) define node properties
                PutAttributes_xAmzContentSha256: '<node property>', // (1) define node properties
                PutAttributes_xAmzDate: '<node property>', // (1) define node properties
                PutAttributes_xAmzAlgorithm: '<node property>', // (1) define node properties
                PutAttributes_xAmzCredential: '<node property>', // (1) define node properties
                PutAttributes_xAmzSecurityToken: '<node property>', // (1) define node properties
                PutAttributes_xAmzSignature: '<node property>', // (1) define node properties
                PutAttributes_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle RegisterContainerInstance()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'RegisterContainerInstance',
                RegisterContainerInstance_body: '<node property>', // (1) define node properties
                RegisterContainerInstance_xAmzTarget: '<node property>', // (1) define node properties
                RegisterContainerInstance_xAmzContentSha256: '<node property>', // (1) define node properties
                RegisterContainerInstance_xAmzDate: '<node property>', // (1) define node properties
                RegisterContainerInstance_xAmzAlgorithm: '<node property>', // (1) define node properties
                RegisterContainerInstance_xAmzCredential: '<node property>', // (1) define node properties
                RegisterContainerInstance_xAmzSecurityToken: '<node property>', // (1) define node properties
                RegisterContainerInstance_xAmzSignature: '<node property>', // (1) define node properties
                RegisterContainerInstance_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle RegisterTaskDefinition()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'RegisterTaskDefinition',
                RegisterTaskDefinition_body: '<node property>', // (1) define node properties
                RegisterTaskDefinition_xAmzTarget: '<node property>', // (1) define node properties
                RegisterTaskDefinition_xAmzContentSha256: '<node property>', // (1) define node properties
                RegisterTaskDefinition_xAmzDate: '<node property>', // (1) define node properties
                RegisterTaskDefinition_xAmzAlgorithm: '<node property>', // (1) define node properties
                RegisterTaskDefinition_xAmzCredential: '<node property>', // (1) define node properties
                RegisterTaskDefinition_xAmzSecurityToken: '<node property>', // (1) define node properties
                RegisterTaskDefinition_xAmzSignature: '<node property>', // (1) define node properties
                RegisterTaskDefinition_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle RunTask()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'RunTask',
                RunTask_body: '<node property>', // (1) define node properties
                RunTask_xAmzTarget: '<node property>', // (1) define node properties
                RunTask_xAmzContentSha256: '<node property>', // (1) define node properties
                RunTask_xAmzDate: '<node property>', // (1) define node properties
                RunTask_xAmzAlgorithm: '<node property>', // (1) define node properties
                RunTask_xAmzCredential: '<node property>', // (1) define node properties
                RunTask_xAmzSecurityToken: '<node property>', // (1) define node properties
                RunTask_xAmzSignature: '<node property>', // (1) define node properties
                RunTask_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle StartTask()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'StartTask',
                StartTask_body: '<node property>', // (1) define node properties
                StartTask_xAmzTarget: '<node property>', // (1) define node properties
                StartTask_xAmzContentSha256: '<node property>', // (1) define node properties
                StartTask_xAmzDate: '<node property>', // (1) define node properties
                StartTask_xAmzAlgorithm: '<node property>', // (1) define node properties
                StartTask_xAmzCredential: '<node property>', // (1) define node properties
                StartTask_xAmzSecurityToken: '<node property>', // (1) define node properties
                StartTask_xAmzSignature: '<node property>', // (1) define node properties
                StartTask_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle StopTask()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'StopTask',
                StopTask_body: '<node property>', // (1) define node properties
                StopTask_xAmzTarget: '<node property>', // (1) define node properties
                StopTask_xAmzContentSha256: '<node property>', // (1) define node properties
                StopTask_xAmzDate: '<node property>', // (1) define node properties
                StopTask_xAmzAlgorithm: '<node property>', // (1) define node properties
                StopTask_xAmzCredential: '<node property>', // (1) define node properties
                StopTask_xAmzSecurityToken: '<node property>', // (1) define node properties
                StopTask_xAmzSignature: '<node property>', // (1) define node properties
                StopTask_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle SubmitAttachmentStateChanges()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'SubmitAttachmentStateChanges',
                SubmitAttachmentStateChanges_body: '<node property>', // (1) define node properties
                SubmitAttachmentStateChanges_xAmzTarget: '<node property>', // (1) define node properties
                SubmitAttachmentStateChanges_xAmzContentSha256: '<node property>', // (1) define node properties
                SubmitAttachmentStateChanges_xAmzDate: '<node property>', // (1) define node properties
                SubmitAttachmentStateChanges_xAmzAlgorithm: '<node property>', // (1) define node properties
                SubmitAttachmentStateChanges_xAmzCredential: '<node property>', // (1) define node properties
                SubmitAttachmentStateChanges_xAmzSecurityToken: '<node property>', // (1) define node properties
                SubmitAttachmentStateChanges_xAmzSignature: '<node property>', // (1) define node properties
                SubmitAttachmentStateChanges_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle SubmitContainerStateChange()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'SubmitContainerStateChange',
                SubmitContainerStateChange_body: '<node property>', // (1) define node properties
                SubmitContainerStateChange_xAmzTarget: '<node property>', // (1) define node properties
                SubmitContainerStateChange_xAmzContentSha256: '<node property>', // (1) define node properties
                SubmitContainerStateChange_xAmzDate: '<node property>', // (1) define node properties
                SubmitContainerStateChange_xAmzAlgorithm: '<node property>', // (1) define node properties
                SubmitContainerStateChange_xAmzCredential: '<node property>', // (1) define node properties
                SubmitContainerStateChange_xAmzSecurityToken: '<node property>', // (1) define node properties
                SubmitContainerStateChange_xAmzSignature: '<node property>', // (1) define node properties
                SubmitContainerStateChange_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle SubmitTaskStateChange()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'SubmitTaskStateChange',
                SubmitTaskStateChange_body: '<node property>', // (1) define node properties
                SubmitTaskStateChange_xAmzTarget: '<node property>', // (1) define node properties
                SubmitTaskStateChange_xAmzContentSha256: '<node property>', // (1) define node properties
                SubmitTaskStateChange_xAmzDate: '<node property>', // (1) define node properties
                SubmitTaskStateChange_xAmzAlgorithm: '<node property>', // (1) define node properties
                SubmitTaskStateChange_xAmzCredential: '<node property>', // (1) define node properties
                SubmitTaskStateChange_xAmzSecurityToken: '<node property>', // (1) define node properties
                SubmitTaskStateChange_xAmzSignature: '<node property>', // (1) define node properties
                SubmitTaskStateChange_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle TagResource()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'TagResource',
                TagResource_body: '<node property>', // (1) define node properties
                TagResource_xAmzTarget: '<node property>', // (1) define node properties
                TagResource_xAmzContentSha256: '<node property>', // (1) define node properties
                TagResource_xAmzDate: '<node property>', // (1) define node properties
                TagResource_xAmzAlgorithm: '<node property>', // (1) define node properties
                TagResource_xAmzCredential: '<node property>', // (1) define node properties
                TagResource_xAmzSecurityToken: '<node property>', // (1) define node properties
                TagResource_xAmzSignature: '<node property>', // (1) define node properties
                TagResource_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle UntagResource()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'UntagResource',
                UntagResource_body: '<node property>', // (1) define node properties
                UntagResource_xAmzTarget: '<node property>', // (1) define node properties
                UntagResource_xAmzContentSha256: '<node property>', // (1) define node properties
                UntagResource_xAmzDate: '<node property>', // (1) define node properties
                UntagResource_xAmzAlgorithm: '<node property>', // (1) define node properties
                UntagResource_xAmzCredential: '<node property>', // (1) define node properties
                UntagResource_xAmzSecurityToken: '<node property>', // (1) define node properties
                UntagResource_xAmzSignature: '<node property>', // (1) define node properties
                UntagResource_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle UpdateClusterSettings()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'UpdateClusterSettings',
                UpdateClusterSettings_body: '<node property>', // (1) define node properties
                UpdateClusterSettings_xAmzTarget: '<node property>', // (1) define node properties
                UpdateClusterSettings_xAmzContentSha256: '<node property>', // (1) define node properties
                UpdateClusterSettings_xAmzDate: '<node property>', // (1) define node properties
                UpdateClusterSettings_xAmzAlgorithm: '<node property>', // (1) define node properties
                UpdateClusterSettings_xAmzCredential: '<node property>', // (1) define node properties
                UpdateClusterSettings_xAmzSecurityToken: '<node property>', // (1) define node properties
                UpdateClusterSettings_xAmzSignature: '<node property>', // (1) define node properties
                UpdateClusterSettings_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle UpdateContainerAgent()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'UpdateContainerAgent',
                UpdateContainerAgent_body: '<node property>', // (1) define node properties
                UpdateContainerAgent_xAmzTarget: '<node property>', // (1) define node properties
                UpdateContainerAgent_xAmzContentSha256: '<node property>', // (1) define node properties
                UpdateContainerAgent_xAmzDate: '<node property>', // (1) define node properties
                UpdateContainerAgent_xAmzAlgorithm: '<node property>', // (1) define node properties
                UpdateContainerAgent_xAmzCredential: '<node property>', // (1) define node properties
                UpdateContainerAgent_xAmzSecurityToken: '<node property>', // (1) define node properties
                UpdateContainerAgent_xAmzSignature: '<node property>', // (1) define node properties
                UpdateContainerAgent_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle UpdateContainerInstancesState()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'UpdateContainerInstancesState',
                UpdateContainerInstancesState_body: '<node property>', // (1) define node properties
                UpdateContainerInstancesState_xAmzTarget: '<node property>', // (1) define node properties
                UpdateContainerInstancesState_xAmzContentSha256: '<node property>', // (1) define node properties
                UpdateContainerInstancesState_xAmzDate: '<node property>', // (1) define node properties
                UpdateContainerInstancesState_xAmzAlgorithm: '<node property>', // (1) define node properties
                UpdateContainerInstancesState_xAmzCredential: '<node property>', // (1) define node properties
                UpdateContainerInstancesState_xAmzSecurityToken: '<node property>', // (1) define node properties
                UpdateContainerInstancesState_xAmzSignature: '<node property>', // (1) define node properties
                UpdateContainerInstancesState_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle UpdateService()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'UpdateService',
                UpdateService_body: '<node property>', // (1) define node properties
                UpdateService_xAmzTarget: '<node property>', // (1) define node properties
                UpdateService_xAmzContentSha256: '<node property>', // (1) define node properties
                UpdateService_xAmzDate: '<node property>', // (1) define node properties
                UpdateService_xAmzAlgorithm: '<node property>', // (1) define node properties
                UpdateService_xAmzCredential: '<node property>', // (1) define node properties
                UpdateService_xAmzSecurityToken: '<node property>', // (1) define node properties
                UpdateService_xAmzSignature: '<node property>', // (1) define node properties
                UpdateService_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle UpdateServicePrimaryTaskSet()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'UpdateServicePrimaryTaskSet',
                UpdateServicePrimaryTaskSet_body: '<node property>', // (1) define node properties
                UpdateServicePrimaryTaskSet_xAmzTarget: '<node property>', // (1) define node properties
                UpdateServicePrimaryTaskSet_xAmzContentSha256: '<node property>', // (1) define node properties
                UpdateServicePrimaryTaskSet_xAmzDate: '<node property>', // (1) define node properties
                UpdateServicePrimaryTaskSet_xAmzAlgorithm: '<node property>', // (1) define node properties
                UpdateServicePrimaryTaskSet_xAmzCredential: '<node property>', // (1) define node properties
                UpdateServicePrimaryTaskSet_xAmzSecurityToken: '<node property>', // (1) define node properties
                UpdateServicePrimaryTaskSet_xAmzSignature: '<node property>', // (1) define node properties
                UpdateServicePrimaryTaskSet_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle UpdateTaskSet()', function (done) {
        var flow = [
            { id: 'n1', type: 'eksido-aws-ec2-container-service', name: 'eksido-aws-ec2-container-service',
                method: 'UpdateTaskSet',
                UpdateTaskSet_body: '<node property>', // (1) define node properties
                UpdateTaskSet_xAmzTarget: '<node property>', // (1) define node properties
                UpdateTaskSet_xAmzContentSha256: '<node property>', // (1) define node properties
                UpdateTaskSet_xAmzDate: '<node property>', // (1) define node properties
                UpdateTaskSet_xAmzAlgorithm: '<node property>', // (1) define node properties
                UpdateTaskSet_xAmzCredential: '<node property>', // (1) define node properties
                UpdateTaskSet_xAmzSecurityToken: '<node property>', // (1) define node properties
                UpdateTaskSet_xAmzSignature: '<node property>', // (1) define node properties
                UpdateTaskSet_xAmzSignedHeaders: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'eksido-aws-ec2-container-service-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
});
