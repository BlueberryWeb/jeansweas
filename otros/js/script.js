/*COLLAPSE CATEGORIAS*/
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
/*TERMINA COLLAPSE DE CATEGORIAS */
//CAMBIAR IMAGEN EN EL HOVER DE LOS PRODUCTOS
/*DETALLE */
window.addEventListener('load', detalle, false);
function detalle() {      
    var imagen = document.getElementById('detalle');
    imagen.addEventListener('mouseover', peligro_detalle, false);
    imagen.addEventListener('mouseout', restaurar_detalle, false);
}
function restaurar_detalle(){
    var imagen = document.getElementById('detalle').src = "img/icono-ver-hover.png";
}
function peligro_detalle() {
    var imagen = document.getElementById('detalle').src = "img/icono-ver.gif";
}
/*WHISLIST*/
window.addEventListener('load', fav, false);
function fav() {      
    var imagen = document.getElementById('fav');
    imagen.addEventListener('mouseover', peligro_fav, false);
    imagen.addEventListener('mouseout', restaurar_fav, false);
}
function restaurar_fav(){
    var imagen = document.getElementById('fav').src = "img/icono-fav.png";
}
function peligro_fav() {
    var imagen = document.getElementById('fav').src = "img/icono-Wishlist.gif";
}
/*CARRITO */
window.addEventListener('load', carrito, false);
function carrito() {      
    var imagen = document.getElementById('carrito');
    imagen.addEventListener('mouseover', peligro_carrito, false);
    imagen.addEventListener('mouseout', restaurar_carrito, false);
}
function restaurar_carrito(){
    var imagen = document.getElementById('carrito').src = "img/icono-carrito-hover.png";
}
function peligro_carrito() {
    var imagen = document.getElementById('carrito').src = "img/icono-Carrito.gif";
}