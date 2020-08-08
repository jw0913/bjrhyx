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
                    <div v-for="item in supplier" :key="item.sid" v-bind:class="{ 'active': item.sid == input.sid}"
                         @click="selectSid(item.sid)">{{item.name}}
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="md2">
                    <div class="md2_left">
                        <div v-for="item in category" :key="item.cid"
                             v-bind:class="{ 'category_active': item.cid == input.cid}" @click="selectCid(item.cid)">
                            {{item.name}}
                        </div>
                    </div>
                    <div class="md2_right">
                        <div class="product" v-for="item in products" :key="item.pid">
                            <div><img :src="item.icon" class="product-img"></div>
                            <div>{{item.name}}</div>
                        </div>
                    </div>
                </div>

            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Product",
        data() {
            return {
                input: {
                    sid: "1",
                    cid: "1"
                },
                carousel: [
                    require("../assets/images/carousel/3000181.jpg"),
                    require("../assets/images/carousel/3000183.jpg"),
                    require("../assets/images/carousel/3000195.jpg"),
                ],
                supplier: [
                    {name: "华为", sid: "1"},
                    {name: "H3C", sid: "2"},
                    {name: "思科", sid: "3"},
                    {name: "深信服", sid: "4"},
                    {name: "安盟", sid: "5"},
                    {name: "信锐", sid: "6"}
                ],
                category: [
                    {name: "交换机", cid: "1"},
                    {name: "路由器", cid: "2"},
                    {name: "防火墙", cid: "3"},
                    {name: "服务器", cid: "4"},
                    {name: "视频会议", cid: "5"},
                    {name: "无线", cid: "6"},
                    {name: "配件", cid: "7"}
                ],
                products: [
                    {
                        pid: "1",
                        name: "S12700系列交换机",
                        sid: "1",
                        cid: "1",
                        icon: require("../assets/images/product/p1.png")
                    },
                    {
                        pid: "2",
                        name: "S7700系列交换机",
                        sid: "1",
                        cid: "1",
                        icon: require("../assets/images/product/p2.png")
                    },
                    {
                        pid: "3",
                        name: "S5735宽温交换机",
                        sid: "1",
                        cid: "1",
                        icon: require("../assets/images/product/p3.png")
                    },
                    {
                        pid: "4",
                        name: "S5735宽温交换机",
                        sid: "1",
                        cid: "1",
                        icon: require("../assets/images/product/p4.png")
                    },
                    {
                        pid: "5",
                        name: "S5730系列交换机",
                        sid: "1",
                        cid: "1",
                        icon: require("../assets/images/product/p5.png")
                    },
                    {
                        pid: "6",
                        name: "S5720系列交换机",
                        sid: "1",
                        cid: "1",
                        icon: require("../assets/images/product/p6.png")
                    },
                    {
                        pid: "7",
                        name: "S2700系列交换机",
                        sid: "1",
                        cid: "1",
                        icon: require("../assets/images/product/p7.png")
                    },
                    {
                        pid: "8",
                        name: "S1700系列交换机 ",
                        sid: "1",
                        cid: "1",
                        icon: require("../assets/images/product/p8.png")
                    },
                    {
                        pid: "9",
                        name: "S12700系列交换机",
                        sid: "1",
                        cid: "1",
                        icon: require("../assets/images/product/p1.png")
                    },
                    {
                        pid: "10",
                        name: "S7700系列交换机 ",
                        sid: "1",
                        cid: "1",
                        icon: require("../assets/images/product/p2.png")
                    },
                    {
                        pid: "11",
                        name: "S5735宽温交换机 ",
                        sid: "1",
                        cid: "1",
                        icon: require("../assets/images/product/p3.png")
                    },
                    {
                        pid: "12",
                        name: "S5735宽温交换机 ",
                        sid: "1",
                        cid: "1",
                        icon: require("../assets/images/product/p4.png")
                    },
                ]
            }
        },
        methods: {
            selectSid(sid) {
                this.input.sid = sid;
            },
            selectCid(cid) {
                this.input.cid = cid;
            }
        }
    }
</script>

<style scoped>
    .md1 {
        max-width: 1280px;
        margin: 20px auto;
        font-size: 18px;
        font-family: "微软雅黑";
        height: 50px;
    }

    .md1 > div {
        height: 50px;
        line-height: 50px;
        width: 100px;
        margin-left: 20px;
        float: none;
        display: inline-block;
        cursor: pointer;
        background-color: #CCCCCC;
        color: #FFFFFF;
    }

    .md1 > active {
        background-color: #666666;
    }

    .md1 > div:hover {
        background-color: #666666;
    }

    .active {
        background-color: #666666 !important;
    }

    .md2 {
        max-width: 1280px;
        margin: 20px auto;
        font-size: 16px;
        font-family: "微软雅黑";
        min-height: 500px;
    }

    .md2_left {
        float: left;
        width: 150px;
    }

    .md2_left > div {
        border-bottom: 1px solid #FAF0E6;
        border-left: 1px solid #FAF0E6;
        border-right: 1px solid #FAF0E6;
        height: 45px;
        line-height: 45px;
        cursor: pointer;
    }

    .md2_left > div:hover {
        background-color: #009fe9;
        color: #FFFFFF;
    }

    .category_active {
        background-color: #009fe9 !important;
        color: #FFFFFF!important;
    }

    .md2_right {
        float: left;
        width: 1130px;
    }

    .product {
        float: none;
        display: inline-block;
        cursor: pointer;
        margin: 10px;
    }

    .product-img {
        height: 150px;
        width: 260px;
    }

</style>