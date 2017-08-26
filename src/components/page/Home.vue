<template>
  <div id="home" @click.stop='othersideBarClose'>
    <Top/>
    <HeaderTop/>
      <div class="mainlist-wrap" ref="abc" :class='{mainlistactive:$store.state.mainlistactive}'>
          <div class="mainlist" >
            <div class="mainlist-content">
                <Search/>
                <Screen/>
               
                <el-tabs type="card">
                  <el-tab-pane>
                    <span slot="label">
                      用户管理
                      <b class="tab-num">
                        （{{this.$store.state.todolist.length}}）
                      </b>

                    </span>
                    <div class="tab-infor">
                      是点击返回就开始地方
                    </div>
                     <List/>
                  </el-tab-pane>
                 
                </el-tabs>
                
             </div>
          </div>
            
            <Bottom/>
         </div>
         <SideBar>
              <i class="icon icon-return" title='驳回' slot='icon-return'>
              </i>
              <i class="icon icon-stop" title='关闭当前预警' slot='icon-stop'>
              </i>
              <i class="icon icon-litter" title='删除' @click='delTaskTip' slot='icon-litter'>
              </i> 
        </SideBar>
        

  </div>
</template>
<script>
import Top from '../Top.vue'
import HeaderTop from '../HeaderTop.vue'
import Search from '../Search.vue'
import Screen from '../Screen.vue'
import List from '../List.vue'
import SideBar from '../SideBar.vue'
import Bottom from '../Bottom.vue'


export default {
  components: {Top,HeaderTop, Search,Screen, List,SideBar,Bottom},
  data(){
    return {
      value1: '责任部门',
      value2: '添加人员',
      valuedata1: '',
      valuedata2: '',
      options: [],
      options1: [],
      
    }
  },
  methods: {
      // 点击其他地方侧边栏隐藏
      othersideBarClose(){
        this.$store.dispatch('othersideBarClose')
      },
      // 删除任务
     delTaskTip(){
        var that=this;
         this.$confirm('此操作将永久删除该条目, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            this.$store.dispatch('delTask')
            this.$message({
              type: 'success',
              message: '删除成功!',
              duration:'800',
            });
           
             this.$store.dispatch('delActivedefault') 
             this.$store.dispatch('sideBarClose')
             
              
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
            duration:'800',
          });          
        });
     },
  },
   created() {
      this.$store.dispatch('getAllData', this)
      this.$store.dispatch('sideBarClose')
      this.$store.dispatch('delActivedefault')
    
  },
  beforeRouteLeave (to, from, next) {
    this.$store.state.tasktodolist=this.$store.state.todolist
    this.$store.state.taskfinishlist=this.$store.state.finishlist

    // var data=JSON.stringify(this.$store.state.todolist)
    // localStorage.setItem("todolist",data)
    next()
  }
}
</script>

