// This module provides stock image URLs for use in the application

// Color placeholders for avatars
export const colorAvatars = [
  '#3498db', // Blue
  '#e74c3c', // Red
  '#2ecc71', // Green
  '#f39c12', // Orange
  '#9b59b6', // Purple
  '#1abc9c', // Turquoise
  '#34495e', // Dark blue
  '#e67e22'  // Dark orange
]

// Generate a random color avatar
export function getRandomColorAvatar() {
  const randomIndex = Math.floor(Math.random() * colorAvatars.length)
  return colorAvatars[randomIndex]
}

// Generate a placeholder image URL with specific dimensions and text
export function getPlaceholderImage(width, height, text = 'Placeholder') {
  return `https://via.placeholder.com/${width}x${height}/${getRandomColorAvatar().replace('#', '')}/${getTextColor()}?text=${encodeURIComponent(text)}`
}

// Generate a random person avatar (note: these are dummy URLs)
export function getPersonAvatar(id) {
  // Return a placeholder color since we can't load external images easily
  return getRandomColorAvatar()
}

// Helper function to determine if text should be light or dark based on background
function getTextColor(bgColor = '#333333') {
  // Default to white text
  return 'ffffff'
}

// Post images (nature, city, etc.)
export const postImages = [
  {
    id: 'nature1',
    title: 'Mountain landscape',
    color: '#3498db'
  },
  {
    id: 'city1',
    title: 'Urban skyline',
    color: '#e74c3c'
  },
  {
    id: 'beach1',
    title: 'Tropical paradise',
    color: '#2ecc71'
  },
  {
    id: 'food1',
    title: 'Gourmet meal',
    color: '#f39c12'
  },
  {
    id: 'tech1',
    title: 'Modern technology',
    color: '#9b59b6'
  }
]

// Get a random post image
export function getRandomPostImage() {
  const randomIndex = Math.floor(Math.random() * postImages.length)
  return postImages[randomIndex]
} 