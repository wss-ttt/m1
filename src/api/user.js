import request from '../utils/request';

export const getUsersList = (query) => {
    return request({
        url: '/api/users/list',
        method: 'post',
        data: query
    })
}

export const getUsersList2 = (query) => {
    return request({
        url: '/api/users/list',
        method: 'get',
        data: query
    })
}