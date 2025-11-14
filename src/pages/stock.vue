<script>
import VueNumberComponent from "@chenfengyuan/vue-number-input";
import API_REQUEST from '@/controller/api.js'

export default {
  name: "stock",
  components: {VueNumberComponent},
  data() {
    return {
      search: "",
      products: [],
      loading: false,
      input_disabled: false,
      headers: [
        {title: 'IMG', value: 'img_url',},
        {title: 'ID', value: 'code',},
        {title: 'CANTIDAD', value: 'quantity',},
        {title: 'PRODUCTO', value: 'name',},
        {title: '$PÚBLICO', value: 'public_price',},
        {title: '$SOCIO', value: 'social_price',},
        {title: 'PVN', value: 'pvn',},
        {title: 'PALABRAS CLAVE', value: 'keywords',},
      ]
    };

  },
  mounted() {
    this.initial()
  },
  methods: {
    async initial(){
      this.loading = true
      const _products = await API_REQUEST('get', 'products/')
      console.log(_products)
      this.products = _products
      this.loading = false
    }
  }
}
</script>

<template>
  <v-card
    prepend-icon="mdi-warehouse"
    elevation="0"
    rounded="xl"
    class="pa-3"
    title="INVENTARIO"
  >

    <template #append>
      <v-btn
        color="primary"
        rounded="xl"
        flat
        block
        prepend-icon="mdi-plus"
        text="EDITAR INVENTARIO"
        @click=" input_disabled = !input_disabled "
      />
    </template>


    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="search"
          label="BUSCAR PRODUCTO(S)"
          bg-color="secondary-lighten-1"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          rounded="xl"
          :clearable="$vuetify.display.mobile"
          placeholder="ESCRIBA NOMBRE O PALABRA"
        />
      </v-col>

    </v-row>


    <v-card-item>
      <v-data-table
        :items="products"
        :loading="loading"
        :headers="headers"
        :search="search"
        items-per-page="100"
        :mobile="!!$vuetify.display.mobile"
        :hide-default-header="!!$vuetify.display.mobile"
        no-data-text="NO HAY PRODUCTOS"
      >
        <template #item.img_url="{ item }">
          <v-img
            width="60"
            aspect-ratio="1/1"
            cover
            :src="item.img_url"
          />
        </template>

        <template #item.quantity="{ item }">
          <VueNumberComponent
            v-model="item.quantity"
            inputtable
            center
            :step="1"
            :attrs="{ style: 'color: black;' }"
            :max="999"
            :min="0"
            :disabled="input_disabled"
            autofocus
            controls
          />
        </template>
      </v-data-table>
    </v-card-item>
  </v-card>
</template>
