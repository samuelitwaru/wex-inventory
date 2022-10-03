<template>
  <div>
    <div class="flex justify-between q-my-sm">
        <h5 class="q-my-xs">Inventory</h5>
        <create-inventory />
    </div>
    <inventory-table />
  </div>
</template>
<script>
import InventoryTable from 'src/components/inventory/InventoryTable.vue';
import CreateInventory from 'src/components/inventory/CreateInventory.vue';

export default {
  components: { InventoryTable, CreateInventory },

};
</script>

<style>

</style>
