import  { useRef } from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import {NERType, Props} from "@/pages/list/ner/data";



export default (props: Props) => {
  const actionRef = useRef<ActionType>();
  const {data} = props
  const colenum = {}
  const tmp = []

  // for(const i in data){
  //   if(!colenum[data[i].type]&&data[i].type.startsWith("B")){
  //     colenum[data[i].type]={
  //       text:data[i].type.split("-")[1],
  //       content:data[i].type
  //     }
  //   }
  // }
  // 从data中取得长度前20的实体
  for(let i =0;i<data.length-1;i++){
    if(data[i].type.startsWith("B")){
      tmp.push({
        content:data[i].content+data[i+1].content,
        nertype:data[i].type.split("-")[1],
        nerlength:data[i].content.length+data[i+1].content.length
      })
    }
  }
  tmp.sort((m,n)=>n.nerlength-m.nerlength)
  // 从长度前20的实体中找出它们的类型
  for(const i of tmp){
    if(!colenum[i.nertype]){
      colenum[i.nertype]={
        text:i.nertype,
        content:i.nertype
      }
    }
  }
  const columns: ProColumns<NERType>[] = [
    {
      dataIndex: 'index',
      hideInSearch:true,
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: '实体内容',
      hideInSearch: true,
      dataIndex: 'content',
      copyable: true,
      ellipsis: true,
      tip: '内容过长会自动收缩',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '此项为必填项',
          },
        ],
      },
    },
    {
      title: '实体类别',
      dataIndex: 'nertype',
      filters: true,
      onFilter: true,
      hideInSearch: true,
      valueType: 'select',
      valueEnum: colenum
    },
    {
      title: '实体长度',
      key: '实体长度',
      dataIndex: 'nerlength',
      // valueType: 'dateTime',
      sorter: (a, b) => a.nerlength - b.nerlength,
      hideInSearch: true,
    },
  ];
  return (
    <ProTable<NERType>
      columns={columns}
      actionRef={actionRef}
      dataSource={tmp.splice(0,20)}
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
        pageSizeOptions:["10","20"]
      }}
      search={false}
    />
  );
};
