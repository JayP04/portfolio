# Jay's Portfolio

A modern, elegant portfolio website built with Next.js, featuring smooth animations, custom cursor effects, and interactive project cards.

## Features

- 🎨 **Warm, Sophisticated Design** - Coffee shop aesthetic with terracotta accents
- ✨ **Custom Cursor Effect** - Trailing glow that follows your mouse (easily customizable)
- 🎯 **Interactive Project Cards** - Hover to expand, click to lock open
- 📅 **Project Timeline** - Chronological view of all projects
- 📧 **Contact Form** - Email integration for meeting requests
- 📱 **Fully Responsive** - Works beautifully on all devices
- 🚀 **Performance Optimized** - Built with Next.js 14

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file in the root directory:
   ```bash
   # Optional: For email functionality
   RESEND_API_KEY=your_resend_api_key_here
   ```

3. **Add your profile image:**
   - Place your profile photo in the `/public` directory as `profile.jpg`
   - Or update the image path in `app/page.tsx` (line 140)

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization Guide

### 1. Cursor Effect

The cursor is modular and easy to customize. Edit `/components/CustomCursor.tsx` or change props in `/app/layout.tsx`:

```tsx
<CustomCursor 
  glowSize={20}           // Size of the glow
  glowColor="rgba(212, 115, 94, 0.4)"  // Color of the glow
  hoverScale={1.5}        // Scale when hovering interactive elements
  type="glow"             // Options: 'glow', 'trail', 'none'
/>
```

To switch to a trail effect:
- Change `type="trail"` in layout.tsx
- Or implement custom behavior in CustomCursor.tsx

### 2. Colors

Edit the color palette in `tailwind.config.js`:

```js
colors: {
  cream: { /* Your cream colors */ },
  coffee: { /* Your brown colors */ },
  terracotta: { /* Your accent colors */ },
}
```

### 3. Content

Update your information in `/app/page.tsx`:

- **Personal info** - Lines 10-70 (hero section)
- **Featured projects** - Lines 12-35
- **Timeline projects** - Lines 37-78
- **Experience** - Lines 80-105
- **Social links** - Update all instances of placeholder URLs

### 4. Email Setup

The contact form sends to `/api/contact/route.ts`. To enable email:

**Option 1: Resend (Recommended)**
```bash
npm install resend
```

Uncomment lines 16-30 in `/app/api/contact/route.ts` and add your Resend API key to `.env.local`.

**Option 2: Other services**
- SendGrid
- Nodemailer
- Your preferred email service

### 5. Fonts

Current fonts (can be changed in `/app/layout.tsx`):
- Display: Crimson Pro (elegant serif for headlines)
- Body: DM Sans (clean, readable sans-serif)
- Mono: JetBrains Mono (for code and tags)

## Project Structure

```
portfolio-jay/
├── app/
│   ├── api/contact/       # Contact form API endpoint
│   ├── globals.css        # Global styles and cursor
│   ├── layout.tsx         # Root layout with fonts
│   └── page.tsx           # Main portfolio page
├── components/
│   ├── ContactForm.tsx    # Contact form component
│   ├── CustomCursor.tsx   # Modular cursor effect
│   ├── Navigation.tsx     # Header with hide/show on scroll
│   ├── ProjectCard.tsx    # Expandable project cards
│   └── ProjectTimeline.tsx # Timeline with projects
├── public/
│   └── profile.jpg        # Your profile image (add this)
├── tailwind.config.js     # Color palette and theme
└── package.json
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

This is a standard Next.js app and works on:
- Netlify
- Railway
- Your own server with Docker

## Tips for Customization

1. **Add more sections**: Copy existing section structure in `page.tsx`
2. **Change animations**: Modify Framer Motion props in components
3. **Adjust spacing**: Update Tailwind classes (py-20, px-6, etc.)
4. **Add dark mode**: Use Tailwind's dark mode utilities
5. **New cursor type**: Extend CustomCursor.tsx with your own effect

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email**: Resend (optional)
- **Language**: TypeScript

## License

Feel free to use this as inspiration for your own portfolio. Just make it your own!

## Questions?

If you run into issues or have questions about customization, check:
- Next.js docs: https://nextjs.org/docs
- Tailwind docs: https://tailwindcss.com/docs
- Framer Motion docs: https://www.framer.com/motion/

---

Built with ☕ and code by Jay
