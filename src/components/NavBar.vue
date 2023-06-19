<template>
<section class="footer">
  <button id="navDiary">
    <img v-if='diary' src='@/assets/diary_active.png' alt="diary">
    <img v-if='!diary' src='@/assets/diary_inactive.png' alt='diary'>
  </button>
  <button id="navHome" @click='toHome'>
    <img v-if='home' src='@/assets/home_active.png' alt="home">
    <img v-if='!home' src='@/assets/home_inactive.png' alt='home'>
  </button>
  <button id="navSetting">
    <img v-if='settings' src='@/assets/setting_active.png' alt='settings'>
    <img v-if='!settings' src='@/assets/setting_inactive.png' alt="setting">
  </button>
</section>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'NavBar',
  setup () {
    const router = useRouter()
    const toHome = () => {
      router.push('/home')
    }
    return {
      toHome
    }
  },
  props: {
    diary: Boolean,
    home: Boolean,
    settings: Boolean
  }
}
</script>

<style lang="css" scoped>
  section.footer {
      z-index: 100;
      width: 100vw;
      height: 8%;
      margin: 0 auto;
      text-align: center;
      position: absolute;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #151C36;
  }

  .footer button {
      float: left;
      margin-left: 10%;
      width: 20%;
      border: 0;
      background-color: transparent;
  }

  .footer button:nth-child(3) {
      margin-right: 10%;
  }

  .footer button::after {
      content: "";
      clear: both;
      display: block;
  }

  img {
    background-color: transparent;
  }

</style>
