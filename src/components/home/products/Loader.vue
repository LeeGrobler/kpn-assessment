<template>
  <v-row>
    <v-col v-for="n in 3" :key="n" cols="4">
      <Skeleton></Skeleton>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
  import Skeleton from '@/components/interface/Skeleton.vue'
</script>
