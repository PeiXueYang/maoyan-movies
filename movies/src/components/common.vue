<template>
  <div>
    <div class='top'>
      <van-icon  @click='goBack' class="left-icon" name="arrow-left" />
      <img  @click='goBack'  src="../../static/img/catMovie.png" alt="" class="img-cat">{{title}}</div>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        default: "猫眼电影"
      }
    },
    data() {
      return {

      }
    },
    components: {

    },
    methods: {
      goBack(){
        this.$router.go(-1)
      }

    },
    created() {

    }
  }

</script>
<style scoped>
  .top {
    text-align: center;
    height: 60px;
    line-height: 60px;
    background-color: red;
    color: #fff;
    position: relative;
  }

  .left-icon {
    float: left;
    margin: 20px 0 0 20px;
  }

  .img-cat {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    left: 3rem;
    top: .9rem;
  }

</style>
