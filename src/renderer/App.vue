<template>
    <ElConfigProvider :locale="elementLocale">
      <RouterView />
    </ElConfigProvider>
</template>

<script setup lang="ts">
import { elementLocale } from '@/locales'
import { useElementPlusDesignTokens } from '@vben/effects/hooks'
import { ElConfigProvider } from 'element-plus'

defineOptions({ name: 'App' })

useElementPlusDesignTokens()
</script>
