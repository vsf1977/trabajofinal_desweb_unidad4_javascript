var decimal = false;
var limite = 8;
var negativo = false;
var indice = 10;
var numero = 0;
var funciones = ["on","dividido", "por", "menos","mas","igual"];
var numeros = ["1", "2", "3", "4", "5","6","7","8","9","0","sign","punto"];
document.getElementsByClassName("teclado")[0].onclick = function()
{
    var tecla = event.target.id;
    var pantalla = document.getElementById("display");
    var operacionactual = "";
    var ultimaoperacion = "";
    var primernumero = "";
    var segundonumero = "";
    var resultadofinal = "";
    var resultadointermedio = "";
    if (numeros.indexOf(tecla) >= 0)
    {
        if (tecla == "punto")
        {
            if (!decimal)
            {
                decimal = true;
                limite++;
                tecla=".";
            }
            else
            {
                tecla="";
            }
        }
        if (tecla == "sign")
        {
            if (!negativo)
            {
                negativo = true;
                limite++;
            }
            else
            {
                negativo = false;
            }
            tecla="";
        }
        if (pantalla.innerHTML.length < 15)
        {
            if (pantalla.innerHTML == "0" && (!isNaN(tecla)))
            {
                pantalla.innerHTML = tecla;
            }
            else
            {
                pantalla.innerHTML = pantalla.innerHTML + tecla;
            }
            numero = pantalla.innerHTML;
            if ((negativo && numero > 0) || (!negativo && numero < 0))
            {
                numero = numero * (- 1);
            }
            pantalla.innerHTML = numero;
            alert(limite);
        }
    }
}
document.getElementsByClassName("teclado")[0].onmousedown = function()
{
    var tecla = event.target;
    if (tecla.id.length > 0 )
    {
        tecla.style.transform = "scale(0.9)";
    }
}
document.getElementsByClassName("teclado")[0].onmouseup = function()
{
    var tecla = event.target;
    if (tecla.id.length > 0 )
    {
        tecla.style.transform = "scale(1)";
    }
}