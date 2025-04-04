import { useCallback } from '@lynx-js/react'
import { Button } from '../../shared/ui/Button'
import { Icon } from '../../shared/ui/Icon'
import './ReactionButton.css'

export function ReactionButton({ 
  icon, 
  count, 
  isActive = false, 
  color = 'white',
  onClick 
}) {
  const handleClick = useCallback(() => {
    if (onClick) onClick()
  }, [onClick])

  return (
    <Button 
      className={`reaction-button ${isActive ? 'reaction-button--active' : ''}`}
      onClick={handleClick}
    >
      <Icon name={icon} className="reaction-icon" color={isActive ? color : '#fff'} />
      {count && <text className="reaction-count">{count}</text>}
    </Button>
  )
} 