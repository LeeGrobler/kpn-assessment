<template>
  <v-container class="fill-height"> products: {{ appStore.products }} </v-container>
</template>

<script lang="ts" setup>
  import { useAppStore } from '../store/app'

  const appStore = useAppStore()
</script>
