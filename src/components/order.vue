<template>
  <v-card
    elevation="0"
    rounded="xl"
    prepend-icon="mdi-basket"
    class="pa-3 ma-3"
    title="Pedido"
    subtitle="Selecciona los productos que necesites"
  >
    <template #text>
      <v-row>
        <v-col
          cols="12"
          lg="6"
        >
          <v-row no-gutters>
            <v-col cols="12">
              <v-text-field
                v-model="id"
                label="ID o Usuario"
                prepend-inner-icon="mdi-key"
                variant="outlined"
                type="number"
                rounded="xl"
                clearable
                placeholder="Coloque su ID o Usuario"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="client"
                label="Cliente"
                prepend-inner-icon="mdi-account-circle"
                variant="outlined"
                rounded="xl"
                clearable
                type="text"
                placeholder="Coloque el nombre"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="pvn"
                label="PVN Personales Actuales"
                prepend-inner-icon="mdi-dots-triangle"
                variant="outlined"
                rounded="xl"
                clearable
                type="number"
                placeholder="Coloque los puntos si ya existen en sistema"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="originalComission"
                label="Bonificaciones"
                prepend-inner-icon="mdi-cash"
                variant="outlined"
                rounded="xl"
                clearable
                type="number"
                step="any"
                hide-details
                placeholder="Coloque aquí la bonificación con o sin el 10%"
                prefix="$"
              >
                <template #append>
                  <v-btn
                    v-show="originalComission != null && originalComission > 0"
                    flat
                    :color=" isActiveComission ? 'primary' : 'blue-grey-darken-3'"
                    icon="mdi-numeric-10-circle"
                    @click=" updateComission() "
                  />
                </template>
              </v-text-field>
              <div
                class="text-h6 mb-4"
                v-text="isActiveComission ? `10% agregado: $${commission}`: ''"
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col
          cols="12"
          lg="6"
        />
      </v-row>

      <v-text-field
        v-model="search"
        label="Busca un producto"
        bg-color="primary-lighten-1"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        rounded="xl"
        clearable
        placeholder="Escriba el nombre del producto"
      />
    </template>


    <v-card-item>
      <v-data-table
        :items="[...products.values()]"
        :headers="headers"
        :search="search"
        items-per-page="20"
        :mobile="!!$vuetify.display.mobile"
      >
        <template #item.img="{ item }">
          <v-img
            width="60"
            aspect-ratio="1/1"
            cover
            :src="item.img"
          />
        </template>

        <template #item.price.member="{ item }">
          {{ getDiscountMember(item) }}
        </template>

        <template #item.quantity="{ item }">
          <VueNumberComponent
            v-model="item.quantity"
            inputtable
            center
            size="small"
            :step="1"
            :attrs="{ style: 'color: black;' }"
            :max="99"
            :min="0"
            autofocus
            controls
          />
        </template>

        <template #item.sub_pvn="{item}">
          {{ item.pvn * item.quantity }}
        </template>

        <template #item.sub_price="{item}">
          {{ item.price.member * item.quantity }}
        </template>
      </v-data-table>
    </v-card-item>
  </v-card>
</template>

<script>
import {default as map} from "@/assets/products.js";
import {reactive,} from 'vue';
import VueNumberComponent from '@chenfengyuan/vue-number-input'

export default {
  components: {
    VueNumberComponent
  },
  data() {
    return {
      id: '',
      client: '',
      search: '',

      pvn: null,
      originalComission: null,

      isActiveComission: false,

      products: reactive(map),
      headers: [
        {
          title: 'IMG',
          value: 'img',
        },
        {
          title: 'ID',
          value: 'id',

        },
        {
          title: 'PRODUCTO',
          value: 'name',
        },
        {
          title: '$PÚBLICO',
          value: 'price.public',
        },
        {
          title: '$SOCIO',
          value: 'price.member',
        },
        {
          title: 'PVN',
          value: 'pvn',
        },
        {
          title: 'CANTIDAD',
          value: 'quantity',
        },
        {
          title: 'SUB. PRECIO',
          value: 'sub_price',
        },
        {
          title: 'SUB. PVN',
          value: 'sub_pvn',
        },
        {
          title: 'PALABRAS CLAVE',
          value: 'alternative_name',
        },

      ]
    }
  },
  computed: {
    getDiscountMember() {
      return item => {
        item.price.member = item.price.public / 2
        return item.price.member
      }
    },
    commission() {
      if (this.isActiveComission) {
        return this.originalComission * 1.10;
      } else {
        return this.originalComission;
      }
    }
  },
  async created() {

  },
  methods: {
    updateComission() {
      this.isActiveComission = !this.isActiveComission;
    },

  },

};
</script>
