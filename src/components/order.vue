<template>
  <v-dialog
    v-model="dialogQuickCapture"
  >
    <v-card
      elevation="0"
      rounded="xl"
      prepend-icon="mdi-pencil"
      class="pa-2 ma-2"
      title="CAPTURA RÁPIDA"
    >
      <v-card-item>

        <v-textarea
          v-model="txtFastQuick"
          clearable
          label="CLAVES Y CANTIDAD"
          prepend-icon="mdi-pencil-box-outline"
          variant="outlined"
          rounded="xl"
          class="pa-2"
          placeholder="Ej. PT758,2"
        />
        {{ txtFastQuick }}

      </v-card-item>

      <v-card-actions>
        <v-btn
          color="primary"
          text="GUARDAR"
          @click="dialogQuickCapture = false"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-card
    elevation="0"
    rounded="xl"
    prepend-icon="mdi-basket"
    class="pa-3 ma-3"
    title="PEDIDO"
    subtitle="CREADO: "
  >
    <template #append>
      <v-tooltip
        text="CAPTURA RÁPIDA"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            icon="mdi-pencil"
            color="primary"
            flat
            @click="dialogQuickCapture=true"
          />
        </template>
      </v-tooltip>
    </template>

    <template #text>
      <v-row>
        <v-col
          cols="12"
          lg="4"
        >
          <v-row no-gutters>
            <v-col cols="12">
              <v-text-field
                v-model="id"
                label="ID o USUARIO"
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
                label="NOMBRE DEL CLIENTE"
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
                label="PVN ACTUALES"
                prepend-inner-icon="mdi-dots-triangle"
                variant="outlined"
                rounded="xl"
                clearable
                type="number"
                placeholder="Coloque los puntos si ya existen en sistema"
                @click:clear="pvn = 0"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="originalComission"
                label="BONIFICACIONES"
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
                class="text-h6 mb-4 text-success"
                v-text="isActiveComission ? `10% agregado: $${getAddcommission}`: ''"
              />
            </v-col>
          </v-row>
        </v-col>

        <v-col
          cols="12"
          lg="2"
        >
          <v-row no-gutters>
            <v-col cols="12">
              <v-text-field
                v-model="finalOrderPrice"
                label="DINERO TOTAL PEDIDO"
                prepend-inner-icon="mdi-currency-usd"
                variant="outlined"
                readonly
                rounded="xl"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="orderPVN"
                label="PVN DEL PEDIDO"
                prepend-inner-icon="mdi-dots-triangle"
                variant="outlined"
                readonly
                rounded="xl"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="finalOrderPVN"
                label="PVN TOTALES"
                prepend-inner-icon="mdi-dots-triangle"
                variant="outlined"
                readonly
                rounded="xl"
              />
            </v-col>
          </v-row>
        </v-col>

        <v-col
          cols="12"
          lg="6"
        >
          <v-card
            elevation="0"
            rounded="xl"
            color="blue-grey-lighten-5"
            prepend-icon="mdi-basket"
            title="LISTA"
          >
            <template #append>
              <v-tooltip
                text="COPIAR CLAVES"
              >
                <template v-slot:activator="{ props }">
                  <v-btn
                    v-bind="props"
                    icon="mdi-content-copy"
                    color="blue"
                    flat
                    :disabled="getProductsSelected.length <= 0"
                    @click="getFastQuick"
                  />
                </template>
              </v-tooltip>
            </template>


            <v-snackbar
              v-model="snackFastQuick"
              color="primary"
              location="top"
            >

              <template #text>
                <strong>¡CLAVES COPIADAS!</strong>
                {{txtFastQuickCopy}}
              </template>



            </v-snackbar>

            <v-card-item>
              <v-data-table
                density="compact"
                items-per-page="100"
                class="bg-transparent"
                disable-sort
                hide-default-footer
                :items="getProductsSelected"
                :headers="headersSelected"
                :hide-default-header="!!$vuetify.display.mobile"
                :mobile="!!$vuetify.display.mobile"
                no-data-text="NO HAY PRODUCTOS SELECCIONADOS"
              >
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
                  ${{ item.price.member * item.quantity }}
                </template>

                <template #item.action="{item}">
                  <v-btn
                    density="comfortable"
                    color="error"
                    icon="mdi-delete"
                    flat
                    @click="item.quantity = 0"
                  />
                </template>
              </v-data-table>
            </v-card-item>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-text-field
            v-model="search"
            label="BUSCAR PRODUCTO(S)"
            bg-color="primary-lighten-1"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            rounded="xl"
            clearable
            placeholder="Escriba el nombre del producto"
          />
        </v-col>
      </v-row>
    </template>


    <v-card-item>
      <v-data-table
        :items="[...products.values()]"
        :headers="headers"
        :search="search"
        items-per-page="10"
        :mobile="!!$vuetify.display.mobile"
        no-data-text="NO HAY PRODUCTOS"
      >
        <template #item.img="{ item }">
          <v-img
            width="60"
            aspect-ratio="1/1"
            cover
            :src="item.img"
          />
        </template>

        <template #item.price.public="{item}">
          ${{ item.price.public }}
        </template>

        <template #item.price.member="{ item }">
          ${{ getDiscountMember(item) }}
        </template>

        <template #item.pvn="{ item }">
          {{ getPVNMember(item) }}
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
      pvn: 0,

      txtFastQuick: '',

      txtFastQuickCopy: '',
      snackFastQuick: false,

      originalComission: 0,
      isActiveComission: false,

      dialogQuickCapture: false,

      products: reactive(map),

      headersSelected: [
        {
          title: 'PRODUCTO',
          value: 'name',
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
          title: 'ACCIÓN',
          value: 'action',
        },
      ],
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
          title: 'PALABRAS CLAVE',
          value: 'alternative_name',
        },

      ]
    }
  },
  computed: {

    finalOrderPrice() {
      return this.getProductsSelected.reduce((price, item) => price + item.price.member * item.quantity, 0)
    },
    finalOrderPVN() {
      return this.orderPVN + parseInt(this.pvn)
    },
    orderPVN() {
      return this.getProductsSelected.reduce((pvn, item) => pvn + item.pvn * item.quantity, 0)
    },
    getProductsSelected() {
      return [...this.products.values()].filter(item => item.quantity > 0)
    },
    getDiscountMember() {
      return item => {
        item.price.member = item.price.public / 2
        return item.price.member
      }
    },
    getPVNMember() {
      return item => {
        item.pvn = Math.round(item.price.public / 2.582)
        return item.pvn
      }
    },
    getAddcommission() {
      let commision = new Float32Array(0)
      if (this.isActiveComission) {
        commision = this.originalComission * 1.10;
      } else {
        commision = this.originalComission;
      }
      return parseFloat(commision).toFixed(2);
    }
  },
  async created() {

  },
  methods: {
    updateComission() {
      this.isActiveComission = !this.isActiveComission;
    },

    async getFastQuick() {
      this.snackFastQuick = true;
      this.txtFastQuickCopy = ''; // Reinicia la variable

      for (const item of this.getProductsSelected.values()) {
        this.txtFastQuickCopy += `${item.id},${item.quantity}\n`;
      }

      try {
        // Copiar el texto al portapapeles
        await navigator.clipboard.writeText(this.txtFastQuickCopy);
        console.log("Texto copiado al portapapeles");
      } catch (err) {
        console.error("Error al copiar al portapapeles: ", err);
      }
    }
  },

};
</script>
