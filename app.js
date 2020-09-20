module.exports.calcBMI = function (weightKG,heightM) { 
  let bmi = weightKG/Math.pow(heightM,2);
  let calculatedBMI= bmi.toFixed(2);
  return `Your Bmi Is: ${calculatedBMI}`;
}