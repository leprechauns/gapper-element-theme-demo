<template>
<div class="border-div">
  <el-tabs v-model="activeName" type="card" closable @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
  <ul class="code-area">
    <li><code>{{htmlString1}}</code></li>
    <li><code>&nbsp;&nbsp;{{htmlString2}}</code></li>
    <li><code>&nbsp;&nbsp;{{htmlString3}}</code></li>
    <li><code>&nbsp;&nbsp;{{htmlString4}}</code></li>
    <li><code>&nbsp;&nbsp;{{htmlString5}}</code></li>
    <li><code>{{htmlString6}}</code></li>
  </ul>
</div>
</template>

<script>
import { Row, Tabs, TabPane } from 'element-ui'
export default {
  components: {
    [Row.name]: Row,
    [Tabs.name]: Tabs,
    [TabPane.name]: TabPane
  },
  data() {
    return {
      activeName: 'second',
      htmlString1: `<el-tabs v-model="activeName" type="card" closable @tab-click="handleClick">`,
      htmlString2: `<el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>`,
      htmlString3: `<el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>`,
      htmlString4: `<el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>`,
      htmlString5: `<el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>`,
      htmlString6: `</el-tabs>`,
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style scoped>

</style>
