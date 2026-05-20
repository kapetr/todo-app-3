import { describe, it, expect, beforeEach } from 'vitest'
import { loadTodos, saveTodos } from './storage'
import type { Todo } from './todoModel'

const STORAGE_KEY = 'todo-app-3'

const sample: Todo[] = [
  { id: '1', title: 'test', completed: false, createdAt: '2024-01-01T00:00:00.000Z' },
]

describe('loadTodos', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('returns [] when key is missing', () => {
    expect(loadTodos()).toEqual([])
  })

  it('round-trips: saveTodos then loadTodos returns the same data', () => {
    saveTodos(sample)
    expect(loadTodos()).toEqual(sample)
  })

  it('returns [] on corrupt JSON', () => {
    localStorage.setItem(STORAGE_KEY, '{not valid json')
    expect(loadTodos()).toEqual([])
  })

  it('returns [] on wrong-shape payload (bad version)', () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 2, todos: [] }))
    expect(loadTodos()).toEqual([])
  })

  it('returns [] on wrong-shape payload (missing todos array)', () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, data: [] }))
    expect(loadTodos()).toEqual([])
  })
})
