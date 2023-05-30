<template>
  <v-alert
    v-if="interfaceStore.alertCfg.visible"
    :type="interfaceStore.alertCfg.type"
    :title="interfaceStore.alertCfg.title"
    :text="interfaceStore.alertCfg.message"
    class="comp-root"
  ></v-alert>
</template>

<script setup lang="ts">
  import { useInterfaceStore } from '../../store/interface'

  const interfaceStore = useInterfaceStore()
</script>

<style scoped lang="scss">
  .comp-root {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    width: 35%;
    z-index: 5;
  }
</style>
