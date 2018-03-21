<template>
  <div>
  <v-navigation-drawer clipped fixed v-model="drawer" app>
    <v-list dense>
      <v-list-tile @click.prevent="setTitle()" v-for="nav in navData" :key="nav.title" :to="nav.route">
        <v-list-tile-action>
          <v-icon>{{ nav.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ nav.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar app fixed clipped-left>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
  </v-toolbar>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      drawer: false,
      title: ''
    };
  },
  props: {
    navData: {
      type: Array,
      required: true
    }
  },
  methods: {
    setTitle() {
      this.title = this.$route.name;
    }
  },
  mounted() {
    this.title = this.$route.name;
  }
};
</script>

<style lang="sass" scoped></style>

