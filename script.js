const boton = document.querySelector(".button");
const resultado = document.querySelector(".mensaje");
const bebida = document.querySelector(".bebida");
const pizza = document.querySelector(".pizza");
const postre = document.querySelector(".postre");
const loader = document.querySelector("#loader-pedido")

const estatusPedido = () => {
  //El estatus de falla es del 20% porque esta en 0.8 el math.random
  const estatus = Math.random() < 0.8;
  return estatus;
};

const realizarPedido = () => {
  resultado.innerHTML = "";
  bebida.innerHTML = "";
  pizza.innerHTML = "";
  postre.innerHTML = "";
  loader.style.display = 'block';

  const miPedido = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (estatusPedido()) {
        loader.style.display = 'none';
        resolve("Pedido exitoso. Su pizza esta en camino");
      } else {
        loader.style.display = 'none';
        reject("Ocurrio un error. Por favor intente nuevamente");

      }
    }, 3000);
  });
  miPedido.then(manejarPedido).catch(rechazarPedido);
};

const prepararBebida = () => {
  return new Promise((resolve) => {
    bebida.innerHTML = "Preparando..."
    setTimeout(() => resolve("Bebida lista"), 2000); 
  });
};

const prepararPizza = () => {
   pizza.innerHTML = "Preparando..."
  return new Promise((resolve) => {
    setTimeout(() => resolve("Pizza lista"), 2000);
  });
};

const prepararPostre = () => {
   postre.innerHTML = "Preparando..."
  return new Promise((resolve) => {
    setTimeout(() => resolve("Postre listo"), 2000);
  });
};

const prepararPedido = async () => {
  try {
    const bebidaLista = await prepararBebida();
    bebida.innerHTML = `Bebida lista`;

    const pizzaLista = await prepararPizza();
    pizza.innerHTML = `Pizza lista`;

    const postreListo = await prepararPostre();
    postre.innerHTML = `Postre listo`;

    resultado.innerHTML = "¡Todo servido!";
  } catch (error) {
    console.log(error);
  }
};

const manejarPedido = () => {
  resultado.innerHTML = "Pedido exitoso. Se esta preparando...";
  prepararPedido();
};

const rechazarPedido = (mensajeDeError) => {
  console.log(mensajeDeError);
  resultado.innerHTML = "Ocurrio un error. Por favor intente nuevamente";
};

boton.addEventListener("click", realizarPedido);
