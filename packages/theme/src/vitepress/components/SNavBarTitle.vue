<script lang="ts" setup>
import { useData } from 'vitepress'

const fm = useData()
</script>

<template>
  <a class="VPNavBarTitle" href="/">
    {{ fm.site.value.title }}
  </a>
</template>

<style scoped>
.VPNavBarTitle {
  display: flex;
  align-items: center;
  padding-top: 1px;
  height: var(--vt-nav-height);
  transition: opacity 0.25s;
  font-size: 16px;
  font-weight: 500;
}

.VPNavBarTitle:hover {
  opacity: 0.8;
}

/* .logo {
  position: relative;
}

.logo+.text {
  padding-left: 8px;
}

.text {
  font-size: 16px;
  font-weight: 500;
} */
</style>
