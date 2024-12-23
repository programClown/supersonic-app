import { createApp, watchEffect } from 'vue'

import { registerAccessDirective } from '@vben/effects/access'
import { preferences } from '@vben/preferences'
import { initStores } from '@vben/stores'
import '@vben/@core/base/design'
import './assets/index.css'

import { useTitle } from '@vueuse/core'
import { ElLoading } from 'element-plus'

import { $t, setupI18n } from '@/locales'

import { initComponentAdapter } from '@/adpater/component'
import App from './App.vue'
import { router } from './router'
import { errorHandler } from './error'

async function bootstrap(namespace: string) {
  // 初始化组件适配器
  await initComponentAdapter()
  const app = createApp(App)

  // 注册Element Plus提供的v-loading指令
  app.directive('loading', ElLoading.directive)

  // 国际化 i18n 配置
  await setupI18n(app)

  // 配置 pinia-tore
  await initStores(app, { namespace })

  // 安装权限指令
  registerAccessDirective(app)

  // 配置路由及路由守卫
  app.use(router)

  // 动态更新标题
  watchEffect(() => {
    if (preferences.app.dynamicTitle) {
      const routeTitle = router.currentRoute.value.meta?.title
      const pageTitle = (routeTitle ? `${$t(routeTitle)} - ` : '') + preferences.app.name
      useTitle(pageTitle)
    }
  })

  errorHandler(app)
  app.mount('#app')
}

export { bootstrap }
