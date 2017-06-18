# TODO

Work using Test Driven approach.

Use `nock` to mock the service responses from the server

Start with the `project` service `find` method.
Load the last used project ID from `localstorage`

`let projectId = window.localstorage.getItem('projectId')`

Retrieve `project` (by `id`) via project service.
Store the `project` received from response in Pico DB (see `/db` folder).

Synchronize the `PicoDB` with the `Vuex` store, f.ex using the `.on` subscribe handler of PicoDB API.

Now work from Vuex store and `project` components. Make sure the project forms reflect the vuex store. When a project is added in the form, send the projec data to the remote server via service API (ie `create` method).

Use [featherjs-client](https://github.com/feathersjs/feathers-client)

```js
<script type="text/javascript" src="/socket.io/socket.io.js"></script>
<script type="text/javascript" src="//cdn.rawgit.com/feathersjs/feathers-client/v1.1.0/dist/feathers.js"></script>
<script type="text/javascript">
  var socket = io();
  var client = feathers()
    .configure(feathers.hooks())
    .configure(feathers.socketio(socket));
  var projectService = client.service('projects');

  projectService.on('created', function(project) {
    console.log('a project was created', project);
  });

  projectService.create({
    name: 'my project',
    description: 'A new project'
  });
</script>
```

This can be used with [feathers-localstorage](https://github.com/feathersjs/feathers-localstorage) to keep a local database (cache) of entities.

We might also use [feathers-offline-realtime](https://github.com/feathersjs/feathers-offline-realtime)

See the sample [Feathers Vuex app](https://github.com/feathersjs/feathers-chat-vuex) and [feathers-vuex](https://github.com/feathersjs/feathers-vuex)

Allow the user to switch project (loading project from server if not already in memory!)
Keep a list of recent projects (last 5) in localstorage.

Keep going with the other entities when the Project is working as it should.
Don't worry about the remote API, it will be integrated later. It is key to develop this solution totally independent of the server (ie. by mocking responses of endpoints).

## Backend

The backend will use [feathers-mongoose](https://github.com/feathersjs/feathers-mongoose) to wrap Mongoose models as father services... and [feathers-sync](https://github.com/feathersjs/feathers-sync) to sync events to all clients.

We can use [feathers-permissions](https://github.com/feathersjs/feathers-permissions) to control access to entities.

[feathers-mailgun](https://github.com/feathersjs/feathers-mailgun) for sending emails as response to certain events, such as when a user is invited (given access) to a project etc.

[feathers-stripe](https://github.com/feathersjs/feathers-stripe) can be used for payment integration!

[feathers-configuration](https://github.com/feathersjs/feathers-configuration) to configure the backend app.

[feathers-query-filters](https://github.com/feathersjs/feathers-query-filters) for better query filters

### Authentication

We need to use the [Passport stragegy for Auth0](https://github.com/auth0/passport-auth0) to make it play nice with feathersJS

```js
app.get('/callback',
  passport.authenticate('auth0', { failureRedirect: '/login' }),
  function(req, res) {
    if (!req.user) {
      throw new Error('user null');
    }
    res.redirect("/");
  }
);

app.get('/login',
  passport.authenticate('auth0', {}), function (req, res) {
  res.redirect("/");
});
```

This way when you go to /login you will get redirected to auth0, to a page where you can select the identity provider.

For Auth0 JWT token auth, we will use [feathers-authentication-jwt](https://github.com/feathersjs/feathers-authentication-jwt)

```js
app.configure(authentication(settings));
app.configure(jwt());
```
