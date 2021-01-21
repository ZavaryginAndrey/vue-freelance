<template>
  <div class="card" v-if="isExist">
    <h2>{{ task.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :status="task.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ task.date }}</p>
    <p><strong>Описание</strong>: {{ task.description }}</p>
    <div>
      <button class="btn" @click="updateTaskStatus({id, status: 'Выполняется'})">Взять в работу</button>
      <button class="btn primary" @click="updateTaskStatus({id, status: 'Завершен'})">Завершить</button>
      <button class="btn danger" @click="updateTaskStatus({id, status: 'Отменен'})">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ id }}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import {useStore, mapActions} from 'vuex'
import {useRoute} from 'vue-router'
import {ref, reactive, computed} from 'vue'

export default {
  components: {AppStatus},
  setup() {
    const store = useStore()
    const route = useRoute()

    const id = ref(route.params.taskId)
    const task = reactive(store.getters.task(id.value))

    return {
      id,
      task,
      isExist: computed(() => task),
      ...mapActions(['updateTaskStatus'])
    }
  }
}
</script>

<style scoped>

</style>