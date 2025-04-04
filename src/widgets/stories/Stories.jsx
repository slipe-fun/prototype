import { useState, useCallback } from '@lynx-js/react'
import './Stories.css'

const USERS = [
  { id: 1, name: 'John Doe', hasStory: true, viewed: false },
  { id: 2, name: 'Jane Smith', hasStory: true, viewed: false },
  { id: 3, name: 'Robert Johnson', hasStory: true, viewed: true },
  { id: 4, name: 'Emily Davis', hasStory: true, viewed: false },
  { id: 5, name: 'Michael Wilson', hasStory: true, viewed: true },
  { id: 6, name: 'Sarah Taylor', hasStory: true, viewed: false },
]

export function Stories() {
  const [users, setUsers] = useState(USERS)
  
  const handleStoryClick = useCallback((id) => {
    setUsers(prev => 
      prev.map(user => 
        user.id === id ? { ...user, viewed: true } : user
      )
    )
  }, [])
  
  return (
    <view className="stories-container">
      <view className="stories-scroll">
        {users.map(user => (
          <view 
            key={user.id} 
            className={`story-item ${user.viewed ? 'viewed' : ''}`}
            bindtap={() => handleStoryClick(user.id)}
          >
            <view className="story-avatar">
              <view className="story-avatar-image"></view>
            </view>
            <text className="story-username">{user.name.split(' ')[0]}</text>
          </view>
        ))}
      </view>
    </view>
  )
} 