import { Link } from 'react-router-dom'

function MenuItem({ to, icon, label, disabled }) {
  const className = `sketchy-border flex items-center gap-3 px-4 py-3 text-xl font-bold bg-paper transition-transform ${
    disabled
      ? 'cursor-not-allowed opacity-50'
      : 'hover:-translate-y-0.5 hover:shadow-[3px_3px_0_var(--ink)]'
  }`

  return (
    <Link
      to={to}
      className={className}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </Link>
  )
}

export default MenuItem