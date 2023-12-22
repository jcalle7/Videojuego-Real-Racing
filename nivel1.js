function LevelOne () {
    alert("Estas iniciando el nivel 1 de Real Racing 3"); 
    alert("Esto solo es un entrenamiento breve, para que te familiarices con el juego"); 
    let carModels = [
        "Nissan GTR",
        "Audi TT 3.0",
        "Ford Focus",
        "Porsche 911",
        "Nissan Skyline",
        "Ferrari Enzo",
    ];

    let car = prompt("Escoge tu auto de carreras con el que completarás este nivel. Modelos disponibles:\n" + carModels.join(", "));
    if (car) {
        alert("Excelente elección. ¡Que tengas una carrera emocionante con tu " + car + "!")
    } else {
        alert("No seleccionaste un auto. ¡Buena suerte la próxima vez"); 
    }

    alert("Ahora escoge una pista para el entrenamiento"); 
    let options = [
        "a) Autódromo Nacional",
        "b) Buggati Circuit",
        "c) Circuito de Mónaco",
      ];
      let userInput = prompt(options.join("\n"));
      
      if (userInput) {
        switch (userInput.toLowerCase()) {
          case 'a':
            alert("Has seleccionado Autódromo Nacional");

            break;
          case 'b':
            alert("Has seleccionado Buggati Circuit");

            break;
          case 'c':
            alert("Has seleccionado Circuito de Mónaco");

            break;
          default:
            alert("Selección no válida");

        }
      } else {
        alert("No has ingresado ninguna opción");
    }

let gamePlay = prompt("Escoge tu modo de jugabilidad: Fácil, Intermedio, Difícil");

if (gamePlay !== null) {
    alert("Has elegido el modo de jugabilidad: " + gamePlay);
} else {
    alert("No seleccionaste un modo de jugabilidad. ¡Buena suerte la próxima vez!");
}
alert("Está todo listo para tu entrenamiento, recuerda que eres novato, repasemos conceptos básicos de conducción"); 
alert("Recuerda que un auto de carreras es ligero, y que va más sujeto al suelo, el volante, tablero y asientos"); 

let optionsAnswer = [
    "a) girando la llave", 
    "b) girando la llave, y que el auto esté en neutro", 
    "c) Aplastando el acelerador", 
];
let correctAnswer = "b"; 
let questionTraining = prompt("¿Cuál es la forma correcta en la que encenderías un auto de carreras?\n" + optionsAnswer.join("\n")); 
if (questionTraining !== null) {
    if (questionTraining.toLowerCase() === correctAnswer) {
        alert("¡Correcto! Has demostrado conocimiento sobre cómo encender un auto de carreras. Puedes pasar al siguiente nivel");
        startinLevelTwo(); 
    } else {
        alert("Incorrecto. Parece que necesitas más entrenamiento en el encendido de autos de carreras");
        alert("Intentalo de nuevo"); 
    }
} else {
    alert("No proporcionaste una respuesta. ¡Intentémoslo de nuevo más tarde!");
}
} 
LevelOne();