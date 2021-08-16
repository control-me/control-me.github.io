---
title: Docs: Applied Machine Learning - ControlMe
---

# Applied Machine Learning

## Vision AI
### Google Cloud Vision API

Derive insights from your images in the cloud or at the edge with AutoML Vision or use pre-trained Vision API models to detect emotion, understand text, and more.

https://cloud.google.com/vision

## Use case
Will run once for every image being uploaded to the platform.
Only for signed in and paying accounts.

### Features
```json
[
        {
          "maxResults": 50,
          "type": "LANDMARK_DETECTION"
        },
        {
          "maxResults": 50,
          "type": "FACE_DETECTION"
        },
        {
          "maxResults": 50,
          "type": "OBJECT_LOCALIZATION"
        },
        {
          "maxResults": 50,
          "type": "LOGO_DETECTION"
        },
        {
          "maxResults": 50,
          "type": "LABEL_DETECTION"
        },
        {
          "maxResults": 50,
          "type": "DOCUMENT_TEXT_DETECTION"
        },
        {
          "maxResults": 50,
          "type": "SAFE_SEARCH_DETECTION"
        },
        {
          "maxResults": 50,
          "type": "IMAGE_PROPERTIES"
        },
        {
          "maxResults": 50,
          "type": "CROP_HINTS"
        }
]
```

## Reasons for using applied ML in our product
Using high-end technologies like this will provide our tool with the cutting-edge, strategic advantage over competition. So if a user can create and publish an interactive campaign in 1 minute from start to finish, they will always choose us over others that are slower.

## Possible applications and use cases

### Content authoring, tab completion and recommendations
OpenAI Beta API can be used in our product to generate marketing content. So in our tool, when you start typing a question, in the input box, it will complete it for you. The questions must be very short, practically just "passwords" , like short headings. It will require some tweaking of the model parameters to set it up well. It can be used to generate detail page content based on question summary, or to generate the question description based on question title.

### Template generation
Generating templates and components after entering the field of business activity.

### Automatic image captioning
(See above)
For example, option name can be generated based on the contents of the image.

## Training custom models
It will be appropriate to consider custom ML model applications once we have a large enough dataset to train things on. 