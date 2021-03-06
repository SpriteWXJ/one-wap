import Vue from 'vue'
import Router from 'vue-router'
import photo from '@/components/photo'
import msg from '@/components/msg'
import music from '@/components/music'
import mov from '@/components/mov'
import photoMsg from '@/components/photo/photoMsg'
import photoQuestion from '@/components/photo/photoQuestion'
import photoMov from '@/components/photo/photoMov'
import photoMusic from '@/components/photo/photoMusic'
import about from '@/components/about'
import photoSerial from '@/components/photo/photoSerial'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'msg',
      component: msg
    },
    {
      path: '/photo',
      name: 'photo',
      component: photo
    },
    {
      path: '/msg',
      name: 'msg',
      component: msg
    },
    {
      path: '/music',
      name: 'music',
      component: music
    },
    {
      path: '/mov',
      name: 'mov',
      component: mov
    },
    {
      path: '/photo/photoMsg/:id',
      name: 'photoMsg',
      component: photoMsg
    },
    {
      path: '/photo/photoQuestion/:id',
      name: 'photoQuestion',
      component: photoQuestion
    },
    {
      path: '/photo/photoMov/:id',
      name: 'photoMov',
      component: photoMov
    },
    {
      path: '/photo/photoMusic/:id',
      name: 'photoMusic',
      component: photoMusic
    },
    {
      path: '/photo/photoSerial/:id',
      name: 'photoSerial',
      component: photoSerial
    },      
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
