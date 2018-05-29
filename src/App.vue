<template>
  <div id="app">
    <div class="everycommponent">
      <h1 class="same-menu-name">色彩</h1>
      <Color></Color>
    </div>
    <div class="everycommponent">
      <h1 class="same-menu-name">字体</h1>
      <Font></Font>
    </div>
    <div class="everycommponent">
      <h1 class="same-menu-name">按钮</h1>
      <Button></Button>
    </div>
    <div class="everycommponent">
      <h1 class="same-menu-name">页卡</h1>
      <TabMenu></TabMenu>
    </div>
    <div class="everycommponent">
      <h1 class="same-menu-name">文本框</h1>
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
  margin: 20px;
  padding: 30px
}
.same-menu-name {
  box-sizing: border-box;
  border-bottom: 1px solid #ededed;
  padding-bottom: 10px;
  margin-bottom: 10px
}
.everycommponent{
  margin-bottom: 25px
}
</style>

