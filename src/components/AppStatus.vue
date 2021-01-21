<template>
  <span
    :class="{
    badge: true,
    primary: status === 'Активен' || status === 'Завершен',
    danger: status === 'Отменен',
    warning: status === 'Выполняется'
  }"
  >{{ status }}</span>
</template>

<script>
export default {
  props: ['status']
}
</script>

<style scoped>

.badge {
  font-size: 0.8rem;
  border: 1px solid #eee;
  border-radius: 15px;
  padding: 0 .5rem;
}

.badge.primary {
  border-color: #3eaf7c;
  color: #3eaf7c;
}

.badge.danger {
  border-color: #e53935;
  color: #e53935;
}

.badge.warning {
  border-color: #c25205;
  color: #c25205;
}

</style>