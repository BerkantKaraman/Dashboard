export default {
  title: {
    type: String,
    default: "",
  },
  detail: {
    type: [Number, String],
    required: true,
  },
  detailIcon: {
    type: Boolean,
    required: false,
  },
  hasDetail: {
    type: Boolean,
    required: false,
  },
  width: {
    type: [String, Number],
    default: "100%",
  },
  minHeight: {
    type: [String, Number],
    default: 152,
  },
  data: {
    type: Array,
    default: () => [],
  },
  specialKeys: {
    type: Array,
    default: () => [],
  },
};
