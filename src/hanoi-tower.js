module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    var shiftSteps = Math.pow(2, disksNumber) - 1;
    var shiftTime = shiftSteps / (turnsSpeed / 3600);
    return {
        turns: shiftSteps,
        seconds: shiftTime
    };
}
