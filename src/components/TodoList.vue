<template>

  <div class="todo-list container">
  <!-- 选项啦 -->
    <div class="tabs is-centered">
      <ul>
        <li class="is-active"><a>所有的待办事项({{ total }})</a></li>
        <li><a>已完成({{ completedCount }})</a></li>
        <li><a>未完成({{ total - completedCount}})</a></li>
      </ul>
  </div>
  <!-- 列表 -->
  <div class="columns is-multiline is-mobile" v-if="list.length">
    <div class="column is-one-quarter" v-for="todo in list" :key="todo.id">
      <todo-item  :item="todo"></todo-item>
    </div>
  </div>
    <!-- <ul class="list" v-if="list.length">
      <todo-item v-for="todo in list" :key="todo.id" :item="todo"></todo-item>
    </ul> -->
    <div v-else>待办事项为空，请添加新待办事项！</div>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
  name: 'TodoList',

  components: { // 局部组件注册
    'todo-item': TodoItem
  },
  // props: ['list'], // 利用数组声明当前组件可以从父组件中接收哪些名称的属性
  props: { // 利用对象声明可接收属性及进行属性验证
    list: {
      type: Array,
      required: true
    }
  },
  computed: { // 计算属性
    total () { // 所有待办事项总项数
      return this.list.length
    },
    completedCount () { // 已完成的待办事项
      return this.list.reduce((sum, todo) => todo.completed ? sum + 1 : sum, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
