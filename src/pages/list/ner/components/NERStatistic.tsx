import React, { useRef } from 'react';
import { PlusOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Button, Tag, Space, Menu, Dropdown } from 'antd';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import request from 'umi-request';
import { response } from 'express';

type NERType = {
  id:number,
  content:string;
  long:number;
  short:number;
  average:number;
  quarter:number;
  half:number;
  threequarter:number;
};
let valueEnum =  {
    "B":{
        "text":"B",
        "content":"B"
    },
    "I":{
        "text":"I",
        "content":"I"
    },
    "I-YWYY":{
        "text":"I-YWYY",
        "content":"I-YWYY"
      },
      "B-BCZYZZ":{
        "text":"B-BCZYZZ",
        "content":"B-BCZYZZ"
      },
      "I-BCZYZZ":{
        "text":"I-BCZYZZ",
        "content":"I-BCZYZZ"
      },
      "B-YQJCXM":{
        "text":"B-YQJCXM",
        "content":"B-YQJCXM"
      },
      "I-YQJCXM":{
        "text":"I-YQJCXM",
        "content":"I-YQJCXM"
      },
      "B-CCFBSJ":{
        "text":"B-CCFBSJ",
        "content":"B-CCFBSJ"
      },
      "I-CCFBSJ":{
        "text":"I-CCFBSJ",
        "content":"I-CCFBSJ"
      },
      "B-CCFBZYZZ":{
        "text":"B-CCFBZYZZ",
        "content":"B-CCFBZYZZ"
      },
      "I-CCFBZYZZ":{
        "text":"I-CCFBZYZZ",
        "content":"I-CCFBZYZZ"
      },
      "B-SZKS":{
        "text":"B-SZKS",
        "content":"B-SZKS"
      },
      "I-SZKS":{
        "text":"I-SZKS",
        "content":"I-SZKS"
      },
      "B-YQJCJG":{
        "text":"B-YQJCJG",
        "content":"B-YQJCJG"
      },
      "I-YQJCJG":{
        "text":"I-YQJCJG",
        "content":"I-YQJCJG"
      },
      "B-RYCBZD":{
        "text":"B-RYCBZD",
        "content":"B-RYCBZD"
      },
      "I-RYCBZD":{
        "text":"I-RYCBZD",
        "content":"I-RYCBZD"
      },
      "B-BCZ":{
        "text":"B-BCZ",
        "content":"B-BCZ"
      },
      "I-BCZ":{
        "text":"I-BCZ",
        "content":"I-BCZ"
      },
      "B-TIME":{
        "text":"B-TIME",
        "content":"B-TIME"
      },
      "I-TIME":{
        "text":"B-TIME",
        "content":"B-TIME"
      },
      "B-YWYY":{
        "text":"B-YWYY",
        "content":"B-YWYY"
      },
      "I-YQJJYPMC":{
        "text":"I-YQJJYPMC",
        "content":"I-YQJJYPMC"
      },
      "I-YQJJFS":{
        "text":"I-YQJJFS",
        "content":"I-YQJJFS"
      },
      "B-YQJJYPMC":{
        "text":"B-YQJJYPMC",
        "content":"B-YQJJYPMC"
      },
      "B-YQZLJGMC":{
        "text":"B-YQZLJGMC",
        "content":"B-YQZLJGMC"
      },
      "I-YQZLJGMC":{
        "text":"I-YQZLJGMC",
        "content":"I-YQZLJGMC"
      },
      "B-BYJCJG":{
        "text":"B-BYJCJG",
        "content":"B-BYJCJG"
      },
      "I-BYJCJG":{
        "text":"I-BYJCJG",
        "content":"I-BYJCJG"
      },
      "I-WYZLFF":{
        "text":"I-WYZLFF",
        "content":"I-WYZLFF"
      },
      "I-WYZLYW":{
        "text":"I-WYZLYW",
        "content":"I-WYZLYW"
      },
      "I-LBYJCXMJG":{
        "text":"I-LBYJCXMJG",
        "content":"I-LBYJCXMJG"
      },
      "B-LBYJCXMJG":{
        "text":"B-LBYJCXMJG",
        "content":"B-LBYJCXMJG"
      },
}
await fetch('http://yapi.smart-xwork.cn/mock/126975/valueenum')
.then(response => response.json())
.then(json => valueEnum=json)
.catch(err => console.log('实体列表请求失败', err)); 


const columns: ProColumns<NERType>[] = [
  {
    dataIndex: 'index',
    hideInSearch:true,
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '实体类别',
    dataIndex: 'content',
    copyable: true,
    // ellipsis: true,
    filters: true,
    onFilter: true,
    hideInSearch: true,
    valueType: 'select',
    valueEnum,
  },
  {
    title: '最长字符数',
    key: '最长字符数',
    dataIndex: 'long',
  },
  {
    title: '最短字符数',
    key: '实体长度',
    dataIndex: 'short',
  },
  {
    title: '平均字符数',
    key: '平均字符数',
    dataIndex: 'average',
  },
  {
    title: '25%字符数',
    key: '25%字符数',
    dataIndex: 'quarter',
  },
  {
    title: '50%字符数',
    key: '50%字符数',
    dataIndex: 'half',
  },
  {
    title: '75%字符数',
    key: '75%字符数',
    dataIndex: 'threequarter',
  },
  
];


export default () => {
  const actionRef = useRef<ActionType>();
  return (
    <ProTable<NERType>
      columns={columns}
      actionRef={actionRef}
      request={async (params = {}, sort, filter) => {
        console.log(sort, filter);
        return request<{
          data: NERType[];
        }>('http://yapi.smart-xwork.cn/mock/126975/nerstatistic', {
          params,
        });
      }}
      editable={{
        type: 'multiple',
      }}
      columnsState={{
        persistenceKey: 'ner',
        persistenceType: 'localStorage',
      }}
      rowKey="id"
      // search={{
      //   labelWidth: 'auto',
      // }}
      pagination={{
        pageSize: 10,
      }}
      search={false}
    />
  );
};