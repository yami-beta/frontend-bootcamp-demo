(function (global) {
  var num = 100;
  function add100(a) {
    return a + num;
  }

  global.add100 = add100;
})(window);
