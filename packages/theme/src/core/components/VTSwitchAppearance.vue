<script lang="ts" setup>
import { useConfig } from '../../vitepress/composables/config'
import VTSwitch from './VTSwitch.vue'
import SIconSun from './icons/SIconSun.vue'
import SIconMoon from './icons/SIconMoon.vue'

const { config } = useConfig()

const storageKey = 'vitepress-theme-appearance'
const toggle = typeof localStorage !== 'undefined' ? useAppearance() : () => { }

// TODO
function useAppearance() {
  let userPreference = localStorage.getItem(storageKey) || 'auto'
  const query = window.matchMedia('(prefers-color-scheme: dark)')
  const classList = document.documentElement.classList
  const preference = userPreference === 'auto' ? query.matches : userPreference
  let isDark = preference === 'dark'
  const setClass = (dark: boolean) => classList[dark ? 'add' : 'remove']('dark')

  query.onchange = (e) => {
    if (userPreference === 'auto')
      setClass((isDark = e.matches))
  }

  const toggle = () => {
    setClass((isDark = !isDark))
    const a = query.matches ? 'auto' : 'dark'
    const b = query.matches ? 'light' : 'auto'
    localStorage.setItem(storageKey, (userPreference = isDark ? a : b))
  }

  return toggle
}
</script>

<template>
  <VTSwitch class="vt-switch-appearance" :aria-label="config.i18n?.ariaDarkMode ?? 'Toggle dark mode'" @click="toggle">
    <SIconSun class="vt-switch-appearance-sun" />
    <SIconMoon class="vt-switch-appearance-moon" />
  </VTSwitch>
</template>
