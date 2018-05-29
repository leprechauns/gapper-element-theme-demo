<template>
  <div class="container">
    <el-row>输入框</el-row>
    <el-row>
      <el-input placeholder="提示性文字"></el-input>
    </el-row>
    <el-row>搜索框-1</el-row>
    <el-row>待续</el-row>
    <el-row>内联搜索框</el-row>
    <el-row>待续</el-row>
  </div>
</template>

<script>
import { Row, Input, Button } from 'element-ui'
export default {
  components: {
    [Row.name]: Row,
    [Input.name]: Input,
    [Button.name]: Button
  }
}
</script>

<style scoped>

</style>
