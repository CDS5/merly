<template>
  <div>
    <!-- HEADER -->
    <v-app-bar elevation="0" :height="isMobile ? 64 : 72" rounded="b-xl" class="app-bar-animated"
      :class="{ 'elevated': scrolled }" fixed>
      <v-container fluid class="d-flex align-center pa-0 px-4"
        :class="isMobile ? 'justify-spac-between' : 'justify-space-between'" style="max-width: 100%; position: relative;">
        <!-- Spacer invisible en móvil para centrar el logo -->
        <div v-if="isMobile" style="width: 48px;"></div>

        <!-- Logo (siempre visible) -->
        <div class="d-flex align-center logo-container" @click="scrollToSection('inicio')" style="cursor: pointer;">
          <img :height="isMobile ? 32 : 40" src="@/assets/isotipo.svg" alt="logo" class="mr-2">
          <div class="d-flex align-center gap-1">
            <p class="font-weight-bold ma-0" :class="isMobile ? 'text-h6' : 'text-h5'">Merly</p>
            <v-chip size="x-small" color="primary" class="ml-1">Beta</v-chip>
          </div>
        </div>

        <!-- Desktop Nav (oculto en móviles) -->
        <div class="hidden-sm-and-down d-flex align-center" style="flex: 1; justify-content: center;">
          <v-btn variant="text" class="nav-btn" rounded="xl" @click="scrollToSection('inicio')">
            Inicio
            <div class="nav-underline"></div>
          </v-btn>
          <v-btn variant="text" class="nav-btn" rounded="xl" @click="scrollToSection('servicios')">
            Servicios
            <div class="nav-underline"></div>
          </v-btn>
          <v-btn variant="text" class="nav-btn" rounded="xl" @click="scrollToSection('productos')">
            Productos
            <div class="nav-underline"></div>
          </v-btn>
          <v-btn variant="text" class="nav-btn" rounded="xl" @click="scrollToSection('conocenos')">
            Conócenos
            <div class="nav-underline"></div>
          </v-btn>
        </div>

        <!-- Desktop actions (oculto en móviles) -->
        <div class="hidden-sm-and-down d-flex align-center gap-2">
          <v-btn icon variant="text" class="theme-toggle-btn" @click="toggleTheme" rounded="xl"
            aria-label="Cambiar tema">
            <v-icon v-if="selectedTheme === 'light'">mdi-weather-sunny</v-icon>
            <v-icon v-else-if="selectedTheme === 'dark'">mdi-weather-night</v-icon>
            <v-icon v-else>mdi-theme-light-dark</v-icon>
          </v-btn>

          <v-btn variant="outlined" color="#195030" rounded="xl" class="font-weight-bold action-btn-outlined me-2"
            to="/register">
            <v-icon start>mdi-store</v-icon>
            Regístrate
          </v-btn>
          <v-btn variant="flat" color="#FE40B4" rounded="xl" class="font-weight-bold text-white action-btn-filled"
            to="/login">
            <v-icon start>mdi-account</v-icon>
            Iniciar Sesión
          </v-btn>
        </div>

        <!-- Mobile hamburger (solo visible en móviles) -->
        <v-btn class="hidden-md-and-up hamburger-btn" :class="{ 'hamburger-active': drawer }" icon variant="text"
          @click="drawer = !drawer" aria-label="Abrir menú" size="large" style="position: absolute; right: 16px;">
          <v-icon size="28">{{ drawer ? 'mdi-close' : 'mdi-menu' }}</v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>

    <!-- Mobile Drawer -->
    <v-navigation-drawer v-model="drawer" temporary location="right" :scrim="true" width="280" class="mobile-drawer">
      <template v-slot:prepend>
        <div class="pa-4 d-flex align-center justify-space-between drawer-header">
          <div class="d-flex align-center">
            <img height="32" src="@/assets/isotipo.svg" alt="logo" class="mr-2">
            <span class="text-h6 font-weight-bold">Merly</span>
          </div>
          <v-btn icon variant="text" size="small" @click="drawer = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <v-divider></v-divider>
      </template>

      <v-list nav density="comfortable" class="py-2">
        <v-list-subheader class="text-uppercase text-caption font-weight-bold">
          Navegación
        </v-list-subheader>

        <v-list-item @click="goAndClose(() => scrollToSection('inicio'))" rounded="xl" class="mx-2 mb-1">
          <template v-slot:prepend>
            <v-icon color="#FE40B4">mdi-home</v-icon>
          </template>
          <v-list-item-title class="font-weight-medium">Inicio</v-list-item-title>
        </v-list-item>

        <v-list-item @click="goAndClose(() => scrollToSection('servicios'))" rounded="xl" class="mx-2 mb-1">
          <template v-slot:prepend>
            <v-icon color="#195030">mdi-star</v-icon>
          </template>
          <v-list-item-title class="font-weight-medium">Servicios</v-list-item-title>
        </v-list-item>

        <v-list-item @click="goAndClose(() => scrollToSection('productos'))" rounded="xl" class="mx-2 mb-1">
          <template v-slot:prepend>
            <v-icon color="#FE40B4">mdi-shopping</v-icon>
          </template>
          <v-list-item-title class="font-weight-medium">Productos</v-list-item-title>
        </v-list-item>

        <v-list-item @click="goAndClose(() => scrollToSection('conocenos'))" rounded="xl" class="mx-2 mb-1">
          <template v-slot:prepend>
            <v-icon color="#195030">mdi-information</v-icon>
          </template>
          <v-list-item-title class="font-weight-medium">Conócenos</v-list-item-title>
        </v-list-item>

        <v-divider class="my-3"></v-divider>

        <v-list-subheader class="text-uppercase text-caption font-weight-bold">
          Apariencia
        </v-list-subheader>

        <div class="px-4 mb-3">
          <v-btn-toggle v-model="selectedTheme" mandatory color="primary" density="comfortable" class="w-100" divided
            rounded="xl">
            <v-btn value="light" size="small" aria-label="Tema claro" class="flex-grow-1">
              <v-icon size="small">mdi-weather-sunny</v-icon>
            </v-btn>
            <v-btn value="dark" size="small" aria-label="Tema oscuro" class="flex-grow-1">
              <v-icon size="small">mdi-weather-night</v-icon>
            </v-btn>
            <v-btn value="system" size="small" aria-label="Tema del sistema" class="flex-grow-1">
              <v-icon size="small">mdi-theme-light-dark</v-icon>
            </v-btn>
          </v-btn-toggle>
        </div>
        <v-divider class="my-3"></v-divider>

        <div class="px-4 mb-4">
          <v-btn variant="outlined" color="#195030" block rounded="xl" class="mb-2 font-weight-bold" to="/register"
            @click="drawer = false">
            <v-icon start>mdi-store</v-icon>
            Regístrate
          </v-btn>
          <v-btn variant="flat" color="#FE40B4" block rounded="xl" class="text-white font-weight-bold" to="/login"
            @click="drawer = false">
            <v-icon start>mdi-account</v-icon>
            Iniciar Sesión
          </v-btn>
        </div>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useTheme, useDisplay } from 'vuetify'

