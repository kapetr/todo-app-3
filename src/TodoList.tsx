import { Todo } from './todoModel'
import { TodoItem } from './TodoItem'

interface Props {
  todos: Todo[]
}

export function TodoList({ todos }: Props) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
