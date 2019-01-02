<template>
<div class="setting-pages">
  <el-tabs type="border-card" @tab-click="handleClick">
    <el-tab-pane label="训练集">
      <DataTable :tableData="trainList"></DataTable>
    </el-tab-pane>
    <el-tab-pane label="验证集">
      <DataTable :tableData="testList"></DataTable>
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
  data() {
    return {
      trainList: [{
        CASNO: "000067-48-1",
        SmilesNO: "C[N+](C)(C)CCO.[Cl-]",
        MLOGP: "-3.355",
        SpMax: "2.797",
        Mor04s: "3.399",
        SM02: "0",
        RDF075s: "0",
        NOEC: "30",
        shiyan: "I",
        yuce: "I"
      }, {
        CASNO: "000067-48-1",
        SmilesNO: "C[N+](C)(C)CCO.[Cl-]",
        MLOGP: "-3.355",
        SpMax: "2.797",
        Mor04s: "3.399",
        SM02: "0",
        RDF075s: "0",
        NOEC: "30",
        shiyan: "I",
        yuce: "I"
      }],
      testList: [],
      loading: false
    }
  },
  mounted() {},
  methods: {
    handleClick(tab, event) {
      this.loading = true;
      if (tab.paneName == 0) { //训练集
        this.getTrainData();
      } else if (tab.paneName == 1) { // 验证集
        this.getTestData();
      }
    },
    getTrainData() {
      this.loading = false;
    },
    getTestData() {
      this.loading = false;
    }
  }
}
</script>

<style>
.setting-pages {
  padding: 50px;
}
</style>
