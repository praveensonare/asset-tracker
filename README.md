# Asset Tracker - Multi-User Dashboard Application

A modern, responsive asset tracking application with support for 5 different user types, each with their own dedicated dashboard and profile management.

## Features

### 🎨 Modern Login Page
- Beautiful background image with gradient overlay
- Radio button selection for 5 user types
- Traditional login with username/password
- Google login integration (simulated)
- Responsive design that works on all devices

### 👥 User Types & Routes
1. **Manufacturer** - `/mf/dashboard`
2. **Logistic Provider** - `/lp/dashboard`
3. **Wholeseller** - `/ws/dashboard`
4. **Retailer** - `/ret/dashboard`
5. **Consumer** - `/con/dashboard`

### 📊 Dashboard Features
Each user type has a unique dashboard with:
- Real-time statistics cards
- Data visualization
- Recent activity tables
- Performance metrics
- Color-coded status indicators

### 🎭 Collapsible Sidebar
- Smooth collapse/expand animation
- User profile section at bottom
- Profile dropdown that opens upward with:
  - Profile page link
  - Logout option

### 👤 Profile Management
- View and edit profile information
- Upload and change profile picture
- Update name, email, mobile, and address
- Account information display
- Security & Privacy settings

## Tech Stack

- **React** - UI library
- **React Router** - Navigation and routing
- **React Icons** - Beautiful icons
- **Lucide React** - Additional icon set
- **Vite** - Fast build tool
- **CSS3** - Custom animations and styling

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies: \`npm install\`
3. Start dev server: \`npm run dev\`
4. Open browser to http://localhost:5173

## Demo Credentials

| User Type | Username | Password |
|-----------|----------|----------|
| Manufacturer | mf_user | demo123 |
| Logistic Provider | lp_user | demo123 |
| Wholeseller | ws_user | demo123 |
| Retailer | ret_user | demo123 |
| Consumer | con_user | demo123 |

## Color Scheme

- Primary: Blue (#3B82F6)
- Secondary: Purple (#8B5CF6)
- Success: Green (#10B981)
- Warning: Yellow (#F59E0B)
- Dark: Slate (#1E293B)
- Light: Gray (#F9FAFB)

## License

MIT License
