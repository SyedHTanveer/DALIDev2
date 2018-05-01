var mymap = L.map('map').setView([37, -95],3);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		id: 'mapbox.streets',
		maxZoom: 15,
		minZoom: 3
	}).addTo(mymap);

var faceImage = L.layerGroup();

var thisIcon = L.Icon.extend({
    options: {
        className: 'circle',
        iconSize: [45, 45]
    }
});

var filterButton = L.control.tagFilterButton({
    data: ['17W', '17S', 'clear'],
    icon: '<img src="filter.png" style="width:100%;height:100%;">',
    filterOnEveryClick: 'true'
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

readTextFile("http://mappy.dali.dartmouth.edu/members.json", function(response){
  var members = JSON.parse(response);
  Object.keys(members).forEach(function(member) {
    addMarker(members[member]);
  });
});


var addMarker = function(member) {

  var icon = new thisIcon(
          {iconUrl: 'http://mappy.dali.dartmouth.edu/' + member.iconUrl
          });

  var marker = L.marker(member.lat_long, {
          icon: icon,
          url: member.url,
          name: member.name,
          tags: member.terms_on
});

	//console.log("this is working");
  faceImage.addLayer(marker.bindPopup(member.name + ": " + member.message + ". </br><center> Terms on: " + member.terms_on + "</center").addTo(mymap).on('mouseover', function(e) {
	  marker.openPopup();
  }).on('mouseout', function(e) {
	  marker.closePopup();
  }).on('click dblclick', function(e) {
	  window.open(member.url, member.name);
    })
 )
};
