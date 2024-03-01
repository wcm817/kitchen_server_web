import Vue from 'vue';
import axios from 'axios';
import { hasLoginCookie } from '@/utils/index';

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/api' : '';
axios.defaults.withCredentials = true; //表示跨域请求时是否需要使用凭证
axios.defaults.headers = {
  'Content-Type': 'application/json;charset=UTF-8',
}

// 请求拦截
axios.interceptors.request.use(
  (config) => {
    const token = hasLoginCookie();
    if (token) {
      // 前端不能直接使用返回的token值，在前面加上Bearer
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
)

// 响应拦截
axios.interceptors.response.use(
  (response) => {
    // 文件下载类型，直接返回所有
    if (response.request.responseType === 'blob') {
      return response;
    }
    // 只返回响应的data信息
    const data = response.data;
    if (data.code === 1) {
      Vue.prototype.$message({
        type: 'error',
        message: data.message
      });
    }
    return data;
  },
  (err) => {
    Vue.prototype.$alert(err.message, {
      confirmButtonText: '确定',
      callback: () => { }
    });
    return {};
  }
)

Vue.prototype.$axios = axios;

