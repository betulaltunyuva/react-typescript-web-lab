# CSS Decisions

## 1. Breakpoint Selection

The `640px` and `1024px` breakpoints were selected because the layout naturally changes at these widths.

Above `640px`, spacing is increased for tablet screens and the navigation becomes easier to read. Above `1024px`, the content is centered to create a more balanced desktop layout.

## 2. Layout Choices

Flexbox is used in the header because it provides a simple and effective way to align navigation elements along a single axis.

CSS Grid is used for the project cards because they require a two-dimensional layout. The following structure allows the cards to adapt automatically to the available screen width:

```css
repeat(auto-fit, minmax(280px, 1fr))
```

## 3. Design Tokens

Color, spacing, and typography values are stored in `tokens.css`.

This approach improves design consistency and allows shared values to be updated from a single location.

The `clamp()` function is used for fluid typography, allowing font sizes to adjust smoothly according to the viewport width.

## 4. Responsive Strategy

The project follows a mobile-first approach, with the base styles designed for smaller screens.

Tablet and desktop layouts are implemented using `min-width` media queries.

Images use `max-width: 100%` to prevent overflow and remain responsive across different screen sizes.
