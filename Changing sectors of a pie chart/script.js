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
(function ($) {
    // Credit goes to: https://github.com/jamesalvarez/draggable-piechart
    $(window).ready(function () {
        // Pie Chart
        var colorOptions = ['yellowgreen', 'hotpink', 'orange', 'turquoise', 'purple']; // Optional colors
        // Assign an array to the variable proportions:
        var proportions = colorOptions.map(function (d, i) {
            return {
                proportion: 72,
                format: {
                    color: d,
                    label: ''
                }
            }
        });

        // Object properties for the pie chart:
        var setup3 = {
            canvas: document.getElementById('piechart3'),
            radius: 0.9,
            collapsing: true,
            proportions: proportions,
            drawSegment: drawSegmentOutlineOnly,
            onchange: onPieChartChange
        };

        var pie3 = new DraggablePiechart(setup3); // This creates an instance of the pie chart

        // Aesthetic design of the pie chart:
        function drawSegmentOutlineOnly(context, piechart, centerX, centerY, radius, startingAngle, arcSize, format, collapsed) {

            if (collapsed) { return; }

            // Draw segment
            context.save();
            var endingAngle = startingAngle + arcSize;
            context.beginPath();
            context.moveTo(centerX, centerY);
            context.arc(centerX, centerY, radius, startingAngle, endingAngle, false);
            context.closePath();

            context.fillStyle = format.color;
            context.strokeStyle = 'navy';
            context.lineWidth = '5';
            context.fill();
            context.stroke();
            context.restore();

            // Draw label on top
            context.save();
            context.translate(centerX, centerY);
            context.rotate(startingAngle);

            var fontSize = Math.floor(context.canvas.height / 10);
            var dx = 150;
            var dy = centerY / 4;

            context.textAlign = "right";
            context.font = fontSize + "pt Roboto";
            context.fillText(format.label, dx, dy);
            context.restore();
        }

        // Function below manipulates the numbers in the table:
        function onPieChartChange(piechart) {

            var table = $('#proportions-table');
            var percentages = piechart.getAllSliceSizePercentages(); // get all percentages
            var labelsRow = $('<tr/>').append(proportions.map(function (v, i) { return '<th>' + v.format.label + '</th>' }));
            var proportionsRow = $('<tr/>').append(proportions.map(function (v, i) {
                let degrees = ((percentages[i] / 100) * 360).toFixed(0);
                var plus = $('<div/>').attr('id', 'plus-' + colorOptions[i]).addClass('adjust-button').data({ i: i, d: -0.2 }).html('&#43;').mousedown(adjustClick);
                var minus = $('<div/>').attr('id', 'plus-' + colorOptions[i]).addClass('adjust-button').data({ i: i, d: 0.2 }).html('&#8722;').mousedown(adjustClick);

                return $('<td/>').append('<var>' + degrees + '°</var>').append(minus).append(plus);

            }));

            table.html('').append(labelsRow).append(proportionsRow);
            function adjustClick() {
                var i = $(this).data('i');
                var d = $(this).data('d');

                piechart.moveAngle(i, (d * 0.1));
            }

        }
    });

})(jQuery);