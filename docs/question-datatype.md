## Question datatype

two type of multifunctional ratings:
- rating all options is required 
- is not required, which means you can rate however many options you want, and you don't have to not rate all options


Question type: rating or choice
Question required: true or false
Question component: carousel or list

In case question type is single rating
- for carousel: the round slider is always visible and stays fixed in the center (like now)
- for list: the round slider only appears for the selected choice from the list.

In case question type is multi rating, 
- for carousel: each item has a round slider. The slider and the image move together as the user swipes carousel.
- for list: each item has a round slider, and they are all visible.

In case question type is single or multi choice, the round slider is never visible.
In case the question is required, user cannot submit the form until they have filled out the question.

## Campaign actions
- Publish
- Edit/Preview
- Save/Discard: create live version from local version, discard local version
- Remove (if not published) / Archive (if published)
- Undo/Redo last action based on history https://github.com/storeon/undo
- View live version vs preview local version

# Typescript
```typescript
export interface OptionBase {
  id: string;
  name: string;
  type: "icon"|"image";
  placeholder?: string;
}

export interface OptionIcon extends OptionBase {
  type: "icon";
  icon: string;
  unicode: string;
};

export interface OptionImage extends OptionBase {
  type: "image";
  image: Image;
};

export type Option = OptionIcon|OptionImage;

type QuestionBase = {
  id: string;
  name: string;
  title: string;
  description: string;
  options: Record<string, Option>;
  responseType: "single-rate"|"multi-rate"|"single-choice"|"multi-choice";
  required: boolean;
  searchBox: boolean;
  displayWidget: "list"|"carousel";
  displayShape: "circle"|"rectangle";
  responseText: "disabled"|"optional"|"required";
  responseImage: "disabled"|"optional"|"required";
};

export interface QuestionRate extends QuestionBase {
  responseType: "single-rate"|"multi-rate";
  ratingType: "discrete"|"continuous";
  ratingPoints: 5|10;
  // custom labels
  ratingLabels: Record<string, string>;
  // default label visibility and position
  ratingLabelType: "hidden"|"before"|"after";
}

interface QuestionChoice extends QuestionBase {
  responseType: "single-choice"|"multi-choice";
}

export type Question = QuestionRate | QuestionChoice;
```
