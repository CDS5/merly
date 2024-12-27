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

      <v-card-text>
        NOTA: CADA SALTO DE LÍNEA ES UN PRODUCTO
      </v-card-text>
      <v-card-item>
        <v-textarea
          v-model="txtFastQuick"
          label="CLAVES Y CANTIDAD"
          prepend-icon="mdi-pencil-box-outline"
          variant="outlined"
          rounded="xl"
          class="pa-2"
          auto-grow
          autofocus
          placeholder="Ej. PT758,2"
        />
      </v-card-item>

      <v-card-actions>
        <v-btn
          color="primary"
          text="GUARDAR"
          @click="updateProductsFastQuick"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>


  <v-card
    prepend-icon="mdi-basket"
    elevation="0"
    rounded="xl"
    class="pa-3 ma-3"
    title="PEDIDO"
    :subtitle="`${id} ${client}`"
  >

    <template #append>

      <v-menu v-if="$vuetify.display.mobile">
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-dots-vertical" variant="text" v-bind="props"></v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-btn
              rounded="xl"
              flat
              block
              text="LIMPIAR PEDIDO"
              prepend-icon="mdi-basket-off-outline"
              color="red  "
              @click="clearOrder"
            />
          </v-list-item>

          <v-list-item>
            <v-btn
              rounded="xl"
              flat
              block
              text="COMPARTIR"
              prepend-icon="mdi-share-variant"
              color="success"
              @click="getShareOrder"
            />
          </v-list-item>

          <v-list-item>
            <v-btn
              rounded="xl"
              block
              prepend-icon="mdi-pencil"
              color="primary"
              text="CAPTURA RÁPIDA"
              flat
              @click="dialogQuickCapture=true"
            />
          </v-list-item>
        </v-list>
      </v-menu>

      <template v-else>
        <v-btn
          rounded="xl"
          flat
          text="LIMPIAR PEDIDO"
          prepend-icon="mdi-basket-off-outline"
          color="red"
          @click="clearOrder"
        />

        <v-btn
          rounded="xl"
          flat
          text="COMPARTIR"
          prepend-icon="mdi-share-variant"
          color="success"
          @click="getShareOrder"
        />


        <v-btn
          rounded="xl"
          prepend-icon="mdi-pencil"
          color="primary"
          text="CAPTURA RÁPIDA"
          flat
          @click="dialogQuickCapture=true"
        />
      </template>

    </template>

    <template #text>
      <v-row>
        <v-col
          cols="12"
          lg="3"
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
                max="999999"
                placeholder="COLOQUE SU ID O USUARIO"
                :loading="loading"
                @blur="getNameById"
                @click:clear="id=''"
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
                placeholder="COLOQUE EL NOMBRE"
                :loading="loading"
                @click:clear="client=''"
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
                placeholder="COLOQUE LOS PUNTOS SI YA EXISTEN EN SISTEMA"
                :loading="loading"
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
                hide-details
                step="any"
                placeholder="COLOQUE AQUÍ LA BONIFICACIÓN CON O SIN EL 10%"
                prefix="$"
                :loading="loading"
                @click:clear="originalComission=0"
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
                class="text-h6 text-success"
                v-text="isActiveComission ? `10% agregado: $${getAddcommission}`: ''"
              />
            </v-col>

            <v-col cols="12">
              <v-textarea
                v-model="notes"
                bg-color="yellow-accent-1"
                class="mt-5"
                label="NOTAS"
                prepend-inner-icon="mdi-note"
                variant="outlined"
                rounded="xl"
                placeholder="ESCRIBA RECORDATORIOS O NOTAS"
                :loading="loading"
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
                disabled
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="orderPVN"
                label="PVN PEDIDO"
                prepend-inner-icon="mdi-dots-triangle"
                variant="outlined"
                readonly
                rounded="xl"
                disabled
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
                disabled
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="getProductsOrderQuantity"
                label="CANTIDAD DE PRODUCTOS"
                prepend-inner-icon="mdi-numeric"
                variant="outlined"
                readonly
                rounded="xl"
                disabled
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="finalOrderPriceAndComission"
                label="PAGO TOTAL"
                prepend-inner-icon="mdi-cash"
                variant="outlined"
                readonly
                rounded="xl"
                hide-details
                :base-color=" finalOrderPriceAndComission > 0 ? 'error' : finalOrderPriceAndComission < 0 ? 'success' : '' "
              />
              <div
                v-if="finalOrderPriceAndComission != 0.00"
                :class="`text-h6  text-${finalOrderPriceAndComission > 0 ? 'error' : 'success'}`"
                v-text="`${finalOrderPriceAndComission > 0 ? 'TOTAL A PAGAR' : 'SALDO A FAVOR'}`"
              />
            </v-col>

