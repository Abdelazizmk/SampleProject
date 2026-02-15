import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const DurationContext = createContext(null)

const DURATION_MIN = 1
const DURATION_MAX = 10
const DURATION_DEFAULT = 3

/**
 * @param {number} value
 * @returns {number}
 */
function clampDuration(value) {
  return Math.min(DURATION_MAX, Math.max(DURATION_MIN, Number(value) || DURATION_DEFAULT))
}

export function DurationProvider({ children, initialDuration = DURATION_DEFAULT }) {
  const [duration, setDurationState] = useState(() => 
    clampDuration(localStorage.getItem('duration') != null ? localStorage.getItem('duration') : initialDuration)
  )

  const setDuration = useMemo(() => {
    return (value) => {
      setDurationState((prev) => {
        const next = typeof value === 'function' ? value(prev) : value
        return clampDuration(next)
      })
    }
  }, [])

  const value = useMemo(
    () => ({ duration, setDuration, min: DURATION_MIN, max: DURATION_MAX }),
    [duration, setDuration]
  )

  useEffect( () => {
    localStorage.setItem('duration', duration)
  },[duration]);

  return (
    <DurationContext.Provider value={value}>
      {children}
    </DurationContext.Provider>
  )
}

/**
 * @returns {{ duration: number, setDuration: (value: number | ((prev: number) => number)) => void, min: number, max: number }}
 */
export function useDuration() {
  const context = useContext(DurationContext)
  if (context == null) {
    throw new Error('useDuration must be used within a DurationProvider')
  }
  return context
}
