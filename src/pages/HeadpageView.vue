<template>
  <div class="headpage">
  </div>
</template>

<script>
export default {
  props: [
    'scrollY'
  ],
  data () {
    return {

    }
  },
  watch: {
    scrollY (value) {
      console.log(value)
    }
  }
}
</script>

<style lang="stylus">
</style>
