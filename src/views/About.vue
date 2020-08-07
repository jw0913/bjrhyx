<template>
    <div>
        <el-row>
            <el-col :span="24">
                <img :src="about0" width="100%" height="500">
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div style="max-width:1280px; margin: auto;">
                    <div style="text-align: center;font-size: 18px;ont-family: '微软雅黑'; height: 40px; line-height: 50px;color: #666666;" >
                        <b style="border-bottom: solid 1px #000000; padding: 10px">公司简介</b>
                    </div>
                    <div style="margin-top:15px;width:100%;height:320px ">
                        <div style="width: 500px;float: left">
                            <img :src="about1" width="479px"  height="320px"/>
                        </div>
                        <div style="width: 750px;float: left; padding-left: 15px;padding-right: 15px">
                            <p style="text-indent:40px;line-height:1.9em; text-align: left">北京仁和永信科技有限公司成立于2015年，是一家专业的计算机系统集成公司。公司拥有一批受过专门训练的高素质的技术和营销人员（都是专业从事网络10年以上的人员），提供包括产品销售，工程设计，项目实施、信息化管理及技术服务支持在内的全方位集成化的服务。同时与国内外著名的品牌公司如 CISCO、华为、H3C、深信服、信锐、安盟等有良好的合作关系。是CISCO的核心高级认证代理商，华为认证代理商，深信服认证代理商，安盟白金代理商， 信锐金牌代理商等。</p>
                            <p style="text-indent:40px;line-height:1.9em; text-align: left">公司致力于网络产品的推广和专业的系统集成及网络安全业务。经过多年的发展，公司已发展成为一个以产品代理为先导、针对用户的具体需求和具体应用、提供全面解决方案的系统集成商，为用户提供集网络架构、无线部署、网络安全、视频监控、软硬件集成为一体的网络方案设计、实施及网络维护全方位的服务</p>
                        </div>
                    </div>
                </div>

            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div style="max-width:1280px; margin: auto;">
                    <div style="text-align: center;font-size: 18px;ont-family: '微软雅黑'; height: 40px; line-height: 50px;color: #666666;" >
                        <b style="border-bottom: solid 1px #000000; padding: 10px">企业资质</b>
                    </div>
                    <div style="margin-top:15px;">
                        <img v-for="item in seniority" :key="item" :src="item" style="margin-right: 40px" height="392" width="280" >
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "About",
        data() {
            return {
                about0: require("../assets/images/about/about0.jpg"),
                about1: require("../assets/images/about/about1.jpg"),
                seniority : [
                    require("../assets/images/seniority/1.jpg"),
                    require("../assets/images/seniority/2.jpg"),
                    require("../assets/images/seniority/3.jpeg"),
                    require("../assets/images/seniority/4.png")
                ],
            }
        }
    }
</script>

<style scoped>

</style>