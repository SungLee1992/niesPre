<template>
<div class="forecast-input">
  <el-form ref="formSingle" :model="formSingle" :rules="rulesSingle" label-width="140px" style="width:70%;margin: 100px auto;text-align: left;">
    <el-form-item label="待预测毒性" prop="checkListSingle">
      <el-checkbox-group v-model="formSingle.checkListSingle">
        <el-checkbox label="1">大型溞慢性毒性</el-checkbox>
        <el-checkbox label="2">鱼类慢性毒性</el-checkbox>
        <el-checkbox label="3">藻类慢性毒性</el-checkbox>
        <el-checkbox label="4">大型溞急性毒性</el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="CAS NO." prop="CASNO">
      <el-input v-model="formSingle.CASNO" style="width:400px"></el-input>
    </el-form-item>
    <el-form-item label="SMILES NO." prop="SMILESNO">
      <el-input v-model="formSingle.SMILESNO" style="width:400px"></el-input>
    </el-form-item>
    <el-form-item>
      <div class="tip">说明：本软件用于化学品生态毒性预测，待预测毒性为必选且可多选，CAS NO和SMILES NO为必填项。软件预测时间根据化学品的不同会有差异，此过程最长约需要两分钟。</div>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="getResult('formSingle')" style="background:#b2e17c;border-color:#b2e17c;margin-left:150px;"><span style="font-size: 16px;color: black;font-weight: bold">预&nbsp;&nbsp;测</span></el-button>
    </el-form-item>
  </el-form>
  <!-- 暂时不做批量处理 -->
  <!-- <el-tab-pane label="批量预测">
      <el-form ref="formMuti" :model="formMuti" :rules="rulesMuti" label-width="100px" style="width:50%;margin: 100px auto;text-align: left;">
        <el-form-item label="待预测毒性" prop="checkListMuti">
          <el-checkbox-group v-model="formMuti.checkListMuti">
            <el-checkbox label="1">大型溞慢性毒性</el-checkbox>
            <el-checkbox label="2">鱼类慢性毒性</el-checkbox>
            <el-checkbox label="3">藻类慢性毒性</el-checkbox>
            <el-checkbox label="4">鱼类急性毒性</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="选择文件" prop="file">
          <input type="file" @change="getFile($event)"></input>
          <el-button type="primary" size="mini" @click="" style="">文件模板</el-button>
          <a href="http://localhost:8080/static/数据.xlsx" download>文件模板</a>
          <div class="">
            <span style="font-size:14px;color:#9c9c9c">文件类型描述语句</span>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getResult('formMuti')" style="margin-left:150px;">预&nbsp;&nbsp;测</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane> -->
</div>
</template>

<script>
export default {
  data() {
    var typeValidate = (rule, value, callback) => {
      if (value.length == 0) {
        callback(new Error("至少选择一种毒性类别"));
      } else {
        callback();
      }
    }
    return {
      formSingle: {
        checkListSingle: [],
        CASNO: "",
        SMILESNO: ""
      },
      formMuti: {
        checkListMuti: [],
        file: null
      },
      rulesSingle: {
        SMILESNO: [{
          required: true,
          message: '请填写SMILES NO.',
          trigger: 'blur'
        }],
        CASNO: [{
          required: true,
          message: '请填写CAS NO.',
          trigger: 'blur'
        }],
        checkListSingle: [{
          required: true,
          validator: typeValidate,
          trigger: 'blur'
        }],
      },
      rulesMuti: {
        checkListMuti: [{
          required: true,
          validator: typeValidate,
          trigger: 'blur'
        }],
        file: [{
          required: true,
          message: '请选择文件'
        }]
      },
      isResult: false
    }
  },
  mounted() {},
  methods: {
    handleClick(tab, event) {

    },
    getResult(formFlag) {
      let that = this;
      // 验证数据
      var validate = false;
      that.$refs[formFlag].validate((valid) => {
        validate = valid;
      });
      if (validate == false) {
        return false;
      }
      // 验证成功提交数据
      var formData = new FormData();
      if (formFlag == 'formSingle') {
        formData.append("type", this.formSingle.checkListSingle);
        formData.append("smiles", this.formSingle.SMILESNO);
        formData.append("casNo", this.formSingle.CASNO);
      } else if (formFlag == 'formMuti') {
        formData.append("type", this.formMuti.checkListMuti);
        formData.append("file", this.formMuti.file);
      }
      this.$emit("pre-click", formData);
    },
    getFile(event) {
      this.formMuti.file = event.target.files[0];
    }
  }
}
</script>

<style>
.forecast-pages {
  padding: 50px;
}

.el-form .el-form-item__label,
.el-checkbox__label {
  font-size: 16px !important;
  color: black;
}

.el-form .tip {
  font-size: 16px;
  color: grey;
  width: 555px;
  line-height: 20px;
}

.el-form-item {
  margin-bottom: 30px;
}
</style>
