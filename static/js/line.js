var chart;

function draw_line(chartData) {
    chart = AmCharts.makeChart("AMlineChart", {
        type: "serial",
        theme: "dark",
        dataDateFormat: "YYYY-MM-DD",
        dataProvider: chartData,

        addClassNames: true,
        startDuration: 1,
        color: "#FFFFFF",
        marginLeft: 0,

        categoryField: "date",
        categoryAxis: {
            parseDates: true,
            minPeriod: "DD",
            autoGridCount: false,
            gridCount: 50,
            gridAlpha: 0.1,
            gridColor: "#FFFFFF",
            axisColor: "#555555",
            dateFormats: [{
                period: 'DD',
                format: 'DD'
            }, {
                period: 'WW',
                format: 'MMM DD'
            }, {
                period: 'MM',
                format: 'MMM'
            }, {
                period: 'YYYY',
                format: 'YYYY'
            }]
        },

        valueAxes: [{
            id: "a1",
            title: "fullness",
            gridAlpha: 0,
            axisAlpha: 0
        }, {
            id: "a2",
            position: "right",
            gridAlpha: 0,
            axisAlpha: 0,
            labelsEnabled: false
        }, {
            id: "a3",
            title: "temp",
            position: "right",
            gridAlpha: 0,
            axisAlpha: 0
        }],
        graphs: [{
            id: "g1",
            valueField: "fullness",
            title: "fullness",
            type: "column",
            fillAlphas: 0.9,
            valueAxis: "a1",
            balloonText: "[[value]] %",
            legendValueText: "[[value]] %",
            legendPeriodValueText: "",
            lineColor: "#263138",
            alphaField: "alpha",
        }, {
            id: "g2",
            valueField: "coldin",
            classNameField: "bulletClass",
            title: "coldwaterin",
            type: "line",
            valueAxis: "a3",
            lineColor: "#786c56",
            lineThickness: 1,
            legendValueText: "[[value]] F",
            // descriptionField: "townName",
            bullet: "round",
            bulletSizeField: 5,
            bulletBorderColor: "#786c56",
            bulletBorderAlpha: 1,
            bulletBorderThickness: 2,
            bulletColor: "#000000",
            labelText: "[[coldin]] F",
            labelPosition: "right",
            balloonText: "coldin:[[value]] F",
            showBalloon: true,
            animationPlayed: true,
        }, {
            id: "g3",
            valueField: "coldout",
            title: "coldwaterout",
            type: "line",
            valueAxis: "a3",
            lineColor: "#ff5755",
            balloonText: "[[value]] F",
            lineThickness: 1,
            legendValueText: "[[value]] F",
            bullet: "square",
            bulletBorderColor: "#ff5755",
            bulletBorderThickness: 1,
            bulletBorderAlpha: 1,
            labelText: "[[coldout]] F",
            labelPosition: "right",
            dashLengthField: "dashLength",
            animationPlayed: true
        }],

        chartCursor: {
            zoomable: false,
            categoryBalloonDateFormat: "DD",
            cursorAlpha: 0,
            valueBalloonsEnabled: false
        },
        legend: {
            bulletType: "round",
            equalWidths: false,
            valueWidth: 120,
            useGraphSettings: true,
            color: "#FFFFFF"
        }
    });
}


var chartData = [{
    "date": "2019-10-01",
    "fullness": 89,
    "coldin": 32,
    "coldout": 52
}, {
    "date": "2019-11-02",
    "fullness": 88,
    "coldin": 43,
    "coldout": 64
}, {
    "date": "2019-12-03",
    "fullness": 45,
    "coldin": 23,
    "coldout": 34
}, {
    "date": "2020-01-04",
    "fullness": 86,
    "coldin": 32,
    "coldout": 65
}, {
    "date": "2020-02-04",
    "fullness": 84,
    "coldin": 35,
    "coldout": 62
}, {
    "date": "2020-03-04",
    "fullness": 82,
    "coldin": 28,
    "coldout": 63
}, {
    "date": "2020-04-04",
    "fullness": 82,
    "coldin": 29,
    "coldout": 61
}, {
    "date": "2020-05-04",
    "fullness": 80,
    "coldin": 32,
    "coldout": 67
}, {
    "date": "2020-06-04",
    "fullness": 79,
    "coldin": 28,
    "coldout": 65
}, {
    "date": "2020-07-04",
    "fullness": 76,
    "coldin": 30,
    "coldout": 62
}]

draw_line(chartData)