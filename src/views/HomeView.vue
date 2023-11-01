<template>
<section class='container'>
<div class='header'>
    <img src='@/assets/icon.png'>
    <span>Lucid Dreamer</span>
</div>
<div class='episodeSelector'>
    <div class='episodeImage'></div>
    <button id='next' @click='jiggle'><img src="@/assets/home/next_arrow.png"></button>
</div>
<div class='episodeTitle'>
    <img src="@/assets/home/chapter_1_title.png">
</div>
<div class='options'>
    <button id='diary' @click='toDiary'>
        <img src="@/assets/home/book.png">
        <span>꿈일기</span>
    </button>
    <div class='vl'></div>
    <button id='play' @click='toEpisode1'>
        <img src="@/assets/home/play.png">
        <span>플레이</span>
    </button>
</div>
<NavBar :home='true' style='margin-top: 39px;'/>
</section>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import state from '@/main.js'
import { useRouter } from 'vue-router'

export default {
  name: 'HomeView',
  components: {
    NavBar
  },
  setup () {
    const router = useRouter()
    const toEpisode1 = () => {
      router.push('/episode')
    }
    const toDiary = () => {
      router.push('/diary')
    }
    return {
      toEpisode1, toDiary
    }
  },
  data () {
    const initial = state.state.progress
    const initEpisode1 = state.state.episode1
    return {
      current: initial,
      episode1: initEpisode1,
      extended: false
    }
  },
  methods: {
    startEpisode1 () {
      this.toEpisode1()
    },
    jiggle () {
      const elmt = document.getElementsByClassName('episodeImage')[0]
      elmt.style.transition = 'ease-out 0.4s'
      setTimeout(() => {
        elmt.style.transform = 'translateX(-5px)'
      }, 0)
      setTimeout(() => {
        elmt.style.transform = 'translateX(5px)'
      }, 600)
      setTimeout(() => {
        elmt.style.transform = 'translateX(0px)'
      }, 1100)
    }
  }
}
</script>

<style lang="css" scoped>
    .container {
        width: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

    div .header {
        display: flex;
        flex-direction: column;
        margin-top: 45px;
        margin-left: auto;
        margin-right: auto;
        width: 92.56px;
        align-items: center;
    }

    div .header img {
        width: 37.66px;
        height: 28.37px;
    }

    div .header span {
        font-family: 'Bigshot One';
        font-weight: 400;
        font-size: 14px;
        line-height: 14.67px;
        letter-spacing: 0.5%;
        text-align: center;
        margin-top: 5.13px;
    }

    div .episodeSelector {
        width: 100%;
        height: 346px;
        margin-top: 45.5px;
        padding-left: 93px;
        display: flex;
        flex-direction: row;
    }

    div.episodeSelector > div.episodeImage {
        width: 203px;
        height: 346px;
        border-radius: 200px;
        background-image: url('@/assets/ep_illust1.png');
        background-position: center;
        background-size: cover;
    }

    div.episodeSelector > button {
        border: none;
        background-color: transparent;
        width: 50px;
        margin-left: 22px;
    }

    div.episodeTitle {
        width: 100%;
        display: flex;
        margin-top: 45px;
        justify-content: center;
    }

    div.episodeTitle > img{
        width: 229px;
        height: 121px;
        margin: auto;
        left: 81px;
    }

    div.options {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-left: 93px;
        padding-right: 93px;
        margin-top: 16px;
        align-items: center;
    }

    div.vl {
        border-left: 1px solid #AAAFB2;
        height: 46px;
        color: transparent;
    }

    div.options > button {
        border: none;
        display: flex;
        flex-direction: column;
        background-color: transparent;
        width: 59px;
        height: 67px;
        justify-content: center;
        align-items: center;
    }

    div.options > button > span {
        font-weight: 800;
        font-size: 20px;
        line-height: 20px;
        letter-spacing: 5%;
        font-family: 'Nanum Gothic';
        margin-top: 12.8px;
        width: 59px;
    }
</style>
