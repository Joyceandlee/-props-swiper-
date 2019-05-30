const state = {
    count: 1000
}

const mutations = {
    changeCount(state, payload) {
        //state表示模块内的状态,payload表示触发当前mutation携带的数据
        payload == '+' ? state.count++ : state.count--
    }
}

export default {
    state,
    mutations
}