<template>
<section class='container'>
<HeaderBar/>
<section class='main'>
    <div class='story' v-if='!extended'><h3>첫번째 꿈여행</h3></div>
    <div class='storyName' v-if='!extended'><h1>자각몽</h1></div>
    <div class='chapterInfo'>
        <p>제 1 장</p>
        <p>[익숙하고 낯선 장소들]</p>
    </div>
    <div v-if:='!extended' class='episodeImageSlider'>
        <div class='episodeImage' :class='{active: current < 1}'>
            <img v-if='episode1' src='@/assets/episode1_unlocked.png'>
            <img v-if='!episode1' src='@/assets/episode1_locked.png'>
        </div>
        <div class='episodeImage' :class='{active: current == 1}'>
            <img src='@/assets/episode2_locked.png'>
        </div>
        <div class='episodeImage' :class='{active: current == 2}'>
            <img src='@/assets/episode3_locked.png'>
        </div>
        <div class='episodeImage' :class='{active: current == 3}'>
            <img src='@/assets/episode4_locked.png'>
        </div>
        <div class='episodeImage' :class='{active: current == 4}'>
            <img src='@/assets/episode5_locked.png'>
        </div>
        <div class='episodeImage' :class='{active: current == 5}'>
            <img src='@/assets/episode6_locked.png'>
        </div>
        <div class='episodeImage' :class='{active: current == 6}'>
            <img src='@/assets/episode7_locked.png'>
        </div>
    </div>
    <div v-if:='extended' class='extendedEpisodeImage'>
        <img v-if='current < 1 && episode1' src='@/assets/episode1_unlocked.png'>
        <img v-if='current < 1 && !episode1' src='@/assets/episode1_locked.png'>
        <img v-if='current == 1' src='@/assets/episode2_locked.png'>
        <img v-if='current == 2' src='@/assets/episode3_locked.png'>
        <img v-if='current == 3' src='@/assets/episode4_locked.png'>
        <img v-if='current == 4' src='@/assets/episode5_locked.png'>
        <img v-if='current == 5' src='@/assets/episode6_locked.png'>
        <img v-if='current == 6' src='@/assets/episode7_locked.png'>
    </div>
    <div class='episodeSlider' :class='{extend: extended}'>
        <span :class='{hidden:current < 1}' @click='moveRight'>&#12296;</span>
        <h1 v-if:='current < 1'> 첫번째 에피소드 : 반복되는 꿈 </h1>
        <h1 v-if:='current == 1'> 두번째 에피소드 : ?????? </h1>
        <h1 v-if:='current == 2'> 세번째 에피소드 : ?????? </h1>
        <h1 v-if:='current == 3'> 네번째 에피소드 : ?????? </h1>
        <h1 v-if:='current == 4'> 다섯번째 에피소드 : ????? </h1>
        <h1 v-if:='current == 5'> 여섯번째 에피소드 : ????? </h1>
        <h1 v-if:='current == 6'> 일곱번째 에피소드 : ????? </h1>
        <span :class='{hidden:current == 6}' @click='moveLeft'>&#12297;</span>
    </div>
</section>
<section class='description' :class='{extend:extended}' @click='toggleExtension'>
    <div v-if='current < 1' class='descriptionContent'>
        <div id='grabBar'></div>
        <p>
            "어느 날부터<br/>
            같은 꿈을 꾸고 있는 당신<br/>
            오늘도 당신은 익숙하지만<br/>
            낯선 장소에서 눈을 떴다..."
        </p>
        <button v-if='!episode1' id='start' @click='unlockEpisode1'>&#12297; 시작하기</button>
        <button v-if='episode1' id='start' @click='startEpisode1'>&#12297; 시작하기</button>
        <button id='library'>&#12297; 꿈도서관</button>
    </div>
    <div v-if='current > 0' class='descriptionContent'>
        <div id='grabBar'></div>
        <p>
            이전 스테이지 완료 후<br/>
            해금할 수 있습니다.
        </p>
        <button id='start' class='inactive'>&#12297; 시작하기</button>
        <button id='library'>&#12297; 꿈도서관</button>
    </div>
</section>
<NavBar :home='true'/>
</section>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import HeaderBar from '@/components/HeaderBar.vue'
import state from '@/main.js'
import { useRouter } from 'vue-router'

