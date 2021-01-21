<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view />
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'
import Tasks from './views/Tasks'
import {useStore} from 'vuex'

export default {
  components: {
    TheNavbar,
    Tasks
  },
  setup() {
    const store = useStore()
    store.commit('initStore')
  }
}
</script>

<style>

</style>
