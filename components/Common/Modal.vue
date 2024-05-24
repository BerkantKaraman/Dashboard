<template>
  <v-dialog max-width="50%" max-height="100%">
    <template v-slot:activator="{ props: activatorProps }">
      <CommonViewDetail
        v-bind="activatorProps"
        :view-detail="viewDetail"
        :icon-src="iconSrc"
      />
    </template>

    <template v-slot:default="{ isActive }">
      <v-card class="pa-10">
        <div class="modal-header">
          <v-card-title class="text-color"> {{ title }} </v-card-title>
          <v-btn
            elevation="0"
            icon="mdi-close"
            @click="isActive.value = false"
          />
        </div>
        <slot />
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
const props = defineProps({
  viewDetail: {
    type: String,
    default: "",
  },
  iconSrc: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.modal-header {
  @include space-between;
}
</style>
