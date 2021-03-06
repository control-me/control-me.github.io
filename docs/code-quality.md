---
title: "Docs: Code Quality - ControlMe"
---

# Code quality
## Best practices

To audit your code for best practices, you can use the following tools:
- TypeScript Linter: [TSLint](https://palantir.github.io/tslint/)
- JavaScript Linter: [ESLint](http://eslint.org/)

Here is a recommended set of rules:
- [`no-console`](https://palantir.github.io/tslint/rules/no-console)
- [`no-unused-vars`](https://palantir.github.io/tslint/rules/no-unused-vars)
- [`no-unused-expressions`](https://palantir.github.io/tslint/rules/no-unused-expressions)

These are not enforced in the CI process, but are means to help you keep your code clean and readable.
CI is meant for auditing test coverage, not code quality. Code quality is a separate concern, and it's overseen by
the project maintainers on GitHub.

When a pull request (PR) is opened, the CI build will run the linter and the unit tests. If the build fails, the PR will
not be merged. The code can then be manually reviewed by the maintainers, and the PR can be re-opened if necessary, or 
merged once the code is ready.

## Unit tests

Jest is used for unit tests. The tests are written in TypeScript, and the test files are located in `src/test`. Enzyme and Preact can be used for testing React components.

## Test coverage

Reported test coverage is a good indicator of the quality of your code. The test coverage is calculated by Jest, and the
outcome is reported in the build output.

# E2E tests
## Manual testing

Follow the in-browser instructions in the [E2E Testing](e2e-testing) document. 

## Automated testing

To perform an automated test, you can use the following tools:
- [Protractor](https://angular.github.io/protractor/#/)
- [Nightwatch](http://nightwatchjs.org/)

These tools are fairly easy to use, and are meant to be used in CI. They run an instance of a JavaScript engine, and the browser is emulated.

# Linting
To run the linter, you can use the following command:
```
npm run lint
```
Feel free to customize the configuration in `.eslintrc.json` for your environment, while extending the base configuration at the root of the project.

# Examples
There are many ways to construct the web application. The following are some examples of how to do this:

## Storeon global state
Cleanup state management in line with best practices in Storeon docs.
```ts
store.on("questions", (state, event) => set(state, "questions", event));
```

Remove spread operator in favor of lodash "set" and "merge" functions.
```ts
// bad
store.dispatch("campaigns.set", set(state.campaigns, event.id, { ...campaign, status: "published" }));

// good
store.dispatch("campaigns.set", set(state.campaigns, `${event.id}.status`, "published"));

// for multiple properties
// bad
store.dispatch("campaigns.set", set(state.campaigns, event.id, { ...campaign, status: "published", name: "New Campaign" }));

// good
store.dispatch("campaigns.set", merge(state.campaigns, { [event.id]: { status: "published", name: "New Campaign" } }));
```

The `pageProps` is a special entry in the store which is data that comes from SSR. It is not part of the state, and should not be used at the component level. Rather, it is always reduced into the store at the `@init` hook.

```tsx
// BAD
// in the component
const {dispatch, pageProps} = useStore("pageProps");
// here we cannot assume the type of the pageProps unless it's on a specific page,
// or unless we add an explicit check for pageProps.data.type
return <p>{pageProps.data.reward.name}</p>;

// GOOD
// in the store module
export let module: StoreonModule<S, E> = (store) => {
  store.on("@init", (state) => {
    // reduce data from SSR
    if (state.pageProps && state.pageProps.data) {
      const type = state.pageProps.data.type;
      // switch on data type relevant to this store module
      if (type === "reward-view") {
        const r = state.pageProps.data.reward;
        return merge(state, {
          rewards: {
            [r.id]: r,
          }
          //... other state from pageProps of type "reward-view"
        });
      }
    }
  });
};
// in the component
const {dispatch, rewards} = useStore("rewards");
const reward = rewards[id];
return <p>{reward.name}</p>;
```

## `classes` helper function
The `classes` helper function is a function that takes argumants and returns a class name as a string.

```tsx
// good
let prop: string|undefined;
return <div class={classes(prop)} />

// bad
return <div class={classes(prop || "")} />

// worst
return <div class={`rounded-md bg-red-50 p-4 ${c || ""}`}>
```