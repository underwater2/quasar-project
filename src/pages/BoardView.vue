<template>
  <div>
    <h2>{{ id }}번 게시물</h2>
    <p>{{ post.author }}</p>
    <hr />
    <p>{{ post.content }}</p>
    <h5>댓글</h5>
    <div v-for="comment in post.comments" :key="comment.id">
      <p>{{ comment.id }}번 댓글</p>
      <p>{{ comment.author }}</p>
      <p>{{ comment.content }}</p>
      <hr />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import Posts from "../data/posts.json";

const route = useRoute();
const id = route.params.id;
const post = Posts[id - 1];
</script>
