<template>
  <v-app>
    <v-layout>
      <v-app-bar
        elevation="0"
        app
      >
        <v-app-bar-nav-icon
          variant="flat"
          @click.stop="drawer = !drawer"
        />
        <v-toolbar-title>
          <div class="d-flex align-center">
            <img
              height="40"
              width="40"
              src="@/assets/logo.png"
              alt="logo"
              class="mr-2"
            >
            <h1 class="font-weight-bold">
              Merly
            </h1>
          </div>
        </v-toolbar-title>
        <v-spacer />
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        color="black"
        class="rounded-e-shaped "
        :location="$vuetify.display.mobile ? 'start' : undefined"
        elevation="0"
        temporary

        border="0"
      >
        <v-list
          :items="items"
          rounded="xl"
        />
      </v-navigation-drawer>
      <v-main class="bg-primary-lighten-1">
        <router-view />
      </v-main>
      <AppFooter />
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
        title: 'Pedidos',
        value: 'foo',
        props: {
          class: '',
          prependIcon: 'mdi-basket',
          active: true,
          to: '/orders'
        }
      },
    ],
  }),
}
</script>
