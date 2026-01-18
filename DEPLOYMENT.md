# Deployment Checklist

## Pre-Deployment

- [x] All 7 phases completed
- [x] Build passing (`npm run build` succeeds)
- [x] No console errors in dev server
- [x] Mobile responsive design tested
- [x] All routes working (/, /admin)
- [x] Language toggle functional (EN/ES)
- [x] WhatsApp CTA working

## Cloudflare Pages Setup

### 1. Repository Connection
- Push to GitHub repository
- Connect repository to Cloudflare Pages
- Select branch: `main`

### 2. Build Configuration
- Build command: `npm run build`
- Build output directory: `dist`
- Leave environment variables empty (all keys embedded)

### 3. Environment (Optional)
```
VITE_JSONBIN_KEY=$2a$10$O.OU0pIRgV/JRXJt3aTLW.W/.wgF3ISPaTXWVGaSS9QQ3EpRuJw1a
VITE_CLOUDINARY_NAME=dkxlhxpe4
```

## Pre-Launch Verification

### JSONBin Setup
- [ ] Create bin: `italiano_menu` with sample data
- [ ] Create bin: `italiano_delivery` with settings
- [ ] Create bin: `italiano_testimonials` with sample testimonial
- [ ] Test read/write from admin panel

### Cloudinary Setup
- [ ] Cloudinary account created
- [ ] Cloud name: `dkxlhxpe4`
- [ ] Create unsigned upload preset: `italiano_uploads`
- [ ] Test image upload from admin panel

### WhatsApp Integration
- [ ] Restaurant WhatsApp number set in `WhatsAppCTA.tsx`
- [ ] Test WhatsApp link opens correctly on mobile
- [ ] Verify message pre-fill works

### Admin Access
- [ ] Admin token set and secure
- [ ] Admin panel accessible at `/admin`
- [ ] Menu editor fully functional
- [ ] Delivery editor fully functional
- [ ] Testimonial editor fully functional

## Post-Launch

### Monitoring
- [ ] Monitor Cloudflare Pages build logs
- [ ] Check Core Web Vitals in PageSpeed Insights
- [ ] Monitor error rates in Cloudflare Analytics

### Content Seeding
- [ ] Add real menu items
- [ ] Upload product images
- [ ] Add initial testimonials
- [ ] Update delivery settings
- [ ] Verify pricing in DOP currency

### Marketing
- [ ] Share admin panel access with staff
- [ ] Train staff on menu editing
- [ ] Set up Google Maps link
- [ ] Link from Instagram bio
- [ ] Test WhatsApp ordering flow

## Performance Targets

- [x] Fully static build (no server required)
- [x] < 300KB gzip JavaScript
- [x] Responsive design (mobile-first)
- [x] Multi-language support
- [x] Image optimization ready

## Files to Monitor

- `src/components/WhatsAppCTA.tsx` - Phone number
- `src/components/AdminAuth.tsx` - Admin token
- `src/lib/jsonbin.ts` - JSONBin keys
- `src/lib/cloudinary.ts` - Cloudinary settings

## Rollback Plan

If issues occur:
1. Revert to previous commit: `git revert <commit-hash>`
2. Cloudflare will auto-rebuild
3. Check build logs for errors
4. Review changes in problematic commit

## Support Contacts

- Cloudflare Pages: https://support.cloudflare.com
- JSONBin API: https://jsonbin.io/docs
- Cloudinary Support: https://support.cloudinary.com
