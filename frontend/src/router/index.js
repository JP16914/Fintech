import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'

import Careers from '../views/Careers.vue'
import Programs from '../views/Programs.vue'
import Skills from '../views/Skills.vue'
import Interviews from '../views/Interviews.vue'
import Resources from '../views/Resources.vue'
import Blog from '../views/Blog.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/chuong-trinh', name: 'Programs', component: Programs },
  { path: '/nghe-nghiep', name: 'Careers', component: Careers },
  { path: '/ky-nang', name: 'Skills', component: Skills },
  { path: '/phong-van', name: 'Interviews', component: Interviews },
  { path: '/tai-nguyen', name: 'Resources', component: Resources },
  { path: '/blog', name: 'Blog', component: Blog },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router