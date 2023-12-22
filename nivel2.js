function LevelTwo() {
    alert("Has superado exitosamente el nivel 1, continuemos con el nivel 2.");  
    alert("Parece que ya estas listo para una práctica en curvas.");  
    let correctOption = [
        "a) la línea interior",
        "b) la línea de afuera", 
        "c) la línea del medio", 
    ];
    let correct = "a"; 
    let questionCareer = prompt("En una carrera, ¿cuál es la mejor línea para tomar en una curva cerrada?\n" + correctOption.join("\n"));
    if (questionCareer !== null) {
        if (questionCareer.toLocaleLowerCase() === correct) {
            alert("!Estas en lo correcto¡ Elegir la línea interior en una curva cerrada es fundamental para mantener la velocidad."); 
        } else {
            alert("Repuesta incorrecta. La mejor línea en una curva cerrada es la línea interior."); 
        }
    } else {
        alert("No proporcionaste una respuesta. ¡Intentémoslo de nuevo más tarde!"); 
    }

    let options = [
        "a) Una técnica de frenado",
        "b) Una técnica para ahorrar mas gasolina", 
        "c) Una técnica de cambio de marchas y frenado al mismo tiempo", 
    ]; 
    let correctAnswer = "c"; 
    let technicalCuestion = prompt("¿Qué significa 'punta-tacón' en el contexto de las carreras? \n" + options.join("\n")); 
    
    if (technicalCuestion !== null) {
        if (technicalCuestion.toLocaleLowerCase() === correctAnswer) {
            alert("¡Correcto! El 'punta-tacón' es una técnica avanzada de cambio de marchas y frenado al mismo tiempo."); 
            alert("Estas listo para el nivel 3."); 
            startingLevelThree(); 
        } else {
            alert("Incorrecto. En las carreras, 'punta-tacón' se refiere a una técnica de cambio de marchas y frenado simultáneo."); 
        }
    } else {
        alert("No proporcionaste una respuesta. ¡Intentémoslo de nuevo más tarde!"); 
    }

}
LevelTwo(); 
