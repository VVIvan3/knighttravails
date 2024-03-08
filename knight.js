function knightMoves(startCoords, endCoords) {
  const prev = new Map();
  const queue = [startCoords];
  const visited = new Set();
  const possibleMoves = [
    [-2, -1],
    [-2, 1],
    [-1, 2],
    [-1, -2],
    [1, 2],
    [1, -2],
    [2, 1],
    [2, -1],
  ];
  while (queue.length > 0) {
    const current = queue.shift();
    visited.add(current.toString());
    if (current[0] === endCoords[0] && current[1] === endCoords[1]) {
      const path = [];
      let step = current;
      while (step) {
        path.unshift(step);
        step = prev.get(step.toString());
      }
      return `You made it in ${path.length - 1} moves! Here's your path: ${path.map((square) => square.toString()).join("\n")}`;
    }
    for (const move of possibleMoves) {
      const newPosition = [current[0] + move[0], current[1] + move[1]];
      if (
        !visited.has(newPosition.toString()) &&
        newPosition[0] >= 0 &&
        newPosition[0] < 8 &&
        newPosition[1] >= 0 &&
        newPosition[1] < 8
      ) {
        queue.push(newPosition);
        prev.set(newPosition.toString(), current);
      }
    }
  }
}
console.log(knightMoves([3,3],[0,0]))
console.log(knightMoves([0, 0], [3, 3]));
