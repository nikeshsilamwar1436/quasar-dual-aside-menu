<template>
  <div class="q-pa-md">
    <q-table
      :title="title"
      :rows="tableRows"
      :columns="tableColumns"
      row-key="name"
    />
  </div>
</template>
<script lang="ts" setup>
import {PropType} from 'vue';
import {rows, columns} from 'components/models';

defineProps({
  title: String,
  tableRows: [] as PropType<rows>,
  tableColumns: [] as PropType<columns>
})
</script>
