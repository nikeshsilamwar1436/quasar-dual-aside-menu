<template>
  <q-layout view="lHh lpR lFf">
    <DrawerMenu />
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script lang="ts" setup>
import DrawerMenu from '../components/DrawerMenu.vue';
</script>
