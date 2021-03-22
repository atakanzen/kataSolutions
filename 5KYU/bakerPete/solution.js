function cakes(recipe, available) {
  let resultArray = [];

  for (let ingredient in recipe) {
    // Check if recipe ingredient exists on available
    if (!(ingredient in available)) {
      return 0;
    }

    for (let availableIngredient in available) {
      if (availableIngredient in recipe) {
        const cakeNumber =
          available[availableIngredient] / recipe[availableIngredient];
        resultArray.push(cakeNumber);
      }
    }
  }

  const min = resultArray.reduce((a, b) => Math.min(a, b));

  return Math.floor(min);
}
