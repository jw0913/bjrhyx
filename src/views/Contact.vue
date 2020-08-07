<template>
    <div>
        <el-row>
            <el-col :span="24">
                <img :src="contact0" width="100%" height="500">
            </el-col>
        </el-row>
        <el-row>
            <div>
                <el-col :span="12"></el-col>
                <el-col :span="12"></el-col>
            </div>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Contact",
        data() {
            return {
                contact0: require("../assets/images/contact/contact.jpg"),
            }
        }
    }
</script>

<style scoped>

</style>