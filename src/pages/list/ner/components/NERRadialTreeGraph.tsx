import { RadialTreeGraph } from '@ant-design/graphs';
import {NERType, Props} from '../data';


function process(d: NERType[]){
  const tmp = {
    id: 'NER',
    children: [],
    value: '文本',
  };
  const nertype = {}
  const status = {
    btype:1,
    itype:1,
    otype:1
  }
  //v2
  for(let i =0;i<d.length-1;i++){
    if (!nertype[d[i].type]&&d[i].type.startsWith("B")){
      tmp.children.push({
        id:d[i].type,
        children:[],
        value:d[i].type.split("-")[1]
      })

      nertype[d[i].type]=true
    }
    for (const j of tmp.children){
        if (j.id===d[i].type){
          j.children.push({
            id:d[i].content+d[i+1].content+Math.random().toString(),
            value:d[i].content+d[i+1].content
          })
        }
      }

  }
  //v1
  // for(const i of d){
  //   if (i.type.startsWith("B")){
  //     if(status.btype===1){
  //       status.btype = 0
  //       tmp.children.push({
  //         id:"B",
  //         children:[],
  //         value:"B"
  //       })
  //     }
  //     for(let j=0;j<tmp.children.length;j++){
  //       if(tmp.children[j].id==="B"&&!nertype[i.type]){
  //         tmp.children[j].children.push({
  //           id:i.type,
  //           children:[],
  //           value:i.type
  //         })
  //         nertype[i.type] = 1
  //         const a = {}
  //         for(let k=0;k<d.length-1;k++){
  //           if (d[k].type===i.type){
  //             if(!a[d[k].content]){
  //               for (let m=0;m<tmp.children[j].children.length;m++){
  //                 if(tmp.children[j].children[m].id===d[k].type){
  //                   tmp.children[j].children[m].children.push({
  //                     id:d[k].content+Math.random().toString(),
  //                     value:d[k].content+d[k+1].content,
  //                   })
  //                 }
  //               }
  //               a[k.content]=1
  //             }
  //           }
  //         }
  //
  //       }
  //     }
  //
  //   }
  //   // if (i.type.startsWith("I")){
  //   //   if(status.itype===1){
  //   //     status.itype = 0
  //   //     tmp.children.push({
  //   //       id:"I",
  //   //       children:[],
  //   //       value:"I"
  //   //     })
  //   //   }
  //   //   for(let j=0;j<tmp.children.length;j++){
  //   //     if(tmp.children[j].id==="I"&&!nertype[i.type]){
  //   //       tmp.children[j].children.push({
  //   //         id:i.type,
  //   //         children:[],
  //   //         value:i.type
  //   //       })
  //   //       nertype[i.type] = 1
  //   //       const a = {}
  //   //       for(const k of d){
  //   //         if (k.type===i.type){
  //   //           if(!a[k.content]){
  //   //             for (let m=0;m<tmp.children[j].children.length;m++){
  //   //               if(tmp.children[j].children[m].id===k.type){
  //   //                 tmp.children[j].children[m].children.push({
  //   //                   id:k.content+Math.random().toString(),
  //   //                   value:k.content,
  //   //                 })
  //   //               }
  //   //             }
  //   //             a[k.content]=1
  //   //           }
  //   //         }
  //   //       }
  //   //
  //   //     }
  //   //   }
  //   //
  //   // }
  //   // if (i.type.startsWith("O")){
  //   //   if(status.otype===1){
  //   //     status.otype=0
  //   //     tmp.children.push({
  //   //       id:"O",
  //   //       children:[],
  //   //       value:"O"
  //   //     })
  //   //   }
  //   //   // const a = {}
  //   //   if(!nertype[i.content]){
  //   //     for(let j = 0;j<tmp.children.length;j++){
  //   //       if (tmp.children[j].id==="O"){
  //   //         tmp.children[j].children.push({
  //   //           id:i.content+Math.random().toString(),
  //   //           value:i.content
  //   //         })
  //   //
  //   //       }
  //   //     }
  //   //     nertype[i.content]=1
  //   //   }
  //   // }
  // }
  // console.log(tmp)
  return tmp
}
const NERRadialTreeGraphPlot = (props: Props) => {
  const {data} = props
  // console.log()
  const config = {
    data:process(data),
    nodeCfg: {
      type: 'circle',
    },
    markerCfg: {
      show: true,
    },
    edgeCfg:{
      type: "cubic"
    },
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
  };
  return <RadialTreeGraph {...config} />;
};

export default NERRadialTreeGraphPlot;
