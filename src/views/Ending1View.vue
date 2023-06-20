<template>
  <section class='container'>
    <img v-if='uiActive' src='@/assets/ui_visible.png' id='ui' alt='uiVisible' @click='toggle'>
    <img v-if='!uiActive' src='@/assets/ui_hidden.png' id='ui' alt='uiHidden' @click='toggle'>
    <div v-if='uiActive' class='endingScript'>
        <h3>에피소드 엔딩 - 1</h3>
        <h3>[깨지 못한 꿈]</h3>
        <p>"시끄러운 알람 소리에 잠에서 깬 당신.<br/> 오늘도 똑같은 하루의 시작입니다. 어젯밤 무언가 특별한 꿈을 꾼 것 같지만... 기억이 나질 않습니다."</p>
        <button id='next' @click='toThanks'>&#12297; 다음으로</button>
    </div>
  </section>
</template>

<script>
import { useRouter } from 'vue-router'

export default {

  name: 'Ending1View',

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
        background-image: url('@/assets/ep_ending1.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    #ui {
        position: fixed;
        top: 0;
        right: 0;
        margin: 0.75rem;
    }

    .endingScript {
        background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.85));
        position: fixed;
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
