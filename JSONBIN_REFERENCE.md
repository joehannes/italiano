# 🍝 JSONBIN REFERENCE CARD

## 📊 BIN IDs & URLs

| Name | Bin ID | Edit URL |
|------|--------|----------|
| **Menu** | `696d181a43b1c97be9391b5b` | [Edit Menu](https://jsonbin.io/app/bins/696d181a43b1c97be9391b5b) |
| **Testimonials** | `696d181c43b1c97be9391b64` | [Edit Testimonials](https://jsonbin.io/app/bins/696d181c43b1c97be9391b64) |
| **Delivery** | `696d181fae596e708fe4f0ec` | [Edit Delivery](https://jsonbin.io/app/bins/696d181fae596e708fe4f0ec) |

---

## 🔑 API Key

```
$2a$10$AQDUTc98/a7VZDst9abOVeGzfRB4uKCW/xlo0Ow7T7PAdQFmDkdfW
```

---

## 🚀 Quick Commands

### Change Pizza Price
1. https://jsonbin.io/app/bins/696d181a43b1c97be9391b5b
2. Find: `"id": "margherita"`
3. Edit: `"price": 590` → `"price": 750`
4. Save!

### Hide Menu Item
1. Find the item
2. Change: `"available": true` → `"available": false`
3. Save!

### Add Testimonial
1. https://jsonbin.io/app/bins/696d181c43b1c97be9391b64
2. Add to array:
```json
{
  "name": "Customer Name",
  "source": "WhatsApp",
  "language": "en",
  "message": "Great food!",
  "approved": true,
  "date": "2026-01-20"
}
```
3. Save!

### Update Delivery Time
1. https://jsonbin.io/app/bins/696d181fae596e708fe4f0ec
2. Edit: `"deliveryTime": "30–40 min"`
3. Save!

---

## 📋 Menu Structure (32 Items)

```
Categories:
  Pizza (5 items)
  Pasta (6 items)
  Risotto (3 items)
  Main Courses (4 items)
  Appetizers (5 items)
  Desserts (5 items)
  Beverages (4 items)
```

Each item has:
- `id` - Unique identifier
- `name` - { en, es }
- `description` - { en, es }
- `price` - In DOP
- `image` - Image URL
- `available` - true/false

---

## 💬 Testimonials Structure (4 Items)

```
Fields:
  name - Customer name
  source - "WhatsApp", "Email", etc.
  language - "en" or "es"
  message - Review text
  approved - true/false (only approved show)
  date - "YYYY-MM-DD"
```

---

## ⚙️ Delivery Settings

```json
{
  "deliveryEnabled": true,
  "deliveryFee": 150,
  "deliveryTime": "35–45 min",
  "pickupEnabled": true
}
```

---

## 🌐 Website Integration

**Code File**: `src/lib/jsonbin.ts`

**Fetch Functions**:
- `fetchMenuData()` - Gets menu from bin
- `fetchTestimonials()` - Gets testimonials  
- `fetchDeliverySettings()` - Gets delivery info

**Update Frequency**: Every page load, or within 60 seconds of JSONBin save

---

## ✅ Verification Checklist

- ✅ All 3 bins created on JSONBin.io
- ✅ API key configured in code
- ✅ Website fetches data on startup
- ✅ Menu items display correctly
- ✅ Language toggle works (EN/ES)
- ✅ Testimonials load
- ✅ Delivery settings apply
- ✅ No errors in console
- ✅ Changes persist on JSONBin

---

## 🎯 For Development

**Test Data Location**: `/menus/` folder
- menu.json
- testimonials.json
- delivery.json

**API Endpoint**: `https://api.jsonbin.io/v3/b/{BIN_ID}`

**Request Header**: 
```
X-Master-Key: $2a$10$AQDUTc98/a7VZDst9abOVeGzfRB4uKCW/xlo0Ow7T7PAdQFmDkdfW
```

---

**Last Updated**: 2026-01-18  
**Status**: ✅ Active & Verified
