// assume when n < 1, return 0 because the summation starts from 1

// mathematical way
var sum_to_n_a = function (n) {
  if (n < 1) {
    return 0;
  }
  return ((1 + n) * n) / 2;
};

// iterative way
var sum_to_n_b = function (n) {
  var ret = 0;
  for (var i = 1; i <= n; i++) {
    ret += i;
  }
  return ret;
};

// recursive way
var sum_to_n_c = function (n) {
  if (n < 1) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  return n + sum_to_n_c(n - 1);
};
