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