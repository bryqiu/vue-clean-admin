<script setup lang="ts">
import { ElCard } from 'element-plus';
import { BoardItem } from './components';
import { boardData } from './data';

defineOptions({
  name: 'Home',
});
</script>

<template>
  <div class="flex flex-col">
    <div>
      <ElCard shadow="never">
        <div class="flex flex-col gap-4">
          <!--顶部文本-->
          <div class="flex-b-c">
            <div class="flex items-center gap-2">
              <span class="app-h5">数据总览</span
              ><span class="app-h8 max-sm:hidden">更新时间：2024-329-3223</span>
            </div>
            <div>分段控制器</div>
          </div>
          <!--内容-数据汇总-->
          <div
            class="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-xs:grid-cols-1 gap-2"
          >
            <BoardItem
              v-for="(item, index) in boardData"
              :key="index"
              :label="item.label"
              :value="item.value"
              :icon="item.icon"
            />
          </div>
          <!--底部-数据可视化-->
          <div>
            <div>图表</div>
          </div>
        </div>
      </ElCard>
    </div>
    <!--中间-->
    <div>中间</div>
  </div>
</template>

<style scoped lang="scss"></style>
