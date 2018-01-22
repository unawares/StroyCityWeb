<template>
  <div class="house">
    <div class="roof">
      <img class="roof-image" src="@/assets/house_objects/roof.svg">
      <div class="roof-end"></div>
    </div>
    <div class="house-wall">
      <div class="house-second-floor-container">
        <div class="house-second-floor">
          <div class="window-container">
            <div class="windows">
              <img class="small-window-image" src="@/assets/house_objects/window1.svg">
              <img class="small-window-image" src="@/assets/house_objects/window1.svg">
            </div>
            <div class="decor"></div>
          </div>
        </div>
      </div>
      <div class="house-floor-divider"></div>
      <div class="house-first-floor">
        <div>
          <div class="window-container">
            <img class="small-window-image" src="@/assets/house_objects/window1.svg">
          </div>
          <div class="door-container">
            <img class="door-image" src="@/assets/house_objects/door.svg">
          </div>
        </div>
        <div>
          <div class="big-window-container">
            <div class="windows">
              <img class="big-window-image" src="@/assets/house_objects/window2.svg">
              <img class="big-window-image" src="@/assets/house_objects/window2.svg">
            </div>
            <div class="decor"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="house-fundament">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
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

$house-wall-height = 92px
$house-wall-horizontal-margin = 12px
$house-fundament-height = 10px
$house-floor-divider-height = 7px
$house-floor-padding = 5px
$house-transition = all ease 700ms

.house
  overflow: hidden
  > *
    margin: 0 auto
  .roof
    position: relative
    z-index: 1
    .roof-image
      position: relative
      z-index: -1
      margin-bottom: -10px
    .roof-end
      height: 20px
      background-color: #8e0c3a
  .house-wall
    overflow: hidden
    margin: 0 $house-wall-horizontal-margin
    background-color: #fcf3b9
    *
      box-sizing: border-box
    .house-floor-divider
      transition all ease 300ms
      background-color: #fdbb30
      height: 0
    .house-first-floor
      position: relative
      height: $house-wall-height
      > div
        padding: $house-floor-padding
        height: $house-wall-height
        padding-bottom: 0px !important
        position: absolute
        width: 100%
        top: 0
        bottom: 0
        display: flex
        .window-container
          margin-bottom: 25px
          display: flex
          justify-content: center
          align-items: center
          flex-grow: 5
        .big-window-container
          margin: 0 10px 15px
          width: 100%
          .windows
            height: 100%
            display: flex
            align-items: flex-end
            justify-content: space-around
          .decor
            height: 10px
            background-color: #fdea32
        .door-container
          display: flex
          align-items: flex-end
          flex-grow: 2
        &:first-of-type
          transition $house-transition
          transform: translate(0, 0)
        &:last-of-type
          transition $house-transition
          transform: translate(100%, 0)
    .house-second-floor
      padding: $house-floor-padding
      height: $house-wall-height
      display: flex
      .window-container
        margin: 0 10px 20px
        width: 100%
        .windows
          height: 100%
          display: flex
          align-items: flex-end
          justify-content: space-around
        .decor
          height: 10px
          background-color: #fdea32
    .house-second-floor-container
      transition $house-transition
      height: 0
      overflow: hidden
  .house-fundament
    height: $house-fundament-height
    background-color: #6b6b6b
  .door-image
    height: 78px
  .small-window-image
    height: 43px
  .big-window-image
    height: 70px
  &.version-added-floor
    .house-second-floor-container
      height: $house-wall-height
    .house-floor-divider
      height: $house-floor-divider-height
  &.version-added-right-house
    .house-first-floor
      > div
        &:first-of-type
          transform: translate(-100%, 0)
        &:last-of-type
          transform: translate(0, 0)
</style>
