<template>
  <section>
    <footer id="footer" class="midnight-blue col-md-12">
      <div class="container">
        <div class="row">
          <div class="col-sm-6" style="float: right;margin-right: 100px">
            &copy; 2018-2022 Tsan Siyun
          </div>
<!--          <div class="col-sm-6">-->
<!--            <ul class="pull-right">-->
<!--              <li><a href="#home">Home</a></li>-->
<!--              <li><a href="#intro">Contact Me</a></li>-->
<!--            </ul>-->
<!--          </div>-->
        </div>
      </div>
    </footer><!--/#footer-->
  </section>

</template>

<script>
export default {
    name: 'Footer',
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
