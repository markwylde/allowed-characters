function validateCharacters (allowed, string) {
  allowed = allowed.split('');
  const illegal = string
    .split('')
    .filter(character => {
      return !allowed.includes(character);
    });

  const illegalCharacters = illegal.map(character => `"${character}"`).join(', ');

  if (illegal.length === 1) {
    throw new Error('contained unallowed character ' + illegalCharacters);
  }

  if (illegal.length > 1) {
    throw new Error('contained unallowed characters [' + illegalCharacters + ']');
  }

  return string;
}

module.exports = validateCharacters;
