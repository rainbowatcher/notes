<script setup lang="ts">
// import { onMounted, provide, ref, watchEffect } from 'vue'
// import { useScroll } from '@vueuse/core'
// import { useRouter } from 'vitepress'
import { provide } from 'vue'
import { useNav } from '../composables/nav'
import SNavBar from './SNavBar.vue'
import VPNavScreen from './VPNavScreen.vue'

// const router = useRouter()
const { isScreenOpen, closeScreen, toggleScreen } = useNav()
// const { closeScreen } = useNav()

provide('close-screen', closeScreen)

// const isHidden = ref(false)
// const isVisible = ref(true)
// const isArrivedTop = ref(true)

// onMounted(() => {
//   const { y, directions, arrivedState } = useScroll(document)
//   router.onAfterRouteChanged = () => { isVisible.value = true }

//   const handleScroll = () => {
//     const { top: scrollUp, bottom: scrollDown } = directions
//     // isArrivedTop.value = arrivedState.top
//     if (scrollUp) {
//       if (arrivedState.top) {
//         isVisible.value = true
//       }
//       else {
//         isVisible.value = true
//         isHidden.value = false
//       }
//     }
//     else if (scrollDown && y.value > 55) {
//       isVisible.value = false
//       isHidden.value = true
//     }
//   }

//   watchEffect(handleScroll)
// })
</script>

<template>
  <!-- <header
    class="SNav" :class="{
      hide: isHidden,
      visible: isVisible,
    }"
  > -->
  <header class="SNav">
    <SNavBar :is-screen-open="isScreenOpen" @toggle-screen="toggleScreen" />
    <VPNavScreen :open="isScreenOpen" />
  </header>
</template>

<style lang="scss" scoped>
@import '../styles/_mixins.scss';
@import '../styles/variables';

.SNav {
  z-index: var(--vp-z-index-nav);
  width: 100%;
  pointer-events: auto;
}

@media (min-width: 960px) {
  .SNav {
    position: fixed;
    // background-color: rgba(248, 250, 252, .7);
    // background-image: linear-gradient(90deg, rgba(100, 100, 100, .1) 90%, transparent 90%), linear-gradient(rgba(83, 83, 83, .1) 90%, transparent 90%);
    // background-size: 5px 5px;

    -webkit-backdrop-filter: saturate(50%) blur(8px);
    backdrop-filter: saturate(50%) blur(8px);

    &.transparent {
      background: transparent;
      color: #fff;
    }
  }

  .dark .SNav {
    // background-color: rgb(36, 36, 36, .7);
  }

  @supports not (backdrop-filter: saturate(50%) blur(8px)) {
    .SNav {
      background: rgba(255, 255, 255, 0.95);
    }

    .dark .SNav {
      background: rgba(36, 36, 36, 0.95);
    }
  }
}

@media (min-width: 960px) {
  .SNav {
    &.hide {
      position: fixed;
      top: calc(0rem - var(--navbar-height));
      @include transition(all .3s);
    }

    &.visible {
      position: fixed;
      top: 0rem;
      transition: all 0.3s;
    }
  }
}
</style>
