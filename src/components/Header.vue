<template>
<div class="header-wrap">
  <img src="../assets/logo.png" style="width:120px;height:120px;"></img>
  <div class="header">化学品生态毒理参数预测软件</div>
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style>
.header-wrap {
  height: 120px;
  /*background-color: #e1db9f;*/
  background:-o-linear-gradient(#73b451, #c8ff00,#c7ff92);
  background: linear-gradient(to right, #73b451 , #c8ff00, #c7ff92);  /* 标准的语法（必须放在最后） */
  display: flex;
  padding-left: 55px;
}

.header-wrap .header {
  font-size: 50px;
  font-family: 华文行楷;
  /*color: #029a03;*/
  color:black;
  padding-top: 35px;
  padding-left: 15px;
  text-align: left;
}
</style>
