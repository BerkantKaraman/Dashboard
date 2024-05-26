<template>
  <v-dialog :max-width="width" v-model="isOpen">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn elevation="0" text="Add New Employee" v-bind="activatorProps" />
    </template>
    <template v-slot:default="{ isActive }">
      <v-card width="100%" height="100%" class="pa-6">
        <v-card-title>
          Please enter the employee's information
          <v-btn
            elevation="0"
            icon="mdi-close"
            @click="isActive.value = false"
          />
        </v-card-title>
        <v-form variant="outlined" width="100%" height="100%" class="pa-4">
          <v-row>
            <v-col
              v-for="(field, idx) in employeeForm"
              :key="idx"
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="employeePayload[field.key]"
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
import { toast } from "vue3-toastify";
import employeeForm from "~/includes/form/employeeForm";
import resetObjectValues from "~/utils/resetObject";
import { useDisplay } from "vuetify";

const props = defineProps({
  teamName: {
    type: String,
    default: "",
  },
});

const { name } = useDisplay();

const width = computed(() => {
  return ["xs", "sm", "md"].includes(name.value) ? "100%" : "40%";
});

const loading = ref(false);
const isOpen = ref(false);

const employeePayload = ref({
  first_name: "",
  last_name: "",
  email: "",
  title: "",
});

const nameRegex = /^[A-Za-z\süöçşığÜÖÇŞİĞ]+$/;
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const rules = {
  first_name: (value) => {
    if (!value.trim()) return "First Name is required.";
    if (!nameRegex.test(value)) return "Invalid First Name";
    return true;
  },
  last_name: (value) => {
    if (!value.trim()) return "Last Name is required.";
    if (!nameRegex.test(value)) return "Invalid Last Name";
    return true;
  },
  email: (value) => {
    return emailRegex.test(value) || "Invalid e-mail.";
  },
  title: (value) => {
    return !!value.trim() || "Employee Title is required.";
  },
};

const hasError = computed(() => {
  return (
    rules.first_name(employeePayload.value.first_name) !== true ||
    rules.last_name(employeePayload.value.last_name) !== true ||
    rules.email(employeePayload.value.email) !== true ||
    rules.title(employeePayload.value.title) !== true
  );
});

const handleAdd = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    isOpen.value = false;
    toast.success(
      `New employee added to ${props.teamName} team: ${employeePayload.value.first_name} ${employeePayload.value.last_name}`,
      {
        theme: "colored",
        type: "success",
      }
    );

    employeePayload.value = resetObjectValues(employeePayload.value);
  }, 1000);
};
</script>

<style lang="scss" scoped>
:deep(.v-card-title) {
  color: $text-color;
  @include space-between;
  font-size: 16px;
  white-space: normal; 
}
</style>
