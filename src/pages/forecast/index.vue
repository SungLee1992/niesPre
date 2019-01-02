<template>
<div class="forecast">
  <Input v-if="!isResult" @pre-click="getFormData"></Input>
  <Result v-else :formData="formData" @go-back="goBack()"></Result>
</div>
</template>

<script>
import input from '@/pages/Forecast/Input'
import result from '@/pages/forecast/Result'
export default {
  components: {
    "Input": input,
    "Result": result
  },
  data() {
    return {
      formData: {},
      isResult: false
    }
  },
  mounted() {},
  methods: {
    getFormData(formData) {
      this.formData = formData;
      this.isResult = true;
    },
    goBack() {
      this.isResult = false;
    }
  }
}
</script>

<style>
.forecast {
  padding: 50px;
}
</style>
