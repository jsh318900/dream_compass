<template>
<section class='container'>
<HeaderBar/>
<section class='title'>
  <h1>꿈일기</h1>
</section>
<section class='diaryHeader'>
  <div id="date">{{ date }}</div>
  <div id='back' @click='toHome'><img src='@/assets/back.png' alt='back'></div>
</section>
<section v-if='!title || !content' class='diaryBox'>
  <div class='titleBox'>
    <textarea id='title' placeholder='무제'></textarea>
  </div>
  <div class='contentBox'>
    <textarea id='content'></textarea>
  </div>
  <button id='confirm' @click='confirm'><img src='@/assets/confirm.png' alt='confirm'></button>
</section>
<section v-if='title && content && !editMode' class='diaryBox'>
  <div class='titleBox display'>
    <div id='title'>{{ title }}</div>
  </div>
  <div class='contentBox display'>
    <div id='content'>{{ content }}</div>
  </div>
  <button id='edit' @click='edit'><img src='@/assets/edit.png' alt='edit'></button>
</section>
<section v-if='title && content && editMode' class='diaryBox'>
  <div class='titleBox'>
    <textarea id='title' v-model='title'></textarea>
  </div>
  <div class='contentBox'>
    <textarea id='content' v-model='content'></textarea>
  </div>
  <button id='confirm' @click='confirm'><img src='@/assets/confirm.png' alt='confirm'></button>
</section>
<button id='help'><img src='@/assets/help.png' alt='?'></button>
<NavBar/>
</section>
</template>

<script>
import state from '@/main.js'
import HeaderBar from '@/components/HeaderBar.vue'
import NavBar from '@/components/NavBar.vue'
import { useRouter } from 'vue-router'

export default {

  name: 'DiaryView',
  setup () {
    const router = useRouter()
    const toHome = () => {
      router.push('/home')
    }
    return {
      toHome
    }
  },
  data () {
    const d = new Date()
    const title = state.state.diaryEntry && state.state.diaryEntry.title
    const content = state.state.diaryEntry && state.state.diaryEntry.content
    return {
      title: title,
      content: content,
      date: `${d.getMonth() + 1}월 ${d.getDate()}일`,
      editMode: false,
      keyReceived: false
    }
  },
  methods: {
    confirm () {
      const title = document.querySelector('#title').value
      const content = document.querySelector('#content').value
      console.log(title)
      state.state.writeDiary(title, content)
      this.title = title
      this.content = content
      this.editMode = false
      if (title && content && !this.keyReceived) {
        this.keyReceived = true
        state.state.incrementDreamKey()
      }
    },
    edit () {
      this.editMode = true
    }
  },
  components: {
    HeaderBar, NavBar
  }
}
</script>

<style lang="css" scoped>
  .container {
    width: 100%;
    height: 100vh;
  }

  textarea {
    border: none;
    overflow: auto;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none;
    background: transparent;
  }

  .title {
    color: #ffffff;
    font-style: normal;
    font-weight: 800;
    font-size: 2.5rem;
    line-height: 100%;
    letter-spacing: 0.325rem;
    text-align: center;
    height: 10%;
    padding: 10% 0;
  }

  .diaryHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10%;
  }

  #date {
    padding: 1rem;
    font-style: normal;
    font-weight: 800;
    font-style: 2rem;
    letter-spacing: 0.05rem;
    color: #151C36;
  }

  .diaryBox {
    overflow: ;
    background: rgba(170, 176, 190, 0.6);
    border-top-left-radius: 10%;
    border-top-right-radius: 10%;
    padding: 2rem;
    height: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: space-between;
  }

  .titleBox {
    background-color: rgba(255, 255, 255, 0.6);
    color: #AAB0BE;
    border-radius: 0.75rem;
  }

  .contentBox {
    height: 75%;
    width: 100%;
    margin: 5% 0;
    color: #485778;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 5%;
  }

  .titleBox.display {
    background: transparent;
    color: #485778;
  }

  .contentBox.display {
    background: transparent;
    color: #485778;
  }

  #title {
    font-size: 0.75rem;
    text-align: center;
    padding-top: 0.5rem;
    letter-spacing: 0.05rem;
    border: none;
    width: 100%;
  }

  #content {
    height: 100%;
    width: 100%;
    border: none;
    padding: 1rem;
  }

  #confirm {
    border: none;
    background: transparent;
  }

  #edit {
    border: none;
    background: transparent;
  }

  #help {
    border: none;
    background: transparent;
    position: fixed;
    right: 0.25rem;
    bottom: 8.5%;
  }
</style>
