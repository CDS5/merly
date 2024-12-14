const dataMap = new Map(); // Crear el mapa para almacenar los resultados

for (let i = 10001; i <= 10500; i++) {
  try {
    // Seleccionar el input y el botón
    const input = document.querySelector("body > center > form > div:nth-child(11) > div > div:nth-child(3) > div.col-xs-12 > input[type=text]");
    const button = document.querySelector("body > center > form > div:nth-child(11) > div > div:nth-child(3) > div.col-xs-12 > button");

    if (!input || !button) {
      console.error("No se encontró el input o el botón en la página.");
      break;
    }

    // Colocar el número actual en el input
    input.value = i;

    // Simular salir del campo (tabular)
    input.dispatchEvent(new Event('blur'));

    // Simular clic en el botón
    button.dispatchEvent(new Event('click'));

    // Esperar hasta que el contenido del span cambie o hasta un tiempo máximo
    const spanSelector = "#Ajax_ExisteCliente .correct, #Ajax_ExisteCliente .incorrect";
    let spanContent = null;
    let maxRetries = 10; // Máximo 10 intentos (5 segundos)
    while (maxRetries-- > 0) {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Esperar 500 ms entre intentos
      const span = document.querySelector(spanSelector);

      if (span) {
        spanContent = span.textContent.trim();
        break; // Salir del bucle si encontramos contenido
      }
    }

    // Determinar el resultado
    let result;
    if (spanContent && document.querySelector("#Ajax_ExisteCliente .correct")) {
      result = spanContent.replace("Cliente:&nbsp;", "").replace("Cliente:", "").trim();
    } else {
      result = "No existe cliente";
    }

    // Guardar en el mapa
    dataMap.set(i, result);

    console.log(`Procesado número: ${i}, Resultado: ${result}`);
  } catch (error) {
    console.error(`Error procesando el número ${i}:`, error);
    continue;
  }
}

// Mostrar los datos procesados al final
console.log("Datos procesados:", Array.from(dataMap.entries()));

// Convertir el mapa a JSON para su exportación o uso posterior
const jsonData = JSON.stringify(Object.fromEntries(dataMap), null, 2);
console.log(jsonData);
