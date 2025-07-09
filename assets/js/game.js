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

  // Mostrar estado actual
  console.log("Jugador: " + jugador.nombre);
  console.log("Puntaje: " + jugador.puntaje);
  console.log("Vidas: " + jugador.vidas);
  console.log("Nivel: " + jugador.nivel);

  // Condición de fin de juego
  if (jugador.puntaje >= PUNTAJE_MAXIMO) {
    console.log("¡Felicitaciones, alcanzaste el puntaje máximo!");
  } else if (jugador.vidas <= 0) {
    console.log("Fin del juego. Te quedaste sin vidas.");
  }
}

// Simulaciones de jugadas
jugar(40);
jugar(60);
jugar(100);
jugar(-5);  // caso límite
