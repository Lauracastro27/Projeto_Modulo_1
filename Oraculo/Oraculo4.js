//fase: oraculo4
var mensagem;

        function oraculo4() {

        while(mensagem != 1 || mensagem != 2) {

        mensagem = prompt("Onde procurar primeiro? \n 1 - Instalação Medica \n 2 - Centro de Visitas");

        if (mensagem == 1) 
        {
            window.location.href="../Oraculo/Oraculo5.html"  
            break;
        }
        else if (mensagem == 2)
        {
            window.location.href="../Oraculo/OraculoGameOver4.html";
            break;
        }
        else 
        {
            alert(`Digite 1 ou 2`);
            return oraculo4();
        }
    }

}