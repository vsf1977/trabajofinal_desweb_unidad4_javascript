var decimal = false;
var limite = 8;
var negativo = false;
var numero = 0;
var temp = "";
var operacionactual = "";
var ultimaoperacion = "";
var primernumero = 0
var segundonumero = 0
var resultadofinal = 0
var resultadointermedio = 0
var funciones = ["on","dividido", "por", "menos","mas","igual"];
var operaciones = ["mas", "menos", "por","dividido"];
var numeros = ["1", "2", "3", "4", "5","6","7","8","9","0","sign","punto","."];
var pantalla = document.getElementById("display");



function inicializar_pantalla()
{
    decimal = false;
    limite = 8;
    negativo = false;
    numero = 0;
    temp = "";
    pantalla.innerHTML = "0";
}

function inicializar_calculos ()
{
    operacionactual = "";
    ultimaoperacion = "";
    primernumero = 0;
    segundonumero = 0;
    resultadofinal = 0;
    resultadointermedio = 0;
    temp = "";
}

function escribir_en_pantalla(key)
{
    if (key == "punto")
    {
        if (!decimal)
        {
            decimal = true;
            limite++;
            key=".";
        }
        else
        {
            key="";
        }
    }
    if (key == "sign")
    {            
        if (pantalla.innerHTML !== "0")
        {
            if (!negativo)
            {
                negativo = true;                    
            }
            else
            {
                negativo = false;                    
            }               
        }
        key="";
    }        
    if (numeros.indexOf(key) >= 0 && temp.length < 8)
    {
        if (pantalla.innerHTML == "0" && numeros.indexOf(key) <= 9)
        {
            pantalla.innerHTML = key;
        }
        else
        {
            pantalla.innerHTML = pantalla.innerHTML + key;
        }
    }
    numero = pantalla.innerHTML;
    if ((negativo && numero > 0) || (!negativo && numero < 0))
    {
        numero = numero * (- 1);
    }
    pantalla.innerHTML = numero;   
    temp =  pantalla.innerHTML.replace("-","");        
    temp =  temp.replace(".","");        
}



document.getElementsByClassName("teclado")[0].onclick = function()
{
    var tecla = event.target.id;
    if (numeros.indexOf(tecla) >= 0)
    {
       escribir_en_pantalla(tecla);
    }
    if (funciones.indexOf(tecla) >= 0)
    {
        if (tecla == "on")
        {
            inicializar_calculos();
            inicializar_pantalla();
        }

        if (operaciones.indexOf(tecla) >= 0)
        {
            if (ultimaoperacion == "")
            {
                ultimaoperacion = tecla;
                primernumero =  pantalla.innerHTML;
                resultadointermedio = primernumero;
                inicializar_pantalla();                
            }            
            else
            {              
                segundonumero = pantalla.innerHTML;
                switch (ultimaoperacion)
                {
                    case "mas":
                        resultadointermedio = Number(primernumero) + Number(segundonumero);
                        break;
                    case "menos":
                        resultadointermedio = Number(primernumero) - Number(segundonumero);
                        break;
                    case "por":
                        resultadointermedio = Number(primernumero) * Number(segundonumero);
                        break;
                    case "dividido":
                        resultadointermedio = Number(primernumero) + Number(segundonumero);
                        break;
                }
                primernumero = segundonumero;                
                ultimaoperacion = tecla;
                operacionactual = tecla;
                inicializar_pantalla();
            }
        } 

        if (tecla == "igual")
        {
            segundonumero =  pantalla.innerHTML;
            switch (ultimaoperacion)
            {
                case "mas":
                    resultadointermedio = Number(primernumero) + Number(segundonumero);
                    break;
                case "menos":
                    resultadointermedio = Number(primernumero) - Number(segundonumero);
                    break;
                case "por":
                    resultadointermedio = Number(primernumero) * Number(segundonumero);
                    break;
                case "dividido":
                    resultadointermedio = Number(primernumero) + Number(segundonumero);
                    break;
            }
            primernumero = segundonumero;                
            operacionactual = "igual";
            pantalla.innerHTML = resultadointermedio;
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
