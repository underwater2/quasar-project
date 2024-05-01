<template>
  <q-page class="flex flex-center">
    <div class="q-gutter-lg">
      <div v-for="post in posts" :key="post.id">
        <RouterLink :to="`/post/${post.id}`">
          {{ post.title }}
        </RouterLink>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import posts from "../data/posts.json";
import { RouterLink } from "vue-router";

defineOptions({
  name: "IndexPage",
});
</script>
