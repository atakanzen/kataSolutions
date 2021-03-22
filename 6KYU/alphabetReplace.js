function alphabetPosition(text) {
  const alphabet = [...Array(26)].map((_, index) =>
    String.fromCharCode(index + 97)
  );
  let result = [];
  for (let i = 0; i < text.length; i++) {
    let code = text.charCodeAt(i);
    if ((code > 64 && code < 91) || (code > 96 && code < 123)) {
      result.push(alphabet.indexOf(text[i].toLowerCase()) + 1);
    }
  }
  return result.join(" ");
}
