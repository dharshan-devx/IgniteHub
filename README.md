# IgniteHub 🚀

**A resource hub built for the next generation of young builders, creators, and innovators.**

Finding the right tools, communities, and opportunities shouldn’t slow you down — IgniteHub brings them all together in one place, so you can focus on building what matters.

Built with React, TypeScript, and modern web technologies — lightweight, fast, and fully open-source.

---

## 🌟 Why IgniteHub?

In today’s world of information overload, young innovators waste valuable time hunting for trusted tools, tutorials, or funding opportunities. IgniteHub solves that — by curating the most useful resources for creators at every stage:

✅ Learn new skills  
✅ Discover tools and platforms  
✅ Find communities to grow with  
✅ Save your favorites  
✅ All in one simple, searchable hub — no account required

---

## ✨ Features

### 🔍 Smart Search & Filtering
- Fuzzy text matching with [Fuse.js](https://fusejs.io/)
- Filter by difficulty, resource type, or pricing
- Multi-field search across titles, descriptions, and tags
- Instant results — no backend or API needed

### ⭐ Favorites System
- Save favorite resources locally
- Persistent across browser sessions (localStorage)
- Offline-friendly — no login required
- Dedicated Favorites page

### 📧 Contact Form
- Send messages directly via [FormSubmit](https://formsubmit.co/)
- Spam protection and success messages
- No server-side code required

### 🎨 Modern Design
- Fully responsive — mobile, tablet, and desktop
- Clean interface with purple-pink gradient theme
- Smooth animations and transitions
- Minimal, clutter-free experience

### 📱 PWA Ready
- Installable on mobile and desktop
- Works offline (service workers)
- Fast performance with local caching

---

## 🛠️ Tech Stack

- **React 18**  
- **TypeScript**  
- **Vite**  
- **Tailwind CSS**  
- **Shadcn/UI**  
- **Fuse.js**  
- **React Router**  
- **Lucide React**

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher  
- npm or yarn

### Install & Run Locally

```bash
# Clone the repository
git clone <your-repo-url>
cd ignitehub

# Install dependencies
npm install

# Run development server
npm run dev

# Visit the app at:
http://localhost:5173




src/
├── components/            
│   ├── ui/                
│   ├── CategoryCard.tsx
│   ├── AdvancedSearch.tsx
│   ├── Header.tsx
│   └── Footer.tsx
├── hooks/                
│   ├── useFavorites.ts
│   └── useAdvancedSearch.ts
├── pages/                 
│   ├── Home.tsx
│   ├── Resources.tsx
│   ├── ResourceCategory.tsx
│   ├── Favorites.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── data/
│   └── resources.ts      
└── lib/
    └── utils.ts           





