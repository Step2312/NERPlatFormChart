import React, { FC } from 'react';
import ProCard, { StatisticCard } from '@ant-design/pro-card';
import ColorWordPlot from '@/pages/list/nerpreview/components/ColorWord';
import { BackTop, Col, Divider, Row } from 'antd';
import BIOPiePlot from '@/pages/list/nerpreview/components/BIOPie';
import NERRadarPlot from '@/pages/list/nerpreview/components/NERRadar';
import BColumnplot from '@/pages/list/nerpreview/components/BColumnplot';
import NERWordCloudPlot from '@/pages/list/nerpreview/components/NERWordCloud';
import NERRadialTreeGraphPlot from '@/pages/list/nerpreview/components/NERRadialTreeGraph';
import NERStatistic from '@/pages/list/nerpreview/components/NERStatistic';
import NERTable from '@/pages/list/nerpreview/components/NERTable';
import { DefaultFooter } from '@ant-design/pro-layout';

export const NERResult: FC = (props) => {
  console.log(props.data);
  return (
    <ProCard split="horizontal" bordered>
      <Divider>解析结果</Divider>
      <ProCard title="标注实体">
        <StatisticCard chart={<ColorWordPlot data={props.data} />} />
      </ProCard>
      <ProCard split="vertical">
        <Row>
          <Col span={12}>
            <ProCard title="BIO数目" bordered>
              <StatisticCard chart={<BIOPiePlot data={props.data} />} />
            </ProCard>
          </Col>
          <Col span={12}>
            <ProCard title="不同类别实体数目" bordered>
              <StatisticCard chart={<NERRadarPlot data={props.data} />} />
            </ProCard>
          </Col>
        </Row>
      </ProCard>
      <ProCard split="horizontal">
        <ProCard title="不同实体占比">
          <StatisticCard
            chart={
              // <BIGroupedColumnPlot data={content}/>
              <BColumnplot data={props.data} />
            }
          />
        </ProCard>
      </ProCard>
      <ProCard split="horizontal">
        <Row>
          <Col span={12}>
            <ProCard title="词云">
              <StatisticCard chart={<NERWordCloudPlot data={props.data} />} />
            </ProCard>
          </Col>
          <Col span={12}>
            <ProCard title="网络图" bordered>
              <StatisticCard chart={<NERRadialTreeGraphPlot data={props.data} />} />
            </ProCard>
          </Col>
        </Row>
      </ProCard>
      <ProCard split="horizontal" title="字符长度信息统计">
        {/*unique key*/}
        <NERStatistic data={props.data} />
      </ProCard>
      <ProCard title="Top20实体统计">
        {/*<NERTable data={content}/>*/}
        <NERTable data={props.data} />
      </ProCard>
      <DefaultFooter
        copyright={'南京中医药大学' + new Date().getFullYear()}
        links={[
          {
            key: 'NERPlatformFronted',
            title: '脑卒中文本解析平台',
            href: 'https://pro.ant.design',
            blankTarget: true,
          },
          {
            key: 'author',
            title: 'xxx',
            href: 'https://github.com/ant-design/ant-design-pro',
            blankTarget: true,
          },
          {
            key: 'team',
            title: 'xxx',
            href: 'https://ant.design',
            blankTarget: true,
          },
        ]}
      />
      <BackTop>
        <div
          style={{
            height: 40,
            width: 40,
            lineHeight: '40px',
            borderRadius: 4,
            backgroundColor: '#1088e9',
            color: '#fff',
            textAlign: 'center',
            fontSize: 14,
          }}
        >
          UP
        </div>
        {/* <UpSquareTwoTone style={{height: 40,width: 40,lineHeight: '40px'}}/> */}
      </BackTop>
    </ProCard>
  );
};

export default NERResult;
