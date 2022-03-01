import { Column } from '@ant-design/plots';
import {Props} from "@/pages/list/ner/data";
//  分组柱状图
const BIGroupedColumnPlot = (props: Props) => {
  const {data} = props
  const barr = []
  const iarr = []
  for(const i in data){
    if(data[i].type.startsWith("B")){
        barr.push({
          nertype:"B",
          ner_subtype:data[i].type.split("-")[1],
          value:1
        })
    }
    if(data[i].type.startsWith("I")){
      iarr.push({
        nertype:"I",
        ner_subtype:data[i].type.split("-")[1],
        value:1
      })
    }
  }
  const tmp = []
  for(const i of barr){
    if(i.value===1){
      let count =0
      for(const j of barr){
        if(i.ner_subtype===j.ner_subtype&&j.value===1){
          j.value=0
          count +=1
        }
      }
      tmp.push({
        nertype:i.nertype,
        ner_subtype:i.ner_subtype,
        value:count
      })
    }
    i.value=0
  }
  // for(const i of iarr){
  //   if(i.value===1){
  //     let count =0
  //     for(const j of iarr){
  //       if(i.ner_subtype===j.ner_subtype&&j.value===1){
  //         j.value=0
  //         count +=1
  //       }
  //     }
  //     tmp.push({
  //       nertype:i.nertype,
  //       ner_subtype:i.ner_subtype,
  //       value:count
  //     })
  //   }
  //   i.value=0
  // }

  const config = {
    data:tmp,
    xField: 'nertype',
    yField: 'value',
    seriesField: 'ner_subtype',
    isGroup: true,
    columnStyle: {
      radius: [20, 20, 0, 0],
    },
  };

  return <Column {...config} />;
};


export default BIGroupedColumnPlot
