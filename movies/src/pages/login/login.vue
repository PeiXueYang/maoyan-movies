<template>
  <div class="box">
    <top></top>
    <div class="tab">
      <span class='login-tab' v-bind:class='{"select":tabSelect==1}' @click='selectLeftFun'>账号密码登录</span>
      <span class='login-tab' v-bind:class='{"select":tabSelect==2}' @click='selectRightFun'>手机号快捷登录</span>
    </div>
    <!-- 账号密码登录  start -->
    <div class="acount-login" v-if='tabSelect==1'>
      <div class="label">
        <div class="left">帐号:</div>
        <div class="right">
          <input type="text" class="input" placeholder="请输入手机号" v-model='accountPhone'> 
        </div>
        <van-icon name="clear" class="clear" @click='clearFun' v-if='active !=1' />
      </div>
      <div class="label">
        <div class="left">密码:</div>
        <div class="right">
          <input class="input" placeholder="请输入密码" type="password" v-model='password'>
        </div>
      </div>

    </div>
    <!-- 账号密码登录  end -->
    <!-- 手机号快捷登陆  start -->
    <div class="fast-login" v-else>
      <div class="label">
        <div class="left-fast">手机号:</div>
        <div class="right-fast">
          <input type="text" class="input" placeholder="仅支持中国大陆手机号" v-model='phone'> </div>
        <span class="van-btn" @click='getCode'>{{codeTxt}}</span>
      </div>
      <div class="label">
        <div class="left-fast">验证码:</div>
        <div class="right-fast">
          <input class="input" placeholder="请输入验证码" type="password" v-model='vertiCode'>
        </div>
      </div>
    </div>
    <!-- 手机号快捷登录  end -->
    <div class="btn-box">
      <button @click='login' class="btn-login" v-bind:class='{"btn-login-disabled":active ==1}'>登录</button>
    </div>
  </div>
</template>
<script>
  import top from '@/components/top'
  import {
    Toast
  } from 'vant';
  import {
    login
  } from '../../api/login.js'
  export default {
    components: {
      top
    },
    data() {
      return {
        tabSelect: 1, //tab切换
        accountPhone: '', //账号
        phone: '', //手机号
        password: '', //密码
        vertiCode: '', //验证码
        active: 1, //登录按钮的状态
        codeTxt: '获取验证码',
        codeStatus: true, //验证码的状态 一开始为true
      }
    },
    watch: {
      //通过watch 来监听输入框值的变化
      // 如果有输入框中有内容 登录按钮为打开状态
      phone: function () {
        if (this.phone) {
          this.active = ''
        } else {
          this.active = 1
        }

      },
      accountPhone: function () {
        if (this.accountPhone) {
          this.active = ''
        } else {
          this.active = 1
        }
      }
    },
    methods: {
      async login() {
        if (!this.checked()) return false
        if (this.tabSelect == 1) {
          let data = {
            phone: this.accountPhone,
            password: this.password
          }
          Toast.success({
            duration: 1000,
            message: '登录成功.'
          });
          localStorage.setItem('accountPhone', this.accountPhone)
          localStorage.setItem('password', this.password)
          localStorage.setItem('loginStatus', 'true')
        } else {
          let data = {
            phone: this.phone,
          }
          Toast.success({
            duration: 1000,
            message: '登录成功.'
          });
          localStorage.setItem('phone', this.phone)
          localStorage.setItem('loginStatus', 'true')
        }
        return
        login(data).then(res => {
          console.log(res)
        })

      },
      // 验证函数
      checked() {
        if (this.tabSelect == 1) {
          if (!this.accountPhone) {
            //提示
            Toast({
              duration: 1000,
              message: '手机号不能为空'
            });
            return
          }
          if (this.accountPhone.length != 11) {
            Toast({
              duration: 1000,
              message: '请输入有效的手机号'
            });
            return
          }
          var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/
          if (!myreg.test(this.accountPhone)) {
            Toast({
              duration: 1000,
              message: '请输入有效的手机号'
            });
            return
          }
          if (!this.password) {
            Toast({
              duration: 1000,
              message: '请输入密码'
            });
            return
          }
          return true
        } else {
          if (!this.phone) {
            //提示
            Toast({
              duration: 1000,
              message: '手机号不能为空'
            });
            return
          }
          if (this.phone.length != 11) {
            Toast({
              duration: 1000,
              message: '请输入有效的手机号'
            });
            return
          }
          var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/
          if (!myreg.test(this.phone)) {
            Toast({
              duration: 1000,
              message: '请输入有效的手机号'
            });
            return
          }
          return true
        }
      },
      //获取验证码
      getCode() {
        this.tabSelect = 2
        if (!this.checked()) return false
        if (!this.codeStatus) return
        let sec = 60
        this.codeStatus = false
        let counterdown = setInterval(() => {
          sec--
          this.codeTxt = sec + 's后重新获取'
          if (sec <= 0) {
            clearInterval(counterdown)
            this.codeStatus = true
            this.codeTxt = '获取验证码'
          }

        }, 1000)
      },
      selectLeftFun() {
        this.tabSelect = 1
      },
      selectRightFun() {
        this.tabSelect = 2
      },
      //清空输入的内容
      clearFun(){
        this.accountPhone = ''
      },
    }
  }

</script>
<style scoped>
  .box {
    height: 100%;
  }

  .label {
    height: 60px;
    line-height: 60px;
    color: #777;
    border-bottom: 1px solid lightgray;
    position: relative;
  }

  .left {
    float: left;
    width: 15%;
    text-align: right;
    color: #000;
  }

  .left-fast {
    float: left;
    width: 18%;
    text-align: right;
    color: #000;
  }

  .right-fast {
    float: right;
    width: 50%;
    margin-right: 7rem;
  }

  .right {
    float: right;
    width: 70%;
    margin-right: 45px;
  }

  .input {
    border: none;
    outline: none;
    display: inline-block;
    height: 30px;
    line-height: 30px;
    width: 100%;
    font-size: 16px;
  }

  .btn-box {
    text-align: center;
  }

  .btn-login {
    display: inline-block;
    border: none;
    outline: none;
    width: 85%;
    height: 35px;
    border-radius: 5px;
    vertical-align: middle;
    background-color: red;
    color: #fff;
    margin: 2rem auto;
  }

  .btn-login-disabled {
    opacity: 0.5;
  }

  .tab {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    border-bottom: 1px solid lightgray;
  }

  .login-tab {
    display: inline-block;
    width: 49%;
    text-align: center;
  }

  .select {
    border-bottom: 2px solid red;
    color: red;
  }

  .van-btn {
    display: inline-block;
    width: 7rem;
    height: 2rem;
    line-height: 2rem;
    position: absolute;
    right: 10px;
    top: .8rem;
    background-color: red;
    border-radius: 5px;
    text-align: center;
    color: #fff;
    font-size: .8rem;
  }
  .clear{
    position: absolute;
    right: 2rem;
    top: 1.5rem;
  }
  input::-webkit-input-placeholder {
    color: #666;
    font-size: .8rem;
  }

</style>
