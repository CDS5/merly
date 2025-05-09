/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import '@/styles/main.scss'

// Composables
import { createVuetify } from 'vuetify'


// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#FE40B4',
          'primary-lighten-1': '#ffcfec',
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#FE40B4',
          'primary-lighten-1': '#14000C',
        },
      },
    },
  },
})
