<template>
  <div class="box">
    <common></common>
    <div class="label">我的订单
      <van-icon name="arrow" class='arrow-right' />
    </div>
    <div class="label">优惠券
      <van-icon name="arrow" class='arrow-right' />
    </div>
    <div class="label">影院会员卡
      <van-icon name="arrow" class='arrow-right' />
    </div>
    <div class="label label-add">想看的电影
      <van-icon name="arrow" class='arrow-right' />
    </div>
    <div class="label">看过的电影
      <van-icon name="arrow" class='arrow-right' />
    </div>
    <div class="my-kefu">猫眼电影 客服电话:
      <span class="orange">1010-5335</span>
    </div>
    <tabBar></tabBar>
  </div>
</template>
<script>
  import common from '@/components/common'
  import tabBar from '@/components/tabBar'
  export default {
    components: {
      common,
      tabBar
    },
    data() {
      return {

      }
    },
    computed: {

    }
  }

</script>
<style scoped>
  .box {
    background-color: #f4f4f4;
    height: 100%;
    box-sizing: border-box;
    position: relative;
  }

  .label {
    box-sizing: border-box;
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    background-color: #fff;
    margin-bottom: 2px;
    padding-left: 1rem;
    padding-right: 2px;
    /* border: 1px solid red; */
  }

  .label-add {
    margin-top: .8rem;
  }

  .arrow-right {
    float: right;
    display: inline-block;
    height: 3rem;
    line-height: 3rem;
    margin-right: 1rem;
    color: lightgray;
  }

  .my-kefu {
    position: absolute;
    text-align: center;
    bottom: 7rem;
    color: gray;
    width: 100%;
  }

  .orange {
    color: orange;
    text-decoration: underline;
  }

</style>
