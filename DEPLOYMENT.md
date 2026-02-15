# 🏆 The Worst Website Ever - Deployment Guide

## 🌐 Subdomain Recommendation

**Use: `legendary.maoz.dev`** ⭐⭐⭐⭐⭐

Perfect balance of irony and humor. "Legendary" quality... legendarily BAD!

### Other Great Options:
- `premium.maoz.dev` - Premium terrible design!
- `certified.maoz.dev` - Certified by GeoCities Hall of Fame
- `1999.maoz.dev` - Time capsule to the golden age
- `bonzi.maoz.dev` - Named after our purple friend

## 🚀 Deploy to Cloudflare Pages

### Quick Start

1. **Build locally first** (test it works):
   ```bash
   npm install
   npm run build
   npm run start  # Test the build
   ```

2. **Deploy via Cloudflare Dashboard**:
   - Go to Cloudflare Pages
   - Click "Create a project"
   - Connect to GitHub → Select `worst-site-ever`
   - Build settings:
     - Framework preset: **Next.js**
     - Build command: `npm run build`
     - Build output directory: `out`
     - Root directory: `/`
   - Click "Save and Deploy"

3. **Add Custom Domain**:
   - In Cloudflare Pages project → "Custom domains"
   - Add `legendary.maoz.dev`
   - In Cloudflare DNS for maoz.dev, add:
     ```
     Type: CNAME
     Name: legendary
     Target: [your-project].pages.dev
     Proxy: On (orange cloud)
     ```

### Via Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Login
wrangler login

# Build
npm run build

# Deploy
wrangler pages deploy out --project-name=worst-site-ever
```

## 📋 What's Been Configured

✅ `wrangler.toml` - Cloudflare Pages configuration (FIXED!)
- ⚠️ **Important:** Pages projects don't support `[build]` section in wrangler.toml
- Build command is configured in Cloudflare dashboard instead
- Only includes: name, pages_build_output_dir, compatibility_date

✅ `next.config.ts` - Static export for Pages  
✅ Build output to `out/` directory  

## 🎯 Next Steps

1. Choose your subdomain (I recommend `legendary.maoz.dev`)
2. Deploy to Cloudflare Pages
3. Add custom domain
4. **Submit to the hackathon!** 🏆

## 💡 Tips

- Test build locally before deploying
- Use Cloudflare dashboard for first deploy (easier)
- Build command goes in dashboard, NOT wrangler.toml
- Set up GitHub Actions for auto-deploy later
- Make sure DNS is properly configured

## 🔧 Troubleshooting

### Error: "Configuration file for Pages projects does not support 'build'"
**FIXED!** The wrangler.toml has been updated to remove the `[build]` section.
Build commands are configured in the Cloudflare Pages dashboard instead.

---

**Good luck winning the hackathon!** 🔥💜🐵
