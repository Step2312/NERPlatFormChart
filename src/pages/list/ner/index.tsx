import React, { useRef, useState } from 'react';
import type { FormInstance } from 'antd';
import { BackTop, Col, Row } from 'antd';
import ProCard from '@ant-design/pro-card';
import { PageContainer } from '@ant-design/pro-layout';
import { ProFormTextArea, StepsForm, ProFormSelect } from '@ant-design/pro-form';
import { StatisticCard } from '@ant-design/pro-card';
import NERRadarPlot from './components/NERRadar';
import NERRadialTreeGraphPlot from './components/NERRadialTreeGraph';
import BIOPiePlot from './components/BIOPie';
// import BIGroupedColumnPlot from './components/BIGroupedColumn';
import ColorWordPlot from './components/ColorWord';
import NERTable from './components/NERTable';
import NERStatistic from './components/NERStatistic';
import NERWordCloudPlot from './components/NERWordCloud';
import request from 'umi-request';
import { useRequest } from 'ahooks';
import { model_available } from '@/pages/list/ner/service';
import { NERType } from '@/pages/list/ner/data';
import BColumnplot from '@/pages/list/ner/components/BColumnplot';

const NerModel: React.FC<Record<string, any>> = () => {
  const [current, setCurrent] = useState<number>(0);
  const formRef = useRef<FormInstance>();
  const [content, setContent] = useState<NERType[]>([]);
  const { data } = useRequest(model_available);
  const options = [];
  if (data !== undefined) {
    for (const i of data.data) {
      options.push({
        label: i.name,
        value: i.value,
      });
    }
  }
  return (
    <PageContainer>
      <ProCard bordered={false}>
        <StepsForm
          current={current}
          onCurrentChange={setCurrent}
          containerStyle={{ width: '100%' }}
          submitter={{
            render: (props, dom) => {
              if (props.step === 1) {
                return null;
              }
              return dom;
            },
          }}
        >
          <StepsForm.StepForm
            formRef={formRef}
            title="输入解析信息"
            onFinish={async (values) => {
              // console.log(values)
              request
                .post('http://yapi.smart-xwork.cn/mock/126975/public_predict', {
                  data: {
                    text: values.medicaltext,
                    model_id: values.nermodel,
                  },
                })
                .then(function (response) {
                  setContent(response);
                  // console.log(response)
                })
                .catch(function (error) {
                  console.log(error);
                });
              if (content) {
                return false;
              } else {
                return true;
              }
            }}
          >
            <ProFormTextArea
              name="medicaltext"
              label="内容"
              placeholder="请输入病历内容"
              rules={[
                {
                  required: true,
                  message: '请输入病历文本',
                },
              ]}
            />
            {/*<ProFormText*/}
            {/*  label="模型"*/}
            {/*  name="nermodel"*/}
            {/*  rules={[*/}
            {/*    {*/}
            {/*      required: true,*/}
            {/*      message: '请输入模型名称',*/}
            {/*    },*/}
            {/*  ]}*/}
            {/*  placeholder="请输入模型名称"*/}
            {/*/>*/}
            <ProFormSelect label="模型" name="nermodel" options={options} />
          </StepsForm.StepForm>
          <StepsForm.StepForm title="解析结果">
            <ProCard split="horizontal" bordered>
              <ProCard title="不同颜色标注">
                <StatisticCard chart={<ColorWordPlot data={content} />} />
              </ProCard>
              <ProCard split="vertical">
                <Row>
                  <Col span={12}>
                    <ProCard title="BIO数目" bordered>
                      <StatisticCard chart={<BIOPiePlot data={content} />} />
                    </ProCard>
                  </Col>
                  <Col span={12}>
                    <ProCard title="不同类别实体数目" bordered>
                      <StatisticCard chart={<NERRadarPlot data={content} />} />
                    </ProCard>
                  </Col>
                </Row>
              </ProCard>
              <ProCard split="horizontal">
                <ProCard title="不同实体占比">
                  <StatisticCard
                    chart={
                      // <BIGroupedColumnPlot data={content}/>
                      <BColumnplot data={content} />
                    }
                  />
                </ProCard>
              </ProCard>
              <ProCard split="horizontal">
                <Row>
                  <Col span={12}>
                    <ProCard title="词云">
                      <StatisticCard chart={<NERWordCloudPlot data={content} />} />
                    </ProCard>
                  </Col>
                  <Col span={12}>
                    <ProCard title="网络图" bordered>
                      <StatisticCard chart={<NERRadialTreeGraphPlot data={content} />} />
                    </ProCard>
                  </Col>
                </Row>
              </ProCard>
              <ProCard split="horizontal" title="字符长度信息统计">
                {/*unique key*/}
                <NERStatistic data={content} />
              </ProCard>
              <ProCard title="Top20实体统计">
                <NERTable data={content} />
              </ProCard>
            </ProCard>
          </StepsForm.StepForm>
        </StepsForm>
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
    </PageContainer>
  );
};

export default NerModel;
