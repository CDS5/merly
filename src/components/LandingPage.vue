<template>
  <v-app>
    <AppHeader />

    <v-main>
      <!-- SECCIÓN 1: HERO (INICIO) -->
      <section id="inicio" class="hero-section">
        <div class="floating-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
          <div class="shape shape-4"></div>
        </div>

        <v-container class="py-8 py-md-12 py-lg-16">
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" class="text-center text-md-left px-4 px-sm-6 px-md-12">
              <div class="fade-up">
                <v-chip color="#FE40B4" class="mb-4 chip-pulse" size="small">
                  <img height="20" src="@/assets/isotipo.svg" alt="logo" class="mr-2">
                  Merly
                </v-chip>

                <h1 class="hero-title mb-4 text-high-emphasis">
                  <span class="title-line">Productos</span><br />
                  <span class="title-line delay-1">para tu bienestar</span>
                  <div class="title-decoration"></div>
                </h1>

                <p class="hero-subtitle mb-6 mb-md-8 fade-up delay-2 text-medium-emphasis">
                  Descubre nuestra línea completa de productos naturales y suplementos alimenticios.
                  Sistema de punto de venta rápido y confiable para distribuidores y consumidores finales.
                </p>

                <div class="features-pills mb-6 mb-md-8 fade-up delay-3">
                  <v-chip class="feature-chip" color="#195030" variant="tonal" size="small">
                    <v-icon start size="small">mdi-leaf</v-icon>
                    Natural
                  </v-chip>
                  <v-chip class="feature-chip" color="#FE40B4" variant="tonal" size="small">
                    <v-icon start size="small">mdi-certificate</v-icon>
                    Certificado
                  </v-chip>
                  <v-chip class="feature-chip" color="#195030" variant="tonal" size="small">
                    <v-icon start size="small">mdi-truck-fast</v-icon>
                    Envío Rápido
                  </v-chip>
                </div>

                <v-btn 
                  color="#FE40B4" 
                  :size="isMobile ? 'large' : 'x-large'"
                  class="text-white font-weight-bold cta-button fade-up delay-4" 
                  rounded="pill" 
                  elevation="0"
                  @click="scrollToSection('servicios')"
                  block
                  :class="{ 'px-8': isMobile, 'px-10': !isMobile }"
                >
                  Descubre Más
                  <v-icon end>mdi-arrow-right</v-icon>
                </v-btn>

                <v-row class="mt-6 mt-md-10 fade-up delay-5">
                  <v-col cols="4" class="text-center stat-item">
                    <div class="stat-number text-high-emphasis">150+</div>
                    <div class="stat-label text-medium-emphasis">Productos</div>
                  </v-col>
                  <v-col cols="4" class="text-center stat-item">
                    <div class="stat-number text-high-emphasis">98%</div>
                    <div class="stat-label text-medium-emphasis">Satisfacción</div>
                  </v-col>
                  <v-col cols="4" class="text-center stat-item">
                    <div class="stat-number text-high-emphasis">500+</div>
                    <div class="stat-label text-medium-emphasis">Clientes</div>
                  </v-col>
                </v-row>
              </div>
            </v-col>

            <v-col cols="12" lg="6" class="d-none d-lg-flex justify-center">
              <div class="image-container fade-up delay-1">
                <div class="image-wrapper">
                  <v-img 
                    src="@/assets/mujerCorriendo.png" 
                    alt="Productos Ismerely" 
                    max-width="580"
                    class="rounded-xl hero-image" 
                    cover
                  ></v-img>

                  <v-card class="floating-card card-1" elevation="8" rounded="xl">
                    <v-card-text class="pa-3">
                      <div class="d-flex align-center">
                        <v-avatar color="#FE40B4" size="40" class="mr-3">
                          <v-icon color="white">mdi-shopping</v-icon>
                        </v-avatar>
                        <div>
                          <div class="card-value text-high-emphasis">+15 ventas</div>
                          <div class="card-label text-medium-emphasis">Hoy</div>
                        </div>
                      </div>
                    </v-card-text>
                  </v-card>

                  <v-card class="floating-card card-2" elevation="8" rounded="xl">
                    <v-card-text class="pa-3">
                      <div class="d-flex align-center">
                        <v-avatar color="#195030" size="40" class="mr-3">
                          <v-icon color="white">mdi-tag-heart</v-icon>
                        </v-avatar>
                        <div>
                          <div class="card-value text-high-emphasis">20% OFF</div>
                          <div class="card-label text-medium-emphasis">Promoción</div>
                        </div>
                      </div>
                    </v-card-text>
                  </v-card>

                  <v-card class="floating-card card-3" elevation="8" rounded="xl">
                    <v-card-text class="pa-3">
                      <div class="d-flex align-center">
                        <v-avatar color="#FE40B4" size="40" class="mr-3">
                          <v-icon color="white">mdi-star</v-icon>
                        </v-avatar>
                        <div>
                          <div class="card-value text-high-emphasis">4.9★</div>
                          <div class="card-label text-medium-emphasis">Valoración</div>
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

        <div class="scroll-indicator d-none d-md-block" @click="scrollToSection('servicios')">
          <v-icon color="#FE40B4" class="bounce">mdi-chevron-down</v-icon>
        </div>
      </section>

      <!-- SECCIÓN 2: SERVICIOS -->
      <section id="servicios" class="servicios-section py-12 py-md-16">
        <v-container>
          <div class="text-center mb-8 mb-md-12">
            <v-chip color="#195030" class="mb-4" size="small" variant="tonal">
              <v-icon start>mdi-star</v-icon>
              ¿POR QUÉ ELEGIRNOS?
            </v-chip>
            <h2 class="section-title mb-4 text-high-emphasis">Servicios que nos Hacen Únicos</h2>
            <p class="section-subtitle text-medium-emphasis px-4">
              Ofrecemos mucho más que productos. Descubre la experiencia Merly completa
            </p>
          </div>

          <!-- Servicios Principales -->
          <v-row class="mb-8 mb-md-12">
            <v-col cols="12" md="4" v-for="(service, i) in mainServices" :key="i" class="mb-4 mb-md-0">
              <v-card class="service-card" elevation="0" height="100%">
                <v-card-text class="pa-6 pa-md-8">
                  <div class="service-icon-wrapper mb-4">
                    <v-avatar :color="service.color" :size="isMobile ? 64 : 80" class="service-icon">
                      <v-icon color="white" :size="isMobile ? 32 : 40">{{ service.icon }}</v-icon>
                    </v-avatar>
                    <div class="icon-bg" :style="`background: ${service.color}15`"></div>
                  </div>
                  <h3 class="service-title mb-3 text-high-emphasis">{{ service.title }}</h3>
                  <p class="service-description mb-4 text-medium-emphasis">{{ service.description }}</p>
                  <v-chip size="small" :color="service.color" variant="tonal" class="font-weight-bold">
                    <v-icon start size="small">mdi-check</v-icon>
                    {{ service.badge }}
                  </v-chip>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <!-- Por Qué Elegirnos -->
          <div class="why-choose-section mb-8 mb-md-12">
            <v-row align="center">
              <v-col cols="12" md="6" class="mb-6 mb-md-0">
                <div class="why-image-container">
                  <v-img 
                    src="@/assets/mujerCorriendo.png" 
                    class="rounded-xl why-image" 
                    cover 
                    :height="isMobile ? 300 : 400"
                  >
                    <template v-slot:placeholder>
                      <div class="d-flex align-center justify-center fill-height">
                        <v-icon size="64" color="#FE40B4">mdi-image</v-icon>
                      </div>
                    </template>
                  </v-img>
                  <div class="why-image-decoration d-none d-md-block"></div>
                </div>
              </v-col>
              <v-col cols="12" md="6" class="px-4 ps-md-8">
                <v-chip color="#FE40B4" class="mb-4" size="small" variant="tonal">
                  <v-icon start>mdi-heart</v-icon>
                  NUESTRA PROMESA
                </v-chip>
                <h2 class="section-title mb-6 text-high-emphasis">¿Por Qué Elegir Merly?</h2>
                <v-list class="why-list bg-transparent">
                  <v-list-item v-for="(reason, i) in whyChooseReasons" :key="i" class="why-item px-0 mb-3">
                    <template v-slot:prepend>
                      <v-avatar :color="reason.color" :size="isMobile ? 40 : 50" class="mr-3 mr-md-4">
                        <v-icon color="white" :size="isMobile ? 20 : 24">{{ reason.icon }}</v-icon>
                      </v-avatar>
                    </template>
                    <v-list-item-title class="why-item-title text-high-emphasis mb-1">{{ reason.title }}</v-list-item-title>
                    <v-list-item-subtitle class="why-item-text text-medium-emphasis">{{ reason.text }}</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </div>

          <!-- Beneficios Adicionales -->
          <div class="benefits-grid">
            <v-row>
              <v-col cols="6" md="3" v-for="(benefit, i) in additionalBenefits" :key="i" class="mb-4 mb-md-0">
                <div class="benefit-card text-center pa-4">
                  <div class="benefit-icon-wrapper mb-3">
                    <v-icon :color="benefit.color" :size="isMobile ? 36 : 48">{{ benefit.icon }}</v-icon>
                  </div>
                  <h4 class="benefit-title mb-2 text-high-emphasis">{{ benefit.title }}</h4>
                  <p class="benefit-text text-medium-emphasis">{{ benefit.text }}</p>
                </div>
              </v-col>
            </v-row>
          </div>

          <!-- Garantía -->
          <v-card class="guarantee-card mt-8 mt-md-12" elevation="0">
            <v-card-text class="pa-6 pa-md-12">
              <v-row align="center">
                <v-col cols="12" md="8" class="mb-4 mb-md-0">
                  <div class="d-flex align-center mb-4 flex-column flex-sm-row text-center text-sm-left">
                    <v-icon color="#195030" :size="isMobile ? 48 : 60" class="mb-3 mb-sm-0 mr-sm-4">mdi-shield-check</v-icon>
                    <div>
                      <h3 class="guarantee-title text-high-emphasis mb-2">Garantía de Satisfacción 100%</h3>
                      <p class="guarantee-subtitle text-medium-emphasis mb-0">
                        Si no estás completamente satisfecho con tu compra, te devolvemos tu dinero sin preguntas
                      </p>
                    </div>
                  </div>
                  <v-divider class="my-4"></v-divider>
                  <div class="d-flex flex-wrap gap-2 gap-sm-4 justify-center justify-md-start">
                    <v-chip color="#195030" variant="tonal" size="small">
                      <v-icon start size="small">mdi-check-circle</v-icon>
                      30 días de garantía
                    </v-chip>
                    <v-chip color="#FE40B4" variant="tonal" size="small">
                      <v-icon start size="small">mdi-certificate</v-icon>
                      Productos certificados
                    </v-chip>
                    <v-chip color="#195030" variant="tonal" size="small">
                      <v-icon start size="small">mdi-lock</v-icon>
                      Compra segura
                    </v-chip>
                  </div>
                </v-col>
                <v-col cols="12" md="4" class="text-center">
                  <v-btn 
                    color="#FE40B4" 
                    :size="isMobile ? 'default' : 'large'"
                    class="text-white font-weight-bold cta-button" 
                    rounded="pill"
                    elevation="0" 
                    @click="scrollToSection('productos')"
                    block
                    :class="{ 'px-6': isMobile, 'px-8': !isMobile }"
                  >
                    Ver Productos
                    <v-icon end>mdi-arrow-right</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-container>
      </section>

      <!-- SECCIÓN 3: PRODUCTOS -->
      <section id="productos" class="productos-section py-12 py-md-16 bg-surface">
        <v-container>
          <div class="text-center mb-8 mb-md-12">
            <v-chip color="#FE40B4" class="mb-4" size="small">
              <img height="20" src="@/assets/isotipo.svg" alt="logo" class="mr-2">
              NUESTROS PRODUCTOS
            </v-chip>
            <h2 class="section-title mb-4 text-high-emphasis">Productos Premium para tu Salud</h2>
            <p class="section-subtitle text-medium-emphasis px-4">Explora nuestra selección de productos naturales diseñados para tu bienestar</p>
          </div>

          <!-- Categorías -->
          <v-row class="mb-6 mb-md-8">
            <v-col cols="12" class="text-center">
              <v-chip-group v-model="selectedCategory" mandatory color="#FE40B4" class="justify-center">
                <v-chip value="todos" variant="outlined" class="category-chip" size="small">
                  <v-icon start size="small">mdi-view-grid</v-icon>
                  Todos
                </v-chip>
                <v-chip value="suplementos" variant="outlined" class="category-chip" size="small">
                  <v-icon start size="small">mdi-pill</v-icon>
                  Suplementos
                </v-chip>
                <v-chip value="bebidas" variant="outlined" class="category-chip" size="small">
                  <v-icon start size="small">mdi-cup</v-icon>
                  Bebidas
                </v-chip>
                <v-chip value="cuidado" variant="outlined" class="category-chip" size="small">
                  <v-icon start size="small">mdi-heart-pulse</v-icon>
                  <span class="d-none d-sm-inline">Cuidado Personal</span>
                  <span class="d-inline d-sm-none">Cuidado</span>
                </v-chip>
              </v-chip-group>
            </v-col>
          </v-row>

          <!-- Grid de Productos -->
          <v-row>
            <v-col cols="6" sm="6" md="4" lg="3" v-for="(product, i) in filteredProducts" :key="i">
              <v-card class="product-card" elevation="0" height="100%">
                <div class="product-image-container">
                  <v-img :src="product.image" :height="isMobile ? 160 : 220" cover class="product-image">
                    <template v-slot:placeholder>
                      <div class="d-flex align-center justify-center fill-height">
                        <v-icon size="48" color="#FE40B4">mdi-package-variant</v-icon>
                      </div>
                    </template>
                  </v-img>
                  <v-chip v-if="product.badge" class="product-badge" :color="product.badgeColor" size="x-small">
                    {{ product.badge }}
                  </v-chip>
                </div>
                <v-card-text class="pa-3 pa-sm-4">
                  <v-chip size="x-small" :color="product.categoryColor" variant="tonal" class="mb-2">
                    {{ product.categoryLabel }}
                  </v-chip>
                  <h4 class="product-title mb-2 text-high-emphasis">{{ product.name }}</h4>
                  <p class="product-description mb-3 text-medium-emphasis d-none d-sm-block">{{ product.description }}</p>
                  <div class="d-flex align-center justify-space-between">
                    <div>
                      <div class="product-price">${{ product.price }}</div>
                      <div v-if="product.oldPrice" class="product-old-price text-disabled">${{ product.oldPrice }}</div>
                    </div>
                    <v-btn icon size="small" color="#FE40B4" variant="tonal">
                      <v-icon size="small">mdi-cart-plus</v-icon>
                    </v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <!-- Beneficios de Productos -->
          <v-row class="mt-8 mt-md-12">
            <v-col cols="6" md="3" v-for="(benefit, i) in productBenefits" :key="i" class="text-center mb-4 mb-md-0">
              <v-avatar :color="benefit.color" :size="isMobile ? 64 : 80" class="mb-3 mb-md-4">
                <v-icon color="white" :size="isMobile ? 32 : 40">{{ benefit.icon }}</v-icon>
              </v-avatar>
              <h4 class="benefit-title mb-2 text-high-emphasis">{{ benefit.title }}</h4>
              <p class="benefit-text text-medium-emphasis">{{ benefit.text }}</p>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- SECCIÓN 4: CONÓCENOS -->
      <section id="conocenos" class="about-section">
        <!-- Hero About -->
        <div class="about-hero">
          <v-container class="py-12 py-md-16">
            <v-row justify="center">
              <v-col cols="12" md="10" lg="8" class="text-center px-4">
                <v-chip color="#FE40B4" class="mb-4 chip-pulse" size="small">
                  <img height="20" src="@/assets/isotipo.svg" alt="logo" class="mr-2">
                  NUESTRA HISTORIA
                </v-chip>
                <h1 class="about-title mb-6 text-high-emphasis">
                  Transformando vidas a través del bienestar natural
                </h1>
                <p class="about-subtitle text-medium-emphasis">
                  Desde 2015, Merly se ha dedicado a ofrecer productos naturales de la más alta calidad,
                  ayudando a miles de personas a alcanzar sus objetivos de salud y bienestar.
                </p>
              </v-col>
            </v-row>
          </v-container>
          <div class="wave-divider">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="wave-path"></path>
            </svg>
          </div>
        </div>

        <!-- Misión, Visión, Valores -->
        <div class="values-section py-12 py-md-16 bg-surface">
          <v-container>
            <v-row>
              <v-col cols="12" md="4" v-for="(item, i) in values" :key="i" class="mb-4 mb-md-0">
                <v-card class="value-card" elevation="0" height="100%">
                  <v-card-text class="pa-6 pa-md-8 text-center">
                    <div class="value-icon-wrapper mb-4">
                      <v-avatar :color="item.color" :size="isMobile ? 64 : 80" class="value-icon">
                        <v-icon color="white" :size="isMobile ? 32 : 40">{{ item.icon }}</v-icon>
                      </v-avatar>
                    </div>
                    <h3 class="value-title mb-3 text-high-emphasis">{{ item.title }}</h3>
                    <p class="value-text text-medium-emphasis">{{ item.text }}</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>

        <!-- Estadísticas -->
        <div class="stats-section py-12 py-md-16">
          <v-container>
            <div class="text-center mb-8 mb-md-12 px-4">
              <h2 class="section-title mb-4 text-high-emphasis">Nuestro Impacto</h2>
              <p class="section-subtitle-dark text-medium-emphasis">Resultados que hablan por sí mismos</p>
            </div>
            <v-row>
              <v-col cols="6" md="3" v-for="(stat, i) in stats" :key="i" class="text-center mb-4 mb-md-0">
                <div class="stat-card">
                  <div class="stat-icon-bg" :style="`background: ${stat.color}15`">
                    <v-icon :color="stat.color" :size="isMobile ? 24 : 32">{{ stat.icon }}</v-icon>
                  </div>
                  <div class="stat-number-big text-high-emphasis">{{ stat.number }}</div>
                  <div class="stat-label-big text-medium-emphasis">{{ stat.label }}</div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>

        <!-- Equipo -->
        <div class="values-section py-12 py-md-16">
          <v-container>
            <div class="text-center mb-8 mb-md-12 px-4">
              <h2 class="section-title-dark mb-4 text-high-emphasis">Nuestro Equipo</h2>
              <p class="section-subtitle-dark text-medium-emphasis">Expertos comprometidos con tu bienestar</p>
            </div>
            <v-row>
              <v-col cols="6" sm="6" md="3" v-for="(member, i) in team" :key="i" class="mb-4 mb-md-0">
                <v-card class="team-card" elevation="0">
                  <div class="team-image-wrapper">
                    <v-avatar :size="isMobile ? 120 : 200" class="team-avatar">
                      <v-icon :size="isMobile ? 60 : 100" color="#195030">mdi-account-circle</v-icon>
                    </v-avatar>
                    <div class="team-overlay">
                      <v-btn icon size="small" color="white" class="ma-1">
                        <v-icon color="#195030" size="small">mdi-linkedin</v-icon>
                      </v-btn>
                      <v-btn icon size="small" color="white" class="ma-1">
                        <v-icon color="#FE40B4" size="small">mdi-instagram</v-icon>
                      </v-btn>
                    </div>
                  </div>
                  <v-card-text class="text-center pa-3 pa-md-4">
                    <h4 class="team-name text-high-emphasis">{{ member.name }}</h4>
                    <p class="team-role">{{ member.role }}</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>

        <!-- CTA Final -->
        <div class="cta-section py-12 py-md-16">
          <v-container>
            <v-card class="cta-card" elevation="0">
              <v-card-text class="pa-6 pa-md-12 text-center">
                <v-icon color="#FE40B4" :size="isMobile ? 48 : 60" class="mb-4">mdi-handshake</v-icon>
                <h2 class="cta-title mb-4 text-high-emphasis">¿Listo para comenzar tu transformación?</h2>
                <p class="cta-text mb-6 mb-md-8 text-medium-emphasis px-4">
                  Únete a nuestra comunidad y descubre cómo nuestros productos pueden cambiar tu vida
                </p>
                <v-btn 
                  color="#FE40B4" 
                  :size="isMobile ? 'large' : 'x-large'"
                  class="text-white font-weight-bold cta-button"
                  rounded="pill" 
                  elevation="0" 
                  @click="scrollToSection('productos')"
                  :block="isMobile"
                  :class="{ 'px-8': isMobile, 'px-12': !isMobile }"
                >
                  Explorar Productos
                  <v-icon end>mdi-arrow-right</v-icon>
                </v-btn>
              </v-card-text>
            </v-card>
          </v-container>
        </div>
      </section>
    </v-main>

    <!-- WhatsApp FAB -->
    <v-btn 
      icon 
      :size="isMobile ? 'large' : 'x-large'"
      color="#25D366" 
      class="whatsapp-fab" 
      elevation="8"
    >
      <v-icon :size="isMobile ? 24 : 32">mdi-whatsapp</v-icon>
      <div class="whatsapp-pulse"></div>
    </v-btn>

    <AppFooter />
  </v-app>
