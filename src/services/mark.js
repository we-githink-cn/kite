import request from '@/utils/request';

export async function query() {
  return request('/api/mark');
}
export async function queryHtml() {
  return request('/api/html');
}

