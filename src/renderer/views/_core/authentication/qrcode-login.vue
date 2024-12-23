<script lang="ts" setup>
import { AuthenticationQrCodeLogin } from '@vben/effects/common-ui'
import { LOGIN_PATH } from '@vben/constants'

defineOptions({ name: 'QrCodeLogin' })
</script>

<template>
  <AuthenticationQrCodeLogin :login-path="LOGIN_PATH" />
</template>
