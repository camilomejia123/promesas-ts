// Ejercicio 3: “Cargando usuarios y publicaciones”


// Función que simula la carga de usuarios (2 segundos)
function getUsers(): Promise<string[]> {
  return new Promise((resolve) => {
    console.log("Cargando usuarios...");
    setTimeout(() => {
      resolve(["User1", "User2", "User3"]);
    }, 2000);
  });
}

// Función que simula la carga de publicaciones (3 segundos)
function getPosts(): Promise<string[]> {
  return new Promise((resolve) => {
    console.log("Cargando publicaciones...");
    setTimeout(() => {
      resolve(["Post1", "Post2", "Post3"]);
    }, 3000);
  });
}

// Ejecutamos ambas promesas en paralelo con Promise.all()
Promise.all([getUsers(), getPosts()])
  .then(([usuarios, publicaciones]) => {
    console.log(" Usuarios y publicaciones cargados correctamente");
    console.log("Usuarios:", usuarios);
    console.log("Publicaciones:", publicaciones);
  })
  .catch((error) => {
    console.error("Error al cargar los datos:", error);
  });
