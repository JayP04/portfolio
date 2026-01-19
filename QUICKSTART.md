# Quick Start Guide - Get Your Portfolio Running in 5 Minutes

## Step 1: Install Dependencies
```bash
cd portfolio-jay
npm install
```

## Step 2: Add Your Profile Picture
1. Copy one of your photos (preferably image 1 - the dark polo one)
2. Rename it to `profile.jpg`
3. Place it in the `/public` folder

## Step 3: Update Your Information

Open `app/page.tsx` and update:

### Your Bio (Line ~140-145)
```tsx
<p className="text-xl text-warm-gray leading-relaxed mb-8">
  // Replace this with your personal intro
</p>
```

### Your Links (Line ~175-195)
Replace these placeholder URLs:
- LinkedIn: `https://linkedin.com/in/yourprofile`
- GitHub: `https://github.com/yourusername`
- Email: `your.email@ku.edu`

### Project Links (Lines ~12-80)
Update GitHub, Devpost, and live URLs for each project

## Step 4: Run the Development Server
```bash
npm run dev
```

Visit http://localhost:3000 - Your portfolio is live!

## Step 5: Deploy (When Ready)

### Option 1: Vercel (Easiest)
1. Push to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Import your GitHub repo
5. Click "Deploy"
6. Done! You'll get a live URL

### Option 2: Netlify
1. Push to GitHub
2. Go to https://netlify.com
3. Click "Add new site" → "Import existing project"
4. Connect GitHub and select your repo
5. Deploy!

## Customization Later

### Want to change colors?
→ Edit `tailwind.config.js`

### Want a different cursor effect?
→ Edit props in `app/layout.tsx` line ~47

### Want to disable the custom cursor?
→ Change `type="glow"` to `type="none"` in `app/layout.tsx`

### Want to change fonts?
→ Edit imports in `app/layout.tsx` lines ~2-15

## Troubleshooting

**"Module not found" errors?**
→ Run `npm install` again

**Profile image not showing?**
→ Make sure image is in `/public` folder as `profile.jpg`
→ Or update the path in `page.tsx` line ~200

**Contact form not working?**
→ That's normal! It's set to console.log for now
→ Follow README.md to set up Resend for actual emails

**Need help?**
→ Check the full README.md for detailed instructions

---

## What to do FIRST:
1. ✅ npm install
2. ✅ Add profile.jpg to /public
3. ✅ Update your bio and links
4. ✅ npm run dev
5. ✅ Enjoy your portfolio!

The rest you can customize as you go. Good luck, Jay! 🚀
