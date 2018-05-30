<template>
  <div class="container clearFix">
    <div class="border-div">
      <ul>
        <li class='title'>字体颜色</li>
        <li class='bg-2'>#333333</li>
        <li class='bg-1'>#666666</li>
        <li class='bg-3'>#999999</li>
        <li class='bg-4'>#CCCCCC</li>
      </ul>
      <ul>
        <li class='title'></li>
        <li class='title'>主要文字</li>
        <li class='title'>常规文字</li>
        <li class='title'>次要文字</li>
        <li class='title'>占位文字</li>
      </ul>
    </div>
    <div class="border-div">
      <ul>
        <li class='title'>边框/线条颜色</li>
        <li class='bg-5'>#e5e5e5</li>
        <li class='bg-6'>#f0f0f0</li>
        <li class='bg-7'>#f5f5f5</li>
        <li class='bg-8'>#fcfcfc</li>
      </ul>
      <ul>
        <li class='title'></li>
        <li class='title'>一级边框</li>
        <li class='title'>二级边框</li>
        <li class='title'>三级边框</li>
        <li class='title'>四级边框</li>
      </ul>
    </div>
    <div class="border-div">
      <ul>
        <li class='title'>背景颜色</li>
        <li class='bg-9'>#f5f7fa</li>
      </ul>
    </div>
    <div class="border-div">
      <ul>
        <li class='title'>字体</li>
        <li class='fontFamily'>
          <code>font-family: PingFang SC，思源黑体，微软雅黑，microsoft yahei，arial，sans-serif;</code>
        </li>
      </ul>
    </div>
    <div class="border-div">
      <ul>
        <li class='title'>字号</li>
        <li class='fz-1'>主标题</li>
        <li class='fz-2'>导航文字/小标题</li>
        <li class='fz-3'>正文文字</li>
        <li class='fz-4'>辅助文字</li>
      </ul>
      <ul>
        <li class='title'></li>
        <li class='fz-1'>20px</li>
        <li class='fz-2'>16px</li>
        <li class='fz-3'>14px</li>
        <li class='fz-4'>12px</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container{
  width: 100%
}
ul{
  width: 100%;
  margin: 10px 0 10px 0;
}
li {
  display: inline-block;
  width: 200px;
  text-align: center;
  line-height: 30px;
  height: 30px;
  margin-left: 10px;
}
.title {
  color: #333333
}
.title:first-child{
  font-size: 20px
}
.bg-1{
  color: #ffffff;
  background: #666666
}
.bg-2{
  color: #ffffff;
  background: #333333
}
.bg-3{
  color: #ffffff;
  background: #999999
}
.bg-4{
  color: #ffffff;
  background: #cccccc
}
.bg-5{
  background: #e5e5e5
}
.bg-6{
  background: #f0f0f0
}
.bg-7{
  background: #f5f5f5
}
.bg-8{
  background: #fcfcfc
}
.bg-9{
  background: #f5f7fa
}
.fontFamily {
  width: 80%;
  text-align: left;
}
.fz-1{
  width: 150px;
  font-size: 20px
}
.fz-2{
  width: 150px;
  font-size: 16px
}
.fz-3{
  width: 150px;
  font-size: 14px
}
.fz-4{
  width: 150px;
  font-size: 12px
}
</style>
