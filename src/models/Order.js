import {reactive} from "vue";
import all_products from "@/assets/products.js";

const empty = {
  id: '',
  client: '',
  pvn_old: 0,
  notes: '',

  is_rounded_prices: true,
  is_active_bonus: false,

  products_raw: all_products,
  bonus_raw: 0,

  pack: {
    color: '',
    text: ''
  },

  fast_quick: '',
  is_clean_for_fast_quick: true

}

class Order {

  constructor() {
    this.state = reactive(empty)
  }


  // COMPUTED
  get products() {
    return Object.values(this.state.products_raw);
  }

  get bonus() {
    let _bonus = this.state.is_active_bonus ? this.state.bonus_raw * 1.10 : this.state.bonus_raw
    return parseFloat(_bonus).toFixed(2);
  }

  get products_selected() {
    return this.products.filter(item => item.quantity > 0)
  }

  get products_selected_count() {
    return this.products_selected.reduce((quantity, item) => quantity + item.quantity, 0)
  }

  // DINERO SOLO DE LA ORDEN
  get price() {
    return parseFloat(this.products_selected.reduce((price, item) => price + item.sub_price, 0)).toFixed(2)
  }

  // PVN SOLO DE LA ORDEN
  get pvn() {
    return this.products_selected.reduce((pvn, item) => pvn + item.pvn * item.quantity, 0)
  }

  // PVN FINALES (PVN ANTERIORES + PVN DE LA ORDEN)
  get final_pvn() {
    return parseInt(this.state.pvn_old) + parseInt(this.pvn)
  }

  // PRECIO FINAL ( PRECIO DE LA ORDEN - BONIFICACIONES)
  get final_price() {
    return parseFloat(this.price - this.bonus).toFixed(2)
  }

  get packages() {
    if (this.final_pvn >= 8800) {
      this.state.pack.color = '#5271ff'
      this.state.pack.text = '🔵 CERRADO/A CON: 8800'
    } else if (this.final_pvn >= 4400 && this.final_pvn < 8800) {
      this.state.pack.color = '#e50c80'
      this.state.pack.text = '🟣 CERRADO/A CON: 4400'
    } else if (this.final_pvn >= 2200 && this.final_pvn < 4400) {
      this.state.pack.color = '#b5d167'
      this.state.pack.text = '🟢 CERRADO/A CON: 2200'
    } else {
      this.state.pack.color = 'grey-lighten-3'
      this.state.pack.text = ''
    }
    return this.state.pack
  }


  // METHODS

  update_product_prices() {
    for (const item of this.products) {
      item.price.member = this.state.is_rounded_prices ? Math.round(item.price.public / 2) : item.price.public / 2
      item.price.member = item.id.startsWith('HE') ? item.price.public : item.price.member
    }

    for (const item of this.products_selected) {
      item.sub_price = item.price.member * item.quantity
    }
  }

  update_is_bonus_active() {
    this.state.is_active_bonus = !this.state.is_active_bonus
  }

  update_quantity_product(quantity, item) {
    this.state.products_raw[item.id].quantity = quantity
    this.state.products_raw[item.id].sub_pvn = this.state.products_raw[item.id].pvn * quantity
    this.state.products_raw[item.id].sub_price = this.state.products_raw[item.id].price.member * quantity
  }


  clean_order() {
    this.state = reactive(empty)
    this.clean_products_selected()
  }

  clean_products_selected() {
    for (const item of this.products_selected) {
      item.quantity = 0;
      item.sub_price = 0;
      item.sub_pvn = 0;
      item.checked = false;
    }
  }

  share_order() {
    const render_package = this.packages.text !== '' ? "\n" + this.packages.text + "\n\n" : '\n';
    return "*👤 PEDIDO: " + this.state.id + " - " + this.state.client + "*\n\n" +
      "💵 DINERO PEDIDO: $" + this.price + "\n" +
      "🪙 BONIFICACIONES: $" + this.bonus + "\n" +
      "💰 TOTAL A PAGAR: $" + this.final_price + "\n\n" +
      "▪️ PVN ACTUALES: " + this.state.pvn_old + "\n" +
      "▫️ PVN PEDIDO: " + this.pvn + "\n" +
      "🔳 PVN TOTALES: " + this.final_pvn + "\n" +
      "🔢 CANTIDAD DE PRODUCTOS: " + this.products_selected_count + "\n" + render_package +
      "📋 LISTA:\n" +
      this.products_selected.map(item => "* " + item.quantity + " " + item.name + "  (" + item.quantity + " x " + item.price.member + ") = $" + item.sub_price).join("\n") + "\n\n" +
      "🔑 CLAVES:\n" +
      '```' + this.share_id_products() + "```";
  }

  share_id_products() {
    return this.products_selected.map(item => item.id + "," + item.quantity).join("\n");
  }

  clean_and_set_fast_quick() {

    if(this.state.is_clean_for_fast_quick) this.clean_products_selected();

    let data = {};
    this.state.fast_quick = this.state.fast_quick.replaceAll(/"/g, "");
    this.state.fast_quick = this.state.fast_quick.replaceAll(" ", "");
    const lines = this.state.fast_quick.split(/[\n\s]+/);
    lines.forEach((line) => {
      const [code, quantity] = line.split(","); // Dividir en código y cantidad
      if (code && quantity && !isNaN(quantity)) {
        data[code.trim()] = parseInt(quantity.trim()); // Agregar al objeto
      }
    });
    for (let key in data) {
      if (this.state.products_raw[key]) {
        let _quantity = this.state.is_clean_for_fast_quick ? data[key] : this.state.products_raw[key].quantity + data[key];
        this.update_quantity_product(_quantity, this.state.products_raw[key]);
      }
    }
    this.state.fast_quick = '';
  }

}

export default Order
