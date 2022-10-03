<template>
  <div>
    <q-dialog v-model="loading">
      <q-spinner-ios color="primary" size="3rem" :thickness="5" />
    </q-dialog>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useCounterStore } from '../../stores/example-store';

export default {
  setup() {
    const store = useCounterStore();
    const loading = computed({
      get: () => store.loading,
      set: (val) => {
        store.loading = val;
      },
    });
    return {
      loading,
    };
  },
  created() {},
};
</script>
