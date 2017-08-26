<template>
    <div class="top">
        欢迎使用风控管理系统，请多提优化建议~
        <div class="actions">
            <div class="link">
            	<a href="javascript:;">
            		帮助中心
            	</a>
            	<a href="javascript:;">
            		找钢网首页
            	</a>
            </div>
            <div class="user">
                <el-dropdown @command="handleCommand" trigger="click" menu-align='start'>
                    <span class="el-dropdown-link">
                        {{$store.state.username}}
                        <i class="el-icon-caret-bottom el-icon--right">
                        </i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="a">
                            登出
                        </el-dropdown-item>
                     
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="message">
                <span class="num">
                    {{$store.state.topnum}}
                </span>
                <i class="icon icon-bell">
                </i>
            </div>
            
        </div>
    </div>
</template>
<script>
   export default {
    methods: {
      handleCommand(command) {
        // alert(1)
      }
    }
  }
</script>
<style lang="sass">
    @import '../sass/Top'
</style>