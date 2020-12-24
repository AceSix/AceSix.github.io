function bar_data(label_tag, label_array, data_array, color_style) {
    var data = {
        labels: label_array,
        datasets: [{
            label: label_tag,
            fill: true,
            borderColor: color_style,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: data_array,
        }]
    };
    return data;
}

function draw_bar(data, EleID, chart_option, gradient) {
    var ctx = document.getElementById(EleID).getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, gradient[0]);
    gradientStroke.addColorStop(0.2, gradient[1]);
    gradientStroke.addColorStop(0, gradient[2]);

    data.datasets[0].backgroundColor = gradientStroke
    data.datasets[0].hoverBackgroundColor = gradientStroke
    config = {
        type: 'bar',
        responsive: true,
        legend: {
            display: false
        },
        data: data,
        options: chart_option
    };
    var myChart = new Chart(ctx, config);
    return myChart;
}