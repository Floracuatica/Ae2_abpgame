// Datos iniciales del jugador
let jugador = {
  nombre: "RommyHero",
  puntaje: 0,
  vidas: 3,
  nivel: 1
};

const PUNTAJE_VIDA_EXTRA = 100;
const PUNTAJE_MAXIMO = 300;
const MAX_VIDAS = 5;

// Función para simular una jugada
function jugar(puntosGanados) {
  if (typeof puntosGanados !== "number" || puntosGanados <= 0) {
    console.log("Jugada inválida. Debes ganar puntos positivos.");
    return;
  }

  jugador.puntaje += puntosGanados;

  // Gana una vida extra si cumple condición
  if (jugador.puntaje >= PUNTAJE_VIDA_EXTRA && jugador.vidas < MAX_VIDAS) {
    jugador.vidas++;
    console.log("¡Ganaste una vida extra!");
  }

  // Sube de nivel cada 50 puntos
  if (jugador.puntaje >= jugador.nivel * 50) {
    jugador.nivel++;
    console.log("¡Subiste al nivel " + jugador.nivel + "!");
  }
// Mostrar estado en pantalla
let mensaje = `
  <p>Jugador: ${jugador.nombre}</p>
  <p>Puntaje: ${jugador.puntaje}</p>
  <p>Vidas: ${jugador.vidas}</p>
  <p>Nivel: ${jugador.nivel}</p>
`;

if (jugador.puntaje >= PUNTAJE_MAXIMO) {
  mensaje += "<p>¡Felicitaciones, alcanzaste el puntaje máximo!</p>";
} else if (jugador.vidas <= 0) {
  mensaje += "<p>Fin del juego. Te quedaste sin vidas.</p>";
}

document.getElementById("estado").innerHTML = mensaje;
}

