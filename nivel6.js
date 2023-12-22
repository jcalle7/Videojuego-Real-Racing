function LevelSix() {
    alert("Ahoras estas en el nivel 6"); 
    let drivingOptions = [
        "a) Skid Control", 
        "b) Hydroplaning Asist",
        "c) Rain traction System", 
    ]; 

    let correctAnswer = "a"; 

    let questionLevelSix = prompt("Conducir bajo la lluvia presenta desafíos únicos. ¿Cuál es una característica que ayuda a mantener el control del auto en condiciones de lluvia?\n" + drivingOptions.join("\n"));
    if (questionLevelSix !== null) {
        if(questionLevelSix.toLocaleLowerCase() === correctAnswer) {
            alert("¡Correcto! Skid Control es una característica que ayuda a mantener el control del auto en condiciones de lluvia.");
            alert("Estas listo para pasar al nivel 7");  
            startingLevelSix(); 
        } else {
            alert("Incorrecto. Skid Control es una característica diseñada para ayudar a mantener el control en condiciones de lluvia.");
        }
    } else {
        alert("No proporcionaste una respuesta. ¡Intentémoslo de nuevo más tarde!"); 
    }
}  
LevelSix(); 
