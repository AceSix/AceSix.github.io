function pie_data(label_tag, label_array, data_array, color_style) {
    var data = {
        labels: label_array,
        datasets: [{
            label: label_tag,
            fill: true,
            data: data_array,
        }]
    };
    return data;
}

function draw_pie(data, EleID, chart_option) {
    var ctx = document.getElementById(EleID).getContext("2d");

    var gradientStroke1 = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke1.addColorStop(1, gradient_colors[0][0]);
    gradientStroke1.addColorStop(0.2, gradient_colors[0][1]);
    gradientStroke1.addColorStop(0, gradient_colors[0][2]);

    var gradientStroke2 = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke2.addColorStop(1, gradient_colors[1][0]);
    gradientStroke2.addColorStop(0.2, gradient_colors[1][1]);
    gradientStroke2.addColorStop(0, gradient_colors[1][2]);

    var gradientStroke3 = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke3.addColorStop(1, gradient_colors[2][0]);
    gradientStroke3.addColorStop(0.2, gradient_colors[2][1]);
    gradientStroke3.addColorStop(0, gradient_colors[2][2]);

    data.datasets[0].backgroundColor = [gradientStroke1, gradientStroke2, gradientStroke3]
    config = {
        type: 'doughnut',
        data: data,
        options: chart_option
    };
    var myChart = new Chart(ctx, config);
    return myChart;
}

function draw_polar(data, EleID, chart_option) {
    var ctx = document.getElementById(EleID).getContext("2d");

    var gradientStroke1 = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke1.addColorStop(1, gradient_colors[0][0]);
    gradientStroke1.addColorStop(0.2, gradient_colors[0][1]);
    gradientStroke1.addColorStop(0, gradient_colors[0][2]);

    var gradientStroke2 = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke2.addColorStop(1, gradient_colors[1][0]);
    gradientStroke2.addColorStop(0.2, gradient_colors[1][1]);
    gradientStroke2.addColorStop(0, gradient_colors[1][2]);

    var gradientStroke3 = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke3.addColorStop(1, gradient_colors[2][0]);
    gradientStroke3.addColorStop(0.2, gradient_colors[2][1]);
    gradientStroke3.addColorStop(0, gradient_colors[2][2]);

    data.datasets[0].backgroundColor = [gradientStroke1, gradientStroke2, gradientStroke3]
    config = {
        type: 'polarArea',
        data: data,
        options: chart_option
    };
    var myChart = new Chart(ctx, config);
    return myChart;
}