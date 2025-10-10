<template>
  <AppHeader />

  <v-container fluid class="register-container">
    <v-row align="center" justify="center" class="fill-height">
      <v-col cols="12" sm="10" md="8" lg="6" xl="5">
        <v-card
          elevation="24"
          rounded="xl"
          class="register-card pa-8"
        >
          <!-- Header con logo -->
          <div class="text-center mb-6">
            <div class="logo-wrapper mb-4">
              <div class="logo-circle">
                <v-icon size="40" color="#195030">mdi-cart-heart</v-icon>
              </div>
            </div>
            
            <h1 class="register-title mb-2">Únete a Ismerely</h1>
            <p class="register-subtitle">Completa el formulario para crear tu cuenta</p>
          </div>

          <!-- Progress Stepper -->
          <v-stepper
            v-model="step"
            elevation="0"
            hide-actions
            class="mb-6 custom-stepper"
          >
            <v-stepper-header>
              <v-stepper-item
                :complete="step > 1"
                :value="1"
                color="#195030"
                title="Información Personal"
                class="stepper-item"
              />
              <v-divider />
              <v-stepper-item
                :complete="step > 2"
                :value="2"
                color="#195030"
                title="Cuenta"
                class="stepper-item"
              />
              <v-divider />
              <v-stepper-item
                :value="3"
                color="#195030"
                title="Ubicación"
                class="stepper-item"
              />
            </v-stepper-header>
          </v-stepper>

          <!-- Form -->
          <v-form ref="registerForm" v-model="valid">
            <!-- Step 1: Información Personal -->
            <div v-show="step === 1" class="step-content">
              <v-text-field
                v-model="form.firstName"
                label="Nombre(s)"
                prepend-inner-icon="mdi-account-outline"
                variant="outlined"
                rounded="lg"
                placeholder="Juan Carlos"
                :rules="nameRules"
                color="#195030"
                class="mb-2"
              />

              <v-text-field
                v-model="form.lastName"
                label="Apellido Paterno"
                prepend-inner-icon="mdi-account-outline"
                variant="outlined"
                rounded="lg"
                placeholder="García"
                :rules="nameRules"
                color="#195030"
                class="mb-2"
              />

              <v-text-field
                v-model="form.secondLastName"
                label="Apellido Materno (Opcional)"
                prepend-inner-icon="mdi-account-outline"
                variant="outlined"
                rounded="lg"
                placeholder="Rodríguez"
                color="#195030"
                class="mb-2"
              />

              <v-text-field
                v-model="form.phone"
                label="Teléfono"
                prepend-inner-icon="mdi-phone-outline"
                variant="outlined"
                rounded="lg"
                placeholder="55 1234 5678"
                :rules="phoneRules"
                color="#195030"
                type="tel"
              />
            </div>

            <!-- Step 2: Cuenta -->
            <div v-show="step === 2" class="step-content">
              <v-text-field
                v-model="form.email"
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
                  <v-icon v-if="form.email && isValidEmail" color="success" size="20">
                    mdi-check-circle
                  </v-icon>
                </template>
              </v-text-field>

              <v-text-field
                v-model="form.username"
                label="Nombre de usuario"
                prepend-inner-icon="mdi-at"
                variant="outlined"
                rounded="lg"
                placeholder="usuario123"
                :rules="usernameRules"
                color="#195030"
                class="mb-2"
              >
                <template #append-inner>
                  <v-tooltip text="Este será tu identificador único">
                    <template #activator="{ props }">
                      <v-icon v-bind="props" size="20" color="grey">
                        mdi-information-outline
                      </v-icon>
                    </template>
                  </v-tooltip>
                </template>
              </v-text-field>

              <v-text-field
                v-model="form.password"
                label="Contraseña"
                prepend-inner-icon="mdi-lock-outline"
                :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                :type="showPassword ? 'text' : 'password'"
                variant="outlined"
                rounded="lg"
                placeholder="Mínimo 8 caracteres"
                :rules="passwordRules"
                color="#195030"
                class="mb-2"
                @click:append-inner="showPassword = !showPassword"
              />

              <!-- Password Strength -->
              <div class="password-strength mb-4">
                <div class="strength-label">
                  Seguridad: 
                  <span :class="`strength-text-${passwordStrength.level}`">
                    {{ passwordStrength.text }}
                  </span>
                </div>
                <v-progress-linear
                  :model-value="passwordStrength.value"
                  :color="passwordStrength.color"
                  height="6"
                  rounded
                />
              </div>

              <v-text-field
                v-model="form.confirmPassword"
                label="Confirmar Contraseña"
                prepend-inner-icon="mdi-lock-check-outline"
                :append-inner-icon="showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
                :type="showConfirmPassword ? 'text' : 'password'"
                variant="outlined"
                rounded="lg"
                placeholder="Repite tu contraseña"
                :rules="confirmPasswordRules"
                color="#195030"
                @click:append-inner="showConfirmPassword = !showConfirmPassword"
              />
            </div>

            <!-- Step 3: Ubicación -->
            <div v-show="step === 3" class="step-content">
              <v-text-field
                v-model="form.postalCode"
                label="Código Postal"
                prepend-inner-icon="mdi-map-marker-outline"
                variant="outlined"
                rounded="lg"
                placeholder="01000"
                :rules="postalCodeRules"
                color="#195030"
                type="number"
                class="mb-2"
                @blur="searchLocation"
              >
                <template #append-inner>
                  <v-progress-circular
                    v-if="searchingLocation"
                    indeterminate
                    size="20"
                    width="2"
                    color="#195030"
                  />
                </template>
              </v-text-field>

              <v-text-field
                v-model="form.municipality"
                label="Municipio/Alcaldía"
                prepend-inner-icon="mdi-city-variant-outline"
                variant="outlined"
                rounded="lg"
                placeholder="Cuauhtémoc"
                :rules="requiredRules"
                color="#195030"
                class="mb-2"
                :readonly="searchingLocation"
              />

              <v-text-field
                v-model="form.state"
                label="Estado"
                prepend-inner-icon="mdi-map-outline"
                variant="outlined"
                rounded="lg"
                placeholder="Ciudad de México"
                :rules="requiredRules"
                color="#195030"
                :readonly="searchingLocation"
              />

              <!-- Terms and conditions -->
              <v-checkbox
                v-model="acceptTerms"
                color="#195030"
                class="mt-4"
              >
                <template #label>
                  <span class="terms-text">
                    Acepto los 
                    <a href="#" class="terms-link" @click.prevent="dialogTerms = true">
                      Términos y Condiciones
                    </a> 
                    y la 
                    <a href="#" class="terms-link" @click.prevent="dialogPrivacy = true">
                      Política de Privacidad
                    </a>
                  </span>
                </template>
              </v-checkbox>
            </div>

            <!-- Navigation Buttons -->
            <div class="d-flex justify-space-between mt-6 nav-buttons">
              <v-btn
                v-if="step > 1"
                variant="outlined"
                color="#195030"
                rounded="lg"
                class="nav-btn-back"
                @click="step--"
              >
                <v-icon start>mdi-arrow-left</v-icon>
                <span class="btn-text">Anterior</span>
              </v-btn>
              <v-spacer v-if="step === 1" />
              
              <v-btn
                v-if="step < 3"
                color="#195030"
                rounded="lg"
                class="nav-btn-next"
                @click="nextStep"
                :disabled="!canProceed"
              >
                <span class="btn-text">Siguiente</span>
                <v-icon end>mdi-arrow-right</v-icon>
              </v-btn>

              <v-btn
                v-else
                color="#195030"
                rounded="lg"
                size="large"
                class="register-btn"
                :loading="loading"
                :disabled="!valid || !acceptTerms"
                @click="handleRegister"
              >
                <span class="font-weight-bold btn-text-register">Crear Cuenta</span>
                <v-icon end>mdi-check</v-icon>
              </v-btn>
            </div>
          </v-form>

          <!-- Divider -->
          <div class="divider-container my-6">
            <v-divider />
            <span class="divider-text">o regístrate con</span>
            <v-divider />
          </div>

          <!-- Social Register -->
          <div class="social-buttons">
            <v-btn
              variant="outlined"
              size="large"
              block
              rounded="lg"
              class="social-btn mb-3"
              @click="registerWithGoogle"
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
              @click="registerWithFacebook"
            >
              <v-icon start color="#1877F2">mdi-facebook</v-icon>
              Facebook
            </v-btn>
          </div>

          <!-- Login link -->
          <div class="text-center mt-6">
            <p class="login-text">
              ¿Ya tienes cuenta?
              <v-btn
                variant="text"
                color="#FE40B4"
                class="login-link"
                @click="$router.push('/login')"
              >
                Inicia sesión aquí
              </v-btn>
            </p>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Dialog: Terms -->
    <v-dialog v-model="dialogTerms" max-width="600" scrollable>
      <v-card rounded="xl">
        <v-card-title class="d-flex align-center justify-space-between pa-4">
          <span class="text-h6">Términos y Condiciones</span>
          <v-btn icon="mdi-close" variant="text" size="small" @click="dialogTerms = false" />
        </v-card-title>
        <v-divider />
        <v-card-text class="pa-6" style="height: 400px;">
          <h3 class="mb-4">1. Aceptación de términos</h3>
          <p class="mb-4">
            Al acceder y utilizar este sitio web, aceptas estar sujeto a estos términos y condiciones...
          </p>
          <h3 class="mb-4">2. Uso del servicio</h3>
          <p class="mb-4">
            Te comprometes a usar nuestro servicio solo para propósitos legales...
          </p>
          <h3 class="mb-4">3. Privacidad</h3>
          <p>
            Respetamos tu privacidad y protegemos tus datos personales...
          </p>
        </v-card-text>
        <v-divider />
        <v-card-actions class="pa-4">
          <v-spacer />
          <v-btn color="#195030" variant="flat" rounded="lg" @click="dialogTerms = false">
            Entendido
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Dialog: Privacy -->
    <v-dialog v-model="dialogPrivacy" max-width="600" scrollable>
      <v-card rounded="xl">
        <v-card-title class="d-flex align-center justify-space-between pa-4">
          <span class="text-h6">Política de Privacidad</span>
          <v-btn icon="mdi-close" variant="text" size="small" @click="dialogPrivacy = false" />
        </v-card-title>
        <v-divider />
        <v-card-text class="pa-6" style="height: 400px;">
          <h3 class="mb-4">Recopilación de información</h3>
          <p class="mb-4">
            Recopilamos información que nos proporcionas directamente...
          </p>
          <h3 class="mb-4">Uso de la información</h3>
          <p class="mb-4">
            Utilizamos tu información para proporcionar y mejorar nuestros servicios...
          </p>
          <h3 class="mb-4">Protección de datos</h3>
          <p>
            Implementamos medidas de seguridad para proteger tu información...
          </p>
        </v-card-text>
        <v-divider />
        <v-card-actions class="pa-4">
          <v-spacer />
          <v-btn color="#195030" variant="flat" rounded="lg" @click="dialogPrivacy = false">
            Entendido
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Snackbar -->
    <v-snackbar
      v-model="snackbar"
      :color="snackbarColor"
      :timeout="3000"
      location="top"
      rounded="lg"
    >
      {{ snackbarText }}
      <template #actions>
        <v-btn variant="text" @click="snackbar = false">Cerrar</v-btn>
      </template>
    </v-snackbar>
  </v-container>
  
  <app-footer />
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'

