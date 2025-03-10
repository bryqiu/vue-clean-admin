import { echarts } from '@/plugins/echarts';
import type { StatsCardProps } from './components';
import type { AccessLog, Bulletin, QuickNavItem } from './modules';
import dayjs from 'dayjs';

/**
 * 用户分析
 */
export const userVisitList: StatsCardProps[] = [
  {
    label: '总访问量(PV)',
    value: '2,845,920',
    icon: 'line-md:watch',
    trend: 'up',
    compareValue: '12',
    iconColor: '#0ea5e9',
    iconBackground: '#f0f9ff',
  },
  {
    label: '独立访客(UV)',
    value: '300,000',
    icon: 'line-md:person-filled',
    trend: 'down',
    compareValue: '12',
    iconColor: '#f59e0b',
    iconBackground: '#fffbeb',
  },
  {
    label: '日均访问量',
    value: '40,000',
    icon: 'line-md:sunny-filled',
    trend: 'up',
    compareValue: '20',
    iconColor: '#a855f7',
    iconBackground: '#faf5ff',
  },
  {
    label: '新增用户数',
    value: '500',
    icon: 'line-md:person-add-filled',
    trend: 'up',
    compareValue: '2',
    iconColor: '#22c55e',
    iconBackground: '#f0fdf4',
  },
];

export const dateOptions = ['日', '周', '月', '年'];

/**
 * 日志列表
 */
export const accessLogList: AccessLog[] = [
  {
    date: '2023-05-01 12:00:00',
    country: '中国北京',
    deviceType: 'mobile',
    browser: 'Chrome',
    ip: '223.104.63.101',
    os: 'Android 12',
  },
  {
    date: '2023-05-02 14:30:00',
    country: '美国洛杉矶',
    browser: 'Safari',
    deviceType: 'desktop',
    ip: '216.58.213.14',
    os: 'macOS 13 Ventura',
  },
  {
    date: '2023-05-03 09:15:00',
    country: '英国',
    browser: 'Firefox',
    deviceType: 'mobile',
    ip: '51.140.100.25',
    os: 'iOS 16',
  },
  {
    date: '2023-05-04 18:45:00',
    country: '美国山景城',
    browser: 'Chrome',
    deviceType: 'desktop',
    ip: '172.217.24.46',
    os: 'Windows 11',
  },
  {
    date: '2023-05-07 09:45:00',
    country: '加拿大渥太华',
    deviceType: 'tablet',
    browser: 'Edge',
    ip: '208.67.222.222',
    os: 'iPadOS 16',
  },
  {
    date: '2023-05-07 15:20:00',
    country: '澳大利亚',
    deviceType: 'mobile',
    browser: 'Opera',
    ip: '139.130.4.5',
    os: 'Android 13',
  },
  {
    date: '2023-05-08 08:10:00',
    country: '法国巴黎',
    deviceType: 'desktop',
    browser: 'Firefox',
    ip: '92.154.66.128',
    os: 'iOS 15',
  },
  {
    date: '2023-05-09 20:55:00',
    country: '新加坡',
    deviceType: 'mobile',
    browser: 'Chrome',
    ip: '132.147.176.23',
    os: 'iOS 15',
  },
];

/**
 * 快捷导航列表
 */
export const quickNavList: QuickNavItem[] = [
  {
    title: '订单列表',
    icon: 'mdi:help-circle-outline',
    url: '/dashboard/workbench/order',
  },
  {
    title: '订单列表',
    icon: 'mdi:history',
    url: '/dashboard/workbench/order',
  },
  {
    title: '订单列表',
    icon: 'mdi:history',
    url: '/dashboard/workbench/order',
  },
  {
    title: '订单列表',
    icon: 'mdi:history',
    url: '/dashboard/workbench/order',
  },
  {
    title: '订单列表',
    icon: 'mdi:history',
    url: '/dashboard/workbench/order',
  },
  {
    title: '订单列表',
    icon: 'mdi:history',
    url: '/dashboard/workbench/order',
  },
];

/**
 * 公告列表
 */
export const bulletinList: Bulletin[] = [
  {
    tagName: '源码',
    text: 'Clean Admin项目开源了！(点我查看源码)',
    link: 'https://github.com/QFifteen/vue-clean-admin',
  },
  {
    tagName: '专栏',
    text: '《通俗易懂的中后台系统建设指南》系列文章',
    link: 'https://github.com/QFifteen/Blog?tab=readme-ov-file#%E9%80%9A%E4%BF%97%E6%98%93%E6%87%82%E7%9A%84%E4%B8%AD%E5%90%8E%E5%8F%B0%E7%B3%BB%E7%BB%9F%E5%BB%BA%E8%AE%BE%E6%8C%87%E5%8D%97%E4%B8%93%E6%A0%8F',
  },
  {
    tagName: '公告',
    text: '系统将于每天11:00~次日9:00停止维护(因为我要规律作息)',
  },
  {
    tagName: '公告',
    text: '是的，这是一条公告！',
  },
];

const trendDates = [];
for (let i = 0; i < 15; i++) {
  const date = dayjs().subtract(i, 'day').format('MM-DD');
  trendDates.unshift(date);
}

