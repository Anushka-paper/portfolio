# 🍎 Anushka's Portfolio

A creative, interactive portfolio experience inspired by the macOS desktop environment. Navigate through a beautifully designed interface featuring draggable windows, smooth animations, and a modern tech stack showcase.

![Portfolio Preview](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square) ![React](https://img.shields.io/badge/React-19.2.0-blue?style=flat-square) ![Vite](https://img.shields.io/badge/Vite-Latest-purple?style=flat-square)

---

## ✨ Features

- **macOS-Inspired UI** – Desktop-like environment with draggable, resizable windows
- **Smooth Animations** – GSAP-powered animations for delightful interactions
- **Interactive Dock** – Hover effects with dynamic scaling animations
- **PDF Resume Viewer** – Embedded resume viewable within the app
- **Photo Gallery** – Showcase your creative work
- **Contact Window** – Easy way for visitors to get in touch
- **Responsive Design** – Works seamlessly on different screen sizes
- **Fast Performance** – Built with Vite for instant HMR and lightning-fast builds

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|---------------|
| **Frontend Framework** | React 19.2 |
| **Build Tool** | Vite 5+ |
| **Styling** | Tailwind CSS 4.2, CSS |
| **Animation** | GSAP 3.14, @gsap/react 2.1 |
| **State Management** | Zustand 5.0 |
| **PDF Rendering** | react-pdf 10.4 |
| **Icons** | Lucide React 0.577 |
| **UI Utilities** | React Tooltip, Clsx, Immer |
| **Code Quality** | ESLint |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Dock.jsx        # Application dock with hover animations
│   ├── Navbar.jsx      # Top navigation bar
│   ├── Home.jsx        # Home/welcome component
│   └── WindowControls.jsx  # Window control buttons
├── windows/            # Window components
│   ├── Resume.jsx      # PDF resume viewer
│   ├── Contact.jsx     # Contact form window
│   ├── Photos.jsx      # Photo gallery
│   ├── Finder.jsx      # File browser
│   └── ... other windows
├── hoc/
│   └── WindowWrapper.jsx  # HOC for draggable windows with animations
├── store/              # Zustand state management
│   └── window.js       # Window state (open/close, z-index, etc.)
├── constants/          # Configuration & data
│   └── index.js        # App config, window setup, tech stack, etc.
└── App.jsx             # Root component
```

---

## 🎨 Key Components

### Window System
The portfolio uses a custom window management system with:
- **Z-index management** for proper window layering
- **Draggable windows** powered by GSAP Draggable
- **Open/close animations** with smooth scale and opacity transitions
- **Focus management** when clicking on windows

### Dock Animation
The dock features intelligent hover animations that:
- Scale icons based on mouse proximity
- Create a "bulge" effect around the cursor
- Reset smoothly when the mouse leaves

### State Management
Zustand handles global state for:
- Window open/close status
- Z-index tracking for proper layering
- Window-specific data persistence

---

## 🌐 Connect

- **GitHub** – [Anushka-paper](https://github.com/Anushka-paper)
- **LinkedIn** – [Anushka Singh](https://www.linkedin.com/in/anushka-singh-d123)
- **Codolio** – [paperD](https://codolio.com/profile/paperD)

---

## 📝 License

This project is open source and available under the MIT License.

---

## 🤝 Contributing

Found a bug or have suggestions? Feel free to open an issue or submit a pull request!

---

**Built with love by Anushka Singh** ❤️
