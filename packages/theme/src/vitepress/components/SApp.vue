<script lang="ts" setup>
import { onMounted, onUnmounted, provide, watchEffect } from 'vue'
import { VTBackdrop } from '../../core'
import { useSidebar } from '../composables/sidebar'
import usePageOffset from '../composables/usePageOffset'
import SNav from './SNav.vue'
import SPageNav from './SPageNav.vue'
// import VPSkipLink from './VPSkipLink.vue'
import VPAnnouncer from './VPAnnouncer.vue'
import VPSidebar from './VPSidebar.vue'
import VPContent from './VPContent.vue'

const {
  isOpen: isSidebarOpen,
  open: openSidebar,
  close: closeSidebar,
} = useSidebar()

usePageOffset('sika-scroll-offset')

// A11y: cache the element that opened the Sidebar (the menu button)
//   then focus that button again when Menu is closed with Escape key
let triggerElement: HTMLButtonElement | undefined
watchEffect(() => {
  triggerElement = isSidebarOpen.value
    ? (document.activeElement as HTMLButtonElement)
    : undefined
})

const onEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isSidebarOpen.value) {
    closeSidebar()
    triggerElement?.focus()
  }
}

onMounted(() => {
  window.addEventListener('keyup', onEscape)
})
onUnmounted(() => {
  window.removeEventListener('keyup', onEscape)
})

provide('close-sidebar', closeSidebar)

// onUpdated(() => console.log(isSidebarOpen.value))
</script>

<template>
  <div class="SApp">
    <!-- <VPSkipLink /> -->
    <VTBackdrop class="backdrop" :show="isSidebarOpen" @click="closeSidebar" />
    <slot name="banner" />
    <SNav>
      <template #navbar-title>
        <slot name="navbar-title" />
      </template>
    </SNav>
    <SPageNav :open="isSidebarOpen" @open-menu="openSidebar" />
    <VPSidebar :open="isSidebarOpen">
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </VPSidebar>
    <VPContent>
      <template #content-top>
        <slot name="content-top" />
      </template>
      <template #content-bottom>
        <slot name="content-bottom" />
      </template>
      <template #aside-top>
        <slot name="aside-top" />
      </template>
      <template #aside-mid>
        <slot name="aside-mid" />
      </template>
      <template #aside-bottom>
        <slot name="aside-bottom" />
      </template>
      <template #footer-before>
        <slot name="footer-before" />
      </template>
      <template #footer-after>
        <slot name="footer-after" />
      </template>
    </VPContent>
    <VPAnnouncer />
  </div>
</template>

<style scoped>
.SApp {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--vt-c-bg);
  /* background-image: url(/Users/rainb/PrivateSpace/Notes/notes/assets/language/javascript/function-scope.png); */
  transition: background-color 0.5s;
  padding-top: var(--vt-banner-height);
}

.backdrop {
  z-index: var(--vp-z-index-backdrop);
}
</style>
