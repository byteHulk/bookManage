import React, { useEffect, useState } from 'react';
import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Card, Typography, Alert } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { useIntl, connect, FormattedMessage } from 'umi';
import { PhotoshopPicker } from 'react-color';

const Theme = (props) => {
  const [color, setColor] = useState('#fff');

  useEffect(() => {
    getTheme();
  }, []);

  useEffect(() => {
    setColor(props.color);
    // console.log(props.color,'-')
  }, [props.color]);

  const getTheme = (values) => {
    const { dispatch } = props;
    dispatch({
      type: 'ui/getTheme',
    });
  };

  const setTheme = (values) => {
    // console.log(color)
    const { dispatch } = props;
    dispatch({
      type: 'ui/setTheme',
      payload: {
        color: color,
      },
    });
  };

  const resetTheme = (values) => {
    setColor(props.color);
  };

  const handleChange = (color) => {
    console.log(color)
    setColor(color.hex);
  };

  return (
    <PageHeaderWrapper>
      <Card bordered={false} style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <PhotoshopPicker
          header="主题颜色更换"
          color={color}
          onChange={handleChange}
          onAccept={setTheme}
          onCancel={resetTheme}
        />
      </Card>
    </PageHeaderWrapper>
  );
};

export default connect(({ ui }) => ({
  ...ui,
}))(Theme);
