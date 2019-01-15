<template>
<div class="setting-result">
  <el-tabs type="border-card" @tab-click="handleClick" style="min-height:500px;height: 100%;" v-model="selectTab">
    <el-tab-pane label="大型溞慢性毒性" name="daphChr">
      <div class="tip"><span style="font-size: 14px" v-if="!isForecast">NOEC_21d值≤1mg/L的物质划分为毒性物质，否则划分为无毒性物质。</span>I表示无毒，A表示有毒</div>
      <DataTable :loading="tableObj['1'].loading" :type="tableObj['1'].type" :tableData="tableObj['1'].list" :isForecast="isForecast"></DataTable>
      <br>
      <el-pagination v-if="tableObj['1'].list.length > 0" layout="prev, pager, next, total" :current-page.sync="tableObj['1'].pageNo" background :total="tableObj['1'].total" @current-change="handleCurrentChange($event,1)"></el-pagination>
    </el-tab-pane>
    <el-tab-pane label="鱼类慢性毒性" name="fishChr">
      <div class="tip"><span style="font-size: 14px" v-if="!isForecast">LC500_96h值≤100mg/L的物质划分为毒性物质，否则划分为无毒性物质。</span>I表示无毒，A表示有毒</div>
      <DataTable :loading="tableObj['2'].loading" :type="tableObj['2'].type" :tableData="tableObj['2'].list" :isForecast="isForecast"></DataTable>
      <br>
      <el-pagination v-if="tableObj['2'].list.length > 0" layout="total, prev, pager, next" :current-page.sync="tableObj['2'].pageNo" background :total="tableObj['2'].total" @current-change="handleCurrentChange($event,2)"></el-pagination>
    </el-tab-pane>
    <el-tab-pane label="藻类慢性毒性" name="algchr">
      <div class="tip"><span style="font-size: 14px" v-if="!isForecast">NOEC_72h值≤1mg/L的物质划分为毒性物质，否则划分为无毒性物质。</span>I表示无毒，A表示有毒</div>
      <DataTable :loading="tableObj['3'].loading" :type="tableObj['3'].type" :tableData="tableObj['3'].list" :isForecast="isForecast"></DataTable>
      <br>
      <el-pagination v-if="tableObj['3'].list.length > 0" layout="total, prev, pager, next" :current-page.sync="tableObj['3'].pageNo" background :total="tableObj['3'].total" @current-change="handleCurrentChange($event,3)"></el-pagination>
    </el-tab-pane>
    <el-tab-pane label="大型溞急性毒性" name="daphAcu">
      <div class="tip"><span style="font-size: 14px" v-if="!isForecast">EC50_48h值≤100mg/L的物质划分为毒性物质，否则划分为无毒性物质。</span>I表示无毒，A表示有毒</div>
      <DataTable :loading="tableObj['4'].loading" :type="tableObj['4'].type" :tableData="tableObj['4'].list" :isForecast="isForecast"></DataTable>
      <br>
      <el-pagination v-if="tableObj['4'].list.length > 0" layout="total, prev, pager, next" :current-page.sync="tableObj['4'].pageNo" background :total="tableObj['4'].total" @current-change="handleCurrentChange($event,4)"></el-pagination>
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
    dataType: ""
  },
  data() {
    return {
      selectTab: "daphChr",
      isForecast: false,
      tableObj: {
        "1": {
          url: "/data/set/daphchr/list",
          pageNo: 1,
          pageSize: 10,
          total: 0,
          list: [],
          loading: true,
          type: 1
        },
        "2": {
          url: "/data/set/fishchr/list",
          pageNo: 1,
          pageSize: 10,
          total: 0,
          list: [],
          loading: true,
          type: 2
        },
        "3": {
          url: "/data/set/algchr/list",
          pageNo: 1,
          pageSize: 10,
          total: 0,
          list: [],
          loading: true,
          type: 3
        },
        "4": {
          url: "/data/set/daphacu/list",
          pageNo: 1,
          pageSize: 10,
          total: 0,
          list: [],
          loading: true,
          type: 4
        }
      }
    }
  },
  created() {
    if (this.$route.fullPath === "/result/new") {
      this.isForecast = true;
    }
  },
  watch: {
    dataType: "refresh"
  },
  mounted() {
    this.getResult(1);
  },
  methods: {
    refresh() {
      // 初始化设置
      this.selectTab = "daphChr";
      this.tableObj["1"].pageNo = 1;
      this.tableObj["2"].pageNo = 1;
      this.tableObj["3"].pageNo = 1;
      this.tableObj["4"].pageNo = 1;
      if (this.$route.fullPath === "/result/new") {
        this.isForecast = true;
      } else {
        this.isForecast = false;
      }
      this.getResult(1);
    },
    getResult(type) {
      this.tableObj[type].loading = true;
      this.$axios.post(this.tableObj[type].url, this.$qs.stringify({
        dataType: this.dataType,
        pageNo: this.tableObj[type].pageNo,
        pageSize: this.tableObj[type].pageSize
      })).then(response => {
        this.tableObj[type].loading = false;
        this.tableObj[type].list = response.data.data.data;
        this.tableObj[type].total = response.data.data.total;
      }, error => {
        this.tableObj[type].loading = false;
		this.tableObj[type].list = response.data.data.data;
        this.tableObj[type].total = response.data.data.total;
        this.$message.error("请求数据异常，请检查");
        console.log(error);
      });
    },
    handleClick(tab, event) {
      this.getResult(parseInt(tab.index) + 1);
    },
    handleCurrentChange(val, type) {
      this.tableObj[type].pageNo = val;
      this.getResult(type);
    }
  }
}
</script>

<style>
.setting-result .tip {
  margin-bottom: 16px;
  text-align: left;
  font-size: 14px;
  color: #f50404;
}
</style>
