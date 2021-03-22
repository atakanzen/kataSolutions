function DNAStrand(dna) {
  const DNA = {
    A: "T",
    T: "A",
    G: "C",
    C: "G",
  };

  return dna
    .split("")
    .map((sym) => DNA[sym])
    .join("");
}
