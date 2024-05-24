function resetObjectValues(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (
        typeof obj[key] === "object" &&
        !Array.isArray(obj[key]) &&
        obj[key] !== null
      ) {
        resetObjectValues(obj[key]);
      } else {
        switch (typeof obj[key]) {
          case "string":
            obj[key] = "";
            break;
          case "number":
            obj[key] = 0;
            break;
          case "boolean":
            obj[key] = false;
            break;
          case "object":
            if (Array.isArray(obj[key])) {
              obj[key] = [];
            } else {
              obj[key] = {};
            }
            break;
          default:
            obj[key] = null;
        }
      }
    }
  }
  return obj;
}

export default resetObjectValues;
