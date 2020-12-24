/*
 * @FilePath: \FDD-visual\app\base\static\assets\demo\circlebar.js
 * @Author: Ziang Liu
 * @Date: 2020-12-14 11:50:46
 * @LastEditors: Ziang Liu
 * @LastEditTime: 2020-12-14 14:06:45
 * @Copyright (C) 2020 SJTU. All rights reserved.
 */



function draw_circlebar(data, target, values, labels) {
    var w = 362,
        h = 362,
        size = data[0].value * 1.15,
        radius = 200,
        sectorWidth = .1,
        radScale = 25,
        sectorScale = 1.45,
        target = d3.select(target),
        valueText = d3.select(values),
        labelText = d3.select(labels);


    var arc = d3.svg.arc()
        .innerRadius(function(d, i) { return (d.index / sectorScale) * radius + radScale; })
        .outerRadius(function(d, i) { return ((d.index / sectorScale) + (sectorWidth / sectorScale)) * radius + radScale; })
        .startAngle(Math.PI)
        .endAngle(function(d) { return Math.PI + (d.value / size) * 2 * Math.PI; });

    var path = target.selectAll("path")
        .data(data);

    path.enter().append("svg:path")
        .attr("fill", function(d, i) { return d.fill })
        .attr("stroke", "#D1D3D4")
        .transition()
        .ease("elastic")
        .duration(1000)
        .delay(function(d, i) { return i * 100 })
        .attrTween("d", arcTween);

    valueText.selectAll("tspan").data(data).enter()
        .append("tspan")
        .attr({
            x: 50,
            y: function(d, i) { return i * 14 },
            "text-anchor": "end"
        })
        .text(function(d, i) { return data[i].value });

    labelText.selectAll("tspan").data(data).enter()
        .append("tspan")
        .attr({
            x: 0,
            y: function(d, i) { return i * 14 }
        })
        .text(function(d, i) { return data[i].label });

    function arcTween(b) {
        var i = d3.interpolate({ value: 0 }, b);
        return function(t) {
            return arc(i(t));
        };
    }

    d3.select("#circleBar-web-icon")
        .transition()
        .delay(500)
        .duration(500)
        .attr("opacity", "1");
    d3.select("#circleBar-web-text")
        .transition()
        .delay(750)
        .duration(500)
        .attr("opacity", "1");

    d3.select("#circleBar-web-clipLabels")
        .transition()
        .delay(600)
        .duration(1250)
        .attr("height", "150");

    return path;
}

// Animation Queue