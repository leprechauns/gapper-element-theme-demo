<template>
  <div class="container">
    <el-row>
      <h2>主要按钮</h2>
    </el-row>
    <el-row class='same_row'>
      <el-button size="medium" type="primary">大按钮</el-button>
      <el-button size="small" type="primary">中按钮</el-button>
      <el-button size="mini" type="primary">小按钮</el-button>
      <el-button size="mini" class='el-button--tiny' type="primary">超小按钮</el-button>
    </el-row>
    <el-row>
      <h2>次要按钮</h2>
    </el-row>
    <el-row class='same_row'>
      <el-button size="medium">大按钮</el-button>
      <el-button size="small">中按钮</el-button>
      <el-button size="mini">小按钮</el-button>
      <el-button size="mini" class='el-button--tiny'>超小按钮</el-button>
    </el-row>
    <el-row>
      <h2>主要按钮禁用状态</h2>
    </el-row>
    <el-row class='same_row'>
      <el-button size="medium" disabled type="primary">大按钮</el-button>
      <el-button size="small" disabled type="primary">中按钮</el-button>
      <el-button size="mini" disabled type="primary">小按钮</el-button>
      <el-button size="mini" class='el-button--tiny' disabled type="primary">超小按钮</el-button>
    </el-row>
    <el-row>
      <h2>次要按钮禁用状态</h2>
    </el-row>
    <el-row class='same_row'>
      <el-button disabled size="medium">大按钮</el-button>
      <el-button disabled size="small">中按钮</el-button>
      <el-button disabled size="mini">小按钮</el-button>
      <el-button disabled size="mini" class='el-button--tiny'>超小按钮</el-button>
    </el-row>
    <el-row>
      <h2>文字按钮</h2>
    </el-row>
    <el-row class='same_row'>
      <el-button type='text'>文字按钮</el-button>
      <el-button type='text' class='el-button-text-gray'>文字按钮</el-button>
    </el-row>
  </div>  
</template>
<script>
import { Row, Button } from 'element-ui'
export default {
  components: {
    [Row.name]: Row,
    [Button.name]: Button,
  }
}
</script>

<style scoped>
.same_row {
  margin-top: 10px
}
</style>
