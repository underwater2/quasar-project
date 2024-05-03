<template>
  <q-page class="column flex-center">
    <div class="q-gutter-lg">
      <div v-for="post in posts" :key="post.id">
        <RouterLink :to="`/post/${post.id}`">
          {{ post.title }}
        </RouterLink>
      </div>
    </div>
    <RouterLink to="/post/create"><q-btn>글쓰기</q-btn></RouterLink>
  </q-page>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const posts = computed(() => store.state.moduleB.posts);

defineOptions({
  name: "BoardsPage",
});
</script>
