function LevelTen() {
    alert("Felicidades! Has llegado al último nivel, te deseamos lo mejor."); 
    let optionLevelTen = [
        "a) Turbocharged Brake System",
        "b) Advanced Gear Ratio Calculator",
        "c) Fuel Injection Efficiency Monitor",
        "d) Power-to-Weight Optimization Algorithm"
    ]; 

    let answerLevelTen = "d"; 

    let questionLevelTen = prompt("En el ajuste de rendimiento, ¿cuál de las siguientes características ayuda a optimizar la relación potencia-peso de un auto de carreras?\n" + optionLevelTen.join("\n"));
    if (questionLevelTen !== null) {
        if (questionLevelTen.toLocaleLowerCase() === answerLevelTen) {
            alert("¡Correcto! El Power-to-Weight Optimization Algorithm ayuda a optimizar la relación potencia-peso de un auto de carreras.");
            let maximunSpeed = 300; // Velocidad máxima en km/h
            let autoWeigth = 600; // Peso del auto en kg
            let motorPower = maximunSpeed * (autoWeigth / 2);

            alert("Como ejemplo, la potencia del motor podría ser: " + motorPower.toFixed(2) + " HP.");
            alert("Felicidades has completado todos los niveles."); 
            startingLevelOne(); 
            
        } else {
            alert("Incorrecto. En el ajuste de rendimiento, el Power-to-Weight Optimization Algorithm es clave para optimizar la relación potencia-peso."); 
        }
    } else {
        alert("No proporcionaste una respuesta. ¡Intentémoslo de nuevo más tarde!"); 
    }
}
LevelTen(); 
