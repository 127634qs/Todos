<template>
  <div class="todo-app">
    <todo-header>
      <!-- 2.6 之前 -->
      <!-- <div
        style="font-size: 18px; color: #f00; font-weight: 700;"
        slot="title"
      >这是自定义的主标题</div> -->
      <!-- 2.6 中使用 v-slot 指令，它需要在 template 标签中使用 -->
      <!-- <template v-slot:subtitle>
        <div>这是自定义的副标题</div>
      </template> -->
      <!-- <template #subtitle>
        <div>这是自定义的副标题</div>
      </template> -->
    </todo-header>
    <todo-input v-on:add="addTodoItem"></todo-input>
    <!-- <todo-list list="传递给子组件的数据"></todo-list> -->
    <todo-list v-bind:list="todos"></todo-list>
  </div>
</template>
<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'TodoApp',
  components: { // 局部组件注册（子组件）
    'todo-header': TodoHeader,
    'todo-input': TodoInput,
    'todo-list': TodoList
  },
  data () {
    return {
      // 所有待办事项
      todos: Array(3).fill(null).map((_, index) => ({
        id: index + 1,
        title: '待办事项' + (index + 1),
        completed: Math.random() > 0.5
      }))
    }
  },
  methods: {
    // 向 todos 数组中添加新待办事项
    addTodoItem (title) {
      this.todos.push({
        id: Math.random(),
        title,
        completed: false
      })
    },
    // 删除 todos 数组中 id 对应的待办事项
    removeTodoItem (id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    }
  },
  // 实例创建后自动执行
  created () {
    // 绑定自定义事件，用于接收数据
    this.$bus.$on('remove', this.removeTodoItem)
  }
}
</script>

<style lang="scss" scoped>

</style>
