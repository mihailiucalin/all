from botaws import *

vpc = VPC()
vpc.attach_to_inet_gw()
vpc.create_route_table()
SG = SecurityGroup(vpc.id)
key = KeyPair()
ec2 = Instances(InstanceType='t1.micro', subnetid=vpc.subnet_id,
                list_sec_group_id=[SG.id], ec2_name='test_ECS_inst_cont')


public_ip = ec2.get_ec2_public_ip(ec2.instances[0])
ec2.delete_instances()
key.delete_key()
vpc.delete_vpc()

info = ec2.get_ec2_info()

"""

path_to_conf = os.path.join(os.path.dirname(os.path.abspath(__file__)), "conf.json")
executionRoleArn = 'arn:aws:iam::223117700463:role/ECS-deploy-role'
containerDefinition = dict(command=["--server", "catadev-agent.ixia-cloudlens.net", "--accept_eula",
                                    "y", "--apikey", "bAYj9gz9WKkwofgtzjBI20P7wVQT3Ov3GD44Oml9"])
server = 'catadev-agent.ixia-cloudlens.net'
apikey = 'bAYj9gz9WKkwofgtzjBI20P7wVQT3Ov3GD44Oml9'
image = '223117700463.dkr.ecr.us-west-2.amazonaws.com/catadev-agent:improvements'
cont_name = 'agent'
task_name = 'test_task'
cluster_name = 'Test_cluster'

C1 = Cluster()

C1.create_cluster(cluster_name)
containerDefinitions = C1._create_container_definition(server, apikey, image, cont_name, 10)


C1.register_container_instance(cluster_name, instanceIdentityDocument, instanceIdentityDocumentSignature)
C1.create_task_definition(task_name, executionRoleArn, containerDefinitions)






C1.run_task(cluster_name, C1.taskDefArn)


import pdb
pdb.set_trace()

clean up
C1.delete_task_definition(C1.taskDefArn)
C1.delete_cluster(cluster_name)
"""
