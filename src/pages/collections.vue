<script>
export default {
  name: "collections",
  data() {
    return {
      search: "",
      selected: [],
    }
  }
  ,

}
</script>

<template>
  <v-card
    prepend-icon="mdi-collapse-all"
    elevation="0"
    rounded="xl"
    class="pa-3"
    title="COLECCIONES"
  >
    <template #append>
      <v-btn
        color="primary"
        rounded="xl"
        flat
        block
        prepend-icon="mdi-plus"
        text="NUEVO CONSOLIDADO"
        @click="openOrderDialog"
      />
    </template>


    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="search"
          label="BUSCAR CONSOLIDADO(S)"
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

  </v-card>
</template>

