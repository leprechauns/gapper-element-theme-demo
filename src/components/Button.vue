<template>
  <div class="container">
    <el-row>
      <h2>主要按钮</h2>
    </el-row>
    <el-row class='same_row'>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <el-row>
      <h2>次要按钮</h2>
    </el-row>
    <el-row class='same_row'>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <el-row class='same_row'>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>
    <el-row>

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
