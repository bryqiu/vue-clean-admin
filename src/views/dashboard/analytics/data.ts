import type { BoardProps } from './components';
import { echarts } from '@/plugins/echarts';

export const boardData: BoardProps[] = [
  {
    label: '总访问量',
    value: '1000000',
    icon: 'line-md:emoji-grin',
  },
  {
    label: '最高访问量',
    value: '99999',
    icon: 'line-md:telegram',
  },
  {
    label: '新增访问量',
    value: '9999',
    icon: 'line-md:account-add',
  },
  {
    label: '总用户量',
    value: '222',
    icon: 'line-md:account-small',
  },
];

interface ProjectAboutTYpe {
  tagName: string;
  text: string;
  link?: string;
}

export const projectAbout: ProjectAboutTYpe[] = [
  {
    tagName: '源码',
    text: 'Clean Admin项目开源了！(点我查看源码)',
    link: 'https://github.com/QFifteen/vue-clean-admin',
  },
  {
    tagName: '专栏',
    text: '《通俗易懂的中后台系统建设指南》(记录此项目开发历程)',
    link: 'https://github.com/QFifteen/Blog?tab=readme-ov-file#%E9%80%9A%E4%BF%97%E6%98%93%E6%87%82%E7%9A%84%E4%B8%AD%E5%90%8E%E5%8F%B0%E7%B3%BB%E7%BB%9F%E5%BB%BA%E8%AE%BE%E6%8C%87%E5%8D%97%E4%B8%93%E6%A0%8F',
  },
  // {
  //   tagName: '文档',
  //   text: 'Admin 配套文档上线了',
  //   link: 'URL_ADDRESS',
  // },
];

export const segmentedOptions = [
  {
    label: '全部',
    value: 'all',
  },
  {
    label: '本月',
    value: 'month',
  },
  {
    label: '本周',
    value: 'week',
  },
  {
    label: '本日',
    value: 'day',
  },
];

export const userVisitOption: echarts.EChartsCoreOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: '#333',
      },
    },
  },
  legend: {
    icon: 'rect',
    itemWidth: 14,
    itemHeight: 5,
    itemGap: 13,
    data: ['近6个月平均拜访次数'],
    right: 'center',
    textStyle: {
      fontSize: 12,
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: '#ccc',
        },
      },
      axisTick: {
        show: true,
      },
      axisLabel: {
        margin: 10,
        fontSize: 14,
        color: '#999',
      },
      data: ['2017-07', '2017-08', '2017-09', '2017-10', '2017-11', '2017-12'],
    },
  ],
  yAxis: [
    {
      type: 'value',
      name: '',
      axisTick: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: '#fff',
        },
      },
      axisLabel: {
        margin: 10,
        fontSize: 14,
        color: '#999',
      },
      splitLine: {
        lineStyle: {
          type: 'solid',
          color: '#ccc',
        },
      },
    },
  ],
  series: [
    {
      name: '近6个月平均拜访次数',
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 5,
      showSymbol: false,
      lineStyle: {
        width: 1,
      },
      areaStyle: {
        type: 'linear',
        color: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1,
          [
            {
              offset: 0,
              color: 'rgba(0, 136, 212, 0.2)',
            },
            {
              offset: 1,
              color: 'rgba(0, 136, 212, 0)',
            },
          ],
          false,
        ),
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 10,
      },
      itemStyle: {
        color: 'rgb(0,136,212)',
        borderColor: 'rgba(0,136,212,0.2)',
        borderWidth: 12,
      },
      data: [120, 110, 145, 122, 165, 150],
    },
  ],
};

const center1 = ['50%', '65%'];
const data1 = '2200';
const data2 = '1800';
const Dvalue = ((Number(data1) / Number(data2)) * 100).toFixed(2);

const startAngle = 180;
const endAngle = 0;
const min = 0;
const max = 150;
const radius = '85%';
const pointer = { show: false };
const axisLabel = {
  distance: -5,
  color: '#999',
  fontSize: 12,
  formatter(value: number) {
    return `${value}%`;
  },
};

const axisTick = {
  distance: -35,
  splitNumber: 5,
  length: 5,
  lineStyle: {
    color: '#999',
  },
};
const splitLine = {
  distance: -35,
  length: 6,
  lineStyle: {
    width: 3,
    color: '#999',
  },
};
const anchor = { show: false };

const axisLine = {
  lineStyle: {
    width: 30,
    color: [[1, '#f4f4f4']],
  },
};
const textStyle = {
  textAlign: 'center',
  fontSize: 16,
  lineHeight: 24,
  rich: {
    a: {
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: 24,
    },
  },
};

