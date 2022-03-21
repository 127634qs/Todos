<template>
<section class="todo-header hero is-link">
  <div class="hero-body">
    <slot name="title">
      <p class="title">
        待办事项列表
      </p>
    </slot>
    <slot name="subtitle">
      <p class="subtitle">
        Todos...
      </p>
    </slot>
  </div>
</section>
</template>

<script>
export default {
  name: 'TodoHeader'
}
</script>

<style lang="scss" scoped>

</style>
