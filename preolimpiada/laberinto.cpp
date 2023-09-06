#include <iostream>
#include <vector>
#include <string>

std::vector<std::string> lab = {
  "S##",
  "..#",
  "#.#",
  "#.G"
};

bool findPath(int x, int y) {
  if (x < 0 || y < 0 || x >= lab[0].length() || y >= lab.size()) {
    return false;
  }

  if (lab[y][x] == 'G') {
    return true;
  }

  if (lab[y][x] != '.' && lab[y][x] != 'S') {
    return false;
  }

  lab[y][x] = '+';

  if (findPath(x, y - 2)) return true;
  if (findPath(x, y + 2)) return true;
  if (findPath(x + 2, y)) return true;
  if (findPath(x - 2, y)) return true;

  lab[y][x] = '.';
  return false;
}

int main() {
  int start_x, start_y;
  for (int y = 0; y < lab.size(); y++) {
    if (lab[y].find('S') != std::string::npos) {
      start_x = lab[y].find('S');
      start_y = y;
      break;
    }
  }

  bool result = findPath(start_x, start_y);

  if (result) {
    std::cout << "Laberinto resuelto" << std::endl;
    for (const std::string& row : lab) {
      std::cout << row << std::endl;
    }
  } else {
    std::cout << "Laberinto no resuelto" << std::endl;
  }

  return 0;
}
