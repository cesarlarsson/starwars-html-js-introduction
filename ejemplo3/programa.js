var boton_sonido;
var reproduciendo=true;
function ejecutar(){
	//CONTROL SONIDO DE FONDO
	boton_sonido =document.getElementById('controlsonido');
	boton_sonido.onclick = soundfunction;

	//CONTROL DE SONIDO PERSONSAJES
	btn1 =document.getElementById('p1');
	btn1.onclick = reproducirsonido;

	btn2 =document.getElementById('p2');
	btn2.onclick = reproducirsonido;

	btn3 =document.getElementById('p3');
	btn3.onclick = reproducirsonido;

	btn4 =document.getElementById('p4');
	btn4.onclick = reproducirsonido;

	btn5 =document.getElementById('p5');
	btn5.onclick = reproducirsonido;
}


function soundfunction(){

	if(reproduciendo==true){
		document.getElementById('musica').pause();
		boton_sonido.innerHTML ="Reproducir"; 
		reproduciendo=false;
	}else{
		document.getElementById('musica').play();
		boton_sonido.innerHTML ="Pausar"; 
		reproduciendo=true;
	}

}

function reproducirsonido(){

 	var personajeid;
    if (typeof arguments[0] === 'string') {
        personajeid = arguments[0];
    } else {
        personajeid = this.getAttribute('id');
    }
	var audio;
	switch(personajeid){
		case "p1":
			audio = new Audio('sonidos/personajes/chewbacca.mp3');
			audio.play();
		break;
		case "p2":
			audio = new Audio('sonidos/personajes/darth.mp3');
			audio.play();
		break;
		case "p3":
			audio = new Audio('sonidos/personajes/hansolo.mp3');
			audio.play();
		break;
		case "p4":
			audio = new Audio('sonidos/personajes/r2.mp3');
			audio.play();
		break;
		case "p5":
			audio = new Audio('sonidos/personajes/jedi.mp3');
			audio.play();
		break;
	}

}