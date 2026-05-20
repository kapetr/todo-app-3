import { useState } from 'react'
import { Todo, addTodo, toggleTodo } from './todoModel'
import { NewTodoInput } from './NewTodoInput'
import { TodoList } from './TodoList'
import './App.css'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  function handleAdd(title: string) {
    setTodos(prev => addTodo(prev, title))
  }

  function handleToggle(id: string) {
    setTodos(prev => toggleTodo(prev, id))
  }

  return (
    <div className="app">
      <h1>Todo App</h1>
      <NewTodoInput onAdd={handleAdd} />
      <TodoList todos={todos} onToggle={handleToggle} />
    </div>
  )
}

export default App
