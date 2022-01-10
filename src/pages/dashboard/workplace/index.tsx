import type { FC } from 'react';
import { Avatar, Card, Col, List, Skeleton, Row, Statistic, Empty } from 'antd';
// import { Radar } from '@ant-design/charts';

import { Link, useRequest } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import moment from 'moment';
// import EditableLinkGroup from './components/EditableLinkGroup';
import styles from './style.less';
import type { ActivitiesType, CurrentUser } from './data.d';
import { queryProjectNotice, queryActivities, fakeChartData } from './service';

const PageHeaderContent: FC<{ currentUser: Partial<CurrentUser> }> = ({ currentUser }) => {
  const loading = currentUser && Object.keys(currentUser).length;
  if (!loading) {
    return <Skeleton avatar paragraph={{ rows: 1 }} active />;
  }
  return (
    <div className={styles.pageHeaderContent}>
      <div className={styles.avatar}>
        <Avatar size="large" src={currentUser.avatar} />
      </div>
      <div className={styles.content}>
        <div className={styles.contentTitle}>
          早安，
          {currentUser.name}
          ，祝你开心每一天！
        </div>
        <div>
          {currentUser.title} |{currentUser.group}
        </div>
      </div>
    </div>
  );
};

// const ExtraContent: FC<Record<string, any>> = () => (
//   <div className={styles.extraContent}>
//     <div className={styles.statItem}>
//       <Statistic title="A" value={56} />
//     </div>
//     <div className={styles.statItem}>
//       <Statistic title="B" value={8} suffix="/ 24" />
//     </div>
//     <div className={styles.statItem}>
//       <Statistic title="C" value={2223} />
//     </div>
//   </div>
// );

const Workplace: FC = () => {
  // const { loading: projectLoading, data: projectNotice = [] } = useRequest(queryProjectNotice);
  // const { loading: activitiesLoading, data: activities = [] } = useRequest(queryActivities);
  // const { data } = useRequest(fakeChartData);

  // const renderActivities = (item: ActivitiesType) => {
  //   const events = item.template.split(/@\{([^{}]*)\}/gi).map((key) => {
  //     if (item[key]) {
  //       return (
  //         <a href={item[key].link} key={item[key].name}>
  //           {item[key].name}
  //         </a>
  //       );
  //     }
  //     return key;
  //   });
  //   return (
  //     <List.Item key={item.id}>
  //       <List.Item.Meta
  //         avatar={<Avatar src={item.user.avatar} />}
  //         title={
  //           <span>
  //             <a className={styles.username}>{item.user.name}</a>
  //             &nbsp;
  //             <span className={styles.event}>{events}</span>
  //           </span>
  //         }
  //         description={
  //           <span className={styles.datetime} title={item.updatedAt}>
  //             {moment(item.updatedAt).fromNow()}
  //           </span>
  //         }
  //       />
  //     </List.Item>
  //   );
  // };

  return (
    <PageContainer
      content={
        <PageHeaderContent
          currentUser={{
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
            name: '吴彦祖',
            userid: '2021****',
            email: 'xxx@njucm.edu.cn',
            signature: '自信 敬业',
            title: '学生',
            group: 'NJUCM',
          }}
        />
      }
      // extraContent={<ExtraContent />}
    >
      <Empty/>
    </PageContainer>
  );
};

export default Workplace;
