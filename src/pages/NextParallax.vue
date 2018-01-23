<template>
  <div>
    <div id="container">
      <div class="items" id="el1_1"></div>
      <div class="items" id="el2_2"></div>
      <div class="items" id="el3_3"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'scrollY'
  ],
  data () {
    return {
      link1_1: undefined,
      link2_2: undefined,
      link3_3: undefined
    }
  },
  mounted () {
    this.link1_1 = document.getElementById('el1_1')
    this.link2_2 = document.getElementById('el2_2')
    this.link3_3 = document.getElementById('el3_3')
  },
  methods: {
    els (num, els, val) {
      els.style.top = val * num + 'px'
    }
  },
  watch: {
    scrollY (value) {
      this.els(0.05, this.link1_1, value)
      this.els(0.1, this.link2_2, value)
      this.els(0.15, this.link3_3, value)
    }
  }
}
</script>

<style scoped>
#container{
  overflow: hidden;
  width: 100%;
  height: 400vw;
  top: 0;
  left: 0;
  position: relative;
}

.items{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

#el1_1{
  background: url('../assets/pattern_background_1.svg') no-repeat center;
  background-size: 100% auto;
  z-index: -10;
}

#el2_2{
  background: url('../assets/pattern_background_2.svg') no-repeat center;
  background-size: 100% auto;
  z-index: -20;
}

#el3_3{
  background: url('../assets/pattern_background_3.svg') no-repeat center;
  background-size: 100% auto;
  z-index: -30;
}
</style>
