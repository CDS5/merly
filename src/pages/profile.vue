<script>
export default {
  name: "profile",
  data() {
    return {
      themeOptions: [
        {value: 'light', title: 'Light'},
        {value: 'dark', title: 'Dark'},
        {value: 'system', title: 'System'},
      ],
      selectedTheme: 'light', // Default to system
    };
  },
  watch: {
    selectedTheme(newTheme) {
      this.applyTheme(newTheme);
    },
  },
  mounted() {
    // Apply the default theme on load
    this.selectedTheme = this.$vuetify.theme.global.current.dark ? 'dark' : 'light'
    this.applyTheme(this.selectedTheme);
  },
  methods: {
    applyTheme(theme) {
      if (theme === 'system') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.$vuetify.theme.global.name = prefersDark ? 'dark' : 'light';
      } else {
        this.$vuetify.theme.global.name = theme;
      }
    },
  },
};
</script>

<template>
  <v-card
    prepend-icon="mdi-account"
    elevation="0"
    rounded="xl"
    class="pa-3 "
    title="PERFIL"
  >
    <v-card-item>

      <v-card
        title="ASPECTO"
        subtitle="SELECCIONA UN TEMA"
        elevation="0"
        rounded="xl"
        prepend-icon="mdi-format-color-fill"
      >
        <v-card-item>
          <v-row>

            <v-col>
              <v-radio-group
                v-model="selectedTheme"
                inline
                type="radio"
                hide-details
                class="d-flex justify-space-between justify-lg-center"
              >
                <v-radio value="light">
                  <template #label>
                    <div class="text-center">
                      <img
                        height="150"
                        src="@/assets/isotipo_light.svg"
                        alt="logo"
                        class="mr-2 rounded-xl"
                      >
                      <p class="font-weight-bold">Claro</p>
                    </div>
                  </template>
                </v-radio>
                <v-radio value="dark">
                  <template #label>
                    <div class="text-center">
                      <img
                        height="150"
                        src="@/assets/isotipo_dark.svg"
                        alt="logo"
                        class="mr-2 rounded-xl"
                      >
                      <p class="font-weight-bold">Oscuro</p>
                    </div>
                  </template>
                </v-radio>
                <v-radio value="system">
                  <template #label>
                    <div class="text-center">
                      <img
                        height="150"
                        src="@/assets/isotipo_system.svg"
                        alt="logo"
                        class="mr-2 rounded-xl"
                      >
                      <p class="font-weight-bold">Sistema</p>
                    </div>
                  </template>
                </v-radio>
              </v-radio-group>
            </v-col>

          </v-row>


        </v-card-item>

      </v-card>
    </v-card-item>
  </v-card>
</template>
