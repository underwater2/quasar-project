<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="dialogState">
      <q-card class="my-card">
        <q-card-section class="row items-center q-pb-none">
          <q-space />
          <q-btn
            @click="toggleDialogState"
            icon="close"
            flat
            round
            dense
            v-close-popup
          />
        </q-card-section>
        <q-card-section>
          <div class="text-h5 text-center">Join Medium.</div>
        </q-card-section>
        <q-card-section>
          <div class="row flex-center">
            <q-btn
              outline
              rounded
              label="Sign up with email"
              icon="local_florist"
            ></q-btn>
          </div>
        </q-card-section>
        <q-card-section class="text-center">
          Already have an account?
          <RouterLink to="/signin">Sign in</RouterLink>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { RouterLink } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const dialogState = computed(() => store.state.moduleA.dialogState);
    function toggleDialogState() {
      store.commit("toggleDialogState");
    }
    return {
      dialogState,
      toggleDialogState,
    };
  },
};
</script>

<style scoped>
.my-card {
  width: 700px;
  height: 700px;
}
</style>
