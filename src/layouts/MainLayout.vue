<template>
  <q-layout view="lHh Lpr lFf">
    <loading-modal />
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Wex Inventory
        </q-toolbar-title>

        <div></div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
    <q-img
          src="~/assets/string.png"
          :ratio="1"
          style="width: 120px; hieght: 120px"
          spinner-color="primary"
          spinner-size="82px"
        />
      <q-list>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import LoadingModal from 'src/components/index/LoadingModal.vue';

const linksList = [
  {
    title: 'Home',
    icon: 'home',
    link: '/',
  },
  {
    title: 'Inventory',
    icon: 'inventory',
    link: 'inventory',
  },
  {
    title: 'Categories',
    icon: 'category',
    link: 'categories',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    LoadingModal,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
