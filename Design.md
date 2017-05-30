# Design

The goal is to have an interface that allows the management of:

- organisations
- users
- projects
- environments
- repos

An `organisation` can have:

- users
- project

A `user` can

- `own` one or more `projects`
- `participate` in one or more `projects`

A `project` is

- `created` by a `user`
- always `owned` by one `user`

A project `owner` can `invite` more users to the `project`

A `project` can have multiple `environments`

An environment is linked to a `branch` on a givn `repo`

### User roles and permissions

In the future users should have roles with permission and then some users will have the ability to invite users to projects etc.