<!--            <v-col cols="12">-->
<!--              <v-checkbox-->
<!--                v-model="isRounded"-->
<!--                label="REDONDEAR PRODUCTOS"-->
<!--                @click="updateIsRounded"-->
<!--              />-->
<!--            </v-col>-->


          </v-row>
        </v-col>

        <v-col
          cols="12"
          lg="7"
        >
          <v-card
            elevation="0"
            rounded="xl"
            prepend-icon="mdi-cart"
            title="LISTA"
            :color="packOrder.color"
          >
            <template #append>

              <v-tooltip
                text="VACÍAR LISTA"
              >
                <template v-slot:activator="{ props }">
                  <v-btn
                    v-bind="props"
                    icon="mdi-cart-arrow-up"
                    color="error"
                    flat
                    :disabled="getProductsSelected.length <= 0"
                    @click="clearList"
                  />
                </template>
              </v-tooltip>


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
                <strong>{{ stackTxt.title }}</strong>
                <br>
                {{ stackTxt.text }}
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
                  {{ getSubPVN(item) }}
                </template>

                <template #item.sub_price="{item}">
                  ${{ getSubPrice(item) }}
                </template>

                <template #item.action_check="{item}">
                  <v-checkbox
                    v-model="item.check"
                    hide-details
                    :label="`${item.check?'SI ✅':'NO ❌'}`"
                  />
                </template>

                <template #item.action_delete="{item}">
                  <v-tooltip
                    text="BORRAR PRODUCTO"
                  >
                    <template v-slot:activator="{ props }">
                      <v-btn
                        v-bind="props"
                        density="comfortable"
                        color="error"
                        icon="mdi-delete"
                        flat
                        @click="item.quantity = 0"
                      />

                    </template>
                  </v-tooltip>


                </template>
              </v-data-table>

              <h2
                v-if="packOrder.text"
                class="mt-3"
                v-text="`${packOrder.text}`"
              />

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
            placeholder="ESCRIBA NOMBRE O PALABRA"
          />
        </v-col>
      </v-row>
    </template>


    <v-card-item>
      <v-data-table
        :items="[...products.values()]"
        :headers="headers"
        :search="search"
        items-per-page="100"
        :mobile="!!$vuetify.display.mobile"
        :hide-default-header="!!$vuetify.display.mobile"
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
import funcGetNameById from "@/assets/ids.js";

