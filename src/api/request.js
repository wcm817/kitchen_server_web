import axios from 'axios';
import './http.js';
import { api } from './api.js';

export const get = ({ path, val, params }) => {
  const url = typeof api[path] === 'function' ? api[path](val) : api[path];
  return axios.get(url, params)
}

export const post = ({ path, val, params }) => {
  const url = typeof api[path] === 'function' ? api[path](val) : api[path];
  return axios.post(url, params)
}

export const getFile = ({
  path, val, params, method
}) => axios({
  url: typeof api[path] === 'function' ? api[path](val) : api[path],
  [method === 'get' ? 'params' : 'data']: params,
  method: method,
  responseType: 'blob'
}).then((res) => {
  let blob = new Blob([res.data]);
  let url = window.URL.createObjectURL(blob);
  let patt = new RegExp('filename=([^;]+\\.[^\\.;]+)*');
  let contentDisposition = decodeURI(res.headers['content-disposition']);
  let result = patt.exec(contentDisposition);
  let filename = result[1];
  filename = filename.replace(/\"/g, '');
  let ele = document.createElement('a');
  ele.setAttribute('download', filename);
  ele.href = url;
  document.body.appendChild(ele);
  ele.click();
  ele.remove();
})