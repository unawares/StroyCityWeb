<template>
  <div class="house" ref="house">
    <div class="roof"></div>
    <div class="roof-end"></div>
    <div class="wall">
      <div class="door">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
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

.house
  overflow: hidden
  margin-right: -100px
  width: 230px !important
  .roof
    height: 60px
    background-color: #d11242
  .roof-end
    height: 10px
    background-color: #8e0c3a
  .wall
    margin: 0 10px
    height: 100px
    background-color: #ede4bc
    display: flex
    align-items: flex-end
    .door
      width: 80px
      height: 80px
      margin-left: 30px
      display: flex
      flex-direction: column
      > div
        flex-grow: 1
        &:nth-child(2n)
          background-color: #e7e7e7
        &:nth-child(2n-1)
          background-color: #c8c8c8
        &:first-child
          background-color: #a8a8a8
  &:not(.version-added-left-house)
    width: 0px !important
</style>
