<template>
  <NuxtLoadingIndicator color="#e43823" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  htmlAttrs: {
    lang: "en",
  },
});
</script>
