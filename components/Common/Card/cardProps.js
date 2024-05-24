export default {
  dataTitle: {
    type: String,
    default: "",
  },
  dataDetail: {
    type: [Number, String],
    required: true,
  },
  viewDetail: {
    type: String,
    default: "",
  },
  dataIcon: {
    type: String,
    default: "",
  },
  iconSrc: {
    type: String,
    default: "",
  },
  hasIcon: {
    type: Boolean,
    default: false,
  },
  iconSize: {
    type: Number,
    default: 24,
  },
  hasDetail: {
    type: Boolean,
    default: false,
  },
  width: {
    type: String,
    default: "100%",
  },
  minHeight: {
    type: String,
    default: "152px",
  },
  title: {
    type: String,
    default: "",
  },
};
