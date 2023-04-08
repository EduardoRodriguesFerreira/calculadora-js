function calculadora(tipo,valor){

if(tipo ==='acao'){

    if(valor ==='C'){

        document.getElementById("resultado").value =""
      

    }
    else if(valor == "+" || valor == "-" || valor=="/" || valor=='*' || valor == '.'){

        document.getElementById("resultado").value += valor

    }
    else if(valor =="="){
        var v = eval(document.getElementById("resultado").value) 
  
    document.getElementById("resultado").value = v

        
    }
  


}
if(tipo === 'valor'){

    document.getElementById("resultado").value += valor

    
}



}