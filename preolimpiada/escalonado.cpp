#include <iostream>
#include <Fstring>

int result = 0;

bool esEscalonado(std::string numStr) {
    for (int i = 1; i < numStr.length(); i++) {
        if (std::stoi(numStr.substr(i)) <= std::stoi(numStr.substr(i - 1))) {
            return false;
        }
    }
    return true;
}
void EscalonadosR(int numero, int N) {
    if (numero > N) {
        return;
    }
    if (esEscalonado(std::to_string(numero))) {
        result++;
    }
    EscalonadosR(numero + 1, N);
}

int main() {
    int N = 15;
    EscalonadosR(10, N);
    std::cout << result << std::endl;
    return 0;
}
