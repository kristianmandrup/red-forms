
<template>
  <md-card md-primary
           md-with-hover>
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">{{ title }} </div>
        <div class="md-subhead">{{ subtitle }}</div>
      </md-card-header-text>
    </md-card-header>
  
    <md-card-content>
      <md-list>
        <md-list-item v-for="item in items"
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
  name: 'entity-list',
  // components: {
  //   UserInvite
  // },
  props: {
    entity: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      error: '',
      items: [],
      toBeDeleted: []
    }
  },
  async created() {
    let name = `$${this.entity}`
    this.service = services[name]

  },
  mounted() {
    this.$nextTick(async tick => {
      await this.loadData()
    })
  },
  methods: {
    async loadData() {
      await this.getItems()
    },

    async getItems() {
      try {
        let items = await this.service.findAll()
        this.items = items
      } catch (error) {
        this.error = error
      }
    },

    deleteOne(item) {
      console.log('delete', { item })
      try {
        let deleted = await service.deleteById({ id: item.id })
      } catch (error) {
        this.error = error
      }
    },
    showOne(item) {
      console.log('show', { item })
      this.$router.push({ name: this.entity, id: item.id })
    },
    createNew() {
      console.log('create')
      this.$router.push({ name: this.entity })
    }
  }
}
</script>
