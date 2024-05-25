<template>
  <v-dialog :max-width="width" v-model="isOpen">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn elevation="0" text="Create New Team" v-bind="activatorProps" />
    </template>
    <template v-slot:default="{ isActive }">
      <v-card width="100%" height="100%" class="py-4 pa-4">
        <v-card-title :size="16">
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
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
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
import { useDisplay } from "vuetify";

const { name } = useDisplay();

const width = computed(() => {
  return ["xs", "sm", "md"].includes(name.value) ? "100%" : "40%";
});

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
    toast.success(`New Team created: ${teamPayload.value.team_title}`, {
      theme: "colored",
      type: "success",
    });

    teamPayload.value = resetObjectValues(teamPayload.value);
    isOpen.value = false;
  }, 1000);
};
</script>

<style lang="scss" scoped>
:deep(.v-card-title) {
  color: $text-color;
  @include space-between;
  font-size: 16px;
  text-wrap: wrap;
}
</style>
