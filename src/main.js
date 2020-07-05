import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import audio from './assets/dj.ogg'

// 方法1：注册播放音频事件到Vue实例上
Vue.prototype.playAudio = () => {
  let buttonAudio = document.getElementById('eventAudio');
  buttonAudio.setAttribute('src',audio)
  buttonAudio.play()
}

// 方法2：添加自定义属性
document.body.addEventListener('click',function( e ){
  let event = e || window.event;
  let target = event.target || event.srcElement;
  let clickMusic = target.getAttribute('clickMusic')
  if(clickMusic==='true') Vue.prototype.playAudio()
  else return false;
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
