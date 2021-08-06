# Translation guide

> **Note:** Edit translations in AirTable at
[https://airtable.com/shrINH7Z5NGsoOgiZ](https://airtable.com/shrINH7Z5NGsoOgiZ).

## Introduction
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

## Publishing translations
1. Create a new branch with your username.
2. Push the branch to your fork.
3. Open a pull request to the `main` branch.
4. The pull request will be reviewed and merged.
5. Translations are built automatically and published to the `dist` folder during the CI process.

# Manual process
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
