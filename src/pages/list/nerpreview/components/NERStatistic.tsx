import { useRef } from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Props } from '@/pages/list/ner/data';

type NERType = {
  id: number;
  content: string;
  long: number;
  short: number;
  average: number;
  quarter: number;
  half: number;
  threequarter: number;
};

export default (props: Props) => {
  const actionRef = useRef<ActionType>();
  const { data } = props;
  const colenum = {};
  const tmp = {
    B: {
      type: '',
      textlength: [],
    },
    I: {
      type: '',
      textlength: [],
    },
  };
  for (const i in data) {
    if (!colenum[data[i].type] && data[i].type.startsWith('B')) {
      colenum[data[i].type] = {
        text: data[i].type,
        content: data[i].type,
      };
      colenum['B'] = {
        text: 'B',
        content: 'B',
      };
    }
    if (!colenum[data[i].type] && data[i].type.startsWith('I')) {
      colenum[data[i].type] = {
        text: data[i].type,
        content: data[i].type,
      };
      colenum['I'] = {
        text: 'I',
        content: 'I',
      };
    }
  }

  for (const j in data) {
    if (!tmp[data[j].type]) {
      tmp[data[j].type] = {};
      tmp[data[j].type].type = data[j].type;
      tmp[data[j].type].textlength = [];
      tmp[data[j].type].textlength.push(data[j].content.length);
    } else {
      tmp[data[j].type].textlength.push(data[j].content.length);
    }
    if (data[j].type.startsWith('B')) {
      tmp.B.type = 'B';
      tmp.B.textlength.push(data[j].content.length);
    }
    if (data[j].type.startsWith('I')) {
      tmp.I.type = 'I';
      tmp.I.textlength.push(data[j].content.length);
    }
  }
  // console.log(tmp.textlength);

  const data1 = [];
  for (const i in tmp) {
    // console.log(tmp[i].type,tmp[i].textlength);
    tmp[i].textlength = tmp[i].textlength.sort((a: number, b: number) => a - b);
    data1.push({
      content: tmp[i].type,
      short: tmp[i].textlength[0],
      long: tmp[i].textlength[tmp[i].textlength.length - 1],
      average: (
        tmp[i].textlength.reduce((a: number, b: number) => a + b, 0) / tmp[i].textlength.length
      ).toFixed(2),
      quarter: tmp[i].textlength[Math.ceil(0.25 * tmp[i].textlength.length) - 1],
      half: tmp[i].textlength[Math.ceil(0.5 * tmp[i].textlength.length) - 1],
      threequarter: tmp[i].textlength[Math.ceil(0.75 * tmp[i].textlength.length) - 1],
    });
  }
  // console.log(data1);

  const columns: ProColumns<NERType>[] = [
    {
      dataIndex: 'index',
      hideInSearch: true,
      key: 'index' + Math.random().toString(),
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: '类别',
      dataIndex: 'content',
      copyable: true,
      // ellipsis: true,
      key: 'content',
      filters: true,
      onFilter: true,
      hideInSearch: true,
      valueType: 'select',
      valueEnum: colenum,
    },
    {
      title: '最长字符数',
      key: 'long',
      dataIndex: 'long',
    },
    {
      title: '最短字符数',
      key: 'short',
      dataIndex: 'short',
    },
    {
      title: '平均字符数',
      key: 'average',
      dataIndex: 'average',
    },
    {
      title: '25%字符数',
      key: 'quarter',
      dataIndex: 'quarter',
    },
    {
      title: '50%字符数',
      key: 'half',
      dataIndex: 'half',
    },
    {
      title: '75%字符数',
      key: 'threequarter',
      dataIndex: 'threequarter',
    },
  ];
  return (
    <ProTable<NERType>
      columns={columns}
      actionRef={actionRef}
      dataSource={data1}
      editable={{
        type: 'multiple',
      }}
      columnsState={{
        persistenceKey: 'ner',
        persistenceType: 'localStorage',
      }}
      // rowKey={Math.random().toString()}
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
