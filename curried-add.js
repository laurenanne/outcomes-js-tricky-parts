function curriedAdd(total) {
  if (!total) return 0;
  else {
    return function add(num) {
      if (!num) return total;
      total = total + num;
      return add;
    };
  }
}

module.exports = { curriedAdd };
