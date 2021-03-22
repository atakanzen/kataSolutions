function isPangram(string) {
  const alphabet = [...Array(26)].map((val, idx) =>
    String.fromCharCode(idx + 97)
  );
  const inputChars = [
    ...new Set(
      string
        .split("")
        .filter((char) => char.match(/[a-zA-z]/g))
        .map((char) => char.toLowerCase())
        .sort()
    ),
  ];

  return alphabet.every((val, idx) => val === inputChars[idx]);
}
