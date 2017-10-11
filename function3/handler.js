'use strict';

module.exports.handler = function(event, context, cb) {
  cb("test")
  // return cb(null, {
  //   message: 'Go Serverless! Your Lambda function executed successfully!'
  // });
};
