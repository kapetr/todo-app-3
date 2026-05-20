import { describe, it, expect } from 'vitest'
import { addTodo, type Todo } from './todoModel'

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
