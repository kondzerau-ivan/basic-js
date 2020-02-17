const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sample) {
  if (sample === false) {
    return false;
  }
  if (typeof(sample) !== 'string') {
    return false;
  }
  if (!(/^[0-9]*\.[0-9]+$/.test(sample))) {
    return false;
  }
  var FINAL_ACTIVITY = Math.ceil(parseFloat(sample));
  if (FINAL_ACTIVITY < 0 || FINAL_ACTIVITY > 15) {
    return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY / FINAL_ACTIVITY) * HALF_LIFE_PERIOD / 0.693);
};
