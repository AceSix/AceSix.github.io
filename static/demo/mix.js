// fully diy

var mix_data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    datasets: [{
            label: 'bar',
            data: [237, 734, 422, 123, 576, 254, 845, 534, 644],
            fill: true,
            borderColor: '#1f8ef1',
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: '#1f8ef1',
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: '#1f8ef1',
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
        },
        {
            label: 'line',
            data: [426, 388, 312, 546, 213, 125, 632, 745, 233],
            fill: true,
            borderColor: '#00d6b4',
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: '#00d6b4',
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: '#00d6b4',
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            type: 'line'
        },
        {
            label: 'line',
            data: [735, 473, 743, 234, 435, 234, 745, 545, 234],
            fill: true,
            borderColor: '#d048b6',
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: '#d048b6',
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: '#d048b6',
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            type: 'line'
        }
    ]
};

function draw_specific(data, EleID, chart_option, [gradient1, gradient2, gradient3]) {
    var ctx = document.getElementById(EleID).getContext("2d");
    var gradientStroke1 = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke1.addColorStop(1, gradient1[0]);
    gradientStroke1.addColorStop(0.2, gradient1[1]);
    gradientStroke1.addColorStop(0, gradient1[2]);

    var gradientStroke2 = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke2.addColorStop(1, gradient2[0]);
    gradientStroke2.addColorStop(0.2, gradient2[1]);
    gradientStroke2.addColorStop(0, gradient2[2]);

    var gradientStroke3 = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke3.addColorStop(1, gradient3[0]);
    gradientStroke3.addColorStop(0.2, gradient3[1]);
    gradientStroke3.addColorStop(0, gradient3[2]);


    data.datasets[0].backgroundColor = gradientStroke1
    data.datasets[1].backgroundColor = gradientStroke2
    data.datasets[2].backgroundColor = gradientStroke3
    config = {
        type: 'bar',
        data: data,
        options: chart_option
    };
    var myChart = new Chart(ctx, config);
    return myChart;
}