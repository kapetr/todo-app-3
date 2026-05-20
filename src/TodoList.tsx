import { Todo } from './todoModel'
import { TodoItem } from './TodoItem'

interface Props {
  todos: Todo[]
  onToggle: (id: string) => void
  onRemove: (id: string) => void
  onEdit: (id: string, newTitle: string) => void
}

export function TodoList({ todos, onToggle, onRemove, onEdit }: Props) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} onEdit={onEdit} />
      ))}
    </ul>
  )
}
