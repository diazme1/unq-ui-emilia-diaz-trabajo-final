import { useState } from 'react'

function WordInput({ onSubmit, error, disabled }) {
  const [value, setValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!value.trim()) return
    onSubmit(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="flex gap-2">
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Escribí una palabra..."
          disabled={disabled}
          autoFocus
          className="sketchy-border flex-1 min-w-0 px-3 py-1 text-lg outline-none disabled:bg-sketch-grayBg"
        />
        <button type="submit" disabled={disabled} className="sketchy-border bg-sketch-blueBg px-3 py-1 font-bold text-lg disabled:opacity-50">
          Enviar
        </button>
      </div>
      {error && <p className="text-sketch-red font-bold text-sm">{error}</p>}
    </form>
  )
}

export default WordInput