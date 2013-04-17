var gm = require('googlemaps');


var trip = {punches:[],stickers:[],statuses:[],drives:[{name:'No Drive'}]};


exports.locations = require('./locations.json');
exports.locationCounter = 0;
exports.locationList = [];

var initiateDrive = function(){
	console.log(trip);
	var locations = exports.locations.locations;
	var time = Math.round(new Date().getTime() / 1000);
	console.log('Starting drive at ' + time);

	var drive = {
		 userId:"ag9zfnNtaWxlYWdlLXRlc3RyDAsSBFVzZXIYhcULDA"
         , tripId:"ag9zfnNtaWxlYWdlLXRlc3RyDAsSBFRyaXAYqZ8NDA"
         , vehicleId:"ag9zfnNtaWxlYWdlLXRlc3RyGQsSBFVzZXIYhcULDAsSB1ZlaGljbGUYAQw"
         , distance:4602
         , duration:5104
         , startLat:locations[exports.locationCounter].lat
         , startLon:locations[exports.locationCounter].lon
         , endLat:36.821070000000006
         , endLon:-76.21934
         , polyLine:"urv_FzqepMZCPBND~@\\}@lECTF@jDlA|Al@ZJDShBoJXyAhBkJv@uDLiAPeGDoARkANk@f@mApIkOdHaMt@qAnB}DdCsEw@uDQkAEgADuAFy@b@wCdGdBcAnCwAxDe@jAo@lAwChF{ChGiH`M}GzLeAjBSf@a@`BKx@Gr@KbGKnAKf@mA`GQ`AkBfJg@rCe@lCwBu@iAa@uAg@|@mE_A]OEIAUAMB"
         , rating:-1
         , state:"INPROGRESS"
         , startTime:time
         , endTime:""
         , smileagePoints:0
         , avgSpeed:0.0
         , startTemp:0.0
         , endTemp:0.0
         // , id:"ag9zfnNtaWxlYWdlLXRlc3RyDQsSBURyaXZlGJjsCww"
         , id: Math.random().toString(36).substring(2,5)
         , createdTime:1364164051
         , enabled:false
		 , startTime: time
		 , punchesEarned: []
		 , stickersEarned: []
		 , photos: []
	}

	trip.drives.push(drive);
	return drive;
}

var onTheMove = function(){
	for(i=0;i<trip.drives.length;i++){

		var drive = trip.drives[i];
		if (drive.endTime === "") {
			return true;
		}
	}
	return false;
}


exports.startTrip = function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	// if(!Object.keys(trip).length){

		exports.locationCounter = 0;
		trip = {
			picasaAlbums: [{
			albumId: "5853182186924731233",
			visible: true,
			photos: [{
					photoId: "5853495611452528370",
					lat: 36.8210411072,
					lon: -76.219619751,
					takeTime: 1364164051,
					createdTime: 1365521497
				}, {
					photoId: "5862614260456210562",
					lat: 36.8211212158,
					lon: -76.219543457,
					takeTime: 1364169155,
					createdTime: 1365521497
				}],
				createdTime: 1365521497
			}]
			, suggestions: []
			, statuses: []
			, punches: []
			, stickers: []
			, photos:[]
			, visible: true
			, name: "Trippy"
			, state: 'INPROGRESS'
			, visibility: "PUBLIC"
			, distance: 4602
			, duration: 5104
			, startLat: 36.8210411072
			, startLon: -76.219619751
			, endLat: 36.8211212158
			, endLon: -76.219543457
			, complete: true
			, smileagePoints: 605
			, punchCount: 0
			, statusCount: 0
			, avgSpeed: 0.9
			, startTemp: 10.0
			, currentTemp: 10.0
			, endTemp: 9.0
			, startWeather: 5
			, currentWeather: 5
			, endWeather: 5
			, rating: 1
			, createdTime:  Math.round(new Date().getTime() / 1000)
			, enabled: false
			, drives: [] 
			, user:{
      			 gplusAccount: "smileagevwtest@gmail.com"
      			, firstName : "Nate"
      			, lastName: "Witte"
      			, stickers:[

      			]
      			, id: "ag9zfnNtaWxlYWdlLXRlc3RyDAsSBFVzZXIYhcULDA"
      			, createdTime:1364319096
      			, enabled: false
   			}
   			, passengers: [{
				gplusAccount: "nwitteatgrow@gmail.com",
				firstName: "Nathan",
				lastName: "Witte",
				apid: "65f689d2-c0cb-4bc6-b202-e324582b1a42",
				smileageTally: -1,
				driveTally: -1,
				tripTally: -1,
				punchTally: -1,
				id: "ag9zfnNtaWxlYWdlLXRlc3RyDAsSBFVzZXIYrJ0ODA",
				createdTime: 1364919771
			}]
   			, vehicle:{
      			macAddress: "Nexus 4 Nwitte"
     			, make: "Volkswagen"
      			, model: "Jetta"
      			, color: "Black"
      			, nickname: ""
      			, year: 2013
      			, id:"ag9zfnNtaWxlYWdlLXRlc3RyGQsSBFVzZXIYidgFDAsSB1ZlaGljbGUYAQw"
      			, createdTime: 1363988100
      			, enabled:true
   			}
		}

		res.send(initiateDrive());
	
}

