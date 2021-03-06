// tableau des différents points
var tableauMarqueurs = [
	{lat:43.6, lng: 2.25}, // Castres
	{lat:43.604482, lng: 1.443962}, // Toulouse
	{lat:44.018056, lng: 1.355833}, // Montauban
	{lat:45.85, lng: 1.25} // Limoges
];

var maCarte;
var zoneMarqueurs = new google.maps.LatLngBounds();

// function qui initialise la carte
function initialisation(){
	var i;
	var centre = new google.maps.LatLng(43.604482,1.443962);
	var optionsCarte = {
		zoom: 8,
		center: centre,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	maCarte = new google.maps.Map(document.getElementById("map"),optionsCarte);

	for(i=0;i<tableauMarqueurs.length;i++){
		ajouteMarqueur(i);
	}
	maCarte.fitBounds(zoneMarqueurs);
}

// fonction qui ajoute les points sur la carte
function ajouteMarqueur(index){
	var latitude = tableauMarqueurs[index]["lat"];
	var longitude = tableauMarqueurs[index]["lng"];
	var optionsMarqueur = {
		map: maCarte,
		position: new google.maps.LatLng(latitude, longitude)
	}
	var marqueur = new google.maps.Marker(optionsMarqueur);
	zoneMarqueurs.extend(marqueur.getPosition());
}

google.maps.event.addDomListener(window,'load',initialisation);
