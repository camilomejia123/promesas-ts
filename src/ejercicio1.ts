// Ejercicio 1: “Cargando datos del servidor”


// Función que simula la carga de datos desde un servidor
function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    console.log("Cargando datos del servidor...");

    // Simulamos un retraso de 2 segundos (petición al servidor)
    setTimeout(() => {
      const exito = Math.random() > 0.5; // 50% de probabilidad de éxito

      if (exito) {
        resolve("Datos cargados correctamente");
      } else {
        reject("Error al cargar los datos");
      }
    }, 2000);
  });
}

// Llamada a la función y manejo de la Promesa
fetchData()
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.error(error));
