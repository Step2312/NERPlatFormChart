import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/charts';

const NERBasicDonutPlot = () => {
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
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: 'NER',
      },
    },
  };
  return <Pie {...config} />;
};

export default NERBasicDonutPlot