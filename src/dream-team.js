module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  var test = '';
  for (var i = 0; i < members.length; i++) {
    if (typeof(members[i]) === 'string') {
      test += members[i].trim()[0].toUpperCase();
    }
  }
  return test.split('').sort().join('');
};