</template>

<script setup>
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';
import { ref, computed } from 'vue';
import { useDisplay } from 'vuetify';

const { smAndDown } = useDisplay();
const isMobile = smAndDown;

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = isMobile.value ? 64 : 72;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
};

const selectedCategory = ref('todos');

const mainServices = ref([
  {
    icon: 'mdi-cart-check',
    color: '#FE40B4',
    title: 'Sistema POS Inteligente',
    description: 'Plataforma de punto de venta optimizada para distribuidores. Gestiona inventario, ventas y clientes en tiempo real.',
    badge: 'Para distribuidores'
  },
  {
    icon: 'mdi-account-group',
    color: '#195030',
    title: 'Asesoría Personalizada',
    description: 'Nuestro equipo de expertos te guía en la selección de productos según tus necesidades específicas de salud.',
    badge: 'Consulta gratis'
  },
  {
    icon: 'mdi-rocket-launch',
    color: '#FE40B4',
    title: 'Programa de Distribuidores',
    description: 'Únete a nuestra red de distribuidores y accede a precios especiales, capacitación y soporte continuo.',
    badge: 'Oportunidad de negocio'
  }
]);

const whyChooseReasons = ref([
  {
    icon: 'mdi-leaf',
    color: '#195030',
    title: 'Productos 100% Naturales',
    text: 'Ingredientes orgánicos certificados sin aditivos artificiales ni conservadores dañinos'
  },
  {
    icon: 'mdi-certificate',
    color: '#FE40B4',
    title: 'Certificación Internacional',
    text: 'Todos nuestros productos cuentan con certificaciones de calidad reconocidas a nivel mundial'
  },
  {
    icon: 'mdi-science',
    color: '#195030',
    title: 'Respaldo Científico',
    text: 'Fórmulas desarrolladas con base en investigaciones y estudios clínicos comprobados'
  },
  {
    icon: 'mdi-heart-pulse',
    color: '#FE40B4',
    title: 'Resultados Comprobados',
    text: 'Miles de clientes satisfechos han transformado su salud con nuestros productos'
  }
]);

