<template>
  <v-dialog max-width="30%" v-model="isOpen">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn elevation="0" text="Create New Team" v-bind="activatorProps" />
    </template>
    <template v-slot:default="{ isActive }">
      <v-card width="100%" height="100%" class="py-4 pa-4">
        <v-card-title
          class="d-flex justify-space-between align-center text-color"
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
            <v-col cols="12">
              <v-text-field
                v-model="teamPayload.team_title"
                :rules="[rules.team_title]"
                label="Team Title"
                required
                color="primary"
                variant="outlined"
              />
              <v-textarea
                v-model="teamPayload.description"
                :rules="[rules.description]"
                label="Team Description"
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
import { toast } from "vue3-toastify";
import resetObjectValues from "~/utils/resetObject";

const loading = ref(false);
const isOpen = ref(false);

const teamPayload = ref({
  description: "",
  team_title: "",
});

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
    rules.description(teamPayload.value.description) !== true ||
    rules.team_title(teamPayload.value.team_title) !== true
  );
});

const handleAdd = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    toast.success("toastify success", {
      theme: "colored",
      type: "success",
    });

    teamPayload.value = resetObjectValues(teamPayload.value);
    isOpen.value = false;
  }, 1000);
};
</script>
