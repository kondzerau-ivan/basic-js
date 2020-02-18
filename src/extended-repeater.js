module.exports = function repeater(str, options) {
    var separator = '';
    var repeatTimes = 1;
    var addition = '';
    var result = '';
    var additionSeparator = '';
    var additionRepeatTimes = 1;
    if (options['separator'] === undefined) {
        separator = '+';
    } else {
        separator = options['separator'];
    }
    if (!(options['repeatTimes'] === undefined)) {
        repeatTimes = options['repeatTimes'];
    }
    if (!(options['addition'] === undefined)) {
        addition = options['addition']
    }
    if (!(options['additionRepeatTimes'] === undefined)) {
        additionRepeatTimes = options['additionRepeatTimes'];
    }
    if (!(options['additionSeparator'] === undefined)) {
        additionSeparator = options['additionSeparator'];
    }
    for (var i = 0; i < repeatTimes; i++) {
        result += str;
        for (var j = 0; j < additionRepeatTimes; j++) {
            result += addition + additionSeparator;
        }
        if (additionSeparator) {
            result = result.slice(0, -additionSeparator.length);
        }
        result += separator;
    }
    return result.slice(0, -separator.length);
};
  