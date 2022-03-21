<template>
<div class="container field is-grouped" :style="{marginTop: '12px'}">
  <p class="control is-expanded">
    <input class="input" type="text"
    placeholder="请输入新待办事项"
    ref="inputRef"
    v-model.trim="inputValue"
    @keydown.enter="handleAdd"
    >
  </p>
  <p class="control"> <!-- .prevent 阻止跳转默认事件 -->
    <a href="/" class="button is-link" @click.prevent="handleAdd">
      添加
    </a>
  </p>
</div>
</template>

<script>
export default {
  name: 'TodoInput',
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    handleAdd () {
      // 文本框自动获得焦点
      this.$refs.inputRef.focus()
      // 没有输入内容，则结束不添加
      if (this.inputValue.length === 0) {
        return
      }
      // 触发在父组件中定义的 add 事件
      this.$emit('add', this.inputValue)
      // 清空文本框
      this.inputValue = ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