const additionalBenefits = ref([
  {
    icon: 'mdi-truck-fast',
    color: '#195030',
    title: 'Envío Express',
    text: 'Recibe tus productos en 24-48 horas'
  },
  {
    icon: 'mdi-currency-usd',
    color: '#FE40B4',
    title: 'Mejor Precio',
    text: 'Garantizamos los precios más competitivos'
  },
  {
    icon: 'mdi-headphones',
    color: '#195030',
    title: 'Soporte 24/7',
    text: 'Estamos disponibles cuando nos necesites'
  },
  {
    icon: 'mdi-gift',
    color: '#FE40B4',
    title: 'Programa de Lealtad',
    text: 'Acumula puntos y obtén descuentos'
  }
]);

const products = ref([
  {
    name: 'Colágeno Hidrolizado',
    description: 'Mejora la elasticidad de la piel y fortalece articulaciones',
    price: '349',
    oldPrice: '449',
    image: '@/assets/products/colageno.jpg',
    category: 'suplementos',
    categoryLabel: 'Suplemento',
    categoryColor: '#195030',
    badge: '20% OFF',
    badgeColor: '#FE40B4'
  },
  {
    name: 'Té Verde Detox',
    description: 'Antioxidante natural que ayuda a la pérdida de peso',
    price: '199',
    image: '@/assets/products/te-verde.jpg',
    category: 'bebidas',
    categoryLabel: 'Bebida',
    categoryColor: '#FE40B4',
    badge: 'NUEVO',
    badgeColor: '#195030'
  },
  {
    name: 'Omega 3 Premium',
    description: 'Ácidos grasos esenciales para salud cardiovascular',
    price: '299',
    image: '@/assets/products/omega3.jpg',
    category: 'suplementos',
    categoryLabel: 'Suplemento',
    categoryColor: '#195030'
  },
  {
    name: 'Crema Hidratante Natural',
    description: 'Hidratación profunda con ingredientes orgánicos',
    price: '249',
    oldPrice: '299',
    image: '@/assets/products/crema.jpg',
    category: 'cuidado',
    categoryLabel: 'Cuidado Personal',
    categoryColor: '#FE40B4',
    badge: '15% OFF',
    badgeColor: '#FE40B4'
  },
  {
    name: 'Proteína Vegetal',
    description: 'Proteína plant-based con 25g por porción',
    price: '549',
    image: '@/assets/products/proteina.jpg',
    category: 'suplementos',
    categoryLabel: 'Suplemento',
    categoryColor: '#195030',
    badge: 'BESTSELLER',
    badgeColor: '#195030'
  },
  {
    name: 'Jugo Verde Energizante',
    description: 'Mezcla de vegetales verdes para energía natural',
    price: '179',
    image: '@/assets/products/jugo.jpg',
    category: 'bebidas',
    categoryLabel: 'Bebida',
    categoryColor: '#FE40B4'
  },
  {
    name: 'Serum Facial Vitamina C',
    description: 'Ilumina y rejuvenece tu piel naturalmente',
    price: '399',
    image: '@/assets/products/serum.jpg',
    category: 'cuidado',
    categoryLabel: 'Cuidado Personal',
    categoryColor: '#FE40B4',
    badge: 'NUEVO',
    badgeColor: '#195030'
  },
  {
    name: 'Multivitamínico Completo',
    description: 'Todas las vitaminas esenciales en una cápsula',
    price: '279',
    image: '@/assets/products/multivitaminico.jpg',
    category: 'suplementos',
    categoryLabel: 'Suplemento',
    categoryColor: '#195030'
  }
]);

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'todos') {
    return products.value;
  }
  return products.value.filter(p => p.category === selectedCategory.value);
});

