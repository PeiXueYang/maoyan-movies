<!-- 首页 -->
<template>
  <div class="box">
    <homeItem></homeItem>
    <onNow :on_now_movie='on_now_movie'></onNow>
    <comingItem :coming_movie='coming_movie'></comingItem>
  </div>
</template>
<script>
  import common from '@/components/common'
  import homeItem from '@/components/home-item'
  import onNow from '@/components/on-now'
  import comingItem from '@/components/coming'
  import {
    getMovies
  } from '@/api/movie.js'
  export default {
    components: {
      common,
      homeItem,
      onNow,
      comingItem
    },
    data() {
      return {
        on_now_movie: Object, //正在上映的电影
        coming_movie: Object, //即将上映的电影

      }
    },
    methods: {
      getMovieInfo() {
        const params = {
          page: 1,
          page_size: 8
        }
        getMovies({
          ...params,
          type: 1
        }).then((res) => {
          console.log(res,'res')
          if (res.code === 0) {
            this.on_now_movie = res.data
          }
        })
        getMovies({
          ...params,
          type: 0
        }).then((res) => {
          if (res.code === 0) {
            this.coming_movie = res.data
          }
        })
      }

    },
    created() {
      this.getMovieInfo()
    }
  }

</script>
<style scoped>
  .box {
    width: 100%;
    height: 100%;
    background-color: #f3f3fa;
  }

</style>
