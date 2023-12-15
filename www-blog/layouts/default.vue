<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import AppBar from '../components/layout/AppBar.vue';
import NavigationDrawer from '../components/layout/NavigationDrawer.vue';
</script>

<template>
  <v-layout>
    <AppBar />

    <NavigationDrawer />

    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px"
    >
      <slot />
    </v-main>
  </v-layout>
</template>
