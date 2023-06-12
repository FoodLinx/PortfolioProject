export function removeUndefinedObject(object) {
  Object.keys(object).forEach(key => {
    if (object[key] === undefined) delete object[key];
  });
  return object
}
