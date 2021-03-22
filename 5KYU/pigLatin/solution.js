function pigIt(str) {
  const stringArray = str.split(" ");

  const resultArray = stringArray.map((string) => {
    // Check if the string is alphabetic
    if (string.match(/[A-Za-z]/g)) {
      const firstLetter = string.slice(0, 1);

      const substring = string.substring(1);

      return `${substring}${firstLetter}ay`;
    }

    return string;
  });

  return resultArray.join(" ");
}
