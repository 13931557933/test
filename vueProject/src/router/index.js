import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/main/main_2'
// import Main from '@/components/main/main'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path:'/',
      name:'HelloWorld',
      component:HelloWorld
    }
  ]
})

