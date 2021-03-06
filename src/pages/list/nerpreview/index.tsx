import { Alert, Button, Form, Layout, Row, Col } from 'antd';
import type { FC } from 'react';
const { Content } = Layout;
import { ProFormSelect, ProFormTextArea } from '@ant-design/pro-form';
import { useState } from 'react';
import { DefaultFooter } from '@ant-design/pro-layout';
import { useRequest } from 'ahooks';
import { model_available } from '@/pages/list/ner/service';
import request from 'umi-request';
import { NERResult } from '@/pages/list/nerpreview/NERResult';
import { Header } from 'antd/es/layout/layout';

const POSTURL = 'http://yapi.smart-xwork.cn/mock/126975/public_predict';

export const BasicList: FC = () => {
  const { data } = useRequest(model_available);
  const [content, setContent] = useState([]);
  const [resultDisplay, setResultDisplay] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(true);
  const [form] = Form.useForm();
  const options = [];
  if (data !== undefined) {
    for (const i of data.data) {
      options.push({
        label: i.name,
        value: i.value,
      });
    }
  }
  const resetForm = () => {
    form.resetFields();
    setResultDisplay(false);
  };
  return (
    <Layout style={{ height: '100%' }} hasSider={false}>
      <Header style={{ backgroundColor: '#ffffff', height: '100px', padding: 0, margin: 0 }}>
        {/*<Row style={{height:"100%"}}>*/}
        {/*  <Col span={24}>*/}
        {/*    */}
        {/*  </Col>*/}
        {/*</Row>*/}
        {/*<Image src={require("./assets/banner.jpeg")} style={{height:"100%",width:"100%"}}></Image>*/}
        <img src={require('./assets/banner.jpg')} style={{ height: '100%', width: '100%' }} />
        {/*<div style={{backgroundColor:"red",height:"100%"}}>12</div>*/}
      </Header>
      <Content style={{ padding: 0 }}>
        <Form
          name="basic"
          // labelCol={{ span: 16,offset:4 }}
          // wrapperCol={{ span: 16,offset:4 }}
          form={form}
          onFinish={async (v) => {
            // console.log(v)
            request
              .post(POSTURL, {
                data: {
                  text: v.text,
                  model_id: v.model,
                },
              })
              .then(function (response) {
                setContent(response);
                setResultDisplay(true);
              })
              .catch(function (error) {
                setSubmitStatus(false);
                console.log(error);
              });
          }}
        >
          <Form.Item rules={[{ required: true }]} noStyle={true}>
            <ProFormTextArea
              style={{ height: '100%' }}
              name="text"
              label="??????"
              placeholder="?????????????????????..."
              rules={[
                {
                  required: true,
                  message: '?????????????????????!',
                },
              ]}
            />
          </Form.Item>
          <Form.Item rules={[{ required: true }]} noStyle={true}>
            <Row gutter={5}>
              <Col span={12}>
                <ProFormSelect
                  label="??????"
                  name="model"
                  placeholder="?????????????????????..."
                  options={options}
                  rules={[
                    {
                      required: true,
                      message: '?????????????????????!',
                    },
                  ]}
                />
              </Col>
              <Col offset={4}>
                <Button type="primary" htmlType="submit">
                  ????????????
                </Button>
              </Col>
              <Col>
                <Button type="primary" htmlType="button" onClick={resetForm}>
                  ????????????
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
        {resultDisplay ? <NERResult data={content} /> : null}
        {!submitStatus ? <Alert message="??????????????????????????????!" type="error" /> : null}
      </Content>
      <DefaultFooter
        copyright={'?????????????????????  ' + new Date().getFullYear()}
        links={[
          {
            key: 'NERPlatformFronted',
            title: '???????????????????????????',
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
    </Layout>
  );
};

export default BasicList;
