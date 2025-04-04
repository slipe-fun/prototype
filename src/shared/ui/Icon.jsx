import './Icon.css'

export function Icon({ name, className = '', color = 'white', ...props }) {
  return (
    <view className={`icon icon-${name} ${className}`} style={{ backgroundColor: color }} {...props} />
  )
} 