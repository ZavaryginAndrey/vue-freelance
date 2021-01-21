<template>
  <form class="card" @submit.prevent="create">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model.trim="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model.trim="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model.trim="description"></textarea>
    </div>

    <button class="btn primary" type="submit" :disabled="!isValid">Создать</button>
  </form>
</template>

<script>
import {ref, computed} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export default {
  setup() {
    const title = ref('')
    const date = ref('')
    const description = ref('')

    const store = useStore()
    const router = useRouter()

    return {
      title,
      date,
      description,
      create() {
        store.dispatch('newTask', {title, date, description})
        router.push('/')
      },
      isValid: computed(() => title.value && date.value && description.value)
    }
  }
}
</script>