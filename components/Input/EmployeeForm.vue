<template>
  <v-dialog max-width="40%" v-model="isOpen">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn elevation="0" text="Add New Employee" v-bind="activatorProps" />
    </template>
    <template v-slot:default="{ isActive }">
      <v-card width="100%" height="100%" class="pa-6">
        <v-card-title
          class="d-flex justify-space-between align-center pa-4 text-color"
        >
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
import { useToast } from "vue-toast-notification";
import employeeForm from "~/includes/form/employeeForm";

const props = defineProps({
  employeePayload: {
    type: Object,
    default: () => {},
  },
});

const toast = useToast();

const loading = ref(false);
const isOpen = ref(false);
const tempPayload = ref(props.employeePayload);

const nameRegex = /^[A-Za-z\s]+$/;
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
    rules.first_name(props.employeePayload.first_name) !== true ||
    rules.last_name(props.employeePayload.last_name) !== true ||
    rules.email(props.employeePayload.email) !== true ||
    rules.title(props.employeePayload.title) !== true
  );
});

const handleAdd = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    isOpen.value = false;
    toast.open({
      message: "Employee added to team",
      type: "success",
      position: "top",
    });

    tempPayload.value = {};
  }, 1000);
};
</script>
