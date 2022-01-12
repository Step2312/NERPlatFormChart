import React from 'react';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import NERWordCloud from "@/pages/list/ner/components/NERWordCloud";
import { useState } from 'react';
import ProCard, { StatisticCard } from '@ant-design/pro-card';
import RcResizeObserver from 'rc-resize-observer';
import NERRadarPlot from './components/NERRadar';
import moment from 'moment';
import NERRadialTreeGraphPlot from './components/NERRadialTreeGraph';

import BIOPiePlot from './components/BIOPie';
import BIGroupedColumnPlot from './components/BIGroupedColumn';
import ColorWordPlot from './components/ColorWord';
import NERMultiLinePlot from './components/NERMultiLine';

const { Statistic } = StatisticCard;
const NerModel: React.FC = () => {
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
          {/* <ProCard split="horizontal">
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
          </ProCard> */}
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
      <ProCard>
      {/* <Table dataSource={dataSource} columns={columns} />; */}
      <StatisticCard
          title="实体字符长度信息统计"
          chart={
            <NERMultiLinePlot/>
          }
        />
      
      </ProCard>
    </RcResizeObserver>
    </PageContainer>
  );
};

export default NerModel;

