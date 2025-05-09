$(document).ready(function () {
    // 初始化 ECharts 图表实例
    var myChart4 = echarts.init(document.getElementById('chart4'));

    // 配置图表的选项
    var option = {
        radar: {
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: 'transparent',
                    borderRadius: 0,
                    padding: -15,
                    fontSize: 20
                },
                position: 'outside'
            },
            indicator: [
                { name: '南红玛瑙', max: 10 },
                { name: '黄龙玉', max: 10 },
                { name: '墨翠', max: 10 },
                { name: '琥珀', max: 10 }
            ],
            radius: '70%'
        },
        series: [
            {
                name: '原料属性',
                type: 'radar',
                data: [
                    {
                        value: [8, 9, 5, 8],
                        name: '南红玛瑙'
                    },
                    {
                        value: [7, 8, 6, 7],
                        name: '黄龙玉'
                    },
                    {
                        value: [6.5, 9, 8, 9],
                        name: '墨翠'
                    },
                    {
                        value: [2, 7, 9, 6],
                        name: '琥珀'
                    }
                ],
                lineStyle: {
                    width: 2,
                    color: '#333',
                    type: 'solid'
                },
                 // 数据点的大小
                symbolSize: 3
            }
        ]
    };

    // 应用配置选项
    myChart4.setOption(option);

    // 动态调整图表大小
    $(window).resize(function () {
        myChart4.resize();
    });

    // 初始化时调整图表大小，确保与容器一致
    myChart4.resize({
        width: document.getElementById('chart4').clientWidth,
        height: document.getElementById('chart4').clientHeight
    });
});