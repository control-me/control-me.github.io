## Palette generation and usage

A color palette can be generated from a given input color. 
The color picker generates a palette for any color input. Hue, chroma, and lightness are adjusted by an algorithm that creates palettes that are usable and aesthetically pleasing. The shades include lighter and darker options to separate surfaces and provide colors that meet accessibility standards. 

### Usage
```ts
import { generate } from "$lib/palette";
type ColorShade = {
  color: ColorRGB;
  shade: 50|100|200|300|400|500|600|700|800|900;
}
const shades: ColorShade[] = generate(color);
```

## Text legibility, color contrast, and accessibility
Color palette is generated by reducing the lightness of the color. This is done by calculating the lightness of the color and then calculating the lightness of the color minus the lightness of the background color. This is done for each of the three color channels.
Contrast is calculated by calculating the difference between the lightness of the color and the lightness of the background color.
Text legibility is maintained with a sufficient contrast ratio of the text color and the background color. WCAG 2.0 AA is used to calculate the contrast ratio, which is 4.5:1 for large text and 3.0:1 for small text.