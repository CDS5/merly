<template>
  <div class="login-page-wrapper">
    <AppHeader />

    <v-container fluid class="login-container">
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="12" sm="10" md="8" lg="5" xl="4" class="px-3 px-sm-4">
        <v-card
          rounded="xl"
          class="login-card"
          :class="{'pa-3': $vuetify.display.xs, 'pa-6': $vuetify.display.sm, 'pa-8': $vuetify.display.mdAndUp}"
        >
          <!-- Header con logo -->
          <div class="text-center mb-3 mb-sm-6">
            <div class="logo-wrapper mb-2 mb-sm-4">
              <div class="logo-circle">
                <v-icon :size="$vuetify.display.xs ? 28 : 40" color="#195030">mdi-cart-heart</v-icon>
              </div>
            </div>
            
            <h1 class="login-title mb-1 mb-sm-2 text-high-emphasis">Bienvenido a Merly</h1>
            <p class="login-subtitle text-medium-emphasis">Inicia sesión para continuar</p>
          </div>

          <!-- Form -->
          <v-form ref="loginForm" v-model="valid" @submit.prevent="handleLogin">
            <!-- Email -->
            <v-text-field
              v-model="email"
              label="Correo electrónico"
              prepend-inner-icon="mdi-email-outline"
              variant="outlined"
              rounded="xl"
              placeholder="tu@email.com"
              :rules="emailRules"
              type="email"
              color="#195030"
              class="mb-1 mb-sm-2"
              :density="$vuetify.display.xs ? 'comfortable' : 'default'"
            >
              <template #append-inner>
                <v-icon v-if="email && isValidEmail" color="success" size="20">
                  mdi-check-circle
                </v-icon>
              </template>
            </v-text-field>

            <!-- Password -->
            <v-text-field
              v-model="password"
              label="Contraseña"
              prepend-inner-icon="mdi-lock-outline"
              :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
              :type="showPassword ? 'text' : 'password'"
              variant="outlined"
              rounded="xl"
              placeholder="Ingresa tu contraseña"
              :rules="passwordRules"
              color="#195030"
              class="mb-1 mb-sm-2"
              :density="$vuetify.display.xs ? 'comfortable' : 'default'"
              @click:append-inner="showPassword = !showPassword"
            />

            <!-- Remember me & Forgot password -->
            <div class="remember-forgot-wrapper mb-3 mb-sm-6">
              <v-checkbox
                v-model="rememberMe"
                label="Recordarme"
                color="#195030"
                hide-details
                density="compact"
                class="remember-checkbox"
              />
              
              <v-btn
                variant="text"
                color="#FE40B4"
                size="small"
                class="forgot-link"
                @click="dialogForgot = true"
              >
                ¿Olvidaste tu contraseña?
              </v-btn>
            </div>

            <!-- Login Button -->
            <v-btn
              type="submit"
              color="#195030"
              :size="$vuetify.display.xs ? 'large' : 'x-large'"
              block
              rounded="xl"
              elevation="0"
              class="login-btn mb-2 mb-sm-4"
              :loading="loading"
              :disabled="!valid"
            >
              <span class="font-weight-bold">Iniciar Sesión</span>
              <v-icon end size="20">mdi-arrow-right</v-icon>
            </v-btn>

            <!-- Divider -->
            <div class="divider-container my-3 my-sm-6">
              <v-divider />
              <span class="divider-text text-medium-emphasis">o continúa con</span>
              <v-divider />
            </div>

            <!-- Social Login -->
            <div class="social-buttons">
              <v-btn
                variant="outlined"
                size="large"
                block
                rounded="xl"
                class="social-btn mb-2"
                @click="loginWithGoogle"
              >
                <v-icon start color="#DB4437" :size="$vuetify.display.xs ? 18 : 24">mdi-google</v-icon>
                <span class="social-btn-text">Google</span>
              </v-btn>
              
              <v-btn
                variant="outlined"
                size="large"
                block
                rounded="xl"
                class="social-btn"
                @click="loginWithFacebook"
              >
                <v-icon start color="#1877F2" :size="$vuetify.display.xs ? 18 : 24">mdi-facebook</v-icon>
                <span class="social-btn-text">Facebook</span>
              </v-btn>
            </div>
          </v-form>

          <!-- Register link -->
          <div class="text-center mt-3 mt-sm-6">
            <p class="register-text text-medium-emphasis">
              ¿No tienes cuenta?
              <v-btn
                variant="text"
                color="#FE40B4"
                size="small"
                class="register-link px-1"
                @click="$router.push('/register')"
              >
                Regístrate aquí
              </v-btn>
            </p>
          </div>
        </v-card>

        <!-- Extra info -->
        <div class="text-center mt-2 mt-sm-4 mb-8 mb-sm-4 px-2">
          <p class="footer-info text-medium-emphasis">
            Al iniciar sesión, aceptas nuestros 
            <a href="#" class="link-info">Términos</a> y 
            <a href="#" class="link-info">Privacidad</a>
          </p>
        </div>
      </v-col>
    </v-row>

    <!-- Dialog: Forgot Password -->
    <v-dialog 
      v-model="dialogForgot" 
      :max-width="$vuetify.display.xs ? '90%' : '500'"
      :fullscreen="false"
    >
      <v-card rounded="xl" class="pa-3 pa-sm-4">
        <v-card-title class="d-flex align-center justify-space-between pa-0 mb-3">
          <span class="text-h6 text-high-emphasis font-weight-bold">
            Recuperar Contraseña
          </span>
          <v-btn
            icon="mdi-close"
            variant="text"
            size="small"
            @click="dialogForgot = false"
          />
        </v-card-title>
        
        <v-card-text class="pa-0 mb-3">
          <p class="mb-3 text-medium-emphasis text-body-2">
            Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
          </p>
          
          <v-text-field
            v-model="forgotEmail"
            label="Correo electrónico"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
            rounded="xl"
            placeholder="tu@email.com"
            type="email"
            color="#195030"
            density="comfortable"
          />
        </v-card-text>
        
        <v-card-actions class="pa-0 d-flex gap-2">
          <v-btn
            variant="text"
            size="default"
            class="flex-grow-1"
            @click="dialogForgot = false"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="#FE40B4"
            variant="flat"
            rounded="xl"
            size="default"
            class="flex-grow-1"
            @click="handleForgotPassword"
          >
            Enviar enlace
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Snackbar for notifications -->
    <v-snackbar
      v-model="snackbar"
      :color="snackbarColor"
      :timeout="3000"
      location="top"
      rounded="xl"
    >
      <span class="text-body-2">{{ snackbarText }}</span>
      <template #actions>
        <v-btn 
          variant="text" 
          size="small"
          @click="snackbar = false"
        >
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
  
  <AppFooter />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'

