<script>
export default {
  name: "Dashboard"
}
</script>

<template>

  <v-row>
    <v-col>
      <v-card
        prepend-icon="mdi-view-dashboard"
        elevation="0"
        rounded="xl"
        class="pa-3"
        title="PANEL PRINCIPAL"
      />
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="12" md="4">
      <v-card
        elevation="0"
        rounded="xl"
        class="pa-3"
        title="ÚLTIMAS 10 COLECCIONES"
        append-icon="mdi-collapse-all"
      />
    </v-col>

    <v-col cols="12" md="4">
      <v-card
        elevation="0"
        rounded="xl"
        class="pa-3"
        title="ÚLTIMOS 10 CONSOLIDADOS"
        append-icon="mdi-text-box-multiple"
      />
    </v-col>


    <v-col cols="12" md="4">
      <v-card
        elevation="0"
        rounded="xl"
        class="pa-3"
        title="ÚLTIMOS 10 PEDIDOS"
        append-icon="mdi-basket"
      />
    </v-col>

  </v-row>


  <v-row>
    <v-col cols="12" md="4">
      <v-card
        elevation="0"
        rounded="xl"
        class="pa-3"
        title="TOTAL DE COLECCIONES"
        append-icon="mdi-collapse-all"
      />
    </v-col>

    <v-col cols="12" md="4">
      <v-card
        elevation="0"
        rounded="xl"
        class="pa-3"
        title="TOTAL DE CONSOLIDADOS"
        append-icon="mdi-text-box-multiple"
      />
    </v-col>


    <v-col cols="12" md="4">
      <v-card
        elevation="0"
        rounded="xl"
        class="pa-3"
        title="TOTAL DE PEDIDOS"
        append-icon="mdi-basket"
      />
    </v-col>

  </v-row>


</template>
