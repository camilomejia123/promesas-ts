// Ejercicio 5: “Múltiples pedidos al mismo tiempo”


// --- Versión propia de procesarPedido() (basada en el Ejercicio 4) ---
function tomarPedidoE5(nombre: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(` Pedido ${nombre} recibido`);
    }, 1000);
  });
}

function prepararPedidoE5(nombre: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fallo = Math.random() < 0.3; // 30% de probabilidad de error
      if (fallo) {
        reject(` Error al preparar el pedido ${nombre}`);
      } else {
        resolve(`Pedido ${nombre} en preparación`);
      }
    }, 2000);
  });
}

function entregarPedidoE5(nombre: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Pedido ${nombre} entregado al cliente`);
    }, 1500);
  });
}

// Función asíncrona que ejecuta un pedido completo
async function procesarPedidoE5(nombre: string): Promise<string> {
  try {
    console.log(`[Inicio del proceso: ${nombre}]`);
    const recibido = await tomarPedidoE5(nombre);
    console.log(recibido);

    const preparando = await prepararPedidoE5(nombre);
    console.log(preparando);

    const entregado = await entregarPedidoE5(nombre);
    console.log(entregado);

    console.log(`[Fin del proceso: ${nombre}]`);
    return ` Pedido ${nombre} completado`;
  } catch (error) {
    throw String(error);
  }
}

// --- Parte principal del ejercicio ---

// Simulamos tres pedidos en paralelo
const pedidos = [
  procesarPedidoE5("Pedido1"),
  procesarPedidoE5("Pedido2"),
  procesarPedidoE5("Pedido3"),
];


// Reto adicional: usar Promise.allSettled() para continuar aunque alguno falle
Promise.allSettled(pedidos).then((resultados) => {
  console.log("\n Resultados finales:");
  resultados.forEach((resultado, i) => {
    if (resultado.status === "fulfilled") {
      console.log(`${resultado.value}`);
    } else {
      console.log(`Pedido ${i + 1} falló: ${resultado.reason}`);
    }
  });
  console.log(" Proceso de pedidos finalizado");
});