const productBenefits = ref([
  {
    icon: 'mdi-shield-check',
    color: '#195030',
    title: 'Garantía de Calidad',
    text: '100% productos certificados y seguros'
  },
  {
    icon: 'mdi-truck-delivery',
    color: '#FE40B4',
    title: 'Envío Gratis',
    text: 'En compras mayores a $500'
  },
  {
    icon: 'mdi-cash-multiple',
    color: '#195030',
    title: 'Mejor Precio',
    text: 'Precios competitivos garantizados'
  },
  {
    icon: 'mdi-headset',
    color: '#FE40B4',
    title: 'Soporte 24/7',
    text: 'Te ayudamos cuando lo necesites'
  }
]);

const values = ref([
  {
    icon: 'mdi-target',
    color: '#FE40B4',
    title: 'Misión',
    text: 'Proporcionar productos naturales de calidad superior que mejoren la salud y el bienestar de nuestros clientes de manera sostenible.'
  },
  {
    icon: 'mdi-eye',
    color: '#195030',
    title: 'Visión',
    text: 'Ser la marca líder en productos naturales para el bienestar, reconocida por nuestra calidad, innovación y compromiso con la salud.'
  },
  {
    icon: 'mdi-heart-multiple',
    color: '#FE40B4',
    title: 'Valores',
    text: 'Integridad, calidad, innovación, sostenibilidad y un compromiso genuino con el bienestar de nuestros clientes y el planeta.'
  }
]);

