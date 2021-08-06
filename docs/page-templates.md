# Page Templates

The entrie application UI can be made up of modular components, that are dynamically templated with each other in a serializable format. (list of blocks and attributes).

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
