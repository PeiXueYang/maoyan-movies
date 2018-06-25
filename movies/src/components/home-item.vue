<template>
  <div>
    <div class="box">
      <div class="common">
        <img src="../../static/img/catMovie.png" alt="" class="img-cat">
      </div>
      <div class="common" v-bind:class="{'selected':active==1}" @click='switchFun(1)'>首页</div>
      <div class="common" v-bind:class="{'selected':active==2}" @click='switchFun(2)'>分类</div>
      <div class="common" v-bind:class="{'selected':active==3}" @click='switchFun(3)'>榜单</div>
      <div class="common" v-bind:class="{'selected':active==4}" @click='switchFun(4)'>搜索</div>
      <div class="common" v-bind:class="{'selected':active==5}" @click='switchFun(5)'><van-icon name="contact" class="contact" /> </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            active:1,
        }
    },
    methods:{
        switchFun(active){
            this.active = active
        }
    }
}

</script>
<style scoped>
  .box {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    background-color: #fff;
    display: flex;
  }

  .common {
    flex: 1;
    text-align: center;
    padding-bottom: 3rem;
  }

  .img-cat {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-top: .6rem;
  }
  .selected{
    border-bottom: 3px solid red;
    color: red;
  }
.contact{
    margin-top: 15px;
    font-size: 1.2rem;
}
</style>
