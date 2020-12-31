import request from '@/utils/request';

//获取主题
export async function getTheme() {
  return request('/api/config/themecolor');
}

//更改主题
export async function setTheme({color}) {
  console.log(color)
  return request(`/api/config/changeColor?color=${color.replace('#','%23')}`,{
    method:'PUT'
  });
}

//获取广告屏
export async function getAdv() {
  return request('/api/config/startad');
}

// //更改主题
// export async function setTheme({color}) {
//   console.log(color)
//   return request(`/api/config/changeColor?color=${color.replace('#','%23')}`,{
//     method:'PUT'
//   });
// }