const router = useRouter()

// Form data
const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const showPassword = ref(false)
const valid = ref(false)
const loading = ref(false)

// Forgot password
const dialogForgot = ref(false)
const forgotEmail = ref('')

// Snackbar
const snackbar = ref(false)
const snackbarText = ref('')
const snackbarColor = ref('success')

// Validation rules
const emailRules = [
  v => !!v || 'El correo es requerido',
  v => /.+@.+\..+/.test(v) || 'El correo debe ser válido'
]

const passwordRules = [
  v => !!v || 'La contraseña es requerida',
  v => v.length >= 6 || 'La contraseña debe tener al menos 6 caracteres'
]

// Computed
const isValidEmail = computed(() => {
  return /.+@.+\..+/.test(email.value)
})

// Methods
const handleLogin = async () => {
  loading.value = true
  
  // Simular llamada a API
  setTimeout(() => {
    loading.value = false
    snackbarText.value = '¡Inicio de sesión exitoso!'
    snackbarColor.value = 'success'
    snackbar.value = true
    
    // Redirigir después de 1 segundo
    setTimeout(() => {
      router.push('/orders')
    }, 1000)
  }, 1500)
}

const handleForgotPassword = () => {
  if (!forgotEmail.value) {
    snackbarText.value = 'Por favor ingresa tu correo'
    snackbarColor.value = 'error'
    snackbar.value = true
    return
  }
  
  // Simular envío de email
  snackbarText.value = '¡Enlace de recuperación enviado! Revisa tu correo.'
  snackbarColor.value = 'success'
  snackbar.value = true
  dialogForgot.value = false
  forgotEmail.value = ''
}

