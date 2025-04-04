import { useCallback, useState, useEffect } from '@lynx-js/react'
import { ReactionButton } from '../../features/reaction/ReactionButton'
import { getRandomPostImage, getRandomColorAvatar } from '../../shared/assets/stockImages'
import './Post.css'

export function Post({ author, timeAgo, views, image }) {
  const [reactions, setReactions] = useState({
    diamond: { count: 15700, active: true },
    star: { count: 15700, active: false }
  })
  
  const [backgroundStyle, setBackgroundStyle] = useState({})
  
  useEffect(() => {
    // Get a random background color for the post
    const randomImage = getRandomPostImage()
    setBackgroundStyle({
      backgroundColor: randomImage.color
    })
  }, [])
  
  const [avatarStyle, setAvatarStyle] = useState({})
  
  useEffect(() => {
    // Get a random avatar color
    const avatarColor = getRandomColorAvatar()
    setAvatarStyle({
      backgroundColor: avatarColor
    })
  }, [])

  const handleReaction = useCallback((type) => {
    setReactions(prev => {
      const wasActive = prev[type].active
      const newCount = wasActive ? prev[type].count - 1 : prev[type].count + 1
      
      return {
        ...prev,
        [type]: {
          count: newCount,
          active: !wasActive
        }
      }
    })
  }, [])

  return (
    <view className="post">
      {/* User header */}
      <view className="post-header">
        <view className="post-author">
          <view className="post-avatar" style={avatarStyle}></view>
          <view className="post-info">
            <text className="post-username">{author}</text>
            <text className="post-meta">{timeAgo} | {views} views</text>
          </view>
        </view>
        <view className="post-menu">
          <text className="post-menu-icon">•••</text>
        </view>
      </view>
      
      {/* Post image */}
      <view className="post-image" style={backgroundStyle}>
        <view className="post-gradient"></view>
      </view>
      
      {/* Reaction buttons */}
      <view className="post-reactions">
        <ReactionButton icon="chat" />
        <ReactionButton icon="smile" />
        <ReactionButton 
          icon="diamond" 
          count={formatCount(reactions.diamond.count)}
          isActive={reactions.diamond.active}
          color="#5d9dff"
          onClick={() => handleReaction('diamond')}
        />
        <ReactionButton 
          icon="star" 
          count={formatCount(reactions.star.count)}
          isActive={reactions.star.active}
          color="#ffac33"
          onClick={() => handleReaction('star')}
        />
      </view>
    </view>
  )
}

function formatCount(count) {
  if (count >= 1000) {
    return (count / 1000).toFixed(1) + 'K'
  }
  return count.toString()
} 