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

export const decimalFormatter = (number) => {
  if (number !== null && number !== undefined) {
    // integer
    if (Number.isInteger(number)) {
      return number
        .toString()
        .replace(/\./g, ',')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    // decimal
    if (number % 1 !== 0) {
      try {
        return number
          .toFixed(2)
          .toString()
          .replace(/\./g, ',')
          .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      } catch {
        return number.replace(/\./g, ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      }
    }

    try {
      return number.replace(/\./g, ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    } catch {
      return number.toFixed(2);
    }
  }
  return 0;
};

export const toCurrency = (number, currency) => {
  if (number) {
    return `${currency} ${decimalFormatter(number)}`;
  }
  return '-';
};
