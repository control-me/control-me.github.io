---
title: Docs - ControlMe
description: QR & NFC interactive lab
tags:
  - "docs"
  - "controlme"
  - "guide"
---

# Documentation - ControlMe

## Link tree

https://github.com/control-me  
https://github.com/control-me/web-app  
https://github.com/control-me/react-app  
https://github.com/jtezky/controlme  
https://console.firebase.google.com/u/0/project/controlme-dev  
https://clockify.me/projects/60cba6a8e69d8a23a9644933  
https://gitcoin.co/grants/2872/controlme  

## Development guide

### Table of contents
- Data model
- TBD: Information architecture
- TBD: Business logic
- TBD: Branding and design guidelines
- TBD: Code formatting and linting
- TBD: Code review, testing and QA
- TBD: Git workflow, CI/CD docs

## Typings
It's important to note that this project is entirely written in TypeScript. Therefore, I recommend using VS Code
to develop and test this project. 
```bash
npm install -g vscode
code .
```
Open the terminal in VS Code and type `npm i` to install all the dependencies.
The editor will start type checking and you will see the errors.
The data model is spread thoughout modules, and each module exports their own types.
To use all the types used in the data model, you can use the following code snippet:
```typescript
import type { State } from "$lib/stores";
```

Here are the scripts you can use to manage modules:
```bash
npm run module:add -- <module-name>

npm run module:rename -- <old-module-name> <new-module-name>

npm run module:remove -- <module-name>

npm run module:list
```
Module names are lowercase alphanumeric characters incl. dashes. For example, `react-app` is a valid module name.
The `index.ts` file is the entry point for the module. 

## Graph data model
This diagram is based on contents of the collections in the firestore project. 
Naming conventions are the following:  
`camppaigns` - collection of campaign data, has one or more `campaign-pages`
`campaign-pages` (a.k.a. _`forms`_ or _`questionnaires`_) have a collection of `questions`
`questions` in the form have these properties:
- Unique identifier `id`
- Answer type: Single rating, Multi rating, Single choice, Multi choice
- Required: boolean true or false
  - Defaults to true for Single choice and Multi choice answer type
  - Defaults to false for Single rating and Multi rating answer type
- Collection of `choices` (a.k.a. _`answers`_ or _`options`_)

![Diagram](./docs/data-model.svg)

### Collections and properties

![Diagram](./docs/data-model-props.svg)