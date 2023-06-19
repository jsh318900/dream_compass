import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

const state = reactive({
  dreamKey: 1,
  willPower: 0,
  progress: -1,
  episode1: false,
  diaryEntries: undefined,
  writeDiary (title, content) {
    this.diaryEntries = { title: title, content: content }
  },
  modifyDiary (title, content) {
    if (this.diaryEntries) {
      this.diaryEntries = { title: title, content: content }
    }
  },
  incrementDreamKey () {
    this.dreamKey++
  },
  decrementDreamKey () {
    this.dreamKey--
  },
  incrementWillPower () {
    this.willPower++
  },
  decrementWillPower () {
    this.willPower--
  },
  incrementProgress () {
    this.progress++
  }
})

export default {
  state
}
