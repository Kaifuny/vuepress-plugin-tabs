import Tabs from './components/Tabs.vue'
import Tab from './components/Tab.vue'

export default function (ctx) {
  const { Vue } = ctx
  Vue.component('Tabs', Tabs)
  Vue.component('Tab', Tab)
}