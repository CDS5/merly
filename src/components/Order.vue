<template>
  <v-dialog
    v-model="dialogQuickCapture"
  >
    <v-card
      elevation="0"
      rounded="xl"
      prepend-icon="mdi-pencil"
      title="CAPTURA RÁPIDA"
    >
      <v-card-text>
        NOTA: CADA SALTO DE LÍNEA ES UN PRODUCTO
      </v-card-text>
      <v-card-item>
        <v-checkbox

          v-model="order.state.is_clean_for_fast_quick"
          hide-details
          label="LIMPIAR LISTA Y AGREGAR"
          @update:model-value="order.update_product_prices()"
        />
        <v-textarea
          v-model="order.state.fast_quick"
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
          @click="set_fast_quick"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-card
    prepend-icon="mdi-basket"
    elevation="0"
    rounded="xl"
    class="pa-3"
    title="PEDIDO"
    :subtitle="`${order.state.id} ${order.state.client}`"
  >
    <template #append>
      <v-menu v-if="$vuetify.display.mobile">
        <template #activator="{ props }">
          <v-btn
            icon="mdi-dots-vertical"
            variant="text"
            v-bind="props"
          />
        </template>
        <v-list>
          <v-list-item>
            <v-btn
              rounded="xl"
              flat
              block
              text="LIMPIAR PEDIDO"
              prepend-icon="mdi-basket-off-outline"
              color="red"
              @click="openDialogClear"
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
              @click="copy_to_clipboard(order.share_order())"
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
          @click="openDialogClear"
        />

        <v-btn
          rounded="xl"
          flat
          text="COMPARTIR"
          prepend-icon="mdi-share-variant"
          color="success"
          @click="copy_to_clipboard(order.share_order())"
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

      <v-btn
        rounded="xl"
        flat
        icon="mdi-window-close"
        @click="handleClose"
      />
    </template>

    <template #text>
      <v-row>
        <v-col
          cols="12"
          md="3"
        >
          <v-row no-gutters>
            <v-col cols="12">
              <v-text-field
                v-model="order.state.id"
                label="ID o USUARIO"
                prepend-inner-icon="mdi-key"
                variant="outlined"
                type="number"
                rounded="xl"
                max="999999"
                placeholder="COLOQUE SU ID O USUARIO"
                :loading="loading"
                @blur="getNameById"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="order.state.client"
                label="NOMBRE DEL CLIENTE"
                prepend-inner-icon="mdi-account-circle"
                variant="outlined"
                rounded="xl"
                type="text"
                placeholder="COLOQUE EL NOMBRE"
                :loading="loading"
                @input="event => {order.state.client = event.target.value.toUpperCase()}"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="order.state.pvn_old"
                label="PVN ACTUALES"
                prepend-inner-icon="mdi-dots-triangle"
                variant="outlined"
                rounded="xl"
                type="number"
                placeholder="COLOQUE LOS PUNTOS EXISTENTES EN SISTEMA"
                :loading="loading"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="order.state.bonus_raw"
                label="BONIFICACIONES"
                prepend-inner-icon="mdi-cash"
                variant="outlined"
                rounded="xl"
                type="number"
                hide-details
                step="any"
                placeholder="COLOQUE AQUÍ LA BONIFICACIÓN CON O SIN EL 10%"
                prefix="$"
                :loading="loading"
              >
                <template #append>
                  <v-btn
                    flat
                    :color="order.state.is_active_bonus ? 'primary' : 'blue-grey-darken-3'"
                    icon="mdi-fast-forward-10"
                    @click=" order.update_is_bonus_active() "
                  />
                </template>
              </v-text-field>
              <div
                class="text-h6 text-success"
                v-text="order.state.is_active_bonus ? `10% AGREGADO: $${order.bonus}`: ''"
              />
            </v-col>

            <v-col cols="12">
              <v-textarea
                v-model="order.state.notes"
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
          md="3"
          lg="2"
        >
          <v-row no-gutters>
            <v-col cols="12">
              <v-text-field
                v-model="order.price"
                label="DINERO PEDIDO"
                prepend-inner-icon="mdi-cash"
                variant="outlined"
                readonly
                rounded="xl"
                prefix="$"
                disabled
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="order.pvn"
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
                v-model="order.final_pvn"
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
                v-model="order.products_selected_count"
                label="PRODUCTOS TOTALES"
                prepend-inner-icon="mdi-numeric"
                variant="outlined"
                readonly
                rounded="xl"
                disabled
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="order.state.reference"
                label="REFERENCIA"
                prepend-inner-icon="mdi-ticket-confirmation"
                variant="outlined"
                rounded="xl"
                type="text"
                placeholder="COLOQUE LA REFERENCIA"
                :loading="loading"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="order.final_price"
                label="PAGO TOTAL"
                prepend-inner-icon="mdi-cash"
                variant="outlined"
                readonly
                rounded="xl"
                prefix="$"
                hide-details
                :base-color=" order.final_price > 0 ? 'error' : order.final_price < 0 ? 'success' : '' "
              />
              <div
                v-if="order.final_price != 0.00"
                :class="`text-h6  text-${order.final_price > 0 ? 'error' : 'success'}`"
                v-text="`${order.final_price > 0 ? 'TOTAL A PAGAR' : 'SALDO A FAVOR'}`"
              />
            </v-col>

            <v-col cols="12">
              <v-checkbox
                v-model="order.state.is_rounded_prices"
                label="REDONDEAR PRODUCTOS"
                @update:model-value="order.update_product_prices()"
              />
            </v-col>
          </v-row>
        </v-col>

        <v-col
          cols="12"
          md="6"
          lg="7"
        >
          <v-card
            elevation="0"
            rounded="xl"
            prepend-icon="mdi-cart"
            title="LISTA"
            :color="order.packages.color"
          >

            <template #append>
              <v-tooltip
                text="VACÍAR LISTA"
              >
                <template #activator="{ props }">
                  <v-btn
                    v-bind="props"
                    icon="mdi-cart-arrow-up"
                    color="error"
                    flat
                    :disabled="order.products_selected_count <= 0"
                    @click="() => {order.clean_products_selected(); checked_order = false}"
                  />
                </template>
              </v-tooltip>

              <v-tooltip
                text="COPIAR CLAVES"
              >
                <template #activator="{ props }">
                  <v-btn
                    v-bind="props"
                    icon="mdi-content-copy"
                    color="blue"
                    flat
                    :disabled="order.products_selected_count <= 0"
                    @click="copy_to_clipboard(order.share_id_products())"
                  />
                </template>
              </v-tooltip>
            </template>


            <v-snackbar
              v-model="snack"
              :color="snack_noty.color"
              location="top"
            >
              <template #text>
                <strong>{{ snack_noty.title }}</strong> <br>
                {{ snack_noty.text }}
              </template>
            </v-snackbar>

            <v-card-item>

              <v-data-table
                density="compact"
                items-per-page="100"
                class="bg-transparent"
                disable-sort
                hide-default-footer
                :items="order.products_selected"
                :headers="headersSelected"
                :hide-default-header="!!$vuetify.display.mobile"
                :mobile="!!$vuetify.display.mobile"
                no-data-text="NO HAY PRODUCTOS SELECCIONADOS"
              >

                <template #top v-if="order.products_selected.length > 0">
                  <v-row class="mb-2">
                    <v-col>
                      <v-btn
                        :prepend-icon="`mdi-${checked_order ? 'check' : 'close'}`"
                        flat
                        :color="`${checked_order ? 'success' : 'error'}`"
                        :text="`${checked_order ? 'ENTREGAR TODO' : 'NO ENTREGAR TODO'}`"
                        rounded
                        @click="checkedOrder"
                      />
                    </v-col>
                  </v-row>

                </template>

                <template #item.img="{ item }">
                  <v-img
                    width="20"
                    aspect-ratio="1/1"
                    cover
                    :src="item.img"
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
                    autofocus
                    controls
                    @update:model-value="order.update_quantity_product($event, item)"
                  />
                </template>

                <template #item.action_check="{item}">
                  <v-checkbox
                    v-model="item.checked"
                    hide-details
                    :label="`${item.checked?'SI ✅':'NO ❌'}`"
                  />
                </template>

                <template #item.action_delete="{item}">
                  <v-tooltip
                    text="BORRAR PRODUCTO"
                  >
                    <template #activator="{ props }">
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
            </v-card-item>

            <v-card-actions>
              <h2
                v-if="order.packages.text"
                v-text="`${order.packages.text}`"
              />
            </v-card-actions>

          </v-card>
        </v-col>


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
    </template>

    <v-card-item>
      <v-data-table
        :items="order.products"
        :headers="headers"
        :search="search"
        items-per-page="20"
        :mobile="!!$vuetify.display.mobile"
        :hide-default-header="!!$vuetify.display.mobile"
        no-data-text="NO HAY PRODUCTOS"
      >
        <template #item.img="{ item }">
          <v-img
            width="30"
            aspect-ratio="1/1"
            cover
            :src="item.img"
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
            autofocus
            controls
            @update:model-value="order.update_quantity_product($event, item)"
          />
        </template>
      </v-data-table>

    </v-card-item>
  </v-card>

  <MyAlert
    v-if="myAlert.isActive"
    :my-alert="myAlert"
    @update:is-active="myAlert.isActive = $event"
    @confirm="handleConfirmAlert"
  />

