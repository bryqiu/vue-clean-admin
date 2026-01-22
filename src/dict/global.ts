import { FormTypeEnum } from '@/enums';

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

export const whetherOptions: BaseOptions<boolean>[] = [
  {
    label: '是',
    value: true,
  },
  {
    label: '否',
    value: false,
  },
];

export const showOptions: BaseOptions<boolean>[] = [
  {
    label: '显示',
    value: true,
  },
  {
    label: '隐藏',
    value: false,
  },
];

export const statusOptions: BaseOptions<number>[] = [
  {
    label: '开启',
    value: 1,
  },
  {
    label: '关闭',
    value: 0,
  },
];

export const formTypeOptions: BaseOptions<GetObjectValues<typeof FormTypeEnum>>[] = [
  {
    label: '新增',
    value: FormTypeEnum.ADD,
  },
  {
    label: '编辑',
    value: FormTypeEnum.EDIT,
  },
  {
    label: '详情',
    value: FormTypeEnum.DETAIL,
  },
];
