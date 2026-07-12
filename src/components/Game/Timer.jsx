const SEGUNDOS = 15

function Timer({ segundosRestantes }) {

  const percent = Math.max(0, Math.min(100, (segundosRestantes / SEGUNDOS) * 100))
  
  return (
    <div className="timer">
      <p className="text-center font-bold text-lg mb-2">
        Tiempo restante: {segundosRestantes} segundos
      </p>
      <div className="sketchy-border h-4 bg-paper overflow-hidden">
        <div
          className="h-full bg-sketch-green transition-[width] duration-1000 ease-linear"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}

export default Timer