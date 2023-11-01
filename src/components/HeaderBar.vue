<template>
<section class='header'>
    <div class='logo'>
        <img src='@/assets/icon.png'>
        <span>Lucid Dreamer</span>
    </div>
    <div class='statusBar'>
        <div class='status'>
            <img alt='*' src='@/assets/dream_key.png'>
            <span>{{ state.dreamKey }}</span>
        </div>
        <div class='status'>
            <img alt='*' src='@/assets/will_power.png'>
            <span>{{ state.willPower }}</span>
        </div>
    </div>
    <div class='hl'>
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
    div .logo {
        display: flex;
        flex-direction: column;
        margin-top: 45px;
        margin-left: auto;
        margin-right: auto;
        width: 92.56px;
        align-items: center;
        height: 48.5px;
    }

    div .logo img {
        width: 37.66px;
        height: 28.37px;
    }

    div .logo span {
        font-family: 'Bigshot One';
        font-weight: 400;
        font-size: 14px;
        line-height: 14.67px;
        letter-spacing: 0.5%;
        text-align: center;
        margin-top: 5.13px;
    }

    div.statusBar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-left: 112px;
        padding-right: 112px;
        margin-top: 16.5px;
    }

    div .status {
        color: #FFF;
        font-family: 'Nanum Gothic';
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 77px;
        height: 22px;
        border-radius: 11px;
        background-color: #CEC1B8;
        left: 50%;
        margin-top: 0.25rem;
        padding: 0 5px;
        font-size: 13px;
    }

    div.status > img {
        width: 10px;
        height: 13px;
    }

    div.hl {
        width: 330px;
        height: 0px;
        border: 0.4px solid #A1969E;
        margin: 16px auto 0 auto;
    }

</style>
