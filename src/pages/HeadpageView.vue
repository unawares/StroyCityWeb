<template>
  <div class="headpage">
    <div id="container">
      <div id="el1" class="items"></div>
      <div id="el2" class="items"></div>
      <div id="el3" class="items"></div>
      <div id="el4" class="items"></div>
      <div id="el5" class="items"></div>
    </div>
    <front id="front"></front>
    <nextparallax :scrollY="scrollY" id="next"></nextparallax>
  </div>
</template>

<script>
import Front from './front'
import NextParallax from './NextParallax'
export default {
  props: [
    'scrollY'
  ],
  data () {
    return {
      link1: undefined,
      link2: undefined,
      link3: undefined,
      link4: undefined,
      link5: undefined
    }
  },
  mounted () {
    this.link1 = document.getElementById('el1')
    this.link2 = document.getElementById('el2')
    this.link3 = document.getElementById('el3')
    this.link4 = document.getElementById('el4')
    this.link5 = document.getElementById('el5')
  },
  methods: {
    els (num, els, val) {
      els.style.top = val * num + 'px'
    }
  },
  watch: {
    scrollY (value) {
      this.els(0.1, this.link1, value)
      this.els(0.2, this.link2, value)
      this.els(0.5, this.link3, value)
      this.els(0.3, this.link4, value)
      this.els(0.4, this.link5, value)
    }
  },
  components: {
    'front': Front,
    'nextparallax': NextParallax
  }
}
</script>

<style scoped>
#container{
  overflow: hidden;
  width: 100%;
  height: 48vw;
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

#el1{
  background: url('../assets/city_background_1.svg') no-repeat center;
  background-size: 100% auto;
}

#el2{
  background: url('../assets/city_background_2.svg') no-repeat center;
  background-size: 100% auto;
  z-index: -20;
}

#el3{
  background: url('../assets/logo.svg') no-repeat;
  background-size: 25% auto;
  background-position:  50% 10%;
  z-index: -10;
}

#el4{
  background: url('../assets/city_background_3.svg') no-repeat center;
  background-size: 100% auto;
  z-index: -30;
}

#el5{
  background: url('../assets/city_background_4.svg') no-repeat center;
  background-size: 100% auto;
  z-index: -40;
}

#front{
  position: absolute;
  top: 0;
  left: 0;
  height: 71vw;
  width: 100%;
}

#next{
  width: 100%;
  height: 390vw;
}
</style>
