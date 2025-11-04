//  Ejercicio 6 (Desafío extra): “Centro de descargas”

//  Función que simula una descarga con un tiempo variable
function descargarArchivo(nombre: string, tiempo: number): Promise<string> {
  return new Promise((resolve) => {
    console.log(`⬇️ Iniciando descarga de ${nombre} (${tiempo / 1000}s)...`);
    setTimeout(() => {
      resolve(`${nombre} descargado en ${tiempo / 1000}s`);
    }, tiempo);
  });
}

// Simulamos tres descargas con distintos tiempos
const descarga1 = descargarArchivo("Archivo 1", 3000); // 3 segundos
const descarga2 = descargarArchivo("Archivo 2", 5000); // 5 segundos
const descarga3 = descargarArchivo("Archivo 3", 2000); // 2 segundos

// Promise.race(): muestra cuál termina primero
Promise.race([descarga1, descarga2, descarga3])
  .then((resultado) => {
    console.log(resultado);
    console.log("Esta descarga terminó primero.\n");
  })
  .catch((error) => console.error("Error en la carrera:", error));

// Promise.all(): muestra cuando todas las descargas han finalizado
Promise.all([descarga1, descarga2, descarga3])
  .then((resultados) => {
    console.log("Todas las descargas completadas:");
    resultados.forEach((mensaje) => console.log("  - " + mensaje));
  })
  .catch((error) => console.error("Error al descargar los archivos:", error));
