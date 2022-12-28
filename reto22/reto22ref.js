function checkStepNumbers(systemNames, stepNumbers) {
    return !systemNames.some((a, i) =>
      systemNames
        .slice(i)
        .some((b, j) => b == a && stepNumbers[j + i] < stepNumbers[i])
    );
  }