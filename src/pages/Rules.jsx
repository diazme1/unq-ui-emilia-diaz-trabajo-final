import { Link } from 'react-router-dom'

const chainExample = [
  { word: 'casa', points: 4 },
  { word: 'árbol', points: 5 },
  { word: 'luna', points: 4 },
]

function Reglas() {
  return (
    <div className="sketchy-border bg-paper w-full max-w-xl p-8 flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <span className="text-sm font-bold text-sketch-gray">📖 Reglas del juego</span>
        <Link
          to="/"
          className="sketchy-border bg-paper px-3 py-1 text-sm font-bold hover:-translate-y-0.5 transition-transform"
        >
          ← Inicio
        </Link>
      </div>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">🔗 Cómo se juega</h2>
        <p>Una partida consiste en ingresar palabras que formen una cadena.</p>
        <p>La primera palabra puede ser cualquier palabra válida y será la que inicie la cadena.</p>
        <p>A partir de la segunda palabra, cada nueva palabra debe cumplir:</p>
        <ul className="flex flex-col gap-2">
          <li className="sketchy-border hatch-gray px-4 py-2 flex items-center gap-2">
            🔤 Debe existir en el diccionario español.
          </li>
          <li className="sketchy-border hatch-gray px-4 py-2 flex items-center gap-2">
            🚫 No puede haber sido utilizada anteriormente durante la partida.
          </li>
          <li className="sketchy-border hatch-gray px-4 py-2 flex items-center gap-2">
            🔡 Debe comenzar con la última letra de la palabra válida anterior.
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-3 items-center">
        <h2 className="text-xl font-bold self-start">🧮 Puntaje</h2>
        <p className="self-start">Cada letra de una palabra válida otorga 1 punto.</p>

        <div className="flex flex-col items-center gap-2 w-full">
          {chainExample.map(({ word, points }, index) => (
            <div key={word} className="flex flex-col items-center gap-2 w-full">
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 w-full">
                <span />
                <span className="sketchy-border hatch-green px-3 py-1 font-bold text-center">
                  {word}
                </span>
                <span className="text-sketch-green font-bold text-sm text-left">
                  +{points} pts
                </span>
              </div>
              {index < chainExample.length - 1 && <span aria-hidden="true">↓</span>}
            </div>
          ))}
        </div>

        <p className="font-bold text-lg mt-2">Total: 13 puntos 🏆</p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">⏱️ Tiempo</h2>
        <p>Cada turno tiene una duración de <strong>15 segundos</strong>.</p>
        <ul className="flex flex-col gap-2">
          <li className="sketchy-border hatch-gray px-4 py-2 flex items-center gap-2">
            ▶️ El contador comienza al ingresar la primera palabra.
          </li>
          <li className="sketchy-border hatch-gray px-4 py-2 flex items-center gap-2">
            🔄 Cada palabra válida reinicia el contador a 15 segundos.
          </li>
          <li className="sketchy-border hatch-gray px-4 py-2 flex items-center gap-2">
            ⌛ Mientras el tiempo no llegue a 0, podés seguir intentando.
          </li>
          <li className="sketchy-border hatch-red px-4 py-2 flex items-center gap-2 text-sketch-red font-bold">
            ⛔ Si el contador llega a 0, la partida termina.
          </li>
        </ul>
      </section>

      <Link
        to="/jugar"
        className="sketchy-border bg-sketch-blueBg font-bold text-xl px-6 py-3 text-center hover:-translate-y-0.5 hover:shadow-[3px_3px_0_var(--ink)] transition-transform"
      >
        🕹️ Jugar ahora
      </Link>
    </div>
  )
}

export default Reglas