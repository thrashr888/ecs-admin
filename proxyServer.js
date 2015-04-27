var fs = require('fs'),
  https = require('https'),
  httpProxy = require('http-proxy');

var server = httpProxy.createServer({
    ssl: {
        key: fs.readFileSync('node_modules/browser-sync/lib/server/certs/server.key', 'utf8'),
        cert: fs.readFileSync('node_modules/browser-sync/lib/server/certs/server.crt', 'utf8')
    },
    target: 'https://ecs.us-east-1.amazonaws.com:443',
    headers: {
        host: 'ecs.us-east-1.amazonaws.com:443'
    },
    secure: true
}, function (req, res) {
    console.log('\n\nProxying https request at %s', new Date());
    console.log('--> req', req.method, req.headers)
});

server.listen(8081, function(err) {

    if (err) {
        console.log('Error serving https proxy request: %s', req);
    }

    // console.log('server', server)
    console.log('\nCreated https proxy. Forwarding requests from %s to %s', '8081', server.options.target);

});

// http://docs.aws.amazon.com/AWSEC2/latest/APIReference/Query-Requests.html
// https://s3.amazonaws.com/doc/s3-developer-guide/RESTAuthentication.html

// {
//     "__type": "InvalidSignatureException",
//     "message": "The request signature we calculated does not match the signature you provided. Check your AWS Secret Access Key and signing method. Consult the service documentation for details.

// The Canonical String for this request should have been
// 'POST
// /

// host:ecs.us-east-1.amazonaws.com:443
// x-amz-content-sha256:44136fa355b3678a1146ad16f7e8649e94fb4fc21fe77e8310c060f61caaff8a
// x-amz-date:20150427T182524Z
// x-amz-security-token:AQoDYXdzEBwa4ANnsXhFMmUeUTN5Bj6iyEFMYZcYy7MSiC03xmUBe5+EYu9YEE6YvWasR2juAkcBBaEUmJZTIogjqvcT7bXWtdsXU0Wj1OKYjxjqY43VGyPVw50RM72IgSRlMtS+h/8GVxGvME0RMJ3HsYYy/4GD08fhMgImo6RtDOTyHPh+1z77dIhILbskayzYMrCEMhV243lQQ8l0WNYDBit1bJGgTnBFn3ErkevCLuAz5FSm/ucI7295QiyAnmdn/YaDxeEhR4B+wFRskZAcz+cgUdGCZyUltr20tPWW0qQkG05hJt12Gvp8i43TPciimZOjoWapVuNkEtpj0ox8J4cf2O5f0mbbIlkjSzgVYiedR2vfy6n+G0VU2ucU1EjbpCHt+SrhWVv0lHh5X7qsDd5+T1m757geRXC2/ngw5NMv1iiQsydzBg6+VzyD/xa47ViVg/C+v/8e92dYsEb8UylxbQkxm7PJzdYi0Yl2LQsJfCj/Bmgq2guKzS6HpHftyRIwcr4iw6jtNVJ6LHrIrBivIVYqf6EBhC0cKa8IZ5w7qPNfgXnBn9otuyPNbcZgA7aVdOSVWVpiSt9qW8IrIjOGojscz1kFpiFHsb8Vz2uMXfObNEkwkF9L5atVWTXwlbfVEUdE2vwglf75qQU=
// x-amz-target:AmazonEC2ContainerServiceV20141113.ListClusters
// x-amz-user-agent:aws-sdk-js/2.1.25

// host;x-amz-content-sha256;x-amz-date;x-amz-security-token;x-amz-target;x-amz-user-agent
// 44136fa355b3678a1146ad16f7e8649e94fb4fc21fe77e8310c060f61caaff8a'

// The String-to-Sign should have been
// 'AWS4-HMAC-SHA256
// 20150427T182524Z
// 20150427/us-east-1/ecs/aws4_request
// 13712268eb5192201514629fbd04cfcd05986ed1d78b4026497772ad67e7e1e9'
// "
// }