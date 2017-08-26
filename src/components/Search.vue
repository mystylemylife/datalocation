<template>

<div class="search">
  

  <el-row>
    <el-col :span="20" style='margin-left:20px;'>
       
         
          <!--  <div class="filter-button">
              <el-button type="primary" @click='visible = false'>
                  确定
              </el-button>
          </div> -->
      <el-input placeholder="请输入预警名称" v-model="input1" style="margin-bottom: 10px;" class='searchwrap'>
        <!-- <el-button slot="prepend" v-popover:popover1 class="button-left">显示筛选 <i class="el-icon-arrow-down"></i></el-button> -->
        <el-button slot="append" icon="search" class="button-right">搜索</el-button>
      </el-input>
    </el-col>
  </el-row>
  </div>

</template>

<script>

  export default {
    // components: {Screen},
    data() {
      return {
        input1: '',
        // value7:'',
        // visible:false,

        // pickerOptions: {
        //   shortcuts: [{
        //     text: '最近一周',
        //     onClick(picker) {
        //       const end = new Date();
        //       const start = new Date();
        //       start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
        //       picker.$emit('pick', [start, end]);
        //     }
        //   }, {
        //     text: '最近一个月',
        //     onClick(picker) {
        //       const end = new Date();
        //       const start = new Date();
        //       start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
        //       picker.$emit('pick', [start, end]);
        //     }
        //   }, {
        //     text: '最近三个月',
        //     onClick(picker) {
        //       const end = new Date();
        //       const start = new Date();
        //       start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
        //       picker.$emit('pick', [start, end]);
        //     }
        //   }]
        // },
       
      }
    },
  }
</script>

<style lang='sass'>
  @import '../sass/Search'
</style>
