// Ejercicio 2: “Simulando un pedido en línea”

//  Función 1: Simula que se toma el pedido (1 segundo)
function tomarPedidoE2(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("📦 Pedido recibido");
    }, 1000);
  });
}

//  Función 2: Simula la preparación del pedido (2 segundos)
function prepararPedidoE2(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fallo = Math.random() < 0.3; // 30% probabilidad de error
      if (fallo) {
        reject("Error al preparar el pedido. Intenta nuevamente.");
      } else {
        resolve("Pedido en preparación");
      }
    }, 2000);
  });
}

// Función 3: Simula la entrega del pedido (1.5 segundos)
function entregarPedidoE2(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pedido entregado al cliente");
    }, 1500);
  });
}

// Encadenamos las promesas para ejecutar el flujo completo
tomarPedidoE2()
  .then((mensaje) => {
    console.log(mensaje);
    return prepararPedidoE2();
  })
  .then((mensaje) => {
    console.log(mensaje);
    return entregarPedidoE2();
  })
  .then((mensaje) => {
    console.log(mensaje);
    console.log("Proceso completado con éxito");
  })
  .catch((error) => {
    console.error(error);
  });
