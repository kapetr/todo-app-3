import type { Filter } from './todoModel'

interface Props {
  activeCount: number
  completedCount: number
  currentFilter: Filter
  onClearCompleted: () => void
}

export function TodoFooter({ activeCount, completedCount, currentFilter, onClearCompleted }: Props) {
  const label = activeCount === 1 ? '1 item left' : `${activeCount} items left`

  return (
    <footer className="todo-footer">
      <span className="todo-count">{label}</span>
      <ul className="todo-filters">
        <li>
          <a href="#/" className={currentFilter === 'all' ? 'selected' : ''}>All</a>
        </li>
        <li>
          <a href="#/active" className={currentFilter === 'active' ? 'selected' : ''}>Active</a>
        </li>
        <li>
          <a href="#/completed" className={currentFilter === 'completed' ? 'selected' : ''}>Completed</a>
        </li>
      </ul>
      {completedCount > 0 && (
        <button className="todo-clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  )
}
