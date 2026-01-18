
# GitHub Copilot – Project Instructions (Cloudflare Pages Edition)
## Italian Restaurant Website – Bávaro / El Cortecito
### Frontend-Only · WhatsApp-First · Tourist-Optimized · Cloudflare Pages Compatible

---

## 0. NON-NEGOTIABLE CONSTRAINTS

- ❌ No backend of any kind
- ❌ No server-side rendering
- ❌ No databases
- ❌ No authentication systems
- ❌ No private APIs
- ❌ No user accounts
- ❌ No secrets beyond provided keys

✅ Static frontend application only  
✅ Deployed on **Cloudflare Pages**  
✅ Uses **Vite + React**  
✅ Uses **jsonbin.io** as remote JSON storage  
✅ Uses **Cloudinary** for image uploads  
✅ WhatsApp-first ordering  

---

## 1. PROJECT PURPOSE

Build a **mobile-first, conversion-focused website** for an **authentic Italian restaurant in Bávaro / El Cortecito (Punta Cana, Dominican Republic)**.

Primary objectives:
- Convert tourists into **WhatsApp orders**
- Establish trust and professionalism
- Support Google Maps & Instagram traffic

Secondary objectives:
- Allow staff to edit menu, delivery settings, and testimonials via a frontend-only admin page

---

## 2. TARGET AUDIENCE CONTEXT

- International tourists
- English-first
- Spanish secondary
- Mobile devices
- Weak hotel Wi-Fi
- WhatsApp is expected
- Trust and clarity > features

---

## 3. FIXED TECH STACK (CLOUDFLARE PAGES SAFE)

**Frontend**
- Vite
- React
- TypeScript
- Tailwind CSS

**Hosting**
- Cloudflare Pages (static build)

**Storage**
- Cloudinary (images)
- jsonbin.io (JSON data)

---

## 4. EXTERNAL SERVICES

### 4.1 Cloudinary

- Used for dish images and optional gallery images
- Client-side uploads only
- Images may be public

**Cloudinary key**
```
dkxlhxpe4
```

---

### 4.2 jsonbin.io

Used for:
- Menu (multilingual)
- Prices
- Availability
- Delivery settings
- Testimonials
- All editable variables

**jsonbin.io API key**
```
$2a$10$O.OU0pIRgV/JRXJt3aTLW.W/.wgF3ISPaTXWVGaSS9QQ3EpRuJw1a
```

---

## 5. DATA MODELS

### Menu JSON

```json
{
  "categories": [
    {
      "id": "pizza",
      "label": { "en": "Pizza", "es": "Pizza" },
      "items": [
        {
          "id": "margherita",
          "name": { "en": "Margherita", "es": "Margarita" },
          "description": {
            "en": "Tomato, mozzarella, basil",
            "es": "Tomate, mozzarella, albahaca"
          },
          "price": 590,
          "image": "cloudinary-url",
          "available": true
        }
      ]
    }
  ]
}
```

---

### Delivery Settings JSON

```json
{
  "deliveryEnabled": true,
  "deliveryFee": 150,
  "deliveryTime": "35–45 min",
  "pickupEnabled": true
}
```

---

### Testimonials JSON

```json
{
  "testimonials": [
    {
      "name": "John D.",
      "source": "WhatsApp",
      "language": "en",
      "message": "Best Italian food we had in Punta Cana!",
      "approved": true,
      "date": "2026-01-15"
    }
  ]
}
```

---

## 6. CORE USER FLOWS

### Tourist Flow

1. Open website
2. See hero section and WhatsApp CTA
3. Browse menu
4. Click “Order on WhatsApp”
5. WhatsApp opens with prefilled message

---

### Testimonial Flow

1. Restaurant sends WhatsApp message after delivery requesting feedback
2. Customer replies
3. Staff adds testimonial via admin page
4. Stored in jsonbin.io
5. Displayed on website

---

## 7. ADMIN PAGE

**Route:** `/admin`

- Simple hardcoded token or OTP (frontend-only, trusted environment)
- Mobile-first UI

### Admin Capabilities

- Edit menu (EN/ES)
- Edit descriptions
- Edit prices
- Toggle availability
- Upload images (Cloudinary)
- Edit delivery settings
- Add / approve testimonials

All changes update jsonbin.io directly via fetch.

---

## 8. DESIGN SYSTEM

### Italian elegance
- Serif headings
- Warm neutral palette
- Elegant spacing

### Caribbean hint
- Light backgrounds
- Airy layout
- Natural accent colors

Avoid clichés, heavy animations, PDFs, and stock-photo feel.

---

## 9. CONTENT & LANGUAGE

- English default
- Spanish secondary
- Persistent language toggle
- Prices always visible
- Currency: DOP

---

## 10. FILE STRUCTURE

```
/src
  /pages
    Home.tsx
    Admin.tsx
  /components
    Header.tsx
    MenuGrid.tsx
    DishCard.tsx
    WhatsAppCTA.tsx
    Testimonials.tsx
    LanguageToggle.tsx
  /lib
    jsonbin.ts
    cloudinary.ts
    whatsapp.ts
  /styles
    index.css
  main.tsx
  App.tsx
index.html
vite.config.ts
```

---

## 11. DEVELOPMENT PHASES & GIT COMMITS (MANDATORY)

Each phase must end with a git commit.

1. **Project scaffold**
   - Vite + React + TypeScript
   - Tailwind configured
   - Cloudflare Pages compatible build
   - Commit: `chore: scaffold project`

2. **Layout & branding**
   - Header, footer, hero
   - Language toggle
   - WhatsApp CTA
   - Commit: `feat: base layout and branding`

3. **Menu system**
   - JSONBin integration
   - Menu display
   - Categories and dishes
   - Commit: `feat: menu display from jsonbin`

4. **Admin page**
   - Admin route
   - CRUD menu
   - Delivery settings
   - Commit: `feat: admin menu and delivery editor`

5. **Cloudinary uploads**
   - Image upload integration
   - Image replacement in menu
   - Commit: `feat: cloudinary image uploads`

6. **Testimonials**
   - Testimonial display
   - Admin testimonial editor
   - Commit: `feat: testimonials system`

7. **Polish & optimization**
   - Mobile UX
   - Performance tuning
   - Copy refinement
   - Commit: `chore: polish and optimize`

---

## 12. ACCEPTANCE CRITERIA

- Fully static build
- Deployable to Cloudflare Pages
- Menu editable via admin
- JSON stored in jsonbin.io
- Images stored in Cloudinary
- WhatsApp CTA always visible
- EN / ES language toggle works
- No backend code present

---

## FINAL NOTE

This is a **conversion-focused tourist restaurant website**.

WhatsApp > Website  
Trust > Features  
Simplicity > Security  

