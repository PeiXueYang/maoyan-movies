<!-- 正在上映 start -->
<template>
  <div class="my-box">
    <div class='my-on-now'>
      <span class="my-left">即将上映({{coming_movie.count}}部)</span>
      <span class="my-right">
        <van-icon name="arrow" />
      </span>
    </div>
    <div class="my-movie-list">
      <div v-for='item in coming_movie.movies' class="my-img-list" @click='toDetail(item._id)'>
        <img :src="item.poster" alt="" class="my-movie-img">
        <div class="my-text">{{item.title}}</div>
        <small>{{item.rate}}</small>
      </div>
    </div>
  </div>
</template>
<!-- 正在上映 end -->
<script>
  export default {
    props: ['coming_movie'],
    data() {
      return {

      }
    },
    methods: {
      // movie 的详情页
      toDetail(mid) {
        this.$router.replace({
          name:'detail',params:{
            id:mid
          }
        })

      },

    },
    created() {
      // console.log(this.coming_movie, '=====')
    }
  }

</script>
<style scoped>
  .my-on-now {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    font-size: 1.1rem;
    font-weight: bolder;
    box-sizing: border-box;
  }

  .my-left {
    float: left;
    margin-left: 1rem;
  }

  .my-right {
    float: right;
    margin-right: .8rem;
  }

  .my-box {
    background-color: #fff;
    margin-top: .3rem;
    margin-bottom: .5rem;
  }

  .my-movie-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .my-img-list {
    width: 25%;
    padding: 0px 5px;
    box-sizing: border-box;
    margin-bottom: 30px;
    position: relative;
  }

  .my-movie-img {
    width: 100%;
    height: 7rem;
  }

  .my-text {
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  small {
    position: absolute;
    bottom: 30px;
    color: gold;
    right: 10px;
    font-size: 1rem;
    font-style: italic;
  }

</style>
