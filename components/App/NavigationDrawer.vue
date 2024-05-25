<template>
  <v-navigation-drawer :width="256" class="px-7 pt-7">
    <v-list density="comfortable" class="pb-6">
      <v-list-item>
        <template v-slot:prepend>
          <v-img
            :width="150"
            :height="38"
            aspect-ratio="16/9"
            cover
            src="/image/logo.png"
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
</template>

<script setup>
import menu from "~/includes/menu";
</script>
