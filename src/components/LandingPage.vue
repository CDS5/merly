<template>
  <v-app>
    <AppHeader />

    <!-- HERO SECTION -->
    <v-main>
      <section class="hero-section">
        <!-- Floating Elements Background -->
        <div class="floating-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
          <div class="shape shape-4"></div>
        </div>

        <v-container class="py-12 py-md-16">
          <v-row align="center" justify="center">
            <!-- LEFT: TEXT -->
            <v-col cols="12" md="6" class="text-left px-6 px-md-12">
              <div class="fade-up">
                <v-chip color="#FE40B4" text-color="white" class="mb-4 chip-pulse" size="small">
                  <v-icon start size="16">mdi-storefront</v-icon>
                  Merly
                </v-chip>

                <h1 class="hero-title mb-4">
                  <span class="title-line">Productos</span><br />
                  <span class="title-line delay-1">para tu bienestar</span>
                  <div class="title-decoration"></div>
                </h1>

                <p class="hero-subtitle mb-8 fade-up delay-2">
                  Descubre nuestra línea completa de productos naturales y suplementos alimenticios.
                  Sistema de punto de venta rápido y confiable para distribuidores y consumidores finales.
                </p>

                <!-- Features Pills -->
                <div class="features-pills mb-8 fade-up delay-3">
                  <v-chip class="feature-chip" color="#195030" variant="tonal">
                    <v-icon start>mdi-leaf</v-icon>
                    Natural
                  </v-chip>
                  <v-chip class="feature-chip" color="#FE40B4" variant="tonal">
                    <v-icon start>mdi-certificate</v-icon>
                    Certificado
                  </v-chip>
                  <v-chip class="feature-chip" color="#195030" variant="tonal">
                    <v-icon start>mdi-truck-fast</v-icon>
                    Envío Rápido
                  </v-chip>
                </div>

                <v-btn color="#FE40B4" size="x-large"
                  class="text-white font-weight-bold px-10 cta-button fade-up delay-4" rounded="pill" elevation="0">
                  Ver Catálogo
                  <v-icon end>mdi-arrow-right</v-icon>
                </v-btn>

                <!-- Stats -->
                <v-row class="mt-10 fade-up delay-5">
                  <v-col cols="4" class="text-center stat-item">
                    <div class="stat-number">150+</div>
                    <div class="stat-label">Productos</div>
                  </v-col>
                  <v-col cols="4" class="text-center stat-item">
                    <div class="stat-number">98%</div>
                    <div class="stat-label">Satisfacción</div>
                  </v-col>
                  <v-col cols="4" class="text-center stat-item">
                    <div class="stat-number">500+</div>
                    <div class="stat-label">Clientes</div>
                  </v-col>
                </v-row>
              </div>
            </v-col>

            <!-- RIGHT: IMAGE -->
            <v-col cols="12" lg="6" class="d-flex justify-center mt-8 mt-lg-0">
              <div class="image-container fade-up delay-1">
                <div class="image-wrapper">
                  <v-img src="@/assets/mujerCorriendo.png" alt="Productos Ismerely" max-width="580"
                    class="rounded-xl hero-image" cover></v-img>

                  <!-- Floating Cards -->
                  <v-card class="floating-card card-1" elevation="8">
                    <v-card-text class="pa-3">
                      <div class="d-flex align-center">
                        <v-avatar color="#FE40B4" size="40" class="mr-3">
                          <v-icon color="white">mdi-shopping</v-icon>
                        </v-avatar>
                        <div>
                          <div class="card-value">+15 ventas</div>
                          <div class="card-label">Hoy</div>
                        </div>
                      </div>
                    </v-card-text>
                  </v-card>

                  <v-card class="floating-card card-2" elevation="8">
                    <v-card-text class="pa-3">
                      <div class="d-flex align-center">
                        <v-avatar color="#195030" size="40" class="mr-3">
                          <v-icon color="white">mdi-tag-heart</v-icon>
                        </v-avatar>
                        <div>
                          <div class="card-value">20% OFF</div>
                          <div class="card-label">Promoción</div>
                        </div>
                      </div>
                    </v-card-text>
                  </v-card>

                  <v-card class="floating-card card-3" elevation="8">
                    <v-card-text class="pa-3">
                      <div class="d-flex align-center">
                        <v-avatar color="#FE40B4" size="40" class="mr-3">
                          <v-icon color="white">mdi-star</v-icon>
                        </v-avatar>
                        <div>
                          <div class="card-value">4.9★</div>
                          <div class="card-label">Valoración</div>
                        </div>
                      </div>
                    </v-card-text>
                  </v-card>
                </div>

                <div class="image-glow"></div>
              </div>
            </v-col>
          </v-row>
        </v-container>

        <!-- Scroll Indicator -->
        <div class="scroll-indicator">
          <v-icon color="#FE40B4" class="bounce">mdi-chevron-down</v-icon>
        </div>
      </section>
    </v-main>

    <!-- WhatsApp FAB -->
    <v-btn icon size="x-large" color="#25D366" class="whatsapp-fab" elevation="8">
      <v-icon size="32">mdi-whatsapp</v-icon>
      <div class="whatsapp-pulse"></div>
    </v-btn>
  </v-app>
</template>

<script setup>
import AppHeader from './AppHeader.vue';
</script>

<style scoped>
/* === GENERAL === */
* {
  box-sizing: border-box;
}

.hero-section {
  background: linear-gradient(135deg, #ffe5f3 0%, #fff8fc 50%, #ffffff 100%);
  min-height: calc(100vh - 72px);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}


/* === FLOATING SHAPES === */
.floating-shapes {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
}

.shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
  animation: float 20s infinite ease-in-out;
}

