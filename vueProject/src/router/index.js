import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/main/index'
import Main from '@/components/main/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/main',
      name:'main',
      component:Main
    }
  ]
})
// export default {
//   name: "HelloWorld",
//   path: "/",
//   component: HelloWorld,
//   // redirect:{
//   //   name:'HelloWorld'
//   // },
//   subRoutes: [
//     main,
//   ]
// };
