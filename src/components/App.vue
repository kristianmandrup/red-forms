<template>
  <div id="app">
    <md-card>
      <md-card-header>
        <div class="md-title">Material Design with Vue.js 2 Demo</div>
        <div class="md-subhead">by CodingTheSmartWay.com</div>
      </md-card-header>
      <md-card-content>
  
        <md-button class="md-raised md-primary"
                   v-on:click="fillTable()">Fill table</md-button>
        <md-button class="md-raised md-primary"
                   v-on:click="clearTable()">Clear table</md-button>
        <br />
        <md-table>
          <md-table-header>
            <md-table-row>
              <md-table-head>First name</md-table-head>
              <md-table-head>Last name</md-table-head>
              <md-table-head>Email</md-table-head>
            </md-table-row>
          </md-table-header>
          <md-table-body>
            <md-table-row v-for="contact in contacts">
              <md-table-cell>{{contact.firstname}}</md-table-cell>
              <md-table-cell>{{contact.lastname}}</md-table-cell>
              <md-table-cell>{{contact.email}}</md-table-cell>
            </md-table-row>
          </md-table-body>
        </md-table>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      contacts: []
    }
  },
  methods: {
    fillTable: function () {
      this.contacts.push({ firstname: 'Sebastian', lastname: 'Eschweiler', email: 's.eschweiler@mail.com' });
      this.contacts.push({ firstname: 'Bill', lastname: 'Smith', email: 'b.smith@mail.com' });
      this.contacts.push({ firstname: 'Ann', lastname: 'Parker', email: 'a.parker@mail.com' });
    },
    clearTable: function () {
      this.contacts.splice(0, this.contacts.length);
    }
  }
}
</script>
<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style>
code {
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
  font-size: 0.9em;
  white-space: pre-wrap;
  color: #2c3e50;
}

code::before,
code::after {
  content: '`';
}
</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
#app {
  text-align: center;
}

#app h1 {
  color: #2c3e50;
  font-weight: 300;
  margin: 0;
}

.banner {
  height: 200px;
  background-color: #f6f6f6;
  padding: 50px 10px;
}

.bottom {
  padding: 80px 10px;
  font-size: 24px;
  font-weight: 300;
}

.fade {
  font-size: 14px;
}

.logo {
  animation: spin 4s 1s infinite linear
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