const title = {
  show: true,
  offsetCenter: [0, '60%'],
  fontSize: 18,
};
const detail = {
  valueAnimation: true,
  fontSize: 30,
  lineHeight: 30,
  color: '#106ae7',
  offsetCenter: [0, '-20%'],
  fontWeight: 'bold',
  formatter(value: number) {
    return `{a|占比} ` + `\n${value}{a|%}`;
  },
  rich: {
    a: {
      color: '#333',
      fontSize: 16,
      lineHeight: 30,
    },
  },
};
export const dashboardOption: echarts.EChartsCoreOption = {
  title: [
    {
      text: `当前值\n{a|${data1}} 吨`,
      left: '10%',
      top: '70%',
      textStyle,
    },
    {
      text: `目标值\n{a|${data2}} 吨`,
      right: '7%',
      top: '70%',
      textStyle,
    },
  ],
  series: [
    {
      type: 'gauge',
      startAngle,
      center: center1,
      endAngle,
      min,
      max,
      radius,
      splitNumber: 6,
      progress: {
        show: true,
        width: 30,
        itemStyle: {
          color: '#90ccff',
        },
      },
      pointer,
      axisLine,
      axisTick,
      splitLine,
      axisLabel,
      anchor,
      title,
      detail,
      data: [
        {
          value: Dvalue,
          name: '',
        },
      ],
    },
    {
      type: 'gauge',
      startAngle,
      center: center1,
      endAngle,
      min,
      max: 150,
      radius,
      splitNumber: 5,
      progress: {
        show: true,
        width: 15,
        itemStyle: {
          color: '#1492ff',
        },
      },
      pointer: { show: false },
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      axisLabel: { show: false },
      anchor: { show: false },
      title: { show: false },
      detail: { show: false },
      data: [
        {
          value: 100,
          name: '',
        },
      ],
    },
  ],
};

export const histogramOption: echarts.EChartsCoreOption = {
  backgroundColor: 'transparent',
  title: {
    //   text: `{a|年度毛利及增速图}`,
    textStyle: {
      rich: {
        a: {
          fontSize: 16,
          fontWeight: 600,
        },
      },
    },
    top: '3%',
    left: '2%',
  },
  legend: {
    show: false,
  },
  tooltip: {
    show: true,
    trigger: 'item',
  },
  grid: {
    top: '10%',
    left: '9%',
    right: '8%',
    bottom: '12%',
  },
  xAxis: [
    {
      type: 'category',
      data: ['2016年', '2017年', '2018年', '2019年', '2020年'],
      axisTick: {
        show: false, // 是否显示坐标轴轴线
      },
      axisLabel: {
        fontSize: 14,
        formatter(params: string) {
          let str = ''; // 最终拼接成的字符串
          const paramsLen = params.length; // 获取每项文字的个数
          const len = 5; // 每行能显示的字的个数（根据实际情况自己设置）
          const rowNumber = Math.ceil(paramsLen / len); // 换行的话，需要显示几行，向上取整
          if (paramsLen > len) {
            // 大于设定的len就换行，不大于就不变化
            for (let i = 0; i < rowNumber; i++) {
              let temp = ''; // 表示每一次截取的字符串
              const start = i * len; // 开始截取的位置
              const end = start + len; // 结束截取的位置
              if (i === rowNumber - 1) {
                // 最后一次不换行
                temp = params.substring(start, paramsLen);
              } else {
                // 每一次拼接字符串并换行
                temp = `${params.substring(start, end)}\n`;
              }
              str += temp; // 最终拼成的字符串
            }
          } else {
            // 给新的字符串赋值
            str = params;
          }
          return str; // 返回字符串
        },
      },
      splitLine: {
        show: false,
      },
      boundaryGap: true,
      axisLine: {
        // 坐标轴轴线相关设置。
        show: true,
        inside: false,
        lineStyle: {
          color: 'rgba(31, 134, 255, 1)',
          type: 'dashed',
        },
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      min: 0,
      max: 100,
      axisLabel: {
        // 坐标轴刻度标签的相关设置。
        show: true,
        color: 'rgba(31, 134, 255, 1)',
        fontSize: 14,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(133, 189, 254, 1)',
          type: 'dashed',
        },
      },
      show: true,
    },
  ],
  series: [
    {
      name: '',
      type: 'bar',
      barMaxWidth: 15,
      zlevel: 10,
      // barGap: '100%',
      data: [90, 60, 65, 70, 85],
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(31, 129, 255, 1)',
            },
            {
              offset: 1,
              color: 'rgba(31, 134, 255, 0)',
            },
          ],
        },
        borderRadius: [30, 30, 0, 0],
        label: {
          show: true, // 开启显示
          position: 'top', // 在上方显示
          textStyle: {
            // 数值样式
            color: 'rgba(31, 129, 255, 1)',
            fontSize: 12,
            fontWeight: 400,
          },
        },
      },
    },
  ],
};

export const pieChartsOption: echarts.EChartsCoreOption = {
  tooltip: {
    show: true,
  },
  legend: {
    top: 'bottom',
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '85%',
      center: ['50%', '50%'],
      tooltip: {
        formatter: '{b}: {d}%',
      },
      data: [
        { value: 235, name: '视频广告', itemStyle: { color: '#0C457A' } },
        { value: 274, name: '联盟广告', itemStyle: { color: '#0E4C86' } },
        { value: 310, name: '邮件营销', itemStyle: { color: '#115FA8' } },
        { value: 335, name: '直接访问', itemStyle: { color: '#1173CE' } },
        { value: 400, name: '搜索引擎', itemStyle: { color: '#1890FF' } },
      ],
      roseType: 'radius',
      label: {
        show: true,
      },
      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay() {
        return Math.random() * 200;
      },
    },
  ],
};
