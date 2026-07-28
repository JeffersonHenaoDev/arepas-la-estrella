---
name: Estrella Comfort
colors:
  surface: '#fff8f4'
  surface-dim: '#ffd2a5'
  surface-bright: '#fff8f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1e7'
  surface-container: '#ffead9'
  surface-container-high: '#ffe3cb'
  surface-container-highest: '#ffdcbc'
  on-surface: '#2c1700'
  on-surface-variant: '#4d4633'
  inverse-surface: '#482902'
  inverse-on-surface: '#ffeee0'
  outline: '#7f7660'
  outline-variant: '#d0c6ac'
  surface-tint: '#725c00'
  primary: '#725c00'
  on-primary: '#ffffff'
  primary-container: '#f8ce26'
  on-primary-container: '#6c5800'
  inverse-primary: '#ecc315'
  secondary: '#006e2a'
  on-secondary: '#ffffff'
  secondary-container: '#7ef990'
  on-secondary-container: '#00732c'
  tertiary: '#6e5e00'
  on-tertiary: '#ffffff'
  tertiary-container: '#ecd151'
  on-tertiary-container: '#685900'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe07d'
  primary-fixed-dim: '#ecc315'
  on-primary-fixed: '#231b00'
  on-primary-fixed-variant: '#564500'
  secondary-fixed: '#80fc93'
  secondary-fixed-dim: '#63df79'
  on-secondary-fixed: '#002108'
  on-secondary-fixed-variant: '#00531e'
  tertiary-fixed: '#fde260'
  tertiary-fixed-dim: '#e0c647'
  on-tertiary-fixed: '#211b00'
  on-tertiary-fixed-variant: '#534600'
  background: '#fff8f4'
  on-background: '#2c1700'
  surface-variant: '#ffdcbc'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  caption:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  container-margin: 20px
  gutter: 16px
---

## Brand & Style

The brand personality is **Energetic, Traditional-Modern, and Welcoming**. This design system bridges the gap between the rustic, handmade nature of Latin comfort food and the efficiency of a modern digital ordering experience. The goal is to trigger a visceral hunger response through high-impact visuals and warm, tactile UI elements.

The chosen style is **Modern / Tactile**. We move away from flat, clinical interfaces in favor of soft surfaces and organic shapes that mimic the "hand-pressed" feel of an arepa. The UI should feel as approachable and satisfying as the food itself, prioritizing "cheese pull" photography and a vibrant, sun-drenched color story.

## Colors

The palette is rooted in the natural ingredients of the menu: corn, fresh herbs, and fire-baked dough.

- **Primary Yellow (#f8ce26):** The "Star." Use this for primary actions and to draw attention to key value propositions. It represents the golden-brown crust of a perfect arepa.
- **Secondary Green (#0e9d41):** Used to signify freshness, vegetarian options, and success states. It provides a cooling contrast to the warm yellow.
- **Light Yellow (#f7dc5b):** Reserved for large background containers and subtle UI accents to keep the interface bright without the harshness of pure white.
- **Deep Brown (#5c3a11):** Our "Ink." This is used for all typography and borders. Avoiding pure black maintains the warm, earthy aesthetic of the brand.
- **Background (#FFFFFF):** Provides a clean, clinical canvas that allows the high-saturation food photography to stand out.

## Typography

This design system utilizes a tiered typographic approach to balance personality with extreme legibility. 

**Plus Jakarta Sans** is the headline face. Its soft terminals and open apertures feel optimistic and friendly. We use Heavy (800) and Bold (700) weights for titles to create a strong visual anchor that competes effectively with large food imagery.

**Work Sans** serves as the utilitarian workhorse for body copy and UI labels. It is grounded and reliable, ensuring that ingredient lists and pricing are effortless to scan. 

For mobile screens, we reduce the scale of display type while maintaining the heavy weight to preserve brand impact without overwhelming the smaller viewport.

## Layout & Spacing

This design system employs a **Fluid Grid** model based on an 8px rhythmic scale. 

- **Desktop:** 12-column grid with a max-width of 1280px. Large 32px gutters allow the high-quality photography to "breathe."
- **Tablet:** 8-column grid with 24px margins.
- **Mobile:** 4-column grid with 20px safe-area margins. 

The spacing philosophy focuses on "Chunky Padding." To reinforce the comfort food theme, UI elements like buttons and cards use generous internal padding (16px or 24px) to feel substantial and "touchable." White space is used intentionally to separate menu categories, preventing the UI from feeling cluttered or overwhelming.

## Elevation & Depth

We avoid high-contrast, harsh shadows. Depth in this design system is created through **Warm Ambient Shadows** and **Tonal Layering**.

Shadows should use a tint of our Deep Brown (#5c3a11) at very low opacity (8-12%) rather than pure black. This keeps the elevation feeling soft and organic, like food sitting on a wooden table.

- **Level 0 (Surface):** The main background (#FFFFFF).
- **Level 1 (Cards):** Smallest elevation used for menu items. Subtle 4px blur shadow.
- **Level 2 (Interactive/Sticky):** Used for the "Order Bar" or active navigation elements. 12px blur shadow.
- **Level 3 (Modals):** Large 24px blur shadows to isolate the ordering customizer from the background.

## Shapes

The shape language is **Rounded (Level 2)**. 

Arepas and panzerottis are naturally rounded, organic forms. The UI reflects this by avoiding sharp 90-degree corners. 
- **Standard UI (Buttons/Inputs):** 0.5rem (8px) radius.
- **Cards/Containers:** 1rem (16px) radius for a friendlier, softer appearance.
- **Featured Banners:** 1.5rem (24px) radius on top corners to create a "container" feel that hugs the content.

All imagery should also follow these rounding rules to ensure the photography feels integrated into the layout rather than "pasted" on top.

## Components

### Buttons
- **Primary:** Background #f8ce26, Text #5c3a11, Bold weight. Use a slight "bounce" hover effect to increase the tactile feel.
- **Secondary:** Outline 2px #5c3a11, Text #5c3a11. Used for "View Ingredients" or "Back" actions.

### Menu Cards
Cards are the heart of the system. They must feature a 1:1 aspect ratio image at the top. The "Add" button should be a floating circle with a '+' icon in the bottom right of the image area to keep the layout tight. Use #f7dc5b for the card background to make the food "pop."

### Chips
Used for food tags like "Spicy," "Gluten-Free," or "Popular."
- **Style:** Small, Pill-shaped (Level 3), using Secondary Green (#0e9d41) with white text for high contrast and a "fresh" feel.

### Input Fields
Inputs use a 2px Deep Brown border. When focused, the border remains Brown but a 4px soft Primary Yellow glow (shadow) is applied to signify activity.

### The "Cheese Pull" Gallery
A specialized component for the landing page—a full-width horizontal scroll of high-definition videos or images showing the food in motion. This component ignores standard container margins to create an immersive, mouth-watering effect.