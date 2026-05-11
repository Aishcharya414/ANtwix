# ANtwix Deployment Guide

This guide walks you through deploying the ANtwix website to Vercel in production.

## Table of Contents

1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Environment Setup](#environment-setup)
3. [Local Testing](#local-testing)
4. [Vercel Deployment](#vercel-deployment)
5. [Post-Deployment Verification](#post-deployment-verification)
6. [Troubleshooting](#troubleshooting)

---

## Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All code changes are committed to `git`
- [ ] Repository is pushed to GitHub, GitLab, or Bitbucket
- [ ] You have a Resend account with API key
- [ ] You have a Vercel account
- [ ] Node.js 18.17+ is installed locally
- [ ] All dependencies are up to date: `npm install`

---

## Environment Setup

### Step 1: Create `.env.local` Locally

```bash
cp .env.example .env.local
```

Edit `.env.local` and add:

```env
RESEND_API_KEY=re_your_api_key_here
```

**Get Your Resend API Key:**

1. Go to https://resend.com
2. Sign up or log in
3. Navigate to **Settings** → **API Keys**
4. Copy your API key starting with `re_`
5. Paste into `.env.local`

### Step 2: Verify `.env.local` is Ignored

Check that `.gitignore` includes:

```
.env.local
.env*.local
```

**Never commit `.env.local` to git.**

---

## Local Testing

### Test Production Build Locally

```bash
# Clear previous build
rm -rf .next

# Create production build
npm run build

# Start production server
npm run start
```

Open http://localhost:3000 and verify:

- [ ] All pages load without errors
- [ ] Navigation works smoothly
- [ ] Project previews load via iframes
- [ ] Inquiry form submits successfully
- [ ] No console errors in DevTools

### Run TypeScript Check

```bash
npm run build
```

Ensure no TypeScript errors appear.

---

## Vercel Deployment

### Option A: Deploy via CLI (Recommended)

#### 1. Install Vercel CLI

```bash
npm install -g vercel
```

#### 2. Login to Vercel

```bash
vercel login
```

Follow the browser prompt to authenticate.

#### 3. Deploy

```bash
vercel
```

Answer the prompts:

- **Project name**: `antwix` (or your preferred name)
- **Directory**: `.` (current directory)
- **Build command**: Press Enter to use default
- **Output directory**: Press Enter to use default

#### 4. Set Environment Variables

After deployment completes:

```bash
vercel env add RESEND_API_KEY
```

Enter your Resend API key when prompted.

### Option B: Deploy via GitHub Integration

#### 1. Push Code to GitHub

```bash
git add .
git commit -m "Deploy ANtwix"
git push origin main
```

#### 2. Connect to Vercel

1. Go to https://vercel.com/dashboard
2. Click **Add New** → **Project**
3. Select **Import Git Repository**
4. Choose your GitHub repository
5. Click **Import**

#### 3. Configure Environment Variables

1. In Vercel Dashboard, select your project
2. Go to **Settings** → **Environment Variables**
3. Click **Add New**
4. **Name**: `RESEND_API_KEY`
5. **Value**: Your Resend API key
6. **Environments**: Select all (Production, Preview, Development)
7. Click **Add**

#### 4. Deploy

Click **Deploy**. Vercel will automatically:

- Build the project
- Run TypeScript checks
- Generate static content
- Deploy to a live URL

---

## Post-Deployment Verification

### 1. Check Deployment Status

Visit your Vercel deployment URL (e.g., https://antwix.vercel.app):

- [ ] Page loads without errors
- [ ] All styles render correctly
- [ ] Animations work smoothly
- [ ] Forms are interactive
- [ ] Images load properly

### 2. Test Email Functionality

1. Fill out the Inquiry form
2. Submit
3. Check that `antwix.an@gmail.com` receives the email
4. Verify the submission was successful

### 3. Check SEO Metadata

```bash
# View HTML meta tags by right-clicking → View Page Source
# Look for:
# - <title>ANtwix | Modern Web Development Agency</title>
# - <meta name="description" content="...">
# - <meta property="og:title" content="...">
```

### 4. Run Lighthouse Audit

1. Open the deployed site in Chrome
2. Open DevTools → **Lighthouse**
3. Run audit for **Performance, Accessibility, Best Practices, SEO**
4. Aim for scores > 80 in each category

### 5. Monitor Deployment

In Vercel Dashboard:

- [ ] Check **Deployments** tab for successful status
- [ ] Review **Analytics** for traffic and performance
- [ ] Check **Logs** for any errors

---

## Continuous Deployment

Once deployed via GitHub, Vercel automatically redeploys when:

- [ ] You push to the `main` branch
- [ ] Pull requests are created (preview deployment)
- [ ] Merge pull requests to `main`

### Manual Redeploy

If needed, manually redeploy from Vercel Dashboard:

1. Go to **Deployments**
2. Find the desired deployment
3. Click **Redeploy**

Or via CLI:

```bash
vercel --prod
```

---

## Production Domain Setup

### Add Custom Domain (Optional)

1. In Vercel Dashboard, go to **Settings** → **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `antwix.com`)
4. Follow DNS configuration instructions from your domain registrar
5. Verify domain ownership

---

## Monitoring & Maintenance

### Weekly Checks

- [ ] Review Vercel Analytics for traffic anomalies
- [ ] Check error logs in Vercel dashboard
- [ ] Monitor email delivery rate from Resend

### Monthly Updates

- [ ] Update dependencies: `npm outdated`
- [ ] Run security audit: `npm audit`
- [ ] Review and respond to form submissions
- [ ] Backup any important data

### Emergency Maintenance

If deployment fails:

1. **Rollback**: Go to Vercel **Deployments** and redeploy a previous working version
2. **Check Logs**: Review build logs in Vercel to identify the issue
3. **Local Fix**: Fix issue locally, test with `npm run build`
4. **Push & Redeploy**: Commit, push, and trigger new deployment

---

## Troubleshooting

### Build Fails: "API key missing"

**Cause**: `RESEND_API_KEY` not set in Vercel environment

**Fix**:
1. Go to Vercel **Settings** → **Environment Variables**
2. Add `RESEND_API_KEY` with your key
3. Redeploy: **Deployments** → **Redeploy**

### Styles Not Applying

**Cause**: Tailwind CSS not compiled

**Fix**:
1. Local: Restart dev server `npm run dev`
2. Vercel: Check **Logs** tab for CSS build errors
3. Redeploy after fix

### Images 404 Errors

**Cause**: Files not in `/public` directory

**Fix**:
1. Move images to `public/` folder
2. Reference as `/image-name.png` (not relative paths)
3. Redeploy

### Email Not Sending

**Cause**: Resend API key invalid or quota exceeded

**Fix**:
1. Verify API key in Vercel env vars
2. Check Resend dashboard for quota/errors
3. Resend free tier: 100 emails/day limit

### Deployment Hangs or Times Out

**Cause**: Build process taking too long

**Fix**:
1. Optimize images/assets
2. Clear `.next` cache: `rm -rf .next`
3. Update dependencies: `npm update`
4. Increase timeout if needed in `vercel.json`

### Cannot Access Site

**Cause**: DNS not propagated or domain misconfiguration

**Fix**:
1. Wait 24-48 hours for DNS propagation
2. Check Vercel domain settings
3. Verify DNS records with your registrar
4. Use Vercel's default domain temporarily

---

## Performance Optimization

After deployment, optimize further:

### 1. Enable Caching Headers

Request Vercel to add cache headers for assets (Vercel does this automatically for static files).

### 2. Reduce Build Size

```bash
# Analyze bundle size
npm install -D @next/bundle-analyzer

# Add to next.config.js and run
npm run build
```

### 3. Monitor Performance

- Use Chrome DevTools **Performance** tab
- Check Vercel **Analytics** for Core Web Vitals
- Target: LCP < 2.5s, FID < 100ms, CLS < 0.1

---

## Support & Next Steps

For issues:

1. Check Vercel **Logs** tab for error details
2. Review [Next.js Docs](https://nextjs.org/docs)
3. Contact ANtwix Team: antwix.an@gmail.com
4. Check [Resend Documentation](https://resend.com/docs) for email issues

---

## Summary

✅ You've successfully deployed ANtwix to Vercel!

**Next Steps:**
- [ ] Monitor first week for errors
- [ ] Collect user feedback
- [ ] Plan feature updates
- [ ] Set up analytics dashboard

**Deployed Site**: https://antwix.vercel.app
