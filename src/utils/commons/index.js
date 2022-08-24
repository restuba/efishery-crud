export const timeoutFunc = (timeout, action, delay) => {
  clearTimeout(timeout);
  return setTimeout(() => {
    action();
  }, delay);
};

export const isObjectEmpty = (value) => {
  return (
    (Object.prototype.toString.call(value) === '[object Object]' &&
      JSON.stringify(value) === '{}') ||
    !value
  );
};

export const getArrayUniqueByKey = (array, key) => {
  return [
    ...new Map(
      array.map((item) => {
        return [item[key], item];
      })
    ).values(),
  ];
};

export const filterEmptyObject = (value) => {
  const data = {};
  Object.keys(value).forEach((key) => {
    if (value[key]) {
      data[key] = value[key];
    }
  });
  return data;
};
