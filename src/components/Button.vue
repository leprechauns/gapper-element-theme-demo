<template>
  <div class="container">
    <div class="border-div">
      <el-row>
        <h3>主要按钮</h3>
      </el-row>
      <el-row class='same_row'>
        <el-button size="medium" type="primary">大按钮</el-button>
        <el-button size="small" type="primary">中按钮</el-button>
        <el-button size="mini" type="primary">小按钮</el-button>
        <el-button size="mini" class='el-button--tiny' type="primary">超小按钮</el-button>
      </el-row>
      <ul class='code-area'>
        <li><code>{{htmlString1}}</code></li>
        <li><code>{{htmlString2}}</code></li>
        <li><code>{{htmlString3}}</code></li>
        <li><code>{{htmlString4}}</code></li>
      </ul>
    </div>
    <div class="border-div">
      <el-row>
        <h3>次要按钮</h3>
      </el-row>
      <el-row class='same_row'>
        <el-button size="medium">大按钮</el-button>
        <el-button size="small">中按钮</el-button>
        <el-button size="mini">小按钮</el-button>
        <el-button size="mini" class='el-button--tiny'>超小按钮</el-button>
      </el-row>
      <ul class="code-area">
        <li><code>{{htmlString5}}</code></li>
        <li><code>{{htmlString6}}</code></li>
        <li><code>{{htmlString7}}</code></li>
        <li><code>{{htmlString8}}</code></li>
      </ul>
    </div>
    <div class="border-div">
      <el-row>
        <h3>主要按钮禁用状态</h3>
      </el-row>
      <el-row class='same_row'>
        <el-button size="medium" disabled type="primary">大按钮</el-button>
        <el-button size="small" disabled type="primary">中按钮</el-button>
        <el-button size="mini" disabled type="primary">小按钮</el-button>
        <el-button size="mini" class='el-button--tiny' disabled type="primary">超小按钮</el-button>
      </el-row>
      <ul class="code-area">
        <li><code>{{htmlString9}}</code></li>
        <li><code>{{htmlString10}}</code></li>
        <li><code>{{htmlString11}}</code></li>
        <li><code>{{htmlString12}}</code></li>
      </ul>
    </div>
    <div class="border-div">
      <el-row>
        <h3>次要按钮禁用状态</h3>
      </el-row>
      <el-row class='same_row'>
        <el-button disabled size="medium">大按钮</el-button>
        <el-button disabled size="small">中按钮</el-button>
        <el-button disabled size="mini">小按钮</el-button>
        <el-button disabled size="mini" class='el-button--tiny'>超小按钮</el-button>
      </el-row>
      <ul class="code-area">
        <li><code>{{htmlString13}}</code></li>
        <li><code>{{htmlString14}}</code></li>
        <li><code>{{htmlString15}}</code></li>
        <li><code>{{htmlString16}}</code></li>
      </ul>
    </div>
    <div class="border-div">
      <el-row>
        <h3>文字按钮</h3>
      </el-row>
      <el-row class='same_row'>
        <el-button type='text'>文字按钮</el-button>
        <el-button type='text' class='el-button-text-gray'>文字按钮</el-button>
      </el-row>
      <ul class="code-area">
        <li><code>{{htmlString17}}</code></li>
        <li><code>{{htmlString18}}</code></li>
      </ul>
    </div>
  </div>  
</template>
<script>
import { Row, Button } from 'element-ui'
export default {
  components: {
    [Row.name]: Row,
    [Button.name]: Button,
  },
  data () {
    return {
      htmlString1:  `<el-button size="medium" type="primary">大按钮</el-button>`,
      htmlString2: `<el-button size="small" type="primary">中按钮</el-button>`,
      htmlString3: `<el-button size="mini" type="primary">小按钮</el-button>`,
      htmlString4: `<el-button size="mini" class="el-button--tiny" type="primary">超小按钮</el-button>`,
      htmlString5: `<el-button size="medium">大按钮</el-button>`,
      htmlString6: `<el-button size="small">中按钮</el-button>`,
      htmlString7: `<el-button size="mini">小按钮</el-button>`,
      htmlString8: `<el-button size="mini" class='el-button--tiny'>超小按钮</el-button>`,
      htmlString9: `<el-button size="medium" disabled type="primary">大按钮</el-button>`,
      htmlString10: `<el-button size="small" disabled type="primary">中按钮</el-button>`,
      htmlString11: `<el-button size="mini" disabled type="primary">小按钮</el-button>`,
      htmlString12: `<el-button size="mini" class='el-button--tiny' disabled type="primary">超小按钮</el-button>`,
      htmlString13: `<el-button disabled size="medium">大按钮</el-button>`,
      htmlString14: `<el-button disabled size="small">中按钮</el-button>`,
      htmlString15: `<el-button disabled size="mini">小按钮</el-button>`,
      htmlString16: `<el-button disabled size="mini" class='el-button--tiny'>超小按钮</el-button>`,
      htmlString17: `<el-button type='text'>文字按钮</el-button>`,
      htmlString18: `<el-button type='text' class='el-button-text-gray'>文字按钮</el-button>`,
    }
  }
}
</script>

<style scoped>
.same_row {
  margin-top: 10px
}
</style>
