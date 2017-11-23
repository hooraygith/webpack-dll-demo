// import Vue from 'vue'
import Vue from 'vue/dist/vue.runtime.common.js';
window['Vue'] = Vue
import b from 'vuex'
import c from 'vue-router'

console.log(33, $('body'))
console.log(424, typeof Vue, typeof c)

// new Vue({
//    el: '#app',
//    data: {
//     dd: 444
//    }
// })

new Vue({
  render: function(h){
    return h('h1', 'Hi Vue')
  }
}).$mount('#app')