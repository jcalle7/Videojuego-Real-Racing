function LevelNine() {
    alert("Actualmente estás en el nivel 9, suerte!"); 
    let optionLevelNine = [
        "a) Top Speed Calculation Module",
        "b) Fuel Efficiency Optimization System",
        "c) Lap Time Prediction Algorithm",
    ]; 

    let answerLevelNine = "c"; 

    let questionLevelNine = prompt("En carreras de alta competición, ¿cuál de las siguientes características utiliza un algoritmo para predecir el tiempo que tomará completar una vuelta?\n" + optionLevelNine.join("\n"));
    if (questionLevelNine !== null) {
        if (questionLevelNine.toLocaleLowerCase() === answerLevelNine) {
            alert("¡Correcto! La Lap Time Prediction Algorithm utiliza un algoritmo para prever el tiempo de vuelta con precisión."); 
            alert("Has llegado casi al último nivel, solo te falta completar el nivel 10, buena suerte"); 
            startingLevelTen(); 
        } else {
            alert("Incorrecto. En carreras de alta competición, la Lap Time Prediction Algorithm es esencial para la estrategia.");
        }
    } else {
        alert("No proporcionaste una respuesta. ¡Intentémoslo de nuevo más tarde!"); 
    }

}
LevelNine(); 
