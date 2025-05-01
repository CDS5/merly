<script>
export default {
  name: "labels",
  data() {
    return {
      search: "",
      selected: [],
      labels:[],
      headers: [
        { title: "NOMBRE", value: "name" },
        { title: "DESCRIPCION", value: "description" },
        { title: "ESTATUS", value: "status" },
        { title: "ACCIONES", value: "actions", sortable: false },
      ],
    }
  },
}
</script>

<template>
  <v-card
    prepend-icon="mdi-bookmark-multiple"
    elevation="0"
    rounded="xl"
    class="pa-3"
    title="ETIQUETAS"
  >
    <template #append>
      <v-btn
        color="primary"
        rounded="xl"
        flat
        block
        prepend-icon="mdi-plus"
        text="NUEVA ETIQUETA"
        @click="openOrderDialog"
      />
    </template>

    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="search"
          label="BUSCAR ETIQUETA(S)"
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
        :items="labels"
        :headers="headers"
        :search="search"
        item-value="index"
        items-per-page="20"
        :mobile="!!$vuetify.display.mobile"
        no-data-text="NO HAY ETIQUETAS"
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
</template>
