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
        <md-list-item v-for="item in projects"
                      :key="item.id">
          <md-avatar>
            <img src="https://placeimg.com/40/40/people/5"
                 :alt="item.description">
          </md-avatar>
  
          <span>{{ item.name }}</span>
          <md-button @click.native="showOne(item)"
                     class="md-icon-button md-list-action">
            <md-icon class="md-primary">info</md-icon>
          </md-button>
  
          <md-button @click.native="deleteOne(item)"
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
      projects,
    }
  },
  methods: {
    deleteOne(item) {
      console.log('delete project', { item })
    },
    showOne(item) {
      console.log('show project', { item })
      this.$router.push({ name: 'project', id: id })
    },
    createNew() {
      console.log('create new')
      this.$router.push({ name: 'project' })
    }
  }
}
</script>

<style>
.input-container label.inputs {
  font-size: 1.2em !important;
}
</style>
