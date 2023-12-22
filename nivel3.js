function LevelThree() {
    alert("Has superado exitosamente el nivel 2, ahora estamos en el nivel 3"); 
    let options = [
        "a) Carrera de drag", 
        "b) Carrera de Endurance", 
        "c) Carrera de circuito", 
    ]; 
    let correctAnswer = "b";
     let  carrerQuestion = prompt("¿En qué tipo de carrera se destaca por su larga duración y resistencia?\n" + options.join("\n"));

     if (carrerQuestion !== null) {
        if (correctAnswer.toLocaleLowerCase() === correctAnswer) {
            alert("¡Correcto! Las carreras de Endurance son conocidas por su larga duración y resistencia."); 
            alert("Estas listo para avanzar al nivel 4."); 
            startinLevelFour(); 
        } else {
            alert("Incorrecto. Las carreras de Endurance son las que se destacan por su larga duración y resistencia.");
        }
     } else {
        alert("No proporcionaste una respuesta. Intentémoslo de nuevo más tarde.")
     }
}
LevelThree(); 
