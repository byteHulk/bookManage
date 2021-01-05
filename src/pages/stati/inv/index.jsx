import { EllipsisOutlined } from '@ant-design/icons';
import { Col, Dropdown, Menu, Row } from 'antd';
import React, { Component, Suspense } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { connect } from 'umi';
import PageLoading from '../../../components/PageLoading';
import { getTimeDistance } from '../../../utils/utils';
import styles from './index.less'
const IntroduceRow = React.lazy(() => import('../../../components/IntroduceRow'));
const SalesCard = React.lazy(() => import('../../../components/SalesCard'));
const TopSearch = React.lazy(() => import('../../../components/TopSearch'));
const ProportionSales = React.lazy(() => import('../../../components/ProportionSales'));
const OfflineData = React.lazy(() => import('../../../components/OfflineData'));

class Analysis extends Component {
  state = {
    salesType: 'all',
    currentTabKey: '',
    rangePickerValue: getTimeDistance('year'),
  };
  reqRef = 0;
  timeoutId = 0;

  componentDidMount() {
    const { dispatch } = this.props;
    this.reqRef = requestAnimationFrame(() => {
      dispatch({
        type: 'stati/fetch',
      });
    });
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'stati/clear',
    });
    cancelAnimationFrame(this.reqRef);
    clearTimeout(this.timeoutId);
  }

  handleTabChange = (key) => {
    this.setState({
      currentTabKey: key,
    });
  };


  render() {
    const { currentTabKey } = this.state;
    const {
      offlineData,
      offlineChartData,
      loading
    } = this.props;

    const activeKey = currentTabKey || (offlineData[0] && offlineData[0].name);
    return (
      <GridContent>
        <React.Fragment>
          <Suspense fallback={null}>
            <OfflineData
              activeKey={activeKey}
              loading={loading}
              offlineData={offlineData}
              offlineChartData={offlineChartData}
              handleTabChange={this.handleTabChange}
            />
          </Suspense>
        </React.Fragment>
      </GridContent>
    );
  }
}

export default connect(({ stati,loading }) => ({
  ...stati,
  // loading: loading.effects['stati/fetch'],
  loading: loading.global,
}))(Analysis);
