import { useCallback } from '@lynx-js/react'
import { Icon } from '../../shared/ui/Icon'
import './Navigation.css'

export function Navigation({ activePage, onNavigate }) {
  const handleNavigation = useCallback((page) => {
    if (onNavigate) onNavigate(page)
  }, [onNavigate])

  return (
    <view className="navigation-bar">
      <view 
        className={`nav-item ${activePage === 'feed' ? 'active' : ''}`}
        bindtap={() => handleNavigation('feed')}
      >
        <Icon name="feed" className="nav-icon" color={activePage === 'feed' ? '#0088ff' : '#aaa'} />
        <text className="nav-text">Blogs feed</text>
      </view>
      
      <view 
        className={`nav-item ${activePage === 'publish' ? 'active' : ''}`}
        bindtap={() => handleNavigation('publish')}
      >
        <view className="publish-button">
          <text className="plus-icon">+</text>
        </view>
        <text className="nav-text">Publish blog</text>
      </view>
      
      <view 
        className={`nav-item ${activePage === 'profile' ? 'active' : ''}`}
        bindtap={() => handleNavigation('profile')}
      >
        <Icon name="profile" className="nav-icon" color={activePage === 'profile' ? '#0088ff' : '#aaa'} />
        <text className="nav-text">My profile</text>
      </view>
    </view>
  )
} 