const stats = ref([
  { number: '8+', label: 'Años de experiencia', icon: 'mdi-calendar-star', color: '#195030' },
  { number: '150+', label: 'Productos', icon: 'mdi-package-variant', color: '#FE40B4' },
  { number: '5,000+', label: 'Clientes felices', icon: 'mdi-account-heart', color: '#195030' },
  { number: '98%', label: 'Satisfacción', icon: 'mdi-thumb-up', color: '#FE40B4' }
]);

const team = ref([
  { name: 'Dr. María González', role: 'Directora General' },
  { name: 'Lic. Carlos Méndez', role: 'Director de Ventas' },
  { name: 'Dra. Ana Martínez', role: 'Nutrióloga' },
  { name: 'Ing. Roberto Silva', role: 'Director de Operaciones' }
]);
</script>

<style scoped>
/* === HERO SECTION === */
.hero-section {
  background: linear-gradient(135deg, rgba(254, 64, 180, 0.08) 0%, rgba(254, 64, 180, 0.04) 50%, transparent 100%);
  min-height: calc(100vh - 72px);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.theme--dark .hero-section {
  background: linear-gradient(135deg, rgba(254, 64, 180, 0.15) 0%, rgba(254, 64, 180, 0.08) 50%, transparent 100%);
}

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

.theme--dark .shape {
  opacity: 0.15;
}

.shape-1 {
  width: 300px;
  height: 300px;
  background: #FE40B4;
  top: 10%;
  left: 5%;
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
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(30px, -30px) rotate(120deg);
  }
  66% {
    transform: translate(-20px, 20px) rotate(240deg);
  }
}

