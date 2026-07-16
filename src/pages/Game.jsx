import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGame } from '../hooks/useGame.js'
import WordInput from '../components/Game/WordInput.jsx'
import WordChain from '../components/Game/WordChain.jsx'
import Timer from '../components/Game/Timer.jsx'
import GameOver from '../components/Game/GameOver.jsx'
import Summary from '../components/Game/Summary.jsx'

function Game() {

  const navigate = useNavigate()
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false)
  
  const {
    status, wordChain, score, segundosRestantes,   
    error, isValidating, submitWord, startGame, restartGame,   
  } = useGame()

  useEffect(() => {
    if (status === 'idle') startGame()
  }, [status, startGame])

  const handleCancel = () => {
    setIsCancelModalOpen(true)
  }

  const handleConfirmCancel = () => {
    setIsCancelModalOpen(false)
    navigate('/')
  }

  const handleCloseCancelModal = () => {
    setIsCancelModalOpen(false)
  }

  if (status === 'gameOver') {
    return <GameOver wordChain={wordChain} score={score} onRestart={restartGame} />
  }

  return (
    <div className="sketchy-border bg-paper w-full max-w-xl p-4 sm:p-8 flex flex-col gap-4">
      <div className="flex flex-wrap justify-between items-center gap-2">
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

      {isCancelModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <button
            type="button"
            aria-label="Cerrar confirmación"
            className="absolute inset-0 bg-black/50"
            onClick={handleCloseCancelModal}
          />

          <div className="sketchy-border relative z-10 w-full max-w-sm bg-paper p-6 shadow-[6px_6px_0_var(--ink)]">
            <h2 className="text-2xl font-bold text-center mb-3">Cancelar partida</h2>
            <p className="text-center text-lg mb-6">
              ¿Seguro que querés cancelar la partida? Vas a perder el progreso actual.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleCloseCancelModal}
                className="sketchy-border flex-1 bg-paper px-4 py-2 font-bold hover:-translate-y-0.5 transition-transform"
              >
                Seguir jugando
              </button>
              <button
                type="button"
                onClick={handleConfirmCancel}
                className="sketchy-border flex-1 bg-sketch-red text-white px-4 py-2 font-bold hover:-translate-y-0.5 transition-transform"
              >
                Sí, cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Game