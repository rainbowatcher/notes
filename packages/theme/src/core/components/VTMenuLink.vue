<script lang="ts" setup>
import type { MenuItemWithLink } from '../types/menu'
import VTLink from './VTLink.vue'

defineProps<{ item: MenuItemWithLink }>()
</script>

<template>
  <VTLink class="vt-menu-link" :href="item.link">
    {{ item.text }}
  </VTLink>
</template>
