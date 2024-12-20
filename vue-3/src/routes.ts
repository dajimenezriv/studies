import { createRouter, createWebHashHistory } from 'vue-router'
import PageViewer from './components/PageViewer.vue'
import CreatePage from './components/CreatePage.vue'
import AllPages from './components/AllPages.vue'
import PagesList from './components/PagesList.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/:index?', component: PageViewer, props: true },
    {
      path: '/pages',
      component: AllPages,
      children: [
        { path: '', component: PagesList },
        { path: 'create', component: CreatePage },
      ],
    },
  ],
})
