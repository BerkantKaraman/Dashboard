<template>
  <div class="teams pa-4">
    <div class="page-header">Teams</div>
    <div class="d-flex justify-end py-4">
      <InputTeamForm :team-payload="teamPayload" />
    </div>
    <v-data-table
      :items="data.teams"
      :headers="[...formattedHeaders, { value: 'actions', align: 'center' }]"
      hide-default-footer
      class="text-color"
    >
      <template v-slot:item.actions="{ item }">
        <v-btn elevation="0" text="Detail" @click="getDetails(item)" />
      </template>
    </v-data-table>
    <v-dialog fullscreen hide-overlay v-model="isOpen">
      <v-card class="pa-4">
        <v-card-title class="d-flex justify-space-between align-center">
          <div />
          <v-btn elevation="0" icon="mdi-close" @click="isOpen = false" />
        </v-card-title>
        <v-card-title class="text-color"> {{ title }}: </v-card-title>
        <v-card-text class="text-color">{{ description }}</v-card-text>
        <div class="d-flex align-center justify-space-between">
          <v-card-title> Employees </v-card-title>
          <InputEmployeeForm :employee-payload="employeePayload" />
        </div>
        <v-card-text>
          <v-data-table
            :items="employees"
            :headers="employeeHeaders"
            hide-default-footer
            class="text-color"
          >
            <template v-slot:item.skills_being_developed="{ item }">
              <v-chip
                v-for="skill in item.skills_being_developed"
                bg-color="textBackground"
                color="primary"
                class="ml-2"
              >
                {{ skill }}
              </v-chip>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { useAppStore } from "~/store/app";
import startCase from "lodash/startCase";
import upperFirst from "lodash/upperFirst";

const appStore = useAppStore();

const data = appStore.payload;

const isOpen = ref(false);
const employees = ref([]);
const description = ref("");
const title = ref("");

const employeePayload = ref({
  first_name: "",
  last_name: "",
  email: "",
  title: "",
});

const teamPayload = ref({
  description: "",
  team_title: "",
});

const formattedHeaders = computed(() => {
  if (!data || data.teams.length === 0) return [];

  return Object.keys(data.teams[0])
    .map((key) => {
      const header = {
        value: key,
        title: startCase(key),
      };
      if (key === "overall_score" || key === "total_employee_count") {
        header.nowrap = true;
        header.align = "center";
      }
      return header;
    })
    .filter((x) => {
      return !["employees", "description"].includes(x.value);
    })
    .sort((a, b) => {
      const order = ["title", "total_employee_count", "overall_score"];
      return order.indexOf(a.value) - order.indexOf(b.value);
    });
});

const employeeHeaders = computed(() => {
  if (!data || data.teams.length === 0) return [];

  return Object.keys(data.teams[0].employees[0])
    .map((key) => {
      const header = {
        value: key,
        title: startCase(key),
      };
      if (key === "current_score" || key === "lessons_taken") {
        header.nowrap = true;
        header.align = "center";
      }
      return header;
    })
    .sort((a, b) => {
      const order = [
        "name",
        "email",
        "title",
        "lessons_taken",
        "skills_being_developed",
        "current_score",
      ];
      return order.indexOf(a.value) - order.indexOf(b.value);
    });
});

const getDetails = (item) => {
  employees.value = item.employees;
  description.value = upperFirst(item.description);
  title.value = item.title;
  isOpen.value = true;
};
</script>
