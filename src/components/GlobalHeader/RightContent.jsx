import { Tooltip, Tag } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { connect, SelectLang } from 'umi';
import Avatar from './AvatarDropdown';
import Link from 'umi';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';
const ENVTagColor = {
  dev: 'orange',
  test: 'green',
  pre: '#87d068',
};

const GlobalHeaderRight = (props) => {
  const { theme, layout } = props;
  let className = styles.right;

  if (theme === 'dark' && layout === 'top') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <div className={className}>
      <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder="站内搜索"
        // defaultValue="广告屏更换"
        options={[
          {
            label: <Link to="/ui/adv">广告屏更换</Link>,
            value: '广告屏更换',
          },
          {
            label: <a href="next.ant.design">轮播图更换</a>,
            value: '轮播图更换',
          },
          {
            label: <a href="https://protable.ant.design/">主题颜色更换</a>,
            value: '主题颜色更换',
          },
          {
            label: <a href="https://prolayout.ant.design/">借阅排行</a>,
            value: '借阅排行',
          },
          {
            label: <a href="https://prolayout.ant.design/">书架盘点</a>,
            value: '书架盘点',
          },
        ]} // onSearch={value => {
        //   //console.log('input', value);
        // }}
      />
      {/* <Tooltip title="使用文档">
        <a
          style={{
            color: 'inherit',
          }}
          target="_blank"
          href="https://pro.ant.design/docs/getting-started"
          rel="noopener noreferrer"
          className={styles.action}
        >
          <QuestionCircleOutlined />
        </a>
      </Tooltip> */}
      <Avatar />
      {REACT_APP_ENV && (
        <span>
          <Tag color={ENVTagColor[REACT_APP_ENV]}>{REACT_APP_ENV}</Tag>
        </span>
      )}
      {/* <SelectLang className={styles.action} /> */}
    </div>
  );
};

export default connect(({ settings }) => ({
  theme: settings.navTheme,
  layout: settings.layout,
}))(GlobalHeaderRight);
