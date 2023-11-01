<template>
<section class="footer">
  <button id="navHelp">
    <img src='@/assets/footer/help.png' alt="help">
    <span>도우미</span>
  </button>
  <button id="navHome" @click='toHome'>
    <img src='@/assets/footer/home.png' alt="home">
    <span>HOME</span>
  </button>
  <button id="navSetting">
    <img src='@/assets/footer/settings.png' alt='settings'>
    <span>설정</span>
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
    const toDiary = () => {
      router.push('/diary')
    }
    return {
      toHome, toDiary
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
      width: 390px;
      height: 71px;
      text-align: center;
      display: flex;
      align-items: center;
      background-color: #CDABA1;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      align-self: end;
      justify-content: space-evenly;
      margin-top: auto;
  }
  .footer img {
    margin: auto;
  }

  .footer button {
      display: flex;
      flex-direction: column;
      float: left;
      width: 22%;
      border: 0;
      background-color: transparent;
  }

  .footer button span {
    font-weight: 700;
    font-size: 12px;
    line-height: 11.88px;
    letter-spacing: 5%;
    padding-top: 6px;
    margin: auto;
    color: #F6F3EA;
  }

  img {
    background-color: transparent;
  }

</style>
