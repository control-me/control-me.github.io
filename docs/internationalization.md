---
title: "Docs: Internationalization - ControlMe"
---

# Internationalization

## Translation guide

> **Note:** See [translation guide](./translation) for step-by-step instructions on how to translate the documentation, application and website.

## Translation process
Transifex, Localizely, Lokalise are great translation tools, but they are not perfect. Either too complex or too simple.
Each use case is special and requires a different approach. Even though Transifex has a fileless approach, the UI is not very user friendly, and it's meant for large projects.  
The on-demand translations can be delivered to the application by our API. Native speakers can leave feedback on the translation through our github issue templates. In early stage development, I will use GitHub copilot powered by OpenAI to help me with the translation process in the code editor.  
To avoid extra complexity, no need to maintain an external database. Instead, we will version it with the code directly, and use a translation tool built into the code editor to perform the translation.

## Translation strategy
Initially, only a limited number of languages will be overseed manually in AirTable.
The rest of the languages are translated automatically and are audited by third party translators.
Add disclaimer on documentation site:
> We frequently post updates to our documentation. Translation of this page may be in progress. For the most current information, visit the documentation in English. If there is a problem with the translations on this page, please inform us.

# Components
Here is a list of software components that are affected by i18n.

## Language Support Component
Specify an application-wide list of locales that the platform supports. Initially, we will start a short list of European languages and English.
Also design constraint until application is small scale and local. 

## UI Message Component
Features: 
- Will request an entry by key from a cached key-value store, also known as the message bundle. Uses runtime memoized functions for extra performance of evaulating messages in the ICU format
- Fully supports ICU syntax
- Comes with a basic set of ICU formatter functions
- ICU syntax automatic one way transformation to different language
- Requires extensive typographic support, use fonts like Inter, Noto Sans that encode glyphs in the full unicode range

## Language Select Component
Features:
- Allows user to pick a preferred language to view the content in
- Region is set automatically based on site visitor IP address
- If the region tag exists on the parent language tag, e.g. `cs-CZ` set full locale instead of just the language.
- Default value is `navigator.language`, which is a global variable derived from device language settings
- The value can be set by any of the following:
  - the `Accept-Language: en-US; q=0.9, en` header
  - the `Content-Language: en-US` header
  - the `<meta http-equiv="content-language" content="es">` meta tag
  - the html root document element `<html lang="es">` attribute
  - the query parameter, e.g. `controlme.app?lang=es`
  - the domain name TLD, e.g. `controlme.es`
  - The user interface, language select dropdown component with a list of supported languages

## Content Language Component
Features:
- Allows users to specify the content language that they intent to publish
- Language can be detected automatically for existing content using Google Translate API
- Can be transformed to a set of maximum 5 target languages (design constraint)
- The default value is the user locale setting `navigator.language` (device specific)
- In most use cases, the content being written will be in the same language as the selected language based on device settings

## UI web components

Business Opening Hours component demo:
- [demo](https://controlme.app/debug/open-hours)

Open source under github.com/control-me/i18n-web-components
Name idea: i18n-web-components

https://github.com/google/libphonenumber
address input
phone number input
language picker
open hours format

Better ICU message editor based on
https://format-message.github.io/icu-message-format-for-translators/editor.html 