import React, { useState, useEffect } from 'react';
import { WordCloud } from '@ant-design/plots';

const NERWordCloudPlot = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('http://yapi.smart-xwork.cn/mock/126975/nerwordclouddata')
      .then((response) => response.json())
      .then((json) => setData(json.data))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    wordField: 'name',
    weightField: 'value',
    colorField: 'name',
    // imageMask: 'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*07tdTIOmvlYAAAAAAAAAAABkARQnAQ',
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [8, 32],
    },
  };

  return <WordCloud {...config} />;
};
// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import { WordCloud } from '@ant-design/plots';

// const NERWordCloudPlot = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     asyncFetch();
//   }, []);

//   const asyncFetch = () => {
//     fetch('http://yapi.smart-xwork.cn/mock/126975/nerwordclouddata')
//       .then((response) => response.json())
//       .then((json) => setData(json.data))
//       .catch((error) => {
//         console.log('fetch data failed', error);
//       });
//   };
//   const config = {
//     data,
//     autoFit:true,
//     wordField: 'name',
//     weightField: 'value',
//     colorField: 'name',
//     wordStyle: {
//       fontFamily: 'Verdana',
//       fontSize: [8, 32],
//       rotation: 0,
//     },
//     // 返回值设置成一个 [0, 1) 区间内的值，
//     // 可以让每次渲染的位置相同（前提是每次的宽高一致）。
//     random: () => 0.5,
//   };

//   return <WordCloud {...config} />;
// };
export default NERWordCloudPlot