# Hero Section with Scroll Animation  

A modern and responsive **hero section** built with **React** and **Framer Motion**.  
This section features smooth **scroll-based animations**, **image transitions**, and a dynamic **text reveal effect** for a clean landing page experience.  

## ✨ Features  
- 📱 **Responsive images** (xsmall → xlarge) based on screen width  
- 🎞️ **Scroll-driven animations** using Framer Motion’s `useScroll` and `useTransform`  
- 🖼️ **Layered image transitions** with clip-path effects  
- 📝 **Animated text reveal** for descriptions  
- 🎨 Styled with **TailwindCSS**  

## 🚀 Tech Stack  
- **React**  
- **Framer Motion**  
- **TailwindCSS**  

## 📂 Project Structure  
src/
├── components/
│ ├── MainSection/ # Hero section with animations
│ └── Heading/ # Reusable heading component
├── assets/images/ # Responsive images

## 🔧 How It Works  
- The hero section tracks scroll progress using `useScroll`.  
- Image transitions and transformations are mapped with `useTransform`.  
- Different image sizes are dynamically loaded depending on screen width.  
- Text animates smoothly into view when reaching the right scroll position.
