function sortToys(toys, positions) {
    return [...positions]
      .sort((a,b) => a - b)
      .map(i => toys[[...positions]
      .indexOf(i)]);
  }