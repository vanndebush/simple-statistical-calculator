function sum(inputArray) {
  var total = 0;
  for (var i = 0; i < inputArray.length; i++) {
    total += inputArray[i];
  }
  return total;
}
function average(inputArray) {
  return sum(inputArray) / inputArray.length;
}
function max(inputArray) {
  var sortedArray = inputArray.slice().sort(function(a, b) {
    return b - a;
  });
  return sortedArray[0];
}
function min(inputArray) {
  var sortedArray = inputArray.slice().sort(function(a, b) {
    return a - b;
  });
  return sortedArray[0];
}

var repeat = true;
var inputArray = [];

while (repeat) {
  var inputString = prompt('Input a number!\n\n(Click "Cancel" to show the result)');

  if (inputString === null || inputString === '') {
    if (inputArray.length === 0) {
      alert('No numbers entered!');
    } else {
      alert('[ ' + inputArray.join(', ') + ' ]\n\nSum: ' + sum(inputArray) + '\nAverage: ' + average(inputArray) + '\nMax: ' + max(inputArray) + '\nMin: ' + min(inputArray));
    }
    repeat = false;
  } else {
    var inputNumber = parseInt(inputString);
    if (isNaN(inputNumber)) {
      alert('Invalid input! Please enter a number.');
    } else {
      inputArray.push(inputNumber);
    }
  }
}

alert('Thank you for trying my program!');