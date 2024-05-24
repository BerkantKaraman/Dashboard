<template>
  <div class="view-more">
    <div class="view-more-text">
      {{ viewDetail }}
    </div>
    <div class="view-more-icon">
      <AppIcon :name="iconSrc" :size="iconSize" />
    </div>
  </div>
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
  iconSize: {
    type: Number,
    default: 16,
  },
});
</script>

<style lang="scss" scoped>
.view-more {
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

  &:hover &-text {
    color: $primary;
  }

  &:hover &-icon {
    filter: invert(47%) sepia(61%) saturate(258%) hue-rotate(102deg)
      brightness(81%) contrast(89%);
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
