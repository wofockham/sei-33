// setTimeout expects a callback -- it does not use Promises
// TASK: wrap setTimeout in a Promise

const wait = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

// Make this work:
wait(2000).then(function () {
  console.log('2 seconds have passed');
}).then(() => {
  console.log('also this function runs');
});
