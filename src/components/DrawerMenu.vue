<script setup lang="ts">
import { ref } from 'vue';
import menu from 'src/test/menu';

const drawerOpen = ref(true);
const hovered = ref(false);
const hideSub = ref(false);
const miniState = ref(true)
const newMenu = ref()

function changeMenu(subLinks: unknown) {
  newMenu.value = subLinks
}
</script>

<template>
  <q-drawer show-if-above :mini="miniState" :model-value="drawerOpen" @mouseover="hovered = true"
    @mouseout="hovered = false" mini-to-overlay :width="300" :mini-width="60" :breakpoint="600"
    class="navigation navigation-primary bg-primary text-white">
    <template v-for="(item, index) in menu" v-bind:key="index">
      <q-item clickable @click="changeMenu(item.subLink)">
        <q-item-section avatar>
          <q-icon :name="item.iconName" />
        </q-item-section>
        <q-item-section> {{ item.name }}</q-item-section>
      </q-item>
    </template>
  </q-drawer>

  <div class="navigation-secondary_wrap">
    <aside class="navigation-secondary">
      <q-scroll-area style="height: calc(100% - 60px); margin-top: 60px">
        <h1><q-btn @click="hideSub = true" flat dense color="white" icon="arrow_back"
            class="navigation-secondary_back q-mr-xs" /></h1>
        <q-list separator>
          <q-item v-for="(item, index) in newMenu" v-bind:key="index" :to="item.path" clickable>
            <q-item-section>{{ item.name }}</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </aside>
  </div>

  <q-btn flat dense icon="chevron_left" class="toggle-drawer_desktop" />
</template>
