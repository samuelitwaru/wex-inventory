<template>
  <div>
    <q-btn color="primary" icon="add" label="Register" @click="show = true" />
    <q-dialog v-model="show">
      <q-card style="min-width: 500px">
        <q-card-section>
          <h5 class="q-my-xs">Register Inventory</h5>
          <q-input v-model="name" type="text" label="Name" />
          <q-input v-model="brand" type="text" label="Brand" />
          <q-input v-model="description" type="text" label="Description" />
          <q-input v-model="barcode" type="text" label="Barcode" />
          <q-input v-model="quantity" type="number" label="Quantity" />
          <q-input
            v-model="limit"
            type="number"
            label="Stock limit"
            min="0"
            max="100"
          />
          <q-separator spaced dark />
          <q-form
            @submit="createInventory"
            @reset="resetForm"
            class="q-gutter-md"
          >
            <div class="q-py-xs">
              <q-btn label="Submit" type="submit" color="primary" />
              <q-btn
                label="Reset"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm"
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    createInventory() {
      this.$setLoading(true);
    },

    resetForm() {},
  },
};
</script>

<style></style>
