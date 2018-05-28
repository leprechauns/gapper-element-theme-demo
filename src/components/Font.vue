<template>
  <div class="container clearFix">
    <div class="same_div">
      <div class="font_div large">标题</div>
      <div class="font_div large">20px</div>
    </div>
    <div class="same_div">
      <div class="font_div middle">正文</div>
      <div class="font_div middle">14px</div>
    </div>
    <div class="same_div">
      <div class="font_div small">辅助文字</div>
      <div class="font_div small">12px</div>
    </div>
  </div>
</template>

<style scoped>
.container{
  width: 100%
}
.same_div {
  float: left;
  margin-left: 20px
}
.large{
  font-size: 20px
}
.middle{
  font-size: 14px
}
.small {
  font-size: 12px
}
</style>
