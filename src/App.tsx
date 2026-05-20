import { useState } from 'react'
import { Todo, addTodo } from './todoModel'
import { NewTodoInput } from './NewTodoInput'
import { TodoList } from './TodoList'
import './App.css'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  function handleAdd(title: string) {
    setTodos(prev => addTodo(prev, title))
  }

  return (
    <div className="app">
      <h1>Todo App</h1>
      <NewTodoInput onAdd={handleAdd} />
      <TodoList todos={todos} />
    </div>
  )
}

export default App
