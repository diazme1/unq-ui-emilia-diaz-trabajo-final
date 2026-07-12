import { Link } from 'react-router-dom'
import { useState } from 'react'
import { saveScore } from '../../utils/leaderboard.js'

function GameOver({ wordChain = [], score = 0, onRestart }) {

  const [saved, setSaved] = useState(false)

  const handleSave = (event) => {
    event.preventDefault()
    saveScore({ name, score, wordsCount: wordChain.length })
    setSaved(true)
  }

  return (
    <div className="sketchy-border bg-paper w-full max-w-xl p-8 flex flex-col items-center gap-6 text-center">
      <span className="text-sm font-bold text-sketch-gray self-start">Palabras encadenadas</span>
      
      <div className="sketchy-border hatch-red px-6 py-3 -rotate-1">
        <h2 className="text-2xl font-bold text-sketch-red">Fin de la partida</h2>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-lg">
          Palabras encadenadas: <strong>{wordChain.length}</strong>
        </p>
        {wordChain.length > 0 && (
          <p className="sketchy-border hatch-green px-4 py-2 font-bold break-words">
            {wordChain.join(' → ')}
          </p>
        )}
        <p className="text-lg">
          Puntaje final: <strong>{score}</strong>
        </p>
      </div>

      {!saved ? (
        <form onSubmit={handleSave} className="w-full flex flex-col gap-2">
          <input
            type="text"
            value={name}
            placeholder="Tu nombre para el leaderboard..."
            maxLength={20}
            className="sketchy-border px-4 py-2 text-center outline-none"
            required
          />
          <button
            type="submit"
            className="sketchy-border bg-sketch-greenBg font-bold py-2 hover:-translate-y-0.5 transition-transform"
          >
            🏆 Guardar puntaje
          </button>
        </form>
      ) : (
        <p className="font-bold text-sketch-green">✅ ¡Puntaje guardado!</p>
      )}

      <div className="flex flex-col gap-3 w-full">
        <button 
          onClick={onRestart}
          className="sketchy-border bg-sketch-blueBg font-bold text-xl px-6 py-3 hover:-translate-y-0.5 transition-transform hover:shadow-[3px_3px_0_var(--ink)]"
        >
          Jugar de nuevo
        </button>
        <Link 
          to="/" 
          className="sketchy-border bg-paper font-bold text-lg px-6 py-3 hover:-translate-y-0.5 transition-transform hover:shadow-[3px_3px_0_var(--ink)]"
        >
             Volver al inicio
        </Link>
      </div>
    </div>
  )
}

export default GameOver