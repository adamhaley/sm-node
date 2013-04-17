var express = require('express');
var app = express();

var trip = require('./routes/trip');


app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  /*
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 */
 });

app.get('/',trip.getTripInfo);

app.get('/addPunch', trip.addPunch);
app.get('/addSticker', trip.addSticker);
app.get('/addPhoto', trip.addPhoto);
app.get('/startTrip', trip.startTrip);
app.get('/endTrip', trip.endTrip);
app.get('/startDrive', trip.startDrive);
app.get('/endDrive', trip.endDrive);
app.get('/getTripInfo', trip.getTripInfo);
app.get('/pauseTrip', trip.pauseTrip);
app.get('/resumeTrip', trip.resumeTrip);
app.get('/addWeather', trip.addWeather);

var port = 8080;

app.listen(port);
console.log('Listening on port ' + port);
