<template>
  <div class="q-gutter-md" style="max-width: 700px">
    <q-input v-model="title" filled label="Title" />
    <q-input v-model="content" filled type="textarea" />
    <q-btn @click="createPost">글쓰기</q-btn>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const title = ref("");
const content = ref("");

const router = useRouter();

const store = useStore();
const posts = computed(() => store.state.moduleB.posts);

function createPost() {
  store.commit("createPost", {
    id: posts.value.length + 1,
    title: title.value,
    content: content.value,
    author: "글쓴이",
  });
  router.push(`/post/${posts.value.length}`);
}
</script>
