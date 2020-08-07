<!--suppress ALL -->
<template>
    <el-container id="app">
      <el-header>
        <el-row>
          <el-col :span="8" style="text-align: right">
            <div style="float: right;vertical-align: middle"><h1>北京仁和永信科技</h1></div>
            <div style="float: right"><img :src="logo" style="vertical-align:middle" width="94" height="75"/></div>
          </el-col>
          <el-col :span="16" style="padding-left: 100px">
            <el-menu :default-active="activeIndex" mode="horizontal" >
              <el-menu-item v-for="item in $router.options.routes" :key="item.path" :index="item.path" @click="activeIndex=item.path;$router.push(item.path)" >{{item.name}}</el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <transition name="fade"
                    mode="out-in">
          <router-view></router-view>
        </transition>
      </el-main>
      <el-footer>
        <div style="max-width:1280px;margin-left: auto; margin-right: auto;">
          <div style="margin-top: 30px; text-align: center;color:#FFF;height: 30px;line-height: 30px">
            <el-breadcrumb separator="|" >
              <el-breadcrumb-item  v-for="item in $router.options.routes" :key="item.path">
                <a @click="activeIndex=item.path;$router.push(item.path)" href="javascript:void(0)" style="color: #FFF">{{item.name}}</a>
              </el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div style="text-align: center;color:#FFF;height: 25px;line-height: 25px "> Copyright © 2004 - 2020 北京仁和永信科技 版权所有</div>
          <div style="text-align: center;color:#FFF;height: 25px;line-height: 25px ">  京公网安备 22000002000088号|京ICP证076359号</div>
        </div>
      </el-footer>
    </el-container>
</template>

<script>
    export default {
        name: "App",
        data() {
            return {
                activeIndex : "/",
                logo: require("./assets/logo.png"),
            }
        }
    }
</script>

<style scoped>
  #app {
    font-family: "宋体","新宋体",sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    min-width:1280px;
  }

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

  .el-header {
      padding-right: 0px;
      padding-left: 0px;
  }

  .el-main {
    padding-right: 0px;
    padding-left: 0px;
    overflow: hidden;
  }
  .el-footer {
    background: #2d2d2d;
    height: 130px !important;
  }
  .el-breadcrumb__item {
    float: none;
  }
</style>