const router = useRouter()

// Stepper
const step = ref(1)

// Form data
const form = ref({
  firstName: '',
  lastName: '',
  secondLastName: '',
  phone: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
  postalCode: '',
  municipality: '',
  state: ''
})

// UI states
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const valid = ref(false)
const loading = ref(false)
const acceptTerms = ref(false)
const searchingLocation = ref(false)
const dialogTerms = ref(false)
const dialogPrivacy = ref(false)

// Snackbar
const snackbar = ref(false)
const snackbarText = ref('')
const snackbarColor = ref('success')

// Validation rules
const nameRules = [
  v => !!v || 'Este campo es requerido',
  v => v.length >= 2 || 'Debe tener al menos 2 caracteres'
]

const phoneRules = [
  v => !!v || 'El teléfono es requerido',
  v => /^\d{10}$/.test(v.replace(/\s/g, '')) || 'Debe ser un teléfono válido de 10 dígitos'
]

const emailRules = [
  v => !!v || 'El correo es requerido',
  v => /.+@.+\..+/.test(v) || 'El correo debe ser válido'
]

const usernameRules = [
  v => !!v || 'El nombre de usuario es requerido',
  v => v.length >= 4 || 'Debe tener al menos 4 caracteres',
  v => /^[a-zA-Z0-9_]+$/.test(v) || 'Solo letras, números y guión bajo'
]

