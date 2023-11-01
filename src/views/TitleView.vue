<template>
  <section class='container' @click='playSound'>

  </section>
</template>

<script>
import { useRouter } from 'vue-router'
import state from '@/main.js'

export default {
  name: 'TitleView',
  setup () {
    const router = useRouter()
    const toHome = () => {
      router.push('/home')
    }
    return {
      toHome
    }
  },
  methods: {
    playSound () {
      if (state.audio === undefined) {
        state.audio = new Audio(`${process.env.BASE_URL}background.mp3`)
        state.audio.play()
      } else {
        state.audio.pause()
        state.audio.currentTime = 0
        state.audio.play()
      }

      this.toHome()
    }
  }
}
</script>

<style lang="css" scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-image: url('@/assets/start_screen.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .container {
    width: 100%;
    height: 100%;
  }

  .logoContainer {
    left: 50%;
    top: 25%;
    position: sticky;
    text-align: center;
  }

  .logoContainer h1 {
    font-size: 1.75rem;
    letter-spacing: 0.5rem;
    color: white;
  }

  .logoContainer img {
    margin: 1rem 0;
    width: 135px;
    height: 135px;
  }

  .start h3 {
    margin-top: 20%;
    font-size: 1rem;
  }
</style>
