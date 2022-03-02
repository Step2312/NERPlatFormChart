import {Col, Empty, Form, Image, Layout, Row} from 'antd';
import type { FC } from 'react';
const { Header, Content, Footer } = Layout;
import NERBanner from './assets/img.png'
import {ProFormSelect, ProFormTextArea} from "@ant-design/pro-form";
import React from "react";

const layout = {
  labelCol:{span:8},
  wrapperCol:{span:16}
}
export const BasicList: FC = () => {
  return(
    <Layout>
      <Header>
        {/*<Image src={NERBanner} width="100%"></Image>*/}
        Header
      </Header>
      <Content>
        <Form {...layout}>
          <Form.Item rules={[{required:true}]}>
            <ProFormTextArea
              name="medicaltext"
              label="内容"
              placeholder="请输入病历内容"
              rules={[
                {
                  required: true,
                  message: '请输入病历文本!',
                },
              ]}
            />
          </Form.Item>
          <Form.Item rules={[{required:true}]}>
            <ProFormSelect
              label="模型"
              name="nermodel"
              // options={options}
              rules={[
                {
                  required:true,
                  message:'选择使用的模型!'
                }
              ]}
            />
          </Form.Item>
        </Form>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  )
};

export default BasicList;
