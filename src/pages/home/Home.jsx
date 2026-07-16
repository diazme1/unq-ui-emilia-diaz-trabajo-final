import MenuItem from './MenuItem'
import logo from '../../assets/logo.png'

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
        <MenuItem to="/reglas" icon="💡" label="Reglas" />
        <MenuItem to="/jugar" icon="🕹️" label="Jugar" />
        <MenuItem to="/leaderboard" icon="🏆" label="Leaderboard" />
      </nav>
    </div>
  )
}

export default Home