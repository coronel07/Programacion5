function esFinalizacion(cadena1, cadena2) {
    if (cadena2 === "") {
      return true;
    }
    if (cadena1 === "" && cadena2 !== "") {
      return false;
    }
  
    const ultimoCaracter1 = cadena1.charAt(cadena1.length - 1);
    const ultimoCaracter2 = cadena2.charAt(cadena2.length - 1);
  
    if (ultimoCaracter1 === ultimoCaracter2) {
      return esFinalizacion(cadena1.substring(0, cadena1.length - 1), cadena2.substring(0, cadena2.length - 1));
    } else {
      return false;
    }
  }
  
  // Ejemplo de uso
  const cadena1 = "OpenAI";
  const cadena2 = "AI";
  const resultado = esFinalizacion(cadena1, cadena2);
  console.log(resultado); // Debería imprimir true
  