var boton_sonido;
var reproduciendo=true;
function ejecutar(){

	boton_sonido =document.getElementById('controlsonido');
	boton_sonido.onclick = soundfunction;

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