import axios from 'axios'
// import ElementUI from 'element-ui'
import store from '../src/store/index'
const config = require('../config/env.dev')

// 创建axios实例
const options = {
    baseURL: config.BACK_END,
    timeout: 300000,
}
const service = axios.create(options)
// loading
// var loadingService
// request拦截器
service
    .interceptors
    .request
    .use(request => {
        // var token = localStorage.getItem('longisland.token')
        // let loginName = store.getters.user.loginName
        // if (token) {
        //     request.headers['Authorization'] = token // uat用这个
        //     if (token === '1') {
        //         request.headers['Authorization'] = loginName
        //     }
        //     request.withCredentials = true
        // }
        // loadingService = ElementUI.Loading.service({
        //   lock: true,
        //   text: 'Loading',
        //   spinner: 'el-icon-loading',
        //   customClass:'long-loading'
        // })

        return request
    }, error => {
        // 关闭loading
        // setTimeout(function () {
        //   loadingService.close()
        // }, 1000)
        // Do something with request error
        Promise.reject(error)
    })

// respone拦截器
service
    .interceptors
    .response
    .use(response => {
        // 关闭loading
        // setTimeout(function () {
        //   loadingService.close()
        // }, 1000)
        /**
         * code为非200是错误的请求
         */
        if (response.status !== 200) {
            if (response.status === 201) {
                // 发出被登出广播
                // document.dispatchEvent(new Event(config.EVENT_LOGOUT))
            }
            return Promise.reject('error');
        } else {
            // 提示
            if (response.data.errno === '0' || response.data.errno === 0) {
                if (response.data.data || response.data.data === '') {
                    // ElementUI.Message({
                    //     type: 'success',
                    //     message: response.data.msg
                    // })
                    // console.log('success' + response.data.msg);
                } else {
                    // ElementUI.Message({
                    //     type: 'error',
                    //     message: response.data.msg
                    // })
                    // console.log('error' + response.data.msg);
                }
            } 
            // else if (response.data.code === '0' || response.data.code === 0) {
                // ElementUI.Message({
                //     type: 'error',
                //     message: response.data.msg
                // })
                // console.log('error' + response.data.msg);
            // } 
            else {
                console.log('网络异常');
                // ElementUI.Message({
                //     type: 'error',
                //     message: '网络异常'
                // })
            }
            return response.data
        }
    }, error => {
        // 错误提示
        // ElementUI.Message({
        //     type: 'error',
        //     message: error.response.data.msg
        // })
        // console.log(error.response.data.msg);
        // document.dispatchEvent(new Event(config.EVENT_ERROR))

        return Promise.reject(error)
    })

export default service
