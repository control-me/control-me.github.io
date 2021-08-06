# Metaballs

Each metaball is defined as a function in n dimensions (e.g., for three dimensions, f(x,y,z); three-dimensional metaballs tend to be most common, with two-dimensional implementations popular as well). A thresholding value is also chosen, to define a solid volume.

```latex
{\displaystyle \sum _{i=0}^{m}{\mbox{metaball}}_{i}(x,y,z)\leq {\mbox{threshold}}}
```

Source: https://en.wikipedia.org/wiki/Metaballs

Metaballs are defined by a function in n dimensions, and a threshold value. The function is defined by a set of points, and a set of weights. The points are the centers of the metaballs, and the weights are the radii of the metaballs. The function is defined by the sum of the weights times the distance from the point to the origin.

A metaball is simply put, a function, on a grid. The grid is defined by the points and the weights. The grid in this case refers to a 2d function, but the same principle applies to higher dimensions.

## Usage

In the web app, metaballs are used to show a page indicator underneath the image carousel.

![](./docs/indicator.png)

As the user scrolls through the carousel, the page indicator is updated to show the current page and the balls seem to merge together creating a attraction effect, hinting to the user that the carousel component uses scroll snapping.

```tsx
import { Metaballs } from "$lib/metaballs";

return <Metaballs
  width={400}
  height={400}
  points={[
    [0, 0],
    [1, 0],
    [0, 1],
  ]}
  weights={[
    1,
    1,
    1,
  ]}
  threshold={0.5}
  color="#fff"
/>;
```

## Squircle
With the right patameters, this method can produce a squircle. To be fair, the difference is slight — A squircle begins as the old rounded square, but with some sandpaper applied to the part where the rounding begins on each side of each corner so the transition from straight to curved is less abrupt.

![Squircle](./docs/squircle.png)

Apple famously used this method to create the logo of the company and many of their products, or as they refer to it, "continuous curvature." People started noticing when iO7 was released with a re-design of the home screen apps.

## Sources
- https://en.wikipedia.org/wiki/Metaballs
- https://www.math.uwaterloo.ca/~hwolkowi/matrixcookbook.pdf

Figma Design: Desperately seeking squircles
https://medium.com/figma-design/desperately-seeking-squircles-8eb8db9b654b
