
variable "AWS_ACCESS_KEY" {}
variable "AWS_SECRET_KEY" {}
variable "ECS_KEYPAIR_NAME" {}
variable "ECS_COUNT" {}
variable "region" {
    default = "us-east-1"
}

provider "aws" {
    access_key = "${var.AWS_ACCESS_KEY}"
    secret_key = "${var.AWS_SECRET_KEY}"
    region = "${var.region}"
}

resource "aws_instance" "ecs" {
    ami = "ami-ecd5e884" # amzn-ami-2015.03.a-amazon-ecs-optimized
    instance_type = "t2.micro"
    count = 2
    associate_public_ip_address = true

    subnet_id = "${aws_subnet.ecs.id}"
    key_name = "${var.ECS_KEYPAIR_NAME}"
    security_groups = ["${aws_security_group.ecs.id}"]
    iam_instance_profile = "AmazonECSContainerInstanceRole"

    tags {
        Name = "container"
    }

    provisioner "remote-exec" {
        inline = [
            "echo ECS_CLUSTER=default >> /etc/ecs/ecs.config"
        ]
    }
}

resource "aws_elb" "ecs" {
    name = "container-lb-01"
    availability_zones = ["us-east-2b"]

    listener {
        instance_port = 8000
        instance_protocol = "http"
        lb_port = 80
        lb_protocol = "http"
    }

    health_check {
        healthy_threshold = 2
        unhealthy_threshold = 2
        timeout = 3
        target = "TCP:80/"
        interval = 30
    }

    subnets = ["${aws_subnet.ecs.id}"]
    instances = ["${aws_instance.ecs.id}"]
    cross_zone_load_balancing = true
}

resource "aws_vpc" "ecs" {
    cidr_block = "10.0.0.0/16"

    tags {
        Name = "ecs"
    }
}

resource "aws_subnet" "ecs" {
    vpc_id = "${aws_vpc.ecs.id}"
    cidr_block = "10.0.1.0/24"

    tags {
        Name = "ecs"
    }
}

resource "aws_security_group" "ecs" {
    name = "ecs"
    vpc_id = "${aws_vpc.ecs.id}"
    description = "containers"

    ingress {
        from_port = 80
        to_port = 80
        protocol = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }

    ingress {
        from_port = 22
        to_port = 22
        protocol = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }
}

output "public_dns" {
    value = "${aws_elb.ecs.dns_name}"
}

#resource "aws_eip" "ip" {
#    instance = "${aws_instance.ecs.id}"
#}

#output "ip" {
#    value = "${aws_eip.ip.public_ip}"
#}
