'use strict';

var mongoose = require('mongoose'),
    Shrinker = mongoose.model('Shrinker');

exports.requestHandler = function(req, res) {
    var exec = req.body.exec;

    for (var i = 0; i < exec.length; i++)
        switch (exec[i][0]) {
            case "sqlShrink":
                sqlShrink(exec[i], res);
                break;

            case "sqlUnshrink":
                sqlUnshrink(exec[i], res);
                break;

            case "sqlRemove":
                sqlRemove(exec[i], res);
                break;

            case "sqlShrinkList":
                sqlShrinkList(res);
                break;

            default:
                response(res, "405", "Command not found!", null);
                break;
        }
};

function sqlShrink(data, res)
{
  var name = data[1][0],
      url = data[1][1];

  var expiry = data[2].expiry;

  Shrinker.findOne({name: name}, function(shr, err) {
    if(err)
      res.send(err);

    if(shr != null) {
      response(res, "403", "Name already taken!", null);
      return;
    }

    var shrink_data = new Shrinker({
      created: Date.now(),
      expiry: expiry,
      name: name,
      url: url
    });

    shrink_data.save(function(err) {
      if(err)
        res.send(err);

      response(res, "200", "", null);
    });
  });
}

function sqlRemove(data, res)
{
  var name = data[1][0];

  Shrinker.findOne({name: name}, function(shr, err) {
    if(err)
      res.send(err);

    if(shr == null) {
      response(res, "404", "Data not found!", null);
      return;
    }

    shr.remove(function(shr, err) {
      if(err)
        res.send(err);

      response(res, "200", "", null);
    });
  });
}

function sqlUnshrink(data, res)
{
  var name = data[1][0];

  Shrinker.findOne({name: name}, function(shr, err) {
    if(err)
      res.send(err);

    response(res, "202", "", shr);
  });
}

function sqlShrinkList(res)
{
  Shrinker.find({}, function(shr, err) {
    if(err)
      res.send(err);

    response(res, "202", "", shr);
  });
}

function response(res, status, message, data) {
    res.json({ status: status, message: message, data: data });
}
