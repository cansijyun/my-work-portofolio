<template>
  <section id="project" class="project-section" style="background: #005eaa;">
    <div class="container cube-bg area" style="background: #005eaa;">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <h1 class="title">页面/服务器/公众号</h1>
      <div class="project-content">

        <div class="project-item">
<!--          <a class="link" href="https://github.com/Seedarchangel/TuChart/blob/master/Example_Graphs/En_US.md"> </a>-->
          <h4 class="project-intro-header">票据识别服务器</h4>
          <ul class="tag-list">
            <li class="tag tag-item-qt">Flask</li>
            <li class="tag tag-item-python">Opencv</li>
            <li class="tag tag-item-uwsgi">Tesseract</li>
          </ul>
          <div class="project-intro">
            <p>基于「<strong>Opencv</strong>」和「<strong>Tesseract</strong>」开发的<strong>票据识别服务器</strong>，详情：</p>
            <ul class="intro-list">
              <li>专门为深圳市广深会计事务所开发</li>
              <li>副业开发项目</li>
            </ul>
            <img class="project-intro-pic" src="static/img/website/receive.png">
          </div>
        </div>

        <div class="project-item">
                    <a class="link" href="http://siyu.tech"> </a>
          <h4 class="project-intro-header">siyu.tech个人博客</h4>
          <ul class="tag-list">
            <li class="tag tag-item-bootstrap">Hexo</li>
            <li class="tag tag-item-jquery">JS</li>
            <li class="tag tag-item-mySQL">Webpack</li>
            <li class="tag tag-item-python">Markdown</li>
          </ul>
          <div class="project-intro">
            <p>我的个人博客</p>
            <ul class="intro-list">
              <li>左中右三栏设计</li>
              <li>文档结构图</li>
              <li>响应式设计</li>
            </ul>
            <!--            <p class="project-intro-links"><a href="http://data-lab.tech/detail_charts.html" target="_blank">项目地址</a></p>-->
            <!--            <p class="project-intro-links"><a href="http://data-lab.tech/macro_data.html" target="_blank">项目地址2</a></p>-->

            <img class="project-intro-pic" src="static/img/website/siyu.PNG">
          </div>
        </div>
        <div class="project-item">
          <a class="link" href="https://www.huaweicloud.com/product/iot.html"> </a>
          <h4 class="project-intro-header">华为云Iot前端开发</h4>
          <ul class="tag-list">
            <li class="tag tag-item-gunicorn">Angular</li>
            <li class="tag tag-item-jquery">Webpack</li>
            <li class="tag tag-item-echart">自研组件</li>
          </ul>
          <div class="project-intro">
            <p>华为云Iot前端组成员</p>
            <ul class="intro-list">
              <li>负责相关前端模块开发</li>
              <li>拿到UI并按要求和规范转化成相关页面</li>
<!--              <li>海外项目组，英语母语级别</li>-->
            </ul>
            <!--            <p class="project-intro-links"><a href="http://data-lab.tech/detail_charts.html" target="_blank">项目地址</a></p>-->
            <!--            <p class="project-intro-links"><a href="http://data-lab.tech/macro_data.html" target="_blank">项目地址2</a></p>-->

            <img class="project-intro-pic" src="static/img/website/huawei-iot.png">
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style lang="scss" scoped>
  @import 'static/css/animated_bg_cube.scss';
  @import 'static/css/main';
</style>
