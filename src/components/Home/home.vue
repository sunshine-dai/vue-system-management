<template>
    <div class="tmpl">
                <!--使用subswipe组件实现轮播图-->
                 <subSwipe :imagelist="list"></subSwipe>

        <!--利用mui设置九宫格-->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/news/newslist">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/photo/photolist">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                    <div class="mui-media-body">图片分享</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">商品购买</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">留言反馈</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">视频专区</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">联系我们</div></a></li>
            </ul>
        </div>
    </div>
</template>
<script>
    //导入subswipe.vue组件
    import subSwipe from '../subcomp/subswipe.vue'
    import common from '../../kits/common.js'
    export default{
        data(){
            return {
//                 list: [{
//                 			url: 'http://www.itcast.cn/subject/phoneweb/index.html',
//                 			img: 'http://ofv795nmp.bkt.clouddn.com/vuelogobanner1.jpg'
//                 		}, {
//                 			url: 'http://www.itcast.cn/subject/phoneweb/index.html',
//                 			img: 'http://ofv795nmp.bkt.clouddn.com/vuelogobanner2-1.jpg'
//                 		}]
                list:[]
            }
        },
        created(){
            this.getlunbo();
        },
        methods:{
            getlunbo(){
                var url =common.apihost+'/api/getlunbo';
                this.$http.get(url).then(res=>{
                    this.list = res.body.message;
//                    console.log('ok')
                },res=>{
                    console.log('获取轮播图失败')
                })

            }
        },
        components:{
            subSwipe
        }
    }
</script>
<style scoped>
    /*scoped表示该样式在该组件中才有用*/

    /*定义九宫格样式*/
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border-top:none;
        border-left:none;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border-right:none;
        border-bottom:none;
    }
    .mui-icon{
        width: 50px;
        height: 50px;
    }
    .mui-icon-home:before,
    .mui-icon-email:before,
    .mui-icon-chatbubble:before,
    .mui-icon-location:before,
    .mui-icon-search:before,
    .mui-icon-phone:before{
        content: '';
    }
    .mui-icon-home{
        background-image: url(../../../statics/images/loading.png);
        -webkit-background-size:;
        background-size:cover;
    }
    .mui-icon-email{
        background-image: url(../../../statics/images/menu3.png);
        -webkit-background-size:;
        background-size:cover;
    }
    .mui-icon-chatbubble{
        background-image: url(../../../statics/images/menu4.png);
        -webkit-background-size:;
        background-size:cover;
    }
    .mui-icon-location{
        background-image: url(../../../statics/images/menu5.png);
        -webkit-background-size:;
        background-size:cover;
    }
    .mui-icon-search{
        background-image: url(../../../statics/images/menu6.png);
        -webkit-background-size:;
        background-size:cover;
    }
    .mui-icon-phone{
        background-image: url(../../../statics/images/menu9.png);
        -webkit-background-size:;
        background-size:cover;
    }
</style>