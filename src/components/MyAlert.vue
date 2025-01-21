<template>
  <v-dialog
    v-model="myAlert.isActive"
    max-width="500"
  >
    <v-card
      elevation="0"
      rounded="xl"
      class="pa-2"
    >
      <v-card-title class="d-flex justify-center align-center">
        <v-btn
          color="error"
          size="large"
          :icon="myAlert.icon"
          flat
          readonly
        />
      </v-card-title>
      <v-card-text class="text-center">
        <h2>{{ myAlert.title }}</h2>
        <br/>
        <p>{{ myAlert.message }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn
          text="No"
          color="error"
          size="large"
          variant="outlined"
          rounded
          @click="cancel"
        />
        <v-spacer />

        <v-btn
          text="Sí"
          color="success"
          size="large"
          variant="outlined"
          rounded
          @click="confirm"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script>
export default {
  name: "MyAlert",
  props: {
    myAlert: {
      type: Object,
      required: true,
    },
  },
  emits: ['update:isActive', 'confirm'],
  data() {
    return {
      /*
      myAlert: {
        isActive: false,
        title: '',
        message: '',
        type: '',
        icon: '',
       */
    };
  },
  methods: {
    cancel() {
      this.$emit('update:isActive', false);
    },
    confirm() {
      this.$emit('confirm');
      this.$emit('update:isActive', false);
    }
  }
}
</script>
