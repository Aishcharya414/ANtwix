# Google Search Console Verification Guide

## Overview
This guide walks you through verifying **antwix.lk** in Google Search Console using DNS verification.

---

## Method: DNS Verification (Your Choice)

### Why DNS Verification?
✅ Works with Vercel/deployed sites  
✅ No need to upload files or restart server  
✅ Permanent and reliable  
✅ Shows domain authority for all subdomains  

---

## Step-by-Step Instructions

### 1️⃣ Start Google Search Console Verification

**Go to:** https://search.google.com/search-console

1. Click **"Add property"** in the top-left
2. Select the **"URL prefix"** tab
3. Enter your domain: `https://antwix.lk`
4. Click **"Continue"**

### 2️⃣ Get Your Verification Code

Google will show you:
```
Verify ownership by adding a DNS TXT record

Name: antwix.lk (or @ depending on provider)
Type: TXT
Value: google-site-verification=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

**👉 COPY this entire value** (everything after `google-site-verification=`)

### 3️⃣ Add DNS Record to Your Domain Provider

#### If you use **GoDaddy**:
1. Go to godaddy.com and sign in
2. Click **"My Products"** → **"Domains"**
3. Find **antwix.lk**, click **"DNS"** button
4. Click **"Add Record"** → Select **"TXT"**
5. In the **Name** field, enter: `@`
6. In the **Value** field, paste: `google-site-verification=...`
7. Click **"Save"**

#### If you use **NameCheap**:
1. Go to namecheap.com and sign in
2. Go to **"Domain List"** → Find **antwix.lk**
3. Click **"Manage"** → Go to **"Advanced DNS"** tab
4. Click **"Add New Record"** → Select **"TXT Record"**
5. **Host**: `@`
6. **Value**: `google-site-verification=...`
7. Click **"Save Changes"**

#### If you use **Domains.com**:
1. Sign in at domains.com
2. Click **"My Domains"**
3. Find **antwix.lk**, click **"Manage"**
4. Go to **"DNS Settings"**
5. Click **"Add Record"** → **"TXT"**
6. **Name**: `@`
7. **Data**: `google-site-verification=...`
8. Click **"Save"**

#### Other registrars:
The process is similar:
- Find DNS/Domain Settings
- Add TXT record
- Set Host to `@`
- Paste verification code as value

### 4️⃣ Wait for DNS Propagation

⏱️ **This can take 24-48 hours**

You can check if it's propagated:
- Go to: https://mxtoolbox.com/
- Search for: `antwix.lk`
- Look for your TXT record in the DNS results

### 5️⃣ Verify in Google Search Console

1. Return to Google Search Console
2. Click **"Verify"** button
3. Wait for confirmation ✅

If it doesn't verify immediately, wait 24 hours and try again.

---

## Alternative: Add HTML Meta Tag (Backup)

While DNS propagates, you can also add verification to your site code:

### Get Meta Tag Code from Google
In Google Search Console, look for the **HTML tag** option:
```html
<meta name="google-site-verification" content="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" />
```

### Add to Your Site

**File:** `src/app/layout.tsx`

```typescript
verification: {
  google: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", // Paste the long string here
},
```

Then rebuild and deploy:
```bash
npm run build
npm run start
# Or redeploy to Vercel
```

---

## ✅ After Verification Success

Once verified (checkmark appears in Google Search Console):

### 1. **Submit Your Sitemap**
1. Go to **Google Search Console** → Your property
2. Left sidebar → **"Sitemaps"**
3. Enter: `https://antwix.lk/sitemap.xml`
4. Click **"Submit"**

### 2. **Request Indexing**
1. In Google Search Console, go to **"URL Inspection"**
2. Enter: `https://antwix.lk`
3. Click **"Request Indexing"**

### 3. **Monitor Performance**
- **Performance**: See clicks, impressions, rankings
- **Coverage**: Check for indexing issues
- **Enhancements**: View rich snippets and structured data

---

## 🔍 Verify Your Structured Data

While waiting for DNS verification:

1. Go to: https://schema.org/validator/
2. Paste your site URL: `https://antwix.lk`
3. Check that your organization schema is recognized
4. Should show:
   - ✅ ProfessionalService
   - ✅ Organization details (name, phone, email, address)
   - ✅ Website structured data

---

## 📊 Typical Timeline

| Day | Status |
|-----|--------|
| Day 1 | Add DNS record, Google can't find it yet |
| Day 1-2 | DNS propagates globally (16-48 hours) |
| Day 2-3 | Google finds verification code |
| Day 3 | Verification completes ✅ |

---

## ⚠️ Troubleshooting

### "Verification Failed"
- **Check**: Did you copy the entire verification code correctly?
- **Wait**: DNS can take up to 48 hours
- **Verify**: Use mxtoolbox.com to confirm TXT record exists
- **Try HTML tag method** as backup (requires rebuild)

### "Verification Pending"
- This is normal - can take 1-3 days
- Click "Verify" again after 24 hours
- Check that TXT record is exactly correct (no extra spaces)

### "Still Not Working After 48 Hours"
- Use mxtoolbox.com to verify TXT record is live
- Try the **HTML meta tag method** instead (faster)
- Contact your domain registrar support

---

## 📌 Quick Reference

**Your Domain:** antwix.lk  
**Verification Method:** DNS TXT Record  
**Next Step:** Add TXT record to your domain provider  
**Timeframe:** 24-48 hours  
**Then:** Submit sitemap and request indexing  

---

## 🎯 What's Next

1. ✅ Add DNS TXT record (this guide)
2. ⏳ Wait 24-48 hours for propagation
3. ✅ Click "Verify" in Google Search Console
4. ✅ Submit sitemap
5. ✅ Request homepage indexing
6. 📊 Monitor performance in Google Search Console

---

**Questions?** Check Google Search Console help:  
https://support.google.com/webmasters/answer/9008080

**Need more info on DNS?**  
https://support.google.com/webmasters/answer/9212871
