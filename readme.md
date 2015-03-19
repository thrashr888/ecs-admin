
Setup
-----

- Build your EC2 instances:
    - http://docs.aws.amazon.com/AmazonECS/latest/developerguide/get-set-up-for-amazon-ecs.html
    - http://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_GetStarted.html
- Get a Client Id
- Get an Identity Pool Id
- Create an S3 bucket


Build
-----

    
    > npm install
    > bower install


Run
---

You can run the node server directly:

    // Homebrew's io.js
    > HTTP2_LOG_DATA=1 HTTP2_LOG=trace DEBUG=server /usr/local/Cellar/iojs/1.5.1/bin/iojs server.js
    // or NodeJS
    > HTTP2_LOG_DATA=1 HTTP2_LOG=trace DEBUG=server node server.js

Or you can use the gulp task:

    > export ECSADMIN_BUCKET_NAME=thrashr888-ecs-admin
    > export ECSADMIN_HOST_NAME=https://d3csuswr8p8yjt.cloudfront.net
    > export ECSADMIN_ACCOUNT_NAME=testaccount
    > gulp watch

Deploy
------

    > export AWS_ACCESS_KEY_ID=your_key_id
    > export AWS_SECRET_ACCESS_KEY=your_secret_key
    > export ECSADMIN_BUCKET_NAME=thrashr888-ecs-admin
    > export ECSADMIN_HOST_NAME=https://d3csuswr8p8yjt.cloudfront.net
    > export ECSADMIN_ACCOUNT_NAME=testaccount
    > S3_BUCKET=thrashr888-ecs-admin 
    > gulp deploy

TODO
----

+ separate logged in and out components
+ switch to ES6 syntax
- list-tasks polling
- put data in level-js
- try out mesos chronos and marathon for scheduling
- connect to the agent for polling updates?
+ show mapped EC2 instances
- make UI paned horiz from left to right?
    - [clusters] [task definitions] [container instances [EC2 instances] [tasks]]
+ use S3 to map a domain to a clientid and identityPoolId
    + register client id uses S3 to write the mapping
    + this lets one install host multiple accounts


MIT License
-----------

Copyright (C) 2015 Paul Thrasher

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.