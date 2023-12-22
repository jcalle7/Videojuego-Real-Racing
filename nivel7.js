function LevelSeven() {
    alert("Ahora estás en el nivel 7, suerte!"); 
    let asphaltRaces = [
        "a) Asphalt Grip Enhancement",
        "b) High-Speed Cornering System",
        "c) Track Surface Traction Control",
    ];

    let answerAsphalt = "c"; 

    let questionLevelSeven = prompt("En carreras de pista de asfalto, ¿cuál de las siguientes características proporciona un control adicional sobre la superficie de la pista?\n" + asphaltRaces.join("\n"));
    if (questionLevelSeven !== null) {
        if (questionLevelSeven.toLocaleLowerCase() === answerAsphalt) {
            alert("¡Correcto! El Track Surface Traction Control proporciona control adicional en carreras de pista de asfalto."); 
            alert("Estás listo para pasar al nivel 8"); 
            startinLevelEigth(); 
        } else {
            alert("Incorrecto. En carreras de pista de asfalto, el Track Surface Traction Control es esencial para un buen control.");
        }
    } else {
        alert("No proporcionaste una respuesta. ¡Intentémoslo de nuevo más tarde!"); 
    }
}
LevelSeven(); 
