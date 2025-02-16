const convertToCelsius = function(Ftemp) {
  let convertedTemp = (Ftemp - 32)*5/9;
  if(/\d+\.\d+/.test(convertedTemp)){
    return parseFloat(convertedTemp.toFixed(1));
  }
  return convertedTemp;
};

const convertToFahrenheit = function(Ctemp) {
  let convertedTemp = ((Ctemp * 9/5 + 32));
  if(/\d+\.\d+/.test(convertedTemp)){
    return parseFloat(convertedTemp.toFixed(1));
  }
  return convertedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
