<template>
  <div class="headpage">
    <animated-house></animated-house>
  </div>
</template>

<script>
import AnimatedHouse from '@/components/AnimatedHouse'

export default {
  props: [
    'scrollY'
  ],
  data () {
    return {

    }
  },
  components: {
    AnimatedHouse
  },
  watch: {
    scrollY (value) {
      console.log(value)
    }
  }
}
</script>

<style lang="stylus">
.headpage
  position: relative
  height: 10000px
</style>
