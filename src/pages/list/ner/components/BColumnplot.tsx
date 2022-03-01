import { Column } from '@ant-design/plots';
import {Props} from "@/pages/list/ner/data";
type Btype={
  type: string,
  value: number
}
const BColumnplot = (props: Props) => {
  const {data} = props
  const tmp = {}
  const b: Btype[] = []
  for(const i in data){
    if(data[i].type.startsWith("B")){
      if (!tmp.hasOwnProperty(data[i].type)){
        b.push({
          type:data[i].type,
          value:1
        })
        tmp[data[i].type] = data[i].type
      }else {
        for (const j of b){
          if (j.type===data[i].type){
            j.value +=1
          }
        }
      }
    }
  }
  b.forEach((e)=>e.type=e.type.split("-")[1])
  //降序
  b.sort((m: Btype,n: Btype)=>n.value-m.value)
  const config = {
    data:b,
    xField: 'type',
    yField: 'value',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: '类别',
      },
      sales: {
        alias: '销售额',
      },
    },
  };
  return <Column {...config} />;
};
export default BColumnplot
