<template>
  <div>
    <!-- HEADER -->
    <v-app-bar app elevation="0" color="white" height="72" class="px-6 app-bar-animated"
      :class="{ 'elevated': scrolled }">
      <v-container fluid class="d-flex align-center justify-space-between pa-0">
        <!-- Logo -->
        <div class="d-flex align-center logo-container ms-4">
          <div class="logo-circle">
            <img height="40" src="@/assets/isotipo.svg" alt="logo" class="mr-2">
          </div>
          <span class="text-h6 font-weight-bold logo-text">Merly</span>
        </div>

        <!-- Desktop Nav -->
        <div class="hidden-sm-and-down d-flex align-center">
          <v-btn text class="nav-btn" to="/">
            Inicio
            <div class="nav-underline"></div>
          </v-btn>
          <v-btn text class="nav-btn" to="/products">
            Productos
            <div class="nav-underline"></div>
          </v-btn>
          <v-btn text class="nav-btn" to="/about">
            Conócenos
            <div class="nav-underline"></div>
          </v-btn>
        </div>

        <!-- Action Buttons -->
        <div class="hidden-sm-and-down d-flex align-center gap-2">
          <v-btn variant="outlined" color="#195030" rounded="pill" class="font-weight-bold action-btn-outlined me-2"
            to="/register">
            <v-icon start>mdi-store</v-icon>
            Regístrate
          </v-btn>
          <v-btn variant="outlined" color="#FE40B4" rounded="pill" class="font-weight-bold text-white action-btn-filled"
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
        <v-list-item to="/" prepend-icon="mdi-home">
          <v-list-item-title>Inicio</v-list-item-title>
        </v-list-item>
        <v-list-item to="/products" prepend-icon="mdi-shopping">
          <v-list-item-title>Productos</v-list-item-title>
        </v-list-item>
        <v-list-item to="/about" prepend-icon="mdi-information">
          <v-list-item-title>Conócenos</v-list-item-title>
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
import { ref, onMounted, onUnmounted } from 'vue'

const drawer = ref(false)
const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* === HEADER === */
.app-bar-animated {
  transition: all 0.3s ease;
}

.app-bar-animated.elevated {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08) !important;
}

.logo-container {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.logo-container:hover {
  transform: scale(1.05);
}

.logo-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffe5f3, #fff8fc);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  box-shadow: 0 2px 8px rgba(254, 64, 180, 0.2);
}

.logo-text {
  color: #195030;
  background: linear-gradient(135deg, #195030, #2a7050);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* === NAV BUTTONS === */
.nav-btn {
  color: #000000;
  font-weight: 600;
  margin: 0 8px;
  position: relative;
  transition: color 0.3s;
}

.nav-underline {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 80%;
  height: 2px;
  background: linear-gradient(90deg, #FE40B4, #195030);
  transition: transform 0.3s ease;
}

.nav-btn:hover {
  color: #FE40B4;
}

.nav-btn:hover .nav-underline {
  transform: translateX(-50%) scaleX(1);
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