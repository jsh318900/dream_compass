<template>
<section class='container'>
</section>
</template>

<script>
import state from '@/main.js'
export default {

  name: 'DiaryView',

  data () {
    return {
      state
    }
  }
}
</script>

<style lang="css" scoped>
  .container {
    background-color: skyblue;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
</style>
