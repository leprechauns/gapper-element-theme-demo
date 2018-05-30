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
        <li><code>{{ htmlString1 }}</code></li>
      </ul>
    </div>
    <div class="border-div">
      <el-row>
        <h3>内联搜索框</h3>
      </el-row>
      <el-row style='margin-top: 10px'>
        <div class="input-inner-search">
          <i class="icon-search"></i>
          <input type="text" class='input-search-inner' />
        </div>
      </el-row>
      <ul class="code-area">
        <li><code>{{htmlString2}}</code></li>
        <li><code>&nbsp;&nbsp;{{htmlString3}}</code></li>
        <li><code>&nbsp;&nbsp;{{htmlString4}}</code></li>
        <li><code>{{htmlString5}}</code></li>
      </ul>
    </div>
    <div class="border-div">
      <el-row>
        <h3>组合搜索框1</h3>
      </el-row>
      <el-row style='margin-top: 10px'>
        <div class="input-group-search clearFix">
          <button class='icon-search'></button>
          <input type="text" placeholder="请输入要搜索的设备名称" class='input-group-inner' />
          <button class='input-group-button'>搜索</button>
        </div>
      </el-row>
      <ul class="code-area">
        <li><code>{{htmlString6}}</code></li>
        <li><code>&nbsp;&nbsp;{{htmlString7}}</code></li>
        <li><code>&nbsp;&nbsp;{{htmlString8}}</code></li>
        <li><code>&nbsp;&nbsp;{{htmlString9}}</code></li>
        <li><code>{{htmlString10}}</code></li>
      </ul>
    </div>
    <div class="border-div">
      <el-row>
        <h3>组合搜索框2</h3>
      </el-row>
      <el-row style='margin-top: 10px'>
        <div class="input-group-search group-search-higher clearFix">
          <button class='icon-search'></button>
          <input type="text" placeholder="请输入要搜索的设备名称" class='input-group-inner' />
          <button class='input-group-button'>搜索</button>
        </div>
      </el-row>
      <ul class="code-area">
        <li><code>{{htmlString11}}</code></li>
        <li><code>&nbsp;&nbsp;{{htmlString12}}</code></li>
        <li><code>&nbsp;&nbsp;{{htmlString13}}</code></li>
        <li><code>&nbsp;&nbsp;{{htmlString14}}</code></li>
        <li><code>{{htmlString15}}</code></li>
      </ul>
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
      htmlString1: `<el-input placeholder="提示性文字"></el-input>`,
      htmlString2: `<div class="input-inner-search">`,
      htmlString3: `<i class="icon-search"></i>`,
      htmlString4: `<input type="text" class='input-search-inner' />`,
      htmlString5: `</div>`,
      htmlString6: `<div class="input-group-search clearFix">`,
      htmlString7: `<button class='icon-search'></button>`,
      htmlString8: `<input type="text" placeholder="请输入要搜索的设备名称" class='input-group-inner' />`,
      htmlString9: `<button class='input-group-button'>搜索</button>`,
      htmlString10: `</div>`,
      htmlString11: `<div class="input-group-search group-search-higher clearFix">`,
      htmlString12: `<button class='icon-search'></button>`,
      htmlString13: `<input type="text" placeholder="请输入要搜索的设备名称" class='input-group-inner' />`,
      htmlString14: `<button class='input-group-button'>搜索</button>`,
      htmlString15: `</div>`,
    }
  }
}
</script>

<style scoped>

</style>
