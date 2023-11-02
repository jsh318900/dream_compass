<template>
<section class='container'>
<HeaderBar/>
<section class='diaryHeader'>
  <img src='@/assets/journal/left_arrow_journal.png' alt='day before'>
  <div id="date">{{ date }}</div>
  <img src='@/assets/journal/right_arrow_journal.png' alt='next day'>
</section>
<section v-if='!content' class='diaryBox'>
  <div class='contentBox'>
    <textarea id='content'></textarea>
  </div>
  <button id='confirm' @click='confirm'><img src='@/assets/journal/save.png' alt='confirm'><span>저장</span></button>
</section>
<section v-if='content && !editMode' class='diaryBox'>
  <div class='contentBox display'>
    <div id='content'>{{ content }}</div>
  </div>
  <button id='edit' @click='edit'><img src='@/assets/journal/edit.png' alt='edit'><span>수정</span></button>
</section>
<section v-if='content && editMode' class='diaryBox'>
  <div class='contentBox'>
    <textarea id='content' v-model='content'></textarea>
  </div>
  <button id='confirm' @click='confirm'><img src='@/assets/journal/save.png' alt='confirm'><span>저장</span></button>
</section>
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
    const content = state.state.diaryEntry && state.state.diaryEntry.content
    return {
      content: content,
      date: `${d.getFullYear()}.${('0' + (d.getMonth() + 1)).slice(-2)}.${('0' + d.getDate()).slice(-2)}`,
      editMode: false,
      keyReceived: false
    }
  },
  methods: {
    confirm () {
      const content = document.querySelector('#content').value
      state.state.writeDiary('', content)
      this.content = content
      this.editMode = false
      if (content && !this.keyReceived) {
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
    width: 390px;
    height: 844px;
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

  button {
  display: flex;
  flex-direction: column;
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
    font-size: 20px;
    letter-spacing: 0.05rem;
    color: #363D50;
    font-family: 'Nanum Myeongjo';
    line-height: 25px;
  }

  .diaryBox {
    padding: 2rem;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: space-between;
  }

  .contentBox {
    height: 75%;
    width: 100%;
    margin: 5% 0;
  }

  #content {
    height: 100%;
    width: 100%;
    border: none;
    padding: 1rem;
    font-family: 'Nanum Myeongjo';
    font-weight: 400;
    font-size: 15px;
    line-height: 26.25px;
  }

  #confirm {
    border: none;
    background: transparent;
  }

  #edit {
    border: none;
    background: transparent;
  }

</style>
