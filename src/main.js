// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import components from './components/'
import ElementUI from 'element-ui'

Vue.config.productionTip = false

/** 注册 element 组件 */
Vue.use(ElementUI, {size: 'small'});

/** 注册全局常用组件 */
components.map(component => Vue.component(component.name, component));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
