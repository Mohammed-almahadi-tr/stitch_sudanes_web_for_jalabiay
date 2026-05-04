# Design System Specification: Heritage Digital Editorial

## 1. Overview & Creative North Star
The Creative North Star for this system is **"The Modern Tailor’s Atelier."** 

This design system moves away from the rigid, boxed-in feel of standard e-commerce platforms. Instead, it adopts a high-end editorial aesthetic that mirrors the tactile experience of Sudanese textiles. We prioritize **Intentional Asymmetry** and **Tonal Depth** over traditional borders. By layering warm, off-white surfaces and utilizing generous white space (kerning for the eyes), we create a digital space that feels as premium and bespoke as a hand-stitched Jellabiya. 

The layout should feel "curated" rather than "templated," using overlapping elements and sophisticated typography to guide the user through a cultural narrative.

---

## 2. Colors & Surface Philosophy
Our palette is rooted in the earth and the craft. We use high-contrast charcoal for authority and warm gold for prestige.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders to section content. Boundaries must be defined through:
1. **Background Color Shifts:** Use `surface-container-low` sections against a `surface` background.
2. **Generous Negative Space:** Use the Spacing Scale (specifically `8` to `12`) to separate conceptual blocks.
3. **Subtle Tonal Transitions:** Let the change in surface value define the "edge."

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of fine paper.
- **Base Layer:** `surface` (#f9f9f7) – The canvas.
- **Sectioning:** `surface-container-low` (#f4f4f2) – Large structural areas (e.g., product categories).
- **Interactive Cards:** `surface-container-lowest` (#ffffff) – To create a "lifted" feel on top of the sectioning layer.
- **Overlays:** `surface-container-high` (#e8e8e6) – For subtle depth in navigation or secondary info.

### The "Glass & Gold" Signature
To elevate the "Premium Local Service" feel:
- **Glassmorphism:** Use semi-transparent `surface-container-lowest` with a `backdrop-blur` (12px–20px) for floating navigation bars or mobile action sheets. This allows the Sudanese geometric patterns in the background to bleed through softly.
- **Signature Gradients:** For primary CTAs, use a subtle linear gradient from `primary` (#755b00) to `primary-container` (#c9a84c) at a 135-degree angle. This adds "soul" and a metallic sheen that flat colors lack.

---

## 3. Typography
The typography is the voice of the platform. We utilize a dual-font system to bridge the gap between Sudanese heritage and modern digital standards.

*   **Display & Headlines:** *Be Vietnam Pro* (or *Tajawal Bold* for Arabic). Large, authoritative, and editorial. Use `display-lg` for hero sections to create an immediate sense of luxury.
*   **Body & Labels:** *Plus Jakarta Sans* (or *IBM Plex Sans Arabic*). Chosen for its high x-height and exceptional readability on mobile screens.

**Editorial Tip:** Use `headline-lg` for Arabic titles with increased line-height (1.6) to accommodate the beautiful ascenders and descenders of the script without crowding the layout.

---

## 4. Elevation & Depth
We eschew the "drop shadow" of the 2010s in favor of **Tonal Layering**.

*   **The Layering Principle:** Place a `surface-container-lowest` (White) card on a `surface-container-low` (Off-white) background. This creates a soft, natural "lift" that feels expensive and intentional.
*   **Ambient Shadows:** If a card must float (e.g., a "Buy Now" mobile drawer), use a shadow tinted with `on-surface`: `rgba(26, 28, 27, 0.04)` with a 32px blur and 8px Y-offset. Never use pure black shadows.
*   **The "Ghost Border" Fallback:** If accessibility requires a stroke (e.g., an input field), use the `outline-variant` token at **15% opacity**. It should be felt, not seen.
*   **Textural Accents:** Incorporate subtle Sudanese geometric embroidery patterns as SVG background masks on `surface-container-low`. Set the pattern opacity to 3%–5% to ensure it never competes with the content.

---

## 5. Components

### Buttons
*   **Primary:** Uses the "Signature Gradient" (Primary to Primary-Container). 12px rounded corners (`DEFAULT`). Typography: `title-sm` (Bold).
*   **Secondary:** Ghost style. No background, `outline` token at 20% opacity. 
*   **Tertiary:** Text only in `primary` (#755b00) for low-emphasis actions like "View More Details."

### Cards & Lists
*   **The Card Rule:** No borders. Use `surface-container-lowest` as the card background.
*   **No Dividers:** Forbid the use of horizontal lines between list items. Instead, use a `2.5` (0.85rem) vertical spacing gap or a alternating `surface` color shift to distinguish items.

### Input Fields
*   **Aesthetics:** High-end minimalist. A background of `surface-container-high` with a bottom-only "Ghost Border" that expands to a full 12px rounded container on focus.
*   **States:** Error states use the `error` (#ba1a1a) token but only for the helper text and a 2px left-border (or right-border in RTL) to indicate the issue without cluttering the UI.

### Additional Signature Components
*   **The Fabric Picker:** A horizontal scrolling selection chip with a larger `xl` (1.5rem) radius, using real fabric texture thumbnails as the background of the chip.
*   **The Measurement Stepper:** A bespoke vertical progress indicator that uses `secondary` (Sage Green) to signify completion, styled to look like a tailor's measuring tape.

---

## 6. Do's and Don'ts

### Do:
*   **DO** use RTL-first logic. Icons that indicate direction (arrows, progress) must be flipped for the Arabic experience.
*   **DO** embrace "Leaning Content." Let images of the clothing slightly overlap the container edges to create a sense of movement and high-fashion editorial.
*   **DO** use the `secondary` Sage Green (#6B8F71) for "Success" states and "Available Stock" badges to keep the palette organic.

### Don't:
*   **DON'T** use 100% black text. Always use `on-surface` (#1a1c1b) or `tertiary` (#5f5e5c) for body text to maintain the warmth of the off-white background.
*   **DON'T** crowd the screen. If a mobile view feels "busy," increase the spacing from `4` to `6`.
*   **DON'T** use standard Material Design "elevated" buttons. Stick to our flat tonal layering or the signature gradient to maintain the premium feel.