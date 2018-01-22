<template>
  <div class="house-container" ref="house">
    <div class="house">
      <div class="roof">
        <img class="roof-image" src="@/assets/house_objects/roof.svg">
        <div class="roof-end"></div>
      </div>
      <div class="house-wall">
        <div class="house-second-floor">
          <div class="windows">
            <img class="small-window-image" src="@/assets/house_objects/window1.svg">
          </div>
        </div>
        <div class="house-first-floor">
          <div class="house-door">
            <img class="house-door-image" src="@/assets/house_objects/door.svg">
          </div>
        </div>
      </div>
      <div class="house-object">
        <img class="house-object-image" src="@/assets/house_objects/object1.svg">
      </div>
      <div class="house-shadow">
        <img class="house-shadow-image" src="@/assets/house_objects/shadow.svg">
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

$house-wall-height = 92px
$house-transition = all ease 700ms
$house-wall-horizontal-margin = 12px

.house-container
  position: relative
  z-index: -1
  transition $house-transition
  overflow: hidden
  display: flex
  justify-content: flex-end
  margin-left: -80px
  .house
    width: 100%
    height: 100%
    > *
      margin: 0 auto
    .roof
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
      .house-first-floor
        position: relative
        height: $house-wall-height
        display: flex
        justify-content: flex-end
        align-items: flex-end
        .house-door
          width: 36px
          margin-right: 30px
      .house-second-floor
        height: $house-wall-height
        .windows
          width: 100%
          display: flex
          justify-content: flex-end
          padding-right: 30px
          padding-top: 20px
    .house-object
      position: absolute
      bottom: 0
      left: 0
      z-index: 2
      width: 100%
      display: flex
      justify-content: flex-end
      align-items: flex-end
      overflow: hidden
      .house-object-image
        width: 180px
        margin: -10px -7px -6px
    .house-shadow
      position: absolute
      bottom: 0
      left: 0
      height: 90%
      width: 100%
      transform: translate(-50px , 0px)
      .house-shadow-image
        width: 100%
        opacity: 0.2
  &:not(.version-added-right-house)
    width: 0px !important
  .door-image
    height: 78px
  .small-window-image
    height: 43px
  .big-window-image
    height: 70px
</style>
