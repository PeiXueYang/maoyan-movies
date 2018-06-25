<template>
  <div>
    <common :title='movieTitle'></common>
    <div class="box">
        <img :src="movie_detail_bg_img" alt="" class="movie-img">
        <div v-bind:style="{backgroundImage: 'url(' +movie_detail_bg_img + ')'}"   class="my-img-bg">   </div> 
        <div class="introduce-movie">
         <div>{{movie_detail.title}}</div>
         <div><small class="rate">{{movie_detail.rate}}分</small></div>
         <div class="my-small">
            <div class="small"><small>{{movie_detail.en_title}}</small></div>
            <div class="small"><small v-for='item in movie_detail.movieTypes'>{{item}}/</small></div>
            <div class="small"><small>{{this.movie_pubdate_c.country}} / {{movie_detail.duration}}</small></div>
            <div class="small"><small>{{this.movie_pubdate.date | formatDate}}</small>
                <small>  {{this.movie_pubdate.country}} </small>
            </div>
        </div>
        </div>    
        <div class="my-look-box">
            <div class="my-looking" @click='detail_select(1)' v-bind:class="{active: isActive}">   <van-icon name='like' /> 想看</div>
            <div class="my-looked" @click='detail_select(2)' v-bind:class="{active: Active}">   <van-icon name="checked" />  看过</div>
        </div>     
        <!-- 所属频道 -->
        <div class="my-pindao">
            <p>所属频道</p>
            <span v-for='item in movie_detail.movieTypes' class="my-type">{{item}}  <van-icon class=" i_arrow" name="arrow" />
            </span>
        </div>
        <p class="contnet-title">剧情简介:</p>
        <div class="my-introduce-content" v-bind:class='{"fold":isFold}'>
          <p class="content">{{movie_detail.summary}}</p>
        </div> 
        <div>
            <span @click='foldFun(1)'>展开-</span>
            <span @click='foldFun(2)'>收起</span>
        </div>
        <div class="my-perform">

        </div>
    </div>
  </div>
</template>
<script>
  import {
    getMoviesDetail
  } from '../../api/movie.js'
  import common from '@/components/common'
  import  {formatDate} from '../../../utils/utils.js';
  export default {
    components: {
        common
    },
    data() {
      return {
          movieTitle:'',//movie 标题
          movie_detail:"",//
          movie_detail_bg_img:"",//背景图
          movie_pubdate:'',// 
          movie_pubdate_c:'',// 
          seleNum:'',
          isActive:false, 
          Active:false, 
          isFold:false,
      }
    },
    filters: {
        formatDate(time) {
            var date = new Date(time);
            return formatDate(date, 'yyyy-MM-dd hh:mm');
        }
    },
    methods: {
      //获取电影详情
      getdetailFun() {
        getMoviesDetail(this.$route.params.id)
          .then(res => {
            this.$log(res, "res --")
            if(res.code ==0){
                this.movieTitle = res.data.movie.title
                this.movie_detail = res.data.movie
                this.movie_detail_bg_img = res.data.movie.poster
                let movieArr = []
                movieArr = res.data.movie.pubdate
                movieArr = movieArr.reverse()
                if( res.data.movie.pubdate.length>1){
                    this.movie_pubdate = movieArr[0]
                    this.movie_pubdate_c = movieArr[1]
                }
                else{
                    this.movie_pubdate = movieArr[0]
                    this.movie_pubdate_c = movieArr[0]
                }
                
            }
          })
      },
      // 想看  看过
      detail_select(num){
           this.seleNum = num
           if(num==1){
    
             this.isActive = !this.isActive
           }
           if(num==2){
               this.Active = !this.Active
           }
          
      },
      foldFun(num){
         this.isFold =!this.isFold;
      }

    },
    created() {
      this.getdetailFun()
    }
  }

</script>
<style scoped>
.my-img-bg{
    width: 100%;
    height: 13rem;
    background-size:100%;
    background-repeat: no-repeat;
    box-sizing: border-box;
    filter:blur(10px);
    position: relative;
}
.box{
    position: relative;
}
.movie-img{
    width: 7rem;
    height: 10rem;
    position: absolute;
    border: 1px solid #fff;
    z-index: 99;
    top: 1.5rem;
    left: 1rem;
}
.introduce-movie{
    width: 14rem;
    height: 10rem;
    position: absolute;
    z-index: 99;
    top: 1.5rem;
    left: 9rem; 
    box-sizing: border-box;
    color: #fff;
}
.small{
    font-size: .8rem;
    line-height: 1.6rem;
    color: #f1f1f1;
}
.rate{
    font-size: 1.2rem;
    color: gold;
    font-style: italic;
    height: 2rem;
    line-height: 3rem;
}
.my-look-box{
    height: 3rem;
    color: gray;
    text-align: center;
    margin-top: 2rem;
}
.my-looking{
    float: left;
    width: 40%;
    border: 1px solid #e1e1e1;
    border-radius: .2rem;
    line-height: 2rem;
    margin-left: 2rem;
    margin-right: .5rem;
}
.my-looked{
    float: left;
    width: 40%;
    border: 1px solid #e1e1e1;
    border-radius: .2rem;
    line-height: 2rem;
}
.active{
    color: red;
    border: 1px solid red;
}
.my-introduce-content{
    width: 100%;
    box-sizing: border-box;
    height: 12rem;
    padding: 0 .5rem;
    overflow: hidden;
    display: -webkit-box;
  -webkit-box-orient: vertical;
    margin-bottom: 1rem;
    -webkit-line-clamp: 6;
}
.content{
    color: #444;
    line-height: 1.85rem;
}
.my-pindao{
    padding: 0 .5rem;
}
.my-type{
    display: inline-block;
    border: 1px solid red;
    border-radius: .3rem;
    text-align: center;
    line-height: 1.8rem;
    color: red;
    width: 6rem;
    font-size: .9rem;
    box-sizing: border-box;
    margin-left: 1rem;
    margin-top: 1rem;
}
.i_arrow{
    float: right;
    margin-top: .5rem;
    margin-right: .5rem;

}
.contnet-title{
     padding: 0 .5rem; 
}
.fold{
    background: red;
}
</style>
