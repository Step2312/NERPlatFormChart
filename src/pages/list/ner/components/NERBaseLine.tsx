import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/charts';

const NERBaseLinePlot:React.FC = () => {
  const data = [
    {
      category: 'O',
      value: 7,
    },
    {
      category: 'I-BCZ',
      value: 4,
    },
    {
      category: 'B-BCZ',
      value: 3.5,
    },
    {
      category: 'I-RYCBZD',
      value: 5,
    },
    {
      category: 'I-SZKS',
      value: 4.9,
    },
    {
      category: 'B-SZKS',
      value: 6,
    },
    {
      category: 'I-YQJCJG',
      value: 7,
    },
    {
      category: 'B-YQJCJG',
      value: 9,
    },
    {
      category: 'I-YWYY',
      value: 13,
    },
    {
      category:'B-YWYY',
      value:16,
    }
  ];
  const config = {
    data,
    xField: 'category',
    yField: 'value',
    label: {},
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2,
      },
    },
    tooltip: {
      showMarkers: false,
    },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: '#000',
          fill: 'red',
        },
      },
    },
    interactions: [
      {
        type: 'marker-active',
      },
    ],
  };
  return <Line {...config} />;
};

export default NERBaseLinePlot