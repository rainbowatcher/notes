import './styles/index.css'
import type { Theme } from 'vitepress'
import VPApp from './components/SApp.vue'
import VPNotFound from './components/VPNotFound.vue'
import { withConfigProvider } from './composables/config'

const STheme: Theme = {
  Layout: withConfigProvider(VPApp),
  NotFound: VPNotFound,
}

export { STheme }

export type { Config } from './config'
