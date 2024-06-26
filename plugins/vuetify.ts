import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { type ThemeDefinition, createVuetify } from 'vuetify'
import zhHant from '../locales/zhHant.json'
import en from '../locales/en.json'
import ja from '../locales/ja.json'

const darkMode: ThemeDefinition = {
  dark: true,
  colors: {
    'background': '#202020',
    'surface': '#121212',
    'primary': '#8A4DFF',
    'primary-darken-1': '#533194',
    'secondary': '#DC3545',
    'secondary-darken-1': '#C42F3D',
    'warning': '#FF0000'
  }
}

const lightMode: ThemeDefinition = {
  dark: true,
  colors: {
    'background': '#d6d6d6',
    'surface': '#FFFFFF',
    'primary': '#59359A',
    'primary-darken-1': '#533194',
    'secondary': '#DC3545',
    'secondary-darken-1': '#C42F3D',
    'warning': '#FF0000'
  },
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'darkMode',
      themes: {
        darkMode,
        lightMode,
      }
    },
    icons: {
      defaultSet: 'mdi'
    },
    locale: {
      locale: 'zhHant',
      fallback: 'en',
      messages: { zhHant, en, ja }
    },
    display: {
      thresholds: {
        xl: 1925,
      },
    }
  })
  app.vueApp.use(vuetify)
})
