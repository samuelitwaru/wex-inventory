import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    loading: false,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter += 1;
    },
    async waitAndAdd() {
      setTimeout(() => {
        this.counter += 1;
      }, 2000);
    },
  },
});
