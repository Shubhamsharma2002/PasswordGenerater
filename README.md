# 🔐 React Password Generator

A sleek and customizable password generator built using **React**. Adjust the password length, include numbers and special characters, and copy securely to your clipboard with one click!

## 🚀 Live Demo

[🔗 Live Site](https://your-deployed-url.com)

## 🛠️ Tech Stack

- ⚛️ React (with Hooks like `useState`, `useEffect`, `useCallback`, `useRef`)
- 🎨 Tailwind CSS for fast, responsive UI
- 🚀 Vite (for blazing fast development build)
- 📋 Clipboard API (for copy functionality)

## 📸 Preview

![Password Generator UI](./preview.png) <!-- optional if you add a screenshot -->

## 🔧 Features

- 🔢 Set password length using a range slider (6–100)
- 🔐 Toggle inclusion of:
  - Numbers (0-9)
  - Special characters (@#%&*-+)
- 📋 One-click copy to clipboard
- 🎨 Dynamic copy button color to indicate action
- 🔄 Password auto-generates on changes

## 📂 Folder Structure
```
src/
│
├── components/              # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│
├── pages/                   # Pages for routing
│   ├── About.jsx            # About project page
├── App.jsx # Main layout + routing
├── main.jsx # Entry point
├── index.css # TailwindCSS
├── vite.config.js # Vite configuration
├── tailwind.config.js # Tailwind configuration
```