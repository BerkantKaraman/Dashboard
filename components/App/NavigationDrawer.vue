<template>
  <v-navigation-drawer v-model="drawer" :width="256" class="px-7 pt-7">
    <v-list density="comfortable" class="pb-6">
      <v-list-item>
        <template v-slot:prepend>
          <v-img
            :width="150"
            :height="40"
            aspect-ratio="16/9"
            cover
            src="/image/logo-black.svg"
            alt="logo"
          />
        </template>
      </v-list-item>
    </v-list>

    <v-divider />

    <v-list density="compact" class="pt-10">
      <v-list-item
        v-for="menuItem in menu"
        :key="menuItem.value"
        v-bind="menuItem"
        :min-height="50"
        color="primary"
        class="mb-2 rounded-lg"
      >
        <template v-slot:prepend>
          <v-icon size="large" :icon="menuItem.icon" />
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-toolbar color="transparent">
    <v-app-bar-nav-icon
      class="hidden-lg-and-up"
      @click.stop="drawer = !drawer"
    />
  </v-toolbar>
</template>

<script setup>
import menu from "~/includes/menu";
import { useDisplay } from "vuetify";

const display = ref(useDisplay());

const drawer = ref(false);

const isOpen = computed(() => {
  return display.value.lgAndUp ? (drawer.value = true) : false;
});
</script>
