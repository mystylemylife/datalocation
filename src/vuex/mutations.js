import Vue from 'vue';
import * as types from './mutation_types' //所有的输出包裹到types对象里
// 操作
const mutations = {
    // ajax获取数据
    [types.GET_ALL_DATA](state, data) {

        state.todolist = data
        state.finishlist = []
    },
    // ajax获取任务清单数据
    [types.GET_ALL_DATA_TASK](state, data) {
        state.todolist = []
        state.todolist = data
        state.finishlist = []
    },

    // 删除
    [types.REMOVE](state, index) {

        state.checked = false
        const obj = {
            id: state.todolist[index].id,
            name: state.todolist[index].name,
            data: state.todolist[index].data,
            starActive: state.todolist[index].starActive,
            isMessage: state.todolist[index].isMessage,
            isFile: state.todolist[index].isFile,
            time: state.todolist[index].time,
            link: state.todolist[index].link,
            des: state.todolist[index].des,
            part: state.todolist[index].part,
            person: state.todolist[index].person,
            filelist: state.todolist[index].filelist,
            note: state.todolist[index].note
        }
        state.todolist.splice(index, 1)
        state.finishlist.unshift(obj)

        if (state.listnum == index) {
            state.listnum = -1
        }
        state.finishlist.map((item, index) => {
            if (item.id == state.sidebararry[0].id) {
                state.finishlistnum = index
            }
        })

        state.todolist.map((item, index) => {
            if (item.id == state.sidebararry[0].id) {
                state.listnum = index
            }
        })
    },
    // 添加
    [types.ADD](state, index) {
        // state.n++;
        const obj = {
            id: state.finishlist[index].id,
            name: state.finishlist[index].name,
            data: state.finishlist[index].data,
            starActive: state.finishlist[index].starActive,
            isMessage: state.finishlist[index].isMessage,
            isFile: state.finishlist[index].isFile,
            time: state.finishlist[index].time,
            link: state.finishlist[index].link,
            des: state.finishlist[index].des,
            part: state.finishlist[index].part,
            person: state.finishlist[index].person,
            filelist: state.finishlist[index].filelist,
            note: state.finishlist[index].note,

        }
        state.finishlist.splice(index, 1)
        state.todolist.push(obj)
        if (state.finishlistnum == index) {
            state.finishlistnum = -1
        }


        state.finishlist.map((item, index) => {
            if (item.id == state.sidebararry[0].id) {
                state.finishlistnum = index
            }
        })
        state.todolist.map((item, index) => {
            if (item.id == state.sidebararry[0].id) {
                state.listnum = index
            }
        })

    },
    // 星标变色
    [types.SHOW_STAR_ACTIVE](state, aim) {
        const index = aim[0]
        const from = aim[1]

        // 切换背景
        const obj = {
            id: from[index].id,
            name: from[index].name,
            data: from[index].data,
            starActive: !from[index].starActive,
            isMessage: from[index].isMessage,
            isFile: from[index].isFile,
            time: from[index].time,
            link: from[index].link,
            des: from[index].des,
            part: from[index].part,
            person: from[index].person,
            filelist: from[index].filelist,
            note: from[index].note,
        }

        Vue.set(from, index, obj)

        // 判断点击侧边栏时候星标id,如果相同列表页星标同时变色
        if (from[index].id == state.sidebararry[0].id) {
            state.sidebararry[0].starActive = from[index].starActive
        }
    },
    // 同步星标
    [types.SHOW_STAR_ACTIVE_LOADING](state) {

        state.sidebararry[0].starActive = !state.sidebararry[0].starActive
        state.todolist.map((item, index) => {
            if (item.id == state.sidebararry[0].id) {
                item.starActive = state.sidebararry[0].starActive
                Vue.set(state.todolist, index, item)
                if (item.starActive) {
                    if (index != 0) {
                        var str = state.todolist.splice(index, 1)

                        setTimeout(function() {
                            state.todolist.unshift(str[0])
                            state.listnum = 0
                        }, 1)
                    }


                } else {
                    state.listnum = index
                }
            }
        })

        state.finishlist.map((item, index) => {
            if (state.sidebararry[0].id == item.id) {
                item.starActive = state.sidebararry[0].starActive
                Vue.set(state.finishlist, index, item)
            }
        })

    },

    // 等级提升
    [types.SORT](state, index) {

        if (state.todolist[index].starActive) {
            if (index != 0) {
                var str = state.todolist.splice(index, 1)
                setTimeout(function() {
                    state.todolist.unshift(str[0])
                    if (state.listnum == index) {
                        state.listnum = -1
                    }

                    state.todolist.map((item, index) => {
                        if (item.id == state.sidebararry[0].id) {
                            state.listnum = index
                        }
                    })
                }, 1)
            }

        }
    },
    // 显示侧边栏
    [types.SIDE_BAR_OPEN](state) {
        state.sidebaractive = true
        state.mainlistactive = true
    },
    // 更新侧边栏数据并添加类名
    [types.SIDE_BAR_UPDATE](state, sidebararry) {
        state.finishlistnum = state.listnum = -1
        state.sidebararry = sidebararry

        state.todolist.map((item, index) => {
            if (item.id == state.sidebararry[0].id) {
                state.listnum = sidebararry[1]
            }
        })
        state.finishlist.map((item, index) => {
            if (item.id == state.sidebararry[0].id) {
                state.finishlistnum = sidebararry[1]
            }
        })
    },
    // 收起侧边栏
    [types.SIDE_BAR_CLOSE](state) {
        state.sidebaractive = false
        state.mainlistactive = false
    },
    // 删除任务
    [types.DEL_TASK](state) {

        state.todolist.map((item, index) => {
            if (item.id == state.sidebararry[0].id) {
                state.todolist.splice(index, 1)
            }
        })
        state.finishlist.map((item, index) => {
            if (item.id == state.sidebararry[0].id) {
                state.finishlist.splice(index, 1)
            }
        })
    },
    // 点击其他地方消失
    [types.OTHER_SIDE_BAR_CLOSE](state) {
        state.sidebaractive = false
        state.mainlistactive = false
    },

    // 删除条目重置列表类名index值
    [types.DEL_ACTIVE_DEFAULT](state) {

        state.listnum = -1
        state.finishlistnum = -1
        state.sidebararry = [{
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
            note: [],
            filelist: [],
        }, 0]
    },

    // 添加评论时列表增加信息图标
    [types.ADD_MESSAGE](state, text) {
        state.finishlist.map((item, index) => {
            if (item.id == state.sidebararry[0].id) {
                state.finishlist[index].note.push(text)
                state.finishlist[index].isMessage = true
            }
        })

        state.todolist.map((item, index) => {
            if (item.id == state.sidebararry[0].id) {
                state.todolist[index].note.push(text)
                state.todolist[index].isMessage = true

            }
        })

    },
    // 删除评论时列表去掉信息图标
    [types.REMOVE_MESSAGE](state, _index) {

        state.finishlist.map((item, index) => {
            if (item.id == state.sidebararry[0].id) {
                state.finishlist[index].note.splice(_index, 1)
                if (state.finishlist[index].note.length >= 1) {
                    state.finishlist[index].isMessage = true
                } else {
                    state.finishlist[index].isMessage = false

                }

            }
        })
        state.todolist.map((item, index) => {
            if (item.id == state.sidebararry[0].id) {
                state.todolist[index].note.splice(_index, 1)
                if (state.todolist[index].note.length >= 1) {
                    state.todolist[index].isMessage = true
                } else {
                    state.todolist[index].isMessage = false

                }

            }
        })
    },

    // 选择日期赋给state
    // [types.CHANGE_DATA](state, data) {


    //     state.finishlist.map((item, index) => {
    //         if (item.id == state.sidebararry[0].id) {
    //             state.finishlist[index].data = data
    //         }
    //     })

    //     state.todolist.map((item, index) => {
    //         if (item.id == state.sidebararry[0].id) {
    //             state.todolist[index].data = data

    //         }
    //     })
    // },
    // 选择时间赋给state
    // [types.CHANGE_TIME](state, time) {
    //     state.finishlist.map((item, index) => {
    //         if (item.id == state.sidebararry[0].id) {
    //             state.finishlist[index].time = time
    //         }
    //     })

    //     state.todolist.map((item, index) => {
    //         if (item.id == state.sidebararry[0].id) {
    //             state.todolist[index].time = time

    //         }
    //     })
    // },

    // 选择下拉部门赋给state
    // [types.ADD_SELECT_PART](state, part) {
    //     state.finishlist.map((item, index) => {
    //         if (item.id == state.sidebararry[0].id) {
    //             state.finishlist[index].part = part
    //         }
    //     })

    //     state.todolist.map((item, index) => {
    //         if (item.id == state.sidebararry[0].id) {
    //             state.todolist[index].part = part

    //         }
    //     })
    // },
    // 选择下拉成员赋给state
    // [types.ADD_SELECT_PERSON](state, person) {
    //     state.finishlist.map((item, index) => {
    //         if (item.id == state.sidebararry[0].id) {
    //             state.finishlist[index].person = person
    //         }
    //     })

    //     state.todolist.map((item, index) => {
    //         if (item.id == state.sidebararry[0].id) {
    //             state.todolist[index].person = person

    //         }
    //     })
    // },
    [types.PUBLIC_CHANGE](state, variables) {
        state.finishlist.map((item, index) => {
            if (item.id == state.sidebararry[0].id) {
                state.finishlist[index][variables[0]] = variables[1]
                
            }
        })

        state.todolist.map((item, index) => {
            if (item.id == state.sidebararry[0].id) {
                state.todolist[index][variables[0]] = variables[1]
                

            }
        })
    },

    // 上传附件增加图标信息
    [types.ADD_FILE_LIST](state, Filelist) {
        state.finishlist.map((item, index) => {
            if (item.id == state.sidebararry[0].id) {
                state.finishlist[index].filelist = Filelist
                state.finishlist[index].isFile = true
            }
        })

        state.todolist.map((item, index) => {
            if (item.id == state.sidebararry[0].id) {

                state.todolist[index].filelist = Filelist
                state.todolist[index].isFile = true

            }
        })
    },
    // 删除附件去掉图标信息
    [types.REMOVE_FILE_LIST](state, Filelist) {

        state.finishlist.map((item, index) => {
            if (item.id == state.sidebararry[0].id) {
                state.finishlist[index].filelist = Filelist

                if (state.finishlist[index].filelist.length >= 1) {
                    state.finishlist[index].isFile = true
                } else {
                    state.finishlist[index].isFile = false

                }

            }
        })
        state.todolist.map((item, index) => {
            if (item.id == state.sidebararry[0].id) {
                state.todolist[index].filelist = Filelist
                if (state.todolist[index].filelist.length >= 1) {
                    state.todolist[index].isFile = true
                } else {
                    state.todolist[index].isFile = false

                }

            }
        })
    },



}


export default mutations