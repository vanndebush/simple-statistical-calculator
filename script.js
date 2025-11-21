function sum(inputArray) {
  var total = 0;
  for (var i = 0; i < inputArray.length; i++) {
    total += inputArray[i];
  }
  return total;
}
function average(inputArray) {
  var total = 0;
  for (var i = 0; i < inputArray.length; i++) {
    total += inputArray[i];
  }
  return total / inputArray.length;
}
function max(inputArray) {
  var sortedArray = inputArray.sort(function(a, b) {
    return b - a;
  });
  return sortedArray[0];
}
function min(inputArray) {
  var sortedArray = inputArray.sort(function(a, b) {
    return a - b;
  });
  return sortedArray[0];
}

var repeat = true;
var inputArray = [];

while (repeat) {
  var input = parseInt(prompt('Input a number!\n\n(Click "Cancel" to show the result)'));
  if (input || input === 0) {
    inputArray.push(input);
  } else {
    alert('[ ' + inputArray.join(', ') + ' ]\n\nSum: ' + sum(inputArray) + '\nAverage: ' + average(inputArray) + '\nMax: ' + max(inputArray) + '\nMin: ' + min(inputArray));
    repeat = false;
  }
}

alert('Thank you for trying my program!');