 function LevelFour() { 
    let optionsQuestions = [
        "a) Pista Oval",
        "b) Pista de Rally",
        "c) Circuito Urbano",
        "d) Carril Rápido",
    ];
    
    let answerQuestion = "b";
    
    let questionsOptions = prompt("¿En qué tipo de pista encontrarías terrenos variados como tierra, grava y asfalto?\n" + optionsQuestions.join("\n"));
    
    if (questionsOptions !== null) {
        if (questionsOptions.toLowerCase() === answerQuestion) {
            alert("¡Correcto! Las pistas de Rally presentan terrenos variados como tierra, grava y asfalto.");
            alert("Estás listo para pasar al nivel 5"); 
            startinLevelFive(); 
        } else {
            alert("Incorrecto. En pistas de Rally encontrarías terrenos variados como tierra, grava y asfalto.");
        }
    } else {
        alert("No proporcionaste una respuesta. ¡Intentémoslo de nuevo más tarde!");
    }
}
LevelFour(); 
