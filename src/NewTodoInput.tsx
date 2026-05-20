import { useState, KeyboardEvent } from 'react'

interface Props {
  onAdd: (title: string) => void
}

export function NewTodoInput({ onAdd }: Props) {
  const [value, setValue] = useState('')

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key !== 'Enter') return
    const trimmed = value.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setValue('')
  }

  return (
    <input
      className="new-todo-input"
      placeholder="What needs to be done?"
      value={value}
      onChange={e => setValue(e.target.value)}
      onKeyDown={handleKeyDown}
      autoFocus
    />
  )
}
