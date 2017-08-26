<template>
  <div id="mall_header">
  <div class="header_box subtitle">
      <div class="w1180">
        <a href="javascript:;" class="logo minilogo"></a>
        <h1>风控管理后台</h1>

        <ul class="nav">
          <li class="">
            <a href="javascript:;">数据管理</a>
            <dl class="dropDown">
              <dd><a href="javascript:;">交易信息</a></dd>
              <dd><a href="javascript:;">用户评分</a></dd>
            </dl>
          </li>
          <li class="">
            <a href="/fnance/addFinanceIndex">分析管理</a>

          </li>
          <li class="">
            <a href="javascript:;">预警管理</a>
           <dl class="dropDown">
              <dd><a href="javascript:;">预警监控</a></dd>
              <dd><a href="javascript:;">预警规则</a></dd>
              <dd><a href="javascript:;">预警指标</a></dd>
              <dd><a href="javascript:;">接口人配置</a></dd>
            </dl>
          </li>
          <li class="">
            <a href="javascript:;">任务管理</a>
            <dl class="dropDown">
              <dd>
              <router-link to="/tasklist">任务清单</router-link>
              </dd>
            
            </dl>
          </li>
         
          <li class="">
            <a href="javascript:;">资料设置</a>
            <dl class="dropDown">
              <dd><a href="javascript:;">白名单</a></dd>
              <dd><a href="javascript:;">黑名单</a></dd>
              <dd><a href="javascript:;">准入模型</a></dd>
              <dd><a href="javascript:;">公司资料卡</a></dd>
            </dl>
          </li>
        </ul>
        
        
      </div>
    </div>
    </div>

</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang='sass'>
@import '../sass/HeaderTop'

/*.logo {
  font-size:22px;
  text-align:center;
  line-height: 60px;
  float: left;
  color: #666;
  margin-left: 30px;
  margin-right: 50px;
}

.el-menu{
  background: #FFF;
}


.el-menu--horizontal>.el-menu-item:hover, .el-menu--horizontal>.el-submenu.is-active .el-submenu__title, .el-menu--horizontal>.el-submenu:hover .el-submenu__title{
  border-bottom: 5px solid #e93c45;
}

.el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active{
  color: #ea544a;
}

.el-menu--horizontal > .el-submenu:hover
.el-submenu__title{

}

.el-menu--horizontal > .el-submenu:hover
.el-submenu__title{
  background: none;
}

.el-menu--horizontal > .el-menu-item:hover{
  background: none;
}

.el-menu--horizontal .el-submenu .el-submenu__icon-arrow{
  color: #666;
}

.el-menu--horizontal>.el-submenu.is-opened .el-menu-item:hover{
  background: #fff2f3;
}*/
</style>