.chip-pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(254, 64, 180, 0.4);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(254, 64, 180, 0);
  }
}

.hero-title {
  font-weight: 900;
  font-size: clamp(2rem, 6vw, 4.5rem);
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
  font-size: clamp(0.95rem, 2vw, 1.25rem);
  line-height: 1.6;
  max-width: 540px;
  position: relative;
  z-index: 1;
}

.features-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

@media (min-width: 960px) {
  .features-pills {
    justify-content: flex-start;
  }
}

.feature-chip {
  font-weight: 600;
  transition: all 0.3s ease;
}

.feature-chip:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

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

.stat-item {
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 900;
  line-height: 1;
  margin-bottom: 4px;
}

.stat-label {
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  font-weight: 600;
}

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

.theme--dark .hero-image {
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}

.image-wrapper:hover .hero-image {
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2);
}

.theme--dark .image-wrapper:hover .hero-image {
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
}

.image-glow {
  position: absolute;
  inset: -20px;
  border-radius: 24px;
  background: radial-gradient(circle at 50% 50%, rgba(254, 64, 180, 0.15), transparent 70%);
  z-index: -1;
  filter: blur(40px);
}

.theme--dark .image-glow {
  background: radial-gradient(circle at 50% 50%, rgba(254, 64, 180, 0.25), transparent 70%);
}

.floating-card {
  position: absolute;
  border-radius: 16px;
  animation: floatCard 3s infinite ease-in-out;
  backdrop-filter: blur(10px);
}

