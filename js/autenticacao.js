//inputs
var email = $("#nome").val();
var senha = $("#senha").val();


//Autenticar
function logar(){
    if (email === "admin" && senha === "123") {
        alert("logado com sucesso !")
        window.location.href("../index.html")
    }
    else console.log("werro")
    console.log(email, senha);
}



    
    
    

      
 