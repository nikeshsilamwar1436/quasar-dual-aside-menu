<template>
  <q-page class="row items-center justify-evenly">
    <TableView :tableRows="row" :tableColumns="col" title="Test Page 2"/>
  </q-page>
</template>

<script setup lang="ts">
import TableView from 'components/TableView.vue';
import { rowData, columnsData } from 'src/test/tableData';
import {ref} from 'vue';
const row = ref(rowData)
const col =  ref(columnsData)
</script>

