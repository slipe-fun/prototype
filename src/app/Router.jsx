import { useState, useCallback } from '@lynx-js/react'
import { FeedPage } from '../pages/feed/FeedPage'
import { ProfilePage } from '../pages/profile/ProfilePage'
import { PublishPage } from '../pages/publish/PublishPage'
import { Navigation } from '../widgets/navigation/Navigation'
import './styles/router.css'

export function Router() {
  const [currentPage, setCurrentPage] = useState('feed')

  const handleNavigate = useCallback((page) => {
    setCurrentPage(page)
  }, [])

  return (
    <view className="app-container">
      <view className="page-container">
        {currentPage === 'feed' && <FeedPage />}
        {currentPage === 'profile' && <ProfilePage />}
        {currentPage === 'publish' && <PublishPage />}
      </view>
      <Navigation
        activePage={currentPage}
        onNavigate={handleNavigate}
      />
    </view>
  )
} 