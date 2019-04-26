import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index.vue'
import Grad from '../pageDetail/grad.vue'
import DataBase from '../pageDetail/database.vue'
import Loading from '../pageDetail/loading.vue'
import RankingList from '../pageDetail/rankingList.vue'
// import Index from '@/components/Index'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Index/Grad'
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index,
      children: [{
        path: 'Grad',
        name: '首页',
        component: Grad,
      },{
        path:'DataBase',
        name:'数据库',
        component:DataBase
      },{
        path:'Loading',
        name:'登陆',
        component:Loading
      },{
        path:'RankingList',
        name:'排行榜',
        component:RankingList
      }

      ]
    }
  ]
})
