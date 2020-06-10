<template>

  <section id="intro" class="intro-section">

    <div class="container cube-bg area">
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
    </div>
    <div class="content">
      <h1 class="title">Tsan的作品集</h1>
      <div class="boxs">
        <div class="box-frame">
          <router-link class="link" to="/website"> </router-link>
          <div class="box">
            <img class="box-background" src="static/img/website/receive.png">
            <p>网页/APP/公众号</p>
          </div>
        </div>

        <div class="box-frame">
          <router-link class="link" to="/three-d"> </router-link>
          <div class="box">
            <img class="box-background" src="static/img/mini-city.gif">
            <p >三维视觉作品集</p>
          </div>
        </div>
        
        <div class="box-frame">
          <router-link class="link" to="/data-visual"> </router-link>
          <div class="box">
            <img class="box-background" src="static/img/data-ana/data-lab.PNG">
            <p>数据可视化作品集</p>
          </div>
        </div>

        <div class="box-frame">
          <a class="link" href="http://resume.gold/"> </a>
          <div class="box">
            <img class="box-background" src="static/img/my-nav.gif">
            <p>个人网址导航</p>
          </div>
        </div>


      </div>

    </div>
  </section>
</template>

<script>
export default {
    name: 'HomePage'
}
</script>

<style lang="scss" scoped>
  @import 'static/css/animated_bg_cube.scss';
  @import 'static/css/main.scss';
</style>
