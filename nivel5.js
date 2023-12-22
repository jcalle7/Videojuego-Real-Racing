function LevelFive () {
    alert("Ahora estás en el nivel 5"); 
let optionQuestions = [
    "a) Turbo Bost",
    "b) Velocity Burst", 
    "c) Nitro Impulse", 
]; 

let reply = "c"; 

let questionLevelFive = prompt("Para aumentar la velocidad en las rectas. ¿Cuál de las siguientes opciones es la correcta?\n" + optionQuestions.join("\n"));
if (questionLevelFive !== null) {
    if (questionLevelFive.toLocaleLowerCase() === reply) {
        alert("¡Correcto! El Nitro Impulse es una característica común para aumentar la velocidad en las rectas."); 
        startinLevelFive(); 
    } else {
        alert("Incorrecto. Muchos autos de carreras utilizan Nitro Impulse para aumentar la velocidad en las rectas."); 
    }
} else {
    alert("No proporcionaste una respuesta. ¡Intentémoslo de nuevo más tarde!"); 
}
}  
LevelFive(); 
