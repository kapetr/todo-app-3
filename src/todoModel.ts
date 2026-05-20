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

export function toggleTodo(todos: Todo[], id: string): Todo[] {
  return todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
}

export function removeTodo(todos: Todo[], id: string): Todo[] {
  return todos.filter(t => t.id !== id)
}

export function editTodo(todos: Todo[], id: string, newTitle: string): Todo[] {
  const trimmed = newTitle.trim()
  if (!trimmed) return removeTodo(todos, id)
  return todos.map(t => t.id === id ? { ...t, title: trimmed } : t)
}

export type Filter = 'all' | 'active' | 'completed'

export function filterTodos(todos: Todo[], filter: Filter): Todo[] {
  if (filter === 'active') return todos.filter(t => !t.completed)
  if (filter === 'completed') return todos.filter(t => t.completed)
  return todos
}

export function clearCompleted(todos: Todo[]): Todo[] {
  return todos.filter(t => !t.completed)
}
