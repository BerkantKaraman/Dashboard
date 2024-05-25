<template>
  <v-card :width="width" :min-height="minHeight">
    <v-card-title> {{ title }} </v-card-title>
    <div class="inner">
      <div class="detail">
        {{ detail }}
        <v-icon v-if="detailIcon" icon="mdi-star" :size="25" />
      </div>
      <CommonCardModal v-if="hasDetail" :title>
        <v-data-table
          :headers="headers"
          :items="data"
          hide-default-footer
          class="text-color"
        />
      </CommonCardModal>
    </div>
  </v-card>
</template>

<script setup>
import cardProps from "~/components/Common/Card/cardProps";
import generateHeader from "~/utils/generateHeader";

const props = defineProps(cardProps);

const headers = generateHeader({
  guideData: props.data[0] ?? null,
  specialKeys: props.specialKeys,
});
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

  .inner {
    @include space-between;

    .detail {
      @include center-both;
      width: max-content;
      gap: 6px;
      font-size: 36px;
      font-weight: 600;
      color: $primary;
    }
  }
}
</style>
