$(document).ready(function () {
    // 初始化 ECharts 图表实例
    var myChart1 = echarts.init(document.getElementById('chart1'));

    // 配置图表的选项
    var option = {
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '75%',
                data: [
                    { value: 500, name: '原料珍贵' },
                    { value: 500, name: '工艺独特' },
                    { value: 500, name: '品质优秀' },
                    { value: 500, name: '文化厚重' }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 0,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                label: {
                    // 显示标签
                    show: true,
                    position: 'inside',
                    // 显示数据项的名称
                    formatter: '{b}',
                    fontSize: '15',
                    color: '#fff'
                },
                labelLine: {
                    // 不显示标签线
                    show: false
                }
            }
        ]
    };

    // 应用配置选项
    myChart1.setOption(option);

    // 动态调整图表大小
    $(window).resize(function () {
        myChart1.resize();
    });

    // 初始化时调整图表大小，确保与容器一致
    myChart1.resize({
        width: document.getElementById('chart1').clientWidth,
        height: document.getElementById('chart1').clientHeight
    });
});