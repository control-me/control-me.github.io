---
title: "Docs: Translation - ControlMe"
---

# Translation

> **Edit translations:**
[https://airtable.com/tblWpIprrPFJQfCv2](https://airtable.com/tblWpIprrPFJQfCv2)

## Translation guide

### Introduction
The translation guide is a document that describes how to translate messages.
This can include:
- the website, web app, and mobile app
- the documentation
- marketing content (e.g. email, social media, customer support)
- user content (e.g. posts, pages, campaigns)

All messages are in the `src/messages` folder. The file name is the name of the language, e.g. `en.ts`.

## Gettings started
Download VS Code from https://code.visualstudio.com/ if you don't have it already.
Install node, npm and the git command, then clone the repository.
```bash
# clone the repository
git clone git@github.com:control-me/web-app.git

# install dependencies
cd web-app && npm i

# pull the latest changes from AirTable for <language>
npm run locale:pull -- en
```
Output:
```bash
> web-app@0.0.1 locale:pull
> node ./scripts/locale.pull.js "en"

GET  https://api.airtable.com/v0/app08RrqGCtvShYbL/Translations?pageSize=100&view=English
GET  https://api.airtable.com/v0/app08RrqGCtvShYbL/Translations?pageSize=100&view=English&offset=itrEE83YV20Vd2ifv/reczBmShlsL1bqiRH
Output:  ./src/messages/en.ts
```

# Manual process
## Publishing translations
1. Create a new branch with your username.
2. Push the branch to your fork.
3. Open a pull request to the `main` branch.
4. The pull request will be reviewed and merged.
5. Translations are built automatically and published to the `dist` folder during the CI process.

## Add new language
1. Open the [`src/messages/en.ts`](../src/messages/en.ts) file in VS Code, which is the source language.
2. Add a new language (e.g. `fr.ts`) in `src/messages` and add an ES6 export in [`src/messages/index.ts`](./src/messages/index.ts) by copying the `en.ts` source file, or whichever language you want to translate from.
3. Add the new translations in the new file
4. Make sure the new language is also in the list of supported languages in `src/lib/locale/main-languages.ts`.

## Correct existing translations
1. Open the `src/messages/en.ts` file in VS Code, which is the source language.
2. Edit the existing translations in the target language file

## ICU Messages
For an ICU message, use the `{n, plural, ...}` syntax. Possible plurals for all languages are: `zero`, `one`, `two`, `few`, `many`, `other`.
In Czech the possible plurals are `few`, `many`, `other`, so it depends on which language you are translating to.
For a complete list of formatters, see `src/messages/index.ts`.

See https://formatjs.io/docs/core-concepts/icu-syntax/ for more details.  
For the ICU message editor, see https://format-message.github.io/icu-message-format-for-translators/editor.html

# Usage in code
## useFormat hook
The useFormat hook is used to format messages. The message is retrieved from a bundle at build time, as well as at run time with dynamic data or when the user selects a different language on the website.

Avoided the use of third party libraries (like I18Next or FormatJS) because they add a lot of overhead and framework dependencies. Under the hood it uses a minimal dependency with correct implementation of CLDR called ```cldr-engine``` (phensley.github.io/cldr-engine). Using this is the best DX at the moment because of the following features:
- It is a small dependency, so it is easy to include in a project.
- Custom formatter can be added without modifying the core library.
- TypeScript definitions are included.
- Resource bundles are efficient and can be loaded on demand, and are cached.
- Extended ICU syntax is supported, good documentation

Eventually this may be replaced with EcmaScript Internationalization API (http://www.ecma-international.org/ecma-402/1.0/#sec-Intl.PluralRules), but it is not currently available in all browsers.
Check support here: https://caniuse.com/?search=Intl.PluralRules


Example user language: Czech
```ts
// settings.locale: cs-CZ
import { useFormat } from "$lib/locale";

// in the component function body
const {t} = useFormat();
t("hello"); // -> "Ahoj"
t("hello-name", { name: "John" }); // -> "Ahoj John"
t("plural-item", { n: 1 }); // -> "1 kus"
t("plural-item", { n: 2 }); // -> "2 kusy"
t("plural-item", { n: 5 }); // -> "5 kusů"
t("plural-item-short", { n: 1 }); // -> "1 kus"
```

`t` function signature:
```ts
const translations = {
  "hello": "Ahoj",
  "hello-name": "Ahoj {name}",
  "plural-item": `{n, plural,
    one {1 kus}
    few {2 kusy}
    other {# kusů}
  }`,
  "plural-item-short": `{n, plural,
    other {1 ks}
  }`
};
type MessageNamedArgs = {
    [s: string]: any;
    [n: number]: any;
}
/** Format a message with arguments. */
function t(id: keyof typeof translations, positional?: any[], named?: MessageNamedArgs): string
```

## Message ids popup in VS Code

![](./docs/message-suggestions.png)

## Named and positional message arguments
The `t` function accepts named and positional arguments. An argument value can have any type. We cast at the time of evaluation. This allows us to accept rich arguments for user-defined custom formatters. Named args where each argument is given an explicit associative index or name. These can override positional arguments.

## Plurals vs Custom formatters

Plurals are basically "custom units", e.g. "1 piece" or "2 pieces", or "1 book" or "2 books". CLDR comes with a set of plural rules with predefined units, e.g. "1 acre" or "2 acres". When writing a custom formatter function, you can inspect this set of rules in the code editor with the help of `cldr-engine` type definitions.

![cldr-engine](./docs/unit-suggestions.png)

This can also be used to format currency values, e.g. "1.5$" or "2.5$", or "1.5€" or "2.5€". As well as lists of items, e.g. "1 apple, 2 pears and 3 oranges", relative date time formats, e.g. "1 day ago", or "in 1 hour", and date time intervals e.g. "4 - 9 PM".
The full CLDR Engine API is available in the `cldr-engine` docs:
https://phensley.github.io/cldr-engine/docs/en/doc-index.html

## Language picker
The language picker is a dropdown menu that is displayed on the website. Note that some languages have regional variations, e.g. `en-US` for the US English language, and `en-GB` for the UK English language. They can be differentiated with a unicode flag emoji (US: 🇺🇸, UK: 🇬🇧) in front of the language name, as opposed to outdated methods to put the region behing the language name in parenthesis: "English (United Kingdom)" or "English (United States)".

```ts
import LanguageSelect from "$lib/language-select";
// uses settings.locale in the application state
return <LanguageSelect />;
```

## Locale matching
It's an important contept to understand because at evey user interaction, either the application of the user will choose a language or the user will be presented with a language picker.
When the user picks a language, the application will use the locale matching algorithm to determine which locale to use according to the CLDR (Common Locale Data Repository) standard.

Read more about the algorithm here: 
- https://phensley.github.io/cldr-engine/docs/en/doc-locales-matching
- https://formatjs.io/docs/core-concepts/basic-internationalization-principles
- https://github.com/tc39/proposal-intl-localematcher
