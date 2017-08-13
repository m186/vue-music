import Vue from 'vue'
import Router from 'vue-router'
import Rank from 'components/rank/rank'
import Singer from 'components/singer/singer'
import Search from 'components/search/search'
import Recommend from 'components/recommend/recommend'
import SingerDetail from 'components/singerDetail/singerDetail'

Vue.use(Router)

export default new Router({
  routes: [{ // 默认路由展示
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/recommend',
      component: Recommend
    }
  ]
})
