<template>
  <v-footer
    height="40"
    app
  >
    <a
      v-for="item in items"
      :key="item.title"
      :href="item.href"
      :title="item.title"
      class="d-inline-block mx-2 social-link"
      rel="noopener noreferrer"
      target="_blank"
    >
      <v-icon
        :icon="item.icon"
        :size="item.icon === '$vuetify' ? 24 : 16"
      />
    </a>

    <div
      class="text-caption text-disabled"
      style="position: absolute; right: 16px;"
    >
      &copy; {{ (new Date()).getFullYear() }}
      🌀 Merly by hectorsaldes
    </div>
  </v-footer>
</template>

<script setup>
  const items = [
    {
      title: 'Instagram',
      icon: `mdi-instagram`,
      href: 'https://www.instagram.com/hectorsaldess/',
    },
  ]
</script>
