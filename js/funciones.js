// Muestra/Oculta un elemento
function mostrar(iter){
	$(iter).toggle("slow");
}

// Recarga la página con el idioma seleccionado
function SetIdioma(val){
	//alert(location.href);
	location.href = "index.php?lang=" + val;
}