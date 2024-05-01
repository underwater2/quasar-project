<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="dialogState">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Close icon</div>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
          perferendis totam, ea at omnis vel numquam exercitationem aut, natus
          minima, porro labore.
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

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
