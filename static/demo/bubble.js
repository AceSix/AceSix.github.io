function bubble_data(label_tag, label_array, data_array, color_style) {
    var data = {
        datasets: [{
            label: label_array,
            data: [],
            borderColor: color_style,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: color_style,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: color_style,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
        }]
    };
    for (var i = 0; i < data_array.length; i++) {
        tmp = {
            x: data_array[i][0],
            y: data_array[i][1],
            r: data_array[i][2]
        };
        data.datasets[0].data.push(tmp);
    }
    return data;
}

function draw_bubble(data, EleID, chart_option, gradient) {
    var ctx = document.getElementById(EleID).getContext("2d");
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, gradient[0]);
    gradientStroke.addColorStop(0.2, gradient[1]);
    gradientStroke.addColorStop(0, gradient[2]);

    data.datasets[0].backgroundColor = gradientStroke
    config = {
        type: 'bubble',
        data: data,
        options: chart_option
    };
    var myChart = new Chart(ctx, config);
    return myChart;
}