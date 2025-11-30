# EventHub - Event Management System

![EventHub](https://img.shields.io/badge/React-18.2.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 📋 Project Description

EventHub is a comprehensive event management platform that allows users to create, manage, and register for events seamlessly. Built with React, this application streamlines event organization by handling scheduling, attendee registration, and event coordination in one place. Perfect for conferences, workshops, festivals, and social gatherings.

## ✨ Features

- **Event Discovery**: Browse and search through various events with filtering by category
- **Event Creation**: Create new events with detailed information (title, date, time, location, pricing, etc.)
- **Real-time Registration**: Register for events and manage your registrations
- **Responsive Design**: Fully responsive design that works on desktop, tablet, and mobile devices
- **Interactive UI**: Modern, intuitive user interface with smooth animations and transitions
- **Form Validation**: Comprehensive form validation for creating events and contact forms
- **Category Filtering**: Filter events by categories (Conference, Workshop, Festival, Networking, etc.)
- **Search Functionality**: Search events by name or location

## 🛠️ Technologies Used

### Frontend
- **React 18.2.0** - JavaScript library for building user interfaces
- **React Router DOM 6.20.0** - Routing library for navigation
- **CSS3** - Styling with modern CSS features including Grid and Flexbox
- **JavaScript ES6+** - Modern JavaScript features

### React Concepts Implemented
- ✅ React Arrow Functions
- ✅ Variables (const, let)
- ✅ The map() Method for rendering lists
- ✅ ES6 Modules (import/export)
- ✅ Ternary Operators
- ✅ React Props
- ✅ App.jsx component structure
- ✅ React Router for routing
- ✅ Footer Component
- ✅ Navbar Component
- ✅ useState Hook
- ✅ Component with State + Event Handling
- ✅ Forms with React
- ✅ List Rendering with Objects

## 📁 Project Structure

```
event-management-system/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── EventCard.jsx
│   │   └── EventCard.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Events.jsx
│   │   ├── Events.css
│   │   ├── CreateEvent.jsx
│   │   ├── CreateEvent.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   git clone <your-repository-url>
   cd event-management-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Build for Production

To create a production build:
```bash
npm run build
```

The build folder will contain the optimized production-ready files.

## 📱 Pages Overview

### 1. Home Page (/)
- Hero section with call-to-action buttons
- Features showcase highlighting platform capabilities
- Statistics section showing platform impact
- Call-to-action for creating events

### 2. About Page (/about)
- Company story and mission
- Core values presentation
- Team member showcase
- Impact statistics

### 3. Events Page (/events)
- List of all available events
- Category filtering (Conference, Workshop, Festival, Networking)
- Search functionality
- Event registration/cancellation
- Event details with pricing and attendee information

### 4. Create Event Page (/create-event)
- Comprehensive form for creating new events
- Form validation with error messages
- Input fields for:
  - Event title
  - Category selection
  - Date and time
  - Location
  - Ticket price
  - Expected attendees
  - Event description
- Success confirmation message

### 5. Contact Page (/contact)
- Contact form with validation
- Contact information display
- Social media links
- Business hours information

## 🎨 Key Features Breakdown

### State Management
- Uses React's `useState` hook for managing component state
- Form data management with controlled components
- Event registration tracking
- Filter and search functionality

### Event Handling
- Form submission with validation
- Category filtering
- Search input handling
- Registration button clicks
- Navigation menu toggle for mobile

### Props Usage
- EventCard component receives event data as props
- Registration status passed to child components
- Event handler functions passed as props

### Routing
- React Router DOM for single-page application navigation
- Five distinct routes for different pages
- Active link highlighting
- Mobile-friendly navigation

## 🎯 Component Details

### Navbar Component
- Fixed position navigation
- Responsive mobile menu
- Active route highlighting
- Smooth transitions

### Footer Component
- Contact information
- Quick links
- Social media links
- Copyright information

### EventCard Component
- Displays individual event information
- Props-based rendering
- Registration functionality
- Responsive card design

## 📊 Screenshots

*(Include screenshots of your application here after deployment)*

### Home Page
![Home Page Screenshot]

### Events Page
![Events Page Screenshot]

### Create Event Page
![Create Event Screenshot]

### About Page
![About Page Screenshot]

### Contact Page
![Contact Page Screenshot]

## 🌐 Deployment

This project can be deployed on:
- **GitHub Pages**: Follow the official React deployment guide
- **Vercel**: Connect your GitHub repository and deploy automatically
- **Netlify**: Drag and drop the build folder or connect via Git

### Deploying to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/event-management-system",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 🔄 Version Control

This project uses Git for version control. All commits are properly documented with clear commit messages.

### Example Commit Messages:
- `Initial commit: Setup React project structure`
- `Add: Navbar component with responsive design`
- `Add: Event creation form with validation`
- `Add: Event filtering and search functionality`
- `Add: Responsive design for mobile devices`

## 👥 Contributors

- **Your Name** - Developer

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- React documentation
- React Router documentation
- Design inspiration from modern event platforms

## 📞 Support

For support, email info@eventhub.com or create an issue in the repository.

---

**Built with ❤️ using React**
