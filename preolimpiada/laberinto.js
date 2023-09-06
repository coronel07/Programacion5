const lab = [
    "S##",
    "..#",
    "#.#",
    "#.G"
  ];
  
  function findPath(x, y) {
    if (x < 0 || y < 0 || x >= lab[0].length || y >= lab.length) {
      return false;
    }
  
    if (lab[y][x] === 'G') {
      return true;
    }
  
    if (lab[y][x] !== '.' && lab[y][x] !== 'S') {
      return false;
    }
  
    lab[y] = lab[y].substr(0, x) + '+' + lab[y].substr(x + 1);
  
    if (findPath(x, y - 2)) return true;
    if (findPath(x, y + 2)) return true;
    if (findPath(x + 2, y)) return true;
    if (findPath(x - 2, y)) return true;
  
    lab[y] = lab[y].substr(0, x) + '.' + lab[y].substr(x + 1);
    return false;
  }
  
  const start_x = lab[0].indexOf('S');
  const start_y = lab.findIndex(row => row.includes('S'));
  
  const result = findPath(start_x, start_y);
  
  if (result) {
    console.log("Laberinto resuelto");
    console.log(lab.join('\n'));
  } else {
    console.log("Laberinto no resuelto");
  }
  