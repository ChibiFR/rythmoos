function getNow(): () => number {
  if (typeof performance !== 'undefined' && performance.now !== undefined) {
    return performance.now;
  }

  return Date.now;
}

export default getNow();