const passwordRules = [
  v => !!v || 'La contraseña es requerida',
  v => v.length >= 8 || 'Debe tener al menos 8 caracteres',
  v => /[A-Z]/.test(v) || 'Debe contener al menos una mayúscula',
  v => /[0-9]/.test(v) || 'Debe contener al menos un número'
]

const confirmPasswordRules = [
  v => !!v || 'Debes confirmar la contraseña',
  v => v === form.value.password || 'Las contraseñas no coinciden'
]

const postalCodeRules = [
  v => !!v || 'El código postal es requerido',
  v => /^\d{5}$/.test(v) || 'Debe ser un código postal válido de 5 dígitos'
]

const requiredRules = [
  v => !!v || 'Este campo es requerido'
]

// Computed
const isValidEmail = computed(() => {
  return /.+@.+\..+/.test(form.value.email)
})

const passwordStrength = computed(() => {
  const password = form.value.password
  if (!password) return { value: 0, text: 'Ninguna', color: 'grey', level: 'none' }
  
  let strength = 0
  if (password.length >= 8) strength += 25
  if (password.length >= 12) strength += 25
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 25
  if (/[0-9]/.test(password)) strength += 15
  if (/[^a-zA-Z0-9]/.test(password)) strength += 10
  
  if (strength < 40) return { value: strength, text: 'Débil', color: 'error', level: 'weak' }
  if (strength < 70) return { value: strength, text: 'Media', color: 'warning', level: 'medium' }
  return { value: strength, text: 'Fuerte', color: 'success', level: 'strong' }
})