export default {
  name: 'HomeView',
  components: {
    NavBar, HeaderBar
  },
  setup () {
    const router = useRouter()
    const toEpisode1 = () => {
      router.push('/episode')
    }
    return {
      toEpisode1
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
    moveLeft () {
      const slider = document.querySelector('.episodeImageSlider')
      let offset
      if (this.current < 1) {
        this.current = 1
        offset = 100 + 151 - 32
        slider.style.left = `calc(50vw - ${offset}px)`
      } else if (this.current < 6) {
        this.current += 1
        offset = 100 + (151 - 32) * this.current
        slider.style.left = `calc(50vw - ${offset}px)`
      }
    },
    moveRight () {
      const slider = document.querySelector('.episodeImageSlider')
      if (this.current > 0) {
        this.current -= 1
        const offset = 100 + (151 - 32) * this.current
        slider.style.left = `calc(50vw - ${offset}px)`
      }
    },
    resetSlider () {
      const slider = document.querySelector('.episodeImageSlider')
      if (slider) {
        const offset = 100 + (151 - 32) * this.current
        slider.style.left = `calc(50vw - ${offset}px)`
      }
    },
    toggleExtension () {
      const chapterInfo = document.querySelector('.main')
      chapterInfo.style.opacity = 0
      setTimeout(() => {
        this.extended = !this.extended
        chapterInfo.style.opacity = 1
        setTimeout(() => {
          if (!this.extended && this.current !== -1) {
            this.resetSlider()
          }
        }, 0)
      }, 500)
    },
    unlockEpisode1 () {
      this.episode1 = true
      state.state.episode1 = true
      state.state.decrementDreamKey()
    },
    startEpisode1 () {
      this.toEpisode1()
    }
  }
}
</script>

<style lang="css" scoped>
    .container {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    section .main {
        width: 100%;
        height: 100%;
        text-align: center;
        z-index: 0;
        overflow: hidden;
        color: white;
        transition: all 1s ease-in-out;
    }

    .story {
        margin-top: 10%;
        font-size: 0.75rem;
    }

    .storyName {
        margin-top: 4%;
        font-size: 1.5rem;
        letter-spacing: 0.5rem;
    }

    .chapterInfo {
        transition: all 0.5s ease-in-out;
        margin-top: 8%;
    }

    div .episodeImageSlider {
        width: 300%;
        height: 33%;
        transition: left 1s ease;
        left: calc(50vw - 100px);
        padding: 5% 0;
        position: relative;
    }

    div .episodeImage {
        transition: all 1s ease;
        position: relative;
        width: 151px;
        height: 151px;
        border-radius: 75px;
        border: none;
        background-color: transparent;
        float: left;
        margin-right: -32px;
        top: calc(200px * 0.5 - 151px * 0.5);
        overflow: hidden;
    }

    div .extendedEpisodeImage {
        margin: 1rem 0;
    }

    div .episodeImage.active {
        z-index: 100;
        width: 200px;
        height: 200px;
        border-radius: 100px;
        top: 0;
    }

    .episodeImage img {
        transition: all ease-in-out 3s;
    }
    .episodeImage.active img {
        transition: all ease-in-out 3s;
        width: 200px;
        height: 200px;
    }

    div .episodeImage:has(~ .active) {
        z-index: 50;
    }

    div .episodeImage.active + .episodeImage {
        z-index: 50;
    }

    div .episodeImage.active + .episodeImage + .episodeImage {
        z-index: 25;
    }

    div .episodeImage.active + .episodeImage + .episodeImage + .episodeImage {
        z-index: 15;
    }

    div .episodeSlider {
        margin-top: 0.5%;
        display: flex;
        justify-content: center;
        font-size: 0.75rem;
    }

    div .episodeSlider span {
        margin: 0.15rem 0.25rem;
        font-weight: 900;
    }

    div .episodeSlider h1 {
        font-weight: normal;
    }

    span.hidden {
        opacity: 0;
    }

    section .description {
        height: 40%;
        position: relative;
        top: -21%;
        z-index: 50;
        background-color: rgba(170, 176, 190, 0.6);
        border-top-left-radius: 12%;
        border-top-right-radius: 12%;
        padding: 1rem;
        transition: top 0.5s ease-in-out;
    }

    section .description.extend {
        top: -55%;
    }

    div .descriptionContent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    div #grabBar {
        width: 31px;
        height: 0px;
        border: 0.12rem solid #485778;
        border-radius: 0.06rem;
    }

    div.descriptionContent > * {
        margin-bottom: 1.5rem;
    }

    .descriptionContent p {
        padding: 0 10%;
        text-align: center;
    }

    .descriptionContent button {
        background-color: transparent;
        border: 0;
        color: white;
    }

    .descriptionContent button.inactive {
        color: #828282;
    }
</style>
