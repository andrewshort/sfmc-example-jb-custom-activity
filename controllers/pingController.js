'use strict';

exports.executeLifecycle = (req, res) => {
  return res.json({});
}

exports.executePing = (req, res) => {

  var request = req.body;

  console.log(" req.body", JSON.stringify(req.body));

  // Find the in argument
  var getInArgument = (k) => {
    if (request && request.inArguments) {
      for (let i = 0; i < request.inArguments.length; i++) {
        let e = request.inArguments[i];
        if (k in e) {
          return e[k];
        }
      }
    }
    return;
  }

  // example: https://developer.salesforce.com/docs/atlas.en-us.noversion.mc-app-development.meta/mc-app-development/example-rest-activity.htm
  var pingInArgument = getInArgument('ping') || 'nothing';

  const status = 200;

  var sendResponse = () => {
    var responseObject = {
      pong: pingInArgument
    };

    console.log('responseObject', JSON.stringify(responseObject));
    res
      .status(status)
      .json(responseObject);
  }

  sendResponse();
};
