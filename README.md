# ANtwix - Modern Web Development Agency

A high-performance, production-ready portfolio and business website built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. The site features modern animations, live project previews via iframes, an email inquiry form, and full SEO optimization.

## 🚀 Features

- **Modern Dark Theme**: Glassmorphism design with gradient accents
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile
- **Live Project Previews**: Embedded iframes showcasing real project websites
- **Email Inquiry Form**: Resend integration for lead capture
- **SEO Optimized**: Complete metadata, Open Graph tags, and structured data
- **Performance**: Optimized images (AVIF/WebP), lazy loading, and code splitting
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation
- **Smooth Animations**: Framer Motion for entry animations and hover effects
- **Production Ready**: TypeScript validation, error handling, and optimized build

## 📋 Prerequisites

- **Node.js** 18.17 or later
- **npm** 9+ or **yarn** 3+
- A **Resend API key** (for email functionality)

## 🛠️ Local Development

### 1. Clone the Repository

```bash
git clone <repository-url>
cd ANtwix
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Add your Resend API key:

```env
RESEND_API_KEY=re_your_api_key_here
```

**How to get a Resend API key:**
1. Visit [resend.com](https://resend.com)
2. Sign up for a free account
3. Navigate to API Keys in your dashboard
4. Copy your API key and paste it into `.env.local`

### 4. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Make Changes

- Edit components in `src/components/`
- Modify pages in `src/app/`
- Add API routes in `src/app/api/`

Changes auto-refresh with Fast Refresh.

## 📦 Production Build

### Test the Production Build Locally

```bash
npm run build
npm run start
```

This creates an optimized production build and serves it locally.

### Verify Build Success

The build output should show:

```
✓ Compiled successfully
✓ Finished TypeScript
✓ Collecting page data
✓ Generating static pages
```

## 🌐 Deploy to Vercel

### 1. Create a Vercel Account

- Visit [vercel.com](https://vercel.com)
- Sign up with GitHub, GitLab, or email

### 2. Connect Your Repository

```bash
npm install -g vercel
vercel
```

Or:

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **Add New...** → **Project**
3. Import your GitHub repository
4. Click **Import**

### 3. Configure Environment Variables in Vercel

1. In the Vercel dashboard, select your project
2. Go to **Settings** → **Environment Variables**
3. Add the following:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key
   - **Environments**: Select `Production`, `Preview`, `Development`
4. Click **Add**

### 4. Deploy

The deployment starts automatically after connecting your repository. Vercel watches for changes to your `main` branch and redeploys automatically.

#### Manual Redeploy

```bash
vercel --prod
```

### 5. View Your Live Site

After deployment completes, visit your Vercel domain (e.g., `https://antwix.vercel.app`).

## 📊 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata & SEO
│   ├── page.tsx            # Home page (main entry)
│   ├── globals.css         # Global Tailwind styles
│   └── api/
│       └── send/
│           └── route.ts    # Email submission endpoint
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── Projects.tsx        # Live project previews
│   ├── Inquiry.tsx         # Email inquiry form
│   ├── Contact.tsx         # Contact information
│   └── Footer.tsx          # Footer with links
public/
├── manifest.json           # PWA manifest
├── robots.txt              # Search engine directives
└── favicon.ico             # Browser tab icon
```

## ⚙️ Key Technologies

| Technology | Purpose |
|-----------|---------|
| **Next.js 16** | React framework with App Router |
| **TypeScript** | Static type checking |
| **Tailwind CSS** | Utility-first CSS framework |
| **Framer Motion** | Animation library |
| **Resend** | Email API |
| **Lucide React** | Icon library (custom SVG fallbacks) |

## 🔧 Configuration

### Next.js Config (`next.config.js`)

- **Image Optimization**: AVIF and WebP formats
- **Package Imports**: Tree-shaking for lucide-react and framer-motion
- **Production**: Disabled source maps, header optimization

### Tailwind Config

- **Dark Mode**: Enabled by default
- **Extended Colors**: Blue-purple gradients
- **Animation**: Custom entrance animations

## 📧 Email Setup (Inquiry Form)

The inquiry form uses **Resend** for email delivery:

1. Fill out the form with project details
2. Submit triggers `POST /api/send`
3. Email sent to `antwix.an@gmail.com`
4. User receives confirmation message

**Note**: Resend's free tier includes 100 emails/day. Upgrade for higher limits.

## ♿ Accessibility Features

- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`)
- ARIA labels on interactive elements
- Form labels linked to inputs via `htmlFor`
- Keyboard navigation support
- Screen reader friendly

## 🚀 Performance Optimization

- **Images**: Lazy loading with `loading="lazy"`
- **CSS**: Purged unused Tailwind utilities
- **JavaScript**: Code splitting and tree-shaking
- **Fonts**: Google Fonts with subset optimization
- **Build**: ~45KB gzipped JavaScript bundle

## 🛡️ Security Best Practices

- Environment variables secured in Vercel (not committed to git)
- Content Security Policy headers ready for configuration
- No sensitive data in client-side code
- API errors handled gracefully

## 📝 Deployment Checklist

Before deploying to production:

- [ ] Test production build locally: `npm run build && npm run start`
- [ ] Verify all TypeScript checks pass: `npm run build`
- [ ] Confirm environment variables are set in Vercel
- [ ] Test the inquiry form with a test email
- [ ] Check Lighthouse scores: `npm run build` then audit with Chrome DevTools
- [ ] Verify SEO metadata with Open Graph debugger
- [ ] Test on mobile devices
- [ ] Monitor Vercel analytics and logs

## 🐛 Troubleshooting

### Build Fails with "API key" Error

**Issue**: `Missing API key. Pass it to the constructor`

**Solution**: Ensure `RESEND_API_KEY` is set in `.env.local` (dev) or Vercel environment variables (production).

### Styles Not Applying

**Issue**: Tailwind classes missing

**Solution**: Restart the dev server after modifying `tailwind.config.js`.

### Images Not Loading

**Issue**: 404 on `/public/` files

**Solution**: Verify files are in `public/` directory (not in `src/`).

### Deployment to Vercel Fails

**Issue**: Build error on Vercel but works locally

**Solution**: 
1. Clear `.next` folder: `rm -rf .next`
2. Rebuild: `npm run build`
3. Commit and push changes
4. Trigger manual redeploy in Vercel dashboard

## 📞 Support & Contact

- **Email**: antwix.an@gmail.com
- **Website**: https://antwix.vercel.app

## 📄 License

This project is proprietary and confidential. Unauthorized copying or distribution is prohibited.

## 🙏 Credits

- **Design**: ANtwix Team
- **Built with**: Next.js, TypeScript, Tailwind CSS, Framer Motion
- **Hosting**: Vercel
- **Email**: Resend
