<template>
    <div class="tmpl">
        <!--标题区域-->
        <div class="title">
            <h4>{{ImageInfo.title}}</h4>
            <div class="time">
                <span>{{ImageInfo.add_time |fmtdate('YYYY-MM-DD HH-mm-ss')}}</span>
                <span>{{ImageInfo.click}}次浏览</span>
            </div>
        </div>
        <!--缩略图区域 使用九宫格实现样式，要使用vue-preview预览插件-->
        <div class="smallimg">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li  v-for="(item, index) in Imglist" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <div class="mui-media-body">
                        <img class="preview-img" :src="item.src" height="109" @click="$preview.open(index, Imglist)">
                    </div>
                </li>
            </ul>

        </div>
        <!--图片描述区域-->
        <div class="discrib" v-html="ImageInfo.content"></div>
        <!--评论区域-->
        <subcomment :artid="imgId"></subcomment>
    </div>
</template>
<script>
    import common from '../../kits/common.js'
    import subcomment from  '../subcomment/subcomment.vue'

    export default{
        data(){
            return {
                ImageInfo:{},
                Imglist:[],
                imgId:0
            }
        },
        created(){
            this.getimageInfo();
            this.getthumimages();
            this.imgId=this.$route.params.id
        },
        methods:{
            getimageInfo(){
                let Infoid = this.$route.params.id;
//                console.log(this.$route.params.id)
                let url = common.apihost+'/api/getimageInfo/'+Infoid;
                this.$http.get(url).then(res=>{
                        this.ImageInfo = res.body.message[0];
                },res=>{
                   console.log('获取图片详情失败')
                })

            },
            getthumimages(){
                let Infoid = this.$route.params.id;
//                console.log(this.$route.params.id)
                let url = common.apihost+'/api/getthumimages/'+Infoid;
                this.$http.get(url).then(res=>{
//                    要给每张图片预览时设置宽高
                    res.body.message.forEach(item=>{
                        item.h=400;
                        item.w=600;
                    })
                    this.Imglist = res.body.message;
                },res=>{
                    console.log('获取缩略图失败')
                })
            }
        },
        components:{
            subcomment
        },
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
        font-size: 20px;
        color: #26a2ff;
    }
    .time span{
        font-size: 14px;
        color:#b6b6b6;
    }
    .time{
        position: absolute;
        bottom:10px;
    }
    /*定义九宫格*/
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border-top:none;
        border-left:none;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border-bottom:none;
        border-right:none;
        padding:0;
    }
    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
        height: 100%;
        margin:10px 5px 0 5px;
    }
    .preview-img{
        width:100%;
        height: 100%;
    }
    /*图片描述区域*/
    .discrib{
        margin-top:15px;
    }
</style>