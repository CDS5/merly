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
              src="@/assets/logo.svg"
              alt="logo"
              class="mr-2"
            >
            <p class="font-weight-bold text-h5 text-lg-h4">
              Merly
            </p>
          </div>

        </v-toolbar-title>


        <v-spacer/>

        <router-link to="/profile">
          <v-btn
            icon="mdi-account-circle"
            variant="flat"
          />
        </router-link>
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
      </v-navigation-drawer>


      <v-main class="bg-primary-lighten-1">
        <router-view/>
      </v-main>


      <AppFooter/>
    </v-layout>
  </v-app>
</template>

<script>
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {AppFooter},
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: 'Pedido',
        value: '',
        props: {
          class: '',
          prependIcon: 'mdi-basket',
          active: false,
          to: '/orders'
        }
      },
      {
        title: 'Consolidados',
        value: '',
        props: {
          class: '',
          prependIcon: 'mdi-text-box-multiple',
          active: false,
          to: '/consolids'
        }
      },

    ],
  }),
}
</script>
