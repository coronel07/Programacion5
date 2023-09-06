#include <iostream>
#include <vector>

int dividerChainsRecursive(int num) {
    std::vector<int> divisores;

    for (int i = 1; i <= num; i++) {
        if (num % i == 0) {
            divisores.push_back(i);
        }
    }

    int n = 1;
    for (size_t i = 0; i < divisores.size(); i++) {
        if (divisores[i] > n && divisores[i] != num) {
            n = divisores[i];
        }
    }

    if (num == 1) {
        return num;
    }

    int resultado = num + dividerChainsRecursive(n);
    return resultado;
}

int main() {
    int num = 60;
    std::cout << dividerChainsRecursive(num) << std::endl;
    return 0;
}
