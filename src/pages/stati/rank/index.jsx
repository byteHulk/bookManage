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

  handleChangeSalesType = (e) => {
    this.setState({
      salesType: e.target.value,
    });
  };
  handleTabChange = (key) => {
    this.setState({
      currentTabKey: key,
    });
  };
  handleRangePickerChange = (rangePickerValue) => {
    const { dispatch } = this.props;
    this.setState({
      rangePickerValue,
    });
    dispatch({
      type: 'stati/fetchSalesData',
    });
  };
  selectDate = (type) => {
    const { dispatch } = this.props;
    this.setState({
      rangePickerValue: getTimeDistance(type),
    });
    dispatch({
      type: 'stati/fetchSalesData',
    });
  };
  isActive = (type) => {
    const { rangePickerValue } = this.state;

    if (!rangePickerValue) {
      return '';
    }

    const value = getTimeDistance(type);

    if (!value) {
      return '';
    }

    if (!rangePickerValue[0] || !rangePickerValue[1]) {
      return '';
    }

    if (
      rangePickerValue[0].isSame(value[0], 'day') &&
      rangePickerValue[1].isSame(value[1], 'day')
    ) {
      return styles.currentDate;
    }

    return '';
  };

  render() {
    const { rangePickerValue, salesType, currentTabKey } = this.state;
    // console.log(this.props)
    // const { dashboardAndanalysis, loading } = this.props;
    const {
      visitData,
      visitData2,
      salesData,
      searchData,
      offlineData,
      offlineChartData,
      salesTypeData,
      salesTypeDataOnline,
      salesTypeDataOffline,
      book,
      press,
      loading
    } = this.props;
    let salesPieData;

    if (salesType === 'all') {
      salesPieData = salesTypeData;
    } else {
      salesPieData = salesType === 'online' ? salesTypeDataOnline : salesTypeDataOffline;
    }

    const menu = (
      <Menu>
        {/* <Menu.Item>操作一</Menu.Item>
        <Menu.Item>操作二</Menu.Item> */}
      </Menu>
    );
    const dropdownGroup = (
      <span className={styles.iconGroup}>
        <Dropdown overlay={menu} placement="bottomRight">
          <EllipsisOutlined />
        </Dropdown>
      </span>
    );
    const activeKey = currentTabKey || (offlineData[0] && offlineData[0].name);
    return (
      <GridContent>
        <React.Fragment>
          <Suspense fallback={<PageLoading />}>
            <IntroduceRow loading={loading} visitData={visitData} />
          </Suspense>
          {/* <Suspense fallback={null}>
            <SalesCard
              rangePickerValue={rangePickerValue}
              salesData={salesData}
              isActive={this.isActive}
              handleRangePickerChange={this.handleRangePickerChange}
              loading={loading}
              selectDate={this.selectDate}
            />
          </Suspense> */}
          <Row
            gutter={24}
            style={{
              marginTop: 24,
            }}
          >
            <Col xl={12} lg={24} md={24} sm={24} xs={24}>
              <Suspense fallback={null}>
                <TopSearch
                  title="热门图书"
                  loading={loading}
                  visitData2={visitData2}
                  searchData={book}
                  dropdownGroup={dropdownGroup}
                />
              </Suspense>
            </Col>
            <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <Suspense fallback={null}>
                <TopSearch
                  title="出版社排行"
                  loading={loading}
                  visitData2={visitData2}
                  searchData={press}
                  dropdownGroup={dropdownGroup}
                />
              </Suspense>
            </Col>
          </Row>
          {/* <Suspense fallback={null}>
            <OfflineData
              activeKey={activeKey}
              loading={loading}
              offlineData={offlineData}
              offlineChartData={offlineChartData}
              handleTabChange={this.handleTabChange}
            />
          </Suspense> */}
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
