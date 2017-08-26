<template>
    <div class="list">
        <ul class="todolist">
            <transition-group tag="div" name="custom-classes-transition"  enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut" :duration="{ enter: 350, leave: 350 }">
                <li :key="todoitem.id" v-for="(todoitem,index) in todolist" @dblclick.self="sideBarOpen" @click.self.stop='sideBarUpdate([todoitem,index])' :class='{listactive:index==listnum}'>
                    <div class="name" @click.stop>
                        <el-checkbox @change="remove(index)" v-model="$store.state.checked">
                        </el-checkbox> 
                    </div>
                    {{todoitem.name}}
                    <i @click.stop="showStarActive([index,todolist]);sort(index)" class="icon icon-star" :class="{active:todoitem.starActive}">
                    </i>
                    <div class="data" @click.stop.self='sideBarUpdate([todoitem,index])' @dblclick="sideBarOpen">
                        <i class="icon icon-message" v-show='todoitem.isMessage' title='此任务有评论'></i>
                        <i class="icon icon-small-file" v-show='todoitem.isFile' title='此任务有附件'></i>
                        {{todoitem.data}}
                    </div>
                    
                </li>
            </transition-group>
        </ul>
        <div class="showfinish">
            <el-button type="primary" @click.stop="showFinishlist">
                显示已结束的预警
            </el-button>
        </div>
        <ul class="finishlist" v-show="isFinishlistShow">
            <transition-group name="custom-classes-transition"  enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut" :duration="{ enter: 350, leave: 350 }">
                <li :key="finishitem.id"  v-for="(finishitem,index) in finishlist" @dblclick.self="sideBarOpen" @click.self.stop='sideBarUpdate([finishitem,index])' :class='{listactive:index==finishlistnum}'>
                    <div class="name" @click.stop>
                        <el-checkbox checked="checked" @change="add(index)">
                        </el-checkbox>
                      
                    </div>
                    <div @click.self.stop='sideBarUpdate([finishitem,index])' class="name-text">
                         {{finishitem.name}}
                         <span class='time'>
                             几秒钟之前
                         </span>
                    </div>
                     
                    <i @click.stop.self="showStarActive([index,finishlist])" class="icon icon-star" :class="{active:finishitem.starActive}" @dbclick.stop>
                    </i>
                    <div class="data" @click.stop.self='sideBarUpdate([finishitem,index])' @dblclick.self="sideBarOpen">
                        <i class="icon icon-message" v-show='finishitem.isMessage' title='此任务有评论'></i>
                        <i class="icon icon-small-file" v-show='finishitem.isFile' titlte='此任务有附件'></i>
                        {{finishitem.data}}
                    </div>
                </li>

            </transition-group>

           </ul>

        
          
    </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from 'vuex'
    export default{
		data(){
			return {
				isFinishlistShow:false,
			}
		},
		computed:mapState(["count","sidebararry","listactive","listnum","finishlistnum","todolist","finishlist","checked","count"]),
		methods:{
			// 显示已结束清单
			showFinishlist(){
				this.isFinishlistShow=!this.isFinishlistShow
			},
             // ...mapActions(['addAction','sideBarOpenAction(aspect)']),
            // 删除
             remove(aspect){
                 this.$store.dispatch('remove',aspect)
             },
             // 添加
             add(aspect){
                 this.$store.dispatch('add',aspect)
             },
             //星标变色 
             showStarActive(aspect){
                 this.$store.dispatch('showStarActive',aspect)
             },
             
             //等级提升 
             sort(aspect){
                 this.$store.dispatch('sort',aspect)
             },
             //显示侧边栏 
             sideBarOpen(aspect){
                 this.$store.dispatch('sideBarOpen',aspect)
             },
             // 侧边栏更新数据
             sideBarUpdate(aspect){
                 var obj=location.href.split('/')
                 this.$store.dispatch('sideBarUpdate',[...aspect,obj[obj.length-1]]) 
             },

		},
        created(){
          
            //  var obj=location.href.split('/')
            //  var s=obj[obj.length-1]
            // this.$store.state.listnum=this.$store.state.s
            // this.$store.dispatch('delActivedefault')
        }
        
        
		
	}

</script>
<style lang="sass">
    @import '../sass/List';
</style>