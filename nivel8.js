function LevelEigth() {
    alert("Actualmente estás en el nivel 8, suerte!"); 
    let raceTeam = [
        "a) Drafting Assistance System",
        "b) Team Communication Module",
        "c) Tactical Maneuvering Radar",
    ]; 

    let answerRace = "a"; 

    let questionLeveEigth = prompt("En carreras de equipo, ¿cuál de las siguientes características ayuda a los pilotos a trabajar juntos estratégicamente y mejorar la eficiencia?\n" + raceTeam.join("\n"));
    if (questionLeveEigth !== null) {
        if (questionLeveEigth.toLocaleLowerCase() === answerRace) {
            alert("¡Correcto! El Drafting Assistance System ayuda a los pilotos a trabajar estratégicamente en carreras de equipo."); 
            alert("Estas listo para pasar al nivel 9"); 
            startinLevelNine(); 
        } else {
            alert("Incorrecto. En carreras de equipo, el Drafting Assistance System es crucial para mejorar la eficiencia estratégica."); 
        }
    } else {
        alert("No proporcionaste una respuesta. ¡Intentémoslo de nuevo más tarde!"); 
    }

}
LevelEigth(); 
