<template>
    <v-app>
        <AppHeader />

        <!-- ABOUT CONTENT -->
        <v-main>
            <!-- Hero About -->
            <section class="about-hero">
                <v-container class="py-4">
                    <v-row justify="center">
                        <v-col cols="12" md="10" lg="8" class="text-center">
                            <v-chip color="#FE40B4" text-color="white" class="mb-4 chip-pulse" size="small">
                                <img height="20" src="@/assets/isotipo.svg" alt="logo" class="mr-2">

                                NUESTRA HISTORIA
                            </v-chip>
                            <h1 class="about-title mb-6 fade-up">
                                Transformando vidas a través del bienestar natural
                            </h1>
                            <p class="about-subtitle fade-up delay-1">
                                Desde 2015, Merly se ha dedicado a ofrecer productos naturales de la más alta
                                calidad,
                                ayudando a miles de personas a alcanzar sus objetivos de salud y bienestar.
                            </p>
                        </v-col>
                    </v-row>
                </v-container>
                <div class="wave-divider">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            fill="#ffffff"></path>
                    </svg>
                </div>
            </section>

            <!-- Misión, Visión, Valores -->
            <section class="values-section py-16">
                <v-container>
                    <v-row>
                        <v-col cols="12" md="4" v-for="(item, i) in values" :key="i" class="fade-up"
                            :style="`animation-delay: ${i * 0.2}s`">
                            <v-card class="value-card" elevation="0" height="100%">
                                <v-card-text class="pa-8 text-center">
                                    <div class="value-icon-wrapper mb-4">
                                        <v-avatar :color="item.color" size="80" class="value-icon">
                                            <v-icon color="white" size="40">{{ item.icon }}</v-icon>
                                        </v-avatar>
                                    </div>
                                    <h3 class="value-title mb-3">{{ item.title }}</h3>
                                    <p class="value-text">{{ item.text }}</p>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </section>

            <!-- Nuestros Números -->
            <section class="stats-section py-16">
                <v-container>
                    <div class="text-center mb-12">
                        <h2 class="section-title mb-4 fade-up">Nuestro Impacto</h2>
                        <p class="section-subtitle fade-up delay-1">Resultados que hablan por sí mismos</p>
                    </div>
                    <v-row>
                        <v-col cols="6" md="3" v-for="(stat, i) in stats" :key="i" class="text-center fade-up"
                            :style="`animation-delay: ${i * 0.15}s`">
                            <div class="stat-card">
                                <div class="stat-icon-bg" :style="`background: ${stat.color}15`">
                                    <v-icon :color="stat.color" size="32">{{ stat.icon }}</v-icon>
                                </div>
                                <div class="stat-number-big">{{ stat.number }}</div>
                                <div class="stat-label-big">{{ stat.label }}</div>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </section>

            <!-- Por qué elegirnos -->
            <section class="why-us-section py-16">
                <v-container>
                    <v-row align="center">
                        <v-col cols="12" md="6" class="fade-up">
                            <v-chip color="#195030" text-color="white" class="mb-4" size="small">
                                <v-icon start size="16">mdi-star</v-icon>
                                VENTAJAS
                            </v-chip>
                            <h2 class="section-title mb-6">¿Por qué elegir Merly?</h2>
                            <div v-for="(feature, i) in features" :key="i" class="feature-item mb-6">
                                <div class="d-flex align-start">
                                    <v-avatar :color="feature.color" size="48" class="mr-4 flex-shrink-0">
                                        <v-icon color="white" size="24">{{ feature.icon }}</v-icon>
                                    </v-avatar>
                                    <div>
                                        <h4 class="feature-title mb-2">{{ feature.title }}</h4>
                                        <p class="feature-text">{{ feature.text }}</p>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" md="6" class="fade-up delay-2">
                            <div class="why-us-image-container">
                                <v-img src="@/assets/mujerCorriendo.png" class="rounded-xl why-us-image" cover
                                    height="500"></v-img>
                                <div class="image-overlay"></div>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </section>

            <!-- Equipo -->
            <section class="team-section py-16">
                <v-container>
                    <div class="text-center mb-12">
                        <h2 class="section-title mb-4 fade-up">Nuestro Equipo</h2>
                        <p class="section-subtitle fade-up delay-1">Expertos comprometidos con tu bienestar</p>
                    </div>
                    <v-row>
                        <v-col cols="12" sm="6" md="3" v-for="(member, i) in team" :key="i" class="fade-up"
                            :style="`animation-delay: ${i * 0.15}s`">
                            <v-card class="team-card" elevation="0">
                                <div class="team-image-wrapper">
                                    <v-avatar size="200" class="team-avatar">
                                        <v-icon size="100" color="#195030">mdi-account-circle</v-icon>
                                    </v-avatar>
                                    <div class="team-overlay">
                                        <v-btn icon size="small" color="white" class="ma-1">
                                            <v-icon color="#195030">mdi-linkedin</v-icon>
                                        </v-btn>
                                        <v-btn icon size="small" color="white" class="ma-1">
                                            <v-icon color="#FE40B4">mdi-instagram</v-icon>
                                        </v-btn>
                                    </div>
                                </div>
                                <v-card-text class="text-center pa-4">
                                    <h4 class="team-name">{{ member.name }}</h4>
                                    <p class="team-role">{{ member.role }}</p>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </section>

            <!-- CTA Final -->
            <section class="cta-section py-16">
                <v-container>
                    <v-card class="cta-card" elevation="0">
                        <v-card-text class="pa-12 text-center">
                            <v-icon color="#FE40B4" size="60" class="mb-4">mdi-handshake</v-icon>
                            <h2 class="cta-title mb-4">¿Listo para comenzar tu transformación?</h2>
                            <p class="cta-text mb-8">
                                Únete a nuestra comunidad y descubre cómo nuestros productos pueden cambiar tu vida
                            </p>
                            <v-btn color="#FE40B4" size="x-large" class="text-white font-weight-bold px-12 cta-button"
                                rounded="pill" elevation="0">
                                Explorar Productos
                                <v-icon end>mdi-arrow-right</v-icon>
                            </v-btn>
                        </v-card-text>
                    </v-card>
                </v-container>
            </section>
        </v-main>

        <!-- WhatsApp FAB -->
        <v-btn icon size="x-large" color="#25D366" class="whatsapp-fab" elevation="8">
            <v-icon size="32">mdi-whatsapp</v-icon>
            <div class="whatsapp-pulse"></div>
        </v-btn>
    </v-app>
    <AppFooter />
