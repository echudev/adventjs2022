let x = 500
x = x % 256;  // x es el resto de la división de x por 256
x = x < 0 ? x + 256 : x;  // si x es negativo, añade 256 a x
console.log(x);  // imprime 244
