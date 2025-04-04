import { useCallback } from '@lynx-js/react'
import './Button.css'

export function Button({ className = '', children, onClick, ...props }) {
  const handleTap = useCallback(() => {
    if (onClick) onClick()
  }, [onClick])

  return (
    <view className={`button ${className}`} bindtap={handleTap} {...props}>
      {children}
    </view>
  )
} 