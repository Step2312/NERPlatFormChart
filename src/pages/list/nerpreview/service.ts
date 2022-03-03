import request from 'umi-request';

export async function model_available() {
  return request('http://yapi.smart-xwork.cn/mock/126975/api/v1/model/available_names');
}
