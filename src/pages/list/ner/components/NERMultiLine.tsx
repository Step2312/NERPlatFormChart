import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

const NERMultiLinePlot = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('http://yapi.smart-xwork.cn/mock/126975/multilinedata')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('多折线图数据获取失败', error);
      });
  };
  const config = {
    data,
    xField: 'column',
    yField: 'value',
    seriesField: 'NERCategory',
    yAxis: {
      label: {
        formatter: (v) => `${(v / 1.0).toFixed(1)}`,
      },
    },
    legend: {
      position: 'top',
    },
    smooth: true,
    // @TODO 后续会换一种动画方式
    animation: {
      appear: {
        animation: 'path-in',
        duration: 5000,
      },
    },
  };

  return <Line {...config} />;
};

export default NERMultiLinePlot