.card-1 {
  top: 10%;
  right: -10%;
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
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

.card-value {
  font-size: 1.2rem;
  font-weight: 900;
  line-height: 1;
}

.card-label {
  font-size: 0.75rem;
  margin-top: 2px;
}

.scroll-indicator {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  cursor: pointer;
}

.bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

/* === SERVICIOS SECTION === */
.servicios-section {
  background: rgb(var(--v-theme-background));
  position: relative;
  overflow: hidden;
}

.servicios-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 400px;
  background: linear-gradient(135deg, rgba(25, 80, 48, 0.05) 0%, transparent 100%);
  z-index: 0;
}

.theme--dark .servicios-section::before {
  background: linear-gradient(135deg, rgba(25, 80, 48, 0.1) 0%, transparent 100%);
}

.section-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 900;
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.service-card {
  border: 2px solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 20px;
  transition: all 0.4s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(254, 64, 180, 0.1), transparent);
  transition: left 0.5s ease;
}

.service-card:hover::before {
  left: 100%;
}

.service-card:hover {
  transform: translateY(-10px);
  border-color: #FE40B4;
  box-shadow: 0 15px 40px rgba(254, 64, 180, 0.2);
}

.theme--dark .service-card:hover {
  box-shadow: 0 15px 40px rgba(254, 64, 180, 0.3);
}

.service-icon-wrapper {
  position: relative;
  display: inline-block;
}

.service-icon {
  transition: transform 0.4s ease;
  position: relative;
  z-index: 2;
}

.service-card:hover .service-icon {
  transform: scale(1.1) rotate(5deg);
}

.icon-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  z-index: 1;
  transition: transform 0.4s ease;
}

.service-card:hover .icon-bg {
  transform: translate(-50%, -50%) scale(1.3);
}

.service-title {
  font-size: clamp(1.1rem, 3vw, 1.4rem);
  font-weight: 800;
  line-height: 1.3;
}

.service-description {
  line-height: 1.6;
  font-size: clamp(0.875rem, 2vw, 1rem);
}

/* Por Qué Elegirnos */
.why-choose-section {
  position: relative;
}

.why-image-container {
  position: relative;
}

.why-image {
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  transition: transform 0.4s ease;
}

.theme--dark .why-image {
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.why-image-container:hover .why-image {
  transform: scale(1.02);
}

.why-image-decoration {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, rgba(254, 64, 180, 0.2), rgba(25, 80, 48, 0.2));
  border-radius: 50%;
  z-index: -1;
  filter: blur(40px);
}

.why-list {
  background: transparent !important;
}

.why-item {
  transition: transform 0.3s ease;
}

.why-item:hover {
  transform: translateX(10px);
}

.why-item-title {
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  font-weight: 700;
}

.why-item-text {
  font-size: clamp(0.85rem, 2vw, 0.95rem);
  line-height: 1.6;
}

/* Beneficios */
.benefit-card {
  padding: 16px;
  border-radius: 16px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.benefit-card:hover {
  background: rgba(var(--v-theme-surface), 1);
  transform: translateY(-5px);
}

.benefit-icon-wrapper {
  transition: transform 0.3s ease;
}

.benefit-card:hover .benefit-icon-wrapper {
  transform: scale(1.1);
}

.benefit-title {
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  font-weight: 700;
}

.benefit-text {
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  line-height: 1.5;
}

/* Garantía */
.guarantee-card {
  border: 3px solid #195030;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(25, 80, 48, 0.05) 0%, transparent 100%);
  transition: all 0.4s ease;
}

.theme--dark .guarantee-card {
  background: linear-gradient(135deg, rgba(25, 80, 48, 0.1) 0%, transparent 100%);
}

.guarantee-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(25, 80, 48, 0.2);
}

.guarantee-title {
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 800;
}

.guarantee-subtitle {
  font-size: clamp(0.875rem, 2vw, 1rem);
  line-height: 1.6;
}

/* === PRODUCTOS SECTION === */
.productos-section {
  background: rgb(var(--v-theme-surface));
}

.category-chip {
  font-weight: 600;
  transition: all 0.3s ease;
}

.category-chip:hover {
  transform: translateY(-2px);
}

.product-card {
  border: 2px solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 16px;
  transition: all 0.4s ease;
  overflow: hidden;
}

.product-card:hover {
  transform: translateY(-8px);
  border-color: #FE40B4;
  box-shadow: 0 10px 30px rgba(254, 64, 180, 0.15);
}

.theme--dark .product-card:hover {
  box-shadow: 0 10px 30px rgba(254, 64, 180, 0.25);
}

.product-image-container {
  position: relative;
  overflow: hidden;
}

.product-image {
  transition: transform 0.5s ease;
}

.product-card:hover .product-image {
  transform: scale(1.1);
}

.product-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  font-weight: 700;
  z-index: 2;
}

.product-title {
  font-size: clamp(0.95rem, 2.5vw, 1.1rem);
  font-weight: 700;
  line-height: 1.3;
}

.product-description {
  font-size: 0.875rem;
  line-height: 1.5;
}

.product-price {
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 900;
  color: #FE40B4;
  line-height: 1;
}

.product-old-price {
  font-size: 0.875rem;
  text-decoration: line-through;
}

/* === ABOUT SECTION === */
.about-section {
  background: rgb(var(--v-theme-background));
}

.about-hero {
  background: linear-gradient(135deg, rgba(254, 64, 180, 0.08) 0%, rgba(254, 64, 180, 0.04) 50%, transparent 100%);
  padding-top: 60px;
  position: relative;
}

.theme--dark .about-hero {
  background: linear-gradient(135deg, rgba(254, 64, 180, 0.15) 0%, rgba(254, 64, 180, 0.08) 50%, transparent 100%);
}