</template>

<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import { ref } from 'vue'

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
])

const stats = ref([
    { number: '8+', label: 'Años de experiencia', icon: 'mdi-calendar-star', color: '#195030' },
    { number: '150+', label: 'Productos', icon: 'mdi-package-variant', color: '#FE40B4' },
    { number: '5,000+', label: 'Clientes felices', icon: 'mdi-account-heart', color: '#195030' },
    { number: '98%', label: 'Satisfacción', icon: 'mdi-thumb-up', color: '#FE40B4' }
])

const features = ref([
    {
        icon: 'mdi-certificate',
        color: '#195030',
        title: 'Certificación de Calidad',
        text: 'Todos nuestros productos cuentan con certificaciones internacionales que garantizan su pureza y efectividad.'
    },
    {
        icon: 'mdi-leaf',
        color: '#FE40B4',
        title: '100% Natural',
        text: 'Utilizamos solo ingredientes naturales sin químicos artificiales, preservando la integridad de cada producto.'
    },
    {
        icon: 'mdi-test-tube',
        color: '#195030',
        title: 'Científicamente Probado',
        text: 'Cada producto está respaldado por investigación científica y pruebas clínicas rigurosas.'
    },
    {
        icon: 'mdi-shield-check',
        color: '#FE40B4',
        title: 'Garantía Total',
        text: 'Ofrecemos garantía de satisfacción del 100% porque confiamos plenamente en la calidad de nuestros productos.'
    }
])

const team = ref([
    { name: 'Dr. María González', role: 'Directora General' },
    { name: 'Lic. Carlos Méndez', role: 'Director de Ventas' },
    { name: 'Dra. Ana Martínez', role: 'Nutrióloga' },
    { name: 'Ing. Roberto Silva', role: 'Director de Operaciones' }
])

</script>

<style scoped>
/* === HEADER (mismo del home) === */
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

/* === ABOUT HERO === */
.about-hero {
    background: linear-gradient(135deg, #ffe5f3 0%, #fff8fc 50%, #ffffff 100%);
    padding-top: 50px;
    position: relative;
}

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

.about-title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 900;
    color: #195030;
    line-height: 1.2;
    letter-spacing: -0.02em;
}

