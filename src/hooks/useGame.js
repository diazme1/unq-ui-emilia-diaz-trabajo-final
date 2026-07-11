import { useCallback, useRef, useState } from 'react'
import { useTimer } from './useTimer.js'
import { validateWord, WordApiError } from '../services/validateWordApi.js'
import { getWordScore, isWordUsed, respectsChain, normalizeWord } from '../utils/chainRules.js'

export function useGame() {
  const [status, setStatus] = useState('idle') 
  const [wordChain, setWordChain] = useState([])
  const [score, setScore] = useState(0)
  const [error, setError] = useState(null)
  const [isValidating, setIsValidating] = useState(false)

  const handleTimeUp = useCallback(() => {
    setStatus('gameOver')
  }, [])

  const { segundosRestantes, start, reset, stop } = useTimer(handleTimeUp)

  // guarda la cadena actual sin depender del closure del setState anterior
  const wordChainRef = useRef(wordChain)
  wordChainRef.current = wordChain

  const startGame = useCallback(() => {
    setWordChain([])
    setScore(0)
    setError(null)
    setStatus('playing')
  }, [])

  const restartGame = useCallback(() => {
    stop()
    startGame()
  }, [stop, startGame])

  const submitWord = useCallback(
    async (rawWord) => {
      if (status !== 'playing' || isValidating) return

      const word = rawWord.trim()
      if (!word) return

      const currentChain = wordChainRef.current
      const previousWord = currentChain[currentChain.length - 1] ?? null

      if (isWordUsed(word, currentChain)) {
        setError('La palabra ya fue utilizada.')
        return
      }
      if (!respectsChain(previousWord, word)) {
        setError('La palabra no comienza con la última letra de la palabra anterior.')
        return
      }

      setIsValidating(true)
      setError(null)
      try {
        const exists = await validateWord(word)
        if (!exists) {
          setError('La palabra no existe.')
          return
        }

        setWordChain((prev) => [...prev, word])
        setScore((prev) => prev + getWordScore(word))

        if (previousWord === null) {
          start() 
        } else {
          reset() 
        }
      } catch (err) {
        if (err instanceof WordApiError) {
          setError(err.message)
        } else {
          setError('Ocurrió un error inesperado. Intentá de nuevo.')
        }
      } finally {
        setIsValidating(false)
      }
    },
    [status, isValidating, start, reset]
  )

  return {
    status,
    wordChain,
    score,
    segundosRestantes,
    error,
    isValidating,
    submitWord,
    startGame,
    restartGame,
  }
}