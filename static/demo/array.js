/*
 * @FilePath: \FDD-visual\app\base\static\assets\demo\array.js
 * @Author: Ziang Liu
 * @Date: 2020-12-15 20:28:02
 * @LastEditors: Ziang Liu
 * @LastEditTime: 2020-12-15 21:30:06
 * @Copyright (C) 2020 SJTU. All rights reserved.
 */

function drawGrid(id, width, height, colun, line) {
    var ctx = document.getElementById(id).getContext('2d');
    ctx.fillRect(0, 0, width, height);
    ctx.save();
    for (var c = 1; c < (width / colun); c++) {
        ctx.beginPath();
        ctx.moveTo(c * colun, 0);
        ctx.lineTo(c * colun, height);
        ctx.stroke();
    }
    for (var l = 1; l < (height / line); l++) {
        ctx.beginPath();
        ctx.moveTo(0, l * line);
        ctx.lineTo(width, l * line);
        ctx.stroke();
    }
}

function drawingLines(id, width, points, c) {
    var ctx = document.getElementById(id).getContext('2d');
    ctx.beginPath();
    ctx.globalAlpha = c * 0.04;
    ctx.moveTo(((c - 1) * width + 10), points[c - 1]);
    ctx.lineTo(c * width + 10, points[c]);
    ctx.lineTo(c * width + 10, 300);
    ctx.lineTo(((c - 1) * width + 10), 300);
    ctx.lineTo(((c - 1) * width + 10), points[c - 1]);
    ctx.fill();
    ctx.beginPath();
    ctx.globalAlpha = 1;
    ctx.moveTo(((c - 1) * width + 10), points[c - 1]);
    ctx.lineTo(c * width + 10, points[c]);
    ctx.stroke();
    ctx.beginPath();
    ctx.save();
    ctx.fillStyle = ctx.strokeStyle;
    ctx.arc(c * width + 10, points[c], 3, 0, Math.PI * 2)
    ctx.fill();
    ctx.restore();
}



function draw_array(id, data) {
    var ctx = document.getElementById(id).getContext('2d');
    var valores = data[0];
    var pontos = data[1];
    var diferenca = data[2];

    //////////////// setupBackground
    ctx.fillStyle = "#1d1f20";
    ctx.strokeStyle = "#333";
    ctx.save();
    drawGrid(id, 500, 300, 10, 10);

    larg = 480 / (valores.length - 1);
    for (var c = 0; c < valores.length; c++) {
        if (isNaN(pontos[c])) {
            pontos[c] = 300;
        }
        ctx.lineWidth = 1.4;

        diferenca[c] = -valores[c];
        pontos[c] += diferenca[c];

        //////////////// setupGraphic
        ctx.strokeStyle = "#0ff";
        ctx.fillStyle = "#0ff";
        drawingLines(id, larg, pontos, c);
    }
    return ctx;
}