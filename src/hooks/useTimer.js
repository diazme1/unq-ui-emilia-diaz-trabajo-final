import { useEffect, useRef, useState, useCallback } from 'react'

const SEGUNDOS = 15

export function useTimer(onExpire) {
  const [segundosRestantes, setsegundosRestantes] = useState(SEGUNDOS)
  const [isRunning, setIsRunning] = useState(false)
  const onExpireRef = useRef(onExpire)
  onExpireRef.current = onExpire

  useEffect(() => {
    if (!isRunning) return

    const intervalId = setInterval(() => {
      setsegundosRestantes((prev) => {
        if (prev <= 1) {
          clearInterval(intervalId)
          onExpireRef.current()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [isRunning])

  const start = useCallback(() => {
    setsegundosRestantes(SEGUNDOS)
    setIsRunning(true)
  }, [])

  const reset = useCallback(() => {
    setsegundosRestantes(SEGUNDOS)
  }, [])

  const stop = useCallback(() => {
    setIsRunning(false)
  }, [])

  return { segundosRestantes, start, reset, stop }
}