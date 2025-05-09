$(document).ready(function () {
    var myChart2 = echarts.init(document.getElementById('chart2'));

    var eventData = [
        { name: '1512年\n李德章在窑湾村炼制出永子', side: 'left' },
        { name: '1620年\n《滇略》记载永子“莹润细腻，甲于天下”', side: 'right' },
        { name: '1625年\n《滇志》称永子为保山第一物产和贡品', side: 'left' },
        { name: '1639年\n徐霞客游记中高度评价永子', side: 'right' },
        { name: '1680年\n刘昆的永子被叛兵掠走，《南中杂说》详述其珍贵', side: 'left' },
        { name: '1694年\n《滇游记》称永子“光润如玉琢”', side: 'right' },
        { name: '1736年\n《云南通志》列永子为“质坚色润”之珍宝', side: 'left' },
        { name: '1790年\n《大清一统志》称“永昌之棋，甲于天下”', side: 'right' },
        { name: '1842年\n《嘉庆重修一统志》细述永子质量分级标准', side: 'left' },
        { name: '1885年\n《永昌府志》描述永子的滴制法', side: 'right' }
    ];

    var seriesData = [];
    var linksData = [];

    eventData.forEach((item, index) => {
        var isLeft = item.side === 'left';
        // 黑白交替
        var isBlack = index % 2 === 0;

        seriesData.push({
            name: item.name,
            x: isLeft ? 600 : 200,
            y: 100 + index * 30,
            symbolSize: 60,
            itemStyle: {
                color: isBlack
                    ? new echarts.graphic.RadialGradient(0.4, 0.4, 0.8, [
                        { offset: 0, color: '#555' },
                        { offset: 1, color: '#000' }
                      ])
                    : new echarts.graphic.RadialGradient(0.4, 0.4, 0.8, [
                        { offset: 0, color: '#fff' },
                        { offset: 1, color: '#ccc' }
                      ]),
                shadowBlur: 10,
                shadowColor: isBlack ? '#000' : '#aaa',
                shadowOffsetX: 0,
                shadowOffsetY: 0
            },
            label: {
                show: true,
                position: isLeft ? 'left' : 'right',
                fontSize: 25,
                align: isLeft ? 'right' : 'left',
                // 字体跟着棋子颜色变
                color: isBlack ? '#fff' : '#000',
                fontWeight: 'normal'
            }
        });
    });

    var option = {
        tooltip: {
            show: false
        },
        series: [
            {
                type: 'graph',
                layout: 'none',
                roam: false,
                data: seriesData,
                links: linksData,
                symbol: 'circle',
                label: {
                    fontSize: 8
                }
            },
        ],
        xAxis: {
            type: 'value',
            min: 0,
            max: 700,
            show: false
        },
        yAxis: {
            type: 'value',
            min: -100,
            max: 600,
            show: false
        }
    };

    myChart2.setOption(option);

    $(window).resize(function () {
        myChart2.resize();
    });

    myChart2.resize({
        width: document.getElementById('chart2').clientWidth,
        height: document.getElementById('chart2').clientHeight
    });
});
