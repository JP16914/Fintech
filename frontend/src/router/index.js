import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'

import Careers from '../views/Careers.vue'
import Programs from '../views/Programs.vue'
import Skills from '../views/Skills.vue'
import Interviews from '../views/Interviews.vue'
import Resources from '../views/Resources.vue'
import Blog from '../views/Blog.vue'
import Login from '../views/LogIn.vue'
import Register from '../views/Register.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/chuong-trinh', name: 'Programs', component: Programs },
  { path: '/nghe-nghiep', name: 'Careers', component: Careers },
  { path: '/ky-nang', name: 'Skills', component: Skills },
  { path: '/phong-van', name: 'Interviews', component: Interviews },
  { path: '/tai-nguyen', name: 'Resources', component: Resources },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

// Logic bảo vệ Route (Ví dụ trang Programs cần login)
router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/', '/nghe-nghiep', '/blog'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('token');

  if (authRequired && !loggedIn) {
    // Lưu trang muốn đến vào query param: /login?redirect=/chuong-trinh
    return next({ 
      path: '/login', 
      query: { redirect: to.fullPath } 
    });
  }

  next();
});
export default router