// 明确标注 series 类型，以获得更好的类型提示
import type { EChartsOption, BarSeriesOption, LineSeriesOption, PieSeriesOption } from 'echarts';

// 默认主题颜色，可在这里统一修改
const defaultColors = ['#5470c6', '#91cc75', '#fac858', '#ee6666'];

// 柱状图
export function createBarOption(data: number[], name = '销量'): EChartsOption {
  return {
    color: defaultColors,
    title: { text: `${name}统计` },
    tooltip: {},
    legend: { data: [name] },
    xAxis: { data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] },
    yAxis: {},
    series: [
      {
        type: 'bar',
        name,
        data
      } as BarSeriesOption
    ]
  };
}

// 折线图
export function createLineOption(data: number[], name = '趋势'): EChartsOption {
  return {
    color: defaultColors,
    title: { text: `${name}趋势` },
    tooltip: { trigger: 'axis' },
    legend: { data: [name] },
    xAxis: { data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] },
    yAxis: {},
    series: [
      {
        type: 'line',
        name,
        data
      } as LineSeriesOption
    ]
  };
}

// 饼图
export function createPieOption(
  data: { name: string; value: number }[],
  title = '占比'
): EChartsOption {
  return {
    color: defaultColors,
    title: { text: title, left: 'center' },
    tooltip: { trigger: 'item' },
    legend: { orient: 'vertical', left: 'left' },
    series: [
      {
        type: 'pie',
        radius: '50%',
        data
      } as PieSeriesOption
    ]
  };
}
