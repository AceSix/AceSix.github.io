type = ['primary', 'info', 'success', 'warning', 'danger'];

demo = {
    initPickColor: function() {
        $('.pick-class-label').click(function() {
            var new_class = $(this).attr('new-class');
            var old_class = $('#display-buttons').attr('data-class');
            var display_div = $('#display-buttons');
            if (display_div.length) {
                var display_buttons = display_div.find('.btn');
                display_buttons.removeClass(old_class);
                display_buttons.addClass(new_class);
                display_div.attr('data-class', new_class);
            }
        });
    },

    initDashboardPageCharts: function() {

        var data1 = line_data("Chart Demo 1", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], [
            [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630],
            [542, 780, 430, 530, 530, 453, 386, 234, 168, 410, 900, 230]
        ], colors.purple.full)
        var chart1 = draw_line(data1, "chartLinePurple", gradientChartOptionsConfigurationWithTooltipPurple, colors.purple.gradient)

        var data2 = line_data("Chart Demo 2", [1, 2, 3, 4, 5, 6, 7], [
            [324, 480, 45, 550, 834, 124, 321]
        ], colors.blue.full)
        var chart2 = draw_line(data2, "chartLineBlue", gradientChartOptionsConfigurationWithTooltipBlue, colors.blue.gradient)

        var data3 = line_data("Chart Demo 3", [1, 2, 3, 4, 5, 6, 7], [
            [817, 248, 483, 513, 128, 245, 127]
        ], colors.green.full)
        var chart3 = draw_line(data3, "chartLineGreen", gradientChartOptionsConfigurationWithTooltipGreen, colors.green.gradient)

        var data4 = bar_data("Chart Demo 4-1", [1, 2, 3, 4, 5, 6], [248, 534, 154, 642, 156, 345], '#1f8ea1')
        var chart4 = draw_bar(data4, "chartBig", gradientBarChartConfiguration, colors.blue.gradient)
        $("#0").click(function() {
            chart4.config.data.datasets[0].label = "Chart Demo 4-1";
            chart4.config.data.datasets[0].borderColor = '#1f8ea1';
            chart4.config.data.datasets[0].data = [248, 534, 154, 642, 156, 345];
            chart4.config.data.labels = [1, 2, 3, 4, 5, 6];
            chart4.update();
        });
        $("#1").click(function() {
            chart4.config.data.datasets[0].label = "Chart Demo 4-2";
            chart4.config.data.datasets[0].borderColor = '#1f8ef1';
            chart4.config.data.datasets[0].data = [566, 222, 134, 245, 315, 421];
            chart4.config.data.labels = [1, 2, 3, 4, 5, 6];
            chart4.update();
        });

        var data5 = radar_data("Chart Demo 5", [1, 2, 3, 4, 5], [2, 8, 3, 5, 9], colors.blue.full)
        var chart5 = draw_radar(data5, "chartRadarBlue", gradientRadarChartConfiguration, colors.blue.gradient)

        var data6 = pie_data("Chart Demo 6", ['blue', 'purple', 'green'], [2, 8, 5], colors.blue.full)
        var chart6 = draw_pie(data6, "chartPieBlue", gradientPieChartConfiguration)

        var data7 = pie_data("Chart Demo 7", ['blue', 'purple', 'green'], [2, 8, 5], colors.blue.full)
        var chart7 = draw_polar(data7, "chartPolarBlue", gradientRadarChartConfiguration)

        var data8 = bubble_data("Chart Demo 8", [1, 2, 3, 4], [
            [22, 54, 10],
            [54, 20, 15],
            [76, 51, 12],
            [34, 90, 20]
        ], colors.blue.full)
        var chart8 = draw_bubble(data8, "chartBubbleBlue", gradientChartOptionsConfigurationWithTooltipBlue, colors.blue.gradient)

        var data9 = scatter_data("Chart Demo 9", [1, 2, 3, 4], [
            [22, 54],
            [54, 20],
            [76, 51],
            [34, 90]
        ], colors.blue.full)
        var chart9 = draw_scatter(data9, "chartScatterBlue", gradientChartOptionsConfigurationWithTooltipBlue, colors.blue.gradient)

        var chart10 = draw_specific(mix_data, "chartMix", gradientBarChartConfiguration, [colors.blue.gradient, colors.green.gradient, colors.purple.gradient])

        var data11 = [
            { "index": 0.3, "value": 17436920, "fill": "#231F20", "label": "WebMd Health" },
            { "index": 0.4, "value": 10884799, "fill": "#494551", "label": "Livestrong.com" },
            { "index": 0.5, "value": 10257432, "fill": "#564965", "label": "Everyday Health" },
            { "index": 0.6, "value": 6110024, "fill": "#574270", "label": "About.com" },
            { "index": 0.7, "value": 3895612, "fill": "#4D2D77", "label": "Drugs.com" },
            { "index": 0.8, "value": 3414585, "fill": "#684E88", "label": "Alliance Health" },
            { "index": 0.9, "value": 3099372, "fill": "#846F9D", "label": "Lifescript.com" },
            { "index": 1, "value": 2897520, "fill": "#A494B7", "label": "Health.com" },
            { "index": 1.1, "value": 2772679, "fill": "#CBC3D6", "label": "Health Grades" },
            { "index": 1.2, "value": 2636126, "fill": "#F1EFF4", "label": "Healthline" }
        ];
        var chart11 = draw_circlebar(data11, "#circleBar-web-chart", "#circleBar-web-values", "#circleBar-web-labels")

        var data12 = funnel_data(['Do a lot more', 'Do a bit more', 'Do the same', 'Do a bit less', 'Do a lot less', "Don't know"], [9, 2, 5, 2, 1, 1])
        var chart12 = draw_funnel('chart_triangle', data12);

        var data13 = [
            [150, 280, 62, 34, 45, 190, 230, 220, 170, 150, 73, 54, 240, 214, 210, 240, 214, 210, 92],
            [],
            []
        ];
        var chart13 = draw_array('array', data13);

        var chart14 = make_light('light');
    },

    initChillerPageCharts: function(ref_pred_time, ref_pred_data, query_time, chilled_wtr_exit_data, chilled_wtr_entry_data, evap_sat_ref_temp_data, cond_sat_ref_temp_data, out_air_temp_data) {

        data1 = line_data("Refrigerant Load (%)", ref_pred_time, [ref_pred_data], colors.purple.full)
        chart1 = draw_line(data1, "RefLoadChart", gradientChartOptionsConfigurationWithTooltipPurple, colors.purple.gradient)

        data2 = line_data("Chilled Water Temperature", query_time, [chilled_wtr_exit_data], colors.blue.full)
        chart2 = draw_line(data2, "ChilledWaterChart", gradientChartOptionsConfigurationWithTooltipBlueBig, colors.blue.gradient)
        $("#0").click(function() {
            chart2.config.data.datasets[0].label = "Chilled Water Exit Temperature";
            chart2.config.data.datasets[0].borderColor = colors.blue.full;
            chart2.config.data.datasets[0].data = chilled_wtr_exit_data;
            chart2.config.data.labels = query_time;
            chart2.update();
        });
        $("#1").click(function() {
            chart2.config.data.datasets[0].label = "Chilled Water Entry Temperature";
            chart2.config.data.datasets[0].borderColor = colors.blue.full;
            chart2.config.data.datasets[0].data = chilled_wtr_entry_data;
            chart2.config.data.labels = query_time;
            chart2.update();
        });

        data3 = line_data("Temperature", query_time, [evap_sat_ref_temp_data], colors.blue.full)
        chart3 = draw_line(data3, "EvapRefPoolTempChart", gradientChartOptionsConfigurationWithTooltipBlue, colors.blue.gradient)

        data4 = line_data("Temperature", query_time, [cond_sat_ref_temp_data], colors.blue.full)
        chart4 = draw_line(data4, "CondSatRefTempChart", gradientChartOptionsConfigurationWithTooltipBlue, colors.blue.gradient)

        data5 = line_data("Mass Flow", query_time, [out_air_temp_data], colors.green.full)
        chart5 = draw_line(data5, "CompMassFlowChart", gradientChartOptionsConfigurationWithTooltipGreen, colors.green.gradient)

    },

    showUpdateNotification: function(from, align) {
        color = "#1d8cf8";
        loading();

        $.notify({
            icon: "tim-icons icon-refresh-01",
            message: "<b>Your Data is Being Processed by AI</b> </br>Please Wait..."

        }, {
            type: type[color],
            timer: 8000,
            placement: {
                from: from,
                align: align
            }
        });
    },

    initRealTimeChart: function(selected_chiller_name, sensor_data) {
        var selected_data_key_1 = 'Evaporator Leaving Water Temperature'
        var selected_data_key_2 = 'Evaporator Entering Water Temperature'
        var event_key = selected_chiller_name + "@" + selected_data_key_1 + "&" + selected_data_key_2
        var chart_time = []
        var chart_value_1 = []
        var chart_value_2 = []

        for (i = 0; i < sensor_data.length; i++) {
            chart_time.push(sensor_data[i]['Time'])
            chart_value_1.push(sensor_data[i][selected_data_key_1])
            chart_value_2.push(sensor_data[i][selected_data_key_2])
        }

        data = double_line_data(selected_data_key_1, selected_data_key_2, chart_time, chart_value_1, chart_value_2, colors.purple.full, colors.blue.full)
        RTlineChart = draw_double_line(data, "real_time_graph", gradientRTChartOptionsConfiguration, [colors.purple.gradient, colors.blue.gradient])

        function setupEventSource(event_key) {
            sse = new EventSource("/main_chart_data/" + event_key);

            sse.onmessage = function(event) {
                const new_data = JSON.parse(event.data);
                if (new_data.time != null) {
                    if (RTlineChart.config.data.labels.length === 15) {
                        RTlineChart.config.data.labels.shift();
                        RTlineChart.config.data.datasets[0].data.shift();
                        RTlineChart.config.data.datasets[1].data.shift();
                    }
                    RTlineChart.config.data.labels.push(new_data.time);
                    RTlineChart.config.data.datasets[0].data.push(new_data.value_1);
                    RTlineChart.config.data.datasets[1].data.push(new_data.value_2);
                    RTlineChart.update();

                    null_data_counter = 0;
                } else {
                    null_data_counter += 1;
                }
                if (null_data_counter == 5) {
                    sse.close();
                }
            }
        }

        function sse_close(event) {
            sse.close();
        }

        var checked_items = [];
        checked_items.push(selected_data_key_1);
        checked_items.push(selected_data_key_2);

        var sse;
        var null_data_counter = 0;

        setupEventSource(event_key);

        var chb_inputs = document.getElementsByTagName('input');

        for (var i = 0, len = chb_inputs.length; i < len; i++) {
            if (chb_inputs[i].type === 'checkbox') {
                chb_inputs[i].onclick = function(event) {
                    sse_close();

                    var form = this.form
                    var new_data_key = $(this).attr('value');

                    if (this.checked) {

                        checked_items.push(new_data_key);

                        var new_chart_value_1 = []
                        var new_chart_value_2 = []

                        for (j = 0; j < sensor_data.length; j++) {
                            new_chart_value_1.push(sensor_data[j][checked_items[checked_items.length - 2]])
                            new_chart_value_2.push(sensor_data[j][checked_items[checked_items.length - 1]])
                        }

                        RTlineChart.config.data.datasets[0].label = checked_items[checked_items.length - 2];
                        RTlineChart.config.data.datasets[1].label = checked_items[checked_items.length - 1];
                        RTlineChart.config.data.datasets[0].data = new_chart_value_1;
                        RTlineChart.config.data.datasets[1].data = new_chart_value_2;
                        selected_data_key_1 = checked_items[checked_items.length - 2]
                        selected_data_key_2 = checked_items[checked_items.length - 1]
                        event_key = selected_chiller_name + "@" + selected_data_key_1 + "&" + selected_data_key_2
                        RTlineChart.update();

                    } else {

                        checked_items.splice(checked_items.indexOf(new_data_key), 1);

                        var new_chart_value_1 = []
                        var new_chart_value_2 = []

                        for (j = 0; j < sensor_data.length; j++) {
                            new_chart_value_1.push(sensor_data[j][checked_items[checked_items.length - 2]])
                            new_chart_value_2.push(sensor_data[j][checked_items[checked_items.length - 1]])
                        }

                        RTlineChart.config.data.datasets[0].label = checked_items[checked_items.length - 2];
                        RTlineChart.config.data.datasets[1].label = checked_items[checked_items.length - 1];
                        RTlineChart.config.data.datasets[0].data = new_chart_value_1;
                        RTlineChart.config.data.datasets[1].data = new_chart_value_2;
                        selected_data_key_1 = checked_items[checked_items.length - 2]
                        selected_data_key_2 = checked_items[checked_items.length - 1]
                        event_key = selected_chiller_name + "@" + selected_data_key_1 + "&" + selected_data_key_2
                        RTlineChart.update();
                    }

                    setupEventSource(event_key);

                }
            }
        }

    },

    showQueryNotification: function(from, align) {
        color = "#1d8cf8";
        loading();

        $.notify({
            icon: "tim-icons icon-refresh-01",
            message: "<b>Loading Chiller Data</b> </br>Please Wait..."

        }, {
            type: type[color],
            timer: 8000,
            placement: {
                from: from,
                align: align
            }
        });
    }

};