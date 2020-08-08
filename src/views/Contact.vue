<template>
    <div>
        <el-row>
            <el-col :span="24">
                <img :src="contact0" width="100%" height="500">
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div style="max-width:1080px; margin: auto;">
                    <div class="contact-left">
                        <div class="title">联系我们</div>
                        <div class="title"> ——</div>
                        <div class ="ct">联系QQ：1472583690</div>
                        <div class ="ct">手机号码：130000000</div>
                        <div class ="ct">联系邮箱：xxx@.com</div>
                        <div class ="ct"> 联系电话：020-000000 000-000000</div>
                        <div class ="ct"> 联系地址：XXX省XXX市XXX县XXX路XXX号</div>
                    </div>
                    <div class="contact-right">
                        <div class="cqw">
                            <div class = "header">QQ</div>
                            <div>
                                <img :src="qq_img" class="img"/>
                            </div>
                        </div>
                        <div class="cqw">
                            <div class = "header">微信</div>
                            <div>
                                <img :src="weixin_img" class="img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Contact",
        data() {
            return {
                contact0: require("../assets/images/contact/contact.jpg"),
                qq_img: require("../assets/images/contact/qq.jpg"),
                weixin_img: require("../assets/images/contact/weixin.jpg"),
            }
        }
    }
</script>

<style scoped>
        .contact-left{
            text-align: left;
            width: 500px ;
            margin-top: 50px;
            float: left;
        }
        .contact-left .title {
            font-size: 40px;
            color: rgb(7, 108, 224);
            font-family: "微软雅黑";
        }
        .contact-left .ct {
            font-size: 20px;
            color: rgb(139, 139, 139);
            margin-top: 10px;
            margin-bottom: 10px;
        }
        .img {
            -moz-border-radius: 15px;
            -webkit-border-radius: 15px;
            border-radius: 15px;
            height: 159px;
            width: 165px;
        }
        .contact-right{
            width: 580px ;
            margin-top: 50px;
            float: left;
        }
        .contact-right .cqw{
            float: left;
            width: 290px;
        }
        .contact-right .header{
            font-size: 14px;
            margin-top: 10px;
            margin-bottom: 30px;
        }
</style>