<template>
    <section id="project" class="project-section">
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
        <h1 class="title">三维视觉实验室</h1>
        <div class="project-content">

          <div class="project-item">
            <router-link class="link" to="/three-d/mini-city"> </router-link>
            <h4 class="project-intro-header">三维迷你城市</h4>
            <ul class="tag-list">
              <li class="tag tag-item-qt">ThreeJs</li>
              <li class="tag tag-item-python">Vue</li>
            </ul>
            <div class="project-intro">
              <p>基于「<strong>QT</strong>」和「<strong>Python</strong>」开发的<strong>前后端同构框架</strong>，详情：</p>
              <ul class="intro-list">
                <li><strong>动态</strong>城市微场景</li>
                <li>像素风格城市</li>
              </ul>
              <img class="project-intro-pic" src="static/img/mini-city.gif">
            </div>
          </div>


          <div class="project-item">
            <a class="link" href="https://github.com/cansijyun/ncov-globe"> </a>
            <h4 class="project-intro-header">新冠肺炎疫情三维地球</h4>
            <ul class="tag-list">
              <li class="tag tag-item-python">WebGL</li>
              <li class="tag tag-item-django">定时爬虫</li>
              <li class="tag tag-item-mySQL">Flask</li>
              <li class="tag tag-item-nginx">Python</li>
            </ul>
            <div class="project-intro">
              <p>基于「<strong>Flask</strong>」和「<strong>WebGL</strong>」开发的<strong>疫情可视化</strong>三维地球：</p>
              <ul class="intro-list">
                <li>Github <strong>50星</strong>项目</li>
                <li>每隔两小时后端爬虫爬取<strong>疫情</strong>数据并且存储到数据库</li>
              </ul>
              <img class="project-intro-pic" src="static/img/ncov-globe.gif">
            </div>
          </div>

          <div class="project-item">
            <a class="link" href="http://pyact.com/sim-driver/"> </a>
            <h4 class="project-intro-header">模拟驾驶</h4>
            <ul class="tag-list">
              <li class="tag tag-item-python">BabylonJS</li>
              <li class="tag tag-item-django">CannonJS</li>
              <li class="tag tag-item-mySQL">Typescript</li>
              <li class="tag tag-item-nginx">Webpack</li>
            </ul>
            <div class="project-intro">
              <p>基于「<strong>BabylonJS</strong>」和「<strong>CannonJS</strong>」开发的<strong>疫情可视化</strong>三维地球：</p>
              <ul class="intro-list">
                <li>多种地图多种天气选择</li>
                <li>CannonJS为物理引擎，控制小车行驶</li>
              </ul>
              <img class="project-intro-pic" src="static/img/sim-driver.gif">
            </div>
          </div>

          <div class="project-item">
            <a class="link" href="http://resume.gold/en/"> </a>
            <h4 class="project-intro-header">个人导航网站(迷你简历)</h4>
            <ul class="tag-list">
              <li class="tag tag-item-bootstrap">BabylonJs</li>
              <li class="tag tag-item-jquery">3D Max</li>
              <li class="tag tag-item-mySQL">MySql</li>
            </ul>
            <div class="project-intro">
              <p>个人网址导航：</p>
              <ul class="intro-list">
                <li>高清3维贴图 <strong>漫反射/地形/云层贴图</strong>极致视觉</li>
                <li>像素风格文字</li>
                <li>访问数据记录</li>
              </ul>
              <p class="project-intro-links"><a href="http://resume.gold" target="_blank">中文地址</a></p>
              <p class="project-intro-links"><a href="http://resume.gold/en/" target="_blank">英文地址</a></p>

              <img class="project-intro-pic" src="static/img/my-nav.gif">
            </div>
          </div>

        </div>

      </div>
    </section>
</template>
<script>
export default {
    name: 'home',
    data() {
        return {
            workList: [
                {
                    link: '/three-d/mini-city',
                    img: 'static/img/threejs-example-mini-city.png',
                    title:'3d迷你城市',
                    description:'迷你城市',
                    tags:['three.js','vue']
                },
                { link: '/three-d/jump', img: 'static/img/threejs-example-jump.png',title:'迷你城市',description:'迷你城市' },
                { link: '/three-d/china-map', img: 'static/img/threejs-example-china-map.png',title:'迷你城市',description:'迷你城市' }
            ]
        }
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
    width: 100%; // height: 100%;
    background: #ffffff;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.info {
  font-size: 18px;
  line-height: 24px;
  margin: 60px;
  text-align: center;
    img {
        margin: 35px;
    }
    a {
        display: block;
        color: #232323;
        text-decoration: none;
        font-size: 24px;
    }
    a.author {
        margin: 18px;
        color: #b0b0b0;
        font-size: 18px;
    }
}

.works {
  /*display: flex;*/
  /*flex-wrap: wrap;*/
  /*justify-content: center;*/
  width: 40%;
  margin-bottom: 60px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.54);
  a{text-decoration: none;color: rgba(0, 0, 0, 0.54)}
  .works-row{
    position: relative;
    display: block;
    width: 100%;
    min-height: 13rem;
    padding: 10px;
    .title{
      font-size: 26px;
      line-height: 28px;
      font-weight: 600;
      color: rgba(0,0,0,0.8);
    }
    img{
      height: 13rem;
      position: absolute;
      top: 0;
      right: 0;
    }
  }

        /*&:hover img {*/
        /*    transform: scale(1.1);*/
        /*    -webkit-transform: scale(1.1);*/
        /*}*/
  }


@media screen and (max-width: 600px) {
    .works {
        width: 100%;
    }
}

</style>
<style lang="scss" scoped>
  @import 'static/css/animated_bg_cube.scss';
  @import 'static/css/main';
  /*这个分号一定要写，要不会报错*/
</style>
<!--<style scoped>-->
<!--  @import 'static/css/main.css';-->
<!--</style>-->
