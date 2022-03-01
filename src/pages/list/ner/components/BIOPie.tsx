import { Pie } from '@ant-design/charts';
import {Props} from '../data';

type BIOType = {
  type: string,
  value: number
}

const BIOPiePlot = (props: Props) => {
  const {data} = props
  let B_number = 0, I_number = 0, O_number = 0;
  for (const i in data){
    if(data[i].type.startsWith("B")){
      B_number += data[i].content.length
    }
    if(data[i].type.startsWith("I")){
      I_number += data[i].content.length
    }
    if(data[i].type.startsWith("O")){
      O_number += data[i].content.length
    }
  }
  const BIOdata: BIOType[] = [
    {
      "type":"B",
      "value":B_number
    },
    {
      "type":"I",
      "value":I_number
    },
    {
      "type":"O",
      "value":O_number
    }
  ]
  const config = {
    appendPadding: 10,
    data:BIOdata,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [
      {
        type: 'pie-legend-active',
      },
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
};

export default BIOPiePlot
