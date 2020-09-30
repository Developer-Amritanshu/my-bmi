module.exports.calcBMI = function (weightKG,heightM) { 
  let b = weightKG/Math.pow(heightM,2);
  let calculatedBMI= b.toFixed(2);
  return `Your Bmi Is: ${calculatedBMI}`;
}