.about-subtitle {
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: #195030;
    opacity: 0.8;
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

/* === VALUES SECTION === */
.values-section {
    background: white;
}

.value-card {
    background: white;
    border: 2px solid #f5f5f5;
    border-radius: 20px;
    transition: all 0.4s ease;
    cursor: pointer;
}

.value-card:hover {
    transform: translateY(-10px);
    border-color: #FE40B4;
    box-shadow: 0 10px 30px rgba(254, 64, 180, 0.15);
}

.value-icon-wrapper {
    display: inline-block;
    animation: float 3s ease-in-out infinite;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

.value-icon {
    transition: transform 0.3s ease;
}

.value-card:hover .value-icon {
    transform: rotate(360deg);
}

.value-title {
    font-size: 1.5rem;
    font-weight: 800;
    color: #195030;
    margin-bottom: 12px;
}

.value-text {
    color: #666;
    line-height: 1.7;
    font-size: 1rem;
}

/* === STATS SECTION === */
.stats-section {
    background: linear-gradient(135deg, #9c5f85 0%, #e6e2e4 100%);
    position: relative;
    overflow: hidden;
}

.stats-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="2" fill="rgba(255,255,255,0.1)"/></svg>');
    opacity: 0.3;
}

.section-title {
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    font-weight: 900;
    color: white;
    letter-spacing: -0.02em;
}

.section-subtitle {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.8);
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
    width: 80px;
    height: 80px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 16px;
    transition: transform 0.3s ease;
}

.stat-card:hover .stat-icon-bg {
    transform: scale(1.1) rotate(5deg);
}

.stat-number-big {
    font-size: 3rem;
    font-weight: 900;
    color: white;
    line-height: 1;
    margin-bottom: 8px;
}

.stat-label-big {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 600;
}

/* === WHY US SECTION === */
.why-us-section {
    background: white;
}

.section-title {
    color: #195030;
}

.feature-item {
    transition: transform 0.3s ease;
}

.feature-item:hover {
    transform: translateX(10px);
}

.feature-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #195030;
}

.feature-text {
    color: #666;
    line-height: 1.6;
}

.why-us-image-container {
    position: relative;
    border-radius: 24px;
    overflow: hidden;
}

.why-us-image {
    transition: transform 0.5s ease;
}

.why-us-image-container:hover .why-us-image {
    transform: scale(1.05);
}

.image-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(254, 64, 180, 0.2), rgba(25, 80, 48, 0.2));
    opacity: 0;
    transition: opacity 0.5s ease;
}

.why-us-image-container:hover .image-overlay {
    opacity: 1;
}

/* === TEAM SECTION === */
.team-section {
    background: #f9f9f9;
}

.team-card {
    background: white;
    border-radius: 20px;
    transition: all 0.4s ease;
    overflow: hidden;
}

.team-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.team-image-wrapper {
    position: relative;
    padding: 24px;
    background: linear-gradient(135deg, #ffe5f3, #fff8fc);
    display: flex;
    justify-content: center;
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
    font-size: 1.1rem;
    font-weight: 700;
    color: #195030;
    margin-bottom: 4px;
}

.team-role {
    font-size: 0.9rem;
    color: #FE40B4;
    font-weight: 600;
}

/* === CTA SECTION === */
.cta-section {
    background: linear-gradient(135deg, #ffe5f3 0%, #fff8fc 100%);
}

.cta-card {
    background: white;
    border-radius: 32px;
    border: 3px solid #FE40B4;
}

.cta-title {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    font-weight: 900;
    color: #195030;
}

.cta-text {
    font-size: 1.1rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
}

.cta-button {
    background: linear-gradient(135deg, #FE40B4, #ff1493) !important;
    box-shadow: 0 8px 24px rgba(254, 64, 180, 0.3);
    transition: all 0.3s ease;
}

.cta-button:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(254, 64, 180, 0.4);
}

/* === WHATSAPP === */
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

@keyframes fadeUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* === RESPONSIVE === */
@media (max-width: 960px) {
    .about-title {
        font-size: 2rem;
    }

    .stat-number-big {
        font-size: 2rem;
    }

    .team-overlay {
        opacity: 1;
    }
}
</style>