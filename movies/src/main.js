// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import plugin from './plugin/plugin'
Vue.config.productionTip = false
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
Vue.use(Vant);
Vue.use(plugin);
//自定义配置参数
//
Vue.config.CONSOLE_CHECK = true;//启用log插件输出
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
