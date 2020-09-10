import axios from 'axios';

// 创建axios对象
const service = axios.create({
    // process.env.NODE_ENV === 'development' 来判断是否开发环境
    // baseURL:'http://localhost:3000',   // 这个地方添加 服务器地址
    timeout: 5000
})
// 请求拦截
service.interceptors.request.use( config => {
    // config.headers['token'] = Vue.cookie.get('token') // 请求头带上token
    config.headers['token'] = 'wss'; // 测试
    return config;
}, error => {
    console.log(error);
    return Promise.reject();
})
// 响应拦截
service.interceptors.response.use(response => {
    if(response.status === 200){   // 这里需要根据后端的接口定义做响应的修改
        return response.data;   // 直接返回data数据即可
    }else{
        Promise.reject();
    }
}, error => {
    console.log(error);
    return Promise.reject();
})

// get请求处理
service.adornParams = function(params = {},openDefultParams = true){
    let defaults = {
        't': new Date().getTime()   // 添加时间戳
    }
    return openDefultParams?{...params,...defaults}:params;
}

// post请求处理
service.adornData = function(data = {},openDefultdata = true){
    let defaults = {
        't': new Date().getTime()   // 添加时间戳
    }
    return openDefultdata?{...data,...defaults}:data;
}

export default service;   // 返回的就是axios对象