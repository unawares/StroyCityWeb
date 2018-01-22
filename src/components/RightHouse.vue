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

animation()
  vendor('animation', arguments)

border-radius()
  vendor('border-radius', arguments)

border-top-radius()
  vendor('border-top-left-radius', arguments)
  vendor('border-top-right-radius', arguments)

border-bottom-radius()
  vendor('border-bottom-left-radius', arguments)
  vendor('border-bottom-right-radius', arguments)

linear-gradient(start_color, end_color, start = left top, end = left bottom)
  mozstart = top if start = left top
  background start_color
  background -moz-linear-gradient(mozstart, start_color 0%, end_color 100%)
  background -webkit-gradient(linear, start, end, color-stop(0%, start_color), color-stop(100%, end_color))
  -webkit-background-origin padding-box

background-clip()
  vendor('background-clip', arguments)

box-shadow()
  -moz-box-shadow arguments
  -webkit-box-shadow arguments
  box-shadow arguments

box(orient, pack, align)
  display -webkit-box
  display -moz-box
  display box
  vendor('box-orient', orient)
  vendor('box-pack', pack)
  vendor('box-align', align)
  vendor('box-lines', multiple)

box_flex()
  vendor('box-flex', arguments)

text-fill-color()
  vendor('text-fill-color', arguments)

transition()
  vendor('transition', arguments)

transform()
  vendor('transform', arguments)

$house-wall-height = 130px
$house-transition = all ease 700ms
$house-wall-horizontal-margin = 16px

.house-container
  position: relative
  z-index: -1
  transition $house-transition
  overflow: hidden
  display: flex
  justify-content: flex-end
  margin-left: -80px
  &:not(.version-added-right-house)
    width: 0px !important
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
          height: 110px
          width: 50px
          margin-right: 40px
      .house-second-floor
        height: $house-wall-height
        .windows
          width: 100%
          display: flex
          justify-content: flex-end
          padding-right: 40px
          padding-top: 20px
    .house-object
      position: absolute
      bottom: 0
      left: 0
      z-index: 2
      width: 100%
      display: flex
      justify-content: flex-end
      .house-object-image
        margin: -10px -10px -15px
    .house-shadow
      position: absolute
      bottom: 0
      left: 0
      height: 90%
      width: 100%
      transform: translate(-50% , 0px)
      .house-shadow-image
        opacity: 0.2
</style>
