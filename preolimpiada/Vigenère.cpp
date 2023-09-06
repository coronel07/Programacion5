#include <iostream>
#include <string>
#include <vector>

std::string abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
std::string msg = "Hola messi";
int n = 2;
std::vector<int> caracteres = {2, 1};
std::vector<char> traduccion;
int inicio = 0;

std::string traductor() {
    std::string upperMsg = msg;
    for (char &c : upperMsg) {
        c = toupper(c);
    }

    for (size_t i = 0; i < upperMsg.length(); i++) {
        for (size_t y = 0; y < abecedario.length(); y++) {
            if (upperMsg[i] == abecedario[y]) {
                traduccion.push_back(abecedario[y + caracteres[inicio]]);
                inicio++;
                if (inicio == n) {
                    inicio = 0;
                }
            }
        }
    }
    return std::string(traduccion.begin(), traduccion.end());
}

int main() {
    std::cout << traductor() << std::endl;
    return 0;
}
