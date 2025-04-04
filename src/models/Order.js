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

  packages: {
    color: 'grey-lighten-2',
    text: ''
  },

  fast_quick: '',
  is_clean_for_fast_quick: true,

  created_at: new Date().toLocaleString(),
  reference: '',


  //COMPUTED
  products: [],
  bonus: 0,
  products_selected: [],
  products_selected_count: 0,
  price: 0,
  pvn: 0,
  final_pvn: 0,
  final_price: 0,
}

class Order {

  constructor(data = null) {
    if (!data) {
      this.clean_order()
      this.clean_products_selected()
    }
    this.state = reactive({...empty, ...data})
    this.initial()
    //this.setupWatchers();
  }

  /*
  setupWatchers() {
    watch(() => this.products, (newVal) => {
      this.state.products = newVal;
    });
    watch(() => this.bonus, (newVal) => {
      this.state.bonus = newVal;
    });
    watch(() => this.products_selected, (newVal) => {
      this.state.products_selected = newVal;
    });
    watch(() => this.products_selected_count, (newVal) => {
      this.state.products_selected_count = newVal;
    });
    watch(() => this.price, (newVal) => {
      this.state.price = newVal;
    });
    watch(() => this.pvn, (newVal) => {
      this.state.pvn = newVal;
    });
    watch(() => this.final_pvn, (newVal) => {
      this.state.final_pvn = newVal;
    });
    watch(() => this.final_price, (newVal) => {
      this.state.final_price = newVal;
    });
    watch(() => this.packages, (newVal) => {
      this.state.packages = newVal;
    });
  }

   */


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
      this.state.packages.color = '#5271ff'
      this.state.packages.text = '🔵 CERRADO/A CON: 8800'
    } else if (this.final_pvn >= 4400 && this.final_pvn < 8800) {
      this.state.packages.color = '#e50c80'
      this.state.packages.text = '🟣 CERRADO/A CON: 4400'
    } else if (this.final_pvn >= 2200 && this.final_pvn < 4400) {
      this.state.packages.color = '#b5d167'
      this.state.packages.text = '🟢 CERRADO/A CON: 2200'
    } else {
      this.state.packages.color = 'grey-lighten-2'
      this.state.packages.text = ''
    }
    return this.state.packages
  }


  initial() {
    for (const item of this.products) {
      item.price.member = this.state.is_rounded_prices ? Math.round(item.price.public / 2) : item.price.public / 2
      item.price.member = item.id.startsWith('HE') ? item.price.public : item.price.member
      item.pvn = Math.round(0.3879 * item.price.public - 0.3911)
    }
  }


  // METHODS

  update_product_prices() {
    this.initial()

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
    this.state = reactive({...empty})
    this.clean_products_selected()
  }

  clean_products_selected() {
    for (const item of this.products_selected) {
      item.checked = true;
      item.quantity = 0;
      item.sub_price = 0;
      item.sub_pvn = 0;
    }
  }

  checked_products_selected(flag) {
    for (const item of this.products_selected) {
      item.checked = flag;
    }
  }

  share_order() {
    const render_package = this.packages.text !== '' ? "\n" + this.packages.text + "\n\n" : '\n';

    let txt = `*👤 PEDIDO${this.state.id ? ": " + this.state.id : ''}${this.state.client ? " - " + this.state.client : ''}*\n`;
    txt += `📅 FECHA: ${this.state.created_at} \n\n`;

    txt += this.bonus != 0 ? `💵 DINERO PEDIDO: $${this.price}\n` : '';
    txt += this.bonus != 0 ? `🪙 BONIFICACIONES: $${this.bonus} \n` : '';
    txt += `💰 TOTAL A PAGAR: $${this.final_price}\n\n`;

    txt += this.state.pvn_old != 0 ? `▪️ PVN ACTUALES: ${this.state.pvn_old}  \n` : '';
    txt += this.state.pvn_old != 0 ? `▫️ PVN PEDIDO: ${this.pvn} \n` : '';
    txt += `🔳 PVN TOTALES: ${this.final_pvn}\n\n`;
    txt += "🔢 CANTIDAD DE PRODUCTOS: " + this.products_selected_count + "\n" + render_package;
    txt += "📋 LISTA:\n" + this.products_selected.map(
      item => `* ${item.checked ? '✅' : '❌'} ${item.quantity} ${item.name}  (${item.quantity} x ${item.price.member}) = $${item.sub_price})`).join("\n") + "\n\n";

    txt += "🔑 CLAVES:\n"
    txt += '```' + this.share_id_products() + '```';

    txt += this.state.notes ? `\n\n📝 NOTAS:\n ${this.state.notes}` : '';

    txt += `\n\n❕ SIMBOLOGÍA:\n✅ ENTREGADO\n❌ NO ENTREGADO`;

    txt += "\n\n🌀 Merly by hectorsaldes";
    txt +=  "\nhttps://merlyapp.netlify.app/";

    /*if(this.final_price == 0 || this.products_selected_count == 0 || this.final_pvn == 0)
      txt = "❌ No se puede compartir un pedido vacío o con valores en 0.";*/

    return txt
  }

  share_id_products() {
    return this.products_selected.map(item => item.id + "," + item.quantity).join("\n");
  }

  clean_and_set_fast_quick() {

    if (this.state.is_clean_for_fast_quick) this.clean_products_selected();

    let data = {};
    this.state.fast_quick = this.state.fast_quick.replaceAll(/"/g, "");
    this.state.fast_quick = this.state.fast_quick.replaceAll(" ", "");
    const lines = this.state.fast_quick.split(/[\n\s]+/);
    lines.forEach((line) => {
      let [code, quantity] = line.split(","); // Dividir en código y cantidad
      if (code && quantity && !isNaN(quantity)) {
        code = code.trim().toUpperCase()
        if (data[code]) {
          data[code] = data[code] + parseInt(quantity.trim()); // Agregar al objeto
        } else {
          data[code] = parseInt(quantity.trim()); // Agregar al objeto
        }
      }
      // PT748,5
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
