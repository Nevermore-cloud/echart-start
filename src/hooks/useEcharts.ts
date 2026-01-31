import { onMounted, onBeforeUnmount, ref } from 'vue';
import echarts from '@/utils/echarts';

// / ✅ 类型单独引入    ECharts 的类型，永远不要挂在 echarts 实例上
import type { EChartsOption } from 'echarts';
/* echarts 是“运行时的 JS 对象”，EChartsOption 是“只在 TS 编译期存在的类型”，
把类型写成 echarts.EChartsOption 只是历史兼容的假象，一旦用 echarts/core 按需引入就会失效，所以工程里不要这么写。 */

export function useEcharts() {
  const chartRef = ref<HTMLElement | null>(null);
  let chartInstance: echarts.ECharts | null = null;

  const initChart = (option: EChartsOption) => {
    if (!chartRef.value) return;

    chartInstance = echarts.init(chartRef.value);
    chartInstance.setOption(option);
  };

  const setOption = (option: EChartsOption) => {
    chartInstance?.setOption(option);
  };

  const resize = () => {
    chartInstance?.resize();
  };

  onMounted(() => {
    window.addEventListener('resize', resize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resize);
    chartInstance?.dispose();
    chartInstance = null;
  });

  return {
    chartRef,
    initChart,
    setOption
  };
}

/* 为什么要封装

避免每个页面都写 init / resize / dispose

这是很多公司里的固定写法 */
