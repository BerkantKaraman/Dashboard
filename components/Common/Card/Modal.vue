<template>
  <v-dialog max-width="50%" max-height="100%">
    <template v-slot:activator="{ props: activatorProps }">
      <div class="view-detail" v-bind="activatorProps">
        <div class="view-detail-text">View detail</div>
        <div class="view-detail-icon">
          <v-icon icon="mdi-arrow-right" :size="16" />
        </div>
      </div>
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

.view-detail {
  position: relative;
  @include center-both;
  width: max-content;
  height: max-content;
  gap: 6px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: $primary;
    transition: width 0.1s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover &-text,
  &:hover &-icon {
    color: $primary;
  }

  &-text {
    font-size: 14px;
    font-weight: 500;
    color: $text-color;
    transition: color 0.1s ease-in-out;
  }

  &-icon {
    @include center-both;
    transition: filter 0.1s ease-in-out;
  }
}
</style>
