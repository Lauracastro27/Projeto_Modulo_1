//fase: oraculo5
var mensagem;

        function oraculo5() {

        while(mensagem != 1 || mensagem != 2) {

        mensagem = prompt("Oque opode derrotar o monstro? \n 1- Poço com eletricidade\n 2 - Gel Explosivo");

        if (mensagem == 1) 
        {
            window.location.href="../Oraculo/OraculoGameOver5.html";  
            break;
        }
        else if (mensagem == 2)
        {
            window.location.href="../Oraculo/OraculoFinal.html";
            break;
        }
        else 
        {
            alert(`Digite 1 ou 2`);
            return oraculo5();
        }
    }

}