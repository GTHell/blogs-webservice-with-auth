import axios from './Api'

export default {
  fetchPosts() {
    return axios().get('post')
  },
  fetchPost(id) {
    return axios().get('/post/'+id)
  }
}
