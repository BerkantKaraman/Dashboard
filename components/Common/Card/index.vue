<template>
  <v-card :width="width" :min-height="minHeight">
    <v-card-title> {{ dataTitle }} </v-card-title>
    <div class="v-card-inner">
      <CommonCardDetail
        :detail="dataDetail"
        :has-icon="hasIcon"
        :icon-size="iconSize"
        :icon-src="dataIcon"
      />
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
            <div class="v-card-inner">
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
    </div>
  </v-card>
</template>

<script setup>
import cardProps from "./cardProps";

const props = defineProps(cardProps);
</script>

<style lang="scss" scoped>
.v-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
  box-shadow: none;
  border: 1px solid $muted-color;

  &-title {
    font-size: 20px;
    font-weight: 600;
    color: $text-color;
    padding: 0;
  }

  &-inner {
    @include space-between;
  }
}
</style>
