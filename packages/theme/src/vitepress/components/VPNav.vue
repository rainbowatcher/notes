<script setup lang="ts">
import { onMounted, provide, ref, watchEffect } from 'vue'
import { useScroll } from '@vueuse/core'
import { useNav } from '../composables/nav'
import SNavBar from './SNavBar.vue'
import VPNavScreen from './VPNavScreen.vue'

const { isScreenOpen, closeScreen, toggleScreen } = useNav()
const { directions, arrivedState } = useScroll(document)

provide('close-screen', closeScreen)

const isHidden = ref(false)
const isVisible = ref(true)
const isTransparent = ref(true)

onMounted(() => {
  const handleScroll = () => {
    const { top: scrollUp, bottom: scrollDown } = directions
    if (scrollUp) {
      if (arrivedState.top) {
        isTransparent.value = true
      }
      else {
        isVisible.value = true
        isHidden.value = false
      }
    }
    else if (scrollDown) {
      isTransparent.value = false
      isVisible.value = false
      isHidden.value = true
    }
  }

  watchEffect(handleScroll)
})
</script>

<template>
  <header
    class="VPNav" :class="{
      hide: isHidden,
      visible: isVisible,
      transparent: isTransparent,
    }"
  >
    <SNavBar :is-screen-open="isScreenOpen" @toggle-screen="toggleScreen">
      <template #navbar-title>
        <slot name="navbar-title" />
      </template>
    </SNavBar>
    <VPNavScreen :open="isScreenOpen" />
  </header>
</template>

<style lang="scss" scoped>
@import '../styles/_mixins.scss';
@import '../styles/variables';

.VPNav {
  // position: relative;
  // top: 0;
  // left: 0;
  z-index: var(--vp-z-index-nav);
  width: 100%;
  pointer-events: none;
}

@media (min-width: 960px) {
  .VPNav {
    position: fixed;
    .transparant {
      background: transparent;
    }
  }

  .VPNav {
    -webkit-backdrop-filter: saturate(50%) blur(8px);
    backdrop-filter: saturate(50%) blur(8px);
    background: rgba(255, 255, 255, 0.7);
  }

  .dark .VPNav {
    background: rgba(36, 36, 36, 0.7);
  }

  @supports not (backdrop-filter: saturate(50%) blur(8px)) {
    .VPNav {
      background: rgba(255, 255, 255, 0.95);
    }

    .dark .VPNav {
      background: rgba(36, 36, 36, 0.95);
    }
  }
}

@media (min-width: 960px) {
  .VPNav {
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
