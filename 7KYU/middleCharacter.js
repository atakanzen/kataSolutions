function getMiddle(s) {
  return s.substr(Math.round(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
