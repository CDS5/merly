<script>
export default {
  name: "register"
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
                src="@/assets/logo.svg"
                alt="logo"
                class="mr-2"
              >
              <p class="font-weight-bold text-h4 text-lg-h3">
                Merly
              </p>
            </div>
          </v-col>

          <v-col cols="12">
            Registro
          </v-col>

        </v-row>
      </v-card-title>

      <v-card-text>
        <v-form>

          <v-text-field
            label="Nombre(s)"
            prepend-inner-icon="mdi-card-account-details"
            variant="outlined"
            type="text"
            rounded="xl"
            required
            placeholder="COLOQUE SU NOMBRE(S)"
          />

          <v-text-field
            label="Primer apellido"
            prepend-inner-icon="mdi-card-account-details"
            variant="outlined"
            type="text"
            rounded="xl"
            required
            placeholder="COLOQUE SU APELLIDO"
          />

          <v-text-field
            label="Segundo apellido"
            prepend-inner-icon="mdi-card-account-details"
            variant="outlined"
            type="text"
            rounded="xl"
            placeholder="COLOQUE SU APELLIDO"
          />

          <v-text-field
            label="Correo electrónico"
            prepend-inner-icon="mdi-email"
            variant="outlined"
            rounded="xl"
            placeholder="COLOQUE SU CORREO ELECTRÓNICO"
          />

          <v-text-field
            label="ID o Usuario"
            prepend-inner-icon="mdi-key"
            variant="outlined"
            type="number"
            rounded="xl"
            max="999999"
            placeholder="COLOQUE SU ID O USUARIO"
          />
          <v-text-field
            label="Contraseña"
            type="password"
            prepend-inner-icon="mdi-lock"
            variant="outlined"
            rounded="xl"
            max="999999"
          />

          <v-text-field
            label="CÓDIGO POSTAL"
            prepend-inner-icon="mdi-numeric"
            variant="outlined"
            rounded="xl"
            max="999999"
          />


          <v-text-field
            label="MUNICIPIO"
            prepend-inner-icon="mdi-sign-real-estate"
            variant="outlined"
            rounded="xl"
          />


          <v-text-field
            label="ESTADO"
            prepend-inner-icon="mdi-sign-real-estate"
            variant="outlined"
            rounded="xl"
          />




          <v-btn
            color="primary"
            block
            flat
            rounded="xl"
            text="REGISTRAR"
          />
        </v-form>
      </v-card-text>

      <v-divider class="my-4" />

      <v-card-actions class="d-flex justify-center">
        <p class="text-center">
          ¿Ya estás registrado?
          <v-btn
            @click="$router.push('/login')"
            text="Inicia sesión aquí"
            color="primary"
            rounded="xl"
          />
        </p>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

