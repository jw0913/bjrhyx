<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-carousel height="600px">
                    <el-carousel-item v-for="item in carousel" :key="item">
                        <img :src="item" width="100%" height="800px"/>
                    </el-carousel-item>
                </el-carousel>
            </el-col>
        </el-row>


        <el-row>
            <el-col :span="24">
                <div class="md1">
                    <div class="title font1"><b>选择我们</b></div>
                    <div class="title font2">——用事实说话，用实力证明——</div>
                    <div>
                        <el-col :span="8">
                            <div class="head"><b>10年</b></div>
                            <div>丰富行业经验</div>
                        </el-col>
                        <el-col :span="8">
                            <div class="head"><b>1000+</b></div>
                            <div>企业客户共同信赖</div>
                        </el-col>
                        <el-col :span="8">
                            <div class="head"><b>3000+</b></div>
                            <div>成功案例真实呈现</div>
                        </el-col>
                    </div>
                </div>
                <div class="md2">
                    <div>
                        <el-col :span="8">
                            <div class="head"><b>一站式服务</b></div>
                            <div class="content"><p>网络规划、机房建设、网络改造、网络维护等一步到位</p></div>
                        </el-col>
                        <el-col :span="8">
                            <div class="head"><b>一对一专业顾问</b></div>
                            <div class="content"><p>优质服务，一对一专业顾问，7*24小时在线售后服务</p></div>
                        </el-col>
                        <el-col :span="8">
                            <div class="head"><b>专业资深技术</b></div>
                            <div class="content"><p>10年网络行业经验的技术团队，每年参加专业的技术培训</p></div>
                        </el-col>
                    </div>
                </div>
            </el-col>
        </el-row>

        <el-row style="background-color: #F0F8FF">
            <el-col :span="24">
                <div class="title">
                    合作伙伴
                </div>
                <div class="title">
                    OUR ADVANTAGE
                </div>
                <div style="margin-top: 10px">
                    <img v-for="item in [0,1,2,3]" :key="item" :src="logos[item]" style="margin-right: 20px"
                         height="175" width="290">
                </div>
                <div style="margin-top: 10px">
                    <img v-for="item in [4,5,6,7]" :key="item" :src="logos[item]" style="margin-right: 20px"
                         height="175" width="290">
                </div>
            </el-col>
        </el-row>


    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                carousel: [
                    require("../assets/images/carousel/home1.jpg"),
                    require("../assets/images/carousel/home2.jpg"),
                    require("../assets/images/carousel/home3.jpg")
                ],
                logos: [
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
    .title {
        text-align: center;font-size: 25px;ont-family: '微软雅黑'; height: 40px; line-height: 50px;color: #666666
    }
    .md1 {
        max-width: 1280px;
        margin: 50px auto;
        font-size: 18px;
        font-family: "微软雅黑";
        height: 180px;
    }

    .md1 .head {
        color: rgb(31, 135, 232);
        font-size: 60px;
    }

    .md1 .title {
        text-align: center;
        ont-family: '微软雅黑';
        height: 40px;
        line-height: 40px;
        color: #666666;
    }

    .md1 .font1 {
        font-size: 30px;
    }
    .md1 .font2 {
        font-size: 18px;
    }

    .md2 {
        max-width: 1280px;
        margin:50px auto;
        font-size: 18px;
    }

    .md2 .head {
        color: rgb(31, 135, 232);
        font-size: 25px;
    }

    .md2 .content {
        padding-left: 80px;
        padding-right: 80px;
        font-size: 14px;
        text-indent:40px;line-height:1.9em;
    }

</style>