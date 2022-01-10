import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import { RadialTreeGraph } from '@ant-design/charts';

const NERRadialTreeGraphPlot = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('http://yapi.smart-xwork.cn/mock/126975/radialtreegraphdata')
      .then((response) => response.json())
      .then((json) => setData(json.data))
      .catch((error) => {
        console.log('不同类别实体数据获取失败', error);
      });
  };
  // const data = {
  //   id: 'ner',
  //   children: [
  //     {
  //       id: 'B',
  //       children: [
  //         {
  //           id:'B-BCZ',
  //           children:[
  //             {id:'心神安可',value:'心神安可'},
  //             {id:'神志清',value:'神志清'},
  //             {id:'精神尚可',value:'精神尚可'},
  //             {id:'纳眠一般',value:'纳眠一般'}
  //           ],
  //           value:'BCZ'
  //         },
  //         {
  //           id:'B-BCZYZZ',
  //           children:[
  //             {id:'出',value:'出'},
  //             {id:'右肢身心不助',value:'右肢身心不助'},
  //             {id:'右手臂持续或欠斜',value:'右手臂持续或欠斜'},
  //             {id:'右上臂行走欠难',value:'右上臂行走欠难'}
  //           ],
  //           value:'BCZYZZ'
  //         },
  //         {
  //           id:'B-YQJCXM',
  //           children:[
  //             {id:'头颅骨T',value:'头颅骨T'},
  //             {id:'头颅内T',value:'头颅内T'}
  //           ],
  //           value:'YQJCXM'
  //         },
  //         {
  //           id:'B-CCFBSJ',
  //           children:[
  //             {id:'几天前有明显诱因',value:'几天前有明显诱因'},
  //             {id:'2周后有明显诱因',value:'2周后有明显诱因'},
  //             {id:'2月前无明显诱因',value:'2月前无明显诱因'},
  //           ],
  //           value:'CCFBSJ'
  //         },
          
  //       ],
  //       value: 'B',
  //     },
  //     {
  //       id: 'I',
  //       children: [
  //         {
  //           id: 'I-BCZ',
  //           children: [
  //             { id:'发热咳嗽',value:'发热咳嗽'},
  //             { id:'腹痛腹泻',value:'腹痛腹泻'},
  //             { id:'食睡眠可',value:'食睡眠可'},
  //             {id:'小便自控',value:'小便自控'},
  //           ],
  //           value: 'I-BCZ',
  //         },
  //         {
  //           id: 'I-SZKS',
  //           children: [
  //             { id:'科',value:'科'},
  //             { id:'诊',value:'诊'}
  //           ],
  //           value: 'I-SZKS',
  //         },

  //       ],
  //       value: 'I',
  //     },
  //   ],
  //   value: '实体',
  // }
  const themeColor = '#73B3D1';
  const config = {
    data,
    nodeCfg: {
      size: 30,
      type: 'circle',
      label: {
        style: {
          fill: '#fff',
        },
      },
      style: {
        fill: themeColor,
        stroke: '#0E1155',
        lineWidth: 2,
        strokeOpacity: 0.45,
        shadowColor: themeColor,
        shadowBlur: 25,
      },
      nodeStateStyles: {
        hover: {
          stroke: themeColor,
          lineWidth: 2,
          strokeOpacity: 1,
        },
      },
    },
    edgeCfg: {
      style: {
        stroke: themeColor,
        shadowColor: themeColor,
        shadowBlur: 20,
      },
      endArrow: {
        type: 'triangle',
        fill: themeColor,
        d: 15,
        size: 8,
      },
      edgeStateStyles: {
        hover: {
          stroke: themeColor,
          lineWidth: 2,
        },
      },
    },
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
  };

  return (
    <div
      id="dom"
      style={{
        background: '#0E1155',
        height: '400px',
      }}
    >
      <RadialTreeGraph {...config} />
    </div>
  );
};


export default NERRadialTreeGraphPlot