<script>
export default {
  name: "profile",
  methods: {
    toggleTheme() {
      this.$vuetify.theme.global.name = this.$vuetify.theme.global.name === 'light' ? 'dark' : 'light'

    }
  }
}
</script>

<template>
  <v-card
    prepend-icon="mdi-account"
    elevation="0"
    rounded="xl"
    class="pa-3 ma-3"
    title="PERFIL"
  >
    <v-card-item>
      <v-row>
        <v-col cols="12">
          <v-icon>
            {{ $vuetify.theme.global.name === 'light' ? 'mdi-weather-night' : 'mdi-white-balance-sunny' }}
          </v-icon>
        </v-col>
      </v-row>
    </v-card-item>
  </v-card>
</template>
