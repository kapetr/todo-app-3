import { Todo } from './todoModel'

interface Props {
  todo: Todo
  onToggle: (id: string) => void
}

export function TodoItem({ todo, onToggle }: Props) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        aria-label={`Mark "${todo.title}" as ${todo.completed ? 'active' : 'completed'}`}
      />
      <span className={todo.completed ? 'todo-title completed' : 'todo-title'}>{todo.title}</span>
    </li>
  )
}
