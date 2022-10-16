<script lang="ts" setup>
import { useConfig } from '../composables/config'
import VPNavBarMenuLink from './VPNavBarMenuLink.vue'
import VPNavBarMenuGroup from './VPNavBarMenuGroup.vue'

const { config } = useConfig()
</script>

<template>
  <nav
    v-if="config.nav"
    aria-labelledby="main-nav-aria-label"
    class="SNavBarMenu"
  >
    <span id="main-nav-aria-label" class="visually-hidden">{{
      config.i18n?.ariaMainNav ?? 'Main Navigation'
    }}</span>
    <template v-for="item in config.nav" :key="item.link">
      <VPNavBarMenuLink v-if="'link' in item" :item="item" />
      <VPNavBarMenuGroup v-else :item="item" />
    </template>
  </nav>
</template>

<style scoped>
.SNavBarMenu {
  display: none;
}

@media (min-width: 768px) {
  .SNavBarMenu {
    display: flex;
  }
}
</style>
