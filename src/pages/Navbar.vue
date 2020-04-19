<template>
  <section>
    <nav class="mytopbar">
      <img src="static/img/navbar/color_nav_bg.jpg" class="background-img">
<!--          <div>{{$route.path}}</div>-->
<!--          <div>{{$route.name}}</div>-->
      <ul class="nav-bar-right nav-menu">
        <router-link to='/' ><li  v-bind:class="{active :$route.name==='home'}">首页</li></router-link>
        <router-link to='/three-d'><li v-bind:class="{active :$route.path.indexOf('three-d') >= 0}">三维视觉</li></router-link>
        <router-link to='/website'><li v-bind:class="{active :$route.path.indexOf('website') >= 0}">页面/服务器/公众号</li></router-link>
        <router-link to='/data-visual'><li v-bind:class="{active :$route.path.indexOf('data-visual') >= 0}">数据可视化</li></router-link>
      </ul>
    </nav>
  </section>

</template>

<script>
export default {
    name: 'Navbar',
    data() {

    },
    methods: {
        getPath(){
            console.log(this.$route.path)
        }
    },
    watch: {
        // $route(to, from) {
        //     this.curRouter=to
        // }
    }


}
</script>

<style lang="scss" scoped>
  @import 'static/css/main';
  .background-img{
    position: absolute;
    height: 100%;
    width: 100%;
  }
  .nav-menu{
    float: right;
    margin: 0;
    margin-right: 60px;
    max-height: 340px;
    height: auto;
    display: block;
    /*color: white;*/
    li{
      display: inline-block;
      float: left;
      position: relative;
      box-sizing: border-box;
      color: white;
      font-size: 15px;
      padding:15px 10px;
    }
    li.active{
      background: white;

      color: #000 !important;
    }
  }
</style>
