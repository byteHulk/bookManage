import { stringify } from 'querystring';
import { history } from 'umi';
import * as ui from '@/services/ui';
import { message } from 'antd';

const Model = {
  namespace: 'ui',
  state: {
    color: '#fff',
  },
  effects: {
    *getTheme({ payload }, { call, put }) {
      const response = yield call(ui.getTheme);
      yield put({
        type: 'changeColor',
        payload: response,
      })
    },
    *setTheme({ payload }, { call, put }) {
      console.log(payload,'set')
      const response = yield call(ui.setTheme,payload);
      message.success('主题更换成功')
      yield put({
        type: 'changeColor',
        payload: response,
      })
    },
    logout() {
      const { redirect } = getPageQuery(); // Note: There may be security issues, please note

      if (window.location.pathname !== '/user/login' && !redirect) {
        history.replace({
          pathname: '/user/login',
          search: stringify({
            redirect: window.location.href,
          }),
        });
      }
    },
  },
  reducers: {
    changeColor(state, { payload }) {
      return { ...state, color: payload.data};
    },
  },
};
export default Model;
