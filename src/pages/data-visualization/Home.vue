<template>
  <section id="project" class="project-section" style="background: #4ea397;">
    <div class="container cube-bg area" style="background: #4ea397;">
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
      <h1 class="title">数据可视化作品集</h1>
      <div class="project-content">

        <div class="project-item">
          <a class="link" href="http://pyact.com/datalab/"> </a>
          <h4 class="project-intro-header">TuChart</h4>
          <ul class="tag-list">
            <li class="tag tag-item-qt">QT</li>
            <li class="tag tag-item-python">Python</li>
            <li class="tag tag-item-uwsgi">Echarts</li>
          </ul>
          <div class="project-intro">
            <p>基于「<strong>QT</strong>」和「<strong>Python</strong>」开发的<strong>股票视觉化应用</strong>，详情：</p>
            <ul class="intro-list">
              <li>Github600星项目，Echarts团队官方微博转载</li>
              <li><strong>QT框架下的</strong>GUI界面</li>
              <li>多种数据展示维度</li>
              <li>支持股票/数字货币等金融数据</li>
            </ul>
            <img class="project-intro-pic" src="static/img/data-ana/tucharts.gif">
          </div>
        </div>

        <div class="project-item">
          <a class="link" href="https://github.com/Seedarchangel/TuChart/blob/master/Example_Graphs/En_US.md"> </a>
          <h4 class="project-intro-header">Data-lab长线经济数据网站</h4>
          <ul class="tag-list">
            <p>前端</p>
            <li class="tag tag-item-bootstrap">Bootstrap</li>
            <li class="tag tag-item-jquery">JQuery</li>
            <li class="tag tag-item-mySQL">JS ES6</li>
            <p>后端</p>
            <li class="tag tag-item-python">Python</li>
            <li class="tag tag-item-django">Django</li>
            <li class="tag tag-item-mySQL">MongoDB</li>
            <p>服务端</p>
            <li class="tag tag-item-nginx">Nginx</li>
            <li class="tag tag-item-uwsgi">Gunicorn</li>
          </ul>
          <div class="project-intro">
            <p>经济长线数据网站，详情：</p>
            <ul class="intro-list">
              <li>百年 <strong>大宗商品/能源/股市等等的</strong>数据查看/下载</li>
              <li>使用Nginx和Gunicorn<strong>高性能</strong>HTTP和反向代理服务；</li>
              <li>组合数据到<strong>同一个</strong>图标</li>
            </ul>
<!--            <p class="project-intro-links"><a href="http://data-lab.tech/detail_charts.html" target="_blank">项目地址</a></p>-->
<!--            <p class="project-intro-links"><a href="http://data-lab.tech/macro_data.html" target="_blank">项目地址2</a></p>-->

            <img class="project-intro-pic" src="static/img/data-ana/data-lab.PNG">
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
