<template>
<div class="card">
  <!-- <div class="card-content" :class="item.completed ? 'finished' : ''"> -->
  <div class="card-content" :class="{finished: item.completed}">
    <div class="content">
      {{item.title}} - {{item.completed ? '已': '未'}}完成
    </div>
  </div>
  <footer class="card-footer">
    <a href="/" class="card-footer-item" @click.prevent="handleModify">修改</a>
    <a href="/" class="card-footer-item" @click.prevent="handleRemove">删除</a>
  </footer>
</div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    item: Object
  },
  methods: {
    handleModify () {
      // eslint-disable-next-line
      this.item.completed = !this.item.completed
    },
    // 处理删除
    handleRemove () {
      // 触发 bus 对象上绑定的 'remove' 事件
      this.$bus.$emit('remove', this.item.id)
    }
  }
}
</script>

<style lang="scss" scoped>
  .finished {
    background: #ccc;
    text-decoration: line-through red;
  }
</style>
