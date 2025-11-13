<template>
  <v-footer 
    class="footer-compact" 
    height="auto" 
    :app="isAppLayout"
  >
    <v-container fluid class="py-3 py-sm-4">
      <v-row align="center" justify="space-between" no-gutters>
        <!-- Left: Logo y copyright -->
        <v-col cols="12" sm="auto" class="text-center text-sm-left mb-3 mb-sm-0">
          <div class="d-flex align-center justify-center justify-sm-start">
            <div class="footer-logo-small">
              <v-icon size="20" color="#FE40B4">mdi-cart-heart</v-icon>
            </div>
            <span class="footer-text text-medium-emphasis">
              &copy; {{ currentYear }} 
              <span class="brand-name">Merly</span>
            </span>
          </div>
        </v-col>

        <!-- Center: Made with love -->
        <v-col cols="12" sm="auto" class="text-center mb-3 mb-sm-0">
          <div class="footer-credits text-medium-emphasis">
            Hecho con 
            <v-icon color="#FE40B4" size="14" class="heart-beat mx-1">mdi-heart</v-icon> 
            por 
            <a 
              href="https://www.instagram.com/hectorsaldess/" 
              target="_blank" 
              class="credits-link"
            >
              hectorsaldes
            </a>
          </div>
        </v-col>

        <!-- Right: Social icons -->
        <v-col cols="12" sm="auto" class="text-center text-sm-right">
          <div class="social-icons-compact">
            <a
              v-for="item in socialItems"
              :key="item.title"
              :href="item.href"
              :title="item.title"
              class="social-link-compact"
              rel="noopener noreferrer"
              target="_blank"
            >
              <v-avatar :color="item.color" size="32" class="social-avatar-compact">
                <v-icon :icon="item.icon" color="white" size="16" />
              </v-avatar>
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentYear = computed(() => new Date().getFullYear())

// El footer solo será "app" (fijo) en las páginas del dashboard
const isAppLayout = computed(() => {
  const noAppRoutes = ['/', '/landing', '/login', '/register', '/about']
  return !noAppRoutes.includes(route.path)
})

const socialItems = [
  {
    title: 'Instagram',
    icon: 'mdi-instagram',
    href: 'https://www.instagram.com/hectorsaldess/',
    color: '#E4405F'
  },
  {
    title: 'Facebook',
    icon: 'mdi-facebook',
    href: 'https://facebook.com',
    color: '#1877F2'
  },
  {
    title: 'WhatsApp',
    icon: 'mdi-whatsapp',
    href: 'https://wa.me/1234567890',
    color: '#25D366'
  }
]
</script>

<style scoped>
.footer-compact {
  background: rgb(var(--v-theme-surface));
  border-top: 2px solid #FE40B4;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

.theme--dark .footer-compact {
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
}

/* === LOGO === */
.footer-logo-small {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(254, 64, 180, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  transition: all 0.3s ease;
  border: 1px solid rgba(254, 64, 180, 0.2);
}

.theme--dark .footer-logo-small {
  background: rgba(254, 64, 180, 0.2);
  border-color: rgba(254, 64, 180, 0.3);
}

.footer-logo-small:hover {
  background: rgba(254, 64, 180, 0.2);
  transform: rotate(360deg) scale(1.1);
}

.theme--dark .footer-logo-small:hover {
  background: rgba(254, 64, 180, 0.3);
}

/* === TEXT === */
.footer-text {
  font-size: 0.85rem;
  font-weight: 500;
}

.brand-name {
  color: #FE40B4;
  font-weight: 700;
  margin-left: 2px;
}

/* === CREDITS === */
.footer-credits {
  font-size: 0.8rem;
  display: inline-flex;
  align-items: center;
  gap: 2px;
  flex-wrap: wrap;
  justify-content: center;
}

.heart-beat {
  animation: heartbeat 1.5s ease-in-out infinite;
}

@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.3);
  }
  50% {
    transform: scale(1);
  }
}

.credits-link {
  color: #FE40B4;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.2s ease;
  padding: 2px 4px;
  border-radius: 4px;
}

.credits-link:hover {
  background: rgba(254, 64, 180, 0.15);
}

.theme--dark .credits-link:hover {
  background: rgba(254, 64, 180, 0.25);
}

/* === SOCIAL === */
.social-icons-compact {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
}

.social-link-compact {
  text-decoration: none;
  display: inline-block;
  transition: transform 0.2s ease;
}

.social-link-compact:hover {
  transform: translateY(-3px);
}

.social-avatar-compact {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
}

.theme--dark .social-avatar-compact {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}

.social-link-compact:hover .social-avatar-compact {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transform: scale(1.15);
}

.theme--dark .social-link-compact:hover .social-avatar-compact {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}

/* === RESPONSIVE === */
@media (max-width: 600px) {
  .footer-text {
    font-size: 0.75rem;
  }
  
  .footer-credits {
    font-size: 0.75rem;
  }
  
  .social-avatar-compact {
    width: 28px !important;
    height: 28px !important;
  }
  
  /* Más padding en móvil para que no se pegue al borde */
  .footer-compact {
    padding-bottom: env(safe-area-inset-bottom, 0) !important;
  }
}

/* === ESPACIADO PARA MÓVIL === */
@media (max-width: 600px) {
  .v-row {
    row-gap: 8px;
  }
}
</style>