const canProceed = computed(() => {
  if (step.value === 1) {
    return form.value.firstName && form.value.lastName && form.value.phone
  }
  if (step.value === 2) {
    return form.value.email && form.value.username && form.value.password && 
           form.value.confirmPassword && form.value.password === form.value.confirmPassword
  }
  return true
})

// Methods
const nextStep = () => {
  if (canProceed.value) {
    step.value++
  }
}

const searchLocation = async () => {
  if (form.value.postalCode.length === 5) {
    searchingLocation.value = true
    
    // Simular búsqueda de ubicación
    setTimeout(() => {
      form.value.municipality = 'Cuauhtémoc'
      form.value.state = 'Ciudad de México'
      searchingLocation.value = false
    }, 1000)
  }
}

const handleRegister = async () => {
  loading.value = true
  
  // Simular registro
  setTimeout(() => {
    loading.value = false
    snackbarText.value = '¡Registro exitoso! Redirigiendo...'
    snackbarColor.value = 'success'
    snackbar.value = true
    
    setTimeout(() => {
      router.push('/login')
    }, 1500)
  }, 2000)
}

const registerWithGoogle = () => {
  snackbarText.value = 'Registrando con Google...'
  snackbarColor.value = 'info'
  snackbar.value = true
}

const registerWithFacebook = () => {
  snackbarText.value = 'Registrando con Facebook...'
  snackbarColor.value = 'info'
  snackbar.value = true
}
</script>

