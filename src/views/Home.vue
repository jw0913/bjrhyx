<template>
    <div>
        <el-row>
            <el-col :span="8" style="text-align: right">
                <div style="float: right;vertical-align: middle"><h1>北京仁和永信科技</h1></div>
                <div style="float: right"><img :src="logo" style="vertical-align:middle" width="94" height="75"/></div>
            </el-col>
            <el-col :span="16" style="padding-left: 100px">
                <el-menu :default-active="activeIndex" mode="horizontal" >
                    <el-menu-item index="1">首页</el-menu-item>
                    <el-menu-item index="2">产品中心</el-menu-item>
                    <el-menu-item index="3">解决方案</el-menu-item>
                    <el-menu-item index="4">关于我们</el-menu-item>
                    <el-menu-item index="5">联系我们</el-menu-item>
                </el-menu>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="24">
                <el-carousel height="600px" >
                    <el-carousel-item v-for="item in carousel" :key="item">
                       <img :src="item" width="100%" height="800px" />
                    </el-carousel-item>
                </el-carousel>
            </el-col>
        </el-row>

        <el-row style="background-color: #F0F8FF">
            <el-col :span="24" >
                <div style="text-align: center;font-size: 25px;ont-family: '微软雅黑'; height: 40px; line-height: 50px;color: #666666">合作伙伴</div>
                <div style="text-align: center;font-size: 18px;ont-family: '微软雅黑'; height: 40px; line-height: 50px;color: #666666" >OUR ADVANTAGE</div>
                <div style="margin-top: 10px">
                    <img v-for="item in [0,1,2,3]" :key="item" :src="logos[item]" style="margin-right: 20px" height="175" width="290" >
                </div>
                <div style="margin-top: 10px">
                    <img v-for="item in [4,5,6,7]" :key="item" :src="logos[item]" style="margin-right: 20px" height="175" width="290" >
                </div>
            </el-col>
        </el-row>

        <el-row>

        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                activeIndex : "1",
                logo: require("../assets/logo.png"),
                carousel : [
                    require("../assets/images/carousel/home1.jpg"),
                    require("../assets/images/carousel/home2.jpg"),
                    require("../assets/images/carousel/home3.jpg")
                ],
                logos:[
                    require("../assets/images/logo/1.png"),
                    require("../assets/images/logo/2.png"),
                    require("../assets/images/logo/3.png"),
                    require("../assets/images/logo/4.png"),
                    require("../assets/images/logo/5.png"),
                    require("../assets/images/logo/6.png"),
                    require("../assets/images/logo/7.png"),
                    require("../assets/images/logo/8.jpg")
                ]
            }
        }
    }
</script>

<style scoped>
    .el-menu.el-menu--horizontal {
        border-bottom: none;
    }
    .el-menu--horizontal > .el-menu-item {
        height: 70px;
        line-height: 70px;
    }
    .el-menu-item {
        font-size: 20px;
    }
    .el-menu--horizontal > .el-menu-item.is-active {
        border-bottom: 2px solid #000000;
    }

</style>