function add(a, b) {
  if (isNaN(a)) {
    return "Error";
  }
  return a + b;
}

exports.add = add;
