<template>
<div class="border-div">
  <el-row class='clearFix'>
      <div class="same_div bg-primary">
        <ul>
          <li>UI基本色</li>
          <li>#282d33</li>
        </ul>
      </div>
      <div class="same_div bg-success">
        <ul>
          <li>公司标准色</li>
          <li>#2ba07f</li>
        </ul>
      </div>
    </el-row>
    <el-row class="clearFix">
      <div class="same_div bg-warning">
        <ul>
          <li>G-IOT</li>
          <li>#62c2d1</li>
        </ul>
      </div>
      <div class="same_div bg-danger">
        <ul>
          <li>LabMai</li>
          <li>#e27471</li>
        </ul>
      </div>
      <div class="same_div bg-info">
        <ul>
          <li>17kong</li>
          <li>#478cd2</li>
        </ul>
      </div>
      <div class="same_div bg-gapper">
        <ul>
          <li>gapper</li>
          <li>#5db8f1</li>
        </ul>
      </div>
    </el-row>
</div>
</template>
<script>
import { Row } from "element-ui";
export default {
  components: {
    [Row.name]: Row
  }
}
</script>


<style scoped>
.same_div{
  border-radius: 4px;
  padding: 20px;
  margin: 5px 0;
  height: 74px;
  box-sizing: border-box;
  color: #fff;
  font-size: 14px;
  width: 200px;
  float: left;
  margin-left: 10px;
}
.bg-primary {
  background: #282d33
}
.bg-success {
  background: #2ba07f
}
.bg-warning {
  background: #62c2d1
}
.bg-danger {
  background: #e27471
}
.bg-info {
  background: #478cd2
}
.bg-gapper {
  background: #5db8f1
}
</style>
