<template>
  <div class="container">
    <div class="border-div">
      <el-row>
        <h3>输入框</h3>
      </el-row>
      <el-row style='margin-top: 10px'>
        <el-input placeholder="提示性文字"></el-input>
      </el-row>
      <ul class="code-area">
        <li><code>{{ htmlString }}</code></li>
      </ul>
      <el-row>
        <h3>内联搜索框</h3>
      </el-row>
      <el-row style='margin-top: 10px'>
        <div class="input-inner-search">
          <i class="icon-search"></i>
          <input type="text" class='input-search-inner' />
        </div>
      </el-row>
      <el-row style='margin-top: 10px'>
        <div class="input-group-search">
          <i class="icon-search"></i>
          <input type="text" class='input-group-inner' />
          <button class='input-group-button'>搜索</button>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
import { Row, Input, Button } from 'element-ui'
export default {
  components: {
    [Row.name]: Row,
    [Input.name]: Input,
    [Button.name]: Button
  },
  data () {
    return {
      htmlString: `<el-input placeholder="提示性文字"></el-input>`
    }
  }
}
</script>

<style scoped>

</style>
