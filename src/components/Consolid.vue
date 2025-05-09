<template>
  <v-card
    prepend-icon="mdi-text-box-multiple"
    elevation="0"
    rounded="xl"
    class="pa-3"
    title="CONSOLIDADOS"
    subtitle="TODOS LOS PEDIDOS"
  >
    <template #append>
      <v-btn
        color="primary"
        rounded="xl"
        flat
        block
        prepend-icon="mdi-plus"
        text="NUEVO"
        @click="openOrderDialog"
      />
    </template>


    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="search"
          label="BUSCAR PEDIDO(S)"
          bg-color="primary-lighten-1"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          rounded="xl"
          placeholder="ESCRIBA NOMBRE O PALABRA"
        />
      </v-col>

      <v-col cols="12">
        <v-btn
          color="error"
          rounded="xl"
          flat
          prepend-icon="mdi-delete"
          text="ELIMINAR"
          :disabled="selected.length === 0"
          @click="deleteSeletedOrders"
        />
      </v-col>
    </v-row>

    <v-card-item>
      <v-data-table
        v-model="selected"
        :items="orders"
        :headers="headers"
        :search="search"
        item-value="index"
        items-per-page="20"
        :mobile="!!$vuetify.display.mobile"
        no-data-text="NO HAY PEDIDOS"
        density="compact"
        show-select
      >
        <template #item.actions="{index, item}">
          <v-tooltip
            text="EDITAR PEDIDO"
          >
            <template #activator="{ props }">
              <v-btn
                v-bind="props"
                density="comfortable"
                color="light-blue-darken-3"
                icon="mdi-pencil"
                flat
                @click="openEditOrderDialog(index)"
              />
            </template>
          </v-tooltip>

          <v-tooltip
            text="ELIMINAR PEDIDO"
          >
            <template #activator="{ props }">
              <v-btn
                v-bind="props"
                density="comfortable"
                color="error"
                icon="mdi-delete"
                flat
                @click="openDeleteOrderDialog(index, item)"
              />
            </template>
          </v-tooltip>
        </template>
      </v-data-table>
    </v-card-item>
  </v-card>

  <v-dialog
    v-model="dialog_order"
    persistent
    fullscreen
  >
    <OrderComponent
      :order="currenOrder"
      :dialog-order-parent="dialog_order"
      @update:dialog-order-parent="dialog_order = $event"
    />
  </v-dialog>

  <MyAlert
    v-if="myAlert.isActive"
    :my-alert="myAlert"
    @update:is-active="myAlert.isActive = $event"
    @confirm="handleConfirmAlert"
  />
</template>

<script>

import {useOrderStore} from "@/stores/orderStore.js";
import OrderComponent from "@/components/Order.vue";
import MyAlert from "@/components/MyAlert.vue";

const _useOrderStore = useOrderStore();

export default {
  name: "Consolid",
  components: {MyAlert, OrderComponent},
  data() {
    return {

      myAlert: {
        isActive: false,
        title: '',
        message: '',
        type: '',
        icon: '',
      },

      selected: [],

      orders: _useOrderStore.orders,

      currenOrder: null,
      currentOrderIndex: null,

      dialog_order: false,

      search: '',
      headers: [
        {title: 'ID', value: 'state.id',},
        {title: 'CLIENTE', value: 'state.client',},
        {title: '$DINERO PEDIDO', value: 'state.price',},
        {title: '$BONIFICACIÓN', value: 'state.bonus',},
        {title: '$TOTAL', value: 'state.final_price',},
        {title: 'REFERENCIA', value: 'state.reference',},
        {title: 'FECHA', value: 'state.created_at',},
        {title: 'ACCIONES', value: 'actions',},
      ]
    };
  },

  methods: {

    openOrderDialog() {
      this.currenOrder = _useOrderStore.addOrder();
      this.dialog_order = true;
    },

    openEditOrderDialog(index) {
      this.currenOrder = _useOrderStore.getOrder(index);
      this.dialog_order = true;
    },
    updateOrder() {

    },

    openDeleteOrderDialog(index, item) {
      this.currentOrderIndex = index;
      this.myAlert = {
        isActive: true,
        title: 'ELIMINAR PEDIDO',
        message: `¿ESTÁ SEGURO DE ELIMINAR EL PEDIDO ${item.state.id} - ${item.state.client}?`,
        type: 'error',
        icon: 'mdi-delete',
      };
    },

    deleteOrder() {
      _useOrderStore.removeOrder(this.currentOrderIndex);
      this.myAlert.isActive = false;
      this.currentOrderIndex = null;
    },

    deleteSeletedOrders(){
      console.log(this.selected)
    },

    handleConfirmAlert() {
      this.deleteOrder()
    }
  }
}
</script>
