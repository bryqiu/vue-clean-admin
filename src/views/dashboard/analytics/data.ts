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
