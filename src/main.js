import Vue from 'vue'
import App from './TodoApp.vue'

// 引入 bulma css 样式
import 'bulma/css/bulma.min.css'

Vue.config.productionTip = false

// 在 Vue 原型中添加 $bus,则所有组件都可以
// 使用 this.$bus 来调用 $bus
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App)
}).$mount('#app')
