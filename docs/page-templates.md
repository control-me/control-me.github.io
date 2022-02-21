---
title: "Docs: Templates - ControlMe"
---

# Page Templates

The entrie application UI can be made up of modular components, that are dynamically templated with each other in a serializable format. (list of blocks and attributes). A template is a piece of data that contains a list of blocks and attributes, and is serialized to a string. Format may be markdown, html, or any other format that can be converted to a string. In HTML, blocks are called `div`s, and attributes are called `class`s. In markdown, they are called `header`s and `paragraph`s. Some formats are harder to master than others, the easiest being markdown.

## Blocks
Commonly referred to as `components` or `markup`. A block is a piece of data that can be rendered to a string or a DOM element.
Modular architecture is a good way to break up the UI into smaller pieces, so that the UI can be changed without having to modify the underlying component library.
This is a rather important way of thinking about the application. Everything is a block, and every block has a set of attributes.
Blocks can be nested, depending on the structure of the UI. Pages are the most basic block, and they are the only block that can be serialized and published to a URL on the web.
Clienside logic such as interactivity are pushed to a package `@packages/lib` that is loaded as a dependency during the build process of a static site. These controls (a.k.a. components) are then used to dynamically render the UI.
Parse errors and validation errors are reported during the build process, and interactivity is pushed to the client as a set of controls from a package `@packages/lib` and other third party packages, UI libraries, etc.

## Forms

Sometimes forms are still necesary, and they are not nested. They are not part of the UI, they are part of the application logic. In other words, they will change as the application logic changes.

Therefore, it's best to avoid using forms in the UI since it serves administrative purposes, and 
admins should learn markdown and HTML if they want to write a UI. For less advanced users, forms are a good way to create a UI that is not too complex.

## Page metadata
### AMP - Article metadata
```html
<html amp>
  <head>
    <title>Article headline</title>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://google.com/article"
      },
      "headline": "Article headline",
      "image": [
        "https://example.com/photos/1x1/photo.jpg",
        "https://example.com/photos/4x3/photo.jpg",
        "https://example.com/photos/16x9/photo.jpg"
      ],
      "datePublished": "2015-02-05T08:00:00+08:00",
      "dateModified": "2015-02-05T09:20:00+08:00",
      "author": {
        "@type": "Person",
        "name": "John Doe"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Google",
        "logo": {
          "@type": "ImageObject",
          "url": "https://google.com/logo.jpg"
        }
      }
    }
    </script>
  </head>
  <body>
  </body>
</html>
```
Docs / test: https://developers.google.com/search/docs/data-types/article

### Photo metadata

See `exifr` on GitHub.

### App metadata
Automatically generated `manifest.json`
Automatically generated favicon / app icon


```html
<meta name="theme-color" content="#4285f4">
```

## Campaign templates

Campaign templates are templates that are shared with other users. The users may then copy it and customize it (this is called a fork). The fork is instantly saved to the database under the user's account.

This is essentially the same as duplicating a campaign's data and copying it to a new user.
The owner or the editor roles allow for chaning the original campaign's data. This is not to be confused with campaign templates as it is a separate feature.

Serves as an image and icon gallery.
Templates have a list of tags that can be used to filter them, and display them in a gallery.
Campaign template tags are also a way or organizing a collection of campaigns. 