function isValidWalk(walk) {
  let xPos = 0;
  let yPos = 0;
  const walkTime = walk.length;

  walk.forEach((direction) => {
    switch (direction) {
      case "n":
        yPos++;
        break;
      case "s":
        yPos--;
        break;
      case "w":
        xPos--;
        break;
      case "e":
        xPos++;
        break;
    }
  });

  return walkTime === 10 && xPos === 0 && yPos === 0;
}
