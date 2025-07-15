<template>
  <v-container class="fill-height">
    <v-responsive
      class="mx-auto v-col-12 v-col-xl-3"
    >
      <v-card
        variant="flat"
        rounded="xl"
        elevation="0"
        flat
        class="pa-10"
      >
        <div class="text-center">
          <div class="text-h5">
            Bienvenido a:
          </div>
        </div>
        <div class="d-flex justify-center align-center">
          <img
            height="100"
            width="100"
            src="@/assets/isotipo.svg"
            alt="logo"
            class="mr-2"
          >
          <h1 class="text-h2 text-xl-h1 font-weight-bold">
            Merly
          </h1>
        </div>

        <div class="py-3" />


        <v-row justify="center">
          <v-col cols="12">
            <v-text-field
              label="ID o Usuario"
              variant="outlined"
              rounded="xl"
              class="ma-0"
            />
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12">
            <v-text-field
              label="Contraseña"
              variant="outlined"
              rounded="xl"
            />
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12">
            <v-btn
              color="black"
              text="INGRESAR"
              block
              rounded="xl"
              elevation="0"
            />
          </v-col>
        </v-row>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script>
//
</script>
