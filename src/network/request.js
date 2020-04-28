import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000,
  })
  // axios 的拦截器
  instance.interceptors.request.use(config => {
    console.log(config);
    return config
  }, err => {
    // console.log(err);
  })
  // 发送真正的网络请求

  instance.interceptors.response.use(res => {
    // console.log(res.data);
    return res.data
  },err => {s
    // console.log(err);
  })
  return instance(config)
}
