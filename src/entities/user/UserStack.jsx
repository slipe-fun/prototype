import './UserStack.css'

const MOCK_USERS = [
  { id: 1, name: 'John Doe', avatar: 'avatar1', role: 'Author' },
  { id: 2, name: 'Jane Smith', avatar: 'avatar2', role: 'Editor' },
  { id: 3, name: 'Robert Johnson', avatar: 'avatar3', role: 'Contributor' },
  { id: 4, name: 'Emily Davis', avatar: 'avatar4', role: 'Reviewer' }
]

export function UserStack({ limit = 3 }) {
  const displayUsers = MOCK_USERS.slice(0, limit)
  const remainingCount = Math.max(0, MOCK_USERS.length - limit)
  
  return (
    <view className="user-stack">
      <view className="user-stack-avatars">
        {displayUsers.map((user, index) => (
          <view 
            key={user.id}
            className="user-stack-avatar"
            style={{ zIndex: displayUsers.length - index, left: `${index * 15}px` }}
          >
            <view className="user-stack-avatar-inner"></view>
          </view>
        ))}
        
        {remainingCount > 0 && (
          <view 
            className="user-stack-more"
            style={{ zIndex: 0, left: `${displayUsers.length * 15}px` }}
          >
            <text className="user-stack-more-text">+{remainingCount}</text>
          </view>
        )}
      </view>
      
      <view className="user-stack-info">
        <text className="user-stack-label">Contributors</text>
        <text className="user-stack-names">
          {displayUsers.map(user => user.name).join(', ')}
          {remainingCount > 0 && ` and ${remainingCount} more`}
        </text>
      </view>
    </view>
  )
} 