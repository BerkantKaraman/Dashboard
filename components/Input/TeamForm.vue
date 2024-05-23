<template>
  <v-dialog max-width="30%" v-model="isOpen">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn elevation="0" text="Create New Team" v-bind="activatorProps" />
    </template>
    <template v-slot:default="{ isActive }">
      <v-card width="100%" height="100%" class="py-4 pa-4">
        <v-card-title
          class="d-flex justify-space-between align-center"
          style="word-break: break-word"
        >
          Please enter the team's information
          <v-btn
            elevation="0"
            icon="mdi-close"
            @click="isActive.value = false"
          />
        </v-card-title>
        <v-form variant="outlined" width="100%" height="100%" class="pa-4">
          <v-row>
            <v-col v-for="(field, idx) in teamForm" :key="idx" cols="12">
              <v-text-field
                v-model="tempPayload[field.key]"
                :rules="[rules[field.key]]"
                :label="field.placeholder"
                required
                color="primary"
                variant="outlined"
              />
            </v-col>
          </v-row>
          <div class="d-flex justify-end">
            <v-btn
              elevation="0"
              :disabled="hasError"
              :loading="loading"
              @click="handleAdd"
            >
              Add
            </v-btn>
          </div>
        </v-form>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
import teamForm from "~/includes/form/teamForm";
import { useToast } from "vue-toast-notification";

const props = defineProps({
  teamPayload: {
    type: Object,
    default: () => {},
  },
});

const toast = useToast();

const loading = ref(false);
const isOpen = ref(false);
const tempPayload = ref(props.teamPayload);

const rules = {
  description: (value) => {
    return value.length >= 20 || "Description must be 20 characters or longer.";
  },
  team_title: (value) => {
    return !!value.trim() || "Team title is required.";
  },
};

const hasError = computed(() => {
  return (
    rules.description(props.teamPayload.description) !== true ||
    rules.team_title(props.teamPayload.team_title) !== true
  );
});

const handleAdd = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    isOpen.value = false;
    toast.open({
      message: "Team created",
      type: "success",
      position: "top",
    });

    tempPayload.value = {};
  }, 1000);
};
</script>
