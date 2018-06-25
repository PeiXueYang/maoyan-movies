<template>
  <div class='box-tab'>
    <div class="tab" v-bind:class="{'tabSwitch':selected==1}" @click='selecteFun(1)'>
      <div>
        <van-icon name="home" />
      </div>
      <div class="my-font">电影 </div>
    </div>
    <div class="tab" v-bind:class="{'tabSwitch':selected==2}" @click='selecteFun(2)'>
      <div> <van-icon name="more-o" /> </div>
      <div class="my-font">影院</div>
    </div>
    <div class="tab" v-bind:class="{'tabSwitch':selected==3}" @click='selecteFun(3)'>
      <div>  <van-icon name="contact" /> </div>
      <div class="my-font">我的</div>
    
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        selected:3,//默认选中1
      }
    },
    methods:{
      selecteFun(selected){
        this.selected = selected
      }
    }
  }
</script>
<style scoped>
  .box-tab {
    width: 100%;
    height: 4rem;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    box-sizing: border-box;
  }

  .tab {
    float: left;
    width: 33%;
    height: 100%;
    text-align: center;
    padding-top: 15px;
  }
  .tabSwitch{
    color: red;
  }
</style>
