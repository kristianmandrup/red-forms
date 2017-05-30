<template>
  <md-card md-primary
           md-with-hover>
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">Repositories</div>
        <div class="md-subhead">Manage your repositories</div>
      </md-card-header-text>
    </md-card-header>
  
    <md-card-content>
      <md-list>
        <md-list-item v-for="repo in repositories"
                      :key="repo.id">
          <md-avatar>
            <img src="https://placeimg.com/40/40/people/5"
                 :alt="repo.description">
          </md-avatar>
  
          <span>{{ repo.name }}</span>
          <md-button @click.native="showRepo(repo)"
                     class="md-icon-button md-list-action">
            <md-icon class="md-primary">info</md-icon>
          </md-button>
  
          <md-button @click.native="deleteRepo(repo)"
                     class="md-icon-button md-list-action">
            <md-icon class="md-primary">delete</md-icon>
          </md-button>
        </md-list-item>
      </md-list>
    </md-card-content>
  
    <md-card-actions>
      <md-button @click.native="createNew()"
                 class="md-icon-button md-raised">
        <md-icon class="md-primary">add</md-icon>
      </md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
// service
import { configure } from '../../services'
const services = configure({
  // host:
})

// import UserInvite from './Invite'

export default {
  name: 'projects',
  // components: {
  //   UserInvite
  // },
  data: function () {
    return {
      toBeDeleted: [],
      repositories: [{
        id: '124',
        name: 'my-repo',
        description: 'a nice repo',
        image: 'people/5'
      }, {
        id: '676',
        name: 'other-repo',
        description: 'My crazy play repo',
        image: 'people/3'
      }]
    }
  },
  methods: {
    deleteRepo(repo) {
      console.log('delete repo', { repo })
    },
    showRepo(repo) {
      console.log('show repo', { repo })
      this.$router.push({ name: 'project', id: id })
    },
    createNew() {
      console.log('create new')
      this.$router.push({ name: 'repo' })
    }
  }
}
</script>

<style>
.input-container label.inputs {
  font-size: 1.2em !important;
}
</style>
