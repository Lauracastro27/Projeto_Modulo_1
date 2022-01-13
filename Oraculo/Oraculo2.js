//fase: oraculo2
var mensagem;

        function oraculo2() {

        while(mensagem != 1 || mensagem != 2) {

        mensagem = prompt(" Por qual entrada ele vai? \n 1 - Porta   \n 2 - Janela");

        if (mensagem == 1) 
        {
            window.location.href="../Oraculo/OraculoGameOver2.html"  
            break;
        }
        else if (mensagem == 2)
        {
            window.location.href="../Oraculo/Oraculo3.html";
            break;
        }
        else 
        {
            alert(`Digite 1 ou 2`);
            return oraculo2();
        }
    }

}