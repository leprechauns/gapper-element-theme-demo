<template>
  <div id="app">
    <div class="everycommponent">
      <h2 class="same-menu-name">色彩</h2>
      <Color></Color>
    </div>
    <div class="everycommponent">
      <h2 class="same-menu-name">字体</h2>
      <Font></Font>
    </div>
    <div class="everycommponent">
      <h2 class="same-menu-name">按钮</h2>
      <Button></Button>
    </div>
    <div class="everycommponent">
      <h2 class="same-menu-name">页卡</h2>
      <TabMenu></TabMenu>
    </div>
    <div class="everycommponent">
      <h2 class="same-menu-name">文本框</h2>
      <Inputs></Inputs>
    </div>
  </div>
</template>

<script>
import Color from './components/Color.vue'
import Font from './components/Font.vue'
import Button from './components/Button.vue'
import TabMenu from './components/TabMenu.vue'
import Inputs from './components/Inputs.vue'
export default {
  name: 'app',
  components: {
    Color,
    Font,
    Button,
    TabMenu,
    Inputs
  }
}
</script>

<style scoped>
#app{
  box-sizing: border-box;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  padding: 30px
}
.same-menu-name {
  box-sizing: border-box;
  text-align: center;
  color: #ffffff;
  background: #2ba07f
}
</style>

