<template>
  <div class="dashboard pa-8">
    <div class="header d-flex justify-space-between">
      <div class="page-header pb-4">Dashboard</div>
      <div class="refresh">
        Last updated at: {{ appStore.lastUpdated }}
        <div :class="['refresh-icon', { loading }]" @click="refresh">
          <AppIcon name="refresh" :size="25" />
        </div>
      </div>
    </div>
    <div class="main">
      <div class="left">
        <CommonLineChart :chart-options="chartOptions" :series="series" />
        <div class="cards">
          <CommonCard
            v-for="item in items.slice(0, -1)"
            :key="item"
            :title="item.title"
            :data-title="item.title"
            :data-detail="item.detail"
            :has-detail="item.hasDetail"
            :has-icon="item.hasIcon"
            data-icon="star"
            view-detail="View Detail"
            icon-src="carret-right"
            @click="getData(item.data)"
          >
            <v-data-table
              :items="item.data"
              hide-default-footer
              class="text-color"
            />
          </CommonCard>
        </div>
      </div>
      <div class="right">
        <CommonDataTable :table-data="data.skills_in_development" />
        <CommonCard
          :title="items[6].title"
          :data-title="items[6].title"
          :data-detail="items[6].detail"
          :has-detail="items[6].hasDetail"
          :has-icon="items[6].hasIcon"
          data-icon="star"
          view-detail="View Detail"
          icon-src="carret-right"
          class="card"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "~/store/app";
import moment from "moment";

const appStore = useAppStore();

await useAsyncData("dashboard", async () => await appStore.fetchData());

const data = appStore.payload;

const loading = ref(false);

const items = ref([
  {
    title: "In progress courses",
    detail: data.in_progress_courses.length,
    hasDetail: true,
    data: data.in_progress_courses,
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
    hasIcon: true,
  },
]);

const getData = (item) => {
  console.log(item);
};

const chartOptions = {
  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: false,
    },
  },

  dataLabels: {
    enabled: false,
  },

  stroke: {
    curve: "straight",
  },

  title: {
    text: "Activity Hours",
    align: "left",
  },

  stroke: {
    curve: "smooth",
  },

  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"],
      opacity: 0.5,
    },
  },

  xaxis: {
    categories: data.activity_hours.map((x) =>
      moment(x.date).format("DD/MM/YYYY")
    ),
  },
};

const series = [
  {
    name: "Activity Hours",
    data: data.activity_hours.map((x) => x.hours),
  },
  {
    name: "Exams Completed",
    data: data.activity_hours.map((x) => x.exams_completed),
  },
  {
    name: "Lessons Taken",
    data: data.activity_hours.map((x) => x.lessons_taken),
  },
];

const refresh = async () => {
  loading.value = true;
  await appStore.fetchData(true);
  loading.value = false;
};
</script>

<style lang="scss" scoped>
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

.main {
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 1rem;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}

.card {
  margin-top: 19px;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