const router = useRouter()
const route = useRoute()
const theme = useTheme()
const { smAndDown } = useDisplay()
const isMobile = smAndDown

const drawer = ref(false)
const scrolled = ref(false)
const selectedTheme = ref('light')

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const goAndClose = (fn) => {
  drawer.value = false
  requestAnimationFrame(() => {
    setTimeout(fn, 100)
  })
}

const scrollToSection = (sectionId) => {
  const doScroll = () => {
    const headerOffset = isMobile.value ? 64 : 72
    const el = document.getElementById(sectionId)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  if (route.path === '/' || route.path === '/landing') {
    setTimeout(doScroll, 50)
  } else {
    router.push('/').then(() => setTimeout(doScroll, 200))
  }
}

const applyTheme = (themeName) => {
  if (themeName === 'system') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    theme.global.name.value = prefersDark ? 'dark' : 'light'
  } else {
    theme.global.name.value = themeName
  }
  localStorage.setItem('merly-theme', themeName)
}

const toggleTheme = () => {
  selectedTheme.value =
    selectedTheme.value === 'light' ? 'dark' :
      selectedTheme.value === 'dark' ? 'system' : 'light'
}

watch(selectedTheme, (newVal) => applyTheme(newVal))

onMounted(() => {
  window.addEventListener('scroll', handleScroll)

  const saved = localStorage.getItem('merly-theme')
  if (saved) {
    selectedTheme.value = saved
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    selectedTheme.value = prefersDark ? 'dark' : 'light'
  }
  applyTheme(selectedTheme.value)

  const mq = window.matchMedia('(prefers-color-scheme: dark)')
  const onChange = (e) => {
    if (selectedTheme.value === 'system') {
      theme.global.name.value = e.matches ? 'dark' : 'light'
    }
  }
  mq.addEventListener('change', onChange)

  const unregister = router.afterEach(() => { drawer.value = false })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    mq.removeEventListener('change', onChange)
    unregister && unregister()
  })
})
</script>

