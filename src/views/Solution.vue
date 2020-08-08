<template>
    <div>
        <el-row>
            <el-col :span="24">
                <img :src="solution[0]" width="100%" height="500">
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div style="max-width:1280px; margin: auto;">
                    <div class="title"><span>客户案例</span></div>
                    <div class="col-div height-300">
                        <div>
                            <h2>无线办公</h2>
                            <p>
                                徐州城市轨道交通线网控制中心大楼，结合物理分布和实际网络结构特点，遵循架构统一，系统管理，可准确定位，高效运营，能全面满足项目无线网络的建设需求，本次建设一套完整的无线wifi网络系统，保证网络的无线wifi全覆盖。
                                大型企业在无线网络建设期间要充分考虑访客（领导、客户、合作伙伴）接入网络的需求。首先从安全性考虑，访客网络必须要和办公网络分开，访客网络单独提供给访客使用。
                            </p>
                        </div>
                        <div>
                            <img :src="solution[1]" class="img float_in_img"/>
                        </div>
                    </div>
                    <div class="col-div height-300">
                        <div>
                            <img :src="solution[2]" class="img float_in_img"/>
                        </div>
                        <div>
                            <h2>智慧校园</h2>
                            <p>
                                新疆兵团智慧校园，建设院校的网络环境，包括校园网、物联网、互联网等，完成校园的基础信息化建设，新建设一个院校数据中心，业务平台的数据资源通过抽取、治理和融合后，同步到数据中心，构建完整的数据资源池，实现和上级院校数据中心的纵向互联以及校园内外各机构、部门和平台的信息交互。
                                本次构建的系统有：安防监控系统、出入口安全管理系统、互联网门禁报警系统、巡更系统、信息发布系统、环境控制系统、数字电话系统。
                            </p>
                        </div>
                    </div>
                    <div class="col-div height-300">
                        <div>
                            <h2>智慧矿山</h2>
                            <p>
                                龙凤煤矿智慧矿山，网络安全等级保护按照三级建设，网络安全策略采用设备安全、网络安全、数据安全、联网安全等一系列软硬件安全措施，部署网络安全系统，保证综合监控及自动化网络与所有子系统的安全，保证综合监控及自动化网络与企业信息网络的安全隔离。
                                本次构建的网络分为工业环网和办公网，办公网采用防火墙、上网行为管理、防病毒软件等实现办公网的安全防护，工业网由网闸（或光闸）做双机热备实现数据的单向传输，保证工业生产的安全可靠。
                            </p>
                        </div>
                        <div>
                            <img :src="solution[3]" class="img float_in_img"/>
                        </div>
                    </div>
                    <div class="col-div height-300">
                        <div>
                            <img :src="solution[4]" class="img float_in_img"/>
                        </div>
                        <div>
                            <h2>视频会议</h2>
                            <p>
                                新疆天业集团，4K超高清视频，色彩细腻，层次丰富，H265编解码+华为专利技术VME，超强网络适应性，视频30%抗丢包。
                                支持主流音频、视频接口，灵活外接阵列麦克风、扬声器、投影仪、LCD/LED大屏显示设备，PC、手机无线投屏，无需繁琐连线，音频、视频、图片、PPT皆可共享。
                            </p>
                        </div>
                    </div>
                </div>
                <br/>
                <div style="max-width:1280px; margin: auto;">
                    <div class="title"><span>网络规划解决方案</span></div>
                    <div class="col-div height-500">
                        <div>
                            <h2>中小型企业园区/分支出口解决方案</h2>
                            <p>
                                园区网出口一般位于企业网内部网络与外部网络的连接处，是内部网络与外部网络之间数据流的唯一出入口。对于中小型企业来说，考虑到企业网络建设的初期投资与长期运维成本，一般希望将多种业务部署在同一设备上。企业网络用户一般同时需要访问Internet和私网VPN，而对于中小型企业来说考虑到建设及维护成本问题，一般租用运营商Internet网络组建私网VPN。对于部分可靠性要求较高的园区网络，一般考虑部署两台出口路由器做冗余备份实现设备级可靠性，同时应用链路聚合、VRRP、主备路由等技术保证园区出口的可靠性。华为AR系列路由器配合华为S系列交换机是中小型园区网出口设备的理想解决方案。
                            </p>
                            <ul>
                                <li>
                                    （1）园区出口设备需要具备NAT Outbound及NAT
                                    Server的功能，实现私网地址和公网地址之间的转换，以满足用户访问Internet或者Internet用户访问内网服务器的需求。
                                </li>
                                <li>
                                    （2）园区出口设备需要具备通过Internet构建私网VPN的功能，以满足企业用户各个机构之间私网VPN互通的需求。
                                </li>
                                <li>
                                    （3）园区出口设备需要具备数据加密传输的功能，以保证数据的完整性和机密性，保障用户业务传输的安全。
                                </li>
                                <li>
                                    （4）中小型园区出口需要具备可靠性、安全性、低成本、易维护等特点。
                                </li>
                            </ul>

                        </div>
                        <div>
                            <img :src="solution[5]" class="img"/>
                        </div>
                    </div>
                    <div class="col-div height-500">
                        <div>
                            <img :src="solution[5]" class="img"/>
                        </div>
                        <div>
                            <h2>高校敏捷园区网络解决方案</h2>
                            <p>
                                校园网发展到现在，承载的业务越发多种多样：智能移动终端在校园的普及带来访问用户位置多变和无线访问量倍速增长；云计算带来的业务实时性、服务虚拟化；高清视频；社交网络等等，这些都给现有网络部署带来了挑战。为了解决以上挑战，华为基于SDN思想，把敏捷概念引入园区网络，实现高性能校园核心以及高效无线接入，让网络更敏捷地为业务服务。
                            </p>
                            <ul>
                                <li>
                                    <b>有线无线深度融合：</b>
                                    敏捷交换机内置随板AC，将有线无线融合成一张网络，简化了管理员对有线网络和无线网络的配置和维护工作。同时敏捷交换机上的交换能力和可扩展性也完全消除了AC设备或AC插卡集中转发的流量瓶颈。
                                </li>
                                <li>
                                    <b>业务随行：</b>
                                    业务随行实现了身份信息的全网统一，不管用户从哪里接入，用什么IP地址，都可以在网络中享受一致的权限和体验。
                                </li>
                                <li>
                                    <b>虚拟化技术SVF：</b>
                                    SVF将核心、汇聚、接入三层交换机虚拟化为一台“超级交换机”，汇聚层和接入层交换机配置由核心交换机统一下发，由核心交换机来对汇聚、接入交换机进行统一管理。
                                </li>
                                <li>
                                    <b>质量感知iPCA：</b>
                                    iPCA统计一条或多条流量经过的路径上每一台设备上的报文收发情况，一旦出现丢包的情况，网管立即可以感知并定位。实现了网络业务的随流检测和实时检测。
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Solution",
        data() {
            return {
                solution: [
                    require("../assets/images/solution/solution.jpg"),
                    require("../assets/images/solution/solution1.jpg"),
                    require("../assets/images/solution/solution2.jpg"),
                    require("../assets/images/solution/solution3.jpg"),
                    require("../assets/images/solution/solution4.jpg"),
                    require("../assets/images/solution/solution5.png"),
                ],
            }
        }
    }
</script>

<style scoped>
    .title {
        margin-top: 15px;
        font-size: 26px;
        height: 30px;
        line-height: 30px;
        color: #666666;
        word-wrap: break-word;
        font-family: "微软雅黑";
    }

    .col-div {
        margin-top: 50px;
        font-size: 15px;
    }

    .height-300 {
        height: 300px;
    }

    .col-div > div {
        float: left;
        width: 562px;
        margin-right: 60px;

    }

    .col-div > div > p {
        text-indent: 30px;
        line-height: 1.8em;
        text-align: left;
        margin: 0px;
        padding: 0px;
    }

    .col-div > div > ul {
        margin: 0px;
        padding: 0px;
        text-align: left;
    }

    .col-div > div > ul > li {
        list-style: none;
        line-height: 1.8em;
    }

    .col-div > div > img {
        border: 1px solid #dedede;
        -moz-border-radius: 15px;
        -webkit-border-radius: 15px;
        border-radius: 15px;
    }

    .float_in_img {
        height: 300px;
        width: 562px;
    }

    .height-500 {
        height: 600px;
    }
</style>