export const updeteObjectInArray = (items, itemId, objPropName, newObjProp) => {
  return items.map((item) => {
    if (item[objPropName] === itemId) {
      return { ...item, ...newObjProp };
    }
    return { ...item }; // return item;
  });
};
