# 🚀 Quick Start: Google Search Console

## 1. Go Here Now
👉 **https://search.google.com/search-console**

---

## 2. Add Property
- Click **"Add property"** (top left)
- Select **"URL prefix"** tab  
- Enter: **`https://antwix.lk`**
- Click **Continue**

---

## 3. Choose Verification Method
**You selected: DNS Verification** ✅

---

## 4. Get Your Code
Google will show you something like:

```
Name: @ (or antwix.lk)
Type: TXT
Value: google-site-verification=abc123def456ghi789
```

**👉 Copy the VALUE** starting with `google-site-verification=...`

---

## 5. Add to Your Domain Provider

Go to where you bought **antwix.lk**:
- GoDaddy? DNS settings
- NameCheap? Advanced DNS  
- Other? Look for DNS/Domain settings

**Add a TXT Record:**
- Host: `@`
- Type: `TXT`
- Value: `google-site-verification=...` (paste here)

✅ **Save**

---

## 6. Verify DNS (Optional Check)
Go to: https://mxtoolbox.com/
- Search: **antwix.lk**
- Look for your TXT record ✓

---

## 7. Verify in Google Search Console
⏱️ **Wait 24-48 hours** (DNS propagation)  
Then click **"Verify"** button in Google Search Console

---

## 8. After Verification ✅

### In Google Search Console:
1. **Sitemaps** → Add: `https://antwix.lk/sitemap.xml`
2. **URL Inspection** → Request indexing for homepage
3. **Performance** → Monitor rankings & clicks

---

## ⚡ If DNS is Taking Too Long

**Alternative: Use HTML Meta Tag**

1. Get code from Google Search Console (HTML tag option)
2. Update file: `src/app/layout.tsx`
3. Find this line:
   ```typescript
   verification: {
     google: "", // TODO: Paste your code here
   },
   ```
4. Paste code like:
   ```typescript
   verification: {
     google: "abc123def456ghi789jkl012mno345pqr678stu",
   },
   ```
5. Run:
   ```bash
   npm run build
   npm run start
   ```
6. Then verify in Google Search Console

---

## 📋 Checklist

- [ ] Go to Google Search Console
- [ ] Add property: https://antwix.lk
- [ ] Select DNS verification method
- [ ] Copy verification code
- [ ] Log into domain provider
- [ ] Add TXT DNS record
- [ ] Save DNS record
- [ ] Wait 24-48 hours
- [ ] Return to Google Search Console
- [ ] Click "Verify"
- [ ] Submit sitemap
- [ ] Request homepage indexing
- [ ] Monitor performance

---

**Still need help?** See: [GOOGLE_SEARCH_CONSOLE_GUIDE.md](./GOOGLE_SEARCH_CONSOLE_GUIDE.md)
