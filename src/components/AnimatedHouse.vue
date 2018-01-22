<template>
  <div class="animated-house-container">
    <div class="animated-house-container-wrapper">
      <house class="myhouse" ref="house"></house>
      <right-house class="myhouse" ref="right_house"></right-house>
    </div>
  </div>
</template>

<script>
import House from '@/components/House'
import RightHouse from '@/components/RightHouse'

export default {
  data () {
    return {
      version: 0
    }
  },
  components: {
    House,
    RightHouse
  },
  created () {
    window.test = () => {
      if (this.version < 2) {
        this.version += 1
      } else {
        this.version = 0
      }
    }
  },
  watch: {
    version (value) {
      var func = (v) => {
        switch (v) {
          case 1:
            this.$refs.house.$el.classList.add('version-added-floor')
            break
          case 2:
            this.$refs.right_house.$el.classList.add('version-added-right-house')
            this.$refs.house.$el.classList.add('version-added-right-house')
            this.$refs.house.$el.classList.add('version-added-floor')
            break
        }
      }
      if (value !== 0) {
        this.$refs.right_house.$el.classList.remove('version-added-right-house')
        this.$refs.house.$el.classList.remove('version-added-right-house')
        this.$refs.house.$el.classList.remove('version-added-floor')
        func(value)
      } else {
        setTimeout(() => {
          this.$refs.right_house.$el.classList.remove('version-added-right-house')
          this.$refs.house.$el.classList.remove('version-added-right-house')
          setTimeout(() => {
            this.$refs.house.$el.classList.remove('version-added-floor')
            setTimeout(() => {
              func(value)
            }, 500)
          }, 500)
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.animated-house-container
  height: 100vh
  width: 100%
  max-height: 100%
  position: fixed
  overflow: hidden
  top: 0
  left: 0
  .animated-house-container-wrapper
    position: relative
    height: 100%
    width: 100%
    display: flex
    align-items: flex-end
    justify-content: center
    .myhouse
      margin-bottom: 100px
      width: 250px
</style>
