// Navigation configuration
export const navigationLinks = [
  {
    path: '/',
    label: 'الصفحة الرئيسية',
    component: 'Home'
  },
  {
    path: '/about',
    label: 'من نحن',
    component: 'About'
  },
  {
    path: '/projects',
    label: 'مشاريعنا',
    component: 'Projects'
  },
  {
    path: '/contact',
    label: 'تواصل معنا',
    component: 'Contact'
  }
]

// Helper function to check if route exists
export const isValidRoute = (path) => {
  return navigationLinks.some(link => link.path === path)
}

// Helper function to get route info
export const getRouteInfo = (path) => {
  return navigationLinks.find(link => link.path === path)
}
