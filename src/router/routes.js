export const router = [
  {
    title: 'Pedido',
    value: '',
    props: {
      class: '',
      prependIcon: 'mdi-basket',
      active: true,
      to: '/orders'

    }
  },

  {
    title: 'Panel principal',
    value: '',
    props: {
      class: '',
      prependIcon: 'mdi-view-dashboard',
      active: false,
      //to: '/dashboard'
      disabled: true,
    }
  },
  {
    title: 'Colecciones',
    value: '',
    props: {
      class: '',
      prependIcon: 'mdi-collapse-all',
      active: false,
     // to: '/collections'
      disabled: true,
    }
  },

  {
    title: 'Consolidados',
    value: '',
    props: {
      class: '',
      prependIcon: 'mdi-text-box-multiple',
      active: false,
     // to: '/consolids'
      disabled: true,
    }
  },



  {
    title: 'Etiquetas',
    value: '',
    props: {
      class: '',
      prependIcon: 'mdi-bookmark-multiple',
      active: false,
     // to: '/labels'
      disabled: true,
    }
  },

  {
    title: 'Inventario',
    value: '',
    props: {
      class: '',
      prependIcon: 'mdi-warehouse',
      active: false,
     // to: '/stock'
      disabled: true,
    }
  },

  {
    title: 'Perfil',
    value: '',
    props: {
      class: '',
      prependIcon: 'mdi-account-circle',
      active: false,
      to: '/profile'
    }
  },
]
