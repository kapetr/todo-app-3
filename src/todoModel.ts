export interface Todo {
  id: string
  title: string
  completed: boolean
  createdAt: string
}

export function addTodo(todos: Todo[], title: string): Todo[] {
  if (!title.trim()) return todos
  const todo: Todo = {
    id: crypto.randomUUID(),
    title: title.trim(),
    completed: false,
    createdAt: new Date().toISOString(),
  }
  return [todo, ...todos]
}
