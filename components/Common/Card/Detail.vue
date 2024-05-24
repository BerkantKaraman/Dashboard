<template>
  <div class="detail">
    {{ detail }}
    <AppIcon v-if="hasIcon" :name="iconSrc" :size="iconSize" />
  </div>
</template>

<script setup>
const props = defineProps({
  detail: {
    type: [Number, String],
    required: true,
  },
  iconSrc: {
    type: String,
    default: "",
  },
  hasIcon: {
    type: Boolean,
    default: false,
  },
  iconSize: {
    type: Number,
    default: 24,
  },
});
</script>

<style lang="scss" scoped>
.detail {
  @include center-both;
  width: max-content;
  gap: 6px;
  font-size: 36px;
  font-weight: 600;
  color: $primary;
}
</style>
