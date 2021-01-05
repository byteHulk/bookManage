import * as stati from '@/services/stati';

const initState = {
  visitData: [],
  visitData2: [],
  salesData: [],
  searchData: [],
  offlineData: [],
  offlineChartData: [],
  salesTypeData: [],
  salesTypeDataOnline: [],
  salesTypeDataOffline: [],
  radarData: [],

  book: [],
  press: [],
};
const Model = {
  namespace: 'stati',
  state: initState,
  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(stati.getBoard);
      console.log(response);
      const { book,press } = response.data
      yield put({
        type: 'save',
        payload: {
          book,
          press,
          visitData: [
            { x: '2020-12-29', y: 7 },
            { x: '2020-12-30', y: 5 },
            { x: '2020-12-31', y: 4 },
            { x: '2021-01-01', y: 2 },
            { x: '2021-01-02', y: 4 },
            { x: '2021-01-03', y: 7 },
            { x: '2021-01-04', y: 5 },
            { x: '2021-01-05', y: 6 },
            { x: '2021-01-06', y: 5 },
            { x: '2021-01-07', y: 9 },
            { x: '2021-01-08', y: 6 },
            { x: '2021-01-09', y: 3 },
            { x: '2021-01-10', y: 1 },
            { x: '2021-01-11', y: 5 },
            { x: '2021-01-12', y: 3 },
            { x: '2021-01-13', y: 6 },
            { x: '2021-01-14', y: 5 },
          ],
          visitData2: [
            { x: '2020-12-29', y: 1 },
            { x: '2020-12-30', y: 6 },
            { x: '2020-12-31', y: 4 },
            { x: '2021-01-01', y: 8 },
            { x: '2021-01-02', y: 3 },
            { x: '2021-01-03', y: 7 },
            { x: '2021-01-04', y: 2 },
          ],
          salesData: [
            { x: '1月', y: 1112 },
            { x: '2月', y: 1131 },
            { x: '3月', y: 615 },
            { x: '4月', y: 728 },
            { x: '5月', y: 605 },
            { x: '6月', y: 954 },
            { x: '7月', y: 1124 },
            { x: '8月', y: 658 },
            { x: '9月', y: 914 },
            { x: '10月', y: 638 },
            { x: '11月', y: 618 },
            { x: '12月', y: 431 },
          ],
          searchData: [
            { index: 1, keyword: '搜索关键词-0', count: 186, range: 50, status: 1 },
            { index: 2, keyword: '搜索关键词-1', count: 492, range: 47, status: 0 },
            { index: 3, keyword: '搜索关键词-2', count: 351, range: 41, status: 0 },
            { index: 4, keyword: '搜索关键词-3', count: 410, range: 6, status: 1 },
            { index: 5, keyword: '搜索关键词-4', count: 291, range: 26, status: 0 },
            { index: 6, keyword: '搜索关键词-5', count: 640, range: 45, status: 0 },
            { index: 7, keyword: '搜索关键词-6', count: 212, range: 77, status: 1 },
            { index: 8, keyword: '搜索关键词-7', count: 904, range: 69, status: 0 },
            { index: 9, keyword: '搜索关键词-8', count: 976, range: 20, status: 1 },
            { index: 10, keyword: '搜索关键词-9', count: 96, range: 13, status: 1 },
            { index: 11, keyword: '搜索关键词-10', count: 418, range: 77, status: 1 },
            { index: 12, keyword: '搜索关键词-11', count: 174, range: 57, status: 1 },
            { index: 13, keyword: '搜索关键词-12', count: 480, range: 28, status: 0 },
            { index: 14, keyword: '搜索关键词-13', count: 288, range: 68, status: 0 },
            { index: 15, keyword: '搜索关键词-14', count: 393, range: 25, status: 0 },
            { index: 16, keyword: '搜索关键词-15', count: 12, range: 33, status: 0 },
            { index: 17, keyword: '搜索关键词-16', count: 138, range: 24, status: 1 },
            { index: 18, keyword: '搜索关键词-17', count: 524, range: 89, status: 1 },
            { index: 19, keyword: '搜索关键词-18', count: 68, range: 78, status: 0 },
            { index: 20, keyword: '搜索关键词-19', count: 654, range: 91, status: 1 },
            { index: 21, keyword: '搜索关键词-20', count: 521, range: 46, status: 1 },
            { index: 22, keyword: '搜索关键词-21', count: 661, range: 46, status: 1 },
            { index: 23, keyword: '搜索关键词-22', count: 306, range: 46, status: 0 },
            { index: 24, keyword: '搜索关键词-23', count: 322, range: 36, status: 0 },
            { index: 25, keyword: '搜索关键词-24', count: 91, range: 82, status: 0 },
            { index: 26, keyword: '搜索关键词-25', count: 485, range: 81, status: 1 },
            { index: 27, keyword: '搜索关键词-26', count: 942, range: 59, status: 1 },
            { index: 28, keyword: '搜索关键词-27', count: 847, range: 51, status: 1 },
            { index: 29, keyword: '搜索关键词-28', count: 938, range: 2, status: 0 },
            { index: 30, keyword: '搜索关键词-29', count: 7, range: 91, status: 0 },
            { index: 31, keyword: '搜索关键词-30', count: 70, range: 0, status: 1 },
            { index: 32, keyword: '搜索关键词-31', count: 691, range: 2, status: 0 },
            { index: 33, keyword: '搜索关键词-32', count: 293, range: 89, status: 1 },
            { index: 34, keyword: '搜索关键词-33', count: 886, range: 8, status: 1 },
            { index: 35, keyword: '搜索关键词-34', count: 303, range: 17, status: 0 },
            { index: 36, keyword: '搜索关键词-35', count: 326, range: 97, status: 1 },
            { index: 37, keyword: '搜索关键词-36', count: 647, range: 83, status: 1 },
            { index: 38, keyword: '搜索关键词-37', count: 870, range: 88, status: 0 },
            { index: 39, keyword: '搜索关键词-38', count: 875, range: 57, status: 0 },
            { index: 40, keyword: '搜索关键词-39', count: 792, range: 17, status: 0 },
            { index: 41, keyword: '搜索关键词-40', count: 960, range: 71, status: 1 },
            { index: 42, keyword: '搜索关键词-41', count: 691, range: 36, status: 1 },
            { index: 43, keyword: '搜索关键词-42', count: 46, range: 51, status: 1 },
            { index: 44, keyword: '搜索关键词-43', count: 854, range: 89, status: 0 },
            { index: 45, keyword: '搜索关键词-44', count: 353, range: 41, status: 0 },
            { index: 46, keyword: '搜索关键词-45', count: 902, range: 52, status: 0 },
            { index: 47, keyword: '搜索关键词-46', count: 325, range: 46, status: 1 },
            { index: 48, keyword: '搜索关键词-47', count: 942, range: 66, status: 1 },
            { index: 49, keyword: '搜索关键词-48', count: 957, range: 79, status: 0 },
            { index: 50, keyword: '搜索关键词-49', count: 915, range: 34, status: 1 },
          ],
          offlineData: [
            { name: 'Stores 0', cvr: 0.6 },
            { name: 'Stores 1', cvr: 0.8 },
            { name: 'Stores 2', cvr: 0.7 },
            { name: 'Stores 3', cvr: 0.6 },
            { name: 'Stores 4', cvr: 0.9 },
            { name: 'Stores 5', cvr: 0.8 },
            { name: 'Stores 6', cvr: 0.8 },
            { name: 'Stores 7', cvr: 0.4 },
            { name: 'Stores 8', cvr: 0.3 },
            { name: 'Stores 9', cvr: 0.4 },
          ],
          offlineChartData: [
            { x: 1609271431315, y1: 85, y2: 66 },
            { x: 1609273231315, y1: 26, y2: 72 },
            { x: 1609275031315, y1: 40, y2: 80 },
            { x: 1609276831315, y1: 22, y2: 88 },
            { x: 1609278631315, y1: 17, y2: 23 },
            { x: 1609280431315, y1: 60, y2: 26 },
            { x: 1609282231315, y1: 32, y2: 54 },
            { x: 1609284031315, y1: 60, y2: 44 },
            { x: 1609285831315, y1: 100, y2: 40 },
            { x: 1609287631315, y1: 67, y2: 88 },
            { x: 1609289431315, y1: 82, y2: 103 },
            { x: 1609291231315, y1: 26, y2: 58 },
            { x: 1609293031315, y1: 85, y2: 70 },
            { x: 1609294831315, y1: 38, y2: 35 },
            { x: 1609296631315, y1: 11, y2: 75 },
            { x: 1609298431315, y1: 99, y2: 47 },
            { x: 1609300231315, y1: 11, y2: 103 },
            { x: 1609302031315, y1: 90, y2: 15 },
            { x: 1609303831315, y1: 98, y2: 44 },
            { x: 1609305631315, y1: 100, y2: 29 },
          ],
          salesTypeData: [
            { x: '家用电器', y: 4544 },
            { x: '食用酒水', y: 3321 },
            { x: '个护健康', y: 3113 },
            { x: '服饰箱包', y: 2341 },
            { x: '母婴产品', y: 1231 },
            { x: '其他', y: 1231 },
          ],
          salesTypeDataOnline: [
            { x: '家用电器', y: 244 },
            { x: '食用酒水', y: 321 },
            { x: '个护健康', y: 311 },
            { x: '服饰箱包', y: 41 },
            { x: '母婴产品', y: 121 },
            { x: '其他', y: 111 },
          ],
          salesTypeDataOffline: [
            { x: '家用电器', y: 99 },
            { x: '食用酒水', y: 188 },
            { x: '个护健康', y: 344 },
            { x: '服饰箱包', y: 255 },
            { x: '其他', y: 65 },
          ],
          radarData: [
            { name: '个人', label: '引用', value: 10 },
            { name: '个人', label: '口碑', value: 8 },
            { name: '个人', label: '产量', value: 4 },
            { name: '个人', label: '贡献', value: 5 },
            { name: '个人', label: '热度', value: 7 },
            { name: '团队', label: '引用', value: 3 },
            { name: '团队', label: '口碑', value: 9 },
            { name: '团队', label: '产量', value: 6 },
            { name: '团队', label: '贡献', value: 3 },
            { name: '团队', label: '热度', value: 1 },
            { name: '部门', label: '引用', value: 4 },
            { name: '部门', label: '口碑', value: 1 },
            { name: '部门', label: '产量', value: 6 },
            { name: '部门', label: '贡献', value: 5 },
            { name: '部门', label: '热度', value: 7 },
          ],
        },
      });
    },

    *fetchSalesData(_, { call, put }) {
      // const response = yield call(fakeChartData);
      yield put({
        type: 'save',
        payload: {
          salesData: {
            visitData: [
              { x: '2020-12-29', y: 7 },
              { x: '2020-12-30', y: 5 },
              { x: '2020-12-31', y: 4 },
              { x: '2021-01-01', y: 2 },
              { x: '2021-01-02', y: 4 },
              { x: '2021-01-03', y: 7 },
              { x: '2021-01-04', y: 5 },
              { x: '2021-01-05', y: 6 },
              { x: '2021-01-06', y: 5 },
              { x: '2021-01-07', y: 9 },
              { x: '2021-01-08', y: 6 },
              { x: '2021-01-09', y: 3 },
              { x: '2021-01-10', y: 1 },
              { x: '2021-01-11', y: 5 },
              { x: '2021-01-12', y: 3 },
              { x: '2021-01-13', y: 6 },
              { x: '2021-01-14', y: 5 },
            ],
            visitData2: [
              { x: '2020-12-29', y: 1 },
              { x: '2020-12-30', y: 6 },
              { x: '2020-12-31', y: 4 },
              { x: '2021-01-01', y: 8 },
              { x: '2021-01-02', y: 3 },
              { x: '2021-01-03', y: 7 },
              { x: '2021-01-04', y: 2 },
            ],
            salesData: [
              { x: '1月', y: 1112 },
              { x: '2月', y: 1131 },
              { x: '3月', y: 615 },
              { x: '4月', y: 728 },
              { x: '5月', y: 605 },
              { x: '6月', y: 954 },
              { x: '7月', y: 1124 },
              { x: '8月', y: 658 },
              { x: '9月', y: 914 },
              { x: '10月', y: 638 },
              { x: '11月', y: 618 },
              { x: '12月', y: 431 },
            ],
            searchData: [
              { index: 1, keyword: '搜索关键词-0', count: 186, range: 50, status: 1 },
              { index: 2, keyword: '搜索关键词-1', count: 492, range: 47, status: 0 },
              { index: 3, keyword: '搜索关键词-2', count: 351, range: 41, status: 0 },
              { index: 4, keyword: '搜索关键词-3', count: 410, range: 6, status: 1 },
              { index: 5, keyword: '搜索关键词-4', count: 291, range: 26, status: 0 },
              { index: 6, keyword: '搜索关键词-5', count: 640, range: 45, status: 0 },
              { index: 7, keyword: '搜索关键词-6', count: 212, range: 77, status: 1 },
              { index: 8, keyword: '搜索关键词-7', count: 904, range: 69, status: 0 },
              { index: 9, keyword: '搜索关键词-8', count: 976, range: 20, status: 1 },
              { index: 10, keyword: '搜索关键词-9', count: 96, range: 13, status: 1 },
              { index: 11, keyword: '搜索关键词-10', count: 418, range: 77, status: 1 },
              { index: 12, keyword: '搜索关键词-11', count: 174, range: 57, status: 1 },
              { index: 13, keyword: '搜索关键词-12', count: 480, range: 28, status: 0 },
              { index: 14, keyword: '搜索关键词-13', count: 288, range: 68, status: 0 },
              { index: 15, keyword: '搜索关键词-14', count: 393, range: 25, status: 0 },
              { index: 16, keyword: '搜索关键词-15', count: 12, range: 33, status: 0 },
              { index: 17, keyword: '搜索关键词-16', count: 138, range: 24, status: 1 },
              { index: 18, keyword: '搜索关键词-17', count: 524, range: 89, status: 1 },
              { index: 19, keyword: '搜索关键词-18', count: 68, range: 78, status: 0 },
              { index: 20, keyword: '搜索关键词-19', count: 654, range: 91, status: 1 },
              { index: 21, keyword: '搜索关键词-20', count: 521, range: 46, status: 1 },
              { index: 22, keyword: '搜索关键词-21', count: 661, range: 46, status: 1 },
              { index: 23, keyword: '搜索关键词-22', count: 306, range: 46, status: 0 },
              { index: 24, keyword: '搜索关键词-23', count: 322, range: 36, status: 0 },
              { index: 25, keyword: '搜索关键词-24', count: 91, range: 82, status: 0 },
              { index: 26, keyword: '搜索关键词-25', count: 485, range: 81, status: 1 },
              { index: 27, keyword: '搜索关键词-26', count: 942, range: 59, status: 1 },
              { index: 28, keyword: '搜索关键词-27', count: 847, range: 51, status: 1 },
              { index: 29, keyword: '搜索关键词-28', count: 938, range: 2, status: 0 },
              { index: 30, keyword: '搜索关键词-29', count: 7, range: 91, status: 0 },
              { index: 31, keyword: '搜索关键词-30', count: 70, range: 0, status: 1 },
              { index: 32, keyword: '搜索关键词-31', count: 691, range: 2, status: 0 },
              { index: 33, keyword: '搜索关键词-32', count: 293, range: 89, status: 1 },
              { index: 34, keyword: '搜索关键词-33', count: 886, range: 8, status: 1 },
              { index: 35, keyword: '搜索关键词-34', count: 303, range: 17, status: 0 },
              { index: 36, keyword: '搜索关键词-35', count: 326, range: 97, status: 1 },
              { index: 37, keyword: '搜索关键词-36', count: 647, range: 83, status: 1 },
              { index: 38, keyword: '搜索关键词-37', count: 870, range: 88, status: 0 },
              { index: 39, keyword: '搜索关键词-38', count: 875, range: 57, status: 0 },
              { index: 40, keyword: '搜索关键词-39', count: 792, range: 17, status: 0 },
              { index: 41, keyword: '搜索关键词-40', count: 960, range: 71, status: 1 },
              { index: 42, keyword: '搜索关键词-41', count: 691, range: 36, status: 1 },
              { index: 43, keyword: '搜索关键词-42', count: 46, range: 51, status: 1 },
              { index: 44, keyword: '搜索关键词-43', count: 854, range: 89, status: 0 },
              { index: 45, keyword: '搜索关键词-44', count: 353, range: 41, status: 0 },
              { index: 46, keyword: '搜索关键词-45', count: 902, range: 52, status: 0 },
              { index: 47, keyword: '搜索关键词-46', count: 325, range: 46, status: 1 },
              { index: 48, keyword: '搜索关键词-47', count: 942, range: 66, status: 1 },
              { index: 49, keyword: '搜索关键词-48', count: 957, range: 79, status: 0 },
              { index: 50, keyword: '搜索关键词-49', count: 915, range: 34, status: 1 },
            ],
            offlineData: [
              { name: 'Stores 0', cvr: 0.6 },
              { name: 'Stores 1', cvr: 0.8 },
              { name: 'Stores 2', cvr: 0.7 },
              { name: 'Stores 3', cvr: 0.6 },
              { name: 'Stores 4', cvr: 0.9 },
              { name: 'Stores 5', cvr: 0.8 },
              { name: 'Stores 6', cvr: 0.8 },
              { name: 'Stores 7', cvr: 0.4 },
              { name: 'Stores 8', cvr: 0.3 },
              { name: 'Stores 9', cvr: 0.4 },
            ],
            offlineChartData: [
              { x: 1609271431315, y1: 85, y2: 66 },
              { x: 1609273231315, y1: 26, y2: 72 },
              { x: 1609275031315, y1: 40, y2: 80 },
              { x: 1609276831315, y1: 22, y2: 88 },
              { x: 1609278631315, y1: 17, y2: 23 },
              { x: 1609280431315, y1: 60, y2: 26 },
              { x: 1609282231315, y1: 32, y2: 54 },
              { x: 1609284031315, y1: 60, y2: 44 },
              { x: 1609285831315, y1: 100, y2: 40 },
              { x: 1609287631315, y1: 67, y2: 88 },
              { x: 1609289431315, y1: 82, y2: 103 },
              { x: 1609291231315, y1: 26, y2: 58 },
              { x: 1609293031315, y1: 85, y2: 70 },
              { x: 1609294831315, y1: 38, y2: 35 },
              { x: 1609296631315, y1: 11, y2: 75 },
              { x: 1609298431315, y1: 99, y2: 47 },
              { x: 1609300231315, y1: 11, y2: 103 },
              { x: 1609302031315, y1: 90, y2: 15 },
              { x: 1609303831315, y1: 98, y2: 44 },
              { x: 1609305631315, y1: 100, y2: 29 },
            ],
            salesTypeData: [
              { x: '家用电器', y: 4544 },
              { x: '食用酒水', y: 3321 },
              { x: '个护健康', y: 3113 },
              { x: '服饰箱包', y: 2341 },
              { x: '母婴产品', y: 1231 },
              { x: '其他', y: 1231 },
            ],
            salesTypeDataOnline: [
              { x: '家用电器', y: 244 },
              { x: '食用酒水', y: 321 },
              { x: '个护健康', y: 311 },
              { x: '服饰箱包', y: 41 },
              { x: '母婴产品', y: 121 },
              { x: '其他', y: 111 },
            ],
            salesTypeDataOffline: [
              { x: '家用电器', y: 99 },
              { x: '食用酒水', y: 188 },
              { x: '个护健康', y: 344 },
              { x: '服饰箱包', y: 255 },
              { x: '其他', y: 65 },
            ],
            radarData: [
              { name: '个人', label: '引用', value: 10 },
              { name: '个人', label: '口碑', value: 8 },
              { name: '个人', label: '产量', value: 4 },
              { name: '个人', label: '贡献', value: 5 },
              { name: '个人', label: '热度', value: 7 },
              { name: '团队', label: '引用', value: 3 },
              { name: '团队', label: '口碑', value: 9 },
              { name: '团队', label: '产量', value: 6 },
              { name: '团队', label: '贡献', value: 3 },
              { name: '团队', label: '热度', value: 1 },
              { name: '部门', label: '引用', value: 4 },
              { name: '部门', label: '口碑', value: 1 },
              { name: '部门', label: '产量', value: 6 },
              { name: '部门', label: '贡献', value: 5 },
              { name: '部门', label: '热度', value: 7 },
            ],
          }.salesData,
        },
      });
    },
  },
  reducers: {
    save(state, { payload }) {
      console.log(payload);
      return { ...state, ...payload };
    },

    clear() {
      return initState;
    },
  },
};
export default Model;