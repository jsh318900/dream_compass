<template>
  <section class='container'>
    <img v-if='uiActive' src='@/assets/ui_visible.png' id='ui' alt='uiVisible' @click='toggle'>
    <img v-if='!uiActive' src='@/assets/ui_hidden.png' id='ui' alt='uiHidden' @click='toggle'>
    <div v-if='uiActive' class='endingScript'>
        <h3>에피소드 엔딩 - 2</h3>
        <h3>[반복의 끝, 무언가의 시작]</h3>
        <p>
          "오늘 아침은 어찌된 일인지 알람이 울리기도 전에 눈이 떠졌습니다.<br/>
          당신은 평소와 달리 몸과 머리가 가벼운 것을 느낍니다.<br/>
          어젯밤 무언가 좋은 꿈을 꾼 것 같습니다."
        </p>
        <button id='next' @click='toThanks'>&#12297; 다음으로</button>
    </div>
  </section>
</template>

<script>
import { useRouter } from 'vue-router'

export default {

  name: 'Ending2View',

  data () {
    return {
      uiActive: true
    }
  },
  setup () {
    const router = useRouter()
    const toThanks = () => {
      router.push('/thanks')
    }
    return {
      toThanks
    }
  },
  methods: {
    toggle () {
      this.uiActive = !this.uiActive
    }
  }
}
</script>

<style lang="css" scoped>
    .container {
        width: 100%;
        height: 100vh;
        background-image: url('@/assets/ep_ending2.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    #ui {
        position: absolute;
        top: 0;
        right: 0;
        margin: 0.75rem;
    }

    .endingScript {
        background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.85));
        position: absolute;
        bottom: 0;
        width: 100vw;
        height: 37.5%;
        padding: 1rem;
        color: white;
        backdrop-filter: blur(10px);
    }

    .endingScript h3 {
        margin: 1rem 0;
        font-style: normal;
        font-weight: 800;
        font-size: 0.8rem;
        line-height: 125%;
        letter-spacing: 0.05rem;
    }

    .endingScript p {
        margin-bottom: 0.5rem;
        font-style: normal;
        font-weight: 400;
        font-size: 0.75rem;
        text-align: justify;
        letter-spacing: 0.13rem;
        line-height: 150%;
    }

    button#next {
        border: none;
        background-color: transparent;
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 1rem;
        color: white;
        font-style: normal;
        font-weight: 800;
        font-size: 0.8rem;
        letter-spacing: 0.05rem;
    }
</style>
