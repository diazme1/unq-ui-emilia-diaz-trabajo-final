import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Home() {
  return (
    <div className="sketchy-border bg-paper w-full max-w-md p-6 relative">

      <div className="sketchy-border p-4 mt-4 mb-8 -rotate-1 flex justify-center">
        <img
          src={logo}
          alt="Palabras Encadenadas"
          className="max-w-full h-auto"
        />
      </div>

      <nav className="flex flex-col gap-4">
        <MenuItem to="/reglas" icon="💡" label="Reglas" disabled />
        <MenuItem to="/jugar" icon="🕹️" label="Jugar" />
        <MenuItem to="/leaderboard" icon="🏆" label="Leaderboard" disabled />
      </nav>
    </div>
  )
}

function MenuItem({ to, icon, label, disabled }) {

  return (
    <Link
      to={to}
      className="sketchy-border flex items-center gap-3 px-4 py-3 text-xl font-bold bg-paper hover:-translate-y-0.5 hover:shadow-[3px_3px_0_var(--ink)] transition-transform"
    >
      <span>{icon}</span>
      <span>{label}</span>
    </Link>
  )
}

export default Home