// General_____________________________________________
var checkButton = document.getElementById('checkButton');
var solveButton = document.getElementById('solveButton');
var startButton = document.getElementById('startButton');
var startPanel = document.getElementById('startPanel');

function hideHelp() {
    var x = document.getElementById("help-text");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function resetAll() {
    window.location.reload();
    // window.location.href = "";
    return false;
}

function check() {
    console.log('check initiated');
}

function solve() {
    console.log('solve initiated');
}

function start() {
    startPanel.style.display = 'none';
    startButton.style.display = 'none';
}
// Bespoke functions_____________________________________
"use strict";
var data = {
    "Argentina": ['yes', 1],
    "Bolivia": ['yes', 1],
    "Chile": ['yes', 1],
    "Colombia": ['yes', 1],
    "Costa Rica": ['yes', 1],
    "Cuba": ['yes', 1],
    "Dominica": ['yes', 1],
    "Dominican Republic": ['yes', 1],
    "Ecuador": ['yes', 1],
    "El Salvador": ['yes', 1],
    "Guatemala": ['yes', 1],
    "Honduras": ['yes', 1],
    "Mexico": ['yes', 1],
    "Nicaragua": ['yes', 1],
    "Panama": ['yes', 1],
    "Paraguay": ['yes', 1],
    "Peru": ['yes', 1],
    "Spain": ['yes', 1],
    "Uruguay": ['yes', 1],
    "Venezuela": ['yes', 1],
    "Puerto Rico": ['yes', 1]
};
var map;

// AmCharts.theme = AmCharts.themes.light;
// add all your code to this method, as this will ensure that page is loaded
AmCharts.ready(function() {
    // create AmMap object  
    map = new AmCharts.AmMap();
    map.fontFamily = "Roboto";
    map.language = "es";
    map.dataProvider = {
        mapVar: AmCharts.maps.worldLow,
        getAreasFromMap: true
    };
    map.balloon.maxWidth = 500;
  
  map.zoomControl = {top:40};

    map.areasSettings = {
        autoZoom: true,
        rollOverBrightness: 30,
        selectedBrightness: 20,
        color: "#999999",
        outlineColor: "skyblue",
        outlineThickness: 2,
        balloonText: "<span style='font-size:24px'><table><tr><td><b>[[title]]:</b></td>[[customData]]"
    };

    map.addListener("init", processData);
    map.write("chartdiv");
});

function processData() {
    for (var countryTitle in data) {
        var countryData = data[countryTitle];
        var areas = map.dataProvider.areas;
        var area = null;
        var color;

        for (var a = 0; a < areas.length; a++) {
            if (countryTitle == areas[a].title) {
                area = areas[a];
            }
        }
        if (area) {
            var value = countryData[1];

            if(value <= 0){
                color = '#ffffff'
            } else if(value >= 0){
                color = '#ffff00'
            }

            area.value = value;
            area.color = color;
            area.customData = "<td><b>" + countryData[0] + "</b></span></td></tr></table></span>";
        }
    }
    map.validateNow();
    map.legend.invalidateSize();
}