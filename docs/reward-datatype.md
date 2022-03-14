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
  1. Relative term of expiration ("title"). Choice: two weeks, 1 month, 2 months, 3 months
  2. Fix term of expiration ("title"). Choose the date from the calendar. 
- Manual description of the application ("title"). Text field where can be own text ..."step by step" information for application reward, for example: Go to our site, put the code into shopping cart, finish your order. 

## Reward types
1. Relative term reward
Each customer will have a fixed period (e.g. two weeks) from the moment the reward was selected to apply the reward. If the period is up, the reward is considered expired and cannot be applied again. In other words, the validity is relative to the date of the reward selection.

2. Fixed term reward
If one customer select reward 7th of August and another customer 30th of August, the validity of the reward is set to fixed until 31st of August. One customer will have validation for three weeks and the other only 1 day. For example, a special offer (discount) with fixed date of validity. The validity is fixed regardless of the date of the reward selection.

## Rewards process
End to end process for rewards:

1. Create reward
2. Select from list and attach to campaign
3. Publish campaign, print and scan code
4. Submit response
5. Claim reward button, add to user rewards list
6. Apply reward (slider or code), move from active rewards list tab to "applied" list tab. 

Can be applied only once.

## Typescript
```typescript
type ExpirationBase = {
  type: "fixed-term" | "relative-term",
}
interface FixedExpiration extends ExpirationBase {
  type: "fixed-term";
  date: Date;
}

interface RelativeExpiration extends ExpirationBase {
  type: "relative-term";
  period: "two-weeks" | "one-month" | "two-months" | "three-months";
}

type Expiration = FixedExpiration | RelativeExpiration;
export type Reward = {
  id: string;
  name: string;
  title: string;
  
  coverPhoto?: Image;
  description: string;
  expiration: Expiration;
  applicationType: "code-based" | "slider-based";
  codes?: string[];
  /* Rich text */
  manualDescription: string;
}
```