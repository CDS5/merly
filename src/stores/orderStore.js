import {defineStore} from "pinia";
import Order from "@/models/Order.js";

export const useOrderStore = defineStore('orderStore', {
  state: () => ({
    orders: [],
  }),
  /*persist: {
    enabled: true,
    strategies: [
      {
        key: 'orderStore',
        storage: localStorage,
      },
    ],
  },*/

  actions: {
    addOrder() {
      const newOrder = new Order();
      this.orders.push(newOrder);
      return newOrder;
    },
    removeOrder(index) {
      this.orders.splice(index, 1);
    },
    getOrder(index) {
      return new Order(this.orders[index].state);
    },
    updateOrder(index, updatedOrder) {
      this.orders[index] = new Order(updatedOrder.state);
    },
    clearOrders() {
      this.orders = [];
    },
  },
})
