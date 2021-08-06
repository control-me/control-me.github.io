---
title: "Docs: Design system - ControlMe"
---

# Design system

> A design system is a set of reusable components.

## What is a design system?

A Design System is not a Design System without reusable, ready-to-use code. Having pre-built components made of CSS, HTML and JS that developers can use and instantly be in compliance with the Design System is crucial, both for speed of delivery and consistency in user experience. The technology we chose to become the foundation of the Design System, Tailwind CSS, was critical to the success of the system.
Here is a three-step approach to choosing the technology:
- Audit the organization’s technology needs
- Research the options
- Evaluate frameworks with proof of concepts (POCs)

For example: https://material.io/design

## What is a component?

A component is a piece of content. For example a component might be a button, a form, or a navigation bar.
Interactive components are often used to build a user interface.

## What is a design pattern?

A design pattern is a general solution to a commonly occurring problem within a given context. UX patterns are a set of solutions to problems that occur in software development. Responsive design patterns in web design, interaction patterns for user interaction, and so on. DX (Developer Experience) patterns occur in the design and engineering of digital products. For software, it means a good IDE, a good build system, and so on.

# ControlMe Design System

The Tailwind CSS framework is used to build the ControlMe Design System. 
Read more on [Tailwind CSS](https://tailwindcss.com/) and [Tailwind UI](https://tailwindui.com/) for templates to get started.

## Primary color palette

`tailwind.config.js / theme.extend.colors`
```javascript
brand: {
  50: "#e1f5fa",
  100: "#b4e5f3",
  200: "#84d4ec", // main
  300: "#53c3e6",
  400: "#23b7e5",
  500: "#00abe4",
  600: "#009dd6",
  700: "#008ac4",
  800: "#0079b1",
  900: "#005a92",
},
```

## Iconography and typography

Main application font stack is the default system font stack. Users can customize the font stack by overriding the `theme.extend.fonts` object, and tailwind will generate the correct CSS for the font stack at build time.

`tailwind.config.js / theme.extend.fonts`
```javascript
fontFamily: [
  "system-ui",
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "Fira Sans",
  "Droid Sans",
  "Helvetica Neue",
  "sans-serif",
],
```

All typographic glyphs and symbols are loaded as fonts in the web app. The web app uses `SF Symbols` which is an icon font designed to be used with system fonts and it's baselined better then Material Design Icons, in other words, it's more accessible and easier to read.
Icon fonts are great because they are easy to use, provide good design consistency. For optimal development experience, 
a symbols lookup table at `$lib/icon/symbols.ts` is used in combination with Typescript. 
To trigger a popup in VSCode, press the "." key when the caret is at the name of the icon.

### Usage

```typescript
import { Icon } from '$lib/icon';
// renders a <i> with the icon as a unicode glyph named plus
return <Icon name="plus" />;
```

### Popup in VSCode

![](./docs/icon-suggestions.png)