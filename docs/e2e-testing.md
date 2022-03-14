---
title: "Docs: E2E Testing - ControlMe"
---

# E2E Testing
## Instructions

To perform end-to-end testing, you will need to have a running instance of ControlMe running locally.
Clone the repository.

```bash
# clone the repository
git clone git@github.com:control-me/web-app.git

# install dependencies
cd web-app && npm i

# run ci on local machine and emulate firebase backend
npm run ci
```

Open the browser and navigate to `http://localhost:3000`. You should see the login page, enter your credentials and follow the instructions in the end-to-end testing section of the given milestone.

## Milestone 1 e2e test

See [Milestone 1](milestone-1)