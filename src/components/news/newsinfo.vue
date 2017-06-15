<template>
    <div class="tmpl">
        <div class="title">
            <h4>{{article.title}}</h4>
           <div class="time">
               <span>{{article.add_time|fmtdate('YYYY-MM-DD HH-mm-ss')}}</span>
               <span>{{article.click}}次浏览</span>
               <span>分类:经济民生</span>
           </div>
        </div>
        <div v-html="article.content" class="content">

        </div>
        <!--3.0绑定artid-->
        <subcomment :artid="artid"></subcomment>
    </div>
</template>
<script>
    import common from '../../kits/common.js'
    import subcomment from '../subcomment/subcomment.vue'
    export default{
        data(){
            return {
                article:{},
//                1.0定义 artid 用来接收存储当前页面id
                artid:0,
            }
        },
        created(){
//            2.0赋值，存储当前评论数据所属内容的id
            this.artid=this.$route.params.id;
            this.getarticle()
        },
        components:{
            subcomment
        },
        methods:{
            getarticle(){
//                获取当前页面id
                let id = this.$route.params.id;
//                拼接URL
                let url=common.apihost+'/api/getnew/'+id;
                this.$http.get(url).then(res=>{
//                    message是一个数组，数据是索引0,里面是对象
                    this.article=res.body.message[0];
                },res=>{
                   console.log('获取图文详情失败')
                })
            }
        }
    }
</script>
<style scoped>
    .title{
        height:100px;
        border-bottom:2px solid #b6b6b6;
        padding:5px;
        position: relative;
    }
    .title h4{
        font-style: 20px;
    }
    .time span{
        font-size: 14px;
        color:#b6b6b6;
    }
    .time{
        position: absolute;
        bottom:0px;
    }
    .content{
        padding:5px;

    }

</style>