<template>
  <div class="dashboard">
    <div class="header">
      <div class="page-header pb-4">Dashboard</div>
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
    <div class="main">
      <div class="left">
        <ChartLine :chart-options="chartOptions" :chartData="chartData" />
        <div class="cards">
          <CommonCard
            v-for="(item, idx) in cardData.slice(0, -1)"
            :key="idx"
            v-bind="item"
          />
        </div>
      </div>
      <div class="right">
        <CommonDataTable :table-data="data.skills_in_development" />
        <CommonCard v-bind="cardData[cardData.length - 1]" class="card" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "~/store/app";
import baseChartOptions from "~/includes/chart/chartOptions";
import baseChartData from "~/includes/chart/chartData";
import moment from "moment";

useHead({
  title: "Dashboard",
});

const appStore = useAppStore();

await useAsyncData("dashboard", async () => await appStore.fetchData());

const data = appStore.payload;

const loading = ref(false);

const cardData = ref([
  {
    title: "In progress courses",
    detail: data.in_progress_courses.length,
    hasDetail: true,
    data: data.in_progress_courses,
    specialKeys: ["assigned_to", "due_date", "status"],
  },
  {
    title: "Total Completed Courses",
    detail: data.total_completed_courses,
  },
  {
    title: "Upcoming courses",
    detail: data.upcoming_courses.length,
    hasDetail: true,
    data: data.upcoming_courses,
    specialKeys: ["assigned_to", "due_date", "status"],
  },
  {
    title: "Total Employees",
    detail: data.total_employees,
  },
  {
    title: "Top Employees",
    detail: data.top_employees.length,
    hasDetail: true,
    data: data.top_employees,
    specialKeys: ["current_score"],
  },
  {
    title: "Top Skills",
    detail: data.top_skills.length,
    hasDetail: true,
    data: data.top_skills,
  },
  {
    title: "Average employee score",
    detail: data.average_employee_score,
    detailIcon: true,
  },
]);

const chartOptions = {
  ...baseChartOptions,
  xaxis: {
    categories: data.activity_hours.map((x) =>
      moment(x.date).format("DD/MM/YYYY")
    ),
  },
};

const chartData = baseChartData.map((c) => ({
  name: c.name,
  data: data.activity_hours.map((x) => x[c.key]),
}));

const refresh = async () => {
  loading.value = true;
  await appStore.fetchData(true);
  loading.value = false;
};
</script>

<style lang="scss" scoped>
.dashboard {
  padding: 16px 16px;

  .header {
    @include space-between;

    @include devices(sm) {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 16px;
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
  }

  .main {
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 1rem;

    @include devices(md) {
      display: flex;
      flex-wrap: wrap;
    }
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: 15px;

    @include devices(md) {
      display: flex;
      flex-wrap: wrap;
    }
  }

  .card {
    margin-top: 18px;

    @include devices(md) {
      margin-top: 0;
    }
  }

  .left {
    @include devices(md) {
      width: 100%;
    }
  }

  .right {
    @include devices(md) {
      display: flex;
      flex-direction: column-reverse;
      width: 100%;
      gap: 1rem;
    }
  }
}
</style>
