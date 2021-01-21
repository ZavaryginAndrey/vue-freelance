<template>
  <h1 v-if="false" class="text-white center">Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">Всего активных задач: {{activeCount}}</h3>
    <ul>
      <li v-for="key in Object.keys(tasks)" :key="key">
        <TaskBlock
          :id="key"
          :task="tasks[key]"
        />
      </li>
    </ul>
  </template>
</template>

<script>
import TaskBlock from '../components/TaskBlock'
import {useStore} from 'vuex'
import {computed, reactive} from 'vue'

export default {
  components: {TaskBlock},
  setup() {
    const store = useStore()
    const tasks = reactive(store.getters.tasks)
    const activeCount = computed(() =>  Object.keys(tasks).filter(key => tasks[key].status === 'Активен').length)

    return {
      activeCount,
      tasks
    }
  }
}
</script>
