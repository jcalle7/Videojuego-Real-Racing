function Home() {
    alert("Bienvenidos a Real Racing 3");
    let name = prompt("Ingresa un nombre con el que te gustaría que te llamen:");
    alert("Es un gusto tenerte por aquí: " + name);

    alert("Real Racing 3 te da la bienvenida a este increíble mundo."); 

    let answer = confirm("¿Deseas continuar?") 
    if (answer) {
        alert("¡Genial!.");
    } else {
        alert("¡Entendido! Si decides regresar, siempre serás bienvenido.");
    }

}
 Home(); 