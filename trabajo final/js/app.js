var Calculadora = 
{
    decimal : false,
    limite : 8, decimal : false,
    limite : 8,
    negativo : false,
    numero : 0,
    cont : 0,
    i : 0,
    sw : false,
    temp : "",
    operacionactual : "",
    ultimaoperacion : "",
    primernumero : 0,
    segundonumero : 0,
    resultadofinal : 0,
    resultadointermedio : 0,
    funciones : ["on","dividido", "por", "menos","mas","igual"],
    calculos : ["mas", "menos", "por","dividido"],
    numeros : ["1", "2", "3", "4", "5","6","7","8","9","0","sign","punto","."],    
    tecla : document.getElementsByClassName("teclado")[0],
    pantalla : document.getElementById('display'),

    init: function() 
    {
      this.eventos()
    },

    eventos: function() 
    {
      this.tecla.addEventListener('click', function()       
      {

        if (Calculadora.numeros.indexOf(event.target.id) >= 0)
        {
            Calculadora.escribir_en_pantalla(event.target.id)
        }
        
        if (Calculadora.funciones.indexOf(event.target.id) >= 0)
        {
            Calculadora.operaciones(event.target.id)
        }

      })

      this.tecla.addEventListener('mousedown', function()       
      {
        Calculadora.efectohundir(event.target)     
      })

      this.tecla.addEventListener('mouseup', function()       
      {
        Calculadora.efectolevantar(event.target)     
      })

    },
    
    escribir_en_pantalla: function(key) 
    {        
        if (key == "punto")
        {
            if (!this.decimal)
            {
                    this.decimal = true;
                this.limite++;
                key=".";
            }
            else
            {
                key="";
            }
        }
        if (key == "sign")
        {            
            if (this.pantalla.innerHTML !== "0")
            {
                if (!this.negativo)
                {
                    this.negativo = true;                    
                }
                else
                {
                    this.negativo = false;                    
                }               
            }
            key="";
        }        
        if (this.numeros.indexOf(key) >= 0 && this.temp.length < 8)
        {
            if (this.pantalla.innerHTML == "0" && this.numeros.indexOf(key) <= 9)
            {
                this.pantalla.innerHTML = key;
            }
            else
            {
                this.pantalla.innerHTML = this.pantalla.innerHTML + key
            }
        }
        this.numero = this.pantalla.innerHTML;
        if ((this.negativo && this.numero > 0) || (!this.negativo && this.numero < 0))
        {
            this.numero *= - 1
        }
        this.pantalla.innerHTML = this.numero
        this.temp =  this.pantalla.innerHTML.replace("-","")        
        this.temp =  this.temp.replace(".","")
    },

    inicializar_pantalla : function()
    {
        this.decimal = false
        this.limite = 8
        this.negativo = false
        this.numero = 0
        this.temp = ""
        this.pantalla.innerHTML = "0"
    },

    inicializar_calculos : function()
    {
        this.operacionactual = ""
        this.ultimaoperacion = ""
        this.primernumero = 0
        this.segundonumero = 0
        this.resultadofinal = 0
        this.resultadointermedio = 0
        this.temp = ""
        this.sw = false
    },

    verificar_longitud : function(cadena)
    {
        verif = ""      
        verif =  cadena.toString().replace("-","")        
        verif =  verif.toString().replace(".","")     
        if (verif.length < 9) 
        {
            return true
        }
        else
        {
            return false
        }
    },

    operaciones : function(key)
    {
        if (key == "on")
        {
            Calculadora.inicializar_calculos()
            Calculadora.inicializar_pantalla()
        }

        if (Calculadora.calculos.indexOf(key) >= 0)
        {
            //sw=false;
            if (this.ultimaoperacion == "")
            {
                this.ultimaoperacion = key
                this.primernumero =  this.pantalla.innerHTML
                this.resultadointermedio = this.primernumero
                Calculadora.inicializar_pantalla()                
            }            
            else
            {              
                if (this.segundonumero !== 0)
                {
                    this.primernumero = this.resultadointermedio
                }
                this.segundonumero = this.pantalla.innerHTML                
                switch (this.ultimaoperacion)
                {
                    case "mas":
                        this.resultadointermedio = Number(this.primernumero) + Number(this.segundonumero);
                        break
                    case "menos":
                        this.resultadointermedio = Number(this.primernumero) - Number(this.segundonumero);
                        break
                    case "por":
                        this.resultadointermedio = Number(this.primernumero) * Number(this.segundonumero);
                        break
                    case "dividido":
                        this.resultadointermedio = Number(this.primernumero) / Number(this.segundonumero);
                        break            
                }                            
                this.ultimaoperacion = key
                this.operacionactual = key
                Calculadora.inicializar_pantalla()
            }
        } 

        if (key == "igual")        
        {
            if (this.operacionactual == "")
            {
                if (this.segundonumero !== 0)
                {
                    this.primernumero = this.pantalla.innerHTML
                }
                else
                {
                    this.segundonumero = this.pantalla.innerHTML                
                }
            }
            else
            {
                this.primernumero = this.resultadointermedio
                this.segundonumero = this.pantalla.innerHTML                  
            }
            
            switch (this.ultimaoperacion)
            {
                case "mas":
                    this.resultadofinal = Number(this.primernumero) + Number(this.segundonumero);
                    break
                case "menos":
                    this.resultadofinal = Number(this.primernumero) - Number(this.segundonumero);
                    break
                case "por":
                    this.resultadofinal = Number(this.primernumero) * Number(this.segundonumero);
                    break
                case "dividido":
                    this.resultadofinal = Number(this.primernumero) / Number(this.segundonumero);
                    break     
            }
            if (Calculadora.verificar_longitud(this.resultadofinal))
            {
                this.pantalla.innerHTML = this.resultadofinal;
                if (!this.sw)   
                {
                    this.resultadointermedio =  this.segundonumero;
                    this.sw =  true
                }
            }
            else                
            {   
                this.temp = ""
                this.cont = 0
                this.i = 0
                while (this.cont < 8)
                {
                    if (this.resultadofinal.toString().substring(this.i,this.i+1) !== "-" && this.resultadofinal.toString().substring(this.i,this.i+1) !== ".")
                    {
                        this.cont++
                    }
                    this.temp = this.temp + this.resultadofinal.toString().substring(this.i,this.i+1)                  
                    this.i++
                }             
                this.pantalla.innerHTML = this.temp
                alert("El resultado sobrepasó los 8 caracteres")
            }
        } 
    },

    efectohundir : function(key)
    {
        if (key.id.length > 0 )
        {
            key.style.transform = "scale(0.9)"
        }        
    },

    
    efectolevantar : function(key)
    {
        if (key.id.length > 0 )
        {
            key.style.transform = "scale(1)"
        }
    }

}
Calculadora.init()
