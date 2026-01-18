# 🍝 Ristorante Italiano - Complete Menu Data

## Overview
All menu data, delivery settings, and testimonials are stored on **JSONBin.io** and can be edited directly.

### JSONBin Bins
- **Menu**: https://jsonbin.io/app/bins/italiano_menu
- **Delivery Settings**: https://jsonbin.io/app/bins/italiano_delivery
- **Testimonials**: https://jsonbin.io/app/bins/italiano_testimonials

---

## 📋 Menu Structure

### Pizza (5 items)
| Name (EN) | Name (ES) | Description | Price DOP |
|-----------|-----------|-------------|-----------|
| Margherita | Margarita | Fresh mozzarella, tomato, basil | 590 |
| Pepperoni | Pepperoni | Mozzarella, tomato sauce, pepperoni | 650 |
| Quattro Formaggi | Cuatro Quesos | Mozzarella, parmesan, gorgonzola, ricotta | 720 |
| Prosciutto & Arugula | Prosciutto & Rúcula | Mozzarella, prosciutto, fresh arugula, parmesan | 750 |
| Lasagna Pizza | Pizza Lasaña | Layered pasta, bolognese sauce, mozzarella, béchamel | 800 |

### Pasta (6 items)
| Name (EN) | Name (ES) | Description | Price DOP |
|-----------|-----------|-------------|-----------|
| Spaghetti Carbonara | Espagueti Carbonara | Eggs, guanciale, pecorino, black pepper | 580 |
| Spaghetti Bolognese | Espagueti a la Boloñesa | Ground beef ragù, tomato sauce, parmesan | 560 |
| Penne al Pesto | Penne al Pesto | Fresh basil pesto, pine nuts, garlic, parmesan | 600 |
| Fettuccine Alfredo | Fettuccine Alfredo | Butter, cream, parmesan sauce | 620 |
| Spaghetti ai Frutti di Mare | Espagueti Marinero | Shrimp, mussels, clams, garlic, white wine | 850 |
| Ravioli di Ricotta | Ravioli de Ricota | Spinach & ricotta filled ravioli, butter sage sauce | 680 |

### Risotto (3 items)
| Name (EN) | Name (ES) | Description | Price DOP |
|-----------|-----------|-------------|-----------|
| Risotto alla Milanese | Risotto a la Milanesa | Arborio rice, saffron, beef broth, butter, parmesan | 700 |
| Risotto ai Frutti di Mare | Risotto Marinero | Arborio rice, seafood, white wine, saffron | 880 |
| Risotto ai Funghi | Risotto de Champiñones | Arborio rice, mixed mushrooms, truffle oil, parmesan | 750 |

### Main Courses (4 items)
| Name (EN) | Name (ES) | Description | Price DOP |
|-----------|-----------|-------------|-----------|
| Osso Buco | Osso Buco | Braised veal shank, tomato sauce, served with risotto | 1200 |
| Chicken Parmigiana | Pollo a la Parmesana | Breaded chicken, mozzarella, parmesan, tomato sauce | 720 |
| Veal Piccata | Ternera Piccata | Thin veal slices, lemon, capers, white wine sauce | 950 |
| Branzino al Forno | Lubina al Horno | Whole sea bass, olive oil, herbs, roasted potatoes | 1100 |

### Appetizers (5 items)
| Name (EN) | Name (ES) | Description | Price DOP |
|-----------|-----------|-------------|-----------|
| Bruschetta al Pomodoro | Bruschettas de Tomate | Toasted bread, fresh tomatoes, garlic, basil, olive oil | 350 |
| Caprese Salad | Ensalada Caprese | Fresh mozzarella, tomatoes, basil, olive oil, balsamic | 420 |
| Arancini | Arancini | Golden fried risotto balls, ragù, mozzarella, marinara sauce | 480 |
| Calamari Fritti | Calamares Fritos | Crispy fried squid rings, marinara dipping sauce | 520 |
| Mozzarella Sticks | Bastones de Mozzarella | Fried mozzarella, marinara sauce | 380 |

### Desserts (5 items)
| Name (EN) | Name (ES) | Description | Price DOP |
|-----------|-----------|-------------|-----------|
| Tiramisu | Tiramisú | Ladyfinger cookies, mascarpone, coffee, cocoa | 320 |
| Panna Cotta | Panna Cotta | Silky cream custard, berry coulis | 300 |
| Panna Cotta Pistachio | Panna Cotta de Pistacho | Pistachio cream custard, chocolate crumble | 350 |
| Panna Cotta Vanilla | Panna Cotta de Vainilla | Madagascar vanilla cream custard, caramel drizzle | 320 |
| Gelato | Gelato | Italian ice cream - ask about flavors | 280 |

### Beverages (4 items)
| Name (EN) | Name (ES) | Description | Price DOP |
|-----------|-----------|-------------|-----------|
| Italian Soda | Refresco Italiano | Sparkling water with fruit syrup and cream | 180 |
| Espresso | Espresso | Strong Italian coffee | 120 |
| Cappuccino | Capuchino | Espresso with steamed milk and foam | 180 |
| Limoncello Shot | Chupito de Limoncello | Traditional Italian lemon liqueur | 150 |

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

## 💬 Testimonials

### English
1. **John D.** (WhatsApp, 2026-01-15)
   - "Best Italian food we had in Punta Cana!"

2. **Sophie L.** (WhatsApp, 2026-01-17)
   - "Fantastic quality and super fast delivery. Highly recommend!"

### Spanish
1. **María G.** (WhatsApp, 2026-01-16)
   - "¡La mejor comida italiana que hemos probado en Punta Cana! Muy fresco y delicioso."

2. **Carlos M.** (WhatsApp, 2026-01-18)
   - "Excelente servicio y comida auténtica. ¡Pedimos cada semana!"

---

## 📊 Summary Statistics
- **Total Categories**: 7
- **Total Items**: 32
- **Languages Supported**: English & Spanish
- **Price Range**: 120 DOP - 1,200 DOP
- **Average Item Price**: ~630 DOP

---

## 🔧 How to Edit

### Via JSONBin Dashboard
1. Go to https://jsonbin.io/app/bins
2. Click on each bin (italiano_menu, italiano_delivery, italiano_testimonials)
3. Edit the JSON directly
4. Click "Save"

### Via API (cURL)
```bash
# Get current data
curl https://api.jsonbin.io/v3/b/italiano_menu \
  -H "X-Master-Key: $JSONBIN_API_KEY"

# Update data
curl https://api.jsonbin.io/v3/b/italiano_menu \
  -X PUT \
  -H "Content-Type: application/json" \
  -H "X-Master-Key: $JSONBIN_API_KEY" \
  -d '{ "categories": [...] }'
```

### In Code
Changes made in the Admin panel will update JSONBin automatically via the provided `saveMenuData()` function in `src/lib/jsonbin.ts`.

---

## 🚀 Notes for Restaurant Staff
- All prices are in **Dominican Peso (DOP)**
- Items are marked as **available: true** by default
- Set **available: false** to hide items from the menu
- Images use placeholder URLs - replace with actual food photos from Cloudinary
- Add new testimonials through the admin panel (pending approval)
- Delivery fees and times can be adjusted in the delivery settings

---

Last Updated: 2026-01-18
Menu Version: 1.0
