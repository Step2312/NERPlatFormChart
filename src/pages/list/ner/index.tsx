import React from 'react';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import NERWordCloud from "@/pages/list/ner/components/NERWordCloud";
import { Divider, Row, Col, Table, Card } from 'antd';
import NERBaseLine from './components/NERBaseLine';
import  PercentStackedArea  from '@ant-design/charts';
import NERBasicDonut from './components/NERBasicDonut';
import NERBasicRose from './components/NERBaseRose';
import NERRadialTreeGraph from './components/NERRadialTreeGraph';
import NERWordCloudPlot from '@/pages/list/ner/components/NERWordCloud';
import NERBaseLinePlot from './components/NERBaseLine';
import NERBasicDonutPlot from './components/NERBasicDonut';
import NERBasicRosePlot from './components/NERBaseRose';
import NERRadialBarPlot from './components/NERRadialBar';
import { useState } from 'react';
import ProCard, { StatisticCard } from '@ant-design/pro-card';
import RcResizeObserver from 'rc-resize-observer';
import NERPercentStackAreaPlot from './components/NERPercentStackArea';
import NERRadarPlot from './components/NERRadar';
import moment from 'moment';
import NERRadialTreeGraphPlot from './components/NERRadialTreeGraph';
import NERColumnPlot from './components/NERColumn';
import NERGroupedRosePlot from './components/NERGroupedRose';
import BIOPiePlot from './components/BIOPie';
import BIGroupedColumnPlot from './components/BIGroupedColumn';
import ColorWordPlot from './components/ColorWord';

const { Statistic } = StatisticCard;
const NerModel: React.FC = () => {
  const dataSource = [
    {
      category:'B',
      maxlength: 10,
      minlength: 5,
      averagelength:7,
      twentyfivepercentlength:3,
      fiftypercentlength:4,
      seventyfivepercentlength:5
    },
    {
      category:'I',
      maxlength: 10,
      minlength: 5,
      averagelength:7,
      twentyfivepercentlength:3,
      fiftypercentlength:4,
      seventyfivepercentlength:5
    },
    {
      category:'B-BCZ',
      maxlength: 10,
      minlength: 5,
      averagelength:7,
      twentyfivepercentlength:3,
      fiftypercentlength:4,
      seventyfivepercentlength:5
    },
    {
      category:'I-BCZ',
      maxlength: 10,
      minlength: 5,
      averagelength:7,
      twentyfivepercentlength:3,
      fiftypercentlength:4,
      seventyfivepercentlength:5
    },
    {
      category:'IRYCBZD',
      maxlength: 10,
      minlength: 5,
      averagelength:7,
      twentyfivepercentlength:3,
      fiftypercentlength:4,
      seventyfivepercentlength:5
    },
    {
      category:'IYWYY',
      maxlength: 10,
      minlength: 5,
      averagelength:7,
      twentyfivepercentlength:3,
      fiftypercentlength:4,
      seventyfivepercentlength:5
    },
  ];
  
  const columns = [
    {
      title:'类别',
      dataIndex:'category',
      key:'category',
    },
    {
      title: '最长字符数',
      dataIndex: 'maxlength',
      key: 'maxlength',
    },
    {
      title: '最短字符数',
      dataIndex: 'minlength',
      key: 'minlength',
    },
    {
      title: '平均字符数',
      dataIndex: 'averagelength',
      key: 'averagelength',
    },
    {
      title: '25%字符数',
      dataIndex: 'twentyfivepercentlength',
      key: 'twentyfivepercentlength',
    },
    {
      title: '50%字符数',
      dataIndex: 'fiftypercentlength',
      key: 'fiftypercentlength',
    },
    {
      title: '75%字符数',
      dataIndex: 'seventyfivepercentlength',
      key: 'seventyfivepercentlength',
    },
  ];
  

  const [responsive, setResponsive] = useState(false);
  return (
    <PageContainer>
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 596);
      }}
    >
      <ProCard
        title="数据概览"
        extra={
          moment().format('YYYY年MM月DD日')
        }
        split={responsive ? 'horizontal' : 'vertical'}
        headerBordered
        bordered
      >
        <ProCard split="horizontal">
          <ProCard split="horizontal">
            <ProCard split="vertical">
              <StatisticCard
                statistic={{
                  title: '最长字符数',
                  value: 15,
                  // description: <Statistic title="较本月平均流量" value="8.04%" trend="down" />,
                }}
              />
              <StatisticCard
                statistic={{
                  title: '最短字符数',
                  value: 5,
                  // description: <Statistic title="月同比" value="8.04%" trend="up" />,
                }}
              />
            </ProCard>
            <ProCard split="vertical">
              <StatisticCard
                statistic={{
                  title: '平均字符数',
                  value: 8.3,
                  // description: <Statistic title="较本月平均流量" value="8.04%" trend="down" />,
                }}
              />
              <StatisticCard
                statistic={{
                  title: 'O总数',
                  value: 10,
                  // description: <Statistic title="月同比" value="8.04%" trend="up" />,
                }}
              />
            </ProCard>
          </ProCard>
          <StatisticCard
            title="不同色块标准"
            chart={
              <ColorWordPlot/>
            }
          />
          <StatisticCard
            title="BIO数目"
            chart={
              // <NERBaseLinePlot/>
              // <NERColumnPlot/>
              <BIOPiePlot/>
              
            }
          />
          <StatisticCard
            title="不同类别BI占比"
            chart={
              // <NERGroupedRosePlot/>
              <BIGroupedColumnPlot/>
            }
          />

        </ProCard>
       <ProCard split="horizontal">
        <StatisticCard
          title="不同类别实体数目"
          chart={
            <NERRadarPlot/>
          }
        />
        <StatisticCard
          title="网络辐射图"
          chart={
            <NERRadialTreeGraphPlot/>
          }
        />
        <StatisticCard
          title="词云"
          chart={
            <NERWordCloud/>
          }
        />
        </ProCard>
      </ProCard>
      {/* <ProCard>
      <Table dataSource={dataSource} columns={columns} />;
      </ProCard> */}
    </RcResizeObserver>
    </PageContainer>
  );
};
// const NerModel: React.FC =()=>{
//   return(
//     <PageContainer>
//       <Row gutter={24}>
//       <Col xl={18} lg={24} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
//         <ProCard>

//         </ProCard>
//       </Col>
//       <Col xl={6} lg={24} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
//         <ProCard>

//         </ProCard>
//       </Col>
//       </Row>
//     </PageContainer>
//   )
// }

export default NerModel;

