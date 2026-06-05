# Bharanidharan M — UI/UX Portfolio

Cinematic Next.js portfolio with Three.js particles, GSAP animations & video hero.

## Setup Steps

### 1. Install Node.js
Download from https://nodejs.org → Install LTS version
Verify: `node -v` and `npm -v`

### 2. Copy this folder
Place the `bharanidharan-portfolio` folder anywhere on your computer.

### 3. Add your video
Put your hero video file inside:
  public/assets/hero.mp4
(Rename your file to hero.mp4)

### 4. Install dependencies
Open terminal, navigate to project folder:
  cd bharanidharan-portfolio
  npm install

### 5. Run locally
  npm run dev
Open http://localhost:3000 ✅

### 6. Update your details
Open src/components/ContactSection.tsx and replace:
  your@email.com → your real email
  yourprofile    → your LinkedIn / Behance username
  91XXXXXXXXXX   → your WhatsApp number

## Deploy to Vercel (Free)

1. Create account at https://vercel.com
2. Install Vercel CLI: npm install -g vercel
3. In project folder run: vercel
4. Follow prompts → your site goes live!
   URL: bharanidharan-portfolio.vercel.app

## Project Structure

bharanidharan-portfolio/
├── public/
│   └── assets/
│       └── hero.mp4          ← PUT YOUR VIDEO HERE
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Cursor.tsx
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx   ← Video + Three.js + GSAP
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ProcessSection.tsx
│   │   └── ContactSection.tsx
│   └── styles/
│       ├── Cursor.module.css
│       ├── Navbar.module.css
│       ├── HeroSection.module.css
│       └── Sections.module.css
├── package.json
├── next.config.js
└── tsconfig.json
