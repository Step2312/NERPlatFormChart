import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const BIGroupedColumnPlot = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('http://yapi.smart-xwork.cn/mock/126975/biogroupedcolumndata')
      .then((response) => response.json())
      .then((json) => setData(json.data))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'nertype',
    yField: 'value',
    seriesField: 'ner_subtype',
    isGroup: 'true',
    columnStyle: {
      radius: [20, 20, 0, 0],
    },
  };

  return <Column {...config} />;
};


export default BIGroupedColumnPlot