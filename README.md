# red-forms

> My badass Vue project

## Vue Material

- [vue material](https://github.com/vuematerial/vue-material)
- [vue material design framework](https://medium.com/tldr-tech/vue-material-the-vue-material-design-framework-6e6ad857d0c6)
- [Using Material Design with Vue.js 2](https://medium.com/codingthesmartway-com-blog/using-material-design-with-vue-js-2-a938eac53112)

## Vue Router

- [tutorial](https://www.youtube.com/watch?v=X-cs3UfqfYA)
- [blog post](https://medium.com/@softwarecf/getting-started-with-vue-router-37cd7d783245)
- [Egghead tuturial](https://egghead.io/lessons/vue-get-up-and-running-with-vue-router)

Consider instead using [vue-component-router](https://www.npmjs.com/package/vue-component-router) where
each component can have it's own router!!

## Vuex state manager

Uses [Vuex](https://vuex.vuejs.org/en/getting-started.html) for state management

## GraphQL

[vue-curated-client](https://github.com/vuejs/vue-curated-client) is a full Vue2 GraphQL client/server app

## Vue-supply

Realtime publish/subscribe events integrated with [Vuex](https://vuex.vuejs.org/en/)

[vue-supply](https://github.com/Akryum/vue-supply)

Will be used for real time service layer, either via [FeathersJS](https://feathersjs.com) or [GraphQL](http://graphql.org/) (via [GraphCool](https://www.graph.cool) with [Server Side Subscriptions](https://www.graph.cool/docs/reference/functions/server-side-subscriptions-ahlohd8ohn/))

### Vue with Feathers services

Alternative to GraphQL

[vue-feathers-client](https://github.com/cklmercer/vue-feathers-client)

For real-time data sync:

[vue-syncers-feathers](https://www.npmjs.com/package/vue-syncers-feathers)

## Services

Using fetch API via:

- [vue-fetch](https://github.com/kristianmandrup/vue-fetch#outside-component)

Could also look at:

- [vue-services](https://www.npmjs.com/package/vue-services)

See [example](https://medium.com/codingthesmartway-com-blog/vue-js-2-vue-resource-real-world-vue-application-with-external-api-access-c3de83f25c00)

## Testing

See [Ava Vue Recipe](https://github.com/avajs/ava/blob/master/docs/recipes/vue.md)

## Commands

You can replace `yarn` with `npm run` here.

```bash
# build for production
yarn build

# development mode
yarn dev

# run unit tests
yarn test

# serve the bundled dist folder in production mode
yarn serve
```

## Polyfills

By default we only polyfill `window.Promise` and `Object.assign`. You can add more polyfills in `./src/polyfills.js`.

## Code splitting

As webpack supports both [dynamic import](https://webpack.js.org/guides/code-splitting-async/#dynamic-import-import-) and [`require.ensure`](https://webpack.js.org/guides/code-splitting-async/#require-ensure-) syntax, we would recommend you to stick to `require.ensure` for now because of [performance issue](https://github.com/webpack/webpack/issues/4636).

## Analyze bundle size

Run `yarn report` to get a report of bundle size which helps you:

- Realize what's really inside your bundle
- Find out what modules make up the most of it's size
- Find modules that got there by mistake
- Optimize it!


## Test

You can use [AVA](https://github.com/avajs/ava) to run tests, basically the default setup is based on AVA's offical [Vue.js recipe](https://github.com/avajs/ava/blob/master/docs/recipes/vue.md).

Check out `./test/test.js` for an example test case, and `./test/helpers/setup.js` for how we transform `.vue` and `.js` files.

## Progress Web App

Your app is now offline-ready (only in production bundle), which means you can visit it without network.

Here we use a default [manifest.json](./static/manifest.json) to configurure your pwa, for example, to enable [Add to Home Screen] feature on Android. It will be copied directly to `./dist/manifest.json`.


For all the available options, please head to [poi-preset-offline](https://github.com/egoist/poi/tree/master/packages/poi-preset-offline#api).

---

This project is generated from [template-vue](https://github.com/egoist/template-vue).
