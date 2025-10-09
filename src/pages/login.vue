<template>
  <AppHeader />

  <v-container fluid class="login-container">
    <v-row align="center" justify="center" class="fill-height">
      <v-col cols="12" sm="10" md="8" lg="5" xl="4">
        <v-card
          elevation="24"
          rounded="xl"
          class="login-card pa-8"
        >
          <!-- Header con logo -->
          <div class="text-center mb-6">
            <div class="logo-wrapper mb-4">
              <div class="logo-circle">
                <v-icon size="40" color="#195030">mdi-cart-heart</v-icon>
              </div>
            </div>
            
            <h1 class="login-title mb-2">Bienvenido a Ismerely</h1>
            <p class="login-subtitle">Inicia sesión para continuar</p>
          </div>

          <!-- Form -->
          <v-form ref="loginForm" v-model="valid" @submit.prevent="handleLogin">
            <!-- Email -->
            <v-text-field
              v-model="email"
              label="Correo electrónico"
              prepend-inner-icon="mdi-email-outline"
              variant="outlined"
              rounded="lg"
              placeholder="tu@email.com"
              :rules="emailRules"
              type="email"
              color="#195030"
              class="mb-2"
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
              rounded="lg"
              placeholder="Ingresa tu contraseña"
              :rules="passwordRules"
              color="#195030"
              class="mb-2"
              @click:append-inner="showPassword = !showPassword"
            />

            <!-- Remember me & Forgot password -->
            <div class="d-flex justify-space-between align-center mb-6">
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
              size="x-large"
              block
              rounded="lg"
              elevation="0"
              class="login-btn mb-4"
              :loading="loading"
              :disabled="!valid"
            >
              <span class="font-weight-bold">Iniciar Sesión</span>
              <v-icon end>mdi-arrow-right</v-icon>
            </v-btn>

            <!-- Divider -->
            <div class="divider-container my-6">
              <v-divider />
              <span class="divider-text">o continúa con</span>
              <v-divider />
            </div>

            <!-- Social Login -->
            <div class="social-buttons">
              <v-btn
                variant="outlined"
                size="large"
                block
                rounded="lg"
                class="social-btn mb-3"
                @click="loginWithGoogle"
              >
                <v-icon start color="#DB4437">mdi-google</v-icon>
                Google
              </v-btn>
              
              <v-btn
                variant="outlined"
                size="large"
                block
                rounded="lg"
                class="social-btn"
                @click="loginWithFacebook"
              >
                <v-icon start color="#1877F2">mdi-facebook</v-icon>
                Facebook
              </v-btn>
            </div>
          </v-form>

          <!-- Register link -->
          <div class="text-center mt-6">
            <p class="register-text">
              ¿No tienes cuenta?
              <v-btn
                variant="text"
                color="#FE40B4"
                class="register-link"
                @click="$router.push('/register')"
              >
                Regístrate aquí
              </v-btn>
            </p>
          </div>
        </v-card>

        <!-- Extra info -->
        <div class="text-center mt-4">
          <p class="footer-info">
            Al iniciar sesión, aceptas nuestros 
            <a href="#" class="link-info">Términos y Condiciones</a> y 
            <a href="#" class="link-info">Política de Privacidad</a>
          </p>
        </div>
      </v-col>
    </v-row>

    <!-- Dialog: Forgot Password -->
    <v-dialog v-model="dialogForgot" max-width="500">
      <v-card rounded="xl" class="pa-4">
        <v-card-title class="d-flex align-center justify-space-between">
          <span class="text-h6">Recuperar Contraseña</span>
          <v-btn
            icon="mdi-close"
            variant="text"
            size="small"
            @click="dialogForgot = false"
          />
        </v-card-title>
        
        <v-card-text>
          <p class="mb-4 text-medium-emphasis">
            Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
          </p>
          
          <v-text-field
            v-model="forgotEmail"
            label="Correo electrónico"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
            rounded="lg"
            placeholder="tu@email.com"
            type="email"
            color="#195030"
          />
        </v-card-text>
        
        <v-card-actions>
          <v-spacer />
          <v-btn
            variant="text"
            @click="dialogForgot = false"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="#FE40B4"
            variant="flat"
            rounded="lg"
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
      rounded="lg"
    >
      {{ snackbarText }}
      <template #actions>
        <v-btn variant="text" @click="snackbar = false">
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
  <AppFooter />
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
    
    // Guardar en localStorage si "recordarme" está activado
    if (rememberMe.value) {
      localStorage.setItem('rememberedEmail', email.value)
    }
    
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
  // Aquí iría la integración real con Google
}

const loginWithFacebook = () => {
  snackbarText.value = 'Iniciando sesión con Facebook...'
  snackbarColor.value = 'info'
  snackbar.value = true
  // Aquí iría la integración real con Facebook
}

// Cargar email recordado al montar
const rememberedEmail = localStorage.getItem('rememberedEmail')
if (rememberedEmail) {
  email.value = rememberedEmail
  rememberMe.value = true
}
</script>

<style scoped>
.login-container {
  min-height: 110vh;
  background: linear-gradient(135deg, #ffe5f3 0%, #fff8fc 50%, #ffffff 100%);
  display: flex;
  align-items: center;
  padding: 20px;
}

/* === CARD === */
.login-card {
  background: white;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  animation: fadeIn 0.6s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
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
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: linear-gradient(135deg, #ffe5f3, #fff8fc);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(254, 64, 180, 0.2);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* === TITLES === */
.login-title {
  font-size: 1.8rem;
  font-weight: 900;
  color: #195030;
  letter-spacing: -0.02em;
}

.login-subtitle {
  color: #666;
  font-size: 1rem;
  margin: 0;
}

/* === CHECKBOX === */
.remember-checkbox :deep(.v-label) {
  font-size: 0.9rem;
  color: #666;
}

/* === FORGOT LINK === */
.forgot-link {
  text-transform: none;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0 8px;
}

.forgot-link:hover {
  text-decoration: underline;
}

/* === LOGIN BUTTON === */
.login-btn {
  background: linear-gradient(135deg, #195030, #2a7050) !important;
  color: white !important;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
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
  box-shadow: 0 8px 24px rgba(25, 80, 48, 0.3);
}

/* === DIVIDER === */
.divider-container {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
}

.divider-text {
  color: #999;
  font-size: 0.85rem;
  white-space: nowrap;
  background: white;
  padding: 0 8px;
}

/* === SOCIAL BUTTONS === */
.social-btn {
  border: 2px solid #e0e0e0;
  transition: all 0.3s ease;
  text-transform: none;
  font-weight: 600;
}

.social-btn:hover {
  border-color: #195030;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* === REGISTER === */
.register-text {
  color: #666;
  font-size: 0.95rem;
  margin: 0;
}

.register-link {
  text-transform: none;
  font-weight: 700;
  padding: 0 4px;
}

.register-link:hover {
  text-decoration: underline;
}

/* === FOOTER INFO === */
.footer-info {
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
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

/* === RESPONSIVE === */
@media (max-width: 600px) {
  .login-title {
    font-size: 1.5rem;
  }
  
  .login-card {
    padding: 24px !important;
  }
  
  .divider-container {
    gap: 12px;
  }
  
  .divider-text {
    font-size: 0.75rem;
  }
}
</style>