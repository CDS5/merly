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

const lightTheme = {
  dark: false,
  colors: {
    primary: '#FE40B4', // Morado oscuro
    "primary-lighten-1": '#FFEBF7', // Morado oscuro
  },
};

const darkTheme = {
  dark: true,
  colors: {
    primary: '#FE40B4', // Morado claro
    "primary-lighten-1": '#14000C', // Morado oscuro

  },
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
  },
})
