<template>
  <v-btn @click="click">asd</v-btn>

  <CommonCard title="asd" />
</template>

<script setup>
import { toast } from "vue3-toastify";

const click = () => {
  toast.error("asdasd", {
    theme: "colored",
    type: "error",
  });
};
</script>