/**
 * 用户日访问量趋势图配置
 */
export const trendOption: echarts.EChartsCoreOption = {
  title: {
    textStyle: { color: '#666', fontSize: 14, fontWeight: 'normal' },
    padding: [5, 0, 0, 0],
  },
  legend: {
    type: 'plain',
    top: 0,
    right: 20,
    itemGap: 64,
    itemWidth: 10,
    icon: 'circle',
    selectedMode: false,
    textStyle: { padding: [0, 0, 0, 4] },
    data: ['老用户', '新用户'],
  },
  grid: { left: 0, top: 40, bottom: 10, right: 0, containLabel: true },
  xAxis: {
    type: 'category',
    data: trendDates,
    axisLine: { lineStyle: { color: '#ccc' } },
    axisTick: { length: 3 },
    axisLabel: { color: '#999' },
  },
  yAxis: {
    type: 'value',
    axisLabel: { color: '#999' },
    splitLine: { show: true },
  },
  tooltip: {
    trigger: 'axis',
    padding: [12, 17, 20, 23],
    textStyle: { color: '#424242' },
    renderMode: 'html',
    className: 'tooltip',
  },
  series: [
    {
      name: '老用户',
      type: 'line',
      data: [0, 10, 2, 4, 4, 7, 2, 8, 3, 3, 0, 9, 6, 0, 0],
      smooth: true,
      showSymbol: false,
      itemStyle: { color: '#126EFC' },
      lineStyle: { width: 2, color: '#126EFC' },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(18, 110, 252, 0.45)',
          },
          {
            offset: 1,
            color: 'rgba(18, 110, 252, 0.1)',
          },
        ]),
      },
    },
    {
      name: '新用户',
      type: 'line',
      data: [0, 0, 0, 5, 0, 2, 1, 2, 5, 2, 0, 4, 1, 0, 0],
      smooth: true,
      showSymbol: false,
      itemStyle: { color: '#1BB389' },
      lineStyle: {
        width: 2,
        color: '#1BB389',
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(27, 179, 137, 0.45)',
          },
          {
            offset: 1,
            color: 'rgba(27, 179, 137, 0.1)',
          },
        ]),
      },
    },
  ],
};

/**
 * 用户访问渠道配置
 */
export const channelOption: echarts.EChartsCoreOption = {
  tooltip: {
    trigger: 'axis',
  },
  grid: {
    left: '3%',
    right: '3%',
    bottom: '5%',
    containLabel: true,
  },
  legend: {
    icon: 'rect',
    right: 'center',
  },
  xAxis: {
    type: 'category',
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    axisLabel: {
      // 坐标轴字体颜色
      textStyle: {
        color: '#333333',
      },
    },
    axisLine: {
      lineStyle: {
        color: '#e5e5e5',
      },
    },
    axisTick: {
      // y轴刻度线
      show: false,
    },
    splitLine: {
      // 网格
      show: false,
    },
  },
  yAxis: {
    type: 'value',
    boundaryGap: ['0%', '20%'],
    axisLabel: {
      // 坐标轴字体颜色
      textStyle: {
        color: '#333333',
      },
    },
    axisLine: {
      show: false,
    },
    axisTick: {
      // y轴刻度线
      show: false,
    },
    splitLine: {
      // 网格
      show: true,
      lineStyle: {
        color: '#dadde4',
        type: 'dashed',
      },
    },
  },
  series: [
    {
      name: '社交媒体',
      type: 'bar',
      stack: 'total',
      barMaxWidth: '20%', // 柱子宽度
      itemStyle: {
        // 柱子颜色
        color: '#1b78f5',
      },
      data: [80, 120, 160, 200, 240, 280, 240, 200, 160, 120, 80, 120], // 波浪形节奏
    },
    {
      name: '广告',
      type: 'bar',
      stack: 'total',
      barMaxWidth: '20%', // 柱子宽度
      itemStyle: {
        // 柱子颜色
        color: '#59b7ff',
      },
      data: [120, 160, 200, 240, 280, 320, 280, 240, 200, 160, 120, 160], // 阶梯递增+波浪
    },
    {
      name: '自然流量',
      type: 'bar',
      stack: 'total',
      barMaxWidth: '20%', // 柱子宽度
      itemStyle: {
        // 柱子颜色
        color: '#bce3ff',
      },
      data: [60, 80, 100, 120, 140, 160, 140, 120, 100, 80, 60, 80], // 平滑波动
    },
  ],
};

const dataC1 = [20, 30, 60, 40, 50, 30];
const xData = ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'];

// ddd
export const testOption: echarts.EChartsCoreOption = {
  backgroundColor: 'transparent',
  xAxis: {
    type: 'category',
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      show: false,
    },
    data: xData,
  },
  yAxis: {
    type: 'value',
    axisLine: {
      show: false,
    },
    splitLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      show: false,
    },
    boundaryGap: ['20%', '20%'],
  },
  series: [
    {
      name: '',
      type: 'line',
      stack: '总量',
      smooth: true,
      symbol: 'none',
      showSymbol: false,
      symbolSize: 8,
      itemStyle: {
        normal: {
          lineStyle: {
            width: 5,
          },
        },
      },
      data: dataC1,
    },
  ],
};
