import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/page/Home.vue'
import TaskList from '../components/page/TaskList.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/tasklist',
            name: 'TaskList',
            component: TaskList
        }
    ]
})