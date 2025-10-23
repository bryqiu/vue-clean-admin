<script setup lang="ts">
import { AppDrawer } from '@/components/common/app-drawer';
import AppUserAvatar from '@/components/common/app-user-avatar/app-user-avatar.vue';
import UserAvatar from '@/assets/images/user-avatar.jpg';
import { ElSegmented, ElTag } from 'element-plus';
import { ref } from 'vue';
import { isObject } from '@/utils';
import dayjs from 'dayjs';

defineOptions({
  name: 'Notifications',
});

const NotificationTypeEnum = {
  ALL: 1,
  SYSTEM: 2,
  FOLLOW: 3,
} as const;

type NotificationType = GetObjectValues<typeof NotificationTypeEnum>;

interface Notification {
  name: string;
  content: string;
  time: string;
  relativeTime?: string;
  type: NotificationType;
}

const notificationTypeOptions: BaseOptions<NotificationType>[] = [
  {
    label: '全部',
    value: NotificationTypeEnum.ALL,
  },
  {
    label: '系统',
    value: NotificationTypeEnum.SYSTEM,
  },
  {
    label: '关注',
    value: NotificationTypeEnum.FOLLOW,
  },
];

const notificationList: Notification[] = [
  {
    type: NotificationTypeEnum.SYSTEM,
    name: '系统管理员',
    content:
      '系统将于今晚 23:00-01:00 进行维护升级，期间可能影响部分功能使用，请提前保存工作内容。',
    time: dayjs().subtract(30, 'minute').format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    type: NotificationTypeEnum.FOLLOW,
    name: '王设计师',
    content: '分享了最新的 UI 设计规范文档，包含色彩搭配和组件使用指南。',
    time: dayjs().subtract(1, 'day').format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    type: NotificationTypeEnum.SYSTEM,
    name: '产品团队',
    content: '新版本 v2.1.0 已发布，新增了数据可视化功能和性能优化，快去体验吧！',
    time: dayjs().subtract(2, 'day').format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    type: NotificationTypeEnum.FOLLOW,
    name: '张开发',
    content: '在代码审查中提到了几个优化建议，请查看并回复。',
    time: dayjs().subtract(3, 'day').format('YYYY-MM-DD HH:mm:ss'),
  },
];

const { getDrawerVisible, closeNotificationDrawer } = useNotificationState();

const activeNotification = ref<NotificationType>(NotificationTypeEnum.ALL);
</script>

<template>
  <AppDrawer
    :model-value="getDrawerVisible"
    :size="378"
    title="消息列表"
    hide-footer
    @update:model-value="closeNotificationDrawer"
  >
    <ElSegmented v-model="activeNotification" :options="notificationTypeOptions" block>
      <template #default="{ item }">
        <div class="flex items-center gap-x-1 justify-center">
          <span>{{ `${isObject(item) ? item.label : item}` }}</span>
          <div class="px-1 bg-el-fill-dark rounded-md">
            <span class="text-xs text-el-text-regular">12</span>
          </div>
        </div>
      </template>
    </ElSegmented>
    <div class="space-y-4 mt-4">
      <div v-for="(notification, index) in notificationList" :key="index" class="flex gap-x-2">
        <AppUserAvatar :src="UserAvatar" />
        <div class="flex flex-col gap-x-2 flex-1 gap-y-1">
          <div class="text-sm gap-x-2">
            <div class="flex-1 flex items-center justify-between gap-x-4">
              <span class="text-sm font-medium line-clamp-1">{{ notification.name }}</span>
              <span class="text-xs text-el-text-placeholder">{{
                dayjs(notification.time).fromNow()
              }}</span>
            </div>
          </div>
          <div class="text-xs rounded-lg border border-solid border-el-border-light p-2">
            <span>{{ notification.content }}</span>
          </div>
          <div class="text-xs text-el-text-placeholder flex justify-between">
            <span>{{ notification.time }}</span>
            <div class="flex items-center gap-x-1 text-el-text-regular cursor-pointer">
              <span>查看详情</span>
              <IconifyIcon name="carbon:chevron-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppDrawer>
</template>

<style scoped lang="scss"></style>
