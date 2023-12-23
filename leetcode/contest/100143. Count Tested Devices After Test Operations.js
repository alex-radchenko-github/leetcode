var countTestedDevices = function(batteryPercentages) {
  let tested = 0
  for (let i = 0; i < batteryPercentages.length; i++) {
    if(batteryPercentages[i] > tested) {
      tested ++
    }
  }
  return tested
};

console.log(countTestedDevices([1,1,2,1,3]))
console.log(countTestedDevices([0,1,2]))
