import { useState, useRef, useEffect } from 'react'
import { Todo } from './todoModel'

interface Props {
  todo: Todo
  onToggle: (id: string) => void
  onRemove: (id: string) => void
  onEdit: (id: string, newTitle: string) => void
}

export function TodoItem({ todo, onToggle, onRemove, onEdit }: Props) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(todo.title)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (editing) {
      setDraft(todo.title)
      inputRef.current?.focus()
      inputRef.current?.select()
    }
  }, [editing, todo.title])

  function commitEdit() {
    onEdit(todo.id, draft)
    setEditing(false)
  }

  function cancelEdit() {
    setDraft(todo.title)
    setEditing(false)
  }

  if (editing) {
    return (
      <li className="todo-item editing">
        <input
          ref={inputRef}
          className="todo-edit-input"
          value={draft}
          onChange={e => setDraft(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') commitEdit()
            else if (e.key === 'Escape') cancelEdit()
          }}
          onBlur={commitEdit}
        />
      </li>
    )
  }

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        aria-label={`Mark "${todo.title}" as ${todo.completed ? 'active' : 'completed'}`}
      />
      <span
        className={todo.completed ? 'todo-title completed' : 'todo-title'}
        onDoubleClick={() => setEditing(true)}
      >
        {todo.title}
      </span>
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
