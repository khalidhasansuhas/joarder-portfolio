import React, { PureComponent } from 'react';
import { Treemap, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Cyber Security',
    children: [
      { name: 'Axes', size: 1302 },
      { name: 'Axis', size: 24593 },
    ],
  },
  {
    name: 'Machine Learning',
    children: [
      { name: 'AnchorControl', size: 2138 },
      { name: 'ClickControl', size: 3824 },
      { name: 'Control', size: 1353 },
      { name: 'ControlList', size: 4665 },
      { name: 'DragControl', size: 2649 },
      { name: 'ExpandControl', size: 2832 },
      { name: 'HoverControl', size: 4896 },
      { name: 'IControl', size: 763 },
      { name: 'PanZoomControl', size: 5222 },
      { name: 'SelectionControl', size: 7862 },
      { name: 'TooltipControl', size: 8435 },
      { name: 'IControl', size: 763 },
      { name: 'PanZoomControl', size: 5222 },
      { name: 'SelectionControl', size: 7862 },
      { name: 'TooltipControl', size: 8435 },
    ],
  },
  {
    name: 'Data Science',
    children: [
      { name: 'Data', size: 20544 },
      { name: 'DataSprite', size: 10349 },
      { name: 'EdgeSprite', size: 3301 },
      { name: 'NodeSprite', size: 19382 },
      { name: 'Tree', size: 7147 },
      { name: 'TreeBuilder', size: 9930 },
      { name: 'EdgeSprite', size: 3301 },
      { name: 'NodeSprite', size: 19382 },
      { name: 'Tree', size: 7147 },
      { name: 'TreeBuilder', size: 9930 },
    ],
  },
  {
    name: 'IoT',
    children: [
      { name: 'DataEvent', size: 7313 },
      { name: 'SelectionEvent', size: 6880 },
      { name: 'TooltipEvent', size: 3701 },
      { name: 'VisualizationEvent', size: 2117 },
    ],
  },
  {
    name: 'Deep Learning',
    children: [
      { name: 'Legend', size: 20859 },
      { name: 'LegendItem', size: 4614 },
      { name: 'LegendRange', size: 10530 },
    ],
  },
  {
    name: 'Artificial Intelligence (AI)',
    children: [
     
      {
        name: 'encoder',
        children: [
          { name: 'ColorEncoder', size: 3179 },
          { name: 'Encoder', size: 4060 },
          { name: 'PropertyEncoder', size: 4138 },
          { name: 'ShapeEncoder', size: 1690 },
          { name: 'SizeEncoder', size: 1830 },
        ],
      },
      {
        name: 'filter',
        children: [
          { name: 'FisheyeTreeFilter', size: 5219 },
          { name: 'GraphDistanceFilter', size: 3165 },
          { name: 'VisibilityFilter', size: 3509 },
        ],
      },
      {
        name: 'filter',
        children: [
          { name: 'FisheyeTreeFilter', size: 5219 },
          { name: 'GraphDistanceFilter', size: 3165 },
          { name: 'VisibilityFilter', size: 3509 },
        ],
      },
      { name: 'IOperator', size: 1286 },
      {
        name: 'label',
        children: [
          { name: 'Labeler', size: 9956 },
          { name: 'RadialLabeler', size: 3899 },
          { name: 'StackedAreaLabeler', size: 3202 },
        ],
      },
      { name: 'Operator', size: 2490 },
      { name: 'OperatorList', size: 5248 },
      { name: 'OperatorSequence', size: 4190 },
      { name: 'OperatorSwitch', size: 2581 },
      { name: 'SortOperator', size: 2023 },
    ],
  },
];

const COLORS = ['#8889DD', '#95dbe4', '#8DC77B', '#d297cd', '#14e0da', '#F8C12D'];

class CustomizedContent extends PureComponent {
  render() {
    const { root, depth, x, y, width, height, index,  colors,  name } = this.props;

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: depth < 2 ? colors[Math.floor((index / root.children.length) * 6)] : "#ffffff00",
            stroke: '#240202',
            strokeWidth: 2 / (depth + 1e-10),
            strokeOpacity: 1 / (depth + 1e-10),
          }}
        />
        {depth === 1 ? (
          <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="#6e1720" fontSize={14}>
            {name}
          </text>
        ) : null}
        {depth === 1 ? (
          <text x={x + 4} y={y + 18} fill="#6e1720" fontSize={16} fillOpacity={0.9}>
            {index + 1}
          </text>
        ) : null}
      </g>
    );
  }
}

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/treemap-with-customized-content-7qxfp';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <Treemap
          width={400}
          height={200}
          data={data}
          dataKey="size"
          ratio={4 / 3}
          stroke="#EA580C"
          fill="#84d8ca"
          content={<CustomizedContent colors={COLORS} />}
        />
      </ResponsiveContainer>
    );
  }
}