.about-title {
  font-size: clamp(1.75rem, 5vw, 3.5rem);
  font-weight: 900;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.about-subtitle {
  font-size: clamp(0.95rem, 2vw, 1.25rem);
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto;
}

.wave-divider {
  position: relative;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.wave-divider svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 60px;
}

.wave-path {
  fill: rgb(var(--v-theme-surface));
}

.values-section {
  background: rgb(var(--v-theme-surface));
}

.value-card {
  border: 2px solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 20px;
  transition: all 0.4s ease;
  cursor: pointer;
}

.value-card:hover {
  transform: translateY(-10px);
  border-color: #FE40B4;
  box-shadow: 0 10px 30px rgba(254, 64, 180, 0.15);
}

.theme--dark .value-card:hover {
  box-shadow: 0 10px 30px rgba(254, 64, 180, 0.25);
}

.value-icon-wrapper {
  display: inline-block;
}

.value-icon {
  transition: transform 0.3s ease;
}

.value-card:hover .value-icon {
  transform: rotate(360deg);
}

.value-title {
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 800;
  margin-bottom: 12px;
}

.value-text {
  line-height: 1.6;
  font-size: clamp(0.875rem, 2vw, 1rem);
}

.stats-section {
  background: linear-gradient(135deg, rgba(254, 64, 180, 0.08) 0%, rgba(254, 64, 180, 0.04) 50%, transparent 100%);
  position: relative;
  overflow: hidden;
}

.theme--dark .stats-section {
  background: linear-gradient(135deg, rgba(254, 64, 180, 0.15) 0%, rgba(254, 64, 180, 0.08) 50%, transparent 100%);
}

.section-subtitle-dark {
  font-size: clamp(0.95rem, 2vw, 1.1rem);
}

.stat-card {
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-icon-bg {
  width: clamp(60px, 15vw, 80px);
  height: clamp(60px, 15vw, 80px);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
  transition: transform 0.3s ease;
}

.stat-card:hover .stat-icon-bg {
  transform: scale(1.1) rotate(5deg);
}

.stat-number-big {
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: 900;
  line-height: 1;
  margin-bottom: 8px;
}

.stat-label-big {
  font-size: clamp(0.875rem, 2vw, 1rem);
  font-weight: 600;
}

.section-title-dark {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 900;
  letter-spacing: -0.02em;
}

.team-card {
  border: 2px solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 16px;
  transition: all 0.4s ease;
  overflow: hidden;
}

.team-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.theme--dark .team-card:hover {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.team-image-wrapper {
  position: relative;
  padding: 20px;
  background: linear-gradient(135deg, rgba(254, 64, 180, 0.1), rgba(254, 64, 180, 0.05));
  display: flex;
  justify-content: center;
}

.theme--dark .team-image-wrapper {
  background: linear-gradient(135deg, rgba(254, 64, 180, 0.2), rgba(254, 64, 180, 0.1));
}

.team-avatar {
  transition: transform 0.3s ease;
}

.team-card:hover .team-avatar {
  transform: scale(1.05);
}

.team-overlay {
  position: absolute;
  inset: 0;
  background: rgba(25, 80, 48, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.team-card:hover .team-overlay {
  opacity: 1;
}

.team-name {
  font-size: clamp(0.95rem, 2.5vw, 1.1rem);
  font-weight: 700;
  margin-bottom: 4px;
}

.team-role {
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  color: #FE40B4;
  font-weight: 600;
}

.cta-section {
  background: linear-gradient(135deg, rgba(254, 64, 180, 0.08) 0%, rgba(254, 64, 180, 0.04) 100%);
}

.theme--dark .cta-section {
  background: linear-gradient(135deg, rgba(254, 64, 180, 0.15) 0%, rgba(254, 64, 180, 0.08) 100%);
}

.cta-card {
  border-radius: 24px;
  border: 3px solid #FE40B4;
}

.cta-title {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 900;
}

.cta-text {
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* === WHATSAPP FAB === */
.whatsapp-fab {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  transition: all 0.3s ease;
}

@media (min-width: 960px) {
  .whatsapp-fab {
    bottom: 32px;
    right: 32px;
  }
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
@media (max-width: 959px) {
  .hero-section {
    min-height: auto;
    padding-top: 64px;
  }
  
  .title-decoration {
    margin-left: auto;
    margin-right: auto;
  }
  
  .floating-card {
    display: none;
  }
}

@media (max-width: 600px) {
  .hero-section {
    padding-top: 40px;
  }
  
  .features-pills {
    gap: 6px;
  }
  
  .stat-number {
    font-size: 1.5rem;
  }
  
  .service-card {
    margin-bottom: 16px;
  }
  
  .benefit-card {
    padding: 12px;
  }
  
  .benefit-title {
    font-size: 0.85rem;
  }
  
  .benefit-text {
    font-size: 0.7rem;
  }
  
  .product-title {
    font-size: 0.9rem;
  }
  
  .product-price {
    font-size: 1.1rem;
  }
  
  .guarantee-card {
    text-align: center;
  }
  
  .team-overlay {
    opacity: 1;
    background: rgba(25, 80, 48, 0.85);
  }
}

/* === UTILITY === */
.gap-2 {
  gap: 8px;
}

.gap-4 {
  gap: 16px;
}
</style>