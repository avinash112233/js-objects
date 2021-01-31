var fob = {
  up: function(x) {
    return x.toUpperCase();
  },
  char: "hello"
};
var n = fob.up(fob.char);
console.log(n);
