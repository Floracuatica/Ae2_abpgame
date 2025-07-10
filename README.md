# 🧠 Juego de Palíndromos - Rommy Edition

Este es un minijuego web desarrollado con JavaScript, HTML y Bootstrap que desafía al usuario a identificar si una palabra es o no un palíndromo.

---

## 🎮 ¿Cómo se juega?

1. Ingresa tu nombre para personalizar tu experiencia.
2. Se te mostrará una palabra aleatoria.
3. Debes decidir si la palabra es un palíndromo o no.
4. Si aciertas, ganas un punto. Si te equivocas, pierdes uno.
5. Cada 5 puntos, subes de nivel.
6. Si alcanzas 10 puntos, ganas el juego.  
7. Si tus puntos llegan a 0... 💔 se termina la partida.

---

## 🧩 Características

- ✔️ Validación de palíndromos reales
- 🎨 Interfaz estilizada con Bootstrap
- 🧍‍♀️ Personalización con nombre del jugador
- 🎯 Sistema de puntaje y niveles
- ☠️ Condición de derrota por puntos
- 🏆 Mensaje de victoria

---

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3 (via Bootstrap 5)
- JavaScript Vanilla

---

## 💬 Autoría

Creado con 💖 por Rommy Bejar como parte de un ejercicio individual para el bootcamp.  
Inspirado en la lógica, la belleza del lenguaje y el poder de la palabra.

---

## 🚀 Puedes probarlo en línea

> https://ae2-abpgame.vercel.app/


📝 Reflexión

¿Cómo influyó el scope de las variables en el diseño de tu función?

El scope fue fundamental para que las funciones pudieran acceder al estado actual del juego 
(nombre, puntos, nivel). Definí el objeto jugador en un ámbito global para que las funciones 
responder(), iniciarJuego() y nuevaPalabra() pudieran modificarlo directamente. Así logré 
mantener la coherencia del puntaje y el nivel a lo largo del flujo del juego.

¿Cuál fue el operador más útil y por qué?
El operador ++ fue el más útil porque me permitió incrementar el puntaje y el nivel del jugador 
de forma simple y clara. Además, utilicé % para detectar múltiplos de 5 y subir de nivel, lo 
cual ayudó a crear una lógica de progreso sencilla.

¿En qué parte del código implementaste una validación para manejar un caso límite?
Una validación clave está en iniciarJuego(), donde impido que el jugador comience sin ingresar 
su nombre. También manejé el caso límite de puntaje igual o menor a cero, lo cual detiene el 
juego y muestra un mensaje de derrota. Ambas condiciones evitan errores y mejoran la experiencia 
del usuario.

---

