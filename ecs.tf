
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
    # amzn-ami-2014.09.1-amazon-ecs-optimized-preview3
    ami = "ami-801544e8"
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
#output "public_dns" {
#    value = "${aws_instance.ecs.public_dns}"
#}

#resource "aws_eip" "ip" {
#    instance = "${aws_instance.ecs.id}"
#}

#output "ip" {
#    value = "${aws_eip.ip.public_ip}"
#}

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
        protocol = "-1"
        cidr_blocks = ["0.0.0.0/0"]
    }
    ingress {
        from_port = 443
        to_port = 443
        protocol = "-1"
        cidr_blocks = ["0.0.0.0/0"]
    }
    ingress {
        from_port = 22
        to_port = 22
        protocol = "-1"
        cidr_blocks = ["0.0.0.0/0"]
    }
}
