import type { Todo } from './todoModel'

const STORAGE_KEY = 'todo-app-3'

type StoredState = { version: 1; todos: Todo[] }

export function loadTodos(): Todo[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as unknown
    if (
      typeof parsed !== 'object' ||
      parsed === null ||
      (parsed as StoredState).version !== 1 ||
      !Array.isArray((parsed as StoredState).todos)
    ) return []
    return (parsed as StoredState).todos
  } catch {
    return []
  }
}

export function saveTodos(todos: Todo[]): void {
  const state: StoredState = { version: 1, todos }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}
