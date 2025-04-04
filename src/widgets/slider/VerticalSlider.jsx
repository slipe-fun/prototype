import { useState, useCallback } from '@lynx-js/react'
import './VerticalSlider.css'

export function VerticalSlider({ children, className = '' }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [startY, setStartY] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const handleTouchStart = useCallback((e) => {
    setStartY(e.touches[0].clientY)
    setIsDragging(true)
  }, [])

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return
    
    const currentY = e.touches[0].clientY
    const diff = startY - currentY
    
    // Detect swipe direction
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentSlide < children.length - 1) {
        // Swipe up
        setCurrentSlide(prev => prev + 1)
        setIsDragging(false)
      } else if (diff < 0 && currentSlide > 0) {
        // Swipe down
        setCurrentSlide(prev => prev - 1)
        setIsDragging(false)
      }
    }
  }, [children.length, currentSlide, isDragging, startY])

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleDotClick = useCallback((index) => {
    setCurrentSlide(index)
  }, [])

  return (
    <view 
      className={`slider ${className}`}
      bindtouchstart={handleTouchStart}
      bindtouchmove={handleTouchMove}
      bindtouchend={handleTouchEnd}
    >
      <view 
        className="slider-container" 
        style={{ transform: `translateY(-${currentSlide * 100}%)` }}
      >
        {children.map((child, index) => (
          <view key={index} className="slider-slide">
            {child}
          </view>
        ))}
      </view>
      
      <view className="slider-dots">
        {children.map((_, index) => (
          <view 
            key={index} 
            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
            bindtap={() => handleDotClick(index)}
          />
        ))}
      </view>
    </view>
  )
} 