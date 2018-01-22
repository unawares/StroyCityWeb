<template>
  <div class="animated-house-container">
    <div class="animated-house-container-wrapper">
      <div ref="house_container">
        <left-house class="myhouse" ref="left_house"></left-house>
        <house class="myhouse" ref="house"></house>
        <right-house class="myhouse" ref="right_house"></right-house>
      </div>
    </div>
  </div>
</template>

<script>
import House from '@/components/House'
import RightHouse from '@/components/RightHouse'
import LeftHouse from '@/components/LeftHouse'

export default {
  data () {
    return {
      version: 0
    }
  },
  components: {
    House,
    RightHouse,
    LeftHouse
  },
  created () {
    window.test = () => {
      if (this.version < 3) {
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
            this.$refs.house_container.classList.add('version_1')
            break
          case 2:
            this.$refs.right_house.$el.classList.add('version-added-right-house')
            this.$refs.house.$el.classList.add('version-added-right-house')
            this.$refs.house.$el.classList.add('version-added-floor')
            this.$refs.house_container.classList.add('version_2')
            break
          case 3:
            this.$refs.right_house.$el.classList.add('version-added-right-house')
            this.$refs.house.$el.classList.add('version-added-right-house')
            this.$refs.house.$el.classList.add('version-added-floor')
            this.$refs.left_house.$el.classList.add('version-added-left-house')
            this.$refs.house_container.classList.add('version_3')
            break
        }
      }
      if (value !== 0) {
        this.$refs.right_house.$el.classList.remove('version-added-right-house')
        this.$refs.house.$el.classList.remove('version-added-right-house')
        this.$refs.house.$el.classList.remove('version-added-floor')
        this.$refs.left_house.$el.classList.remove('version-added-left-house')
        this.$refs.house_container.classList.remove('version_1')
        this.$refs.house_container.classList.remove('version_2')
        this.$refs.house_container.classList.remove('version_3')
        func(value)
      } else {
        setTimeout(() => {
          this.$refs.left_house.$el.classList.remove('version-added-left-house')
          this.$refs.right_house.$el.classList.remove('version-added-right-house')
          this.$refs.house.$el.classList.remove('version-added-right-house')
          this.$refs.house_container.classList.remove('version_1')
          this.$refs.house_container.classList.remove('version_2')
          this.$refs.house_container.classList.remove('version_3')
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
vendor(prop, args)
  -webkit-{prop} args
  -moz-{prop} args
  -o-{prop} args
  {prop} args

transition()
  vendor('transition', arguments)

$house-transition = all ease 700ms

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
    > div
      display: flex
      align-items: flex-end
      justify-content: center
      width: 170px
      transition $house-transition
      .myhouse
        width: 160px
        transform: translate(11px, 0)
        transition $house-transition
      &.version_1
        width: 170px
        .myhouse
          transform: translate(11px, 0)
      &.version_2
        width: 250px
        .myhouse
          transform: translate(50px, 0)
      &.version_3
        width: 380px
        .myhouse
          transform: translate(0, 0)
</style>