.shape-1 {
  width: 300px;
  height: 300px;
  background: #FE40B4;
  top: 10%;
  left: 5%;
  animation-delay: 0s;
}

.shape-2 {
  width: 200px;
  height: 200px;
  background: #195030;
  top: 60%;
  right: 10%;
  animation-delay: 5s;
}

.shape-3 {
  width: 150px;
  height: 150px;
  background: #FE40B4;
  bottom: 10%;
  left: 15%;
  animation-delay: 10s;
}

.shape-4 {
  width: 250px;
  height: 250px;
  background: #195030;
  top: 30%;
  right: 20%;
  animation-delay: 15s;
}

@keyframes float {

  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }

  33% {
    transform: translate(30px, -30px) rotate(120deg);
  }

  66% {
    transform: translate(-20px, 20px) rotate(240deg);
  }
}

/* === HERO TEXT === */
.chip-pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {

  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(254, 64, 180, 0.4);
  }

  50% {
    box-shadow: 0 0 0 10px rgba(254, 64, 180, 0);
  }
}

.hero-title {
  color: #195030;
  font-weight: 900;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
  position: relative;
  z-index: 1;
}

.title-line {
  display: inline-block;
  opacity: 0;
  transform: translateY(30px);
  animation: slideUp 0.8s ease forwards;
}

.title-line.delay-1 {
  animation-delay: 0.2s;
}

.title-decoration {
  width: 120px;
  height: 6px;
  background: linear-gradient(90deg, #FE40B4, transparent);
  margin-top: 16px;
  border-radius: 3px;
  animation: expandWidth 0.8s ease 0.6s forwards;
  transform-origin: left;
  transform: scaleX(0);
}

@keyframes expandWidth {
  to {
    transform: scaleX(1);
  }
}

.hero-subtitle {
  color: #195030;
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.7;
  max-width: 540px;
  opacity: 0.85;
  position: relative;
  z-index: 1;
}

/* === FEATURES PILLS === */
.features-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.feature-chip {
  font-weight: 600;
  transition: all 0.3s ease;
}

.feature-chip:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* === CTA BUTTON === */
.cta-button {
  background: linear-gradient(135deg, #FE40B4, #ff1493) !important;
  transition: all 0.4s ease;
  box-shadow: 0 8px 24px rgba(254, 64, 180, 0.3);
  position: relative;
  overflow: hidden;
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.cta-button:hover::before {
  width: 300px;
  height: 300px;
}

.cta-button:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(254, 64, 180, 0.4);
}

/* === STATS === */
.stat-item {
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 2rem;
  font-weight: 900;
  color: #195030;
  line-height: 1;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 0.875rem;
  color: #195030;
  opacity: 0.7;
  font-weight: 600;
}

/* === IMAGE === */
.image-container {
  position: relative;
  max-width: 580px;
  width: 100%;
  z-index: 1;
}

.image-wrapper {
  position: relative;
  transition: transform 0.5s ease;
}

.image-wrapper:hover {
  transform: translateY(-8px);
}

.hero-image {
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  transition: all 0.5s ease;
}

.image-wrapper:hover .hero-image {
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2);
}

.image-glow {
  position: absolute;
  inset: -20px;
  border-radius: 24px;
  background: radial-gradient(circle at 50% 50%, rgba(254, 64, 180, 0.15), transparent 70%);
  z-index: -1;
  filter: blur(40px);
}

/* === FLOATING CARDS === */
.floating-card {
  position: absolute;
  background: white;
  border-radius: 16px;
  animation: floatCard 3s infinite ease-in-out;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.8);
}

.card-1 {
  top: 10%;
  right: -10%;
  animation-delay: 0s;
}

.card-2 {
  bottom: 25%;
  left: -8%;
  animation-delay: 1.5s;
}

.card-3 {
  top: 50%;
  right: -5%;
  animation-delay: 3s;
}

@keyframes floatCard {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-15px);
  }
}

.card-value {
  font-size: 1.1rem;
  font-weight: 900;
  color: #195030;
  line-height: 1;
}

.card-label {
  font-size: 0.75rem;
  color: #666;
  margin-top: 2px;
}

/* === WHATSAPP FAB === */
.whatsapp-fab {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 1000;
  transition: all 0.3s ease;
}

.whatsapp-fab:hover {
  transform: scale(1.15);
}

.whatsapp-pulse {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #25D366;
  animation: ping 2s infinite;
  z-index: -1;
}

@keyframes ping {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

/* === SCROLL INDICATOR === */
.scroll-indicator {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(10px);
  }
}

/* === ANIMATIONS === */
.fade-up {
  opacity: 0;
  transform: translateY(40px);
  animation: fadeUp 0.9s ease forwards;
}

.delay-1 {
  animation-delay: 0.2s;
}

.delay-2 {
  animation-delay: 0.4s;
}

.delay-3 {
  animation-delay: 0.6s;
}

.delay-4 {
  animation-delay: 0.8s;
}

.delay-5 {
  animation-delay: 1s;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* === RESPONSIVE === */
@media (max-width: 960px) {
  .hero-section {
    text-align: center;
    padding: 40px 0;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1rem;
    margin: 0 auto;
  }

  .features-pills {
    justify-content: center;
  }

  .image-container {
    margin-top: 40px;
  }

  .floating-card {
    display: none;
  }

  .stat-number {
    font-size: 1.5rem;
  }

  .whatsapp-fab {
    bottom: 20px;
    right: 20px;
  }
}

@media (max-width: 600px) {
  .features-pills {
    flex-direction: column;
    align-items: stretch;
  }

  .feature-chip {
    justify-content: center;
  }
}
</style>