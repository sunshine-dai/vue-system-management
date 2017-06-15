<template>
    <div class="tmpl">
        <div class="subcom">
            <p>提交评论</p>
            <a @click="goback">返回</a>
        </div>
        <div class="txtarea">
            <textarea placeholder="请输入评论内容" ref="postcontent"></textarea>
        </div>
        <div class="mtbutton">
            <mt-button type="primary" size="large" v-on:click="postcomment">发表</mt-button>
        </div>
        <div class="commentlist">
            <span class="clist">评论列表</span>
            <span class="clistr">评论</span>
        </div>
            <ul class="commentinfo">
                <li v-for="item in comments">
                    <p class="content"> {{item.content}}</p>
                    <a class="user">{{item.user_name}}</a>
                    <p class="time">{{item.add_time|fmtdate('YYYY-MM-DD HH:mm:ss')}}</p>
                </li>
            </ul>
        <!--获取更多-->
        <div class="more">
            <mt-button class="more" type="danger" size="large" plain @click="getmore">加载更多</mt-button>

        </div>
    </div>
</template>
<script>
    import common from '../../kits/common.js'
    import {Toast} from  'mint-ui'
    export default{
        data(){
            return {
                comments:[],//存放当前数据列表
                pageindex:1
            }
        },
        created(){
            this.getcomment(1)
        },
        methods:{
//            1提交评论
            postcomment(){
                let url =common.apihost+ '/api/postcomment/'+this.artid;
//                获取文本域中的文本 在dom元素上用ref注册
                let commentstext = this.$refs.postcontent.value;
//                console.log(this.$refs.postcontent.value)
//                判断是否有值
                if(!commentstext ||commentstext.trim().length<=0){
                    Toast('请填写评论内容');
                    return;

                }
                this.$http.post(url,{content:commentstext},{emulateJSON:true}).then(res=>{
//                    提交成功提示信息
                    Toast('评论提交成功');
//                    重新加载评论
                    this.getcomment(this.pageindex,true);
//                    清空文本域
                    this.$refs.postcontent.value=''
                },res=>{
                    console.log('提交评论失败')
                })
            },
//           2获取评论
            getcomment(pageindex,isreload){
                let url =common.apihost+'/api/getcomments/'+this.artid+'?pageindex='+pageindex;
//                console.log(url)
                this.$http.get(url).then(res=>{
//                   this.comments=res.body.message
//                    改造加载更多功能，需要在原来的comments上追加
                    if(isreload){
                          this.comments=res.body.message
                    }else{
//                        加载更多
                        this.comments=this.comments.concat(res.body.message);

                    }
                },res=>{
                    console.log('获取评论数据失败')
                })
            },
//            获取更多评论
            getmore(){
//                1.0点击更多的时候pageindex+1
                this.pageindex++;
//                2.0将自增以后的值传入getcomment中
                this.getcomment(this.pageindex)


            },
            goback(){
                this.$router.go(-1);
            }
        },
        props:['artid']//接收用来接收当前评论数据所属内容的id
    }
</script>
<style scoped>
    .subcom{
        height:40px;
        border-bottom:1px solid #b6b6b6;
        padding:5px;
    }
    .subcom p{
        display: inline-block;
        font-size: 20px;
        font-weight:700;
    }
    .subcom a{
        position: relative;
        left:150px;
    }
    .txtarea{
        padding: 10px 10px 0 10px;
    }
    textarea{
        height:80px;
        max-height:80px;
    }
    .mtbutton{
        padding:10px;
    }
    .commentlist{
        height:50px;
        line-height:50px;
        border-top:1px solid #b6b6b6;
        border-bottom:1px solid #b6b6b6;
        padding:0 10px;
    }
   .clist{
        font-size:20px;
       font-weight:700;
    }
    .clistr{
        position: relative;
        left:150px;
        color: #b6b6b6;
    }
    .commentinfo{
        padding:0 10px;
        margin: 0;
        list-style: none;
    }
    .commentinfo li{
        border-bottom:1px solid #b6b6b6;
        padding:10px 0;
        font-size: 16px;
    }
    .time{
        float: right;
        position: relative;
        bottom:-8px;
    }
    .user{
        position: relative;
        bottom:-8px;
    }
    .more{
        padding:10px 0;
    }
</style>