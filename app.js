//Express JS components
var express = require("express");
var bodyParser = require('body-parser');
var weather1 = require('weather-js');
const uuid = require('uuid');

var app = express();
app.set('port', process.env.PORT || 10022);


app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

app.get('/weather', function (req, res) {
    console.log("Inside weather");
    var response = {};
response.uid = "urn:uuid:" + uuid.v4();
response.updateDate = new Date();
response.titleText = "Update For Chennai Weather";


  weather1.find({search: 'Chennai', degreeType: 'C'}, function(err, result) {
    if(err) {
      response.mainText = "hello from weather. we are facing technical issue right now. please try again sometime";
      response.redirectionUrl = "http://jyothimoily.xyz";
      res.json(response);

      console.log(err);}
    else{

    var day0weathermin = result[0].forecast[0].low;
    var day0weathermax = result[0].forecast[0].high;
    var day0weatherforecast = result[0].forecast[0].skytextday;
    console.log("Todays Min weather is " + day0weathermin);
    console.log("Todays max weather is " + day0weathermax);
    console.log("Todays forecast is " + day0weatherforecast);


    var day1weathermin = result[0].forecast[1].low;
    var day1weathermax = result[0].forecast[1].high;
    var day1weatherforecast = result[0].forecast[1].skytextday;
    console.log("Todays Min weather is " + day1weathermin);
    console.log("Todays max weather is " + day1weathermax);
    console.log("Todays forecast is " + day1weatherforecast);


    var day2weathermin = result[0].forecast[2].low;
    var day2weathermax = result[0].forecast[2].high;
    var day2weatherforecast = result[0].forecast[2].skytextday;
    console.log("Todays Min weather is " + day2weathermin);
    console.log("Todays max weather is " + day2weathermax);
    console.log("Todays forecast is " + day2weatherforecast);


    var day3weathermin = result[0].forecast[3].low;
    var day3weathermax = result[0].forecast[3].high;
    var day3weatherforecast = result[0].forecast[3].skytextday;
    console.log("Todays Min weather is " + day3weathermin);
    console.log("Todays max weather is " + day3weathermax);
    console.log("Todays forecast is " + day3weatherforecast);


    var day4weathermin = result[0].forecast[4].low;
    var day4weathermax = result[0].forecast[4].high;
    var day4weatherforecast = result[0].forecast[4].skytextday;
    console.log("Todays Min weather is " + day4weathermin);
    console.log("Todays max weather is " + day4weathermax);
    console.log("Todays forecast is " + day4weatherforecast);


    response.redirectionUrl = "http://jyothimoily.xyz";
    response.mainText = "Hello from weather.Todays Minimum weather in Chennai is expected to be " + 
    day0weathermin + " and the Maximum weather is" + day0weathermax +".The weather will fee like" + day0weatherforecast + 
    ".Tomorrows Minimum weather in Chennai is expected to be " +
     day1weathermin + " and the Maximum weather is " + day1weathermax + " .The weather will feel like  " + day1weatherforecast +
     ".Day after Tomorrows Minimum weather in Chennai is expected to be "
      +day2weathermin + " and the Maximum weather is " + day2weathermax + " .The weather will feel like  " + day2weatherforecast +
     ".Day after day ater Tomorrows Minimum weather in Chennai is expected to be " +
     day3weathermin + " and the Maximum weather is " + day3weathermax + " .The weather will feel like  " + day3weatherforecast +
     ".Day after day ater Tomorrows Minimum weather in Chennai is expected to be " +
     day4weathermin + " and the Maximum weather is " + day4weathermax + " .The weather will feel like  " + day4weatherforecast
   res.json(response);
    }
    
});
});

app.listen(app.get('port')); 