<template>
    <div class="filter">
        <el-collapse v-model="activeNames">
            <el-collapse-item name="1" title="更多筛选">
                <ul class="filter-ul">
                    <li v-for="i in prop_group">
                        <b class="title">
                            {{ i.title }}
                        </b>
                        <span :class="{active:i.name[index].isActive}" @click="selectOne(i.name,index)" v-for="(name,index) in i.name">
                            {{ name.value }}
                            <i class="icon icon-checked"></i>
                        </span>
                    </li>
                </ul>
                <ul class="array">
                    <li>
                        <b class="title">
                            出警日期
                        </b>
                        <span>
                            <el-date-picker :picker-options="pickerOptions" align="left" placeholder="选择日期范围" ref="popover1" size="small" trigger="hover" type="daterange" v-model="value7">
                            </el-date-picker>
                        </span>
                        <el-button type="primary" class="sure">确定</el-button>
                    </li>
                </ul>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                prop_group: [
                    
                ],
                n:0,
                value7:'',
                
                 activeNames: '0',
        // visible:false,

                pickerOptions: {
                  shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                      const end = new Date();
                      const start = new Date();
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                      picker.$emit('pick', [start, end]);
                    }
                  }, {
                    text: '最近一个月',
                    onClick(picker) {
                      const end = new Date();
                      const start = new Date();
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                      picker.$emit('pick', [start, end]);
                    }
                  }, {
                    text: '最近三个月',
                    onClick(picker) {
                      const end = new Date();
                      const start = new Date();
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                      picker.$emit('pick', [start, end]);
                    }
                  }]
                },
            }
        },

        methods: {
            // 单选多选
            selectOne(a,index){
                this.n=0;
                const obj={
                         value:a[index].value,
                         'isActive':!a[index].isActive,
                      }
                this.$set(a,index,obj)                
                // 判断点击的是全选按钮
               if(index==0){
                    if(a[index].isActive){
                         for(let m=0;m<a.length;m++){
                                a[m].isActive=true
                           }
                        
                    }else{
                         for(let m=0;m<a.length;m++){
                            a[m].isActive=false
                       }
                    }
               }else{
                   a[0].isActive=false 
               }
               // 遍历列表若都选中，全选添加类名
               for(let t=1;t<a.length;t++){
                 
                    if(a[t].isActive){
                         this.n++
                      }
                }
               if(this.n==a.length-1){
                     a[0].isActive=true 
               }
               
            },

            

        },
         // ajax获取数据
            created(){
                this.$http.get('/Screen/prop_group')
                    .then(response=>{
                     
                      this.prop_group=response.data.prop_group
                      
                     
                    })
                     .catch(error => {
                        console.log(error);
                        alert('网络错误，不能访问');
                    })
            }
    }
</script>
<style lang="sass">
    @import '../sass/Screen'
</style>