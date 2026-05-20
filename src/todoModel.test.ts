import { describe, it, expect } from 'vitest'
import { addTodo, toggleTodo, removeTodo, editTodo, type Todo } from './todoModel'

describe('addTodo', () => {
  it('prepends the new todo to the list', () => {
    const existing: Todo[] = [{ id: 'x', title: 'old', completed: false, createdAt: '' }]
    const result = addTodo(existing, 'new')
    expect(result[0].title).toBe('new')
    expect(result[1].title).toBe('old')
  })

  it('generates unique ids for each todo', () => {
    const r1 = addTodo([], 'first')
    const r2 = addTodo([], 'second')
    expect(r1[0].id).toBeTruthy()
    expect(r2[0].id).toBeTruthy()
    expect(r1[0].id).not.toBe(r2[0].id)
  })

  it('ignores empty input', () => {
    expect(addTodo([], '')).toHaveLength(0)
  })

  it('ignores whitespace-only input', () => {
    expect(addTodo([], '   ')).toHaveLength(0)
  })
})

describe('toggleTodo', () => {
  const base: Todo[] = [
    { id: '1', title: 'first', completed: false, createdAt: '' },
    { id: '2', title: 'second', completed: false, createdAt: '' },
  ]

  it('flips completed by id', () => {
    const result = toggleTodo(base, '1')
    expect(result[0].completed).toBe(true)
  })

  it('leaves other todos untouched', () => {
    const result = toggleTodo(base, '1')
    expect(result[1].completed).toBe(false)
  })

  it('is idempotent across two calls', () => {
    const once = toggleTodo(base, '1')
    const twice = toggleTodo(once, '1')
    expect(twice[0].completed).toBe(false)
  })
})

describe('removeTodo', () => {
  const base: Todo[] = [
    { id: '1', title: 'first', completed: false, createdAt: '' },
    { id: '2', title: 'second', completed: false, createdAt: '' },
    { id: '3', title: 'third', completed: false, createdAt: '' },
  ]

  it('removes the matching todo', () => {
    const result = removeTodo(base, '2')
    expect(result).toHaveLength(2)
    expect(result.find(t => t.id === '2')).toBeUndefined()
  })

  it('leaves other todos untouched', () => {
    const result = removeTodo(base, '2')
    expect(result[0].id).toBe('1')
    expect(result[1].id).toBe('3')
  })

  it('is a no-op on unknown id', () => {
    const result = removeTodo(base, 'unknown')
    expect(result).toHaveLength(3)
  })
})

describe('editTodo', () => {
  const base: Todo[] = [
    { id: '1', title: 'first', completed: false, createdAt: '' },
    { id: '2', title: 'second', completed: false, createdAt: '' },
  ]

  it('replaces the title of the matching todo', () => {
    const result = editTodo(base, '1', 'updated')
    expect(result[0].title).toBe('updated')
    expect(result[1].title).toBe('second')
  })

  it('trims whitespace from the new title', () => {
    const result = editTodo(base, '1', '  trimmed  ')
    expect(result[0].title).toBe('trimmed')
  })

  it('removes the todo when new title is empty', () => {
    const result = editTodo(base, '1', '')
    expect(result).toHaveLength(1)
    expect(result[0].id).toBe('2')
  })

  it('removes the todo when new title is whitespace only', () => {
    const result = editTodo(base, '1', '   ')
    expect(result).toHaveLength(1)
  })
})
