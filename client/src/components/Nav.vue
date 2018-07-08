<template>
 <v-app id="inspire" tag="nav">
    <v-toolbar
      color="black"
      dark
      fixed
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>STN</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-navigation-drawer
      fixed
      v-model="drawer"
      clipped
      app
      :width="400"
    >
      <v-list dense>
        <v-list-tile @click.stop="toRoute('home')">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile @click.stop="toRoute('login')">
          <v-list-tile-action>
            <v-icon>account_box</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <slot></slot>
    </v-content>
    <v-footer color="blue-grey" class="white--text" app>
      <span>Vuetify</span>
      <v-spacer></v-spacer>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "nav-item",
  data: () => ({
    drawer: false
  }),
  methods: {
    toRoute: function(path) {
      this.$router.push({name: path});
    }
  },
  props: {
    source: String
  }
};
</script>


