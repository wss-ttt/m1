import request from '@/utils/request.js'
export default {
    namespaced: false,   // 命名空间
    state: {
        users: [],  // 保存用户数据
        start: 0,   // 开始的位置
    },
    getters: {

    },
    actions: {
        getUsers({ commit, state },payload) {
            request({
                url: 'http://localhost:3000/users/list',
                method: 'get',
                params: {
                    start: state.start,
                    end: state.start + 3
                }
            }).then((data) => {
                commit('changeStart')
                commit({
                    type: 'getUsers',
                    res: data
                })
            })
        },
    },
    mutations: {
        changeStart(state, payload) {
            state.start += 3
        },
        getUsers(state, payload) {
            state.users = state.users.concat(payload.res)
        },
    }
}