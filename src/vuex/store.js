import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions'
import mutations from './mutations'


Vue.use(Vuex);

// 数据
const state = {
    username: '用户名',
    topnum: 52,
    checked: false,
    mainlistactive: false,
    sidebaractive: false,
    listactive: false,
    listnum: -1,
    finishlistnum: -1,
    savehomeindex: -1,
    savetasklistindex: -1,
    sidebararry: [{
        id: -1,
        name: '',
        data: '',
        starActive: false,
        isMessage: false,
        isFile: false,
        time: '',
        link: '',
        des: '',
        part: '',
        person: '',
        filelist:[],
        note: []
    }, 0],
    // todolist: [{
    //     id: 0,
    //     name: '0XXX单据出发预警0',
    //     data: '2015-01-01',
    //     starActive: false,
    // }, {
    //     id: 1,
    //     name: '1XXX单据出发预警',
    //     data: '2015-01-01',
    //     starActive: false,
    // }, {
    //     id: 2,
    //     name: '2XXX单据出发预警',
    //     data: '2015-01-01',
    //     starActive: false,
    // }, {
    //     id: 3,
    //     name: '3XXX单据出发预警',
    //     data: '2015-01-01',
    //     starActive: false,
    // }, {
    //     id: 4,
    //     name: '4XXX单据出发预警',
    //     data: '2015-01-01',
    //     starActive: false,
    // }, {
    //     id: 5,
    //     name: '55XXX单据出发预警',
    //     data: '2048-01-01',
    //     starActive: false,
    // }],
    todolist: [],

    finishlist: [
    ],
    tasktodolist:[],
    taskfinishlist:[]
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})