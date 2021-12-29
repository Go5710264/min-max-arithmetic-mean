// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr.length <= 1) {
      max = arr[i];
      min = arr[i];
      sum += arr[i];
    } else if (arr[i] > max && arr[i] >= Math.max.apply(null, arr)) {
      max = arr[i];
      sum += arr[i];
    } else if (arr[i] < min && arr[i] <= Math.min.apply(null, arr)) {
      min = arr[i];
      sum += arr[i];
    } else {
      sum += arr[i];
    } 
  }

  avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

// Задание 2

function makeWork(arrOfArr, func) {
  let max = 0;

  for (let key of arrOfArr) {
    let result = func(key);
    if (result > max) {
      max = result;
    };
  }

  return max;
}

function worker(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}

// Задание 3

function worker2(arr) {
  return Math.abs(Math.max.apply(null, arr) - Math.min.apply(null, arr));  
}
