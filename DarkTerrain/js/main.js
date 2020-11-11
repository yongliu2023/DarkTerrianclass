//function to start the Leaflet map
function createMap(){

    //Variables for attribution box on the map
    var mbAttr = '<a href="http://openstreetmap.org">OpenStreetMap</a> |' +' <a href="http://mapbox.com">Mapbox</a>'; 
    
    //Variables for stroing your Mapbox API Token
    var apitoken = 'pk.eyJ1IjoieW9uZ2xpdSIsImEiOiJja2hkbWh0cWkwODh6MnFucmZ4b2U2d3UyIn0.CJKzoL5k89KcMQUwfBaoZw' //Enter your API Token - go to 'https://www.mapbox.com/install/' to yours */
    
    //URL used for Standard MaxBox Styles
    var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}'; //URL used for Stanard MaxBox Styles
    
    //URL used for Custom MapBox Style
    var mbStyleUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={token}'; //URL used for Custom MapBox Styles
    
    
    //For Custome basemaps - Replace your username and StyleID
    var darkTerrain = L.tileLayer(mbStyleUrl, {id: 'yongliu/ckhduvuk702kq1aqm62tj9p8t', token: apitoken,  attribution: mbAttr});
    
    var gray  = L.tileLayer(mbUrl, {id: 'mapbox.light', token: apitoken, attribution: mbAttr});
    
    var dark  = L.tileLayer(mbUrl, {id: 'mapbox.dark', token: apitoken,  attribution: mbAttr});
    
    var outdoors = L.tileLayer(mbUrl, {id: 'mapbox.outdoors', token: apitoken,  attribution: mbAttr});
    
    //create the map*/
    var map = L.map('map', {
        center: [31.00, -5],//Coordinated to center the map
        zoom: 6, //zoom level
        layers:darkTerrain //default base
    });
    
    //create the basemap control layer*/
    var baseLayers = {
	    "Outdoors": outdoors,
        "Gray": gray,
		"Dark": dark,
        "Dark Terrain": darkTerrain
    };
    
    L.control.layers(baseLayers).addTo(map);
};

//calling the funcation
$(document).ready(createMap);