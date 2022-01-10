import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/charts';

const BIGroupedColumnPlot = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('http://yapi.smart-xwork.cn/mock/126975/biogroupedcolumndata')
      .then((response) => response.json())
      .then((json) => setData(json.data)
      )
      .catch((error) => {
        console.log('获取分组柱状图数据失败', error);
      });
  };
  const config = {
    data,
    xField: 'nertype',
    yField: 'value',
    isGroup: false,
    isStack: true,
    seriesField: 'ner_subtype',
  };

  return <Column {...config} />;
};

export default BIGroupedColumnPlot