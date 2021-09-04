
# Continous curvature of Bezier curves

> _(draft)_

# Abstract
In order to construct curves or surfaces with a continuous, smooth curvature, we need to know the *curvature* of the curve at each point. This is a measure of how much the curve changes in a given direction. This method is used in many applications including computer graphics, product design, and software engineering.
Smooth surfaces reflect light and sound equally, and are therefore equally sensitive to changes in light and sound. Apple's computers are designed with a smooth surface, so the light reflection falls off smoothly. This effect was later implemented in the iPhone and iPad UI with iOS 7. Figma and Skecth both support this feature dubbed "smooth corners".

## Geometric continuity

- Positional continuity (G0) holds whenever the end positions of two curves or surfaces coincide. The curves or surfaces may still meet at an angle, giving rise to a sharp corner or edge and causing broken highlights.
- Tangential continuity (G1) requires the end vectors of the curves or surfaces to be parallel and pointing the same way, ruling out sharp edges. Because highlights falling on a tangentially continuous edge are always continuous and thus look natural, this level of continuity can often be sufficient.
- Curvature continuity (G2) further requires the end vectors to be of the same length and rate of length change. Highlights falling on a curvature-continuous edge do not display any change, causing the two surfaces to appear as one. This can be visually recognized as "perfectly smooth". This level of continuity is very useful in the creation of models that require many bi-cubic patches composing one continuous surface.

(Source: [Curvature of NURBS Curves](https://en.wikipedia.org/wiki/Smoothness))

## Definition of problem

Suppose we have an arbitrary path `P` defined as a set of points. This path is connected by simple straight lines. Each point has a parameter W in the range of 0 - 1 that the weight of the corner rounding at that point. The weight of the rounded corner interpolates between a NURBS curve and a straight line. The weight of the rounded corner represents the *curvature* of the curve at that point.

So if we have a set of four points `P_0`, `P_1`, `P_2`, `P_3` with weights `W_0`, `W_1`, `W_2`, `W_3` then the curve `P` is defined as:
```
P(t) = (1 - t)^3 * P_0 + 3 * (1 - t)^2 * t * P_1 + 3 * (1 - t) * t^2 * P_2 + t^3 * P_3
```
Whic is a cubic Bezier curve in this case. To find the curvature at a point `P_i` we can use the following formula:
```latex
k_i = (P_i - 2 * P_{i-1} + P_{i-2}) / (W_i - 2 * W_{i-1} + W_{i-2})
```
Furthermore, the curvature at the first and last points is 0. The reason for this is that the first and last points are not connected to any other points, unless the curve is closed. In that case, the first and last points are connected and considered to be part of the curve.

The curve at each point is the weighted sum of the curves to the left and right of the point. 
I am attemting to describe a function whose input is Radius R which defines the rounding of the given corner point in pixel units. The weight W can be then calculated from R.


SVG's `<path>` element has a *d* attribute that describes a path in terms of a sequence of *commands* and *coordinates*. SVG format supports the following commands:
- `M`: Move to a new position
- `L`: Draw a line to a new position
- `H`: Draw a horizontal line to a new position
- `V`: Draw a vertical line to a new position
- `C`: Draw a cubic Bézier curve to a new position
- `S`: Draw a cubic Bézier curve to a new position
- `Q`: Draw a quadratic Bézier curve to a new position
- `T`: Draw a quadratic Bézier curve to a new position
- `A`: Draw an elliptical arc to a new position
- `Z`: Close the current subpath


# Surface curvature
To calculate the curvature of a surface, we use the following formula:
```
k = (dU/dx)^2 + (dU/dy)^2 + (dV/dx)^2 + (dV/dy)^2
```
where `k` is the curvature, `dU/dx` and `dU/dy` are the partial derivatives of the first component of the vector field, and `dV/dx` and `dV/dy` are the partial derivatives of the second component of the vector field.

For bezier surfaces, the partial derivatives are calculated using the [B-spline basis](https://en.wikipedia.org/wiki/B-spline#B-spline_basis).
```
dU/dx = (1/6) * ( -1 * U[i-2] + 3 * U[i-1] + 3 * U[i+1] - U[i+2] )
dU/dy = (1/6) * ( -1 * U[i-2] + 3 * U[i-1] + 3 * U[i+1] - U[i+2] )
dV/dx = (1/6) * ( -1 * V[i-2] + 3 * V[i-1] + 3 * V[i+1] - V[i+2] )
dV/dy = (1/6) * ( -1 * V[i-2] + 3 * V[i-1] + 3 * V[i+1] - V[i+2] )
```

## Source material

https://www.youtube.com/watch?v=aVwxzDHniEw

Transcript:
Curvature of a paramteric curve can be expressed as a polynomial in the parameter `t`:
```
k(t) = (dU/dt)^2 + (dV/dt)^2
```

## Reverse engineering
Implemented in Sketch, Figma, iOS native libraries, and also some existing javascript libraries.
https://wopian.github.io/smooth-corners/

## Applications
The generated output geometry can be applied as a mask for any surface in the UI with a rounded corner. Other applications include:
- Rounded corners for buttons
- Iconography (see SF Symbols)
- Rounded masks for images
- Rounded corners for borders and outlines