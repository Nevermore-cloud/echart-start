<template>
  <div ref="chartRef" style="width: 100%; height: 400px"></div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useEcharts } from '@/hooks/useEcharts';

  import { createBarOption } from '@/utils/echartsOptions';
  // ECharts 初始化时必须拿到 DOM，否则渲染失败
  const { chartRef, initChart } = useEcharts();
  console.log('chartRef:', chartRef);

  onMounted(() => {
    const data = [120, 200, 150, 80, 70];
    const option = createBarOption(data, '销量');
    initChart(option);
  });
</script>

<style scoped></style>
