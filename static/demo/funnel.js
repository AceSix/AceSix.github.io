/*
 * @FilePath: \FDD-visual\app\base\static\assets\demo\funnel.js
 * @Author: Ziang Liu
 * @Date: 2020-12-14 14:03:39
 * @LastEditors: Ziang Liu
 * @LastEditTime: 2020-12-14 15:28:48
 * @Copyright (C) 2020 SJTU. All rights reserved.
 */
function getSumfor(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) { sum += arr[i]; }
    return sum;
}


function funnel_data(captions, data) {
    var default_colors = ["#244880", "#36606a", "#497955", "#5b9240", "#6eab2a", "#80c415"];
    var data_points = [];
    var data_sum = getSumfor(data)
    for (var i = 0; i < data.length; i++) {
        data_points.push({
            caption: captions[i],
            clr: default_colors[i],
            clrtxt: "#ffffff",
            count: data[i],
            filter_id: 3669 + i,
            order: "1",
            percent: data[i] * 100 / data_sum,
            short_caption: captions[i]
        })
    }
    return data_points;
}

var chart_style = {
    draw3d: false,
    is_pyramid: false,
    labels: 3,
    type: 40,
    length: 0,
};

function draw_funnel(content_id, data_points) {

    var chartdim_3d_depth = chart_style.draw3d ? { "depth3D": 30 } : {};
    var chartdim_3d_angle = chart_style.draw3d ? { "angle": 75 } : {};
    var chartdim_is_pyramid = chart_style.is_pyramid ? { "rotate": true } : {};

    var chart_labels = chart_style.labels ? chart_style.labels : 1;

    var prop_legend = { "labelsEnabled": (chart_labels === 1) || (chart_labels === 3) };


    var charte;
    if (chart_style.draw3d) {
        var charte = am4core.create(content_id, am4charts.SlicedChart);
        var series = charte.series.push(new am4charts.PyramidSeries3D());
        pieSeries.depth3D = 30;
        pieSeries.angle = 30;
    } else {
        var charte = am4core.create(content_id, am4charts.SlicedChart);
        var series = charte.series.push(new am4charts.PyramidSeries());
    }
    if (!chart_style.is_pyramid) {
        series.topWidth = am4core.percent(100);
        series.bottomWidth = am4core.percent(0);
    } else {
        series.topWidth = am4core.percent(0);
        series.bottomWidth = am4core.percent(100);
    }
    charte.fontSize = 12;
    charte.data = data_points;
    // charte.legend = new am4charts.Legend();

    series.colors.step = 2;
    series.dataFields.value = "percent";
    series.dataFields.category = "short_caption";
    series.dataFields.color = 'clr';
    series.dataFields.order = 'order';
    series.alignLabels = true;
    // series.labelsContainer.paddingLeft = 15;
    // series.labelsContainer.width = 200;
    series.valueIs = "order";
    series.slices.template.adapter.add("fill", (fill, target) => {
        return am4core.color(target.dataItem.color);
    });
    // charte.legend.itemContainers.template.clickable = false;
    // charte.legend.itemContainers.template.focusable = false;
    // charte.legend.itemContainers.template.cursorOverStyle = am4core.MouseCursorStyle.default;
    // charte.legend.labels.template.html = `<span '> {caption}</span><span > &nbsp;&nbsp;&nbsp;&nbsp; {count}</span>`;

    // charte.exporting.menu = new am4core.ExportMenu();
    // charte.events.on("ready", function(ev) {
    //     charte.exporting.getImage("jpg").then(function(img) {
    //         var image = new Image();
    //         console.log(img);
    //         image.src = img;
    //         image.onLoad = function() {
    //             console.log("image on load");
    //             document.getElementById("image" + content_id).appendChild(image);
    //         }
    //     });
    // });
    return charte;
}