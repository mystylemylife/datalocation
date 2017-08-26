<template>
  <div id="home" @click.stop='othersideBarClose'>
  <Top/>
    <HeaderTop/>
      <div class="mainlist-wrap" ref="abc" :class='{mainlistactive:$store.state.mainlistactive}'>

 
      <div class="mainlist">
        <div class="mainlist-content">
             <Search/>
                <Screen/>
                 <el-tabs type="card" >
                  <el-tab-pane>
                    <span slot="label">
                      用户管理
                      <b class="tab-num">
                        （{{this.$store.state.todolist.length}}）
                      </b>
                    </span>
                     <List/>
                  </el-tab-pane>
                 
                </el-tabs>
               
         </div>
      </div>
            <Bottom/>
      
      </div>
     
      
        <SideBar>
            <span slot='select-part' class="select-text">
              {{this.$store.state.sidebararry[0].part}}
            </span>
            <span slot='select-person' class="select-text">
              {{this.$store.state.sidebararry[0].person}}
            </span>
           
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
  data() {
      return {
        // fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
  methods: {
      // 点击其他地方侧边栏隐藏
      othersideBarClose(){
        this.$store.dispatch('othersideBarClose')
      },
     
  },
   created() {
    // localStorage.getItem("todolist") 
    // var data=localStorage.todolist
    // this.$store.state.todolist=JSON.parse(data)

      this.$store.dispatch('sideBarClose')
      this.$store.state.todolist=this.$store.state.tasktodolist
      this.$store.state.finishlist=this.$store.state.taskfinishlist
          
    },
  // beforeRouteEnter (to, from, next) {
  //   next(vm => {
  //   localStorage.getItem("todolist") 
  //   var data=localStorage.todolist
  //   vm.$store.state.todolist=JSON.parse(data)
  //   // 通过 `vm` 访问组件实例
  // })
    
  // },
}
</script>

