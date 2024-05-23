import { defineStore } from "pinia";
import state from "./state";
import actions from "./actions";

export const useAppStore = defineStore("app", {
  state,
  actions,
});