<style scoped>
/* CAMBIO 1: Ajusté el min-height y añadí padding-top para compensar el header */
.register-container {
  min-height: calc(100vh - 72px);
  padding-top: 88px; /* 72px del header + 16px de espacio */
  padding-bottom: 80px; /* Espacio para el footer */
  background: linear-gradient(135deg, #ffe5f3 0%, #fff8fc 50%, #ffffff 100%);
  display: flex;
  align-items: center;
}

/* === CARD === */
.register-card {
  background: white;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  animation: fadeIn 0.6s ease;
  /* CAMBIO 2: Añadí max-width */
  max-width: 100%;
  width: 100%;
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
.register-title {
  font-size: 1.8rem;
  font-weight: 900;
  color: #195030;
  letter-spacing: -0.02em;
}

.register-subtitle {
  color: #666;
  font-size: 1rem;
  margin: 0;
}

/* CAMBIO 3: Mejoré el stepper para móviles */
.custom-stepper {
  background: transparent;
}

.stepper-item :deep(.v-stepper-item__title) {
  font-size: 0.85rem;
  font-weight: 600;
}

/* === STEP CONTENT === */
.step-content {
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* === PASSWORD STRENGTH === */
.password-strength {
  padding: 8px 12px;
  background: #f5f5f5;
  border-radius: 8px;
}

.strength-label {
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 8px;
  font-weight: 600;
}

.strength-text-none { color: #999; }
.strength-text-weak { color: #f44336; }
.strength-text-medium { color: #ff9800; }
.strength-text-strong { color: #4caf50; }

/* === TERMS === */
.terms-text {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
}

.terms-link {
  color: #195030;
  text-decoration: none;
  font-weight: 600;
}

.terms-link:hover {
  color: #FE40B4;
  text-decoration: underline;
}

/* CAMBIO 4: Botones de navegación más flexibles */
.nav-buttons {
  gap: 8px;
}

/* === REGISTER BUTTON === */
.register-btn {
  background: linear-gradient(135deg, #195030, #2a7050) !important;
  color: white !important;
  transition: all 0.3s ease;
}

.register-btn:hover {
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

/* === LOGIN LINK === */
.login-text {
  color: #666;
  font-size: 0.95rem;
  margin: 0;
}

.login-link {
  text-transform: none;
  font-weight: 700;
  padding: 0 4px;
}

.login-link:hover {
  text-decoration: underline;
}

/* CAMBIO 5: RESPONSIVE MEJORADO */
/* Tablets y pantallas medianas */
@media (max-width: 960px) {
  .register-container {
    padding-top: 96px;
    padding-bottom: 60px;
  }
  
  .register-card {
    padding: 32px !important;
  }
  
  .register-title {
    font-size: 1.6rem;
  }
  
  .stepper-item :deep(.v-stepper-item__title) {
    font-size: 0.75rem;
  }
}

/* Móviles */
@media (max-width: 600px) {
  /* CAMBIO 6: Ajustes de padding */
  .register-container {
    padding-top: 88px;
    padding-bottom: 40px;
    padding-left: 12px;
    padding-right: 12px;
  }
  
  /* CAMBIO 7: Card más compacto */
  .register-card {
    padding: 20px !important;
  }
  
  .register-title {
    font-size: 1.4rem;
  }
  
  .register-subtitle {
    font-size: 0.9rem;
  }
  
  /* CAMBIO 8: Logo más pequeño */
  .logo-circle {
    width: 60px;
    height: 60px;
  }
  
  .logo-circle .v-icon {
    font-size: 30px !important;
  }
  
  /* CAMBIO 9: Stepper compacto en móviles */
  .stepper-item :deep(.v-stepper-item__title) {
    font-size: 0.65rem;
    line-height: 1.2;
  }
  
  .custom-stepper {
    margin-bottom: 16px !important;
  }
  
  /* CAMBIO 10: Ocultar texto en botones de navegación */
  .nav-btn-back .btn-text,
  .nav-btn-next .btn-text {
    display: none;
  }
  
  .nav-btn-back,
  .nav-btn-next {
    min-width: 48px !important;
    padding: 0 12px !important;
  }
  
  /* CAMBIO 11: Botón de registro más compacto */
  .btn-text-register {
    font-size: 0.9rem;
  }
  
  .divider-container {
    gap: 12px;
    margin: 20px 0 !important;
  }
  
  .divider-text {
    font-size: 0.75rem;
  }
  
  /* CAMBIO 12: Terms más legible */
  .terms-text {
    font-size: 0.8rem;
    line-height: 1.5;
  }
  
  /* CAMBIO 13: Password strength más compacto */
  .password-strength {
    padding: 6px 10px;
  }
  
  .strength-label {
    font-size: 0.75rem;
  }
}

/* Pantallas muy pequeñas (360px) */
@media (max-width: 360px) {
  .register-container {
    padding-top: 80px;
    padding-left: 8px;
    padding-right: 8px;
  }
  
  .register-card {
    padding: 16px !important;
  }
  
  .register-title {
    font-size: 1.2rem;
  }
  
  .register-subtitle {
    font-size: 0.8rem;
  }
  
  .logo-circle {
    width: 50px;
    height: 50px;
  }
  
  .logo-circle .v-icon {
    font-size: 24px !important;
  }
  
  /* CAMBIO 14: Stepper súper compacto */
  .stepper-item :deep(.v-stepper-item__title) {
    font-size: 0.6rem;
  }
  
  /* CAMBIO 15: Iconos más pequeños en inputs */
  :deep(.v-field__prepend-inner .v-icon),
  :deep(.v-field__append-inner .v-icon) {
    font-size: 18px !important;
  }
  
  /* CAMBIO 16: Botones sociales más compactos */
  .social-btn {
    padding: 8px 12px !important;
  }
  
  .social-btn .v-icon {
    font-size: 18px !important;
  }
}

/* CAMBIO 17: Ajuste para orientación horizontal en móviles */
@media (max-height: 600px) and (orientation: landscape) {
  .register-container {
    padding-top: 100px;
    padding-bottom: 60px;
  }
  
  .logo-circle {
    width: 50px;
    height: 50px;
    margin-bottom: 8px;
  }
  
  .register-title {
    font-size: 1.3rem;
    margin-bottom: 8px !important;
  }
  
  .register-subtitle {
    font-size: 0.85rem;
  }
  
  .custom-stepper {
    margin-bottom: 12px !important;
  }
}
</style>