export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/login',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              {
                path: '/',
                redirect: '/stati/rank',
              },
              {
                path: '/stati',
                name: '数据统计',
                icon: 'crown',
                authority: ['admin'],
                routes: [
                  {
                    path: '/stati/rank',
                    name: '借阅分析',
                    icon: 'smile',
                    component: './stati/rank',
                    authority: ['admin'],
                  },
                  {
                    path: '/stati/inv',
                    name: '书架盘点',
                    icon: 'smile',
                    component: './stati/inv',
                    authority: ['admin'],
                  },
                ],
              },
              {
                path: '/ui',
                name: '界面管理',
                icon: 'crown',
                authority: ['admin'],
                routes: [
                  {
                    path: '/ui/adv',
                    name: '广告屏更换',
                    icon: 'smile',
                    component: './ui/adv',
                    authority: ['admin'],
                  },
                  {
                    path: '/ui/rot',
                    name: '轮播图更换',
                    icon: 'smile',
                    component: './ui/rot',
                    authority: ['admin'],
                  },
                  {
                    path: '/ui/theme',
                    name: '主题颜色更换',
                    icon: 'smile',
                    component: './ui/theme',
                    authority: ['admin'],
                  },
                ],
              },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
