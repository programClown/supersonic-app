<template>
  <title-bar />
  <div class="main">
    <ElConfigProvider :locale="elementLocale">
      <RouterView />
    </ElConfigProvider>
  </div>
</template>

<script setup lang="ts">
import TitleBar from '@/components/title-bar/title-bar.vue'
import { elementLocale } from '@/locales'
import { useElementPlusDesignTokens } from '@vben/effects/hooks'
import { ElConfigProvider } from 'element-plus'

defineOptions({ name: 'App' })

useElementPlusDesignTokens()
</script>

<style scoped>
.main {
  padding-top: 30px;
  box-sizing: border-box;
}
</style>
