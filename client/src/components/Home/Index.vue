<template>

<div>
  <v-container fluid grid-list-sm>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>Posts</h1>
      </v-flex>
    </v-layout>
      <header-item></header-item>
  </v-container>
</div>
    <!-- <div v-for="post in posts">
      <p>
        <span><b>{{ post.title }}</b></span><br />
        <span>{{ post.description }}</span>
      </p>
    </div> -->
</template>

<script>
import PostsService from "@/services/PostsService";
import Header from "./Header";

export default {
  name: "home",
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      const response = await PostsService.fetchPosts();
      this.posts = response.data;
    }
  },
  components: {
    "header-item": Header
  }
};
</script>
