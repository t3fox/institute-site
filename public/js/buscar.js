
function buscar(){
	var busqueda = document.getElementById('busquedaContenido').value;
	console.log(busqueda);

	var noespacios = busqueda.replace(/\s+/g, "+"); 

	console.log(noespacios);

	 window.open("https://www.google.com/search?q=" + noespacios);

	 //window.open("https://www.youtube.com/results?search_query=" + noespacios)	;
	
}