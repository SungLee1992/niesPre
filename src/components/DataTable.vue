<template>
<div class="result-pages">
  <el-table v-loading="loading" :data="tableData" border style="width: 100%">
    <el-table-column prop="casNo" label="CAS NO." align="center" width="120">
    </el-table-column>
    <el-table-column label="Smiles NO." align="center">
      <template slot-scope="scope">
        <span v-text="scope.row.smiles" :title="scope.row.smiles"></span>
      </template>
    </el-table-column>
    <el-table-column v-if="type == 1" label="描述符" align="center">
      <el-table-column prop="mlogp" label="MLOGP" align="center" width="80">
      </el-table-column>
      <el-table-column prop="spmaxEari" label="SpMax_EA(ri)" align="center" width="130">
      </el-table-column>
      <el-table-column prop="mor04s" label="Mor04s" align="center" width="80">
      </el-table-column>
      <el-table-column prop="sm02Aeadm" label="SM02_AEA(dm)" align="center" width="150">
      </el-table-column>
      <el-table-column prop="rdf075s" label="RDF075s" align="center" width="90">
      </el-table-column>
    </el-table-column>
    <el-table-column v-if="type == 2" label="描述符" align="center">
      <el-table-column prop="spmaxaEadm" label="SpMaxA_EA(dm)" align="center" width="150">
      </el-table-column>
      <el-table-column prop="mpc07" label="MPC07" align="center" width="80">
      </el-table-column>
      <el-table-column prop="cats2d05Ll" label="CATS2D_05_LL" align="center" width="140">
      </el-table-column>
    </el-table-column>
    <el-table-column v-if="type == 3" label="描述符" align="center">
      <el-table-column prop="spmax6Bhm" label="SpMax6_Bh(m)" align="center" width="140">
      </el-table-column>
      <el-table-column prop="gats5i" label="GATS5i" align="center" width="80">
      </el-table-column>
      <el-table-column prop="mor15s" label="Mor15s" align="center" width="80">
      </el-table-column>
      <el-table-column prop="logkow" label="logKow" align="center" width="80">
      </el-table-column>
      <el-table-column prop="ats6m" label="ATS6m" align="center" width="80">
      </el-table-column>
    </el-table-column>
    <el-table-column v-if="type == 4" label="描述符" align="center">
      <el-table-column prop="ncrq" label="nCrq" align="center" width="60">
      </el-table-column>
      <el-table-column prop="f04ns" label="F04[N-S]" align="center" width="90">
      </el-table-column>
      <el-table-column prop="bo4oo" label="B04[O-O]" align="center" width="100">
      </el-table-column>
      <el-table-column prop="f08oo" label="F08[O-O]" align="center" width="100">
      </el-table-column>
      <el-table-column prop="eig08Aeabo" label="Eig08_AEA(bo)" align="center" width="140">
      </el-table-column>
      <el-table-column prop="b02ncl" label="B02[N-Cl]" align="center" width="100">
      </el-table-column>
    </el-table-column>
    <el-table-column v-if="!isForecast" label="定量实验值" align="center">
      <el-table-column :prop="dingliang.prop" :label="dingliang.label" align="center" width="105">
      </el-table-column>
    </el-table-column>
    <el-table-column v-if="!isForecast" label="定性值" align="center">
      <el-table-column label="实验值" align="center" width="70">
        <template slot-scope="scope">
          <span v-if="scope.row.expValue === '0'">I</span>
          <span v-if="scope.row.expValue === '1'">A</span>
          <span v-if="scope.row.expValue === 'A' || scope.row.expValue==='I'" v-text="scope.row.expValue"></span>
        </template>
      </el-table-column>
      <el-table-column label="预测值" align="center" width="70">
        <template slot-scope="scope">
          <span v-if="scope.row.preValue === '0'">I</span>
          <span v-if="scope.row.preValue === '1'">A</span>
          <span v-if="scope.row.preValue === 'A' || scope.row.preValue==='I'" v-text="scope.row.preValue"></span>
        </template>
      </el-table-column>
    </el-table-column>
    <el-table-column v-if="isForecast" label="预测值" align="center" width="90">
      <template slot-scope="scope">
        <span v-if="scope.row.preValue === '0'">I</span>
        <span v-if="scope.row.preValue === '1'">A</span>
        <span v-if="scope.row.preValue === 'A' || scope.row.preValue==='I'" v-text="scope.row.preValue"></span>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
  data() {
    return {
      dingliang: {
        prop: "lc5096h",
        label: "LC50_96h"
      }
    }
  },
  created() {
    if (this.type == 1) {
      this.dingliang.prop = "noec21d";
      this.dingliang.label = "NOEC_21d";
    } else if (this.type == 2) {
      this.dingliang.prop = "lc5096h";
      this.dingliang.label = "LC50_96h";
    } else if (this.type == 3) {
      this.dingliang.prop = "noec72h";
      this.dingliang.label = "NOEC_72h";
    } else if (this.type == 4) {
      this.dingliang.prop = "ec5048h";
      this.dingliang.label = "EC50_48h";
    }
  },
  props: {
    loading: true,
    tableData: null,
    isForecast: false,
    type: null
  },
  methods: {}
}
</script>

<style>
.el-table .cell{
  white-space: nowrap;
  overflow: hidden;
}
</style>
