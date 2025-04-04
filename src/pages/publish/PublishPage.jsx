import { UserStack } from '../../entities/user/UserStack'
import { IconList } from '../../widgets/icon-list/IconList'
import './PublishPage.css'

export function PublishPage() {
  return (
    <view className="publish-page">
      <view className="publish-content">
        <text className="publish-title">Create New Post</text>
        
        <UserStack limit={3} />
        
        <view className="publish-form">
          <text className="publish-label">Title</text>
          <view className="publish-input-container">
            <text className="publish-input-placeholder">Enter title...</text>
          </view>
          
          <text className="publish-label">Content</text>
          <view className="publish-textarea-container">
            <text className="publish-input-placeholder">What's on your mind?</text>
          </view>
          
          <text className="publish-label">Add Icons</text>
          <IconList />
          
          <view className="publish-button-container">
            <view className="publish-submit-button">
              <text className="publish-button-text">Post</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  )
} 