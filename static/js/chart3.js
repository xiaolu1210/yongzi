$(document).ready(function () {
    // 初始化 ECharts 图表实例
    var myChart3 = echarts.init(document.getElementById('chart3'));

    // 配置图表的选项
    var option3 = {
        series: [
            {
                type: 'graph',
                layout: 'none',
                symbolSize: 30,
                roam: true,
                label: {
                    show: true,
                    position: 'inside',
                    fontSize: 15,
                    color: '#fff'
                },
                data: [
                    { name: '原材料精选', x: 100, y: 100 },
                    { name: '破碎、研磨', x: 100, y: 300 },
                    { name: '原料配方', x: 100, y: 500 },
                    { name: '高温熔炼', x: 300, y: 500 },
                    { name: '手工滴制', x: 300, y: 300 },
                    { name: '退火冷却', x: 300, y: 100 },
                    { name: '哑光打磨', x: 600, y: 100 },
                    { name: '漂洗晾晒分拣', x: 600, y: 300 },
                    { name: '包装成品', x: 600, y: 500 }
                ],
                links: [
                    { source: '原材料精选', target: '破碎、研磨' },
                    { source: '破碎、研磨', target: '原料配方' },
                    { source: '原料配方', target: '高温熔炼' },
                    { source: '高温熔炼', target: '手工滴制' },
                    { source: '手工滴制', target: '退火冷却' },
                    { source: '退火冷却', target: '哑光打磨' },
                    { source: '哑光打磨', target: '漂洗晾晒分拣' },
                    { source: '漂洗晾晒分拣', target: '包装成品' }
                ],
                lineStyle: {
                    // 线条
                    width: 2,
                    color: '#666',
                },
                itemStyle: {
                    // 节点边框颜色
                    borderColor: '#333',
                    borderWidth: 1,
                    borderType: 'solid',
                    fill: '#999'
                },
                rippleEffect: {
                    // 涟漪的填充方式
                    brushType: 'stroke',
                    scale: 2.5,
                    color: '#000'
                },
                // 开启动画
                animation: true,
                // 动画持续时间
                animationDuration: 1500,
                // 动画缓动效果
                animationEasing: 'elasticOut'
            }
        ]
    };

    // 应用配置选项
    myChart3.setOption(option3);
});