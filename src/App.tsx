import { useTodos } from './useTodos'
import { NewTodoInput } from './NewTodoInput'
import { TodoList } from './TodoList'
import './App.css'

function App() {
  const { todos, handleAdd, handleToggle, handleRemove, handleEdit } = useTodos()

  return (
    <div className="app">
      <h1>Todo App</h1>
      <NewTodoInput onAdd={handleAdd} />
      <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} onEdit={handleEdit} />
    </div>
  )
}

export default App
