---
title: "Docs: Rewards - ControlMe"
description: QR & NFC interactive lab
tags:
  - "docs"
  - "controlme"
  - "guide"
  - "reward"
  - "reward-datatype"
---

# Rewards
All settings structure, properties:

- name
- description
- two types of application rewards 
  1. by slider 
  2. by code (upload list own list with codes or write one unique code). Unique code means that everybody will have the same code, for example SALE20%)
- two types of expiration
  1. Period of expiration ("title"). Choice: two weeks, 1 month, 2 months, 3 months
  2. Fix term of expiration ("title"). Choose the date from the calendar. 
- Manual description of the application ("title"). Text field where can be own text ..."step by step" information for application reward, for example: Go to our site, put the code into shopping cart, finish your order. 

## Typescript
```typescript
type ExpirationBase = {
  type: "fixed-term" | "periodic";
}
interface FixedExpiration extends ExpirationBase = {
  type: "fixed-term";
  date: Date;
}
interface PeriodicExpiration extends ExpirationBase = {
  type: "periodic";
  period: "two-weeks" | "one-month" | "two-months" | "three-months";
}

type Expiration = FixedExpiration | PeriodicExpiration;
type Reward = {
  id: string;
  name: string;
  description: string;
  expiration: Expiration;
  applicationType: "code-based" | "slider-based";
  codes?: string[];
  /* Rich text */
  manualDescription: string;
}
```