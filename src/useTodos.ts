import { useState, useEffect } from 'react'
import type { Todo } from './todoModel'
import { addTodo, toggleTodo, removeTodo, editTodo } from './todoModel'
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

  function handleRemove(id: string) {
    setTodos(prev => removeTodo(prev, id))
  }

  function handleEdit(id: string, newTitle: string) {
    setTodos(prev => editTodo(prev, id, newTitle))
  }

  return { todos, handleAdd, handleToggle, handleRemove, handleEdit }
}
