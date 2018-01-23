<template>
  <div id="app">
    <router-view :scrollY="scrollY" :windowW="windowW"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      scrollY: 0,
      windowW: 0
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      this.scrollY = window.scrollY
    }
  }
}
</script>

<style lang="stylus">
body
  font-family: 'Roboto', sans-serif
  margin: 0
  padding: 0

</style>
