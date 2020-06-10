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
<!--          <a class="link" href="https://github.com/Seedarchangel/TuChart/blob/master/Example_Graphs/En_US.md"> </a>-->
          <h4 class="project-intro-header">北斗量化平台</h4>
          <ul class="tag-list">
            <li class="tag tag-item-qt">Vue</li>
            <li class="tag tag-item-python">ElementUI</li>
            <li class="tag tag-item-uwsgi">Echarts</li>
          </ul>
          <div class="project-intro">
            <p>北斗量化平台是集策略研究、分析和应用于一体的<strong>量化平台</strong></p>
            <ul class="intro-list">
              <li>策略功能：允许用户在可视化的操作下进行策略创建，可以对回测条件进行设置，模拟市场真实情况，获取回测结果。</li>
              <li>分析功能：多品种和多策略并存，从整体的维度对策略进行完善和细化，优化策略。</li>
              <li>对于已经选定的品种和组合，用户可以迅速的查看策略在全局上的表现情况。通过多组数据的对比分析，发现特定品种的交易机会与优势，为泛化能力评价提供依据，非常有助于策略与品种之间关系的硏究，在复杂的市场环境上取得更好的结果。</li>
            </ul>
            <img class="project-intro-pic" style="position:relative; width:80%;margin-left: 10%;margin-bottom: 20px" src="static/img/website/beidou1.png">
            <img class="project-intro-pic" style="position:relative; width:80%;margin-left: 10%;margin-bottom: 20px" src="static/img/website/beidou2.jpg">
            <img class="project-intro-pic" style="position:relative; width:80%;margin-left: 10%;margin-bottom: 20px" src="static/img/website/beidou3.jpg">
          </div>
        </div>



        <div class="project-item">
          <!--          <a class="link" href="https://github.com/Seedarchangel/TuChart/blob/master/Example_Graphs/En_US.md"> </a>-->
          <h4 class="project-intro-header">汇智心晴（暂定名）</h4>
          <ul class="tag-list">
            <li class="tag tag-item-qt">Vue</li>
            <li class="tag tag-item-python">ElementUI</li>
            <li class="tag tag-item-uwsgi">Echarts</li>
          </ul>
          <div class="project-intro">
            <p>汇智心晴（暂定名）是集策略研究、数据可视化<strong>舆情分析</strong></p>
<!--            <ul class="intro-list">-->
<!--              <li>策略功能：允许用户在可视化的操作下进行策略创建，可以对回测条件进行设置，模拟市场真实情况，获取回测结果。</li>-->
<!--              <li>分析功能：多品种和多策略并存，从整体的维度对策略进行完善和细化，优化策略。</li>-->
<!--              <li>对于已经选定的品种和组合，用户可以迅速的查看策略在全局上的表现情况。通过多组数据的对比分析，发现特定品种的交易机会与优势，为泛化能力评价提供依据，非常有助于策略与品种之间关系的硏究，在复杂的市场环境上取得更好的结果。</li>-->
<!--            </ul>-->

            <img class="project-intro-pic" style="position:relative; width:80%;margin-left: 10%;margin-bottom: 20px" src="static/img/website/huizhi.jpg">
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