</template>

<script>
import VueNumberComponent from '@chenfengyuan/vue-number-input'
import API_REQUEST from '@/controller/api.js'
import Order from "@/models/Order.js";
import MyAlert from "@/components/MyAlert.vue";

export default {
  components: {
    MyAlert,
    VueNumberComponent
  },
  props: {
    order: {
      type: Object,
      required: false,
      default: () => new Order(),
      validator: (order) => {
        return order instanceof Order
      },
    },
    dialogOrderParent: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  emits: ['update:dialogOrderParent'],
  data() {
    return {
      search: '',
      loading: false,
      snack: false,
      checked_order: false,

      myAlert: {
        isActive: false,
        title: '',
        message: '',
        type: '',
        icon: '',
      },

      snack_noty: {
        title: '',
        text: '',
        color: 'success',
      },
      dialogQuickCapture: false,
      headersSelected: [
        {title: 'IMG', value: 'img',},
        {title: 'PRODUCTO', value: 'name',},
        {title: 'CANTIDAD', value: 'quantity',},
        {title: '$SUB. PRECIO', value: 'sub_price',},
        {title: 'SUB. PVN', value: 'sub_pvn',},
        {title: '¿ENTREGADO?', value: 'action_check',},
        {title: 'ELIMINAR', value: 'action_delete',},
      ],
      headers: [
        {title: 'IMG', value: 'img',},
        {title: 'ID', value: 'id',},
        {title: 'CANTIDAD', value: 'quantity',},
        {title: 'PRODUCTO', value: 'name',},
        {title: '$PÚBLICO', value: 'price.public',},
        {title: '$SOCIO', value: 'price.member',},
        {title: 'PVN', value: 'pvn',},
        {title: 'PALABRAS CLAVE', value: 'alternative_name',},
      ]
    }
  },
  methods: {

    handleClose() {
      this.$emit('update:dialogOrderParent', false);
    },

    checkedOrder() {
      this.order.checked_products_selected(this.checked_order)
      this.checked_order = !this.checked_order
    },

    openDialogClear() {
      this.myAlert = {
        isActive: true,
        title: 'LIMPIAR PEDIDO',
        message: `¿ESTÁ SEGURO DE LIMPIAR ESTE PEDIDO ${this.order.state.id} - ${this.order.state.client}?`,
        type: 'error',
        icon: 'mdi-basket-off-outline',
      };
    },

    handleConfirmAlert() {
      this.order.clean_order()
      this.search = ''
    },

    set_fast_quick() {
      this.order.clean_and_set_fast_quick();
      this.dialogQuickCapture = false;
    },

    async getNameById() {
      if (this.order.state.id !== '') {
        this.loading = true
        const response = await API_REQUEST('get', `api/cliente/${this.order.state.id}` );
        this.order.state.client = response['cliente'] || ''
        this.loading = false
      }
    },

    async copy_to_clipboard(to_copy) {
      try {
        await navigator.clipboard.writeText(to_copy);
        this.snack_noty.title = '¡COPIADO AL PORTAPAPELES!';
        this.snack_noty.text = to_copy;
        this.snack_noty.color = 'success';
      } catch (error) {
        console.error('Error copying order to clipboard:', error);
        this.snack_noty.title = '¡ERROR DE COPIADO!';
        this.snack_noty.text = 'NO SE PUDO COPIAR';
        this.snack_noty.color = 'error';
      } finally {
        this.snack = true;
      }

    }
  },

};
</script>
