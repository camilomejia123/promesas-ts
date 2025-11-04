//  Ejercicio 4: “Consultas con async/await”


// --- Funciones reutilizadas desde el Ejercicio 2 ---

// Simula que se toma el pedido (1 segundo)
function tomarPedido(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pedido recibido");
    }, 1000);
  });
}

// Simula la preparación del pedido (2 segundos) con 30% probabilidad de fallo
function prepararPedido(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fallo = Math.random() < 0.3; // 30% de chance de error
      if (fallo) {
        reject("Error al preparar el pedido. Intenta nuevamente.");
      } else {
        resolve("Pedido en preparación");
      }
    }, 2000);
  });
}

// Simula la entrega del pedido (1.5 segundos)
function entregarPedido(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pedido entregado al cliente");
    }, 1500);
  });
}

// --- Función asíncrona que procesa el pedido en orden usando await ---
async function procesarPedido(): Promise<void> {
  console.log("[Inicio del proceso]");
  try {
    const recibido = await tomarPedido();
    console.log(recibido);

    const preparando = await prepararPedido();
    console.log(preparando);

    const entregado = await entregarPedido();
    console.log(entregado);

    console.log("[Fin del proceso]");
    console.log("Proceso completado con éxito");
  } catch (error) {
    // Manejo de errores proveniente de cualquiera de las promesas
    console.error(String(error));
    console.log("[Fin del proceso con errores]");
  }
}

// Llamada a la función
procesarPedido();
