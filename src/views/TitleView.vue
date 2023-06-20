<template>
  <section class='container' @click='playSound'>
    <div class="logoContainer">
      <h1>DREAM</h1>
      <img alt="Compass Logo" src='@/assets/logo.png'>
      <h1>COMPASS</h1>
      <div class="start">
        <h3>-TAB TO START-</h3>
      </div>
    </div>
  </section>
</template>

<script>
import { useRouter } from 'vue-router'

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
      const audio = new Audio(`${process.env.BASE_URL}background.mp3`)
      audio.play()
      this.toHome()
    }
  }
}
</script>

<style lang="css" scoped>
  .container {
    width: 100vw;
    height: 100vh;
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
