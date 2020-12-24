import request from '@/utils/request';

//获取主题
export async function getTheme(params) {
  return request('/api/config/themecolor');
}

//更改主题
export async function setTheme({color}) {
  console.log(color)
  return request(`/api/config/changeColor?color=${color}`,{
    method:'PUT'
  });
}
