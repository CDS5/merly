<template>
  <div>
    <!-- HEADER -->
    <v-app-bar app elevation="0" height="72" rounded="b-xl" class="px-6 app-bar-animated"
      :class="{ 'elevated': scrolled }">
      <v-container fluid class="d-flex align-center justify-space-between pa-0">
        <!-- Logo -->
        <div class="d-flex align-center logo-container ms-4" @click="scrollToSection('inicio')">
          <div class="d-flex align-center">
            <img height="40" src="@/assets/isotipo.svg" alt="logo" class="mr-2">
            <p class="font-weight-bold text-h5 text-lg-h4 text-high-emphasis">Merly</p>
            <v-chip size="x-small" color="primary">Beta</v-chip>
          </div>
        </div>

        <!-- Desktop Nav -->
        <div class="hidden-sm-and-down d-flex align-center">
          <v-btn text class="nav-btn" rounded="xl" @click="scrollToSection('inicio')">
            Inicio
            <div class="nav-underline"></div>
          </v-btn>
          <v-btn text class="nav-btn" rounded="xl" @click="scrollToSection('servicios')">
            Servicios
            <div class="nav-underline"></div>
          </v-btn>
          <v-btn text class="nav-btn" rounded="xl" @click="scrollToSection('productos')">
            Productos
            <div class="nav-underline"></div>
          </v-btn>
          <v-btn text class="nav-btn" rounded="xl" @click="scrollToSection('conocenos')">
            Conócenos
            <div class="nav-underline"></div>
          </v-btn>
        </div>

        <!-- Action Buttons + Theme Toggle -->
        <div class="hidden-sm-and-down d-flex align-center gap-2">
          <!-- Theme Toggle Button -->
          <v-btn
            icon
            variant="text"
            class="theme-toggle-btn"
            @click="toggleTheme"
            rounded="xl"
          >
            <v-icon v-if="selectedTheme === 'light'">mdi-weather-sunny</v-icon>
            <v-icon v-else-if="selectedTheme === 'dark'">mdi-weather-night</v-icon>
            <v-icon v-else>mdi-theme-light-dark</v-icon>
          </v-btn>

          <v-btn variant="outlined" color="#195030" rounded="xl" class="font-weight-bold action-btn-outlined me-2"
            to="/register">
            <v-icon start>mdi-store</v-icon>
            Regístrate
          </v-btn>
          <v-btn variant="outlined" color="#FE40B4" rounded="xl" class="font-weight-bold text-white action-btn-filled"
            to="/login">
            <v-icon start>mdi-account</v-icon>
            Iniciar Sesión
          </v-btn>
        </div>

        <!-- Mobile Menu -->
        <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />
      </v-container>
    </v-app-bar>

    <!-- Mobile Drawer -->
    <v-navigation-drawer v-model="drawer" temporary location="right">
      <v-list>
        <v-list-item @click="scrollToSection('inicio')" prepend-icon="mdi-home">
          <v-list-item-title>Inicio</v-list-item-title>
        </v-list-item>
        <v-list-item @click="scrollToSection('servicios')" prepend-icon="mdi-star">
          <v-list-item-title>Servicios</v-list-item-title>
        </v-list-item>
        <v-list-item @click="scrollToSection('productos')" prepend-icon="mdi-shopping">
          <v-list-item-title>Productos</v-list-item-title>
        </v-list-item>
        <v-list-item @click="scrollToSection('conocenos')" prepend-icon="mdi-information">
          <v-list-item-title>Conócenos</v-list-item-title>
        </v-list-item>
        <v-divider class="my-2"></v-divider>
        
        <!-- Theme Selector in Mobile -->
        <v-list-item>
          <v-list-item-title class="text-caption mb-2">Tema</v-list-item-title>
          <v-btn-toggle
            v-model="selectedTheme"
            mandatory
            color="primary"
            density="compact"
            class="mb-3"
            divided
          >
            <v-btn value="light" size="small">
              <v-icon>mdi-weather-sunny</v-icon>
            </v-btn>
            <v-btn value="dark" size="small">
              <v-icon>mdi-weather-night</v-icon>
            </v-btn>
            <v-btn value="system" size="small">
              <v-icon>mdi-theme-light-dark</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-list-item>

        <v-divider class="my-2"></v-divider>

        <v-list-item>
          <v-btn variant="outlined" color="#195030" block class="mb-2" to="/register">
            <v-icon start>mdi-store</v-icon>
            Regístrate
          </v-btn>
          <v-btn variant="flat" color="#FE40B4" block class="text-white" to="/login">
            <v-icon start>mdi-account</v-icon>
            Iniciar Sesión
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useTheme } from 'vuetify'

