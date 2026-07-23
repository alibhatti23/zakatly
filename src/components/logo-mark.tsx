interface LogoMarkProps {
  size?: number
  className?: string
}

export function LogoMark({ size = 32, className }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      role="img"
      aria-label="Zakatly logo"
      className={className}
    >
      <circle cx="24" cy="24" r="20" fill="#059669" />
      <circle cx="30.5" cy="16.5" r="15" fill="#ecfdf5" />
    </svg>
  )
}
