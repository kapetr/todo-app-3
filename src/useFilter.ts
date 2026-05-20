import { useState, useEffect } from 'react'
import type { Filter } from './todoModel'

function parseHash(hash: string): Filter {
  if (hash === '#/active') return 'active'
  if (hash === '#/completed') return 'completed'
  return 'all'
}

export function useFilter(): Filter {
  const [filter, setFilter] = useState<Filter>(() => parseHash(window.location.hash))

  useEffect(() => {
    function onHashChange() {
      setFilter(parseHash(window.location.hash))
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return filter
}
