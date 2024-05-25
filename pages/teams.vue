<template>
  <AppContainer>
    <div class="teams">
      <div class="header">
        <div class="page-header pb-4">Teams</div>
        <div class="refresh">
          Last updated at: {{ appStore.lastUpdatedAt }}
          <v-icon
            icon="mdi-refresh"
            color="primary"
            :class="['refresh-icon', { loading }]"
            @click="refresh"
          />
        </div>
      </div>
      <div class="d-flex justify-end py-4">
        <InputTeamForm />
      </div>
      <v-data-table
        :items="data.teams"
        :headers="teamHeaders"
        hide-default-footer
        class="text-color data-table"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn elevation="0" text="Detail" @click="getDetails(item)" />
        </template>
      </v-data-table>
      <v-dialog fullscreen hide-overlay v-model="isOpen">
        <v-card class="pa-4">
          <v-card-title class="d-flex justify-end">
            <v-btn elevation="0" icon="mdi-close" @click="isOpen = false" />
          </v-card-title>
          <v-card-title class="text-color"> {{ title }}: </v-card-title>
          <v-card-text class="text-color">{{ description }}</v-card-text>
          <div class="d-flex align-center justify-space-between">
            <v-card-title> Employees </v-card-title>
            <InputEmployeeForm :team-name="title" />
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
                  v-for="(skill, idx) in item.skills_being_developed"
                  :key="idx"
                  bg-color="textBackground"
                  color="primary"
                  class="ml-2 my-2"
                >
                  {{ skill }}
                </v-chip>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </AppContainer>
</template>

<script setup>
import { useAppStore } from "~/store/app";
import upperFirst from "lodash/upperFirst";
import generateHeader from "~/utils/generateHeader";

useHead({
  title: "Teams",
});

const appStore = useAppStore();

await useAsyncData("teams", async () => await appStore.fetchData());

const data = appStore.payload;

const isOpen = ref(false);
const employees = ref([]);
const description = ref("");
const title = ref("");
const loading = ref(false);

const formattedHeaders = generateHeader({
  guideData: data?.teams[0],
  order: ["title", "total_employee_count", "overall_score"],
  filter: ["employees", "description"],
  specialKeys: ["overall_score", "total_employee_count"],
});

const teamHeaders = computed(() => {
  return [...formattedHeaders, { value: "actions", align: "center" }];
});

const employeeHeaders = generateHeader({
  guideData: data?.teams[0]?.employees[0],
  order: [
    "name",
    "email",
    "title",
    "lessons_taken",
    "skills_being_developed",
    "current_score",
  ],
  specialKeys: ["lessons_taken", "current_score"],
});

const getDetails = (item) => {
  employees.value = item.employees;
  description.value = upperFirst(item.description);
  title.value = item.title;
  isOpen.value = true;
};

const refresh = async () => {
  loading.value = true;
  await appStore.fetchData(true);
  loading.value = false;
};
</script>

<style lang="scss" scoped>
.teams {
  padding: 32px 16px 16px 16px;

  .header {
    @include space-between;

    @include devices(sm) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .refresh {
    @include center-both;
    gap: 20px;
    font-size: 14px;
    color: $text-color;

    &-icon {
      @include center-both;
      background-color: $text-background;
      min-width: 40px;
      height: 40px;
      border-radius: 50px;
      cursor: pointer;
    }

    &-icon.loading {
      animation: rotate 2s linear infinite;
    }
  }

  .data-table {
    border-radius: 4px;
    border: 1px solid $muted-color;
  }
}
</style>
