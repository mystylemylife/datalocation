<template>
    <div :class="{sidebaractive:$store.state.sidebaractive}" @click.stop="" class="sidebar">
        <div class="sidebar-icon">
            <i @click="sideBarClose" class="icon icon-slide" title="隐藏详细视图">
            </i>
            <i class="icon icon-print" title="打印">
            </i>
            <i class="icon icon-fly" title="推送">
            </i>
            <slot name="icon-return">
            </slot>
            <slot name="icon-stop">
            </slot>
            <slot name="icon-litter">
            </slot>
        </div>
        <div class="sidebar-scroll" ref='ss'>
            <div class="sidebar-top">
                {{sidebararry[0].name}}
                <i :class="{active:sidebararry[0].starActive}" @click="showStarActiveLoading" class="icon icon-star">
                </i>
            </div>
            <div class="sidebar-middle">
                <ul>
                    <li class="li-input">
                        <i class="icon icon-calendar">
                        </i>
                        <el-date-picker :editable="false" placeholder="添加到期日" type="date" v-model="sidebararry[0].data" @change='changeData(sidebararry[0].data)'>
                        </el-date-picker>
                    </li>
                    <li class="li-input">
                        <i class="icon icon-bell">
                        </i>
                        <el-date-picker :editable="false" placeholder="添加提醒" type="datetime" v-model="sidebararry[0].time" @change='changeTime(sidebararry[0].time)'>
                        </el-date-picker>
                    </li>
                    <li class="li-text">
                        <i class="icon icon-collect">
                        </i>
                        {{sidebararry[0].link}}

                    </li>
                    <li class="li-text">
                        <i class="icon icon-voice">
                        </i>
                        {{sidebararry[0].des}}
                    </li>
                    <li class="li-sel">
                        <i class="icon icon-part">
                        </i>
                        <slot name="select-part">
                            <el-select clearable="" placeholder="责任部门" slot="select-part" v-model="sidebararry[0].part" @change='addSelectPart(sidebararry[0].part)'>
                                <el-option :key="item.value" :label="item.label" :value="item.value" v-for="item in options">
                                </el-option>
                            </el-select>
                        </slot>
                    </li>
                    <li class="li-sel">
                        <i class="icon icon-person">
                        </i>
                        <slot name="select-person">
                            <el-select clearable="" placeholder="添加人员" v-model="sidebararry[0].person" @change='addSelectPerson(sidebararry[0].person)'>
                                <el-option :key="item.value" :label="item.label" :value="item.value" v-for="item in options1">
                                </el-option>
                            </el-select>
                        </slot>
                    </li>
                    <!-- <slot name='upload'></slot> -->
                     <li slot='upload' class="upload">
                          <el-upload
                            class="upload-demo"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :before-upload='beforeUpload'
                            :on-success="handleSuccess"
                            :file-list="sidebararry[0].filelist"
                            >
                            <i class="icon icon-file"></i>
                            <!-- <el-button size="small" type="primary">点击上传</el-button> -->
                             <div class="fileinput">
                              点击上传
                            </div>
                            <div slot="tip" class="el-upload__tip">注：只能上传jpg/png文件，且不超过500kb</div>
                           
                          </el-upload>
                      </li>
                </ul>
            </div>
            <div class="sidebar-description">
                <ul>
                   <!--  <transition-group enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" name="custom-classes-transition" tag="div":duration="{ enter: 10, leave: 150 }" > -->
                        <li :key="item" v-for="(item,index) in sidebararry[0].note">
                            <i class="icon icon-head">
                            </i>
                            {{item}}
                            <i @click="removeDescription(index)" class="icon-close el-input__icon el-icon-time">
                            </i>
                        </li>
                    <!-- </transition-group> -->
                </ul>
            </div>
        </div>
        <div class="sidebar-bottom">
          <div class="textarea" contenteditable="true" v-model='inputValue' @keyup.enter='addDescription' @keydown='addText' placeholder='添加评论'>
            <!-- <span v-show="note">添加评论</span> -->
          </div>
          <div class="sidebar-bottom-time">
              几秒钟之前
          </div>
         

        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    export default{
        computed:mapState(["sidebararry","todolist","finishlist","checked","count","listnum","finishlistnum"]),
        data(){
            return {
                inputValue:'',
                options: [],
                options1: [],
              
               
                }
              },
        methods:{
             //收起侧边栏 
             sideBarClose(){
                 this.$store.dispatch('sideBarClose')
             },
             //同步星标 
             showStarActiveLoading(){
                 this.$store.dispatch('showStarActiveLoading')
             },
            
             // 添加说明
             addDescription(e){
              const o=e.target
                if(o.innerText.length>0){
                    this.$store.dispatch('addMessage',o.innerText)

                }
                o.innerText='';
                
             },
             
             addText(e){
              const o=e.target
                var code;  
                if (!e) var  e = window.event;  
                if (e.keyCode) code = e.keyCode;  
                else if (e.which) code = e.which;  
                if(code==13 && window.event){  
                    e.returnValue = false;  

                }else if(code==13){  
                    e.preventDefault();  
                }  

             
              // if(e.keyCode==13){
              //   o.style.height=28+'px'

              // }else{
              //   o.style.height='auto';
              // }
             },
             
             // 移除说明
             removeDescription(index){
                 this.$store.dispatch('removeMessage',index)

             },
             // 选择日期赋给state
             changeData(data){
              if(data){
                var d = new Date(data);  
                var formatedata=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
                 this.$store.dispatch('publicChange',['data',formatedata])
              }

            },
             // 选择时间赋给state
             changeTime(time){
              if(time){
                var d = new Date(time);  
                var formatetime=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(); 
                 this.$store.dispatch('publicChange',['time',formatetime])
              }

            },

            // 选择下拉部门赋给state
            addSelectPart(part){
              if(part){
                // this.$store.dispatch('addSelectPart',part)
                 this.$store.dispatch('publicChange',['part',part])

              }
            },
            // 选择下拉成员赋给state
            addSelectPerson(person){
              if(person){
                // this.$store.dispatch('addSelectPerson',person)
                 this.$store.dispatch('publicChange',['person',person])

              }
            },
             
            // 预览图片
            handlePreview(file) {
              window.open(file.url)
            },
            // 图片上传前判断格式
            beforeUpload(file){
                var type=file.type.indexOf('image')
                var typejpeg=file.type.indexOf('jpeg')
                var typejpg=file.type.indexOf('jpg')
                var typepng=file.type.indexOf('png')
                var size=file.size
               if((type||typejpeg||typejpg||typepng)&&(size<=512000)){
              
               }else {
                  return false
               }

             
            },
            // 图片上传成功
            handleSuccess(response, file, fileList){
                if(fileList.length>0){
                 this.$store.dispatch('addFileList',fileList)
                }
            },
            // 删除图片
             handleRemove(file, fileList) {
               this.$store.dispatch('removeFileList',fileList)
            },
            


              
               
            
        },
        // ajax获取数据
        created(){
          this.$http.get('/sideBar/options')
              .then(response=>{
                this.options=response.data.options
                this.options1=response.data.options1
               
              })
               .catch(error => {
                  console.log(error);
                  alert('网络错误，不能访问');
              })
                 
        }
}
</script>
<style lang="sass">
    @import '../sass/SideBar';
   
</style>