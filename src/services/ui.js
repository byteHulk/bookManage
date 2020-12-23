import request from '@/utils/request';

//获取主题
export async function getTheme(params) {
  return request('/api/login/account', {
    method: 'POST',
    data: params,
  });
}

//更改主题
export async function setTheme(mobile) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
