# red-forms

This project aims to provide a slick, smooth interface to manage the following organisational entities:

- Projects
- Organisations
- Teams
- Users
- Repositories
- Environments (dev, test, stage, prod, ...)
- Branches

The app (or set of UI component) should allow an organiation (or team/teams) to manage these entities across multiple types of git hosting providers (github, gitlab, bitbucket, ...). This management UI can then be re-used across multiple different applications, such as [node-red](http://nodered.org/)

## Getting started

Fork the repo from github: [red-forms](https://github.com/kristianmandrup/red-forms)

In your terminal/console

Clone the repo from your fork, sth. like:

`git clone https://github.com/YOUR-ACCOUNT/red-forms`

Install/update [yarn](https://yarnpkg.com), the Node.js package/module installer and testing/coverage tools [nyc](https://github.com/istanbuljs/nyc) and [ava](https://github.com/avajs/ava)

```bash
$ npm i -g yarn ava nyc
```

From the root of the project, install all project dependencies via `yarn`

```bash
$ yarn install
```

Run development server

```bash
$ yarn dev
```

open `http://localhost:4000` in a (Chrome) browser.

Try to run `ava` tests with `nyc` coverage report:

```bash
$ nyc ava
```

## Current design

The current simple design consists of a set of forms accessible from a menu.
The forms can be used to build up the in-memory model of related entities.

Ideally, most of the data is already configured for most organisations in git repos in the cloud and similar.

We need to enable importing this data from existing company (cloud) resources so that they can get up and running more quickly (and with less chance of making errors!)

### Folder structure

- `/db` - Pico DB for managing Project data
- `/components` - Vue components with forms for managing model entities
- `/store` - vuex store for centralised state management (similar to Redux)
- `/fixtures` - fixture data used by forms to display some initial fake data
- `/services` - Fetch API services for communicating with remote "REST" API

`/fixtures` should be moved to `test` folder.

### Manage list of entities

Currently the form to manage a list of entities are almost identical. In order to reduce duplication, work has started on a generic `List` form which could replace most (if not all) of these forms, passing `props` as needed to customize `title`, which `$service` is used etc.

### In memory data model

The system needs to keep an in-memory representation of the data model.

We can use [feathers-localstorage](https://github.com/feathersjs/feathers-localstorage) to keep a local database (cache) of entities.

The cached model will be kept in sync with the remote model on the server via REST (and later real-time socket) APIs (see `Todo.md` document)

### User context

The user needs to signin (via Auth0) in order to manage the models.
The main context is the `Project` model. When a `User` signs in, the system should load the IDs of the last projects used and by default load the latest project (via REST api)

A project is loaded with:

- names of teams that have access to project
- names of users with access to project
- environments of project
- repo/branch for each environment

The Project model will be stored in the in-memory Pico DB and be linked to Vuex state manager.

### Services

The folder `/services` contains a [Fetch API](https://developer.mozilla.org/en/docs/Web/API/Fetch_API) to call a backend API that it turn communicates with a data store such as Mongo DB.

Test skeletons for these services can be found in `/test/services`

For now, use an in-memory DB or simply mock the responses to simulate a fully functional backend - it will be integrated later (next iteration)

### Testing and mocking services

Use [nock](https://www.npmjs.com/package/nock) with Ava for HTTP mocking and expectations.

See [Ava endpoint recipe](https://github.com/avajs/ava/blob/master/docs/recipes/endpoint-testing.md)

This recipe would look almost identical using `nock`

## Models

- Organisation
- Team
- User
- Project
- Environment (Env)
- Repository (Repo)
- Branch

### Relationships

```bash
Organisation * - * User
Organisation 1 - * Team
User * - * Project
Project 1 - * Environment
Environment 1 - 1 Branch
Repo 1 - * Branch
```

### Relationships described

- An organisation can have many users and teams.
- A team can have many users
- A user can be a member of multiple teams
- A user (`User`) can have access to one or more projects.
- Each `project` (`Project`) can be owned by one `user`.
- A project can have many users with access to that project (roles w permissions)
- A `project` can have multiple `environments` (`Env`), such as:

- `dev`
- `test`
- `stage`
- `prod`

- An `environment` is linked to a specific branch (`Branch`) on a specific `repo` (`Repo`).

## State

Currently the application state is managed by each component.
We want to use the [Vuex](https://vuex.vuejs.org/en/intro.html) state manager to act as a single store to manage the application state, similar to Redux for React apps.

See *Resources* section below for more details on possible solutions for state management.

## Import organisation data

The forms should allow the user to import existing organisation/repo data from popular git hosting providers such as github, gitlab etc.

We recommend using [Promise](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise) based API wrappers such as:

- [github API](https://www.npmjs.com/package/github-api)
- [gitlab API](https://github.com/repo-utils/gitlab#promise-way)

For the first iteration/phase, we will only target importing data from a Github account.
Next stage of development will add support for more git hosting providers.

### API Authentication

This project will leverage the [easy-graphql-auth](https://github.com/tecla5/easy-graphql-auth) project using Auth0 in order to login with Github and similar cloud repositories to collect data:

For now, only the [easy-auth0-lock](https://github.com/tecla5/easy-graphql-auth/tree/master/packages/easy-auth0-lock) should be used, as we will use a MongoDB backend (via Mongoose) at present.

Note: The auth modules have not yet been published to npm. Will be done before next week (ie. before 20th of June). Don't be concerned about the Auth part until it is ready!

Using Auth0, it is easy to configure which API permissions will be granted on signin and thus which API calls can be made with that particular Auth (JWT) token granted.

- [Auth0 Github connection](https://auth0.com/docs/connections/social/github)
- [Auth0 Bitbucket connection](https://auth0.com/docs/connections/social/bitbucket)
- [Auth0 Gitlab](https://gitlab.com/help/integration/auth0.md)

The Git (entities) import UI should allow user to choose which `organisations`, `teams`, `team members` (users) and `repositories` + `branches` to import

- [Auth0 Github signin with authorization grants](https://auth0.com/docs/connections/social/github)
- [Github OAuth scopes](https://developer.github.com/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps/)

Auth scopes let you specify exactly what type of access you need and grant permission to. Scopes limit access for OAuth tokens. They do not grant any additional permission beyond that which the user already has.

When setting up an OAuth App on GitHub, requested scopes are displayed to the user on the authorize form.

- [List/Admin Repos](https://developer.github.com/v3/repos/)
- [List/Admin Organisations](https://developer.github.com/v3/orgs/)
- [List/Admin teams](https://developer.github.com/v3/orgs/teams/)
- [Oauth grants API](https://developer.github.com/changes/2016-10-12-oauth-authorizations-grants-api-released/)

Authorization grants needed for this Vue app:

- `read:org`
- `admin:org`
- `user`
- `repo`
- `notifications` - to let app be notified of changes in real time

## Resources

Here some useful resources that could be used (or serve as inspiration) for this project.

### Vue Material

- [vue material](https://github.com/vuematerial/vue-material)
- [vue material design framework](https://medium.com/tldr-tech/vue-material-the-vue-material-design-framework-6e6ad857d0c6)
- [Using Material Design with Vue.js 2](https://medium.com/codingthesmartway-com-blog/using-material-design-with-vue-js-2-a938eac53112)

### Vue Router

- [tutorial](https://www.youtube.com/watch?v=X-cs3UfqfYA)
- [blog post](https://medium.com/@softwarecf/getting-started-with-vue-router-37cd7d783245)
- [Egghead tuturial](https://egghead.io/lessons/vue-get-up-and-running-with-vue-router)

Consider instead using [vue-component-router](https://www.npmjs.com/package/vue-component-router) where
each component can have it's own router!!

### Vuex state manager

Uses [Vuex](https://vuex.vuejs.org/en/getting-started.html) for state management

### Vuex real-time sync

Realtime publish/subscribe events integrated with [Vuex](https://vuex.vuejs.org/en/)

We can use either [vue-supply](https://github.com/Akryum/vue-supply) or [feathers-vuex](https://github.com/feathersjs/feathers-vuex) for syncing with [FeathersJS](https://feathersjs.com)

### Vue with Feathers services

Alternative to GraphQL: [vue-feathers-client](https://github.com/cklmercer/vue-feathers-client)

For real-time data sync:

- [vue-syncers-feathers](https://www.npmjs.com/package/vue-syncers-feathers)
- [feathers-vuex](https://github.com/feathersjs/feathers-vuex)

### Services

Currently using fetch API via: [vue-fetch](https://github.com/kristianmandrup/vue-fetch#outside-component)

We should (perhaps) instead just use standard feathers-client REST api and sockets. I guess, fetch is just a more modern API to perform REST/AJAX HTTP requests.

```js
import feathers from 'feathers/client';
import rest from 'feathers-rest/client'

const app = feathers()
  .configure(rest('http://baseUrl').fetch(window.fetch.bind(window)))`
```

We could also consider using: [vue-services](https://www.npmjs.com/package/vue-services)

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
