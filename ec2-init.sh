#!/bin/bash

NOTE
This is a temp scratch file. Nowhere close to ready.

See:
- http://docs.aws.amazon.com/AmazonECS/latest/developerguide/get-set-up-for-amazon-ecs.html
- http://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_GetStarted.html

IAM user

AmazonECSContainerInstancePolicy
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ecs:CreateCluster",
        "ecs:DeleteCluster",
        "ecs:ListClusters",
        "ecs:DescribeClusters",
        "ecs:ListTasks",
        "ecs:DescribeTasks",
        "ecs:ListTaskDefinitionFamilies",
        "ecs:ListTaskDefinitions",
        "ecs:DescribeTaskDefinition",
        "ecs:ListContainerInstances",
        "ecs:DescribeContainerInstances",
        "ecs:RegisterContainerInstance",
        "ecs:DeregisterContainerInstance",
        "ecs:DiscoverPollEndpoint",
        "ecs:Submit*",
        "ecs:Poll"
      ],
      "Resource": [
        "*"
      ]
    }
  ]
}

ami-801544e8
t2.micro
