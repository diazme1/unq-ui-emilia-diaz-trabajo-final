import { Link } from 'react-router-dom'
import { getScores } from '../utils/leaderboard.js'

function Leaderboard() {
  const scores = getScores()

  return (
    <div className="sketchy-border bg-paper w-full max-w-xl p-8 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <span className="text-sm font-bold text-sketch-gray">🏆 Leaderboard</span>
        <Link
          to="/"
          className="sketchy-border bg-paper px-3 py-1 text-sm font-bold hover:-translate-y-0.5 transition-transform"
        >
          ← Inicio
        </Link>
      </div>

      {scores.length === 0 ? (
        <p className="text-center text-sketch-gray py-8">
          Todavía no hay puntajes guardados. ¡Jugá una partida! 🕹️
        </p>
      ) : (
        <ol className="flex flex-col gap-2">
          {scores.map((entry, index) => (
            <li
              key={`${entry.name}`}
              className="sketchy-border hatch-green grid grid-cols-[auto_1fr_auto_auto] items-center gap-3 px-4 py-2"
            >
              <span className="font-bold text-lg w-6 text-center">
                {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}°`}
              </span>
              <span className="font-bold truncate">{entry.name}</span>
              <span className="text-sketch-black text-sm whitespace-nowrap">
                🔗 {entry.wordsCount}
              </span>
              <span className="text-sketch-green font-bold whitespace-nowrap">
                {entry.score} pts
              </span>
            </li>
          ))}
        </ol>
      )}

      <Link
        to="/jugar"
        className="sketchy-border bg-sketch-blueBg font-bold text-xl px-6 py-3 text-center hover:-translate-y-0.5 hover:shadow-[3px_3px_0_var(--ink)] transition-transform"
      >
        🕹️ Jugar ahora
      </Link>
    </div>
  )
}

export default Leaderboard