import { useState, useEffect } from '@lynx-js/react'
import { Icon } from '../../shared/ui/Icon'
import { getRandomColorAvatar } from '../../shared/assets/stockImages'
import './ProfilePage.css'

export function ProfilePage() {
  const [avatarStyle, setAvatarStyle] = useState({})
  
  useEffect(() => {
    // Get a random avatar color
    setAvatarStyle({
      backgroundColor: getRandomColorAvatar()
    })
  }, [])
  
  const stats = [
    { label: 'Posts', value: '24' },
    { label: 'Followers', value: '1.2K' },
    { label: 'Following', value: '348' }
  ]
  
  return (
    <view className="profile-page">
      <view className="profile-header">
        <view className="profile-avatar" style={avatarStyle}></view>
        <view className="profile-info">
          <text className="profile-name">Sam Altman</text>
          <text className="profile-bio">CEO at OpenAI. Building the future with artificial intelligence.</text>
          
          <view className="profile-stats">
            {stats.map((stat, index) => (
              <view key={index} className="profile-stat">
                <text className="profile-stat-value">{stat.value}</text>
                <text className="profile-stat-label">{stat.label}</text>
              </view>
            ))}
          </view>
        </view>
      </view>
      
      <view className="profile-actions">
        <view className="profile-button primary">
          <text className="profile-button-text">Edit Profile</text>
        </view>
        <view className="profile-button secondary">
          <text className="profile-button-text">Share Profile</text>
        </view>
      </view>
      
      <view className="profile-menu">
        <view className="profile-menu-item active">
          <Icon name="feed" color="#0088ff" />
          <text className="profile-menu-text">Posts</text>
        </view>
        <view className="profile-menu-item">
          <Icon name="bookmark" color="#aaa" />
          <text className="profile-menu-text">Saved</text>
        </view>
        <view className="profile-menu-item">
          <Icon name="star" color="#aaa" />
          <text className="profile-menu-text">Favorites</text>
        </view>
      </view>
      
      <view className="profile-posts">
        <text className="profile-section-title">Recent Posts</text>
        <view className="profile-posts-empty">
          <text className="profile-posts-empty-text">No posts yet</text>
          <text className="profile-posts-empty-subtext">Your published posts will appear here</text>
        </view>
      </view>
    </view>
  )
} 