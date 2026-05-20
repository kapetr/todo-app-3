import { Todo } from './todoModel'

interface Props {
  todo: Todo
}

export function TodoItem({ todo }: Props) {
  return (
    <li className="todo-item">
      <span>{todo.title}</span>
    </li>
  )
}
