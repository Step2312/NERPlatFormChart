import {Empty, Layout} from 'antd';
import type { FC } from 'react';
const { Header, Content, Footer } = Layout;



export const BasicList: FC = () => {
  return(
    <Layout>
      {/*<Header>Header</Header>*/}
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  )
};

export default BasicList;
