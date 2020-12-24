function line_data(label_tag, label_array, data_array, color_style) {
    var datasets = []
    for (var i = 0; i < data_array.length; i++) {
        datasets.push({
            label: label_tag,
            fill: true,
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
            data: data_array[i],
        })
    }

    var data = {
        labels: label_array,
        datasets: datasets
    };
    return data;
}

function draw_line(data, EleID, chart_option, gradient) {
    var ctx = document.getElementById(EleID).getContext("2d");
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, gradient[0]);
    gradientStroke.addColorStop(0.2, gradient[1]);
    gradientStroke.addColorStop(0, gradient[2]);

    data.datasets[0].backgroundColor = gradientStroke
    config = {
        type: 'line',
        data: data,
        options: chart_option
    };
    var myChart = new Chart(ctx, config);
    return myChart;
}

function double_line_data(label_tag_1, label_tag_2, label_array, data_array_1, data_array_2, color_style_1, color_style_2) {
    var data = {
        labels: label_array,
        datasets: [{
                label: label_tag_1,
                data: data_array_1,
                fill: true,
                borderColor: color_style_1,
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: color_style_1,
                pointBorderColor: 'rgba(255,255,255,0)',
                pointHoverBackgroundColor: color_style_1,
                pointBorderWidth: 20,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 15,
                pointRadius: 4,
            },
            {
                label: label_tag_2,
                data: data_array_2,
                fill: true,
                borderColor: color_style_2,
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: color_style_2,
                pointBorderColor: 'rgba(255,255,255,0)',
                pointHoverBackgroundColor: color_style_2,
                pointBorderWidth: 20,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 15,
                pointRadius: 4,
            }
        ]
    };
    return data;
}

function draw_double_line(data, EleID, chart_option, [gradient1, gradient2]) {
    var ctx = document.getElementById(EleID).getContext("2d");

    var gradientStroke1 = ctx.createLinearGradient(0, 300, 0, 75);
    gradientStroke1.addColorStop(1, gradient1[0]);
    gradientStroke1.addColorStop(0.2, gradient1[1]);
    gradientStroke1.addColorStop(0, gradient1[2]);

    var gradientStroke2 = ctx.createLinearGradient(0, 300, 0, 75);
    gradientStroke2.addColorStop(1, gradient2[0]);
    gradientStroke2.addColorStop(0.2, gradient2[1]);
    gradientStroke2.addColorStop(0, gradient2[2]);

    data.datasets[0].backgroundColor = gradientStroke1
    data.datasets[1].backgroundColor = gradientStroke2
    config = {
        type: 'line',
        data: data,
        options: chart_option
    };
    var myChart = new Chart(ctx, config);
    return myChart;
}