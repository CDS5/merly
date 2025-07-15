<template>

  <v-app>
    <v-layout>

      <v-app-bar
        elevation="0"
        app
        rounded="b-xl"
      >
        <v-app-bar-nav-icon
          variant="flat"
          @click.stop="drawer = !drawer"
        />

        <v-toolbar-title>
          <div class="d-flex align-center">
            <img
              height="40"
              src="@/assets/isotipo.svg"
              alt="logo"
              class="mr-2"
            >
            <p class="font-weight-bold text-h5 text-lg-h4">
              Merly
            </p>

            <v-chip size="x-small" color="primary">
              Beta
            </v-chip>
          </div>

        </v-toolbar-title>


        <v-btn
          class="color-changing-border"
          rounded
          @click="dialogFeatures = true"
        >
          ✨ Novedades ✨
        </v-btn>

        <v-btn
          class="bg-pink-darken-1"
          rounded
          tag="a"
          href="https://www.instagram.com/merlydtox/"
          target="_blank"
        >
          ✨IG: Merly DTOX ✨
        </v-btn>

      </v-app-bar>


      <v-navigation-drawer
        v-model="drawer"
        color="primary"
        class="rounded-e-xl"
        elevation="0"
        temporary
        border="0"
      >
        <v-list
          :items="items"
          rounded="e-xl"
        />


        <v-divider class="my-2" />

        <!-- Botón de Cerrar sesión -->

        <v-list>
          <v-list-item
            @click="$router.push('/login')"
            prepend-icon="mdi-logout"
            title="Cerrar sesión"

          />
        </v-list>

      </v-navigation-drawer>


      <v-main class="bg-primary-lighten-1">
        <v-container fluid>
          <router-view/>
        </v-container>
      </v-main>


      <AppFooter/>
    </v-layout>
  </v-app>

  <v-dialog
    v-model="dialogFeatures"
    max-width="800px"
  >
    <v-card
      elevation="0"
      rounded="xl"
      prepend-icon="mdi-hand-wave-outline"
      title="¡GRACIAS!"
    >
      <template #append>
        <v-btn
          rounded="xl"
          flat
          icon="mdi-window-close"
          @click="dialogFeatures = false"
        />
      </template>
      <v-card-text>
        <h3>
          Gracias por usar Merly e interesarte en este proyecto. 🙏
          Estamos trabajando en nuevas funcionalidades para ti, para poder potencializar tu productividad y ayudarte a
          crecer. 🚀

          <br> <br>

          Por favor, ten en cuenta que esta es una versión beta, por lo que es posible que encuentres errores. ⚠️

          <br> <br>

          Sin embargo, nos gustaría que te mantuvieras al tanto de nuestras actualizaciones y lograrás registrar tu
          correo en el siguiente enlace. 📧 Así serás de las primeras personas en usar la plataforma. 💥
        </h3>
      </v-card-text>

      <v-card-actions>
        <v-btn
          size="large"
          color="primary"
          rounded="xl"
          variant="outlined"
          tag="a"
          href="https://forms.gle/3rU9PAZZaEPd8aAV8"
          target="_blank"
        >
          ¡Ir al Registro!
        </v-btn>
      </v-card-actions>


    </v-card>
  </v-dialog>


</template>

<script>
import AppFooter from "@/components/AppFooter.vue";
import {router} from "@/router/routes.js";

export default {
  components: {AppFooter},
  data: () => ({
    dialogFeatures: false,
    drawer: false,
    group: null,
    items: router,
  }),
}
</script>

<style scoped>
/* Animación para el cambio de borde */
@keyframes borderChange {
  0% {
    border-color: #f4d753; /* Cian */
  }
  25% {
    border-color: #8f9f2e; /* Azul violeta */
  }
  50% {
    border-color: #d9df0c; /* Verde neon */
  }
  75% {
    border-color: #ecc52a; /* Azul eléctrico */
  }
  100% {
    border-color: #da9359; /* Rosa neón */
  }
}

.color-changing-border {
  border: 3px solid; /* Define el grosor del borde */
  animation: borderChange 2s infinite; /* Cambia el color del borde cada 5 segundos */
}
</style>