const router = useRouter()
const route = useRoute()
const theme = useTheme()
const drawer = ref(false)
const scrolled = ref(false)
const selectedTheme = ref('light')

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

// Función para scroll suave a secciones
const scrollToSection = (sectionId) => {
  // Cerrar drawer si está abierto
  drawer.value = false
  
  // Verificar si estamos en la landing page
  if (route.path === '/' || route.path === '/landing') {
    // Si ya estamos en la landing, solo hacer scroll
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        const offset = 72 // Altura del header
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 100)
  } else {
    // Si estamos en otra página, navegar a landing primero
    router.push('/').then(() => {
      // Esperar a que se cargue la página
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          const offset = 72
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 300)
    })
  }
}

// Función para aplicar el tema
const applyTheme = (themeName) => {
  if (themeName === 'system') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    theme.global.name.value = prefersDark ? 'dark' : 'light'
  } else {
    theme.global.name.value = themeName
  }
  // Guardar preferencia en localStorage
  localStorage.setItem('merly-theme', themeName)
}

// Función para alternar entre temas (ciclo: light -> dark -> system)
const toggleTheme = () => {
  if (selectedTheme.value === 'light') {
    selectedTheme.value = 'dark'
  } else if (selectedTheme.value === 'dark') {
    selectedTheme.value = 'system'
  } else {
    selectedTheme.value = 'light'
  }
}

// Watch para cambios en el tema seleccionado
watch(selectedTheme, (newTheme) => {
  applyTheme(newTheme)
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // Cargar tema guardado o usar el del sistema
  const savedTheme = localStorage.getItem('merly-theme')
  if (savedTheme) {
    selectedTheme.value = savedTheme
  } else {
    // Detectar preferencia del sistema
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    selectedTheme.value = prefersDark ? 'dark' : 'light'
  }
  
  applyTheme(selectedTheme.value)

  // Escuchar cambios en las preferencias del sistema
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const handleSystemThemeChange = (e) => {
    if (selectedTheme.value === 'system') {
      theme.global.name.value = e.matches ? 'dark' : 'light'
    }
  }
  mediaQuery.addEventListener('change', handleSystemThemeChange)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* === HEADER === */
.app-bar-animated {
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
}

.app-bar-animated.elevated {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08) !important;
}

.theme--dark .app-bar-animated.elevated {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3) !important;
}

.logo-container {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.logo-container:hover {
  transform: scale(1.05);
}

/* === NAV BUTTONS === */
.nav-btn {
  font-weight: 600;
  margin: 0 8px;
  position: relative;
  transition: color 0.3s;
  cursor: pointer;
}

.nav-btn :deep(.v-btn__content) {
  color: rgb(var(--v-theme-on-surface));
}

.nav-underline {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 70%;
  height: 2px;
  background: linear-gradient(90deg, #FE40B4, #195030);
  transition: transform 0.3s ease;
}

.nav-btn:hover :deep(.v-btn__content) {
  color: #FE40B4;
}

.nav-btn:hover .nav-underline {
  transform: translateX(-50%) scaleX(1);
}

/* === THEME TOGGLE BUTTON === */
.theme-toggle-btn {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.theme-toggle-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(254, 64, 180, 0.2);
  transform: translate(-50%, -50%);
  transition: width 0.4s, height 0.4s;
}

.theme-toggle-btn:hover::before {
  width: 100px;
  height: 100px;
}

.theme-toggle-btn:hover {
  transform: rotate(20deg);
}

.theme-toggle-btn :deep(.v-icon) {
  transition: transform 0.3s ease;
}

.theme-toggle-btn:hover :deep(.v-icon) {
  transform: scale(1.2);
}

/* === ACTION BUTTONS === */
.action-btn-outlined {
  border: 2px solid #195030;
  transition: all 0.3s ease;
}

.action-btn-outlined:hover {
  background: #195030;
  color: white !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(25, 80, 48, 0.3);
}

.action-btn-outlined:hover :deep(.v-btn__content) {
  color: white !important;
}

.action-btn-outlined:hover :deep(.v-icon) {
  color: white !important;
}

.action-btn-filled {
  background: linear-gradient(135deg, #FE40B4, #ff1493);
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(254, 64, 180, 0.3);
}

.action-btn-filled:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(254, 64, 180, 0.4);
}
</style>