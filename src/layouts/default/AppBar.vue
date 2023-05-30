<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <v-icon icon="mdi-circle-slice-6" />

      Essentials Preset
    </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>
  //
</script>

<style scoped lang="scss">
  :deep(.v-toolbar__content) {
    justify-content: center;

    .v-toolbar-title {
      max-width: 1200px;
    }
  }
</style>
