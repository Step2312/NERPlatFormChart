import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Radar } from '@ant-design/charts';

// 雷达图
const NERRadarPlot = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('http://yapi.smart-xwork.cn/mock/126975/radardata')
      .then((response) => response.json())
      .then((json) => setData(json.data)
      )
      .catch((error) => {
        console.log('不同类别实体数据获取失败', error);
      });
  };
  const config = {
    data: data.map((d) => ({ ...d, star: Math.sqrt(d.value) })),
    xField: 'category',
    yField: 'value',
    appendPadding: [0, 10, 0, 10],
    meta: {
      star: {
        alias: 'star 数量',
        min: 0,
        nice: true,
        formatter: (v) => Number(v).toFixed(2),
      },
    },
    xAxis: {
      tickLine: null,
    },
    yAxis: {
      label: false,
      grid: {
        alternateColor: 'rgba(0, 0, 0, 0.04)',
      },
    },
    // 开启辅助点
    point: {
      size: 2,
    },
    area: {},
  };
  return <Radar {...config} />;
};

export default NERRadarPlot