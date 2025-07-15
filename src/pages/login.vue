<script>
export default {
  name: "login"
}
</script>

<template>
  <v-container>
    <v-card
      elevation="0"
      rounded="xl"
      class="mx-auto pa-6"
      max-width="500"
    >

      <v-card-title class="text-center">

        <v-row>
          <v-col cols="12"
                 class="d-flex justify-center"
          >
            <div class="d-flex justify-content-center">
              <img
                height="50"
                src="@/assets/isotipo.svg"
                alt="logo"
                class="mr-2"
              >
              <p class="font-weight-bold text-h4 text-lg-h3">
                Merly
              </p>
            </div>
          </v-col>

          <v-col cols="12">
            Iniciar Sesión
          </v-col>

        </v-row>
      </v-card-title>

      <v-card-text>
        <v-form>
          <v-text-field
            label="Correo electrónico"
            prepend-inner-icon="mdi-email"
            variant="outlined"
            rounded="xl"
            placeholder="COLOQUE SU CORREO ELECTRÓNICO"
          />
          <v-text-field
            label="Contraseña"
            type="password"
            prepend-inner-icon="mdi-lock"
            variant="outlined"
            rounded="xl"
            max="999999"
          />
          <v-btn
            color="primary"
            block
            flat
            rounded="xl"
            text="INICIAR SESIÓN"
          />
        </v-form>
      </v-card-text>

      <v-divider class="my-4" />

      <v-card-actions class="d-flex justify-center">
        <p class="text-center">
          ¿No tienes cuenta?
          <v-btn
            @click="$router.push('/register')"
            text="Regístrate aquí"
            color="primary"
            rounded="xl"
          />
        </p>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

