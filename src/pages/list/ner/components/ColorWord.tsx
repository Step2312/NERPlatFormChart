import ProCard from "@ant-design/pro-card"
import { Switch } from "antd"
import { json, response } from "express";
import { useEffect, useState } from "react"

const ColorWordPlot = () => {
    const [data,setData] =useState([]);
    const [categoryColorMap,setCategoryColorMap] = useState([]);
    useEffect(()=>{
        asyncFetch();
        asyncFetchColor();
    },[])
    const asyncFetch = ()=>{
        fetch('http://yapi.smart-xwork.cn/mock/126975/colorworddata')
        .then((response)=>response.json())
        .then((json)=>setData(json.data))
        .catch((error)=>{
            console.log("不同色块标注获取数据失败",error);
        })
    }
    const asyncFetchColor = ()=>{
        fetch('http://yapi.smart-xwork.cn/mock/126975/color')
        .then((response)=>response.json())
        .then((json)=>setCategoryColorMap(json))
        .catch((error)=>{
            console.log("获取颜色失败",error);
        })
    }
    
    let colorworddata:Array<Object> =data
    let words = ""
    let wordss = []
    for(let i=0;i<colorworddata.length;i++){
        const wordkey = Object.keys(colorworddata[i])[0]
        const wordvalue = Object.values(colorworddata[i])[0]
        let nextwordvalue =""
        if(i==colorworddata.length-1){
            nextwordvalue = Object.values(colorworddata[i-1])[0]
        }else{
            nextwordvalue = Object.values(colorworddata[i+1])[0]
        }
        if(wordvalue==nextwordvalue){
            wordss.push(wordkey)
        }else{
            wordss.push(wordkey)
            words +=`<span style="background-color:${categoryColorMap[wordvalue]};border-radius:10%">${wordss.join("")}</span>`
            wordss=[]
        }
    }
    const colorword = {
        __html: `${words}`
    }
    return (
        <ProCard>
            <div dangerouslySetInnerHTML={colorword}></div>
        </ProCard>
    )
}

export default ColorWordPlot