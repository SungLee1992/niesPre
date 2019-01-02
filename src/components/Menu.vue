<script src="../main.js"></script>
<template>
<div class="menu-wrap">
  <el-row>
    <el-col :span="4">
      <el-menu router :default-active="defaultActive" @select="handleSelect" :style="{minHeight:minHeight+'px'}">
        <el-submenu index="1">
          <template slot="title">数据预览
          </template>
          <el-menu-item index="/result/train">训练集</el-menu-item>
          <el-menu-item index="/result/validate">验证集</el-menu-item>
          <el-menu-item index="/result/new">预测记录</el-menu-item>
        </el-submenu>
        <el-menu-item index="/forecast">化学品生态毒性预测</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="20" :style="{minHeight:minHeight+'px'}" class="overFlow">
      <router-view></router-view>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  data() {
    return {
      defaultActive: '',
      selectIndex: '',
      minHeight: 0
    }
  },
  created() {
    this.defaultActive = this.$route.fullPath;
    this.selectIndex = this.defaultActive;
  },
  mounted() {
    this.minHeight = document.documentElement.clientHeight - 72 - 120; // 72:fotter高度；120 header高度 ；50 menu的margin
    let that = this;
    window.onresize = function() {
      that.minHeight = document.documentElement.clientHeight - 72 - 120;
    }
  },
  methods: {
    handleSelect(index, indexPath) {
      this.selectIndex = index;
    }
  }

}
</script>

<style>
/* background-color: rgba(228, 228, 228, 1); */

.menu-wrap {
  /*margin: 40px 50px 0;*/
  background-color: #fff;
}

.menu-wrap .overFlow {
  overflow-y: auto;
  overflow-x: hidden;

}

.menu-wrap .el-menu-item,.el-submenu{
  font-weight: bold;
  font-size: 16px;
}

.menu-wrap .el-submenu__title{
  font-size: 16px;
}


.menu-wrap .el-menu-item.is-active {
  color: black;
  background-color: #b2e17c;
  /*background-color: #e1db9f;*/
  /*background-color: #409eff;*/
}
</style>