export default {
  components: {
    VueNumberComponent
  },
  data() {
    return {
      loading: false,
      txtFastQuick: '',
      snackFastQuick: false,
      stackTxt: {
        title: '',
        text: ''
      },

      id: '',
      client: '',
      search: '',
      pvn: 0,
      notes: '',
      isRounded: false,


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
          title: '¿ENTREGADO?',
          value: 'action_check',
        },
        {
          title: 'ELIMINAR',
          value: 'action_delete',
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

    shareOrder() {
      return "*👤 PEDIDO: " + this.id + " - " + this.client + "*\n\n" +
        "💵 DINERO PEDIDO: $" + this.finalOrderPrice + "\n" +
        "🪙 BONIFICACIONES: $" + this.getAddcommission + "\n" +
        "💰 TOTAL A PAGAR: $" + this.finalOrderPriceAndComission + "\n\n" +
        "▪️ PVN ACTUALES: " + this.pvn + "\n" +
        "▫️ PVN PEDIDO: " + this.orderPVN + "\n" +
        "🔳 PVN TOTALES: " + this.finalOrderPVN + "\n" +
        "🔢 CANTIDAD DE PRODUCTOS: " + this.getProductsOrderQuantity + "\n\n" +
        this.packOrder.text + "\n\n" +
        "📋 LISTA:\n" +
        this.getProductsSelected.map(item => "* " + item.quantity + " " + item.name + "  (" + item.quantity + " x " + item.price.member + ") = $" + item.sub_price).join("\n") + "\n\n" +
        "🔑 CLAVES:\n" +
        '```' + this.getProductsSelected.map(item => item.id + "," + item.quantity).join("\n") + "```";
    },

    packOrder() {
      let obj = {
        color: 'blue-grey-lighten-5',
        text: ''
      }
      if (this.finalOrderPVN >= 8800) {
        obj.color = '#5271ff'
        obj.text = '🔵 CERRADO/A CON: 8800'
      } else if (this.finalOrderPVN >= 4400 && this.finalOrderPVN < 8800) {
        obj.color = '#e50c80'
        obj.text = '🟣 CERRADO/A CON: 4400'
      } else if (this.finalOrderPVN >= 2200 && this.finalOrderPVN < 4400) {
        obj.color = '#b5d167'
        obj.text = '🟢 CERRADO/A CON: 2200'
      }
      return obj
    },

    finalOrderPriceAndComission() {
      return parseFloat(this.finalOrderPrice - this.getAddcommission).toFixed(2) || this.finalOrderPrice
    },

    txtFastQuickCopy() {
      let copy = ''; // Reinicia la variable
      for (const item of this.getProductsSelected.values()) {
        copy += `${item.id},${item.quantity}\n`;
      }
      return copy;
    },

    getProductsOrderQuantity() {
      return this.getProductsSelected.reduce((quantity, item) => quantity + item.quantity, 0)
    },

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

    getSubPVN() {
      return item => {
        item.sub_pvn = item.pvn * item.quantity
        return item.sub_pvn
      }
    },
    getSubPrice() {
      return item => {
        item.sub_price = item.price.member * item.quantity
        return item.sub_price
      }
    },

    getDiscountMember() {
      return item => {
        item.price.member = item.id.startsWith('HE') ? item.price.public : Math.round(item.price.public / 2)
        return item.price.member
      }
    },
    getPVNMember() {
      return item => {
        if (item.id.startsWith('HE')) {
          item.pvn = 0
        } else {
          let value = 0.3858 * item.price.public + 0.7285;
          let integerPart = Math.floor(value);
          let decimalPart = value - integerPart;
          if (decimalPart >= 0.6) {
            item.pvn = Math.ceil(value);
          } else {
            item.pvn = Math.floor(value);
          }
        }
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
  methods: {

    updateIsRounded() {
      this.isRounded = !this.isRounded;
      console.log(this.isRounded);
      for (const item of this.products.values()) {
        console.log(item)
        item.price.member = this.isRounded ? Math.round(item.price.public / 2) : item.price.public / 2;
      }
    },
    updateProductsFastQuick() {
      let productData = {};

      this.txtFastQuick = this.txtFastQuick.replace(/"/g, "");
      this.txtFastQuick = this.txtFastQuick.replace(" ", "");
      const lines = this.txtFastQuick.split(/[\n\s]+/);

      lines.forEach((line) => {
        const [code, quantity] = line.split(","); // Dividir en código y cantidad
        if (code && quantity && !isNaN(quantity)) {
          productData[code.trim()] = parseInt(quantity.trim(), 10); // Agregar al objeto
        }
      });

      for (let key in productData) {
        if (this.products.has(key)) {
          let obj = this.products.get(key)
          obj.quantity = productData[key]
          this.products.set(key, obj);
        }
      }
      this.dialogQuickCapture = false;
      this.txtFastQuick = '';
    },

    getNameById() {
      this.loading = true
      this.client = funcGetNameById(this.id)
      this.loading = false
    },

    updateComission() {
      this.isActiveComission = !this.isActiveComission;
    },

    async clearList() {
      for (const item of this.getProductsSelected) {
        item.quantity = 0;
      }
    },

    async clearOrder() {
      this.id = '';
      this.client = '';
      this.search = '';
      this.pvn = 0;
      this.notes = '';
      this.clearList();
    },

    async getFastQuick() {
      this.stackTxt.title = '¡CLAVES COPIADAS!';
      this.stackTxt.text = this.txtFastQuickCopy;
      this.snackFastQuick = true;
      try {
        await navigator.clipboard.writeText(this.txtFastQuickCopy);
      } catch (err) {
        console.error("Error al copiar al portapapeles: ", err);
      }
    },

    async getShareOrder() {
      let replace = this.shareOrder.replace(/<br\/>/g, '\n');
      this.stackTxt.title = '¡PEDIDO COPIADO!';
      this.stackTxt.text = replace;
      this.snackFastQuick = true;
      try {
        await navigator.clipboard.writeText(replace);
        console.log('Order copied to clipboard successfully');
      } catch (error) {
        console.error('Error copying order to clipboard:', error);
      }

    }
  },

};
</script>
