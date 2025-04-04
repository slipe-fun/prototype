import { useCallback } from '@lynx-js/react'
import { Icon } from '../../shared/ui/Icon'
import './IconList.css'

const ICONS = [
  { id: 1, name: 'chat', label: 'Messages' },
  { id: 2, name: 'smile', label: 'Reactions' },
  { id: 3, name: 'diamond', label: 'Premium' },
  { id: 4, name: 'star', label: 'Favorites' },
  { id: 5, name: 'feed', label: 'My Feed' },
  { id: 6, name: 'profile', label: 'Profile' },
  { id: 7, name: 'settings', label: 'Settings' },
  { id: 8, name: 'notification', label: 'Alerts' },
  { id: 9, name: 'search', label: 'Search' },
  { id: 10, name: 'bookmark', label: 'Saved' }
]

export function IconList({ onSelect }) {
  const handleIconSelect = useCallback((icon) => {
    if (onSelect) onSelect(icon)
  }, [onSelect])
  
  return (
    <view className="icon-list">
      <text className="icon-list-title">Available Icons</text>
      <view className="icon-list-grid">
        {ICONS.map(icon => (
          <view 
            key={icon.id}
            className="icon-list-item"
            bindtap={() => handleIconSelect(icon)}
          >
            <Icon name={icon.name} className="icon-list-icon" />
            <text className="icon-list-label">{icon.label}</text>
          </view>
        ))}
      </view>
    </view>
  )
} 