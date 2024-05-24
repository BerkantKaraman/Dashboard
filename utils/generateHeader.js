import { startCase } from "lodash";

function generateHeader({ guideData, order, filter = [] }) {
  return computed(() => {
    if (!guideData || Object.keys(guideData).length === 0) return [];

    if (!order.length) order = Object.keys(guideData);
    if (!filter.length) filter = [];

    const specialKeys = [
      "overall_score",
      "total_employee_count",
      "current_score",
      "lessons_taken",
    ];

    return Object.keys(guideData)
      .map((key) => {
        const header = {
          value: key,
          title: startCase(key),
        };

        if (specialKeys.includes(key)) {
          header.nowrap = true;
          header.align = "center";
        }

        return header;
      })
      .filter((header) => !filter.includes(header.value))
      .sort((a, b) => order.indexOf(a.value) - order.indexOf(b.value));
  });
}

export default generateHeader;
