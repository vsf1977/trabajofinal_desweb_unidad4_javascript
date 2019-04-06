var decimal = false;
var limite = 8;
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
    if (!(isNaN(tecla)) || tecla == "punto")
    {
        if (pantalla.innerHTML.length < limite)
        {
            if (tecla == "punto")
            {
                if (!decimal)
                {
                    tecla = ".";
                    decimal = true;
                    limite = 9;
                }
                else
                {
                    tecla = "";
                }
            }

            if (pantalla.innerHTML == "0")             
            {
                if (tecla !=="0")
                {
                    if (decimal)
                    {
                        pantalla.innerHTML = pantalla.innerHTML +  tecla;
                    }
                    else
                    {
                        pantalla.innerHTML = tecla;
                    }
                }
            }
            else
            {
                pantalla.innerHTML = pantalla.innerHTML +  tecla;
            }
        }
    }
}