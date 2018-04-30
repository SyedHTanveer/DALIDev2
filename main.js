var mymap = L.map('map').setView([37, -95],2.5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		id: 'mapbox.streets'
	}).addTo(mymap);

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file , true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

var facemarkers = L.layerGroup();

var thisIcon = L.Icon.extend({
    options: {
        className: 'circle',
        iconSize: [45, 45]
    }
});


//load and process members
readTextFile("http://mappy.dali.dartmouth.edu/members.json", function(response){
  // Parse JSON string into object
  var members = JSON.parse(response);
  Object.keys(members).forEach(function(member) {
    addMarker(members[member]);
  });
});


// function to add markers
var addMarker = function(options) {

  var icon = new thisIcon(
          {iconUrl: 'http://mappy.dali.dartmouth.edu/' + options.iconUrl
          });

  var marker = L.marker(options.lat_long, {
          icon: icon,
          url: options.url,
          name: options.name,
          tags: options.terms_on
});
	//console.log("this is working");
  facemarkers.addLayer(marker.bindPopup(options.name + ": " + options.message).addTo(mymap));
};

facemarkers.eachLayer(function(marker) {

        marker.on('mouseover', function (e) {
		console.log("helloworld");
		e.openPopup();
	});

        marker.on('mouseout', function (e) {
		console.log("helloworld");
		e.closePopup();
	});

        marker.on('click', function (e) {
		console.log("helloworld");
                window.open(e.target.options.url, e.target.options.name);
  });
});
