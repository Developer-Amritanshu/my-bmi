module.exports.calcBMI = function (weightKiloGram,heightM) { 
  let bmi = weightKiloGram/Math.pow(heightM,2);
  let calculatedBMI= bmi.toFixed(2);
  return `Your Body mass index Is: ${calculatedBMI}`;
}
