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
      <h1 class="same-menu-name">图标</h1>
      <Icon></Icon>
    </div>
    <div class="everycommponent">
      <h1 class="same-menu-name">菜单</h1>
      <Menu></Menu>
    </div>
    <div class="everycommponent">
      <h1 class="same-menu-name">按钮</h1>
      <Button></Button>
    </div>
  </div>
</template>

<script>
import Color from './components/Color.vue'
import Font from './components/Font.vue'
import Icon from './components/Icon.vue'
import Menu from './components/Menu.vue'
import Button from './components/Button.vue'
export default {
  name: 'app',
  components: {
    Color,
    Font,
    Menu,
    Icon,
    Button
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

