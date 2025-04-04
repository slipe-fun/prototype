import { Stories } from '../../widgets/stories/Stories'
import { VerticalSlider } from '../../widgets/slider/VerticalSlider'
import { Post } from '../../widgets/post/Post'
import './FeedPage.css'

export function FeedPage() {
  // Sample posts data
  const posts = [
    {
      id: 1,
      author: "Sam Altman",
      timeAgo: "1 day ago",
      views: "30.45K"
    },
    {
      id: 2,
      author: "Mark Zuckerberg",
      timeAgo: "3 hours ago",
      views: "145.2K"
    },
    {
      id: 3,
      author: "Elon Musk",
      timeAgo: "2 days ago",
      views: "531.8K"
    }
  ]
  
  return (
    <view className="feed-page">
      <Stories />
      
      <view className="feed-slider-container">
        <VerticalSlider>
          {posts.map(post => (
            <Post 
              key={post.id}
              author={post.author}
              timeAgo={post.timeAgo}
              views={post.views}
            />
          ))}
        </VerticalSlider>
      </view>
    </view>
  )
} 