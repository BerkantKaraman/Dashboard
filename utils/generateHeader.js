import startCase from "lodash/startCase";

function generateHeader({
  guideData,
  order = [],
  filter = [],
  specialKeys = [],
}) {
  if (!guideData || Object.keys(guideData).length === 0) return [];
  if (!order.length) order = Object.keys(guideData);
  if (!filter.length) filter = [];

  return Object.keys(guideData)
    .map((key) => {
      const header = {
        value: key,
        title: startCase(key),
        sortable: true,
      };

      if (specialKeys.includes(key)) {
        header.nowrap = true;
        header.align = "center";
      }

      return header;
    })
    .filter((header) => !filter.includes(header.value))
    .sort((a, b) => order.indexOf(a.value) - order.indexOf(b.value));
}

export default generateHeader;
