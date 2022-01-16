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
import NERTable from './components/NERTable';
import { P } from '@antv/g2plot';
import NERStatistic from './components/NERStatistic';

const { Statistic } = StatisticCard;
const NerModel: React.FC = () => {
  const [responsive, setResponsive] = useState(false);
  return (
    <PageContainer>
    {/* <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 596);
      }}
    > */}
      <ProCard
        title="单病历解析"
        extra={
          moment().format('YYYY年MM月DD日')
        }
        split={responsive ? 'horizontal' : 'vertical'}
        headerBordered
        bordered
      >
        <ProCard split="horizontal">
          <ProCard split='horizontal'>
            <StatisticCard
              title="不同色块标准"
              chart={
                <ColorWordPlot/>
              }
            />
            <ProCard split='vertical'>
              <StatisticCard
                title="BIO数目"
                chart={
                  <BIOPiePlot/>
                  
                }
              />
              <StatisticCard
                title="不同类别实体数目"
                chart={
                  <NERRadarPlot/>
                }
              />
            </ProCard>
            <StatisticCard
                title="不同类别BI占比"
                chart={
                  <BIGroupedColumnPlot/>
                }
            />
          </ProCard>
          <ProCard split='vertical'>
            <StatisticCard
              title="词云"
              chart={
                <NERWordCloud/>
              }
            />
            <StatisticCard
              title="网络辐射图"
              chart={
                <NERRadialTreeGraphPlot/>
              }
            />
          </ProCard>
          <ProCard split='horizontal'>
            <StatisticCard
             title="实体字符长度信息统计"
             chart={
               <NERStatistic/>
             }
            />
            <StatisticCard
             title="Top20实体统计"
             chart={
               <NERTable/>
             }
            />
          </ProCard>
        </ProCard>
    </ProCard>
    {/* </RcResizeObserver> */}
    </PageContainer>
  );
};

export default NerModel;

