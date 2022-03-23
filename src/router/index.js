import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () =>import("../layout/index.vue"),
      children: [
        {
          name: "home",
          path: "/home",
          component: () => import("../views/home.vue"),
          meta: { title: '首页'}
        },
        {
          name: "product",
          path: "/product",
          component: () => import("../views/product.vue"),
          meta: { title: '商品'}
        },
      ],
    },
    {
      path: "/login",
      name: "LoginForm",
      meta: { title: '平台登录'},
      component: () => import("../views/login.vue"),
    },
  ],
});

router.afterEach((to, from, next)=>{
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()
  window.scrollTo(0,0)
})

export default router;