<style scoped>
/* === HEADER === */
.app-bar-animated {
  transition: box-shadow 0.25s ease, background-color 0.25s ease;
  border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}

.app-bar-animated.elevated {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;
}

.theme--dark .app-bar-animated.elevated {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3) !important;
}

.logo-container {
  transition: transform 0.2s ease;
}

.logo-container:hover {
  transform: scale(1.05);
}

/* === NAV BUTTONS === */
.nav-btn {
  font-weight: 600;
  margin: 0 4px;
  position: relative;
  transition: color 0.25s;
  text-transform: none;
  letter-spacing: 0;
}

.nav-underline {
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  transform-origin: center;
  width: 70%;
  height: 2px;
  background: linear-gradient(90deg, #FE40B4, #195030);
  transition: transform 0.25s ease;
}

.nav-btn:hover .nav-underline {
  transform: translateX(-50%) scaleX(1);
}

/* === THEME TOGGLE === */
.theme-toggle-btn {
  transition: transform 0.25s ease;
}

.theme-toggle-btn:hover {
  transform: rotate(15deg) scale(1.05);
}

/* === ACTION BUTTONS === */
.action-btn-outlined {
  border: 2px solid #195030;
  transition: all 0.25s ease;
}

.action-btn-outlined:hover {
  background: #195030;
  color: #fff !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(25, 80, 48, 0.3);
}

.action-btn-filled {
  background: linear-gradient(135deg, #FE40B4, #ff1493);
  transition: box-shadow 0.25s ease, transform 0.25s ease;
  box-shadow: 0 4px 12px rgba(254, 64, 180, 0.3);
}

.action-btn-filled:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(254, 64, 180, 0.4);
}

/* === HAMBURGER BUTTON === */
.hamburger-btn {
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.hamburger-btn:hover {
  background: rgba(var(--v-theme-primary), 0.08);
}

.hamburger-btn.hamburger-active {
  background: rgba(var(--v-theme-primary), 0.12);
}

.hamburger-btn :deep(.v-icon) {
  transition: transform 0.3s ease;
}

.hamburger-btn.hamburger-active :deep(.v-icon) {
  transform: rotate(90deg);
}

/* === MOBILE DRAWER === */
.mobile-drawer {
  border-left: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}

.drawer-header {
  border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}

.mobile-drawer :deep(.v-list-item) {
  transition: background-color 0.2s ease;
}

.mobile-drawer :deep(.v-list-item:hover) {
  background: rgba(var(--v-theme-primary), 0.08);
}

.mobile-drawer :deep(.v-list-item--active) {
  background: rgba(var(--v-theme-primary), 0.12);
}

/* === RESPONSIVE === */
@media (max-width: 959px) {

  /* Ocultar navegación desktop */
  .hidden-sm-and-down {
    display: none !important;
  }

  /* Mostrar hamburguesa */
  .hidden-md-and-up {
    display: flex !important;
  }
}

@media (min-width: 960px) {

  /* Mostrar navegación desktop */
  .hidden-sm-and-down {
    display: flex !important;
  }

  /* Ocultar hamburguesa */
  .hidden-md-and-up {
    display: none !important;
  }
}

@media (max-width: 600px) {
  .app-bar-animated {
    padding-left: 8px;
    padding-right: 8px;
  }

  .logo-container {
    margin-left: 0;
  }
}
</style>