import { boot } from 'quasar/wrappers';
import { useCounterStore } from 'src/stores/example-store';

const store = useCounterStore();

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  // something to do
  app.config.globalProperties.$setLoading = (loading) => {
    store.loading = loading;
  };
});
