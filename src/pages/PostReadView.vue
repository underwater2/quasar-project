<template>
  <div>
    <h2>{{ id }}번 게시물</h2>
    <p>{{ post.author }}</p>
    <hr />
    <p>{{ post.content }}</p>
    <q-btn @click="deletePost">삭제</q-btn>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const router = useRouter();
const store = useStore();

const id = route.params.id; //String
const posts = computed(() => store.state.moduleB.posts);
const post = posts.value[id - 1];

function deletePost() {
  store.commit("deletePost", Number(id));
  router.push("/");
}
</script>
