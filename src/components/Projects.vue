<template>
  <md-card md-primary
           md-with-hover>
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">Projects</div>
        <div class="md-subhead">Manage your projects</div>
      </md-card-header-text>
    </md-card-header>
  
    <md-card-content>
      <md-list>
        <md-list-item v-for="project in projects"
                      :key="project.id">
          <md-avatar>
            <img src="https://placeimg.com/40/40/people/5"
                 :alt="project.description">
          </md-avatar>
  
          <span>{{ project.name }}</span>
          <md-button @click.native="showProject(project)"
                     class="md-icon-button md-list-action">
            <md-icon class="md-primary">info</md-icon>
          </md-button>
  
          <md-button @click.native="deleteProject(project)"
                     class="md-icon-button md-list-action">
            <md-icon class="md-primary">delete</md-icon>
          </md-button>
        </md-list-item>
      </md-list>
    </md-card-content>
  
    <md-card-actions>
      <md-button @click="deleteSelected()">Delete</md-button>
      <md-button @click="clear()">Clear</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
// service
import { configure } from '../services'
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
      projects: [{
        id: '124',
        name: 'my-proj',
        description: 'a nice project',
        image: 'people/5'
      }, {
        id: '676',
        name: 'other-proj',
        description: 'My crazy plaything',
        image: 'people/3'
      }]
    }
  },
  methods: {
    deleteProject(project) {
      console.log('delete project', { project })
    },
    showProject(project) {
      console.log('show project', { project })
      // , router: this.$router
      // this.$router.push({ name: 'project', id: id })
    },
    clear() {
      console.log('clear')
    },
    // call service to create project
    async deleteSelected() {
      await services.$project.deleteAll({
        ids: this.toBeDeleted
      })
    }
  }
}
</script>

<style>
.input-container label.inputs {
  font-size: 1.2em !important;
}
</style>
