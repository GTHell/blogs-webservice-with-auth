import PostsService from '@/services/PostsService'

// state
const state = {
  post: [],
  posts: []
}

// getters
const getters = {
  post: state=> state.post,
  allPosts: state => state.posts
}

// actions
const actions = {
  async fetchAllPosts (context, payload) {
    const response = await PostsService.fetchPosts()

    context.commit('SET_ALL_POSTS', response.data)
  },
  async fetchPost (context, payload) {
    const post = await PostsService.fetchPost()

    context.commit('SET_POST', post)
  }
}

// mutations
const mutations = {
  SET_ALL_POSTS: (state, payload) => {
    state.posts = payload
  },
  SET_POST: (state, payload) => {
    state.post = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}