import { Radar } from '@ant-design/charts';
import { Props } from '../data';

type RadarType = {
  type: string;
  value: number;
};
// 雷达图 不同类别实体
const NERRadarPlot = (props: Props) => {
  const { data } = props;
  const btype: RadarType[] = [];
  for (const i in data) {
    if (data[i].type.startsWith('B')) {
      btype.push({
        type: data[i].type,
        value: 1,
      });
    }
  }
  const tmp = [];
  for (const i of btype) {
    if (i.value === 1) {
      let count = 0;
      for (const j of btype) {
        if (i.type === j.type && j.value === 1) {
          j.value = 0;
          count += 1;
        }
      }
      tmp.push({
        type: i.type.split('-')[1],
        value: count,
      });
    }
    i.value = 0;
  }

  const config = {
    data: tmp.map((d) => ({ ...d, star: Math.sqrt(d.value) })),
    xField: 'type',
    yField: 'value',
    appendPadding: [0, 10, 0, 10],
    meta: {
      star: {
        alias: 'star 数量',
        min: 0,
        nice: true,
        formatter: (v: number) => Number(v).toFixed(2),
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

export default NERRadarPlot;
