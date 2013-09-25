var express = require('express');
var Faker = require('Faker');
var app = express();

app.get('/', function(req, res) {
  res.send('Server index');
});


app.get('/brands', function(req, res) {
  var output = [];
  for (var i = 0; i < Faker.Helpers.randomNumber(100) % 10 + 10; i++) {
    output.push({
      id: "0" + Faker.Helpers.randomNumber(999999),
      title: Faker.Company.companyName(),
      image: 'http://placehold.it/100x100'
    });
  }
  var body = JSON.stringify(output);

  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  res.end(body);
});

app.get('/categories', function(req, res) {
  var output = [];
  for (var i = 0; i < Faker.Helpers.randomNumber(100) % 5 + 5; i++) {
    output.push({
      id: "5" + Faker.Helpers.randomNumber(999999),
      title: Faker.Name.lastName(),
      image: 'http://placehold.it/100x100'
    });
  }
  var body = JSON.stringify(output);

  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  res.end(body);
});


var port = process.env.PORT || 3000;
app.listen(port);

console.log("Express server listening on port %d", port);