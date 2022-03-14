---
title: "Docs: Campaign Publishing - ControlMe"
---

# Campaign Publishing

Campaign publishing has a similar workflow to git. First, you create a new campaign and it is a draft. No additional
information is required. You can then publish the campaign and share it via a short link.

## Create and edit a campaign

User can add a new campaign in the editor. It will be a draft, saved in the `drafts` tab. User can make edits, and
preview the changes in real time. This is called "preview mode", and only the current user can access the campaign via the link. A banner is displayed at the top saying that campaign is a draft, and that the campaign is not published yet. Even if the user shares the link other users can not access the campaign.
User may discard a draft anytime and it will be deleted from the `drafts` tab.

## Publish the campaign

When the User is satisfied with the results, they can publish the campaign. This will make the campaign public and available for everyone to see at the specified short link. The campaign will be moved to the `published` tab.
When editing an existing campaign from the `published` tab, a new version of the campaign will be added to the `drafts` tab. The User may not delete the published campaign, only "unpublish" it, which would show a message to
visitors of the short url that the campaign is no longer available.

## Versioning and templates

Data structure for campaigns, at the highest level of the hierarchy is a `Organization` which corresponds with a business / company or any other organization or team.

`Organization` has many `Campaign`s.
`Campaign` has many `Version`s.

Campaign version are containers that hold all the data for a campaign. This includes the list page details, short link, campaign pages and campaign questions. Questions and pages can be re-used like templates.

## Unpublish a campaign

When the campaign is unpublished, it is moved to the `drafts` tab. It will no longer be available on the short link and a message will be displayed to visitors of the short url: "This campaign is no longer available."