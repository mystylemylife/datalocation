import * as types from './mutation_types' //所有的输出包裹到types对象里


// 提交状态
const actions = {
    // ajax获取数据
    getAllData({ commit }, that) {
        let todolist = {}
        that.$http.get('/store/todolist')
            .then(response => {
                todolist = response.data.todolist
                commit(types.GET_ALL_DATA, todolist)
                // this.oftenGoods = response.data;
            })
            .catch(error => {
                console.log(error);
                alert('网络错误，不能访问');
            })

    },
    // ajax获取任务清单数据
    getAllDataTask({ commit }, that) {
        let todolist = {}
        that.$http.get('/store/tasktodolist')
            .then(response => {
                todolist = response.data.tasktodolist
                commit(types.GET_ALL_DATA_TASK, todolist)
                // this.oftenGoods = response.data;
            })
            .catch(error => {
                console.log(error);
                alert('网络错误，不能访问');
            })

    },

    // 删除
    remove({ commit }, aspect) {
        commit(types.REMOVE, aspect)
    },
    // 添加
    add({ commit }, aspect) {
        commit(types.ADD, aspect)
    },
    // 星标变色
    showStarActive({ commit }, aspect) {
        commit(types.SHOW_STAR_ACTIVE, aspect)
    },
    // 同步星标
    showStarActiveLoading({ commit }, aspect) {
        commit(types.SHOW_STAR_ACTIVE_LOADING, aspect)
    },
    // 等级提升
    sort({ commit }, aspect) {
        commit(types.SORT, aspect)
    },
    // 显示侧边栏
    sideBarOpen({ commit }, aspect) {
        commit(types.SIDE_BAR_OPEN, aspect)
    },
    // 收起侧边栏
    sideBarClose({ commit }, aspect) {
        commit(types.SIDE_BAR_CLOSE, aspect)
    },
    // 更新侧边栏数据
    sideBarUpdate({ commit }, aspect) {
        commit(types.SIDE_BAR_UPDATE, aspect)
    },

    // 删除任务
    delTask({ commit }, aspect) {
        commit(types.DEL_TASK, aspect)
    },
    // 点击其他地方收起侧边栏
    othersideBarClose({ commit }, aspect) {
        commit(types.OTHER_SIDE_BAR_CLOSE, aspect)
    },

    // 删除条目重置列表类名index值
    delActivedefault({ commit }, aspect) {

        commit(types.DEL_ACTIVE_DEFAULT, aspect)
    },
    // // 添加评论时列表增加信息图标
    addMessage({ commit }, aspect) {

        commit(types.ADD_MESSAGE, aspect)
    },
    // 删除评论时列表去掉信息图标
   
    removeMessage({ commit }, aspect) {
        commit(types.REMOVE_MESSAGE,aspect)
    },
    // 公共函数改变state
    publicChange({ commit }, aspect) {
        commit(types.PUBLIC_CHANGE, aspect)
    },
    // // 选择日期赋给state
    // changeData({ commit }, aspect) {
    //     commit(types.CHANGE_DATA, aspect)
    // },
    // // 选择时间赋给state
    // changeTime({ commit }, aspect) {
    //     commit(types.CHANGE_TIME, aspect)
    // },
    // // 选择下拉部门赋给state
    //  addSelectPart({ commit }, aspect) {
    //     commit(types.ADD_SELECT_PART, aspect)
    // },
    //  // 选择下拉成员赋给state
    //  addSelectPerson({ commit }, aspect) {
    //     commit(types.ADD_SELECT_PERSON, aspect)
    // },
    // 上传附件增加图标信息
    addFileList({ commit }, aspect) {
        commit(types.ADD_FILE_LIST,aspect)
    },
    // 删除附件去掉图标信息
     removeFileList({ commit }, aspect) {
        commit(types.REMOVE_FILE_LIST,aspect)
    },


}

export default actions