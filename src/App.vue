<template>
  <router-view v-slot="{Component}">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition>
  </router-view>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Bigshot+One&family=Nanum+Gothic:wght@400;800&family=Nanum+Myeongjo&display=swap');

#app {
  font-family: 'Nanum Myeongjo', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 390px;
  height: 844px;
  margin: 0;
  box-sizing: border-box;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter-from,
.slide-leave-to {
  opacity: 0.25;
}

</style>
