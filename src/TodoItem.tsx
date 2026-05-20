import { Todo } from './todoModel'

interface Props {
  todo: Todo
  onToggle: (id: string) => void
  onRemove: (id: string) => void
}

export function TodoItem({ todo, onToggle, onRemove }: Props) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        aria-label={`Mark "${todo.title}" as ${todo.completed ? 'active' : 'completed'}`}
      />
      <span className={todo.completed ? 'todo-title completed' : 'todo-title'}>{todo.title}</span>
      <button
        className="todo-delete"
        onClick={() => onRemove(todo.id)}
        aria-label={`Delete "${todo.title}"`}
      >
        ×
      </button>
    </li>
  )
}
