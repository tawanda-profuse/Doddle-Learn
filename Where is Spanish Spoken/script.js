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
    "Argentina": ['Sí', 1],
    "Bolivia": ['Sí', 1],
    "Chile": ['Sí', 1],
    "Colombia": ['Sí', 1],
    "Costa Rica": ['Sí', 1],
    "Cuba": ['Sí', 1],
    "Dominica": ['Sí', 1],
    "Dominican Republic": ['Sí', 1],
    "Ecuador": ['Sí', 1],
    "El Salvador": ['Sí', 1],
    "Guatemala": ['Sí', 1],
    "Honduras": ['Sí', 1],
    "Mexico": ['Sí', 1],
    "Nicaragua": ['Sí', 1],
    "Panama": ['Sí', 1],
    "Paraguay": ['Sí', 1],
    "Peru": ['Sí', 1],
    "Spain": ['Sí', 1],
    "Uruguay": ['Sí', 1],
    "Venezuela": ['Sí', 1],
    "Puerto Rico": ['Sí', 1]
};
var map;

// add all your code to this method, as this will ensure that page is loaded
AmCharts.ready(function () {
    // create AmMap object  
    map = new AmCharts.AmMap();
    map.fontFamily = "Roboto";
    map.language = "es";
    map.dataProvider = {
        mapVar: AmCharts.maps.worldLow,
        getAreasFromMap: true
    };
    map.balloon.maxWidth = 500;

    map.zoomControl = { top: 40 };

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

            if (value <= 0) {
                color = '#ffffff'
            } else if (value >= 0) {
                color = '#ffff00'
            }

            area.value = value;
            area.color = color;
            area.customData = "<td><b>" + countryData[0] + "</b></span></td></tr></tr></table></span>";
        }
    }
    map.validateNow();
    map.legend.invalidateSize();
}