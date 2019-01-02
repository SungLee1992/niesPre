<template>
<div class="home-wrap">
  <Header></Header>
  <Menu></Menu>
  <Footer></Footer>
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Menu from '@/components/Menu.vue'
export default {
  components: {
    "Header": Header,
    "Footer": Footer,
    "Menu": Menu
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {

  }
}
</script>

<style>
.home-wrap {
  margin: 0 auto;
  width: 80%;
  border: 1px solid #908f8f;
  border-top: none;
  background-color: #f6f6f6;
  height: 100%;
}
</style>
