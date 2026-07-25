import { useTodos } from './useTodos'
import { useFilter } from './useFilter'
import { filterTodos } from './todoModel'
import { NewTodoInput } from './NewTodoInput'
import { TodoList } from './TodoList'
import { TodoFooter } from './TodoFooter'
import './App.css'

function App() {
  const { todos, handleAdd, handleToggle, handleRemove, handleEdit, handleClearCompleted } = useTodos()
  const filter = useFilter()
  const visible = filterTodos(todos, filter)
  const activeCount = todos.filter(t => !t.completed).length
  const completedCount = todos.filter(t => t.completed).length

  return (
    <div className="app">
      <h1>Todo App</h1>
      <NewTodoInput onAdd={handleAdd} />
      <TodoList todos={visible} onToggle={handleToggle} onRemove={handleRemove} onEdit={handleEdit} />
      {todos.length > 0 && (
        <TodoFooter
          activeCount={activeCount}
          completedCount={completedCount}
          currentFilter={filter}
          onClearCompleted={handleClearCompleted}
        />
      )}
    </div>
  )
}

export default App
