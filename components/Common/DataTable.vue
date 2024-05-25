<template>
  <div class="data-table">
    <v-table density="comfortable">
      <thead class="text-color">
        <tr>
          <th v-for="header in headers" :key="header.title">
            {{ header.title }}
          </th>
        </tr>
      </thead>
      <tbody class="text-color">
        <tr v-for="item in tableData" :key="item.skill">
          <td>{{ item.skill }}</td>
          <td class="text-center">{{ item.employees }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup>
import generateHeader from "~/utils/generateHeader";

const props = defineProps({
  tableData: {
    type: Array,
    required: true,
  },
});

const headers = generateHeader({
  guideData: props.tableData[0],
  order: ["skills", "employees"],
  specialKeys: ["employees"],
});
</script>

<style lang="scss" scoped>
.data-table {
  padding: 16px;
  background-color: $white;
  border: 1px solid $muted-color;
  border-radius: 10px;

  th:last-child {
    @include devices(md) {
      text-align: center !important;
    }
  }
}
</style>
