<template>
    <div class="app">
       <!--整个项目的头部-->
        <mt-header fixed title="vue管理系统"></mt-header>
        <div class="back">
            <a @click="goback" v-show="isShow">返回</a>
        </div>
         <!--路由占位，将来所有的组件都是替换整个位置实现跳转-->
        <router-view></router-view>
        <!--整个项目的底部-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item " to="/Home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/member">
                <span class="mui-icon mui-icon-email"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shopcar">
                <span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/search">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                isShow:false,
            }
        },
//        created(){
////            当前app.vue加载页面完毕后触发
//                this.isShow=false;
//
//        },
        watch:{
            //        监控当前页面的url是否是home，如果是就不显示返回，如果不是就加上返回
            '$route':function(val,oldval){
                if(val.path=='/Home'){
                    this.isShow=false;
                }else{
                    this.isShow=true;
                }

            }
        },
        methods:{
            goback(){
                this.$router.go(-1);
            }
        }
    }
</script>
<style scoped>
    .back{
        position:fixed;
        top:10px;
        left:10px;
        z-index:50;
    }
    .back a{
        font-style: 16px;
        color: #fff;
    }
</style>