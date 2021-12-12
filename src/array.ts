export function append<T, E>(array: T[], element: E) {
  return [...array, element];
}

export function prepend<T, E>(array: T[], element: E) {
  return [element, ...array];
}

export function remove<T>(array: T[], indexToRemove: number, size: number = 1) {
  return array.slice(0, indexToRemove).concat(array.slice(indexToRemove + size));
}

export function unique<T>(array: T[]) {
  return array.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
}
