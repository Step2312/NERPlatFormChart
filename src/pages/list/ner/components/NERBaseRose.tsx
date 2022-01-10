import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Rose } from '@ant-design/charts';

const NERBasicRosePlot = () => {
  const data = [
    {
      type: 'O',
      value: 27,
    },
    {
      type: 'I-BCZ',
      value: 25,
    },
    {
      type: 'B-BCZ',
      value: 18,
    },
    {
      type: 'I-RYCBZD',
      value: 15,
    },
    {
      type: 'I-SZKS',
      value: 10,
    },
    {
      type: 'B-SZKS',
      value: 5,
    },
    {
      type:'I-YQJCJG',
      value:7,
    },
    {
      type:'B-YQJCJG',
      value:9,
    },
    {
      type:'I-YWYY',
      value:17,
    },
    {
      type:'B-YWYY',
      value:15,
    }
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'value',
    seriesField: 'type',
    radius: 0.9,
    legend: {
      position: 'bottom',
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };
  return <Rose {...config} />;
};

export default NERBasicRosePlot