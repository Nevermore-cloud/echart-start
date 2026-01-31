// src/utils/echarts.ts
import * as echarts from 'echarts/core';

// 图表类型（你用什么就加什么）
import { BarChart, LineChart, PieChart } from 'echarts/charts';

// 组件
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components';

// 渲染器
import { CanvasRenderer } from 'echarts/renderers';

// 注册 把需要的组件注册进去
echarts.use([
  BarChart,
  LineChart,
  PieChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  CanvasRenderer
]);

export default echarts;