const loginWithGoogle = () => {
  snackbarText.value = 'Iniciando sesión con Google...'
  snackbarColor.value = 'info'
  snackbar.value = true
}

const loginWithFacebook = () => {
  snackbarText.value = 'Iniciando sesión con Facebook...'
  snackbarColor.value = 'info'
  snackbar.value = true
}
</script>

<style scoped>
/* === WRAPPER PRINCIPAL === */
.login-page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, rgba(254, 64, 180, 0.08) 0%, rgba(254, 64, 180, 0.04) 50%, transparent 100%);
}

.theme--dark .login-page-wrapper {
  background: linear-gradient(135deg, rgba(254, 64, 180, 0.15) 0%, rgba(254, 64, 180, 0.08) 50%, transparent 100%);
}

/* === CONTENEDOR === */
.login-container {
  flex: 1;
  padding-top: 80px;
  padding-bottom: 20px;
  background: transparent;
  display: flex;
  align-items: center;
}

/* === CARD === */
.login-card {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(10px);
  animation: fadeIn 0.5s ease;
  max-width: 100%;
  width: 100%;
}

.theme--dark .login-card {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* === LOGO === */
.logo-wrapper {
  display: flex;
  justify-content: center;
}

.logo-circle {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(254, 64, 180, 0.15), rgba(254, 64, 180, 0.08));
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(254, 64, 180, 0.2);
  animation: float 3s ease-in-out infinite;
  transition: all 0.3s ease;
}

