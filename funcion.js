var nombre = prompt('Hola!! Ingrese su nombre por favor!')
	alert(' Bienvenid@ a Cafe Buenos Aires ' + nombre + ', esperamos que andes bien!! ')
	


var fondo = document.getElementsByTagName ('body')
fondo[0].style.backgroundColor = '#B29D7E '


var titulos = document.getElementsByTagName ('h2')

for (var i = 0; i < titulos.length; i++) {
	titulos[i].style.fontFamily = 'Arial'
}


