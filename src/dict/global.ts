export const switchOptions: BaseOptions<boolean>[] = [
  {
    label: '开启',
    value: true,
  },
  {
    label: '关闭',
    value: false,
  },
];

export const whetherOptions: (BaseOptions<boolean> & { disabled?: boolean })[] = [
  {
    label: '是',
    value: true,
  },
  {
    label: '否',
    value: false,
  },
];

export const breadcrumbStyleOptions: BaseOptions<BreadcrumbStyleType>[] = [
  {
    label: '默认',
    value: 'default',
  },
  {
    label: '箭头',
    value: 'arrow',
  },
  {
    label: '平行四边形',
    value: 'parallelogram',
  },
];
