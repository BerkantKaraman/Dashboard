<template>
  <NuxtLoadingIndicator color="#0c615e" />
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
