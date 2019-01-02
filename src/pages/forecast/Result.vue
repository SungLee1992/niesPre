<template>
<div class="forecast-result">
  <div style="text-align:left;margin: 10px 0px;" @click="goBack()">
    <span style="color: #029a03;cursor:pointer;">&lt;&lt;返回</span>
  </div>
  <el-tabs type="border-card" @tab-click="handleClick" style="min-height:500px;">
    <el-tab-pane v-if="type.indexOf('1') > -1" label="大型溞慢性毒性">
      <div class="tip">I表示无毒，A表示有毒</div>
      <DataTable :loading="loading" :type="type1" :tableData="list1" :isForecast="true"></DataTable>
    </el-tab-pane>
    <el-tab-pane v-if="type.indexOf('2') > -1" label="鱼类慢性毒性">
      <div class="tip">I表示无毒，A表示有毒</div>
      <DataTable :loading="loading" :type="type2" :tableData="list2" :isForecast="true"></DataTable>
    </el-tab-pane>
    <el-tab-pane v-if="type.indexOf('3') > -1" label="藻类慢性毒性">
      <div class="tip">I表示无毒，A表示有毒</div>
      <DataTable :loading="loading" :type="type3" :tableData="list3" :isForecast="true"></DataTable>
    </el-tab-pane>
    <el-tab-pane v-if="type.indexOf('4') > -1" label="大型溞急性毒性">
      <div class="tip">I表示无毒，A表示有毒</div>
      <DataTable :loading="loading" :type="type4" :tableData="list4" :isForecast="true"></DataTable>
    </el-tab-pane>
  </el-tabs>
</div>
</template>
<script>
import dataTable from '@/components/dataTable.vue'
export default {
  components: {
    "DataTable": dataTable
  },
  props: {
    formData: null
  },
  data() {
    return {
      type: "",
      loading: true,
      list1: [],
      list2: [],
      list3: [],
      list4: [],
      type1: 1,
      type2: 2,
      type3: 3,
      type4: 4
    }
  },
  created() {
    this.type = this.formData.get("type");
  },
  mounted() {
    this.getResult();
  },
  methods: {
    getResult() {
      let that = this;
      this.$axios.post("/forecast/pre", this.formData).then(response => {
          that.loading = false;
          if (response.data.status == 200) {
            for (var key in response.data.data) {
              if (key == "1") {
                that.list1.push(response.data.data[key]);
              } else if (key == "2") {
                that.list2.push(response.data.data[key]);
              } else if (key == "3") {
                that.list3.push(response.data.data[key]);
              } else if (key == "4") {
                that.list4.push(response.data.data[key]);
              }
            }
          } else {
            that.$message.error(response.data.msg);
          }
          console.log(response.data.data);
        },
        error => {
          this.loading = false;
          that.$message.error("请求数据异常，请检查");
          console.log(error);
        });
    },
    handleClick(tab, event) {

    },
    goBack() {
      this.$emit("go-back");
    }
  }
}
</script>

<style>
.forecast-result .tip {
  margin-bottom: 5px;
  text-align: left;
  font-size: 14px;
  color: #f50404;
}
</style>
