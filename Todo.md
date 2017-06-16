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

When users, repos etc. are added to the project, update the PicoDB and send updates to the service API and also keep in sync the Vuex store. Make an elegant sync solution!

Allow the user to switch project (loading project from server if not already in memory!)
Keep a list of recent projects (last 5) in localstorage (using JSON `parse` and `stringify` to save/load a list as string to a key)

Keep going with the other entities when the Project is working as it should.
Don't worry about the remote API, it will be integrated later. It is key to develop this solution totally independent of the server (ie. by mocking responses of endpoints).
