/**
 * Created by zhangchao on 19/5/8.
 */

import axios from 'axios'
import store from '@/store'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL, // api 的 base_url
  timeout: 10000 // request timeout
})

service.interceptors.request.use(
  config => {
    // Do something before request is sent
    if (store.getters.unionid) {
      // 让每个请求携带unionid-- ['unionid']为自定义key 请根据实际情况自行修改
      Object.assign(config.data, { unionid: store.getters.unionid })
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    console.log(res)
    if (res.status !== 1) {
      alert(res.message)
      // // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      // if (res.status === 50008 || res.status === 50012 || res.status === 50014) {
      //   // 请自行在引入 MessageBox
      //   // import { Message, MessageBox } from 'element-ui'
      //   MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
      //     confirmButtonText: '重新登录',
      //     cancelButtonText: '取消',
      //     type: 'warning'
      //   }).then(() => {
      //     store.dispatch('FedLogOut').then(() => {
      //       location.reload() // 为了重新实例化vue-router对象 避免bug
      //     })
      //   })
      // }
      return Promise.reject(res.message)
    } else {
      return response.data
    }
  },
  error => {
    console.error('报错啦~！' + error) // for debug
    alert(error.message)
    return Promise.reject(error)
  }
)
