<template>
<div>
  <div class="category-content">
  <v-container grid-list-md>
    <h1 class="category">Hello world</h1>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm3>
        <article-item/>
      </v-flex>
      <v-flex d-flex xs12 sm3>
        <article-item/>
      </v-flex>
      <v-flex d-flex xs12 sm3>
        <article-item/>
      </v-flex>
      <v-flex d-flex xs12 sm3>
            <article-item/>
      </v-flex>
    </v-layout>
  </v-container>
  </div>
  <div class="category-content">
  <v-container grid-list-md>
    <h1 class="category">Hello world</h1>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6>
        <article-item/>
      </v-flex>
      <v-flex d-flex xs12 sm6>
        <article-item/>
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</div>
</template>

<script>
import PostsService from "@/services/PostsService"
import Header from "./Header"
import Article from "./Article"

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
    "header-item": Header,
    "article-item": Article
  }
};
</script>

<style scoped>
.category {
  background-color: black;
  padding-left: 10px;
  padding-top: 0;
  padding-bottom: 0;
  color: white;
}
</style>
