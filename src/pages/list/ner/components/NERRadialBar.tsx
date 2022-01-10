import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { RadialBar } from '@ant-design/charts';

const NERRadialBarPlot = () => {
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
    // maxAngle: 90, //最大旋转角度,
    radius: 0.8,
    innerRadius: 0.2,
    tooltip: {
      formatter: (datum) => {
        return {
          name: 'star数',
          value: datum.star,
        };
      },
    },
  };
  return <RadialBar {...config} />;
};

export default NERRadialBarPlot