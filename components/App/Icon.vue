<template>
  <nuxt-img
    :src="src"
    :width="size"
    :height="size"
    :placeholder="[size, size, 75, 15]"
  />
</template>

<script setup>
import icons from "~/includes/icons";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    default: 24,
  },
});

const src = computed(() => {
  return `/icons/${icons[props.name]}`;
});
</script>
