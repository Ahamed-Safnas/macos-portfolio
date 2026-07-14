# macOS Portfolio

A personal portfolio site built as an interactive **macOS / iPadOS / iOS simulation** — draggable windows, a dock, a Finder-style project browser, and device-aware boot screens, all rendered in React.


![Tech](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)
![Tech](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tech](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Tech](https://img.shields.io/badge/GSAP-3-88CE02?logo=greensock&logoColor=white)

---

## ✨ Features

- **Desktop mode** — draggable, focusable windows (Finder, Safari, Terminal, Contact, Photos, Resume, Text/Image viewers) with real macOS-style traffic-light controls and z-index stacking
- **Dock** with GSAP magnification (icons scale/lift as the cursor approaches, just like the real macOS dock)
- **Finder-style project browser** — projects live as folders with nested files (`.txt`, `.png`, `.pdf`, `.fig`, URLs) you can click through
- **Fully separate mobile experience** — a native iOS-style home screen, app icons, dock, and screen-stack navigation (not just a squeezed-down desktop layout)
- **Device-aware boot screen** — shows a macOS-style progress bar on desktop and an iOS/iPadOS-style spinner on tablet/mobile, with assets preloaded before reveal
- **Adaptive layout engine** (`useDeviceType`) — detects desktop / tablet / mobile using viewport width *and* pointer/touch capability, not just screen size
- **Variable-weight interactive typography** — hero text reacts to cursor/touch position using GSAP + CSS variable fonts
- **Resume viewer** with inline PDF rendering (`react-pdf`) and download
- **State management** via Zustand (+ Immer) for window and location state

---

## 🛠️ Tech Stack

| Category         | Tools                                   |
|-------------------|------------------------------------------|
| Framework         | React 19, Vite 8                         |
| Styling           | Tailwind CSS 4                           |
| Animation         | GSAP 3, `@gsap/react`, `Draggable`       |
| State             | Zustand, Immer                           |
| Icons             | Lucide React                             |
| Utilities         | clsx, dayjs                              |
| PDF rendering     | react-pdf                                |
| Tooltips          | react-tooltip                            |
| Linting           | ESLint 10                                |

---

## 📁 Project Structure

```
src/
├── App.jsx                  # Root: boot screen + device-based desktop/mobile switch
├── components/               # Desktop shell (Navbar, Dock, Home, Welcome, BootScreen)
│   └── boot/AppleLogo.jsx
├── windows/                  # Desktop "apps" (Finder, Safari, Terminal, Contact, Photos, Resume, Text, Image)
├── mobile/
│   ├── MobileApp.jsx          # Screen-stack navigator for mobile
│   ├── components/            # Mobile header, bottom tabs, home indicator
│   └── screens/                # MobileHome, MobileWork, MobileFolderContent, MobilePhotos, etc.
├── hoc/
│   └── WindowWrapper.jsx      # Adds drag, focus, open/close animation to any desktop window
├── hooks/
│   └── useDeviceType.js       # desktop / tablet / mobile detection
├── store/
│   ├── window.js               # Zustand store: open/close/focus/z-index per window
│   └── location.js             # Zustand store: active Finder location
├── constants/
│   └── index.js                 # Nav links, dock apps, projects, tech stack, socials, gallery
└── index.css                    # Tailwind layers, window/dock styling, boot screen animations
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `22.22.3` (see `.nvmrc`) — using [nvm](https://github.com/nvm-sh/nvm) is recommended:
  ```bash
  nvm use
  ```

### Installation

```bash
git clone https://github.com/AhamedSafnaS2000/macos_portfolio.git
cd macos_portfolio
npm install
```

### Development

```bash
npm run dev
```
Visit `http://localhost:5173`.

### Build

```bash
npm run build
npm run preview   # preview the production build locally
```

### Lint

```bash
npm run lint
```

---

## 📱 Testing on a Real Mobile Device

To preview the mobile experience on an actual phone during development, expose your local dev server with [ngrok](https://ngrok.com):

```bash
ngrok http 5173
```

Vite is already configured in `vite.config.js` to accept ngrok tunnel hosts:

```js
server: {
  host: true,
  allowedHosts: ['.ngrok-free.dev', '.ngrok-free.app'],
},
```

---

## 🧩 How It Works

### Device detection
`useDeviceType()` classifies the viewport into `mobile` / `tablet` / `desktop` using width breakpoints plus a `pointer: coarse` / touch-points check (so an iPad in landscape is still treated as `tablet`, not `desktop`). `App.jsx` renders the full draggable-window desktop experience for `desktop`/`tablet`, and swaps to `<MobileApp />` for `mobile`.

### Windows
Each desktop "app" (Finder, Safari, Terminal, etc.) is a plain component wrapped by `WindowWrapper(Component, windowKey)`, which adds:
- Open/close mount animation (GSAP)
- Drag-to-move (GSAP `Draggable`, desktop only)
- Click-to-focus with dynamic z-index via the `window` Zustand store

### Content model
Projects, About Me, Resume, and Trash are defined once in `src/constants/index.js` as a nested folder/file tree (`locations`). Both the desktop Finder and the mobile Work/Folder screens read from this same source of truth, so content only needs to be added in one place.

### Boot screen
`BootScreen.jsx` preloads the wallpaper and waits for fonts + a minimum duration before fading out, so the wallpaper and desktop icons appear together instead of popping in separately. It renders a determinate progress bar on desktop and a native-style spinner on tablet/mobile.

---

## 📬 Contact

**Ahamed Safnas**
- Portfolio: [ahamedsafnas.com](https://ahamedsafnas.com)
- Email: safnas2042ahamed@gmail.com
