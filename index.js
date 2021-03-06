var express = require('express');
var Faker = require('Faker');
var app = express();

app.get('/', function(req, res) {
  res.send('Server index');
});
app.get('/board/:id', function(req, res) {
    var board = {
        id:  Number(req.params.id)
    };
    return board;
});

app.get('/brands', function(req, res) {
  var output = [];
  var item = {};
  for (var i = 0; i < 10; i++) {
    item = {
      id: "0-" + Faker.Helpers.randomNumber(999999),
      name: Faker.Company.companyName(),
      image: 'placeholder/placeholder_brand.png',
      series: []
    };
    for (var j = 0; j < Faker.Helpers.randomNumber(100) % 10 + 5; j++) {
        item.series.push({
            id: "1-" + Faker.Helpers.randomNumber(999999),
            name: Faker.Name.lastName(),
            image: 'placeholder/placeholder_series.png'
        });
    }
    output.push(item);
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
    var item = {
      id: "5-" + Faker.Helpers.randomNumber(999999),
      name: Faker.Name.lastName(),
      image: 'placeholder/placeholder_category.png',
      subject: []
    };
    for (var j = 0; j < Faker.Helpers.randomNumber(100) % 10 + 5; j++) {
        item.subject.push({
            id: "6-" + Faker.Helpers.randomNumber(999999),
            name: Faker.Name.lastName(),
        });
    }
    output.push(item);    
  }
  var body = JSON.stringify(output);

  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  res.end(body);
});

app.get('/products/:id?/:brand?/:category?', function(req, res) {
  var category = Number(req.params.category);
  var brand = Number(req.params.brand);
  var id = Number(req.params.id);
  var item = {};
  
  var output = [];
  for (var i = 0; i < Faker.Helpers.randomNumber(100) + 20; i++) {
      item = {
      id: "9-" + Faker.Helpers.randomNumber(999999),
      category_id: "5" + Faker.Helpers.randomNumber(999999),
      brand_id: "0" + Faker.Helpers.randomNumber(999999),
      name: Faker.Name.lastName(),
      description_short: Faker.Lorem.sentence(),
      description_long: Faker.Lorem.sentences(),
      image: 'placeholder/placeholder_product.png'
    };
    if (id && !isNaN(id)) {
        item.id = id;
    }
    if (brand && !isNaN(brand)) {
        item.brand_id = brand;
    }
    if (category && !isNaN(category)) {
        item.category_id = category;
    }
    output.push(item);
  }
  var body = JSON.stringify(output);

  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  res.end(body);
});

app.get('/backgrounds', function(req, res) {
  var output = [];
  var item = {};
  for (var i = 0; i < 10; i++) {
    item = {
      id: "3-" + Faker.Helpers.randomNumber(999999),
      name: Faker.Company.companyName(),
      image: 'bg.jpg'
    };
    output.push(item);
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