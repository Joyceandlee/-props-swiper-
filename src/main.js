import Vue from 'vue'
import Index from './views/index'

//引入store
import store from './store/index'

new Vue({
    el: '#app',
    store,
    render: h => h(Index)
})