.theme--dark .logo-circle {
  background: linear-gradient(135deg, rgba(254, 64, 180, 0.25), rgba(254, 64, 180, 0.15));
  box-shadow: 0 4px 16px rgba(254, 64, 180, 0.3);
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

/* === TÍTULOS === */
.login-title {
  font-size: clamp(1.25rem, 5vw, 1.8rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.login-subtitle {
  font-size: clamp(0.875rem, 3.5vw, 1rem);
  margin: 0;
}

/* === CAMPOS DE FORMULARIO === */
.v-text-field :deep(.v-field) {
  font-size: clamp(0.875rem, 3.5vw, 1rem);
}

.v-text-field :deep(.v-label) {
  font-size: clamp(0.875rem, 3.5vw, 0.95rem);
}

/* === REMEMBER & FORGOT === */
.remember-forgot-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
}

.remember-checkbox :deep(.v-label) {
  font-size: clamp(0.8rem, 3vw, 0.9rem);
}

.forgot-link {
  text-transform: none;
  font-size: clamp(0.8rem, 3vw, 0.9rem);
  font-weight: 600;
  padding: 4px 8px;
  min-height: 36px;
  letter-spacing: 0;
}

.forgot-link:hover {
  text-decoration: underline;
}

/* === BOTÓN LOGIN === */
.login-btn {
  background: linear-gradient(135deg, #195030, #2a7050) !important;
  color: white !important;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  min-height: 48px;
  font-size: clamp(0.9rem, 3.5vw, 1rem);
}

.login-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.login-btn:hover::before {
  width: 300px;
  height: 300px;
}

.login-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(25, 80, 48, 0.3);
}

.login-btn:active {
  transform: translateY(0);
}

/* === DIVIDER === */
.divider-container {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
}

.divider-text {
  font-size: clamp(0.75rem, 3vw, 0.85rem);
  white-space: nowrap;
  background: rgb(var(--v-theme-surface));
  padding: 0 6px;
}

/* === BOTONES SOCIALES === */
.social-btn {
  border: 2px solid rgba(var(--v-border-color), var(--v-border-opacity));
  transition: all 0.3s ease;
  text-transform: none;
  font-weight: 600;
  min-height: 48px;
}

.social-btn-text {
  font-size: clamp(0.875rem, 3.5vw, 1rem);
}

.social-btn:hover {
  border-color: #195030;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.social-btn:active {
  transform: translateY(0);
}

.theme--dark .social-btn:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

/* === REGISTRO === */
.register-text {
  font-size: clamp(0.875rem, 3.5vw, 0.95rem);
  margin: 0;
  line-height: 1.5;
}

.register-link {
  text-transform: none;
  font-weight: 700;
  padding: 2px 4px;
  min-height: 32px;
  font-size: clamp(0.875rem, 3.5vw, 0.95rem);
  letter-spacing: 0;
}

.register-link:hover {
  text-decoration: underline;
}

/* === FOOTER INFO === */
.footer-info {
  font-size: clamp(0.7rem, 2.5vw, 0.8rem);
  margin: 0;
  line-height: 1.6;
}

.link-info {
  color: #195030;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}

.link-info:hover {
  color: #FE40B4;
  text-decoration: underline;
}

/* === RESPONSIVE MÓVILES === */
@media (max-width: 600px) {
  .login-page-wrapper {
    min-height: 100vh;
  }
  
  .login-container {
    padding-top: 80px;
    padding-bottom: 20px;
    padding-left: 12px;
    padding-right: 12px;
  }
  
  .logo-circle {
    width: 56px;
    height: 56px;
    border-radius: 14px;
  }
  
  /* Mejorar áreas táctiles */
  .v-btn {
    min-height: 44px !important;
  }
  
  /* Optimizar espaciado */
  .v-text-field {
    margin-bottom: 8px !important;
  }
  
  .remember-forgot-wrapper {
    margin-bottom: 16px !important;
  }
  
  /* Ajustar card */
  .login-card {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    margin-bottom: 0;
  }
  
  /* Asegurar que el texto del footer sea visible */
  .footer-info {
    padding-bottom: 8px;
    margin-bottom: 16px !important;
  }
}

/* === PANTALLAS MUY PEQUEÑAS === */
@media (max-width: 360px) {
  .login-container {
    padding-top: 68px;
    padding-left: 4px;
    padding-right: 4px;
  }
  
  .logo-circle {
    width: 52px;
    height: 52px;
  }
  
  .divider-container {
    gap: 6px;
  }
  
  .login-btn,
  .social-btn {
    min-height: 46px !important;
  }
}

/* === ORIENTACIÓN HORIZONTAL MÓVIL === */
@media (max-height: 600px) and (orientation: landscape) {
  .login-container {
    padding-top: 72px;
    padding-bottom: 100px;
    align-items: flex-start;
  }
  
  .logo-circle {
    width: 48px;
    height: 48px;
  }
  
  .login-title {
    font-size: 1.2rem;
    margin-bottom: 2px !important;
  }
  
  .login-subtitle {
    font-size: 0.8rem;
  }
  
  .mb-3, .my-3 {
    margin-bottom: 8px !important;
  }
  
  .mb-sm-6, .my-sm-6 {
    margin-bottom: 12px !important;
  }
}

/* === TABLETS === */
@media (min-width: 601px) and (max-width: 960px) {
  .login-container {
    padding-top: 88px;
  }
  
  .logo-circle {
    width: 72px;
    height: 72px;
  }
}

/* === ACCESIBILIDAD === */
@media (prefers-reduced-motion: reduce) {
  .login-card,
  .logo-circle,
  .login-btn,
  .social-btn {
    animation: none;
    transition: none;
  }
}

/* === MODO OSCURO === */
@media (prefers-color-scheme: dark) {
  .login-card {
    background: rgba(var(--v-theme-surface), 0.95);
  }
}

/* === MEJORA SAFE AREAS iOS === */
@supports (padding: max(0px)) {
  .login-container {
    padding-left: max(12px, env(safe-area-inset-left));
    padding-right: max(12px, env(safe-area-inset-right));
  }
}
</style>