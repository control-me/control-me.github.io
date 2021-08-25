---
title: "Docs: Profile - ControlMe"
---

# User profile

## Account types
Summary: we need to have 3 types of accounts:
1) our company ("superadmin")
2) one main account of our partner ("admin")
3) account to specific campaign ("editor")

## Introduction

A user profile is a collection of settings and preferences that are specific to a user. A User is identified by their email address, or user ID in case of an anonymous user.
A user may have multiple profiles, each with different settings and preferences. Their real-life identity is verifiable by their email address, or by their identity provider (e.g. Google, Facebook, phone number, physical address, etc.). Anonymous users may not share their profile with other users, and may not claim rewards for campaigns.

## Role Based Access Control (RBAC)

Enforce the organization's policies at the database level with firestore security rules.
Read more at: https://firebase.google.com/docs/firestore/solutions/role-based-access#solution_role-based_access_control

Example scopes: https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps

# Scopes
- `read:user`: Read the user profile
- `user:email`: Read the user email
- `admin:org`: Fully manage the organization and its teams, projects, and memberships.
- `admin:campaign`: Fully manage the organization's campaigns and their published content.
- `publish:campaign`: Write and publish content to the organization's campaigns.
- `read:campaign`: Read the organization's campaigns.

## User preferences
- `language`: The user's preferred language.
- `timezone`: The user's preferred timezone.
- `theme`: The user's preferred theme.
- `currency`: The user's preferred currency.
- `region`: The user's preferred region.
- etc.


