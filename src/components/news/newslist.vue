<template>
    <div class="tmpl">
        <ul class="mui-table-view">
            <li v-for="(item,index) in list" :key="index" class="mui-table-view-cell mui-media"  >
                <router-link v-bind='{to:"/news/newsinfo/"+item.id}'>
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis'>
                            <span class="left">发表时间:{{item.add_time|fmtdate('YYYY-MM-DD')}}</span>
                            <span class="right">点击数:{{item.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    import common from '../../kits/common.js'
    export default{
        data(){
            return {
                list:[],
            }
        },
        created(){
            this.getnewslist()
        },
        methods:{
            getnewslist(){
                let url = common.apihost+'/api/getnewslist';
                this.$http.get(url).then(res=>{
                        this.list=res.body.message;
                },res=>{
                    console.log('获取数据失败')
                })
            }
        }
    }
</script>
<style scoped>
    .mui-table-view .mui-media-object{
        height:52px;
        max-width:62px;
        line-height:52px;
    }
    .mui-ellipsis{
        color:#0094ff;
    }
    .left,.right{
        position: absolute;
        bottom:10px;
    }
    .right{
        right:15px;
    }
    .mui-table-view-cell{
        padding-left:10px;
    }
</style>