exports.addPunch = function(req,res){
	res.header("Access-Control-Allow-Origin", "*");

	var location = exports.locations.locations[exports.locationCounter];

	var punch = {
		createdTime: Math.round(new Date().getTime() / 1000)
		, car: 'Metallic Grey VW Jetta'
		, driver: 'Adam Haley'
		, type: 'punch'
		, accuracy: 20
		, lat: location.lat
		, lon: location.lon
	}
	var driveIndex = trip.drives.length - 1;
	trip.drives[driveIndex].punchesEarned.push(punch);
	res.send(trip);
}

exports.addSticker = function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var location = exports.locations.locations[exports.locationCounter];
	var sticker = {
		name: "Sticker 1 Name",
		description: "Sticker 1 Description",
		explanation: "Sticker 1 Explanation",
		type: "DRIVE", // or PUNCH
		createdTime: Math.round(new Date().getTime() / 1000)
	}
	var driveIndex = trip.drives.length - 1;
	trip.drives[driveIndex].stickers.push(sticker);
	res.send(trip);
}

exports.addStatus = function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var location = exports.locations.locations[exports.locationCounter];
	var status = {
		timestamp: Math.round(new Date().getTime() / 1000)
		, message: 'Lorem Ipsum I am a status!' 
		, type: 'status'
		, lat: location.lat
		, lon: location.lon
	}
	trip.statuses.push(status);
	res.send(trip);
}

exports.addPhoto = function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	var location = exports.locations.locations[exports.locationCounter];
	var photo = {
		createdTime: Math.round(new Date().getTime() / 1000)
		, url: '' 
		, type: 'photo'
		, lat: location.lat
		, lon: location.lon
	}
	var driveIndex = trip.drives.length - 1;

	trip.drives[driveIndex].photos.push(photo);
	// trip.photos.push(photo);
	res.send(trip);

}

exports.endTrip = function(req,res){
	res.header("Access-Control-Allow-Origin", "*");

	// just end the last drive for now
	for(i=0;i<trip.drives.length;i++){
		var time = Math.round(new Date().getTime() / 1000);
		var drive = trip.drives[i];
		if (drive.endTime === "") {
			drive.endTime = time;
		}
		console.log('Ending drive at' + time);
		trip.state = "COMPLETE";

	}
	res.send(trip);
}

exports.pauseTrip = function(req,res){
	trip.state = "PAUSED";
}

exports.resumeTrip = function(req,res){
	trip.state = "INPROGRESS";
}

exports.addWeather = function(req,res){
	trip.currentTemp += 1;
}


exports.startDrive = function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	if(trip.state=="PAUSED"){
		console.log('Starting a new drive.');

		trip.state = "INPROGRESS";
		res.send(initiateDrive());
	}else{
		console.log('trip state is not Paused. cannot start drive. Is a drive currently in progress?');
	}
}

exports.endDrive = function(req,res){
	res.header("Access-Control-Allow-Origin", "*");


	var driveIndex = trip.drives.length - 1;


	var time = Math.round(new Date().getTime() / 1000);

	var ct = exports.locationCounter;

	trip.drives[driveIndex].endTime = time;
	trip.drives[driveIndex].endLat = exports.locations.locations[ct].lat;
	trip.drives[driveIndex].endLon = exports.locations.locations[ct].lon;
	trip.drives[driveIndex].state = "COMPLETE";


	trip.state = "PAUSED";

	res.send(trip);

}

exports.getTripInfo = function(req,res){
	res.header("Access-Control-Allow-Origin", "*");


	var location = exports.locations.locations[exports.locationCounter];
	var tripSoFar = [];

	if(exports.locationCounter < exports.locations.locations.length){
		tripSoFar = exports.locations.locations.slice(0,exports.locationCounter+1);
	}

	var stringLatLong = "";
	tripSoFar.forEach(function(loc){
		
		stringLatLong += loc.lat + "," + loc.lon + "|";
		// console.log(stringLatLong);
	});
	stringLatLong = stringLatLong.replace(/\|$/,"");


	var polyline = gm.createEncodedPolyline(stringLatLong);

	// var latLng = new gm.LatLng(location.lat,location.lon);
	var driveIndex = trip.drives.length - 1;
	trip.drives[driveIndex].polyLine = polyline;

	console.log('driveIndex is ' + driveIndex);
	console.log('polyline is ' + polyline);


	if(!Object.keys(trip).length){
		res.send(exports.startTrip());
	}else{
		res.send(trip);
	}
	if((exports.locationCounter < exports.locations.locations.length) && (trip.state =='INPROGRESS')){
		exports.locationCounter++;
	}
	
}