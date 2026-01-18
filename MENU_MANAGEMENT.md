# 🍝 Menu Management - Quick Reference

## Live Menu Data Location
All menu data is stored on **JSONBin.io** and synced automatically to your website.

### Access Links
- **Menu Editor**: https://jsonbin.io/app/bins/italiano_menu
- **Testimonials**: https://jsonbin.io/app/bins/italiano_testimonials
- **Delivery Settings**: https://jsonbin.io/app/bins/italiano_delivery

---

## Quick Actions

### Add a New Pizza
1. Go to: https://jsonbin.io/app/bins/italiano_menu
2. Find the `"pizza"` category
3. Add a new item object to the `"items"` array:
```json
{
  "id": "unique_id",
  "name": { "en": "Pizza Name", "es": "Nombre en Español" },
  "description": { "en": "English desc...", "es": "Descripción en español..." },
  "price": 650,
  "image": "https://your-image-url.jpg",
  "available": true
}
```
4. Click "Save"
5. The menu updates automatically on your website (usually within 1 minute)

### Hide an Item Temporarily
1. Find the item in JSONBin
2. Change `"available": true` to `"available": false`
3. Click "Save"
4. Item disappears from menu instantly

### Update Prices
1. Find the item
2. Change the `"price"` number
3. Click "Save"

### Change Delivery Time
1. Go to: https://jsonbin.io/app/bins/italiano_delivery
2. Update `"deliveryTime": "new-time"`
3. Click "Save"

### Add a Customer Testimonial
1. Go to: https://jsonbin.io/app/bins/italiano_testimonials
2. Add to the `"testimonials"` array:
```json
{
  "name": "Customer Name",
  "source": "WhatsApp",
  "language": "en",
  "message": "Your testimonial here...",
  "approved": true,
  "date": "2026-01-18"
}
```
3. Click "Save"

---

## How Items Work in Code

Items automatically display on these pages:
- **Home Page** - Shows menu with language toggle
- **Menu Categories** - Organized by category
- **Admin Panel** - Can edit items (when admin features enabled)

JavaScript automatically:
- Fetches data from JSONBin every page load
- Converts prices and displays in DOP
- Shows/hides items based on `"available"` flag
- Switches between English/Spanish based on user selection

---

## Pricing in Dominican Peso (DOP)

Current price range: **120 - 1,200 DOP**

Examples:
- Cappuccino: 180 DOP (~$3.50 USD)
- Pizza: 590-800 DOP (~$11-15 USD)
- Osso Buco: 1,200 DOP (~$22 USD)

---

## Image URLs

All items use placeholder images. To replace with real food photos:

1. Upload images to Cloudinary or your image host
2. Get the image URL
3. Update `"image"` field in JSONBin with new URL

Example:
```json
"image": "https://your-domain.com/images/margherita-pizza.jpg"
```

---

## Category Structure

The menu has 7 categories with subcategories:

```
Pizza (5 items)
Pasta (6 items)
Risotto (3 items)
Main Courses (4 items)
Appetizers (5 items)
Desserts (5 items)
Beverages (4 items)
```

To add a new category, contact your developer.

---

## Troubleshooting

**Menu not updating after I saved?**
- Wait 60 seconds - the app re-fetches data periodically
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check that changes were actually saved in JSONBin

**Item showing but shouldn't be?**
- Check `"available": false` was saved
- Refresh the page

**Price wrong?**
- Verify the number has no letters or special characters
- Save again

**Can't edit JSONBin?**
- Make sure you're logged into JSONBin.io
- Check your internet connection
- Try a different browser

---

## JSONBin API Reference

For developers needing to automate menu updates:

```bash
# Get menu data
curl https://api.jsonbin.io/v3/b/italiano_menu \
  -H "X-Master-Key: $API_KEY"

# Update menu
curl https://api.jsonbin.io/v3/b/italiano_menu \
  -X PUT \
  -H "Content-Type: application/json" \
  -H "X-Master-Key: $API_KEY" \
  -d @menu.json
```

API Key is stored in: `src/lib/jsonbin.ts` (JSONBIN_API_KEY)

---

## Statistics

- **Total Menu Items**: 32
- **Categories**: 7
- **Supported Languages**: English, Spanish
- **Average Price**: ~630 DOP
- **Delivery Fee**: 150 DOP
- **Average Delivery Time**: 35-45 minutes

---

Last Updated: 2026-01-18
Menu Version: 1.0
