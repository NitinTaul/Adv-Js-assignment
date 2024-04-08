function replace(str) {
  var output = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      output = output + "-";
    } else {
       output = output + str[i];
    }
  }
  return output;
}
var str = "The quick brown fox jumps over the lazy dog";
console.log(replace(str));
