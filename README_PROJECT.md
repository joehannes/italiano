# Ristorante Italiano - Bávaro

A modern, mobile-first Italian restaurant website for Punta Cana, Dominican Republic. Built with Vite + React + TypeScript + Tailwind CSS, fully compatible with Cloudflare Pages.

## Features

✨ **Tourist-Optimized**
- English and Spanish language toggle
- WhatsApp-first ordering system
- Mobile-responsive design
- Fast loading on weak hotel Wi-Fi

🍝 **Menu Management**
- Dynamic menu display from JSONBin
- Admin panel for CRUD operations
- Multi-language support (EN/ES)
- Real-time price updates

📸 **Image Management**
- Cloudinary integration for image uploads
- Drag-and-drop in admin panel
- Automatic image optimization

⭐ **Testimonials**
- Customer review display
- Admin approval workflow
- Multi-source support (WhatsApp, Google, etc.)

🚀 **Developer-Friendly**
- Built with modern React patterns
- TypeScript for type safety
- Tailwind CSS for rapid styling
- Fully static - deploys to Cloudflare Pages

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Storage**: JSONBin.io
- **Images**: Cloudinary
- **Hosting**: Cloudflare Pages

## Project Structure

```
src/
  /pages
    Home.tsx          # Main public website
    Admin.tsx         # Admin dashboard
  /components
    Header.tsx        # Navigation header
    Footer.tsx        # Footer
    Hero.tsx          # Hero section
    MenuGrid.tsx      # Menu grid layout
    DishCard.tsx      # Individual dish card
    Testimonials.tsx  # Customer testimonials
    WhatsAppCTA.tsx   # WhatsApp call-to-action
    LanguageToggle.tsx # Language switcher
    AdminAuth.tsx     # Admin authentication
    MenuEditor.tsx    # Menu CRUD editor
    DeliveryEditor.tsx # Delivery settings
    TestimonialEditor.tsx # Testimonial management
    ImageUploader.tsx  # Cloudinary uploader
    MobileMenu.tsx    # Mobile navigation
  /lib
    jsonbin.ts        # JSONBin.io integration
    cloudinary.ts     # Cloudinary integration
```

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Configuration

### JSONBin.io Setup

The app uses JSONBin.io for data storage:

1. **API Key**: `$2a$10$O.OU0pIRgV/JRXJt3aTLW.W/.wgF3ISPaTXWVGaSS9QQ3EpRuJw1a`
2. **Bins Created**:
   - `italiano_menu` - Menu data
   - `italiano_delivery` - Delivery settings
   - `italiano_testimonials` - Customer reviews

### Cloudinary Setup

1. **Cloud Name**: `dkxlhxpe4`
2. **Setup Steps**:
   - Create an unsigned upload preset named `italiano_uploads`
   - Configure in Cloudinary dashboard
   - Allow public uploads for menu images

### WhatsApp Integration

Update the phone number in `src/components/WhatsAppCTA.tsx`:

```typescript
const phoneNumber = 'YOUR_WHATSAPP_NUMBER' // e.g., '18095551234'
```

### Admin Access

Default admin token: `italiano2024`

Change in `src/components/AdminAuth.tsx`:

```typescript
const ADMIN_TOKEN = 'your-secure-token'
```

## Deployment

### Cloudflare Pages

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Build output directory: `dist`
4. Environment variables (if any custom ones)

The app is fully static and requires no server-side code.

## Data Models

### Menu JSON Structure

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
          "description": { "en": "Tomato, mozzarella, basil", "es": "..." },
          "price": 590,
          "image": "https://res.cloudinary.com/...",
          "available": true
        }
      ]
    }
  ]
}
```

### Delivery Settings

```json
{
  "deliveryEnabled": true,
  "deliveryFee": 150,
  "deliveryTime": "35–45 min",
  "pickupEnabled": true
}
```

### Testimonials

```json
{
  "testimonials": [
    {
      "name": "John D.",
      "source": "WhatsApp",
      "language": "en",
      "message": "Best Italian food in Punta Cana!",
      "approved": true,
      "date": "2026-01-15"
    }
  ]
}
```

## Development

### Available Scripts

```bash
npm run dev      # Start Vite dev server
npm run build    # Production build
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

### Mobile Testing

Test mobile viewport using browser dev tools:
- Chrome: Toggle device toolbar (Ctrl+Shift+M)
- Firefox: Responsive Design Mode (Ctrl+Shift+M)
- Safari: Enable responsive design mode

### Performance Tips

- Use `loading="lazy"` on dish images
- Compress images before uploading to Cloudinary
- Keep descriptions concise
- Minimize admin panel edits during peak hours

## Features By Phase

### Phase 1: Scaffold ✓
- Vite + React + TypeScript setup
- Tailwind CSS configured
- Cloudflare Pages compatible

### Phase 2: Layout & Branding ✓
- Header, Footer, Hero section
- Language toggle (EN/ES)
- WhatsApp CTA button

### Phase 3: Menu System ✓
- JSONBin integration
- Menu display with categories
- Multi-language support

### Phase 4: Admin Panel ✓
- Authentication (token-based)
- Menu CRUD editor
- Delivery settings editor

### Phase 5: Image Uploads ✓
- Cloudinary integration
- Admin image uploader
- Menu image replacement

### Phase 6: Testimonials ✓
- Testimonial display on homepage
- Admin testimonial manager
- Approval workflow

### Phase 7: Polish & Optimization ✓
- Mobile menu (hamburger)
- Touch-friendly UI
- Performance optimizations
- Enhanced styling

## Environment Variables

No environment variables needed for production deployment (all keys are embedded).

For local development with custom settings, create `.env.local`:

```
VITE_JSONBIN_KEY=your-key
VITE_CLOUDINARY_NAME=your-cloud-name
```

## License

This project is proprietary software for Ristorante Italiano.

## Support

For issues or questions:
1. Check the TODO.md for specifications
2. Review component documentation in code
3. Test in mobile browser first

---

Built with ❤️ for authentic Italian cuisine in Punta Cana.
