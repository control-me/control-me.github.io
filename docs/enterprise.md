---
title: "Docs: Enterprise - ControlMe"
---

# Enterprise

> _(work in progress)_

To get started, you need to [create an account](https://controlme.app/#signup). Every account has a unique API key.
For on-premise installations use the CLI (see below).

## CLI
In order to use the CLI, you need to have a ControlMe account, and an API key. You can create an API key by visiting [Identity Access Management](https://controlme.app/editor/iam).
The CLI will use the API key to authenticate with the platform, and will use your ControlMe account to create the project. When you are ready to publish, deploy the site to your server with the CLI using the following command:

```bash
$ controlme app deploy
```

For convenience, the CLI is available as a GitHub Action, which can be installed using the following command:
```bash
$ npm install -g controlme-cli
```
Additionally, you can run `controlme auth login` to log in to your ControlMe account on devices with a web browser available.
