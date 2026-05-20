import { useState, useEffect } from 'react'
import type { Todo } from './todoModel'
import { addTodo, toggleTodo } from './todoModel'
import { loadTodos, saveTodos } from './storage'

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(() => loadTodos())

  useEffect(() => {
    saveTodos(todos)
  }, [todos])

  function handleAdd(title: string) {
    setTodos(prev => addTodo(prev, title))
  }

  function handleToggle(id: string) {
    setTodos(prev => toggleTodo(prev, id))
  }

  return { todos, handleAdd, handleToggle }
}
