import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGame } from '../../hooks/useGame.js'
import WordInput from './WordInput.jsx'
import WordChain from './WordChain.jsx'
import Timer from './Timer.jsx'
import GameOver from './GameOver.jsx'
import Summary from './Summary.jsx'

function Game() {

  const navigate = useNavigate()
  
  const {
    status, wordChain, score, segundosRestantes,   
    error, isValidating, submitWord, startGame, restartGame,   
  } = useGame()

  useEffect(() => {
    if (status === 'idle') startGame()
  }, [status, startGame])

  const handleCancel = () => {
        const confirmed = window.confirm(
        '¿Seguro que querés cancelar la partida? Vas a perder el progreso actual.'
        )
        if (!confirmed) return
    navigate('/')
    }

  if (status === 'gameOver') {
    return <GameOver wordChain={wordChain} score={score} onRestart={restartGame} />
  }

  return (
    <div className="sketchy-border bg-paper w-full max-w-xl p-8 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <span className="text-sm font-bold text-sketch-gray">Palabras encadenadas</span>
        <button
            onClick={handleCancel}
            className="sketchy-border bg-paper px-3 py-1 text-sm font-bold text-sketch-red hover:-translate-y-0.5 transition-transform"
        >
            ✕ Cancelar
        </button>
      </div>

      <Timer segundosRestantes={segundosRestantes} />

      <div className="mt-4">
        <WordChain wordChain={wordChain} score={score} />
      </div>
      
      <WordInput onSubmit={submitWord} error={error} disabled={isValidating} />

      <Summary wordChain={wordChain} score={score} />
    </div>
  )
}

export default Game