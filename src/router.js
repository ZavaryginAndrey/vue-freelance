import {createRouter, createWebHistory} from 'vue-router'
import Tasks from '@/views/Tasks'
import New from '@/views/New'
import Task from '@/views/Task'
import NoPage from '@/views/NoPage'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: Tasks},
    {path: '/new', component: New},
    {path: '/task/:taskId', component: Task},
    {path: '/:notFound(.*)', component: NoPage}
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})