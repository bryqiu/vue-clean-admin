import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * 合并类名
 * @desc 用 clsx 组装类名并交给 twMerge 处理 Tailwind 冲突。
 * @param classes 类名
 * @returns 合并后的类名
 */
function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export { cn };
