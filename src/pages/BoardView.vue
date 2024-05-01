<template>
  <div>
    <h2>{{ id }}번 게시물</h2>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;
</script>
