<template>
  <div class="card">
    <h2 class="card-title">
      {{ task.title }}
      <AppStatus :status="task.status" />
    </h2>
    <p>
      <strong>
        <small>
          {{task.date}}
        </small>
      </strong>
    </p>
    <button class="btn primary" @click.prevent="$router.push(`/task/${id}`)">Посмотреть</button>
  </div>
</template>

<script>
import AppStatus from '../components/AppStatus'

export default {
  props: ['id', 'task'],
  components: {AppStatus}
}
</script>

<style scoped>

</style>