<template>
<section class='header'>
    <div class='left'>
        <img alt="profile" src='@/assets/profile.png'>
    </div>
    <div class='right'>
        <div class='status'>
            <img alt='*' src='@/assets/dream_key.png'>
            <span>{{ state.dreamKey }}</span>
        </div>
        <div class='status'>
            <img alt='*' src='@/assets/will_power.png'>
            <span>{{ state.willPower }}</span>
        </div>
    </div>
</section>
</template>

<script>
import state from '@/main.js'
export default {
  name: 'HeaderBar',
  data () {
    return state
  }
}
</script>

<style lang="css" scoped>
    .header {
        background-color: transparent;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 7%;
        margin: 0 0.25rem;
        padding: 0.25rem;
        z-index: 100;
    }

    div .left {
        width: 50%;
        padding-top: 0.75rem;
    }

    div .right {
        width: 77px;
        padding-top: 0.2rem;
        display: flex;
        justify-content: right;
        flex-direction: column;
    }

    div .status {
        display: flex;
        justify-content: space-between;
        width: 77px;
        height: 22px;
        border-radius: 11px;
        background-color: #FFF;
        left: 50%;
        margin-top: 0.25rem;
        padding: 0.125rem 0.5rem;
        font-size: 0.75rem;
    }

    div .status:first-child {
        margin-top: 0.4rem;
    }

</style>
