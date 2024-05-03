export const moduleB = {
  state: {
    posts: [
      {
        id: 1,
        title: "첫 번째 게시글 제목",
        content: "첫 번째 게시글 내용",
        author: "글쓴이1",
      },
      {
        id: 2,
        title: "두 번째 게시글 제목",
        content: "두 번째 게시글 내용",
        author: "글쓴이2",
      },
      {
        id: 3,
        title: "test",
        content: "오오옹\n오오올",
        author: "글쓴이3",
      },
    ],
  },

  getters: {
    getPosts(state, value) {
      return state.posts;
    },
  },

  mutations: {
    createPost(state, value) {
      state.posts.push(value);
    },
    deletePost(state, value) {
      state.posts = state.posts.filter((post) => post.id !== value);
      console.log(state.posts);
    },
  },
};
