// function getTempCallback(location, callback) {
//   callback(undefined, 21);
//   callback('City not found');
// }
//
// getTempCallback('London', function(err, temp) {
//   if (err) {
//     console.log('error',err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
function getTempPromise(location) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(22);
      reject('City not found');
    },1000);
  });
}

getTempPromise('London').then(
  function(temp) {
    console.log('Promise success', temp);
  },
  function(err) {
    console.log('promise error', err);
  }
);

function addPromise (a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === "number" && typeof b === "number") {
      resolve(a+b);
    } else {
      reject('Both variables must be numbers');
    }
  });
}

addPromise(2, 3).then(
  function(sum) {
    console.log('Promise success', sum);
  },
  function(err) {
    console.log('Promise error', err);
  }
);

addPromise('2', 3).then(
  function(sum) {
    console.log('Promise success', sum);
  },
  function(err) {
    console.log('Promise error', err);
  }
);
